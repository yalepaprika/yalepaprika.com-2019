import { folds } from '../../api'

export async function get(req, res, next) {
  return folds.mostRecent(true)
    .then(fold => res.json(fold))
    .catch(err => next(err))
}

