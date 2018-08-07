import api from '../_api'

export async function get(req, res, next) {
	const { slug } = req.params;
  return api(`/wp/v2/contributors?slug=${slug}`)
    .then(contributors => {
    	if (!contributors.length) res.status(404).send({ message: 'Not found' })
      return res.json(contributors[0])
    })
    .catch(err => next(err))
}

