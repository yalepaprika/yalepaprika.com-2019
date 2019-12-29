import fetch from './utils/fetch'
import { posts } from './'
import { folds } from './'
import lastName from '../src/routes/_helpers/last-name'

export default {
  get: function (id, embedded) {
    return fetch(`/wp/v2/contributors/${id}`)
      .then(contributor => prepareContributor(contributor, embedded))
  },
  list: function (embedded) {
    return fetch(`/wp/v2/contributors?per_page=100`)
      .then(contributors => Promise.all(contributors.map(contributor => prepareContributor(contributor, embedded))))
      .then(contributors => contributors.sort((a, b) => {
        var aName = a.meta.organization ? a.title.rendered : lastName(a.title.rendered)
        var bName = b.meta.organization ? b.title.rendered : lastName(b.title.rendered)
        return aName.localeCompare(bName);
      }))
  },
  search: function (slug, embedded) {
    return fetch(`/wp/v2/contributors?slug=${slug}`)
      .then(contributors => Promise.all(contributors.map(contributor => prepareContributor(contributor, embedded))))
  }
}

function prepareContributor (contributor, embedded) {
  contributor = sanitize(contributor)
  return Promise.resolve(contributor)
    .then(contributor => {
      return embedded ? fetchEmbedded(contributor) : contributor
    })
}

function sanitize (contributor) {
  if (!contributor.meta) contributor.meta = {}
  contributor.meta.organization = (contributor.meta.organization == "1")
  return contributor
}

function fetchEmbedded (contributor) {
  let embedded = []
  if (contributor.meta.posts_contributed && contributor.meta.posts_contributed.length) {
    let _posts = contributor.meta.posts_contributed.map(post => posts.get(post, false))
    embedded.push(Promise.all(_posts).then(results => {
      contributor.meta.posts_contributed = results
    }))
  }
  if (contributor.meta.folds_edited && contributor.meta.folds_edited.length) {
    let _folds = contributor.meta.folds_edited.map(fold => folds.get(fold, false))
    embedded.push(Promise.all(_folds).then(results => {
      contributor.meta.folds_edited = results
    }))
  }
  if (contributor.meta.folds_designed && contributor.meta.folds_designed.length) {
    let _folds = contributor.meta.folds_designed.map(fold => folds.get(fold, false))
    embedded.push(Promise.all(_folds).then(results => {
      contributor.meta.folds_designed = results
    }))
  }
  return Promise.all(embedded).then(() => contributor)
}


