import fetch from './utils/fetch'

export default {
  get: function (id) {
    return fetch(`/wp/v2/media/${id}`)
  }
}
