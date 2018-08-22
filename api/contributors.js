import fetch from './utils/fetch'

// TODO: add easy way to get fold position
export default {
  get: function (id, embedded) {
    return fetch(`/wp/v2/contributors/${id}`)
      .then(contributor => prepareContributor(contributor, embedded))

  },
  list: function (embedded) {
    return fetch(`/wp/v2/contributors`)
      .then(contributors => Promise.all(contributors.map(contributor => prepareContributor(contributor, embedded))))

  },
  search: function (slug, embedded) {
    return fetch(`/wp/v2/contributors?slug=${slug}`)
      .then(contributors => Promise.all(contributors.map(contributor => prepareContributor(contributor, embedded))))
  }
}

function prepareContributor (contributor, embedded) {
  return Promise.resolve(contributor)
    .then(contributor => {
      return embedded ? fetchEmbedded(contributor) : contributor
    })
}

// TODO: figure out related posts
function fetchEmbedded (contributor) {
  let embedded = []
  // if (contributor.meta.related_posts && contributor.meta.related_posts.length) {
  //   let _posts = contributor.meta.related_posts.map(post => posts.get(post, false))
  //   embedded.push(Promise.all(_posts).then(results => {
  //     contributor.meta.related_posts = results
  //   }))
  // }
  return Promise.all(embedded).then(() => contributor)
}
