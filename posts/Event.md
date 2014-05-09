Native: Event {#Event}
======================

MooTools框架的事件对象包装类


Event 方法: constructor {#Event:constructor}
----------------------------------------------

### 语法:

	new Event([event[, win]]);

### 参数:

1. event - (*event*)  HTMLEvent对象
2. win   - (*window*, 可选: 默认为window) 事件的上下文

#### 属性:

* shift         - (*boolean*) 用户是否按下shift键
* control       - (*boolean*) 用户是否按下control键
* alt           - (*boolean*) 用户是否按下alt键
* meta          - (*boolean*) 用户是否按下meta键
* wheel         - (*number*)  鼠标滚轮的滚动量
* code          - (*number*)  按键的键盘代码
* page.x        - (*number*)  鼠标相对整个window的x坐标
* page.y        - (*number*)  鼠标相对整个window的y坐标
* client.x      - (*number*)  鼠标相对整个页面可视区域的x坐标
* client.y      - (*number*)  鼠标相对整个页面可视区域的y坐标
* key           - (*string*)  按键的名称. 可为如下: 'enter', 'up', 'down', 'left', 'right', 'space', 'backspace', 'delete', 以及 'esc'
* target        - (*element*) 事件目标对象
* relatedTarget - (*element*) 事件目标的参照对象

### 示例:

	$('myLink').addEvent('keydown', function(event){
	 	//传入的event已经是一个Event类的示例 
		alert(event.key);
		alert(event.shift);
		
		//Ctr + S 组合键
		if (event.key == 's' && event.control) {
			alert('Document saved.');
		}
	});

### 备注:

- 要正确获取event.page / event.client, 则需要页面使用[标准模式](http://hsivonen.iki.fi/doctype/)的DOCTYPE
- 每个使用addEvent方法添加的事件event对象将自动获取到mootools提供的方法扩展, 不需要再去手工创建实例


Event 方法: stop {#Event:stop}
--------------------------------

停止事件传播和中止执行事件的默认行为

###	语法:

	myEvent.stop();

### 返回值:

* (*object*) Event实例

###	示例:

##### HTML:

	<a id="myAnchor" href="http://google.com/">Visit Google.com</a>

##### JavaScript

	$('myAnchor').addEvent('click', function(event){
		event.stop(); //阻止链接的默认行为: 打开链接到google.com
		
		this.setText("Where do you think you're going?");
		
		function(){
			this.setText("Instead visit the Blog.").set('href', 'http://blog.mootools.net');
		}.delay(500, this);
	});

###	备注:

- 在事件监听函数中返回false的话, 同样也可起到停止事件传播的效果

### 另参考:

- [Element.addEvent](#Element:addEvent), [Element.stopPropagation](#Event:stopPropagation), [Event.preventDefault](#Event:preventDefault), [Function:delay][]



Event 方法: stopPropagation {#Event:stopPropagation}
------------------------------------------------------

停止事件的传播(停止事件在DOM结构中进行冒泡传递)

###	语法:

	myEvent.stopPropagation();

###	返回值:

* (*object*) Event对象

###	示例:

此示例中, 请设置myChild的覆盖区域大小比myElement的小, 这样便于测试和看清区别.

##### HTML:

	<div id="myElement">
		<div id="myChild"></div>
	</div>

##### JavaScript

	$('myElement').addEvent('click', function(){
		alert('click');
		return false; //和stopPropagation方法效果等同
	});
	
	$('myChild').addEvent('click', function(event){
		event.stopPropagation(); //阻止事件的传播, 这样myChild的click事件触发后, myElement的click事件就不会被触发
	});

### 另参考:

- [Element:addEvent](#Element:addEvent)
- [MDC event.stopPropagation](http://developer.mozilla.org/en/docs/DOM:event.stopPropagation)



Event 方法: preventDefault {#Event:preventDefault}
----------------------------------------------------

中止执行事件的默认行为

###	语法:

	myEvent.preventDefault();

### 返回值:

* (*object*) Event实例

###	示例:

##### HTML:

	<form>
		<input id="myCheckbox" type="checkbox" />
	</form>

##### JavaScript

	$('myCheckbox').addEvent('click', function(event){
		event.preventDefault(); //点击后, myCheckbox将不会变成"checked"的选中状态
	});

### 另参考:

- [Element:addEvent](#Element:addEvent)
- [MDC event.preventDefault](http://developer.mozilla.org/en/docs/DOM:event.preventDefault)


Hash: Event.Keys {#Event-Keys}
==============================

可以向Event.Keys中添加其他的 键盘代码/名 映射

#### 示例:

    Event.Keys.shift = 16;
    
    $('myInput').addEvent('keydown', function(event){
	    if (event.key == "shift") {
	    	alert("You pressed shift.");
	    }
    });



[$]: /Element/#dollar
[Function]: /Native/Function
[Function:bind]: /Native/Function/#Function:bind
[Function:pass]: /Native/Function/#Function:pass
[Function:delay]: /Native/Function/#Function:delay