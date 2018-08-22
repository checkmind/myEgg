/**
 * 
 */
const LRU = require('lru-cache')
const DEFAULT_MAX_AGE = 60 * 1000
const options = {
  max: 500,
  // length: function (n, key) { return n * 2 + key.length },
  // dispose: function (key, n) { n.close() },
  maxAge: DEFAULT_MAX_AGE
}
const Cache = LRU(options)

const Service = require('egg').Service

class CacheService extends Service {
  create (key, value, maxAge = DEFAULT_MAX_AGE) {
    return Cache.set(key, value, maxAge)
  }
  get (key) {
    return Cache.get(key)
  }
  del (key) {
    return Cache.del(key)
  }
  has (key) {
    return Cache.has(key)
  }
}

module.exports = CacheService
