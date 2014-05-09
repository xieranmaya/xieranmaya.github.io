Native: Number {#Number}
========================

数字(Number)的功能增强

### 另参考:

- [MDC Number][]

### 备注:

所有Javascript标准Math对象中的方法都被映射至Number中,可在Number对象上直接调用, 如:

- 标准用法: Math.abs(-123)

- Mootools用法: (-123).abs()


Number 方法: limit {#Number:limit}
------------------------------------

将取值范围限制在指定区间(在区间内,取原值;超出区间,则取邻近的区间边界值)

### 语法:

	myNumber.limit(min, max);

### 参数:

1. min - (*number*) 下限
2. max - (*number*) 上限

### 返回值:

* (*number*) 在区间内取出的值

### 示例:

	(12).limit(2, 6.5);  //返回: 6.5
	(-4).limit(2, 6.5);  //返回: 2
	(4.3).limit(2, 6.5); //返回: 4.3



Number 方法: round {#Number:round}
------------------------------------

对数值进行指定位上的四舍五入

### 语法:

	myNumber.round([precision]);

### 参数:

1. precision - (*number*, 可选: 默认为0) 数值的精度

### 返回值:

* (number) 四舍五入后的值

### 备注:

- 参数可以为负数

### 示例:

	(12.45).round()   //返回: 12
	(12.45).round(1)  //返回: 12.5
	(12.45).round(-1) //返回: 10



Number 方法: times {#Number:times}
------------------------------------

以本数值表示的次数进行迭代

### 语法:

	myNumber.times(fn[, bind]);

### 参数:

1. fn   - (*function*) 作用于迭代项的函数. 当前迭代值将作为参数传入该函数
2. bind - (*object*, 可选) "this"所引用的对象, 详情请参考[Function:bind](/Native/Function/#Function:bind).

### 示例:

	(4).times(alert); //依次显示 "0", "1", "2", "3"



Number 方法: toFloat {#Number:toFloat}
----------------------------------------

将数值转换成浮点数

### 语法:

	myNumber.toFloat();

### 返回值:

* (*number*) 浮点数

### 示例:

	(111).toFloat();    //返回 111
	(111.1).toFloat();  //返回 111.1



Number 方法: toInt {#Number:toInt}
------------------------------------

将数值以指定进制为基准进行计算转换为十进制整数

### 语法:

	myNumber.toInt([base]);

### 参数:

1. base - (*number*, 可选: 默认为10) 基准进制

### 返回值:

* (*number*) 转换后的整数

### 示例:

	(111).toInt();   //返回 111 
	(111.1).toInt(); //返回 111
	(111).toInt(2);  //返回 7 (111代表二进制7)



[MDC Number]: http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Number