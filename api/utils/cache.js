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
        console.log('opened cache', '2020-01-30T02:39:55.000Z')
        this.cache = new _Cache('2020-01-30T02:39:55.000Z')
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
