import { contributors } from '../../../api'

export async function get(req, res, next) {
  return contributors.list(true)
    .then(contributors => res.json(contributors))
    .catch(err => next(err))
}
