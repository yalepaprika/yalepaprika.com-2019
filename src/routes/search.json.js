import lunr from 'lunr'
import { folds, posts, contributors } from '../../api'

export async function get(req, res, next) {
  return Promise.all([
      folds.list(),
      posts.list(),
      contributors.list()
    ])
    .then(results => {
      let resources = results[0].concat(results[1]).concat(results[2])
      let documents = resources.map(resource => {
        return {
          id: resource.id,
          text: resource.title.rendered
        }
      })

      const index = lunr(function () {
        this.ref('id')
        this.field('text')

        documents.forEach(doc => {
          this.add(doc)
        }, this)
      })
      return res.json({
        resources,
        index
      })
    })
    .catch(err => {
      next(err)
    })
}
