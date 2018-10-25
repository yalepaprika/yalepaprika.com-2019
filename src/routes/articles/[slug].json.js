import { posts } from '../../../api'

export async function get(req, res, next) {
	const { slug } = req.params
  return posts.search(slug, true)
    .then(posts => {
      if (!posts.length) res.status(404).send('Not found')
      return res.json(posts[0])
    })
    .catch(err => next(err))
}

