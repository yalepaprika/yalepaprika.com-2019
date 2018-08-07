import api from './_api'

export async function get(req, res, next) {
  return api('/paprika/v1/home')
    .then(folds => {
      if (!folds.length) res.status(404).send({ message: 'Not found' })
      return res.json(folds[0])
    })
    .catch(err => next(err))
}
