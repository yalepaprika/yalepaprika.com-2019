import api from '../_api'

export async function get(req, res, next) {
	const { slug } = req.params;
  const volume = slug.split('-')[0]
  const number = slug.split('-')[1]
  return api(`/wp/v2/folds?meta_query[relation]=AND&meta_query[0][key]=volume&meta_query[0][value]=${volume}&meta_query[1][key]=number&meta_query[1][value]=${number}`)
    .then(folds => {
      if (!folds.length) res.status(404).send('Not found')
      return res.json(folds[0])
    })
    .catch(err => next(err))
}

