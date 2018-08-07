import api from '../_api'

export async function get(req, res, next) {
  return api('/wp/v2/contributors')
    .then(contributors => {
      return res.json(contributors)
    })
    .catch(err => next(err))
}
