title: css learn
date: 2014-12-05 19:58:13
categories:
- css
tags:
- css
- browser
- bootstrap
---
发现一些按钮的盒模型被user agent style置为border-box

比如
```
input[type=submit],
input[type=button],
input[type=file],
input[type=reset],
button{
	box-sizing:border-box
}
```


这样也好,是为了让它的高度比较好设置,毕竟一般button的border是其呈现的一部分

