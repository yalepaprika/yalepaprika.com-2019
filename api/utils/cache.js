import _Cache from 'async-disk-cache'
import lastModified from '../last-modified'

class Cache {
  constructor() {
    this.ready = false
  }

  open () {
    if (this.ready) return Promise.resolve()
    return lastModified.get()
      .then(ISOString => {
        console.log('opened cache', ISOString)
        this.cache = new _Cache(ISOString)
      })
      .then(() => {
        this.ready = true
      })
  }

  has() {
    return this.cache.has.apply(this.cache, arguments)
  }

  get () {
    return this.cache.get.apply(this.cache, arguments)
  }

  set () {
    return this.cache.set.apply(this.cache, arguments)
  }

  remove () {
    return this.cache.remove.apply(this.cache, arguments)
  }

  clear () {
    return this.cache.clear.apply(this.cache, arguments)
  }

}

export default Cache
