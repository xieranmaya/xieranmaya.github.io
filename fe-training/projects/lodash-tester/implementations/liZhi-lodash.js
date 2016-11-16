var liZhi = {
	chunk: function(array, size) {
		var outSize = Math.ceil(array.length / size)
		var result = new Array(outSize)
		for (var i = 0; i < outSize; i++) {
			result[i] = []
		}
		//[[],[],[]]
		for (var i = 0; i < array.length; i++) {
			result[parseInt(i / size)][i % size] = array[i]
		}

		return result
	}



}
console.log(liZhi.chunk([1, 2, 3, 4, 5], 2))
