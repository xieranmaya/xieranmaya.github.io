Native: Function {#Function}
============================

函数(Function)的功能增强

### 另参考:

- [MDC Function][]



Function 方法: create {#Function:create}
------------------------------------------

用于创建闭包函数的基础方法.(下面的其他Function扩展方法都基于本方法)

### 语法:

	var createdFunction = myFunction.create([options]);

### 参数:

1. [options] - (*object*, 可选) 创建闭包函数时的可选项. 如果未指定可选项,则创建一个原函数的副本

#### 可选项: {#Function:create:options}

* bind       - (*object*: 默认为 主调函数自身) "this"所引用的对象
* event      - (*mixed*: 默认为 false) 如果为true, 则函数将作为事件监听器处理(函数第一个参数将传入event对象); 如果设置的是一个类名,则函数第一个将传入一个该类的实例(该类的构造方法中将传入event对象)
* arguments  - (*mixed*: 默认为 标准的arguments) 生成的闭包函数所携带的参数(单个参数或一个数组参数). 如果同时设置了event和arguments,则event作为闭包函数的第一个参数,arguments指定的参数紧随其后
* delay      - (*number*: 默认为 无延迟) 如果设置了该项, 则生成的闭包函数在执行前将产生一个指定毫秒数的延迟, 并返回一个定时器引用
* periodical - (*number*: 默认为 无定时) 如果设置了该项, 则生成的闭包函数将以指定毫秒数的时间间隔反复执行, 并返回一个定时器引用
* attempt    - (*boolean*: 默认为 false) 如果为true, 则闭包函数在生成后将立即尝试执行,如果执行成功,则返回运行结果;否则返回null

### 返回值:

* (*function*) 根据给出可选项而创建的闭包函数

### 示例:

	var myFunction = function(){
		alert("I'm a function. :)");
	};

	var mySimpleFunction = myFunction.create(); //最简单的myFunction的一个副本

	var myAdvancedFunction = myFunction.create({ //这个闭包生成后,将立即开始尝试调用(attemp设为true)
		arguments: [0,1,2,3],
		attempt: true,
		delay: 1000,
		bind: myElement
	});



Function 方法: pass {#Function:pass}
--------------------------------------

返回指定了携带参数和绑定this对象的闭包函数

### 语法:

	var newFunction = myFunction.pass([args[, bind]]);

### 参数:

1. args - (*mixed*, 可选) 传递给闭包函数的参数(如果是多个参数,必须使用数组)
2. bind - (*object*, 可选) 闭包函数中"this"引用的对象

### 返回值:

* (*function*) 生成的闭包函数

### 示例:

	var myFunction = function(){
		var result = 'Passed: ';
		for (var i = 0, l = arguments.length; i < l; i++){
			result += (arguments[i] + ' ');
		}
		return result;
	}
	var myHello = myFunction.pass('hello');
	var myItems = myFunction.pass(['peach', 'apple', 'orange']);

	//执行生成的闭包函数:
	alert(myHello()); //显示 Passed: hello
	alert(myItems()); //显示 Passed: peach apple orange



Function 方法: attempt {#Function:attempt}
--------------------------------------------

尝试执行闭包函数

### 语法:

	var result = myFunction.attempt([args[, bind]]);

### 参数:

1. args - (*mixed*, 可选)  传递给闭包函数的参数(如果是多个参数,必须使用数组)
2. bind - (*object*, 可选) 闭包函数中"this"引用的对象

### 返回值:

* (*mixed*) 执行后的返回结果;如果执行出错,返回null

### 示例:

	var myObject = {
		'cow': 'moo!'
	};

	var myFunction = function(){
		for (var i = 0; i < arguments.length; i++){
			if(!this[arguments[i]]) throw('doh!');
		}
	};
	
	var result = myFunction.attempt(['pig', 'cow'], myObject); //result = false



Function 方法: bind {#Function:bind}
--------------------------------------

重新绑定函数中this所引用的对象

### 语法:

	myFunction.bind([bind[, args[, evt]]]);

### 参数:

1. bind - (*object*, 可选) 函数中"this"引用的对象
2. args - (*mixed*, 可选)  传递给函数的参数(如果是多个参数,必须使用数组)

### 返回值:

* (*function*) 重新绑定后的函数

### 示例:

	function myFunction(){
		//注意:　当前'this'引用的对象是window对象
		//以下的语句在真正使用的时候,必须绑定一个Element对象
		this.setStyle('color', 'red');
	};
	
	var myBoundFunction = myFunction.bind(myElement);  //绑定myElement对象(一个Element实例)
	myBoundFunction(); //myElement的文本颜色变成红色



Function 方法: bindWithEvent {#Function:bindWithEvent}
--------------------------------------------------------

重新绑定函数中this所引用的对象,并向函数参数传递event对象(该方法生成的函数通常用作事件监听函数)

一般和[Element:addEvent][]配合使用

### 语法:

	myFunction.bindWithEvent([bind[, args[, evt]]]);

### 参数:

1. bind - (*object*, 可选) 函数中"this"所引用的对象
2. args - (*mixed*, 可选)  传递给函数的参数(如果是多个参数,必须使用数组)

### 返回值:

* (*function*) 重新绑定后的函数

### 示例:

	function myFunction(e, add){
		//注意:　当前'this'引用的对象是window对象
		//以下的语句在真正使用的时候,必须绑定一个Element对象
		this.setStyle('top', e.client.x + add);
	};
	
	$(myElement).addEvent('click', myFunction.bindWithEvent(myElement, 100);
	
	//当myElement的点击事件触发时, 元素的位置移动到'当前鼠标位置 + 100'处



Function 方法: delay {#Function:delay}
----------------------------------------

延迟执行函数

### 语法:

	var timeoutID = myFunction.delay([delay[, bind[, args]]]);

### 参数:

1. delay - (*number*, 可选) 延迟毫秒数
2. bind - (*object*, 可选)  函数对象中"this"引用的对象
3. args - (*mixed*, 可选)   传递给函数的参数(如果是多个参数,必须使用数组)

### 返回值:

* (*number*) 定时器引用(用于清除这个定时器时使用)

### 示例:

	var myFunction = function(){
		alert('moo! Element id is: ' + this.id); 
	};
	
	//等待50毫秒后执行
	myFunction.delay(50, myElement); //显示: 'moo! Element id is: ... '

	//匿名函数的延迟执行
	function(){ 
		alert('one second later...'); 
	}.delay(1000);


### 另参考:

- [$clear][], [MDC setTimeout][]



Function 方法: periodical {#Function:periodical}
--------------------------------------------------

以指定的间隔反复执行函数. 可使用[$clear][]来停止执行

### 语法:

	var intervalID = myFunction.periodical([period[, bind[, args]]]);

### 参数:

1. period - (*number*, 可选) 间隔毫秒数
2. bind - (*object*, 可选)   函数对象中"this"所引用的对象
3. args - (*mixed*, 可选)    传递给闭包的参数(如果是多个参数,必须使用数组)

### 返回值:

* (*number*) 定时器引用(用于清除这个定时器时使用)

### 示例:

	var Site = { counter: 0 };
	var addCount = function(){ 
		this.counter++; 
	};
	addCount.periodical(1000, Site);


### 另参考:

- [$clear][], [MDC setInterval][]



Function 方法: run {#Function:run}
------------------------------------

根据指定的参数和this绑定来执行函数

### 语法:

	var myFunctionResult = myFunction.run(args[, bind]);

### 参数:

1. args - (*mixed*)        单个参数, 或一个参数数组
2. bind - (*object*, 可选)  函数对象中"this"引用的对象

### 返回值:

* (*mixed*) 函数执行后的返回值

### 示例:

#### 简单执行:

	var myFn = function(a, b, c){
		return a + b + c;
	}
	var myArgs = [1,2,3];
	myFn.run(args); //返回: 6


#### 绑定this执行:

	var myFn = function(a, b, c) {
		return a + b + c + this;
	}
	var myArgs = [1,2,3];
	myFn.run(args, 6); //返回: 12 (绑定后,myFn里的this值为6)



[options]: #Function:create:options
[Element:addEvent]: /Element/Element.Event/#Element:addEvent
[$clear]: /Core/Core/#clear
[MDC Function]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Function
[MDC setInterval]: http://developer.mozilla.org/en/docs/DOM:window.setInterval
[MDC setTimeout]: http://developer.mozilla.org/en/docs/DOM:window.setTimeout