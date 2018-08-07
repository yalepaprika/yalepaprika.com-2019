import api from '../_api'

export async function get(req, res, next) {
  return api('/wp/v2/folds')
    .then(folds => {
      return res.json(folds)
    })
    .catch(err => next(err))
}
