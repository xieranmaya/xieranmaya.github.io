var WuFang = {
  chunk2: function(arr, m) {
    var result = []
    var temp = []
    for (var i = 0; i < arr.length; i++) {
      var j = i % m
      temp.push(arr[i])
      if (j == m - 1) {
        result.push(temp)
        j = 0
        temp = []
      }
    }
    result.push(temp)
    return result
  },
  chunk: function(arr, m) {
    var result = []
    var l = Math.ceil(arr.length / m)
    for (var i = 0; i < l; i++) {
      result[i] = []
    }
    for (var j = 0; j < arr.length; j++) {
      var k = parseInt(j / m)
      result[k].push(arr[j])
    }
    return result
  },

}
