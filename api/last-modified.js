import fetch from 'node-fetch'
import URL from './utils/url'
import dayjs from 'dayjs'

function get () {
  return fetchLastModified()
}

export default {
  get: get
}

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
