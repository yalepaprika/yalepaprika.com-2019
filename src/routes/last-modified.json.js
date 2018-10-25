import { lastModified } from '../../api'

export async function get(req, res, next) {
  return lastModified.get()
    .then(ISOString => {
      return res.json({
        lastModified: ISOString
      })
    })
    .catch(err => next(err))
}

