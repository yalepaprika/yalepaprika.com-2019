import fetch from './utils/fetch'
import { posts } from './'
import { contributors } from './'
import { media } from './'

function get (id, embedded) {
  return fetch(`/wp/v2/folds/${id}`)
    .then(fold => prepareFold(fold, embedded))
}

function list (embedded) {
  return fetch(`/wp/v2/folds?per_page=100`)
    .then(folds => Promise.all(folds.map(fold => prepareFold(fold, embedded))))
}

function search (slug, embedded) {
  return fetch(`/wp/v2/folds?slug=${slug}`)
    .then(folds => Promise.all(folds.map(fold => prepareFold(fold, embedded))))
}

export default { get, list, search }

function prepareFold (fold, embedded) {
  fold = sanitize(fold)
  return Promise.resolve(fold)
    .then(fetchMedia)
    .then(fold => {
      return embedded ? fetchEmbedded(fold) : fold
    })
}

function sanitize (fold) {
  if (!fold.meta) fold.meta = {}
  if (fold.meta.bulletin) {
    fold.meta.bulletin = (fold.meta.bulletin == '1')
  }
  if (fold.meta.creases && fold.meta.creases.length) {
    fold.meta.creases = (fold.meta.creases[0] == '1') ? 1 : 2
  } else {
    delete fold.meta.creases
  }
  return fold
}

function fetchMedia (fold) {
  let mediaEmbeds = []
  if (fold.meta.pdf) {
    let _pdf = media.get(fold.meta.pdf)
    mediaEmbeds.push(_pdf.then(result => {
      fold.meta.pdf = result
    }))
  }
  if (fold.meta.fold_front) {
    let _fold_front = media.get(fold.meta.fold_front)
    mediaEmbeds.push(_fold_front.then(result => {
      fold.meta.fold_front = result
    }))
  }
  if (fold.meta.fold_back) {
    let _fold_back = media.get(fold.meta.fold_back)
    mediaEmbeds.push(_fold_back.then(result => {
      fold.meta.fold_back = result
    }))
  }
  return Promise.all(mediaEmbeds).then(() => fold)
}

function fetchEmbedded (fold) {
  let embedded = []
  if (fold.meta.fold_editors && fold.meta.fold_editors.length) {
    let _fold_editors = fold.meta.fold_editors.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_fold_editors).then(results => {
      fold.meta.fold_editors = results
    }))
  }
  if (fold.meta.coordinating_editors && fold.meta.coordinating_editors.length) {
    let _coordinating_editors = fold.meta.coordinating_editors.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_coordinating_editors).then(results => {
      fold.meta.coordinating_editors = results
    }))
  }
  if (fold.meta.graphic_designer && fold.meta.graphic_designer.length) {
    let _graphic_designer = fold.meta.graphic_designer.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_graphic_designer).then(results => {
      fold.meta.graphic_designer = results
    }))
  }
  if (fold.meta.web_editor && fold.meta.web_editor.length) {
    let _web_editor = fold.meta.web_editor.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_web_editor).then(results => {
      fold.meta.web_editor = results
    }))
  }
  if (fold.meta.publishers && fold.meta.publishers.length) {
    let _publishers = fold.meta.publishers.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_publishers).then(results => {
      fold.meta.publishers = results
    }))
  }
  if (fold.meta.positions_editor && fold.meta.positions_editor.length) {
    let _positions_editor = fold.meta.positions_editor.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_positions_editor).then(results => {
      fold.meta.positions_editor = results
    }))
  }
  if (fold.meta.posts && fold.meta.posts.length) {
    let _posts = fold.meta.posts.map(post => posts.get(post, false))
    embedded.push(Promise.all(_posts).then(results => {
      fold.meta.posts = results
    }))
  }
  // TODO: figure out if volume folds are needed
  // if (fold.meta.volume_folds && fold.meta.volume_folds.length) {
  //   let _volume_folds = fold.meta.volume_folds.map(fold => get(fold, false))
  //   embedded.push(Promise.all(_volume_folds).then(results => {
  //     fold.meta.volume_folds = results
  //   }))
  // }
  return Promise.all(embedded).then(() => fold)
}
