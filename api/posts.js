import fetch from './utils/fetch'
import { contributors } from './'
import { folds } from './'

export default {
  get: function (id, embedded) {
    return fetch(`/wp/v2/posts/${id}`)
      .then(post => preparePost(post, embedded))
  },
  list: function (embedded) {
    return fetch(`/wp/v2/posts`)
      .then(posts => Promise.all(posts.map(post => preparePost(post, embedded))))
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
