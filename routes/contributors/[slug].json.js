import { contributors } from '../../api'

export async function get(req, res, next) {
	const { slug } = req.params;
  return contributors.search(slug, true)
    .then(contributors => {
      if (!contributors.length) res.status(404).send('Not found')
      return res.json(contributors[0])
    })
    .catch(err => next(err))
}

