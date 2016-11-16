var xieran = {
  chunk: function(arr, n) {
    var l = Math.ceil(arr.length / n)
    var result = new Array(l);

    for (var i = 0; i < l; i++) {
      result[i] = []
    }

    for (var i = 0; i < arr.length; i++) {
      result[parseInt(i / n)][i % n] = arr[i]
    }

    return result
  },
  compact: function() {
    console.log(lksjdf)
  },
  fill: function() {}
}
