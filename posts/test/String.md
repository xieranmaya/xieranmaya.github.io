title: String Documents
date: 2014-12-06 20:02:30
categories:
- doc
tags:
- doc
- js
- tag
---
Native: String {#String}
========================

字符串(String)的功能增强

### 另参考:

- [MDC String][]



String 方法: test {#String:test}
----------------------------------

使用正则表达式对字符串进行匹配测试. 详情请另参考[MDC Regexp:test][].

### 语法:

	myString.test(regex[,params]);

### 参数:

1. regex  - (*mixed*)       要匹配的字符串或正则表达式
2. params - (*string*, 可选) 如果第一个参数regex是一个字符串, 则本参数可为任何正则表达式参数(注意, 参数'g'无效)

### 返回值:

* (*boolean*) 匹配成功, 返回true
* (*boolean*) 匹配失败, 返回false

### 示例:

	"I like cookies".test("cookie"); 		//返回 true
	"I like cookies".test("COOKIE", "i"); 	//返回 true (忽略大小写)
	"I like cookies".test("cake"); 			//返回 false

### 另参考:

- [MDC Regular Expressions][]



String 方法: contains {#String:contains}
------------------------------------------

检测字符串内是否包含参数所给出的字符串. 

如果给出了separator(分隔符)这个参数, 则匹配时将把主字符串看作按分割符切分的一个列表, 然后将需要检测的字符串和这些列表项进行比较


### 语法:

	myString.contains(string[, separator]);

### 参数:

1. string    - (*string*) 目标测试字符串
2. separator - (*string*, 可选) 分割字符串(如: ' ', ','等)

### 返回值:

* (*boolean*) 如果目标字符串在本字符串内, 则返回true
* (*boolean*) 如果目标字符串在本字符串内不存在, 则返回false

### 示例:

	'a bc'.contains('bc'); 		//返回 true
	'a b c'.contains('c', ' '); //返回 true
	'a bc'.contains('b', ' '); 	//返回 false



String 方法: trim {#String:trim}
----------------------------------

清除字符串两端的空白字符串

### 语法:

	myString.trim();

### 返回值:

* (*string*) 清理后的字符串

### 示例:

	"    i like cookies     ".trim(); //返回 "i like cookies"



String 方法: clean {#String:clean}
------------------------------------

清除整个字符串中多余的空白字符串

### 语法:

	myString.clean();

### 返回值:

* (*string*) 清理后的字符串

### 示例:

	" i      like     cookies      \n\n".clean(); //返回 "i like cookies"



String 方法: camelCase {#String:camelCase}
--------------------------------------------

将以连字符分隔的字符串转换成以大小写形式进行分隔的字符串

### 语法:

	myString.camelCase();

### 返回值:

* (*string*) 以大小写形式进行分隔的字符串

### 示例:

	"I-like-cookies".camelCase(); //返回 "ILikeCookies"



String 方法: hyphenate {#String:hyphenate}
--------------------------------------------

将以大小写形式进行分隔的字符串转换成以字符分隔的字符串

### 语法:

	myString.hyphenate();

### 返回值:

* (*string*) 以连接字符号分隔的字符串

### 示例:

	"ILikeCookies".hyphenate(); //返回 "I-like-cookies"



String 方法: capitalize {#String:capitalize}
----------------------------------------------

将字符串中每个单词的首字母大写

### 语法:

	myString.capitalize();

### 返回值:

* (*string*) 转换后的字符串

### 示例:

	"i like cookies".capitalize(); //返回 "I Like Cookies"



String 方法: escapeRegExp {#String:escapeRegExp}
--------------------------------------------------

将字符串中对正则表达式敏感的字符进行转义

### 语法:

	myString.escapeRegExp();

### 返回值:

* (*string*) 转义后的字符串

### 示例:

	'animals.sheep[1]'.escapeRegExp(); //返回 'animals\.sheep\[1\]'



String 方法: toInt {#String:toInt}
------------------------------------

将字符串解析为一个数值, 并以给出的基准进制计算为一个十进制整数

### 语法:

	myString.toInt([base]);

### 参数:

1. base - (*number*, 可选) 基准进制(默认为10).

### 返回值:

* (*number*) 解析并计算后的数值
* (*false*)  如果字符串内容不是数值, 则返回NaN

### 示例:

	"4em".toInt(); 	//返回 4
	"10px".toInt(); //返回 10

### 另参考:

- [MDC parseInt][]



String 方法: toFloat {#String:toFloat}
----------------------------------------

将字符串解析为一个浮点数

### 语法:

	myString.toFloat();

### 返回值:

* (*number*) 浮点数
* (*false*) 如果字符串内容不是数值, 则返回NaN

### 示例:

		"95.25%".toFloat(); //返回 95.25
		"10.848".toFloat(); //返回 10.848

### 另参考:

- [MDC parseFloat][]



String 方法: hexToRgb {#String:hexToRgb}
------------------------------------------

将代表十六进制颜色代码的字符串转换成RGB格式的颜色代码. 

字符串的颜色格式必须是如下格式的(可以不带前缀的#):'#ffffff', #fff', 'ffffff', 或 'fff'

### 语法:

	myString.hexToRgb([array]);

### 参数:

1. array - (*boolean*, 可选) 如果为true, 则输出为一个数组形式, 而不是通常的字符串形式

### 返回值:

* (*string*) RGB格式的颜色代码字符串
* (*array*)  如果设置了array为true, 则返回数组形式的RGB颜色代码

### 示例:

	"#123".hexToRgb(); 			//返回 "rgb(17,34,51)"
	"112233".hexToRgb(); 		//返回 "rgb(17,34,51)"
	"#112233".hexToRgb(true); 	//返回 [17,34,51]



String 方法: rgbToHex {#String:rgbToHex}
------------------------------------------

将代表RGB格式的颜色代码的字符串转换成十六进制颜色代码. 

字符串的RGB颜色格式必须是如下格式:"rgb(255,255,255)", 或 "rgba(255,255,255,1)"

### 语法:

	myString.rgbToHex([array]);

### 参数:

1. array - (*boolean*, 可选) 如果为true, 则输出为一个数组形式(如： ['ff','33','00']), 而不是通常的字符串形式(如: "#ff3300")

### 返回值:

* (*string*) 十六进制的颜色代码字符串; 或者, 如果RGB代码设置了第四个值(alpha)为0, 则返回'transparent'
* (*array*) 如果设置了array为true, 则返回数组形式的十六进制颜色代码

### 示例:

	"rgb(17,34,51)".rgbToHex(); 	//返回 "#112233"
	"rgb(17,34,51)".rgbToHex(true); //返回 ['11','22','33']
	"rgba(17,34,51,0)".rgbToHex(); 	//返回 "transparent"

### 另参考:

- [Array:rgbToHex][]



String 方法: stripScripts {#String:stripScripts}
------------------------------------------

剥离字符串中的<script>脚本代码块

### 语法:

	myString.stripScripts([evaluate]);

### 参数:

1. evaluate - (*boolean*, 可选) 如果为true, 则字符串中包含的脚本代码将被执行

### 返回值:

* (*string*) - 剥离脚本代码后的字符串

### 示例:

	var myString = "<script>alert('Hello')</script>Hello, World.";
	
	myString.stripScripts(); 		//返回 "Hello, World."
	myString.stripScripts(true); 	//显示 "Hello",  然后返回 "Hello, World."


String 方法: substitute {#String:substitute}
------------------------------------------

对字符串中给出的替换标记进行值替换(类似简单模板).

### 语法:

	myString.substitute(object[, regexp]);

### 参数:

1. object - (*mixed*)       用于对字符串进行替换填充的对象
1. regexp - (*regexp*, 可选) 自定义替换的正则表达式模式(需要带有g参数). 默认值: /\\?\{([^}]+)\}/g (即替换大括号标识的区域)

### 返回值:

* (*string*) - 替换后的字符串

### 示例:

	var myString = "{subject} is {property_1} and {property_2}.";
	
	var myObject = {
		subject: 'Jack Bauer', 
		property_1: 'our lord', 
		property_2: 'savior'
	};
	
	myString.substitute(myObject); //结果: Jack Bauer is our lord and savior



[MDC String]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:String
[MDC Regexp:test]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Objects:RegExp:test
[MDC Regular Expressions]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Guide:Regular_Expressions
[MDC parseInt]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Functions:parseInt
[MDC parseFloat]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Functions:parseFloat
[MDC Array]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Array
[String:trim]: #String:trim
[Array:rgbToHex]: /Native/Array/#Array:rgbToHex
