title: bash 学习笔记
date: 2014-12-06 10:32:50
categories:
- learn
tags:
- bash
---
bash 常用功能：
```
#数学运算
x=$(($y+5))

#字符串拼接
str2="abc"$str".json"

#字符串替换
a=${str/"abc"/"def"} #把abc替换成def

#字符替换
str2=$(echo $str | tr 'c' 'x') #把str里的c都替换成x
str3=$(echo $str | tr 'abc' 'x') $把str里的a,b,c分别都替换成x

#字符串截取
str2=$(echo $str | cut -c8-10) #截取字符串第8到10位

#读取输入
read name #把用户输入存到name变量中，可以输入空格

#条件判断
if [[ $lineNum == 1 && $line == "abc"* ]]; then #行号为1且该行以abc开头
fi

#列出文件夹中文件个数
num=$(ls *.txt | wc -l)
#wc 是wordcount，-l是按行数

#读取文件内容到变量
content=$(<$filename)
content2=$(<abc.txt)

echo $content   #不会输出回车
echo "$content" #会输出回车


```