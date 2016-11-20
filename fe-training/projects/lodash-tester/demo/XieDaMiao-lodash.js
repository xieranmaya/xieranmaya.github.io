var XieDaMiao = {
  isEqual: function isEqual(a, b) {
    if (a !== a && b !== b) {
      return true
    }
    if (typeof a !== typeof b) {
      return false
    }
    if (a === b) {
      return true
    }
    var keys = []
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
      if (typeof a[key] === 'object') {
        if (!isEqual(a[key], b[key])) {
          return false
        }
      } else {
        if (a[key] !== b[key]) {
          return false
        }
      }
    }
    return true
  },
}
