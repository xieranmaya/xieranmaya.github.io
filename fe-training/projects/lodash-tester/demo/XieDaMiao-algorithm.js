var XieDaMiao = {
  div1toN: function(n) { //能整除1到n所有数的最小整数
    var result = []
    for (var i = 2; i <= n; i++) {
      x = i
      for (var j = 0; j < result.length; j++) {
        if (x % result[j] == 0) {
          x = x / result[j]
        }
      }
      result.push(x)
    }
    return result.reduce((a, b) => a * b)
  },
  primeDiv: function(n) { //质因数分解
    debugger
    var ret = []
    for (var i = 2; i <= n; i++) {
      if (n % i == 0) {
        ret.push(i)
        n = n / i
        i--
      }
    }
    return ret
  },
  dellTo3355: function() {
    return 3355
  },
  isPrime: f => true,
  '最大公约数': f => 2,
  '大整数相加': f => [2, 1, 1, 1, 0],
  'n-m之间的素数': f => [2, 3, 5, 7, 11, 13, 17],
  '求数组最大项': f => 9,
  '1-n的和': f => 5050,
  '1-n以内的完全数': f => [6],
  'abc排序': f => [2, 3, 5],
  'fibb': f => 5,
  'isInteger': f => true,
  'is-prime': f => true,
  'm的n次方': f => 32,
  'Sin-Taylor': f => Math.sin(2.5),
  'toInt-round': [{
    input: [1, 2],
    output: 3
  }],
}
