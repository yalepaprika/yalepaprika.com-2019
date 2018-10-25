import { fetch } from 'fetch-h2'
import { TaskQueue } from 'cwait'
import URL from './url'
import Cache from './cache'
import parseLinkHeader from 'parse-link-header'

const fetchPaginate = (url, options = {}, ongoingData) => {
  const {
    paginate = true,
    items = data => data,
    merge = (pageData, nextData) => [...items(pageData), ...(nextData || [])],
    parse = res => (res.ok && res.status !== 204 ? res.json() : res.text()),
    until,
    ...rest
  } = options

  return fetch(url, rest).then(async res => {
    const pageData = await parse(res)

    const nextOngoingData = merge(pageData, ongoingData)
    const untilOngoingData = Array.isArray(nextOngoingData)
      ? nextOngoingData.reverse()
      : untilOngoingData

    const untilResult = until && until(pageData, untilOngoingData, res)
    const isPromise = untilResult && untilResult.then
    const hitUntil = isPromise ? await untilResult : untilResult

    if (res.ok && paginate && !hitUntil) {
      if (res.headers) {
        const link = res.headers.get('link') || res.headers.get('Link')

        if (link) {
          const { next } = parseLinkHeader(link) || {}

          if (next) {
            const { data: nextData } = await fetchPaginate(
              next.url,
              options,
              nextOngoingData
            )

            const finalData = merge(pageData, nextData)

            return {
              res,
              data: finalData
            }
          }
        }
      }
    }

    return {
      res,
      data: items(pageData)
    }
  })
}

const cache = new Cache()
const queue = new TaskQueue(Promise, 5);


function _cachedFetch (path) {
  return fetch(`${URL}${path}`)
    .then(res => res.text())
    .then(text => {
      return cache.set(path, text)
        .then(() => text)
    })
    .then(text => JSON.parse(text))
}


function _cachedFetchPaginate (path) {
  return fetchPaginate(`${URL}${path}`)
    .then(({ data }) => {
      return cache.set(path, JSON.stringify(data))
        .then(() => data)
    })

}

export default function (path) {
  return cache.open()
    .then(() => cache.has(path))
    .then(hit => {
      if (hit) {
        return cache.get(path)
          .then(entry => JSON.parse(entry.value))
      }
      var paginate = (path.indexOf('per_page') !== -1)
      var _fetch = paginate ? _cachedFetchPaginate : _cachedFetch
      return queue.wrap(_fetch)(path)
    })
}
