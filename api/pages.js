import fetch from './utils/fetch'
import { contributors } from './'

export default {
  get: function (id, embedded) {
    return fetch(`/wp/v2/pages/${id}`)
      .then(page => preparePage(page, embedded))
  },
  list: function (embedded) {
    return fetch(`/wp/v2/pages`)
      .then(pages => Promise.all(pages.map(page => preparePage(page, embedded))))
  },
  search: function (slug, embedded) {
    return fetch(`/wp/v2/pages?slug=${slug}`)
      .then(pages => Promise.all(pages.map(page => preparePage(page, embedded))))
  }
}

function preparePage (page, embedded) {
  return Promise.resolve(page)
    .then(page => {
      return embedded ? fetchEmbedded(page) : page
    })
}

function fetchEmbedded (page) {
  let embedded = []
  if (page.meta.coordinating_editors && page.meta.coordinating_editors.length) {
    let _coordinating_editors = page.meta.coordinating_editors.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_coordinating_editors).then(results => {
      page.meta.coordinating_editors = results
    }))
  }
  if (page.meta.graphic_design_liason && page.meta.graphic_design_liason.length) {
    let _graphic_design_liason = page.meta.graphic_design_liason.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_graphic_design_liason).then(results => {
      page.meta.graphic_design_liason = results
    }))
  }
  if (page.meta.web_editor && page.meta.web_editor.length) {
    let _web_editor = page.meta.web_editor.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_web_editor).then(results => {
      page.meta.web_editor = results
    }))
  }
  if (page.meta.publishers && page.meta.publishers.length) {
    let _publishers = page.meta.publishers.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_publishers).then(results => {
      page.meta.publishers = results
    }))
  }
  if (page.meta.site_design && page.meta.site_design.length) {
    let _site_design = page.meta.site_design.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_site_design).then(results => {
      page.meta.site_design = results
    }))
  }
  if (page.meta.site_development && page.meta.site_development.length) {
    let _site_development = page.meta.site_development.map(contributor => contributors.get(contributor, false))
    embedded.push(Promise.all(_site_development).then(results => {
      page.meta.site_development = results
    }))
  }
  return Promise.all(embedded).then(() => page)
}
