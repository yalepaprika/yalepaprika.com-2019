import { folds } from '../../api'

export async function get(req, res, next) {
  return folds.list(true)
    .then(folds => res.json(folds))
    .catch(err => next(err))
}
