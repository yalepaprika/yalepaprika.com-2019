import fetch from 'node-fetch';

const base = 'http://localhost/paprika/wp-json'

export default function (path) {
  return fetch(`${base}${path}`)
      .then(res => res.json())
}
