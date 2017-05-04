TianXiaoBo = {
	/**
	 * 将 array 拆分成多个 size 长度的块把这些块组成一个新数组。如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
	 * 参数
	 * array (Array): 需要被处理的数组。
	 * [size=1] (number): 每个块的长度。
	 * 返回值
	 * (Array): 返回一个包含拆分块数组的新数组（相当于一个二维数组）。
	 * 例子
	 * chunk(['a', 'b', 'c', 'd'], 2);
	 * => [['a', 'b'], ['c', 'd']]
	 * chunk(['a', 'b', 'c', 'd'], 3);
	 * => [['a', 'b', 'c'], ['d']]
	 **/
	chunk: function(arr, n) {
		var lenR = Math.ceil(arr.length / n)
		var lenA = arr.length
		var result = new Array(lenR)
		for (var i = 0; i < lenR; i++) {
			result[i] = []
		}
		for (var j = 0; j < lenA; j++) {
			result[parseInt(j / n)][j % n] = arr[j]
		}
		return result
	},
	/**
	 * 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
	 * 参数
	 * array (Array): 数组参数。
	 * 返回值
	 * (Array): 返回过滤假值后的数组。
	 * 例子
	 * compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 **/
	compact: function(arr) {
		var result = arr
		var len = result.length
		for (var i = 0; i < len; i++) {
			if (!result[i]) {
				result.splice(i, 1)
			}
		}
		return result
	},
	/**
	 * Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
	 * 参数
	 * array (Array): 需要过滤的数组。
	 * [values] (...Array): 数组需要排除掉的值。
	 * 返回值
	 * (Array): 返回过滤后的数组
	 * 例子
	 * difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 * difference([1, '2', 3], [4, 2]);
	 * // => [1, "2", 3]
	 **/
	difference: function(arr, compare) {
		var result = arr
		var lenA = result.length
		var lenC = compare.length
		for (var i = 0; i < lenA; i++) {
			for (var j = 0; j < lenC; j++) {
				if (compare[j] === result[i]) {
					result.splice(i, 1)
				}
			}
		}
		return result
	},
	/**
	 * 将 array 中的前 n 个元素去掉，然后返回剩余的部分。
	 * 参数
	 * array (Array): 被操作的数组。
	 * [n=1] (number): 去掉的元素个数。
	 * 返回值
	 * (Array): 返回 array 的剩余部分。
	 * 例子
	 * drop([1, 2, 3]);
	 * // => [2, 3] 默认是1开始的
	 * drop([1, 2, 3], 2);
	 * // => [3]
	 * drop([1, 2, 3], 5);
	 * // => []
	 * drop([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 **/
	drop: function(arr, del) {
		var result = arr
		if (del == undefined) {
			del = 1
		}
		result.splice(0, del)
		return result
	},
	/**
	 * 将 array 尾部的 n 个元素去除，并返回剩余的部分。
	 * 参数
	 * array (Array): 需要被处理数组。
	 * [n=1] (number): 去掉的元素个数。
	 * 返回值
	 * (Array): 返回 array 的剩余部分。
	 * 例子
	 * dropRight([1, 2, 3]);
	 * // => [1, 2]
	 * dropRight([1, 2, 3], 2);
	 * // => [1]
	 * dropRight([1, 2, 3], 5);
	 * // => []
	 * dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 **/
	dropRight: function(arr, del) {
		var result = arr
		if (del == undefined) {
			del = 1
		}
		result.splice(-1, del)
		return result
	},
	/**
	 * 获取数组 array的第一个元素
	 * 参数
	 * array (Array): 需要查询的数组
	 * 返回值
	 * (*): 返回数组的第一个元素
	 * 例子
	 * first([1, 2, 3]);
	 * // => 1
	 * first([]);
	 * // => undefined
	 **/
	first: function(arr) {
		return arr[0]
	},
	/**
	 * 去除数组最后一个元素array.
	 * 参数
	 * array (Array): 需要查询的数组.
	 * 返回值
	 * (Array): 返回截取的数组array.
	 * 例子
	 * initial([1, 2, 3]);
	 * // => [1, 2]
	 **/
	initial: function(arr) {
		var result = arr
		result.splice(-1, 1)
		return result
	},
	/**
	 * 取出数组的最后一个元素 array.
	 * 参数
	 * array (Array): 查询的数组
	 * 返回值
	 * (*): 返回 array的最后一个元素.
	 * 例子
	 * last([1, 2, 3]);
	 * // => 3
	 **/
	last: function(arr) {
		return arr[arr.length - 1]
	},
	/**
	 * 获取数组 array第一个元素除外的所有元素.
	 * 参数
	 * array (Array): 需要查询的数组
	 * 返回值
	 * (Array): 返回截取的 array.
	 * 例子
	 * rest([1, 2, 3]);
	 * // => [2, 3]
	 **/
	// lodash 最新版本的 rest 功能不一样
	rest: function(arr) {
		var result = arr
		result.splice(0, 1)
		return result
	},
}
