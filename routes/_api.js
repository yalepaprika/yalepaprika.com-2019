import fetch from 'node-fetch';

const base = 'http://159.89.34.209/wp-json'

export default function (path) {
  return fetch(`${base}${path}`)
      .then(r => r.json())
}
