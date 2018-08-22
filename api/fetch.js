import fetch from 'node-fetch'
import { TaskQueue } from 'cwait'

const cache = {}
const queue = new TaskQueue(Promise, 5);

const URL = 'http://159.89.34.209/wp-json'

function _fetch (path) {
  return fetch(`${URL}${path}`)
    .then(res => res.text())
    .then(text => {
      cache[path] = text
      return text
    })
    .then(text => JSON.parse(text))
}

export default function (path) {
  if (cache[path]) return Promise.resolve(JSON.parse(cache[path]))
  return queue.wrap(_fetch)(path)
}
