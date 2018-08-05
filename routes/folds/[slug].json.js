import fetch from 'node-fetch';

export async function get(req, res, err) {
	const { slug } = req.params;
  const volume = slug.split('-')[0]
  const number = slug.split('-')[1]
  return fetch(`http://159.89.34.209/wp-json/wp/v2/folds?meta_query[relation]=AND&meta_query[0][key]=volume&meta_query[0][value]=${volume}&meta_query[1][key]=number&meta_query[1][value]=${number}`)
    .then(r => r.json())
    .then(folds => {
    	if (!folds.length) res.status(404).send({ message: 'Not found' })
      return res.json(folds[0])
    })
    .catch(err => next(err))
}

