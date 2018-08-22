import _Cache from 'async-disk-cache'
import fetch from 'node-fetch'
import URL from './url'
import dayjs from 'dayjs'

class Cache {
  constructor() {
    this.ready = false
  }

  open () {
    if (this.ready) return Promise.resolve()
    return fetchLastModified()
      .then(ISOString => {
        console.log('opened cache', ISOString)
        this.cache = new _Cache(ISOString)
      })
      .then(() => {
        this.ready = true
      })
  }

  has() {
    return this.cache.has.apply(this.cache, arguments)
  }

  get () {
    return this.cache.get.apply(this.cache, arguments)
  }

  set () {
    return this.cache.set.apply(this.cache, arguments)
  }

  remove () {
    return this.cache.remove.apply(this.cache, arguments)
  }

  clear () {
    return this.cache.clear.apply(this.cache, arguments)
  }

}

export default Cache

function _fetch (path) {
  return fetch(`${URL}${path}`)
    .then(res => res.json())
}

function fetchLastModified () {
  return Promise.all([
      _fetch(`/wp/v2/posts?orderby=modified`),
      _fetch(`/wp/v2/folds?orderby=modified`),
      _fetch(`/wp/v2/contributors?orderby=modified`),
      _fetch(`/wp/v2/media?orderby=modified`),
      _fetch(`/wp/v2/pages?orderby=modified`)
    ])
    .then(results => {
      let lastModified = dayjs(0)
      for (let result of results) {
        if (result.length && result[0].modified_gmt) {
          let modified = dayjs(`${result[0].modified_gmt}Z`)
          if (modified.isAfter(lastModified)) lastModified = modified
        }
      }
      return lastModified.toISOString()
    })
}
