var XieDaMiao = {
  isEqual: function isEqual(a, b) {
    if (a !== a && b !== b) { //两个NaN
      return true
    }
    if (typeof a !== typeof b) { //类型不同
      return false
    }
    if (a === b) { //相同的原始类型或相同的指针
      return true
    }
    var keys = [] //存放a和b的所有key
    for (key in a) {
      if (a.hasOwnProperty(key)) {
        keys.push(key)
      }
    }
    for (key in b) {
      if (b.hasOwnProperty(key)) {
        if (keys.indexOf(key) < 0) {
          keys.push(key)
        }
      }
    }
    for (key of keys) {
      if (typeof a[key] === 'object') { //如果类型为对象，就调用这个函数递归的比较
        if (!isEqual(a[key], b[key])) {
          return false
        }
      } else {
        if (a[key] !== b[key]) { //否则直接用全等来比
          return false
        }
      }
    }
    return true
  },
  at: function(object, paths) {
    var self = this
    return paths.map(function(path) {
      return self.get(object, path)
    })
  },
  get: function(object, path, defaultValue) {
    var path = this.toPath(path)
    try {
      return path.reduce(function(curObj, nextPath) {
        return curObj[nextPath]
      }, object)
    } catch (e) {
      return defaultValue
    }
  },
  toPath: function(value) {
    if (Array.isArray(value)) {
      return value.map(String)
    }
    return value.replace(/^\[|\]$|[\'\"]/g, '').split(/\.|\[|\]|\]\.|\.\[|\]\[/)
  },
}
