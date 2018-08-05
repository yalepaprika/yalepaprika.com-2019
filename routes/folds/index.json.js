import fetch from 'node-fetch';

export async function get(req, res, err) {
  return fetch('http://159.89.34.209/wp-json/wp/v2/folds')
    .then(r => r.json())
    .then(folds => {
      return res.json(folds)
    })
    .catch(err => next(err))
}
