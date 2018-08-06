import fetch from 'node-fetch';

export async function get(req, res, err) {
  return fetch('http://159.89.34.209/wp-json/paprika/v1/home')
    .then(r => r.json())
    .then(folds => {
      if (!folds.length) res.status(404).send({ message: 'Not found' })
      return res.json(folds[0])
    })
    .catch(err => next(err))
}
