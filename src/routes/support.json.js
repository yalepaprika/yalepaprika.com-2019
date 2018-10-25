import { pages } from '../../api'

export async function get(req, res, next) {
  const { slug } = req.params;
  return pages.search('support', true)
    .then(pages => {
      if (!pages.length) res.status(404).send({ message: 'Not found' })
      return res.json(pages[0])
    })
    .catch(err => next(err))
}

