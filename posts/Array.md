Native: Array {#Array}
======================

数组(Array)的功能增强

### 另参考:

- [MDC Array][]


Array 方法: each {#Array:each}
---------------------------------

对数组进行迭代处理

### 语法:

	myArray.each(fn[, bind]);

### 参数:

1. fn   - (*function*) 每次迭代中执行的函数. 当前迭代项及它的索引号将被作为参数传入该函数
2. bind - (*object*, 可选) 函数中this所引用的对象. 详情请参看[Function:bind][]

#### 参数详解: fn

##### 语法

	fn(item, index, array)

##### 参数:

1. item   - (*mixed*)  当前迭代项
2. index  - (*number*) 当前索引号
3. array  - (*array*)  迭代的数组

### 示例:

	//显示 "0=apple", "1=banana", 等等...:
	
	['apple', 'banana', 'lemon'].each(function(item, index){
		alert(index + "=" + item);
	});


### 另参考:

- [MDC Array:forEach][]

### 备注:

- 这个方法只在没有原生[MDC Array:forEach][]方法支持的浏览器上生效(?好像不是?)



Array 方法: every {#Array:every}
----------------------------------

如果数组中的每一项都通过给定函数的测试,则返回true.

这个方法只提供给没有原生[Array:every][]方法支持的浏览器

### 语法:

	var allPassed = myArray.every(fn[, bind]);

### 参数:

1. fn   - (*function*) 用来测试每一个数组项的函数
2. bind - (*object*, 可选) 函数中this所引用的对象. 详情请参看[Function:bind][].

#### 参数详解: fn

##### 语法:

	fn(item, index, array)

##### 参数:

1. item   - (*mixed*)  当前迭代项
2. index  - (*number*) 当前索引号
3. array  - (*array*)  迭代的数组

### 返回值:

* (*boolean*) 如果数组中的每一项都通过给定函数的测试,则返回true; 否则,返回false

### 示例:

	var areAllBigEnough = [10, 4, 25, 100].every(function(item, index){
		return item > 20;
	}); //areAllBigEnough = false


### 另参考:

- [MDC Array:every][]



Array 方法: filter {#Array:filter}
------------------------------------

将所有在给定过滤函数中过滤通过的数组项创建一个新数组.

这个方法只提供给没有原生[Array:filter][]方法支持的浏览器

### 语法:

	var filteredArray = myArray.filter(fn[, bind]);

### 参数:

1. fn   - (*function*) 用来测试每一个数组项的函数. 当前迭代项以及它的索引号将被作为参数传入该函数
2. bind - (*object*, 可选) 函数中this所引用的对象. 详情请参看[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(item, index, array)

##### 参数:

1. item   - (*mixed*)  当前迭代项
2. index  - (*number*) 当前索引号
3. array  - (*array*)  迭代的数组

### 返回值:

* (*array*) 过滤后的新数组

### 示例:

	var biggerThanTwenty = [10, 3, 25, 100].filter(function(item, index){
		return item > 20;
	}); //biggerThanTwenty = [25, 100]

### 另参考:

- [MDC Array:filter][]


Array 方法: clean {#Array:clean}
------------------------------------

返回一个由原数组中计算值为true(即不是以下情况的值: null, undefined, zero, false, 或 "")的项

### 语法:

	var cleanedArray = myArray.clean();

### 返回值:

* (*array*) 过滤后的新数组

### 示例:

	var cleanedArray = [0, 3, null, false, true, "foo", ""].clean(); //cleanedArray = [3, true, "foo"]


Array 方法: indexOf {#Array:indexOf}
--------------------------------------

返回数组中和给出参数值相等的项的索引号; 如果未找到相等的项, 则返回-1.

这个方法只提供给没有原生[Array:indexOf][]方法支持的浏览器

### 语法:

	var index = myArray.indexOf(item[, from]);

### 返回值:

* (*number*) 数组中和给出参数值相等的项的索引号; 如果未找到相等的项, 则返回-1

### 参数:

1. item - (*object*) 目标搜索项
2. from - (*number*, 可选: 默认值为0) 在数组中搜索的起始索引号.

### 示例:

	['apple', 'lemon', 'banana'].indexOf('lemon'); //返回 1
	['apple', 'lemon'].indexOf('banana'); //返回 -1

### 另参考:

- [MDC Array:indexOf][]



Array 方法: map {#Array:map}
------------------------------

返回一个由经过给定函数处理返回的值所创建的新数组.

这个方法只提供给没有原生[Array:map][]方法支持的浏览器

### 语法:

	var mappedArray = myArray.map(fn[, bind]);

### 参数:

1. fn   - (*function*) 用来处理当前迭代项并返回新值的函数
2. bind - (*object*, 可选) 函数中this所引用的对象. 详情请参看[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(item, index, array)

##### 参数:

1. item   - (*mixed*)  当前迭代项
2. index  - (*number*) 当前索引号
3. array  - (*array*)  迭代的数组

### 返回值:

* (*array*) 处理后的新数组

### 示例:

	var timesTwo = [1, 2, 3].map(function(item, index){
		return item * 2;
	}); //timesTwo = [2, 4, 6];

### 另参考:

- [MDC Array:map][]



Array 方法: some {#Array:some}
--------------------------------

如果数组中至少有一个项通过了给出的函数的测试,则返回true.

这个方法只提供给没有原生[Array:some][]方法支持的浏览器


### 语法:

	var somePassed = myArray.some(fn[, bind]);

### 返回值:

* (*boolean*) 如果数组中至少有一个项通过了给出的函数的测试,则返回true; 否则返回false

### 参数:

1. fn   - (*function*) 用于测试数组项的函数. 当前数组中的迭代项以及它在数组中的索引号将被传入该函数中
2. bind - (*object*, 可选) 函数中this所引用的对象.详情请参看[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(item, index, array)

##### 参数:

1. item   - (*mixed*)  当前迭代项
2. index  - (*number*) 当前索引号
3. array  - (*array*)  迭代的数组

### 示例:

	var isAnyBigEnough = [10, 4, 25, 100].some(function(item, index){
		return item > 20;
	}); //isAnyBigEnough = true

### 另参考:

- [MDC Array:some][]



Array 方法: associate {#Array:associate}
------------------------------------------

创建一个键值对对象,该对象中的键由作为参数传入的一个数组决定,值由主调数组决定

### 语法:

	var associated = myArray.associate(obj);

### 参数:

1. obj - (*array*) 作为键源的数组

### 返回值:

* (*object*) 合成后的键值对对象

### 示例:

	var animals = ['Cow', 'Pig', 'Dog', 'Cat'];
	var sounds = ['Moo', 'Oink', 'Woof', 'Miao'];
	sounds.associate(animals);
	
	/**
	 * 返回 
	 * {
	 *	 'Cow': 'Moo', 
	 *	 'Pig': 'Oink', 
	 *	 'Dog': 'Woof', 
	 *	 'Cat': 'Miao'
	 * }
	 */



Array 方法: link {#Array:link}
--------------------------------

根据给出的 '键/测试函数'对 来创建一个新的键值对对象

### 语法:

	var result = Array.link(array, object);

### 参数:

1. object - (*object*)  包含'键/测试函数'的对象

### 返回值:

* (*object*) 新创建的键值对对象

### 示例:

	var el = document.createElement('div');
	var arr2 = [100, 'Hello', {foo: 'bar'}, el, false, 300];
	arr2.link({
		myNumber: Number.type,
		myNumber2: function(item){
			if(item >= 200) return true;
		}, 
		myElement: Element.type, 
		myObject: Object.type, 
		myString: String.type, 
		myBoolean: $defined
	});
	
	/**
	 *	返回 
	 *	{
	 *		myNumber: 100,
	 *      myNumber2: 300,
	 *		myElement: el, 
	 *		myObject: {
	 *			foo: 'bar'
	 *		}, 
	 *		myString: 'Hello', 
	 *		myBoolean: false
	 *	}
	 *  
	 *  备注说明: 当前键的取值搜索范围是前一个键的测试挑选剩余后的数组项(而不是整个数组项)
	 */



Array 方法: contains {#Array:contains}
----------------------------------------

测试指定项是否在数组中存在

### 语法:

	var inArray = myArray.contains(item[, from]);

### 参数:

1. item - (*object*) 要进行测试的项
2. from - (*number*, 可选: 默认值为0) 在数组中开始搜索的起始位索引

### 返回值:

* (*boolean*) 如果数组包含给出的项,则返回true; 否则返回false

### 示例:

	["a","b","c"].contains("a"); //返回 true
	["a","b","c"].contains("d"); //返回false false

### 另参考:

- [MDC Array:indexOf][]



Array 方法: extend {#Array:extend}
------------------------------------

将另一个数组中的所有元素纳入本数组

### 语法:

	myArray.extend(array);

### 参数:

1. array - (*array*) 纳入源数组

### 返回值:

* (*array*) 纳入新项后的主调数组

### 示例:

	var animals = ['Cow', 'Pig', 'Dog'];
	animals.extend(['Cat', 'Dog']); //animals = ['Cow', 'Pig', 'Dog', 'Cat', 'Dog'];



Array 方法: getLast {#Array:getLast}
--------------------------------------

返回数组中的最后一项

### 语法:

	myArray.getLast();

### 返回值:

* (*mixed*) 数组中的最后一项
* (*false*) 如果是空数组,则返回null

### 示例:

	['Cow', 'Pig', 'Dog', 'Cat'].getLast(); //返回 'Cat'



Array 方法: getRandom {#Array:getRandom}
------------------------------------------

返回从数组中随机抽取的一项

### 语法:

	myArray.getRandom();

### 返回值:

* (*mixed*) 从数组中随机抽取的一项; 如果是空数组,则返回null

### 示例:

	['Cow', 'Pig', 'Dog', 'Cat'].getRandom();



Array 方法: include {#Array:include}
--------------------------------------

向数组中添加一项, 如果该项在数组中已经存在,则不再添加.

### 语法:

	myArray.include(item);

### 参数:

1. item - (*object*) 目标添加项

### 返回值:

* (*array*) 添加元素后的主调数组

### 示例:

	['Cow', 'Pig', 'Dog'].include('Cat'); //返回 ['Cow', 'Pig', 'Dog', 'Cat']
	['Cow', 'Pig', 'Dog'].include('Dog'); //返回 ['Cow', 'Pig', 'Dog']



Array 方法: combine {#Array:combine}
----------------------------------

将主调数组和另一个数组进行组合(重复的项将不会加入)

### 语法:

	myArray.combine(array);

### 参数:

1. array - (*array*) 将被组合的源数组

### 返回值:

* (*array*) 组合后的主调数组

### 示例:

	var animals = ['Cow', 'Pig', 'Dog'];
	animals.combine(['Cat', 'Dog']); //animals = ['Cow', 'Pig', 'Dog', 'Cat'];



Array 方法: erase {#Array:erase}
------------------------------------

删除数组中所有的指定项

### 语法:

	myArray.erase(item);

### 参数:

1. item - (*object*) 目标删除项

### 返回值:

* (*array*) 进行删除后的主调数组

### 示例:

	['Cow', 'Pig', 'Dog', 'Cat', 'Dog'].erase('Dog') //返回 ['Cow', 'Pig', 'Cat']
	['Cow', 'Pig', 'Dog'].erase('Cat') //返回 ['Cow', 'Pig', 'Dog']



Array 方法: empty {#Array:empty}
----------------------------------

清空数组

### 语法:

	myArray.empty();

### 返回值:

* (*array*) 清空后的主调数组

### 示例:

	var myArray = ['old', 'data'];
	myArray.empty(); //myArray变成[]



Array 方法: flatten {#Array:flatten}
--------------------------------------

将多维数组扁平化(即变为一维数组)

### 语法:

	myArray.flatten();

### 返回值:

* (*array*) 扁平化后的主调数组

### 示例:

	var myArray = [1,2,3,[4,5, [6,7]], [[[8]]]];
	var newArray = myArray.flatten(); //newArray变成[1,2,3,4,5,6,7,8]



Array 方法: rgbToHex {#Array:rgbToHex}
----------------------------------------

将RGB格式的颜色代码转换成十六进制的代码. 输入的RGB代码需要类似如下的其中一种格式:[255,255,255] 或 [255,255,255,1]


### 语法:

	myArray.rgbToHex([array]);

### 参数:

1. array - (*boolean*, 可选) 是否输出为数组. 如果为true,则输入的十六进制颜色将是数组格式(如: ['ff','33','00']),而不是原本的字符串形式(如: "#ff3300")

### 返回值:

* (*string*) 字符串格式的十六进制颜色代码, 或者若主调数组是一个代表rgba的颜色代码(即除了R,G,B外,还有一个Alpha值),且第四个值是0,则返回'transparent'(透明)
* (*array*) 如果设置了输出格式为数组,则返回数组格式的十六进制颜色代码

### 示例:

	[17,34,51].rgbToHex(); 		//返回 "#112233"
	[17,34,51].rgbToHex(true); 	//返回 ['11','22','33']
	[17,34,51,0].rgbToHex(); 	//返回 "transparent"

### 另参考:

- [String:rgbToHex](/Native/String/#rgbToHex)

工具函数 {#Utility}
============================


函数: $A {#A}
-----------------

创建一个数组的拷贝. 可以将数组的迭代功能添加到具备可迭代特性的对象中, 如:DOM节点集合或arguments对象

### 语法:

	var copiedArray = $A(iterable);

### 参数:

1. iterable - (array) 拷贝的对象

### 返回值:

* (*array*) 新生成的数组

### 示例:

#### 作用于arguments对象:

	function myFunction(){
		$A(arguments).each(function(argument, index){
			alert(argument);
		});
	};
	myFunction("One", "Two", "Three"); //依次显示 "One", "Two", "Three"

#### 作用于数组:

	var anArray = [0, 1, 2, 3, 4];
	var copiedArray = $A(anArray); //返回 [0, 1, 2, 3, 4].


[Array]: /Native/Array
[Function:bind]: /Native/Function/#Function:bind
[MDC Array]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array
[MDC Array:every]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:every
[MDC Array:filter]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:filter
[MDC Array:indexOf]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:indexOf
[MDC Array:map]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:map
[MDC Array:some]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:some
[MDC Array:forEach]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:forEach
[Array:every]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:every
[Array:filter]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:filter
[Array:indexOf]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:indexOf
[Array:map]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:map
[Array:some]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array:some