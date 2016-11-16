var ShiFangHong = {
  /*
   * 对数组进行定长分组
   * arr为要分组的数组，x为分组的长度
   * 返回一个数组，数组的子项为分成的数组
   * 例子 chunk(['a', 'b', 'c', 'd'], 2);
   *        => [['a', 'b'], ['c', 'd']]
   *      chunk(['a', 'b', 'c', 'd'], 3);
   *        => [['a', 'b', 'c'], ['d']]
   */
  chunk: function(arr,x) {
    var result = []
        ,num
        ,lent = arr.length
        ,len = Math.ceil(lent/x)
    for(num = 0;num < len;num++) {
      result[num] = []
    }
    for(num = 0;num < lent;num++) {
      result[parseInt(num/x)][num%x] = arr[num]
    }
    return result
  },
  /*
   * 移除数组中无意义的值（false,null,0,'',undefined,NaN）
   * arr为要处理的数组
   * 返回处理后的数组
   * 例子 compact([0, 1, false, 2, '', 3]);
   *        => [1, 2, 3]
   */
  compact: function(arr) {
    var len = arr.length
        ,result = []
        ,num
    for(num = 0;num < len;num++) {
      if(arr[num]) {
        result.push(arr[num])
      }
    }
    return result
  },
  /*
   * 连接所有的参数为一个数组
   * 数组或值
   * 返回处理后的数组
   * 例子  concat([1], 2, [3], [[4]]);
   *         => [1, 2, 3, [4]]
   *       concat([1]);
   *         => [1]
   */
  concat: function() {
    var result = []
        ,len = arguments.length
        ,i
        ,j
        ,lent
    for(i = 0;i < len;i++) {
      if(Array.isArray(arguments[i])) {
        lent = arguments[i].length
        for(j = 0;j < lent;j++) {
          result.push(arguments[i][j])
        }
      }else {
        result.push(arguments[i])
      }
    }
    return result
  },
}

