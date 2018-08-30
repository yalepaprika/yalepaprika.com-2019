import fetch from './utils/fetch'
import { contributors } from './'
import { folds } from './'
import dateSort from '../routes/_helpers/date-sort'

export default {
  get: function (id, embedded) {
    return fetch(`/wp/v2/posts/${id}`)
      .then(post => preparePost(post, embedded))
  },
  list: function (embedded) {
    return fetch(`/wp/v2/posts?per_page=100`)
      .then(posts => Promise.all(posts.map(post => preparePost(post, embedded))))
      .then(posts => posts.filter(post => post.meta.fold && !post.meta.fold.bulletin))
      .then(posts => posts.sort((a, b) => dateSort(a.meta.fold, b.meta.fold)))
  },
  search: function (slug, embedded) {
    return fetch(`/wp/v2/posts?slug=${slug}`)
      .then(posts => Promise.all(posts.map(post => preparePost(post, embedded))))
  }
}

function preparePost (post, embedded) {
  post = sanitize(post)
  return Promise.resolve(post)
    .then(fetchContributors)
    .then(post => {
      return embedded ? fetchEmbedded(post) : post
    })
}

function sanitize (post) {
  if (!post.meta) post.meta = {}
  if (post.meta.fold && post.meta.fold.length) {
    post.meta.fold = post.meta.fold[0]
  } else {
    delete post.meta.fold
  }
  return post
}

function fetchContributors (post) {
  if (post.meta.contributors && post.meta.contributors.length) {
    let _contributors = post.meta.contributors.map(contributor => contributors.get(contributor, false))
    return Promise.all(_contributors)
      .then(results => {
        post.meta.contributors = results
      })
      .then(() => post)
  }
  return post
}

function fetchEmbedded (post) {
  let embedded = []
  if (post.meta.fold) {
    let _fold = folds.get(post.meta.fold, true)
    embedded.push(_fold.then(fold => {
      post.meta.fold = fold
    }))
  }
  return Promise.all(embedded).then(() => post)
}
