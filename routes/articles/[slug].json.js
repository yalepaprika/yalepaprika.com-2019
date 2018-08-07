import api from '../_api'

export async function get(req, res, err) {
	const { slug } = req.params;
  return api(`/wp/v2/posts?slug=${slug}`)
    .then(posts => {
    	if (!posts.length) res.status(404).send({ message: 'Not found' })
      return res.json(posts[0])
    })
    .catch(err => next(err))
}

