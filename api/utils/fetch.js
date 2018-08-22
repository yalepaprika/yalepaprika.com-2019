import fetch from 'node-fetch'
import { TaskQueue } from 'cwait'
import URL from './url'
import Cache from './cache'

const cache = new Cache()
const queue = new TaskQueue(Promise, 5);


function _cachedFetch (path) {
  console.log(path)
  return fetch(`${URL}${path}`)
    .then(res => res.text())
    .then(text => {
      return cache.set(path, text)
        .then(() => text)
    })
    .then(text => JSON.parse(text))

}

export default function (path) {
  return cache.open()
    .then(() => cache.has(path))
    .then(hit => {
      if (hit) {
        return cache.get(path)
          .then(entry => JSON.parse(entry.value))
      }
      return queue.wrap(_cachedFetch)(path)
    })
}
