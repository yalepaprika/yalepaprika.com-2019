import { folds } from '../../../api'

export async function get(req, res, next) {
	const { slug } = req.params;
  return folds.search(slug, true)
    .then(folds => {
      if (!folds.length) res.status(404).send('Not found')
      return res.json(folds[0])
    })
    .catch(err => next(err))
}

