import { posts } from '../../../api'

export async function get(req, res, next) {
  return posts.list(true)
    .then(posts => res.json(posts))
    .catch(err => next(err))
}
