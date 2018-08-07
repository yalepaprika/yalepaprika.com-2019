import api from '../_api'

export async function get(req, res, next) {
  return api('/wp/v2/posts')
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => next(err))
}
