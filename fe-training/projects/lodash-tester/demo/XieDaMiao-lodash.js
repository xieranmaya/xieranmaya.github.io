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
  chunk: function() {
    for (;;) {

    }
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
  toPath: function toPath(value) {
    if (Array.isArray(value)) {
      return value.map(String)
    }
    return value.replace(/^\[|\]$|[\'\"]/g, '').split(/\]\.|\.\[|\]\[|\.|\[|\]/)
  },
  // intersection([1, 2, 3], [2, 3, 4], [4, 5, 6])
  intersection: function() {
    var firstArr = arguments[0]

    var result = []

    for (var i = 0; i < firstArr.length; i++) {
      var v = firstArr[i]


      //is v in every after arrays?
      var ocurrence = 0;
      for (var j = 1; j < arguments.length; j++) {
        //is v in arguments[j]
        var a = arguments[j]

        for (var k = 0; k < a.length; k++) {
          if (v == a[k]) {
            ocurrence++
          }
        }
      }

      if (ocurrence == arguments.length - 1) {
        result.push(v)
      }
      ocurrence = 0

    }
    return result
  },
  map: function map(arr, fn) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr))
    }
    return result
  },
  filter: function filter(collection, predicate) {
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i])
      }
    }
    return result
  },
  partition: function(arr, fn) {
    var ret = [
      [],
      []
    ]

    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        ret[0].push(arr[i])
      } else {
        ret[1].push(arr[i])
      }
    }

    return ret
  },
  indexOf: function indexOf(array, value, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = 0
    }
  },
  isPrime: function isPrime(n) {
    if (n < 2) {
      return false
    }
    for (var i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        return false
      }
    }
    return true
  },
  reduce: function reduce(collection, reducer, initial) {
    var start = 0
    if (initial == undefined) {
      initial = collection[0]
      start = 1
    }

    var result = initial

    for (var i = start; i < collection.length; i++) {
      result = reducer(result, collection[i], i, collection)
    }

    return result
  },
}
