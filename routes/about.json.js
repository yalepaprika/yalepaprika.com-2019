import api from './_api'

export async function get(req, res, next) {
  const { slug } = req.params;
  return api(`/wp/v2/pages?slug=about`)
    .then(pages => {
      if (!pages.length) res.status(404).send({ message: 'Not found' })
      return res.json(pages[0])
    })
    .catch(err => next(err))
}

