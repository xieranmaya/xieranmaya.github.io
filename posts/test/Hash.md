Native: Hash {#Hash}
====================

一个重新实现的Object({}), 被专门用于数据的存取. 

和原来的Object({})的区别是: 它不会在进行存值,取值或迭代的时候处理对象的prototype中的内容.

重新实现这个类是有意义的, 因为原本我们无法直接使用Object.prototype, 因此本框架使用Hash.prototype来替代.

Hash 方法: constructor {#Hash:constructor}
--------------------------------------------

### 语法:

	var myHash = new Hash([object]);

### 参数:

1. object - (*mixed*) 要实现成Hash的对象

### 返回值:

* (*hash*) Hash实例

### 示例:

	var myHash = new Hash({
		aProperty: true,
		aMethod: function(){
			return true;
		}
	});
	
	alert(myHash.has('aMethod')); //返回 true.



Hash 方法: each {#Hash:each}
-------------------------------

对Hash中的键值对进行迭代

### 语法:

	myHash.each(fn[, bind]);

### 参数:

1. fn   - (*function*) 迭代执行的函数. 当前迭代项的值和键将传入该函数
2. bind - (*object*, 可选) 函数中'this'引用的对象. 详情参考[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(value, key, hash)

##### 参数:

1. value - (*mixed*)  当前迭代值
2. key   - (*string*) 当前迭代键
3. hash  - (*hash*)   主调hash

### 示例:

	var hash = new Hash({first: "Sunday", second: "Monday", third: "Tuesday"});
	
	hash.each(function(value, key){
		alert("the " + key + " day of the week is " + value);
	}); 
	
	//显示 "the first day of the week is Sunday", "the second day of the week is Monday", 等等.



Hash 方法: has {#Hash:has}
----------------------------

检测Hash中是否已存在指定的键

### 语法:

	var inHash = myHash.has(item);

### 参数:

1. key - (*string*) 检测的键

### 返回值:

* (*boolean*) 如果指定的键在Hash中存在,则返回true; 否则返回false

### 示例:

	var hash = new Hash({
		'a': 'one', 
		'b': 'two', 
		'c': 'three'
	});
	hash.has('a'); //返回 true
	hash.has('d'); //返回 false


### 备注:

- 对Hash自身的prototype进行测试将永远都不会返回true. 只有对Hash中存放的实际属性才生效.



Hash 方法: keyOf {#Hash:keyOf}
--------------------------------

获取指定值在Hash中对应的键.

### 语法:

	var key = myHash.keyOf(item);

### 参数:

1. item - (*mixed*) 要搜索的值

### 返回值:

* (*string*)  如果Hash中存在该值,则返回它的键;
* (*boolean*) 否则返回false

### 示例:

	var hash = new Hash({
		'a': 'one', 
		'b': 'two', 
		'c': 3
	});
	hash.keyOf('two'); 	//返回 'b'
	hash.keyOf(3); 		//返回 'c'
	hash.keyOf('four');	//返回 false

### 备注:

- 对Hash自身的prototype进行测试将永远都不会返回它的键. 只有对Hash中存放的实际属性值才会返回它关联的键



Hash 方法: hasValue {#Hash:hasValue}
--------------------------------------

检测Hash中是否存在指定的值

### 语法:

	var inHash = myHash.hasValue(value);

### 参数:

1. value - (*mixed*) 要检测的值

### 返回值:

* (*boolean*) 如果指定的值存在,则返回true; 否则返回false.

### 示例:

	var hash = new Hash({
		'a': 'one', 
		'b': 'two', 
		'c': 'three'
	});
	
	hash.hasValue('one'); 	//返回 true
	hash.hasValue('four'); 	//返回 false


Hash 方法: extend {#Hash:extend}
----------------------------------

将指定对象中的键值对纳入Hash中

### 语法:

	myHash.extend(properties);

### 参数:

1. properties - (*object*) 要纳入的对象

### 返回值:

* (*hash*) 纳入对象中键值对后的Hash

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	var properties = {
		'age': '20',
		'sex': 'male',
		'lastName': 'Dorian'
	};
	
	hash.extend(properties);
	/**
	 *当前hash中的内容: 
	 * { 
	 *	'name': 'John', 
	 *	'lastName': 'Dorian', 
	 *	'age': '20', 
	 *	'sex': 'male' 
	 * }
	 */



Hash 方法: combine {#Hash:combine}
--------------------------------

将给出对象中的键值对进行组合.

注意,有同名键的情况下,老的键的值不会被新的键的值覆盖;

另外,键的名称是大小写和类型敏感的.

### 语法:

	myHash.combine(properties);

### 参数:

1. properties - (*object*) 要和Hash进行组合的对象

### 返回值:

* (*hash*) 组合后的Hash

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	var properties = {
		'name': 'Jane'
		'age': '20',
		'sex': 'male',
		'lastName': 'Dorian'
	};
	
	hash.combine(properties);
	/**
	 *当前hash中的内容: 
	 *{ 
	 *	'name': 'John', 
	 *	'lastName': 'Doe', 
	 *	'age': '20', 
	 *	'sex': 'male' 
	 * }
	 */


Hash 方法: erase {#Hash:erase}
----------------------------------

从Hash中删除指定的键

### 语法:

	myHash.erase(key);

### 参数:

1. key - (*string*) 要删除的键

### 返回值:

* (*hash*) 删除指定键后的Hash

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	hash.erase('lastName'); //当前hash中的内容: { 'name': 'John' }



Hash 方法: get {#Hash:get}
----------------------------

获取Hash中指定键的值

### 语法:

	myHash.get(key);

### 参数:

1. key - (*string*) 键

### 返回值:

* (*mixed*) 如果找到该键的值, 则返回该值
* (*false*) 键在Hash中不存在, 则返回null

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	hash.get('name'); //返回 'John'



Hash 方法: set {#Hash:set}
----------------------------

向Hash中添加一个键值对,或覆盖已有的键值对的值

### 语法:

	myHash.set(key, value);

### 参数:

1. key   - (*string*) 要添加或修改的键
2. value - (*mixed*) 要添加或修改的值

### 返回值:

* (*hash*) 添加或修改键值对后的Hash

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	hash.set('name', 'Michelle'); //hash.name 变为 'Michelle'



Hash 方法: empty {#Hash:empty}
--------------------------------

清空Hash中所有存储的内容

### 语法:

	myHash.empty();

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	hash.empty();


Hash 方法: include {#Hash:include}
------------------------------------

如果指定键值对在Hash中不存在,则把它添加进去; 否则不作添加或修改.

### 语法:

	myHash.include(key, value);

### 参数:

1. key   - (*string*) 要插入的键
2. value - (*mixed*)  要插入的值

### 返回值:

* (*hash*) include操作后的Hash

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	hash.include('name', 'Michelle'); 	//hash的内容将不会改变
	hash.include('age', 25); 			//hash.age 为 25



Hash 方法: map {#Hash:map}
----------------------------

对Hash中的每个键值对进行迭代,并通过指定函数处理后重新映射成一个新的Hash

### 语法:

	var mappedHash = myHash.map(fn[, bind]);

### 参数:

1. fn   - (*function*)    处理每个迭代键值对的函数
2. bind - (*object*, 可选) 函数中'this'引用的对象. 详见[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(value, key, hash)

##### 参数:

1. value - (mixed)  当前迭代值
2. key   - (string) 当前迭代键
3. hash  - (hash)   主调Hash

### 返回值:

* (*hash*) 重新映射后的Hash

### 示例:

	var timesTwo = new Hash({
		a: 1, 
		b: 2, 
		c: 3
	}).map(function(item, index){
		return item * 2;
	}); 
	
	/**
	 *timesTwo 中的内容为: 
	 *	{
	 *		a: 2, 
	 *		b: 4, 
	 *		c: 6
	 *	};
     */


Hash 方法: filter {#Hash:filter}
----------------------------------

过滤Hash中的键值对, 并将通过过滤的键值对组成一个新的Hash

### 语法:

	var filteredHash = myHash.filter(fn[, bind]);

### 参数:

1. fn   - (*function*)    过滤函数
2. bind - (*object*, 可选) 函数中'this'引用的对象. 详见[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(value, key, hash)

##### 参数:

1. value - (mixed)  当前迭代值
2. key   - (string) 当前迭代键
3. hash  - (hash)   主调Hash

### 返回值:

* (*hash*) 过滤后的新Hash

### 示例:

	var biggerThanTwenty = new Hash({
		a: 10, 
		b: 20, 
		c: 30
	}).filter(function(value, key){
		return value > 20;
	}); 
	
	//biggerThanTwenty的内容变为: {c: 30}


Hash 方法: every {#Hash:every}
--------------------------------

迭代Hash中的每个键值对, 如果每个迭代项都通过测试函数的测试, 则返回true.

### 语法:

	var allPassed = myHash.every(fn[, bind]);

### 参数:

1. fn   - (*function*)    测试函数
2. bind - (*object*, 可选) 函数中'this'引用的对象. 详见[Function:bind][]

#### 参数详解: fn

##### 语法:

	fn(value, key, hash)

##### 参数:

1. value - (mixed)  当前迭代值
2. key   - (string) 当前迭代键
3. hash  - (hash)   主调Hash

### 返回值:

* (*boolean*) 如果每个键值对都通过测试函数的测试,则返回true; 否则返回false

### 示例:

	var areAllBigEnough = ({
		a: 10, 
		b: 4, 
		c: 25, 
		d: 100
	}).every(function(value, key){
		return value > 20;
	}); //areAllBigEnough = false


Hash 方法: some {#Hash:some}
------------------------------

迭代Hash中的每个键值对, 如果至少有一个键值对通过测试函数的测试, 则返回true

### 语法:

	var anyPassed = myHash.any(fn[, bind]);

### 参数:

1. fn   - (*function*)    测试函数
2. bind - (*object*, 可选) 函数中'this'引用的对象. 详见[Function:bind][]

#### 参数详解: fn {#Hash:some:fn}

##### 语法:

	fn(value, key, hash)


##### 参数:

1. value - (mixed)  当前迭代值
2. key   - (string) 当前迭代键
3. hash  - (hash)   主调Hash

### 返回值:

* (*boolean*) 如果至少有一个键值对通过给定测试函数的测试,则返回true; 否则返回false

### 示例:

	var areAnyBigEnough = ({
		a: 10, 
		b: 4, 
		c: 25, 
		d: 100
	}).some(function(value, key){
		return value > 20;
	}); //isAnyBigEnough = true



Hash 方法: getClean {#Hash:getClean}
--------------------------------------

返回Hash中存储的键值对对象(不包含Hash的prototype)

### 语法:

	myHash.getClean();

### 返回值:

* (*object*) 键值对对象

### 示例:

	var hash = new Hash({
		'name': 'John',
		'lastName': 'Doe'
	});
	
	hash = hash.getClean(); // hash将不再拥有Hash的prototype
	hash.each(); 			//因此, 调用出错!



Hash 方法: getKeys {#Hash:getKeys}
------------------------------------

返回一个Hash中包含的所有键的数组.

数组中键的排列顺序和[Hash:getValues][]方法所返回的值数组的顺序是一一对应的

### 语法:

	var keys = myHash.getKeys();

### 返回值:

* (*array*) Hash中包含的所有键的数组



Hash 方法: getValues {#Hash:getValues}
----------------------------------------

返回一个Hash中包含的所有值的数组.

这个数组中键的排列顺序和[Hash:getKeys][]方法所返回的值数组的顺序是一一对应的

### 语法:

	var values = myHash.getValues();

### 返回值:

* (*array*) Hash中包含的所有值的数组



Hash 方法: toQueryString {#Hash:toQueryString}
------------------------------------------------

由Hash中的键值对生成一个查询字符串(这些值都经过URI编码)

### 语法:

	var queryString = myHash.toQueryString();
	var queryString = Hash.toQueryString(source);
    
### 参数:

1. source - (*object*) 用于生成查询字符串的数据对象

### 返回值:

* (*string*) 查询字符串

### 示例:

#### 静态方式:

	Hash.toQueryString({
		apple: "red", 
		lemon: "yellow"
	}); 
	
	//返回 "apple=red&lemon=yellow"

#### 实例方式:

	var myHash = new Hash({
		apple: "red", 
		lemon: "yellow"
	});
	
	myHash.toQueryString(); //返回 "apple=red&lemon=yellow"



[Array:indexOf]: /Native/Array/#Array:indexOf
[fn]: #Hash:some:fn
[Hash:getKeys]: #Hash:getKeys
[Hash:getValues]: #Hash:getValues


工具函数 {#Utility}
============================

函数: $H {#H}
-----------------

新建Hash实例(new [Hash](/Core/#Hash))的快捷函数

### 另参考:

- [Hash][]



[Hash]: /Native/Hash