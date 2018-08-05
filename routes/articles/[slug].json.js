import fetch from 'node-fetch';

export async function get(req, res, err) {
	const { slug } = req.params;
  return fetch(`http://159.89.34.209/wp-json/wp/v2/posts?slug=${slug}`)
    .then(r => r.json())
    .then(posts => {
    	if (!posts.length) res.status(404).send({ message: 'Not found' })
      return res.json(posts[0])
    })
    .catch(err => next(err))
}

