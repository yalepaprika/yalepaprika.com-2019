import fetch from 'node-fetch';

export async function get(req, res, err) {
  return fetch('http://159.89.34.209/wp-json/wp/v2/posts')
    .then(r => r.json())
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => next(err))
}
