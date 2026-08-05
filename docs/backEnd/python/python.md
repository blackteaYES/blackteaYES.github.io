---
date: 2023-02-24
categories:
  - python
tag:
  - 开发
  - python

---


#  Python基础

##  常用的6种数据类型

| 类型               | 描述                                                         | 说明                                                         |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 数字（number）     | 支持：<br />整数（int）<br />浮点数（float）<br />复数（complex）<br />布尔（bool） | 整数(int),如：10、-10<br/>----------------------------------------------------------------------------------<br />浮点数(f1oat),如：13.14、-13.14<br/>-----------------------------------------------------------------------------------<br />复数(complex),如：4+3j,以j结尾表示复数<br/>-----------------------------------------------------------------------------------<br />布尔(bool)表达现实生活中的逻辑，即真和假，True表示真，<br/>False表示假。<br/>True本质上是一个数字记作1，False记作0 |
| 字符串（string）   | 描述文本的一种数据类型                                       | 字符串(string)由任意数量的字符组成                           |
| 列表（list）       | 有序的可变序列                                               | Python中使用最频繁的数据类型，可有序记录一堆数据             |
| 元组（tuple）      | 有序的不可变序列                                             | 可有序记录一堆不可变的Python数据集合<br/>                    |
| 集合（set）        | 无序不重复集合                                               | 可无序记录一堆不重复的Python数据集合<br/>                    |
| 字典（Dictionary） | 无序的Key-Value集合                                          | 可无序记录一堆Key-Value型的Python数据集合                    |



> 字面量代码：


```python
int_value = 6
float_value = 3.14
str_value = "黑马"

print("int：", int_value)
print("float：", int_value)
print("string：", str_value)
```


> 打印结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\01_Python中的字面量.py"
int： 6
float： 6
string： 黑马

[Done] exited with code=0 in 0.053 seconds
```


##  注释

> 注释代码：


```python
# 我是单行注释
int_value = 6
float_value = 3.14
str_value = "黑马"

"""
我是多行注释
1
2
3
"""

print("int：", int_value)
print("float：", int_value)
print("string：", str_value)
```


> 打印结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\02_Python中的注释.py"
int： 6
float： 6
string： 黑马

[Done] exited with code=0 in 0.062 seconds
```


​    

##  变量

###  什么是变量？

变量：在程序运行时，能储存计算结果或能表示值的抽象概念。 简单的说，变量就是在程序运行时，记录数据用的。

![变量的定义格式](/assets/img/Python基础/变量的定义格式.png)

````python 变量代码：

    """
    当前余额为50元,
    买一支冰淇淋花费5元,
    再买一瓶可乐花费3.5元，
    打印出钱包剩余金额
    
    """
    
    amount = 50
    amount = amount - 5
    amount = amount - 3.5
    
    print("钱包余额为:", amount)
````

> 打印结果：
````shell

    [Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\03_Python中的变量.py"
    钱包余额为: 41.5
    
    [Done] exited with code=0 in 0.054 seconds
````

##  数字类型

###  变量有类型吗？

    我们通过type(变量)可以输出类型，这是查看变量的类型还是数据的类型？

    查看的是：变量存储的数据的类型。因为，变量无类型，但是它存储的数据有。

![变量有类型嘛？](/assets/img/Python基础/变量有类型嘛？.png)

> 数据类型代码：
````python
    from re import A
​    
​    name = "张三"
​    name_type = type(name)
​    age = 18
​    age_type = type(age)
​    amount = 35.5
​    amount_type = type(amount)
​    
    print("name 的类型是：", name_type)
    print("age 的类型是：", age_type)
    print("amount 的类型是：", amount_type)

````
​    

> 打印结果：
````shell

    [Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\04_Python中的变量类型.py"
    name 的类型是： <class 'str'>
    age 的类型是： <class 'int'>
    amount 的类型是： <class 'float'>
    
    [Done] exited with code=0 in 0.066 seconds
````

##  数据类型转换

###  为什么要转换类型？

数据类型之间，在特定的场景下，是可以相互转换的，如字符串转数字、数字转字

符串等

那么，我们为什么要转换它们呢？

数据类型转换，将会是我们以后经常使用的功能。

如：

  * 从文件中读取的数字，默认是字符串，我们需要转换成数字类型； 
  * 后续学习的iput0语句，默认结果是字符串，若需要数字也需要转换； 
  * 将数字转换成字符串用以写出到外部系统； 
  * 等等； 

###  常见的转换语句

语句（函数）  |  说明  
---|---  
int(x)  |  将x转换为一个整数  
float(x)  |  将x转换为一个浮点数  
str(x)  |  将对象x转换为字符串  

这三种转换都是返回值得，可以使用 ` print() ` 直接输出或使用变量存储结果值。

> 常见类型转换代码：
````python

    # 数字转字符串
    int_value = 11
    str_int = str(int_value)
    print(type(str_int), str_int)
    
    float_value = 11.11
    str_float = str(float_value)
    print(type(str_float), str_float)

​    # 字符串转int
​    str_num = "123"
​    int_num = int(str_num)
​    print(type(int_num), int_num)
​    
    """
    错误示例之非int字符串转int
    
    错误提示: ValueError: invalid literal for int() with base 10: '123abc'
    """
    # str_num_error = "123abc"
    # int_num_fail = int(str_num_error)
    # print(type(int_num_fail), int_num_fail)

​    # 字符串转float
​    str_f = "1.01"
​    float_f = float(str_f)
​    print(type(float_f), float_f)
​    
    """
    错误示例之非float字符串装float
    
    错误提示: ValueError: could not convert string to float: '1.01f'
    """
    # str_f_error = "1.01f"
    # float_f_fail = float(str_f_error)
    # print(type(float_f_fail), float_f_fail)

​    # int转float 
​    int_num = 1
​    float_num = float(int_num)
​    print(type(float_num), float_num)
​    
​    # float转int，会丢失精度
​    float_num_1 = 1.01
​    int_num_1 = int(float_num_1)
​    print(type(int_num_1), int_num_1)
````

<br/>

> 常见类型转换代码打印：
> 以下内容是注释掉报错代码后的结果。

````shell
    [Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\05_Python中的数据类型转换.py"
    <class 'str'> 11
    <class 'str'> 11.11
    <class 'int'> 123
    <class 'float'> 1.01
    <class 'float'> 1.0
    <class 'int'> 1
    
    [Done] exited with code=0 in 0.055 seconds
````

##  标识符

###  标识符命名规则·内容限定

标识符命名中，只允许出现：

  * 英文 

  * 中文 

  * 数字 

  * 下划线（_) 

这四类元素。

其余任何内容都不被允许。

注意：

  1. 不推荐使用中文； 
  2. 数字不可以开头； 
  3. 大小写是敏感的； 
  4. 不可使用关键字； 



##  运算符

###  算术运算符

![算术运算符](/assets/img/Python基础/算术运算符.png)

###  赋值运算符

![赋值运算符](/assets/img/Python基础/赋值运算符.png)

###  复合赋值运算符

![复合赋值运算符](/assets/img/Python基础/复合赋值运算符.png)



##  字符串扩展

###  字符串的三种定义方式

* 字符串在Python中有多种定义形式： 

    1. 单引号定义法：name = '黑马程序员' 
    2. 双引号定义法：name = "黑马程序员" 
    3. 三引号定义法：name = """黑马程序员""" 

三引号定义法，和多行注释的写法一样，同样支持换行操作。

使用变量接收它，它就是字符串。

不使用变量接收它，就可以作为多行注释使用。

<br/>
> 字符串的三种定义：

```python
# 1. 单引号字符串定义
str1 = '单引号字符串'

# 2. 双引号字符串定义
str2 = "双引号字符串"

# 3. 三引号字符串
str3 = """三引号字符串
1,
2,
3。
"""

print(str1, type(str1))
print(str2, type(str2))
print(str3, type(str3))
```

<br/>

> 打印效果：

```shell
    [Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\08_Python中的字符串三种定义方式.py"
单引号字符串 <class 'str'>
双引号字符串 <class 'str'>
三引号字符串
1,
2,
3。
 <class 'str'>

[Done] exited with code=0 in 0.116 seconds
```



####  字符串的引号嵌套

思考：如果我想要定义的字符串本身，是包含：单引号、双引号自身呢？如何写？

  * 单引号定义法，可以内含双引号； 
  * 双引号定义法，可以内含单引号； 
  * 可以使用转义字符 \ 来将引号解除效用，变成普通字符串； 

> 字符串引号嵌套：


```python
# 在单引号内包含双引号
name = '"红茶"'
print(name)

# 在双引号内包含单引号
name = "'红茶'"
print(name)

# 使用转义符 \ 解除引号的效用
name = "\"红茶\""
print(name)

name = '\'红茶\''
print(name)
```


> 打印嵌套结果：


```shell
"红茶"
'红茶'
"红茶"
'红茶'
```

更多转义字符查看： [ Python3 字符串 | 菜鸟教程 (runoob.com)
](https://www.runoob.com/python3/python3-string.html)

###  字符串拼接

如果我们有两个字符串（文本）字面量，可以将其拼接成一个字符串，通过+号即可

完成，如：

```python
print("学T来黑马" + "月薪过万")
```


> 输出结果：


```shell
学IT来黑马月薪过万
```


不过一般，单纯的2个字符串字面量进行拼接显得很呆，一般，字面量和变量或变量

和变量之间会使用拼接，如：

```python
name = "黑马程序员"
print("我的名字是："+name+", 我可以教大家IT技能")
```


> 输出结果：


```shell
我的名字是：黑马程序员，我可以教大家IT技能
```


注意：无法和 **非字符串类型** 进行拼接。

```python
# 字符串字面量拼接整数类型导致的错误
age = 16
print(my + c_name, "or", cn_name + "年龄是" + age)
```

```shell
TypeError: can only concatenate str (not "int") to str
```



###  字符串格式化

我们会发现，这个拼接字符串也不好用啊！

  1. 变量过多，拼接起来实在是太麻烦了 
        
        ```python
        print("我是”+name+",我的性别是："+sex+",我住在："+address+",我的爱好是："+hobby)
        ```


  2. 字符串无法和数字或其它类型完成拼接。 



所以有没有其他方式，即方便又支持拼接其它类型呢？

> 我们可以通过如下语法，完成字符串和变量的快速拼接。


```python
# 通过占位符的形式，完成拼接
my = "我是"
c_name = "红茶"
cn_name = "blacktea"
age = 16

print(my, c_name, "or", cn_name, "年龄是%s" % age)

birthday = 622
print(my, c_name, "or", cn_name, "年龄是%s生日是%s" % (age, birthday))
```


> 输出结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\07_Python中的字符串格式化.py"
我是 红茶 or blacktea 年龄是16
我是 红茶 or blacktea 年龄是16生日是622

[Done] exited with code=0 in 0.121 seconds
```


其中的，%s

  * % 表示：我要占位 
  * s 表示：将变量变成字符串放入占位的地方 

所以，综合起来的意思就是：我先占个位置，等一会有个变量过来，我把它变成字

符串放到占位的位置。

Python中，其实支持非常多的数据类型占位 最常用的是如下三类：

格式字符  |  转化  
---|---  
%s  |  将内容转换成字符串，放入占位位置  
%d  |  将内容转换成整数，放入占位位置  
%f  |  将内容转换成浮点型，放入占位位置  


```python
my = "我是"
c_name = "红茶"
age = 16
balance = 6.67
print(my+c_name+",年龄是%d,余额只有%f" % (age, balance))
```


> 打印结果：


```shell
我是红茶,年龄是16,余额只有6.670000
```

更多数据类型占位符查看： [ Python3 字符串 | 菜鸟教程 (runoob.com)
](https://www.runoob.com/python3/python3-string.html)

###  格式化的精度控制

我们可以使用辅助符号"m.n"来控制数据的宽度和精度。

  * m 控制宽度，要求是数字（很少使用），设置的宽度小于数字自身，不生效。 
  * .n 控制小数点精度，要求是数字，会进行小数的四舍五入。 

示例：

  * %5d：表示将整数的宽度控制在5位，如数字11，被设置为5d,就会变成：空格 空格 空格11，用三个空格补足宽度。 

  * %5.2f：表示将宽度控制为5，将小数点精度设置为2； 

小数点和小数部分也算入宽度计算。

如，对11.345设置了%7.2f后，结果是：空格空格11.35。

2个空格补足宽度，小数部分限制2位精度后，四舍五入为.35

  * %.2f：表示不限制宽度，只设置小数点精度为2，如11.345设置%.2f后，结果是11.35。 

> 精度控制代码：


```python
num1 = 11.123
print("数字11.123宽度限制为5,结果是:%5f" % num1)
print("数字11.123宽度限制为1,结果是:%1f" % num1)
print("数字11.123宽度限制为5,小数精度为2,,结果是:%5.2f" % num1)
print("数字11.123小数精度为2,,结果是:%.2f" % num1)
```


> 输出结果：


```shell
数字11.123宽度限制为5,结果是:11.123000
数字11.123宽度限制为1,结果是:11.123000
数字11.123宽度限制为5,小数精度为2,,结果是:11.12
数字11.123小数精度为2,,结果是:11.12
```


注意：我测试的结果并没有打印出空格。



###  字符串格式化方式2

目前通过%符号占位已经很方便了，还能进行精度控制。

可是追求效率和优雅的Python,是否有更加优雅的方式解决问题呢？

那当然：有。

通过语法："内容{变量}"的格式来快速格式化。

> 代码：


```pytho
"""
演示第二种字符串格式化的方式:f"{占位}"
"""
name = "红茶"
birthday = 622
age = 18
balance = 3.1456
print(f"我是{name},年龄为:{age},生日是:{birthday},余额为:{balance}")
```


> 输出结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\08_字符串格式化的方式2.py"
我是红茶,年龄为:18,生日是:622,余额为:3.1456

[Done] exited with code=0 in 0.056 seconds
```

注意：适合对精度没有要求的时候快速使用。



###  对表达式进行格式化

刚刚的演示，都是基于变量的。

可是，我想更加优雅些，少写点代码，直接对“表达式”进行格式化是否可行呢？

那么，我们先了解一下什么是表达式。

表达式：一条具有明确执行结果的代码语句

1+1、5*2,就是表达式，因为有具体的结果，结果是个数字。

又或者，常见的变量定义：

name = "张三" age = 1+1

> 代码：


```python
"""
演示对表达式进行字符串格式化
"""
print("1*1的结果是:%d" % 1*1)
print(f"1+1的结果是:{1+1}")
print("1*2的结果是:", 1*2)
print("字符串在Python中的类型名称是:%s" % type("字符串"))
```


> 输出结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_对表达式进行格式化.py"
1*1的结果是:1
1+1的结果是:2
1*2的结果是: 2
字符串在Python中的类型名称是:<class 'str'>

[Done] exited with code=0 in 0.054 seconds
```


###  股价计算小程序

> 代码：


```python
"""
定义如下变量：
name,公司名
stock_price,当前股价
stock_code,股票代码
stock_price_daily_growth_factor,股票每日增长系数，浮点数类型，比如1.2
growth_days,增长天数
计算，经过growth_days天的增长后，股价达到了多少钱
使用字符串格式化进行输出，如果是浮点数，要求小数点精度2位数。
股价19.99*系数1.2*7天=71.62778419199998，小数点现在精度2位后结果：71.63

"""
name = "红茶XX公司"
stock_price = 19.99
stock_code = "003032"
stock_price_daily_growth_factor = 1.2
growth_days = 7

result = stock_price * stock_price_daily_growth_factor**growth_days

print("""
公司:%s,股票代码:%s,当前股价:%.2f,
每日增长系数是:%.1f,经过%d天的增长后,股价达到了:%.2f
""" % (name, stock_code, stock_price, stock_price_daily_growth_factor, growth_days, result))
```


> 输出结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\股价计算小程序.py"

公司:红茶XX公司,股票代码:003032,当前股价:19.990000,
每日增长系数是:1.2,经过7天的增长后,股价达到了:71.63

[Done] exited with code=0 in 0.055 seconds
```




###  字符串如何比较大小

####  ASCII码表

![ ASCII码表图
](https://pic3.zhimg.com/80/v2-99d2c2240b51e0dc2772927113111992_720w.webp)

在程序中，字符串所用的所有字符如：

  * 大小写英文单词 
  * 数字 
  * 特殊符号(！、\、、@、#、空格等) 

都有其对应的ASCII码表值

每一个字符都能对应上一个：数字的码值

字符串进行比较就是基于数字的码值大小进行比较的。



####  字符串比较

字符串是按位比较，也就是一位位进行对比，只要有一位大，那么整体就大。

![字符串比较图](/assets/img/Python基础/字符串比较图.png)



##  数据输入（input语句）

###  inputi语句（函数）

我们前面学习过prit语句（函数），可以完成将内容（字面量、变量等）输出到屏幕

上。

在Python中，与之对应的还有一个inputi语句，用来获取键盘输入。

  * 数据输出：print 
  * 数据输入：input 

使用上也非常简单：

使用input()语句可以从键盘获取输入

使用一个变量接收（存储）iput语句获取的键盘输入数据即可

> 代码：


```python
"""
演示Python的input语句
获取键盘输入的信息
"""
print("您好，您的名称是?")
name = input()
msg = input(f"我可以叫您{name}先生吗?\n")
print("好的。")
```


> 输出结果：


```shell
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/07_input语句.py
您好，您的名称是?
绿毛虫
我可以叫您绿毛虫先生吗?
可以
好的。
PS D:\code\py\heima_py> 
```



###  欢迎登陆小程序    

```python
"""
定义两个变量，用以获取从键盘输入的内容，并给出提示信息：
变量1,变量名:user_name,记录用户名称
变量2,变量名:user_type,记录用户类型
"""

user_name = input("请输入姓名：")
user_type = input("请输入用户类型：")
print(f"您好：{user_name},您是尊贵的：{user_type},欢迎登陆。")
```


> 输出结果：


```shell
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/07_input语句/08_input语句之欢迎登陆小程序.py
请输入姓名：绿毛虫
请输入用户类型：svip
您好：绿毛虫,您是尊贵的：svip,欢迎登陆。
PS D:\code\py\heima_py> 
```



##  判断语句

###  布尔类型和比较运算符

[常用的6种数据类型](#常用的6种数据类型)



####  布尔类型的定义

布尔类型的字面量：

  * True表示真（是、肯定） 
  * False表示假（否、否定） 

定义变量存储布尔类型数据： **变量名称 = 布尔类型字面量**

布尔类型不仅可以自行定义，同时也可以通过计算的来，也就是使用比较运算符进行比较运算得到布尔类型的结果。



####  比较运算符

布尔类型的数据，不仅可以通过定义得到，也可以通过比较运算符进行内容比较得到。

| 运算符 | 描述                                                         | 示例                     |
| :----: | :----------------------------------------------------------- | ------------------------ |
|   ==   | 判断内容是否相等，满足为True,不满足为False                   | 如a=3,b=3,则(a=b)为True  |
|   !=   | 判断内容是否不相等，满足为True,不满足为False                 | 如a=1,b=3,则(a!=b)为True |
|   >    | 判断运算符左侧内容是否大于右侧<br />满足为True,不满足为False | 如a=7,b=3,则(a>b)为True  |
|   <    | 判断运算符左侧内容是否小于右侧<br />满足为True,不满足为False | 如a=3,b=7,则(a<b)为True  |
|   >=   | 判断运算符左侧内容是否大于等于右侧<br />满足为True,不满足为False | 如a=3,b=3,则a>=b)为True  |
|   <=   | 判断运算符左侧内容是否小于等于右侧<br />满足为True,不满足为False | 如a=3,b=3,则a<=b)为True  |


> 比较运算符代码：


```python
res1 = 10 > 5
print(f"10 > 5 的结果是:{res1}, 类型是:{type(res1)}")

name = "blacktea" 
res2 = name == 'blacktea'
print(f"\"blaktea\" == \'blacktea\' 的结果是:{res2}, 类型是:{type(res2)}")

res3 = name == "abs123"
print(f"\"blaktea\" == \"abs123\" 的结果是:{res3}, 类型是:{type(res3)}")
```


> 输出结果：


```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\08_判断语句\08_比较运算符.py"
10 > 5 的结果是:True, 类型是:<class 'bool'>
"blaktea" == 'blacktea' 的结果是:True, 类型是:<class 'bool'>
"blaktea" == "abs123" 的结果是:False, 类型是:<class 'bool'>

[Done] exited with code=0 in 0.06 seconds
```



###  if语句的基本格式

````
程序中的判断：

    if 要判断的条件:
    
        条件成立时，要执行的事情

注意：执行的事情这里需要4个空格缩进！
````

```python
# if语句代码

age_str = input("请输入您的年龄:")
age = int(age_str)

if age >= 18:
    print("时间过得真快啊,您已经成年了！")

print("今年都已经%d岁了啊" % age)
```

```shell
# 输出结果
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if判断语句.py
请输入您的年龄:18
时间过得真快啊,您已经成年了！
今年都已经18岁了啊
PS D:\code\py\heima_py>      
```



###  if else语句

````
程序中的判断：

    if条件:
        满足条件时要做的事情1
        满足条件时要做的事情2
        满足条件时要做的事情3
        (省略)
    else:
        不满足条件时要做的事情1
        不满足条件时要做的事情2
        不满足条件时要做的事情3
        (省略)
````

```python
#  if else 代码：

age_str = input("请输入您的年龄:")
age = int(age_str)

if age >= 18:
    print("您已经成年了！")
else:
    print("还有%d年成年!" % (18-age))    

print("时间过得真快啊,今年都已经%d岁了啊" % age)
```

```shell
#  输出结果

# 成年
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if_else判断语句.py
请输入您的年龄:18
您已经成年了！
时间过得真快啊,今年都已经18岁了啊
PS D:\code\py\heima_py> 

# 非成年
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if_else判断语句.py
请输入您的年龄:12
还有6年成年!
时间过得真快啊,今年都已经12岁了啊
PS D:\code\py\heima_py> 
```



###  if elif else语句


```python
# if elif else代码：

height = int(input("请输入身高(cm):"))
vip_level = int(input("请输入VIP等级:"))
condition_height = 120
condition_vip_level = 3

if height < condition_height:
    print("您升高未超过%d可以免费游玩。" % condition_height)
elif vip_level > condition_vip_level:
    print("您的会员等级超过%d级可以免费游玩。" % condition_vip_level)
else:
    print("免费条件不满足,需要票价10元。")        

print("祝您游玩愉快")
```

```shell
# 输出结果：

PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高(cm):130
请输入VIP等级:1
免费条件不满足,需要票价10元。
祝您游玩愉快
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高(cm):110
请输入VIP等级:1
您升高未超过120可以免费游玩。
祝您游玩愉快
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高(cm):130
请输入VIP等级:4
您的会员等级超过3级可以免费游玩。
祝您游玩愉快
PS D:\code\py\heima_py> 
```


###  判断语句的嵌套

![嵌套判断图](/assets/img/Python基础/嵌套判断图.png)


```python
# 判断语句嵌套代码：

height = int(input("请输入身高(cm):"))

condition_height = 120
condition_vip_level = 3

if height > condition_height:
    print("""
        您升高超过%d,不可以免费游玩,
        但是，如果会员等级超过%d,也可以免费游玩
    """ % (condition_height, condition_vip_level))
    if int(input("请输入VIP等级:")) > condition_vip_level:
         print("您的会员等级超过%d级可以免费游玩。" % condition_vip_level)
    else:
        print("免费条件不满足,需要票价10元。")       

print("祝您游玩愉快")
```


```shell
# 输出结果：

PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高(cm):130

        您升高超过120,不可以免费游玩,
        但是，如果会员等级超过3,也可以免费游玩

请输入VIP等级:4
您的会员等级超过3级可以免费游玩。
祝您游玩愉快

PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高(cm):120
祝您游玩愉快

PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高(cm):121

        您升高超过120,不可以免费游玩,
        但是，如果会员等级超过3,也可以免费游玩

请输入VIP等级:2
免费条件不满足,需要票价10元。
祝您游玩愉快
PS D:\code\py\heima_py>      
```

<br/>

###  实战案例

####  案例需求

定义一个数字（1~10，随机产生)，通过3次判断来猜出来数字?

####  案例要求

  1. 数字随机产生，范围1~10 
  2. 有3次机会猜测数字，通过3层嵌套判断实现 
  3. 每次猜不中，会提示大了或小了 

```python
import random

num_r = random.randint(1, 10)
print("当前随机生成的数字是:", num_r)
num = int(input("请输入数字(1~10),首次次机会："))

if num != num_r:
    if num > num_r:
        print("猜错了，且值大于随机值")
    else:
        print("猜错了，且值小于随机值")    
    num = int(input("请输入数字(1~10),第二次机会："))
    if num != num_r:
        if num > num_r:
            print("猜错了，且值大于随机值")
        else:
            print("猜错了，且值小于随机值")   
        num = int(input("请输入数字(1~10),最后一次次机会："))
        if num != num_r:
            print("三次都猜错了，您失败了。")
        else:
            print("恭喜您，最后一次猜到了")
    else:
        print("恭喜您，两次就猜对了")
else:
    print("恭喜您，第一次就猜对了")               
```



##  循环语句

![循环语句前言](/assets/img/Python基础/循环语句前言.png)



###  while循环的基础语法

````
程序中的循环：

    while 条件:
        条件满足时，做的事情1
        条件满足时，做的事情2
        条件满足时，做的事情3
        ...(省略)...
````

注意：做的事情这里需要4个空格缩进！


```python
# while循环的基础语法代码：

i = 0
while i < 100:
    print("做一件事情，序号:", i+1)
    i +=1

# 必然触发
print("做了%d件事情了哦。" % i)    
```


注意：

  1. while的条件需得到布尔类型，True表示继续循环，False表示结束循环。 

  2. 需要设置循环终止的条件，如+=1配合ⅰ<100，就能确保100次后停止，否则将无限循环。

  3. 空格缩进和f判断一样，都需要设置。 



###  while循环的基础案例

```python
# while循环的基础案例

sum = 0
step = 1

while step <= 100:
    sum +=step 
    step +=1

# 因为第100次的时候 step+1了，所以打印的时候-1。
print(f"1-100累加的和是{sum},循环次数为{step-1}")
```



###  while循环的嵌套应用


````
程序中的循环：

    while 条件1:
        条件1满足时，做的事情1
        条件1满足时，做的事情2
        条件1满足时，做的事情3
        ...(省略)...
        while 条件2:
        	条件2满足时，做的事情1
        	条件2满足时，做的事情2
        	条件2满足时，做的事情3
        	...(省略)...
````


###  while循环的嵌套案例


```python
"""
while循环的嵌套循环实现99乘法表
"""
i = 1

while i <= 9:
    j = 1
    while j <= i:
        # end="" 实现不换行, \t制表符进行对齐
        print("%d*%d=%d\t" % (j, i, i*j), end="")
        j +=1
    i +=1
    print()
```


```shell
# 输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\02_练习之九九乘法表.py"
1*1=1	
1*2=2	2*2=4	
1*3=3	2*3=6	3*3=9	
1*4=4	2*4=8	3*4=12	4*4=16	
1*5=5	2*5=10	3*5=15	4*5=20	5*5=25	
1*6=6	2*6=12	3*6=18	4*6=24	5*6=30	6*6=36	
1*7=7	2*7=14	3*7=21	4*7=28	5*7=35	6*7=42	7*7=49	
1*8=8	2*8=16	3*8=24	4*8=32	5*8=40	6*8=48	7*8=56	8*8=64	
1*9=9	2*9=18	3*9=27	4*9=36	5*9=45	6*9=54	7*9=63	8*9=72	9*9=81	

[Done] exited with code=0 in 0.072 seconds
```



###  for循环的基础语法

####  基础语法

除了while循环语句外，Python同样提供了for循环语句。

两者能完成的功能基本差不多，但仍有一些区别：

  * while循环的循环条件是自定义的，自行控制循环条件。 
  * for循环是一种”轮询”机制，是对一批内容进行”逐个处理”。 


````
程序中的for循环：
    for 临时变量 in 待处理数据集:
        循环满足条件时执行的代码
````


```python
# 遍历字符串代码：

name = "blacktea"

for c in name:
    print(c)
```


```shell
#输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\for循环语句\01_for循环之遍历字符串.py"
b
l
a
c
k
t
e
a

[Done] exited with code=0 in 0.063 seconds
```


同while循环不同，for循环是无法定义循环条件的。

只能从被处理的数据集中，依次取出内容进行处理。

所以，理论上讲，Python的for循环无法构建无限循环（被处理的数据集不可能无限大）。

#####  总结

1. for循环的语法格式是： for临时变量in待处理数据集(序列)：循环满足条件时执行的代码。

2. for循环的注意点： 
    - 无法定义循环条件，只能被动取出数据处理。 
    - 要注意，循环内的语句，需要有空格缩进。 



####  range语句


````
    for 临时变量 in 待处理数据集:
        循环满足条件时执行的代码
````        


语法中的：待处理数据集，严格来说，称之为：**序列类型**。

序列类型指，其内容可以一个个依次取出的一种类型，包括：

  * 字符串 
  * 列表 
  * 元组 
  * 等 

fo循环语句，本质上是遍历：**序列类型**。

尽管除字符串外，其它的序列类型目前没学习到，但是不妨碍我们通过学习rnge语

句，获得一个简单的数字序列。

````
    语法1：
    range(num)
    获取一个从0开始，到num结束的数字序列（不含num本身）
    如range(5)取得的数据是：[0,1,2,3,4]
    
    语法2：
    range(num1,num2)
    获得一个从num1开始，到num2结束的数字序列（不含num2本身）
    如，range(5,10)取得的数据是：[5,6,7,8,9]
    
    语法3：
    range(num1,num2,step)
    获得一个从num1开始，到num2结束的数字序列（不含num2本身）
    数字之间的步长，以step为准(step默认为1)
    如，range(5,10,2)取得的数据是：[5,7,9]
````


```python
# 代码：

num = 10

# range 语法1 range(num)
for i in range(num):
    print(i)

print("---------------------------------------------------")

# range 语法2 range(start, num)
start = 5
for i in range(start, num):
    print(i)

print("---------------------------------------------------")
# range 语法3 range(strat, num, step)
step = 2
for i in range(start, num, step):
    print(i)
```


```shell
# 输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\for循环语句\02_range语句.py"
0
1
2
3
4
5
6
7
8
9
---------------------------------------------------
5
6
7
8
9
---------------------------------------------------
5
7
9

[Done] exited with code=0 in 0.057 seconds
```




####  变量作用域


```python
# 代码：

print('for循环的作用域-----------------------------------------')
# 提前定义,就可以在for循环外使用,本质是覆盖
j = 0
for j in range(9):
    print(j)    
print(j)    
```


```shell
# 输出结果：

for循环的作用域-----------------------------------------
0
1
2
3
4
5
6
7
8
8
```



###  for循环的嵌套应用


```python
#for循环嵌套打印99乘法表：

for i in range(1, 10):
    for j in range(1, i+1):
        print(f'{j}*{i}={j*i}\t', end='')
    print()    
```


```shell
#  输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\for循环语句\03_for循环打印99乘法表.py"
1*1=1	
1*2=2	2*2=4	
1*3=3	2*3=6	3*3=9	
1*4=4	2*4=8	3*4=12	4*4=16	
1*5=5	2*5=10	3*5=15	4*5=20	5*5=25	
1*6=6	2*6=12	3*6=18	4*6=24	5*6=30	6*6=36	
1*7=7	2*7=14	3*7=21	4*7=28	5*7=35	6*7=42	7*7=49	
1*8=8	2*8=16	3*8=24	4*8=32	5*8=40	6*8=48	7*8=56	8*8=64	
1*9=9	2*9=18	3*9=27	4*9=36	5*9=45	6*9=54	7*9=63	8*9=72	9*9=81	

[Done] exited with code=0 in 0.06 seconds
```


​    

###  循环中断：break和continue

####  continue

continue关键字用于：中断本次循环，直接进入下一次循环

continue可以用于：for循环和while循环，效果一致

```python
for i in range(1,100):
    语句1
    continue
    语句2
```


* 在循环内，遇到continue就结束当次循环，进行下一次 
* 所以，语句2是不会执行的。 

应用场景:

在循环中，因某些原因，临时结束本次循环。


####  break

break关键字用于：直接结束循环

break可以用于：for循环和while循环，效果一致


```python
for i in range(1,100):
    语句1
    break
    语句2
语句3
```


在循环内，遇到oreak就结束循环了

所以，执行了语句1后，直接执行语句3了


```python
"""
    04_for循环之break和continue
"""

# continue
for i in range(1, 10):
    if i ==8:
        continue
    print(i)

print('-----------------------------------------------')

# beark
for i in range(1, 10):
    if i == 8:
        break
    print(i)
```


```shell
#输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\for循环语句\04_for循环之break和continue.py"
1
2
3
4
5
6
7
9
-----------------------------------------------
1
2
3
4
5
6
7

[Done] exited with code=0 in 0.06 seconds
```



###  for循环综合案例


```python
""""
05_for案例之发工资.py
"""
from random import randint
for i in range(1, 21):
    r_num = randint(1, 10)
    if r_num < 5:
        print(f'员工:{i},绩效分:{r_num},低于5分,不发工资。')
    else:
        print(f'员工:{i},绩效分:{r_num},发1000工资。')   
```


```shell
# 输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\02_Python入门语法\09_循环语句\for循环语句\05_for案例之发工资.py"
员工:1,绩效分:2,低于5分,不发工资。
员工:2,绩效分:5,发1000工资。
员工:3,绩效分:1,低于5分,不发工资。
员工:4,绩效分:9,发1000工资。
员工:5,绩效分:9,发1000工资。
员工:6,绩效分:8,发1000工资。
员工:7,绩效分:8,发1000工资。
员工:8,绩效分:7,发1000工资。
员工:9,绩效分:1,低于5分,不发工资。
员工:10,绩效分:6,发1000工资。
员工:11,绩效分:1,低于5分,不发工资。
员工:12,绩效分:8,发1000工资。
员工:13,绩效分:4,低于5分,不发工资。
员工:14,绩效分:3,低于5分,不发工资。
员工:15,绩效分:7,发1000工资。
员工:16,绩效分:10,发1000工资。
员工:17,绩效分:2,低于5分,不发工资。
员工:18,绩效分:4,低于5分,不发工资。
员工:19,绩效分:7,发1000工资。
员工:20,绩效分:5,发1000工资。

[Done] exited with code=0 in 0.061 seconds
```

<br/>

##  函数

###  函数初体验

函数：是组织好的，可重复使用的，用来实现特定功能的代码段。

```python
name "itheima"
length =len(name)
print(length)
# 结果为：7
```


为什么随时都可以使用len()统计长度？

因为，len()是Python内置的函数：

  * 是提前写好的 
  * 可以重复使用 
  * 实现统计长度这一特定功能的代码 


```python
"""
01_函数快速体验.py
"""

def len_str(str):
    count = 0
    for i in str:
        count += 1

    return count

str1 = '1234567890qazxsw...'
print(f'字符串{str1},长度为:{len_str(str1)}')
```


```shell
# 输出结果：

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\10_函数\01_函数快速体验.py"
字符串1234567890qazxsw...,长度为:19

[Done] exited with code=0 in 0.056 seconds
```


####  总结

1. 函数是： 
    组织好的、可重复使用的、用来实现特定功能的代码段。

2. 使用函数的好处是： 

    * 将功能封装在函数内，可供随时随地重复利用。

    * 提高代码的复用性，减少重复代码，提高开发效率。



###  函数的基础定义语法


```python
# 函数的定义：

def 函数名(传入参数):
    函数体
    return 返回值
```


函数使用步骤：

  * 先定义函数 
  * 后调用函数 

注意事项：

  * 参数不需要，可以省略 
  * 返回值不需要，可以省略 



###  函数的定义练习


```python
"""
02_函数基础定义练习案例.py

    定义一个函数，函数名任意，要求调用函数后可以输出如下欢迎语：
    欢迎来到黑马程序员！
    请出示您的健康码以及72小时核酸证明！
"""

def check():
    print('''
        欢迎来到黑马程序员！
        请出示您的健康码以及72小时核酸证明！
    ''')

check()    
    
```

```shell
# 输出结果

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\10_函数\02_函数基础定义练习案例.py"

        欢迎来到黑马程序员！
        请出示您的健康码以及72小时核酸证明！
        
[Done] exited with code=0 in 0.058 seconds        
```



###  函数的传入参数


```python
"""
03_函数的传入参数.py
    传入参数的功能是：在函数进行计算的时候，接受外部（调用时）提供的数据
"""

    print(f'{a}+{b}={a+b}')

add(1,5)    
```


```shell
# 输出结果

[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\10_函数\03_函数的传入参数.py"
1+5=6

[Done] exited with code=0 in 0.054 seconds
```


函数定义中，提供的a和b,称之为：形式参数（形参），表示函数声明将要使用2个参数

  * 参数之间使用逗号进行分隔 



函数调用中，提供的1和5，称之为：实际参数（实参），表示函数执行时真正使用的

参数值

  * 传入的时候，按照顺序传入数据，使用逗号分隔 



注意：传入参数的数量是不受限制的。

  * 可以不使用参数 
  * 也可以仅使用任意N个参数 



###  函数的参数练习案例

> 04_函数的练习案例之自动查核酸 代码：


```python
"""
04_函数的练习案例之自动查核酸.py
    定义一个函数，名称任意，并接受一个参数传入（数字类型，表示体温）
    在函数内进行体温判断（正常范围：小于等于37.5度)，并输出如下内容：

        欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
        体温测量中，您的体温是：37.3度，体温正常请进！

        欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
        体温测量中，您的体温是：39.3度，需要隔离！
"""

def check(temperature):
    if temperature <= 37.5:
        print(f'体温测量中，您的体温是：{temperature}度，体温正常请进！')
    else:
        print(f'体温测量中，您的体温是：{temperature}度，需要隔离！')

print('欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！')
check(float(input('请输入您的体温:')))            
```

```shell
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:37.5
体温测量中，您的体温是：37.5度，体温正常请进！
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:38
体温测量中，您的体温是：38.0度，需要隔离！
PS D:\code\py\heima_py> & D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:36
体温测量中，您的体温是：36.0度，体温正常请进！
PS D:\code\py\heima_py>
```



###  函数返回值

参考  [函数的基础定义语法 ](#函数的基础定义语法)  之 **函数的定义** 。



###  函数返回值之None

####  None类型

思考：如果函数没有使用return语句返回数据，那么函数有返回值吗？

实际上是：有的。



Python中有一个特殊的字面量：None,其类型是：<class'NoneType'>

无返回值的函数，实际上就是返回了：None这个字面量。



None表示：空的、无实际意义的意思。

函数返回的None,就表示，这个函数没有返回什么有意义的内容。

也就是返回了空的意思。

> 代码：


```python
"""
05_函数返回类型None.py
"""

def add(a, b):
    print(f'{a}+{b}={a+b}')

add_result = add(1,5)
print(f'add函数返回结果、类型:{add_result}、{type(add_result)}')

# 在if中 None 等于 False
if not add_result: # 非空（非 None）走这里
    print(f'获取到结果为空')    
else: # 空（None）的话走这里
    print(f'获取到结果为:{add_result}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\10_函数\05_函数返回类型None.py"
1+5=6
add函数返回结果、类型:None、<class 'NoneType'>
获取到结果为空

[Done] exited with code=0 in 0.073 seconds
```

用于声明无内容的变量上

  * 定义变量，但暂时不需要变量有具体值，可以用None来代替 
    
      ```python
    # 暂不赋予变量具体值
    name = None
    ```
    
    
    

###  函数的说明文档

函数是纯代码语言，想要理解其含义，就需要一行行的去阅读理解代码，效率比较

低。

我们可以给函数添加说明文档，辅助理解函数的作用。

语法如下：

```python
def func(x,y):
    """
    函数说明
    :param x: 形参x的说明
    :param y: 形参y的说明
    :return: 返回值的说明
    """
    函数体
    return 返回值
```


通过多行注释的形式，对函数进行说明解释

  * 内容应写在函数体之前 

vs code将鼠标悬停在add()调用方法上，可以看到注释内容。

![vscode显示注释内容](/assets/img/Python基础/vscode显示注释内容.png)

  * ：param用来解释参数 
  * ：return用来解释返回值 



###  函数的嵌套使用

什么是函数的嵌套？

所谓函数嵌套调用指的是一个函数里面又调用了另外一个函数。

```python
def func_b():
    print("--2--")

def func_a():
    print("---1---")
    func_b()
    print("--3--")

#调用函数func_a
func_a()
```

```xshell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\10_函数\07_函数的嵌套使用.py"
---1---
--2--
--3--

[Done] exited with code=0 in 0.058 seconds
```


  1. 什么是嵌套调用 ？

     在一个函数中，调用另外一个函数

  2. 执行流程 ？

     函数A中执行到调用函数B的语句，会将函数B全部执行完成后，继续执行函数A的剩余内容。



###  变量在函数中的作用域

####  局部变量

变量作用域指的是变量的作用范围（变量在哪里可用，在哪里不可用）

主要分为两类：局部变量和全局变量

所谓局部变量是定义在函数体内部的变量，即只在函数体内部生效。

```python
def testA():
    num =100
    print(num)

testA() #100
print(num) # 报错：NameError: name 'num' is not defined
```


变量a是定义在`testA函数内部的变量，在函数外部访问则立即报错。



####  全局变量

所谓全局变量，指的是在函数体内、外都能生效的变量

思考：如果有一个数据，在函数A和函数B中都要使用，该怎么办？

答：将这个数据存储在一个全局变量里面。

```python
# 全局变量
num2 = 100

def testa():
    print(num2)

def testb():
    print(num2)

testa() # 100
testb() # 100  
```



####  global 关键字

使用 **global** 关键字可以在函数内部声明变量为全局变量

```python
# 局部变量
def testA():
    # 使用 global 关键字，就不会出现局部变量，函数外使用报错
    global num
    num = 100
    print(num)

testA() #100
print(num) # 100
```



####  总结

  1. 什么是局部变量？ 

     作用范围在函数内部，在函数外部无法使用

  2. 什么是全局变量？ 

     在函数内部和外部均可使用

  3. 如何将函数内定义的变量声明为全局变量 ？

     - 使用**global**关键字，变量声明为全局变量。



###  函数的综合案例

> 黑马ATM 代码:


```python
"""
09_函数综合案例之黑马ATM.py

    定义一个全局变量：money,用来记录银行卡余额（默认5000000）
    定义一个全局变量：name,用来记录客户姓名（启动程序时输入】
    定义如下的函数：
        查询余额函数
        存款函数
        取款函数
        主菜单函数
    要求：
    程序启动后要求输入客户姓名
    查询余额、存款、取款后都会返回主菜单
    存款、取款后，都应显示一下当前余额
    客户选择退出或输入错误，程序会退出，否则一直运行

"""

money = 5000000
name = input('请输入姓名:')

def query_balance():
    '''
        查询余额函数
        输出当前余额
    '''
    print(f'当前银行卡余额为：{money}')

def fund(amount):
    '''
        存款函数
        : param amount: 金额(整数)
        : return money: 返回余额
    '''
    global money
    money += amount
    return money

def withdrawal(amount):
    '''
        取款函数
        : param amount: 金额(整数)
        : return: money: 返回余额
    '''
    global money
    money -= amount
    return money

#  主菜单函数 
def main_menu():
    '''
        主菜单函数
    '''
    print(f'''
        {name}，欢迎您来到黑马ATM，请选择：
        主菜单：1(查询余额)、2（存款）、3（取款）、4（退出）
    ''')

while True:
    main_menu()
    ops = int(input('请输入操作:'))
    if ops > 4 or ops < 1:
        print('不合法的操作，即将退出程序...')
        break
    elif ops == 4:
        print('程序即将退出...')
        break
    else:
        if ops == 2:
            fund(int(input('请输入存款金额（整数）:')))
        elif ops == 3:
            amount = int(input('请输入取款金额（整数）:'))
            if amount <= 0:
                print(f'这个金额（{amount}）不合法,取款失败')
            elif amount > money:
                print('金额超出,取款失败')
            else:
                withdrawal(amount)
        query_balance() 
```



##  函数进阶

###  函数的多种返回值

```python
"""
01函数的多返回值.py
"""

def test_return():
    return 1,2,3

x, y, z = test_return()

print(f'x={x}, y={y}, z={z}') # x=1, y=2, z=3
```


按照返回值的顺序，写对应顺序的多个变量接收即可

变量之间用逗号隔开

支持不同类型的数据 return



###  函数多种传参方式

####  函数参数种类

使用方式上的不同，函数有4种常见参数使用方式：

  * 位置参数：调用函数时根据函数定义的参数位置来传递参数。 
    
      ```python
    """
    02_函数的参数种类.py
    """
    
    def user_info(name, age, gender):
        print(f'您的名字是{name},年龄是:{age},性别是:{gender}')
    
    # 1.位置参数
    user_info('张三', 22, '男')  
    ```
    
    注意：传递的参数和定义的参数的顺序及个数必须一致。
    
    
    
  * 关键字参数：函数调用时通过"键=值"形式传递了参数。 

      作用：可以让函数更加清晰、容易使用，同时也清除了参数的顺序需求。

      ```python
      def user_info(name, age, gender):
          print(f'您的名字是{name},年龄是:{age},性别是:{gender}')
          
      # 2. 关键字参数,不必注意顺序
      user_info(name='李四1', gender='男', age=20)
      # 位置参数和关键字参数混用
      user_info("李四2", age = 18, gender="女")
      ```

      注意：函数调用时，如果有位置参数时，位置参数必须在关键字参数的前面，但关键字参数之间不存先后顺序。

      

  * 缺省参数：缺省参数也叫默认参数，用于定义函数，为参数提供默认值，调用函 数时可不传该默认参数的值（注意：所有位置参数必须出现在默认参数前，包括、函数定义和调用)。

    作用：当调用函数时没有传递参数，就会使用默认是用缺省参数对应的值。

    ```python
    # 3. 缺省参数
    def user_info1(name, age, gender='男'):
        print(f'您的名字是{name},年龄是:{age},性别是:{gender}')
    
    user_info1('赵六1', 22) # 您的名字是赵六1,年龄是:22,性别是:男
    user_info1('赵六2', 21, '女') # 您的名字是赵六2,年龄是:21,性别是:女  
    ```

       

    注意：函数调用时，如果为缺省参数传值则修改默认参数值，否则使用这个默认值。

    

  * 不定长参数：不定长参数也叫可变参数，用于不确定调用的时候会传递多少个参 数（不传参也可以）的场景。

    作用：当调用函数时不确定参数个数时，可以使用不定长参数。

    不定长参数的类型：

    1. 位置传递

       ```python
       # 4. 不定长参数
       # 4.1 位置传递不定长参数
       def user_info2(*args):
           print(args)
       
       user_info2('张三', 18, '女') # ('张三', 18, '女')
       user_info2(1) # (1,)
       ```

       传进的所有参数都会被args变量收集，它会根据传进参数的位置合并为一个元组(tuple),args是元组类型，这就是位置传递。

    2. 关键字传递

       ```python
       # 4.2 关键字传递的不定长
       def user_info3(**args):
           print(args)
       
       user_info3(name='张三', age=16, gender='男') # {'name': '张三', 'age': 16, 'gender': '男'}
       user_info3(id=111) # {'id': 111}
       ```

       注意：参数是“键=值”形式的形式的情况下，所有的“键=值”都会被args接受，同时会根据“键=值”组成字典。



###  匿名函数

####  函数作为参数传递

```python
"""
03_函数作为参数传递.py
"""

def add(x, y):
    return x+y

def call1(add, *args):
    result = add(args[0], args[1])
    return result

def call2(*args):
    result = args[0](args[1], args[2])
    return 1    

print(f'1+2={call1(add, 1, 2)}') # 1+2=3
print(f'6+2={call1(add, 6, 2)}') # 6+2=8
```


总结：

  1. 函数本身是可以作为参数，传入另一个函数中进行使用的。 
  2. 将函数传入的作用在于：传入计算逻辑而非传入数据。 



####  lambda匿名函数

有名称的函数，可以基于名称重复使用

无名称( **lamdba** )的匿名函数，只可临时使用一次。

匿名函数定义语法：

lambda传入参数：函数体（一行代码）

  * lambda是关键字，表示定义匿名函数 
  * 传入参数表示匿名函数的形式参数，如：x,y表示接收2个形式参数 
  * 函数体，就是函数的执行逻辑，要注意：只能写一行，无法写多行代码 \

```python
"""
04_lamdba匿名函数.py
"""

def call(*args):
    result = args[0](args[1], args[2])
    return result

print(f'6+6={call(lambda x,y: x+y, 6, 6)}') # 6+6=12 
```

定义的函数功能完全一致，只是lambda关键字定义的函数是匿名的，无法二次使用。



##  数据容器

Python中的数据容器：

一种可以容纳多份数据的数据类型，容纳的每一份数据称之为1个元素

每一个元素，可以是任意类型的数据，如字符串、数字、布尔等。

数据容器根据特点的不同，如：

  * 是否支持重复元素 
  * 是否可以修改 
  * 是否有序，等 

分为5类，分别是：

列表(list)、元组(tuple)、字符串(str)、集合(set)、字典(dict)



###  list（列表）

[ Python 运算符 | 菜鸟教程 (runoob.com) ](https://www.runoob.com/python/python-
operators.html#ysf4)

####  列表(list)基础语法

> 基础语法：


```python
# 字面量
[元素1, 元素2, 元素3,元素4, ...]

# 定义变量
变量名称 = [元素1, 元素2,元素, 元素4, ...]

# 定义空列表
变量名称 = []
变量名称 = list()
```


列表内的每一个数据，称之为元素

  * 以 [] 作为标识 
  * 列表内每一个元素之间用，逗号隔开 

> 01_list(列表)的定义方式 代码：


```python
"""
01_list(列表)的定义方式.py
"""

my_list = ['张三', '李四', '王五', '赵六', 666, 1.11, False]

print(my_list)
print(f'name_list type = {type(my_list)}')

# 定义一个嵌套列表
my_list2 = [[1,2,3], ['张三', '李四', '王五'], ['abc', 222, True]]

print(f'嵌套list = {my_list2}')
print(f'嵌套list type = {type(my_list)}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\list\01_list(列表)的定义方式.py"
['张三', '李四', '王五', '赵六', 666, 1.11, False]
name_list type = <class 'list'>
嵌套list = [[1, 2, 3], ['张三', '李四', '王五'], ['abc', 222, True]]
嵌套list type = <class 'list'>

[Done] exited with code=0 in 0.062 seconds
```


总结：

  1. 列表的定义语法 

     [元素1, 元素2, 元素3, ......]

  2. 什么是元素？ 

     数据容器内的每一份数据，都称之为元素。

  3. 元素的类型有限制吗？ 

     元素的数据类型没有任何限制，甚至元素也可以是列表，这样就定义了嵌套列表。



####  列表(list)的下表索引

```python
"""
02_list(列表)的下标索引.py
"""

my_list = [1, 2, 3, 4, 5]
my_list2 = [my_list, ['a', 'b', 'c', 'd', 'e']]

# 获取 my_list 下标为0的索引数据
print(my_list[0]) # 1

#  获取 my_list2 下标为0的索引数据
print(my_list2[0]) # [1, 2, 3, 4, 5]

# 获取  my_list2 下标为1的索引数据里的c
print(my_list2[1][2])

print('------------倒叙--------------')
# 获取倒叙数据
print(my_list[-1])
print(my_list[-2])
print(my_list[-3])
print('-------------正序-------------')
# 获取正序数据
print(my_list[1])
print(my_list[2])
print(my_list[3])
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\list\02_list(列表)的下标索引.py"
1
[1, 2, 3, 4, 5]
c
------------倒叙--------------
5
4
3
-------------正序-------------
2
3
4

[Done] exited with code=0 in 0.07 seconds
```


总结：

  1. 列表的下标索引是什么？ 

     列表的每一个元素都有编号称之为下标索引。

     从前向后的方向，编号从0开始递增。

     从后向前的方向，编号从-1开始递减。

  2. 如何通过下标索引取出对应位置的元素呢？ 

     列表下标]，即可取出。

  3. 下标索引的注意事项： 

     要注意下标索引的取值范围，超出范围无法取出元素，并且会报错。

     

####  列表(list)常用的操作方法

列表除了可以：

  * 定义 
  * 使用下标索引获取值 

以外，列表也提供了一系列功能：

  * 插入元素 
  * 删除元素 
  * 清空列表 
  * 修改元素 
  * 统计元素个数 

等等功能，这些功能我们都称之为：列表的方法

![列表的常用方法](/assets/img/Python基础/列表的常用方法.png)

回忆：函数是一个封装的代码单元，可以提供特定功能。

在Python中，如果将函数定义为class(类)的成员，那么函数会称之为：方法

> 函数：


```python
def add(a, b):
    return a + b
```


> 方法：


```python
class Student:

    def add(self, a, b):
    	return a + b
```


方法和函数功能一样，有传入参数，有返回值，只是方法的使用格式不同：

  * 函数的使用： 

    num = add(1,2)

  * 方法的使用： 

    student = Student()

    num = student.add(1,2)



#####  列表的查询功能

  * 查找某元素的下标 

    功能：查找指定元素在列表的下标，如果找不到，报错ValueError

    语法：列表.index(元素)

    index就是列表对象（变量）内置的方法（函数）

    ```python
    my_list = ['a', 'b', 'c']
    
    # 获取 a 在列表的下标
    print(my_list.index('a')) # 0
    ```

    


#####  列表的修改方法

######  修改特定位置（索引）的元素值

语法：

    列表[下标] = 值


可以使用如上语法，直接对指定下标（正向、反向下标均可）的值进行：

重新赋值（修改）

```python
my_list = ['a', 'b', 'c']

# 修改指定下标的值
my_list[0] = 'aaa'
my_list[-1] = 'd'
print(my_list) # ['aaa', 'b', 'd']
```



######  插入元素

语法：列表.insert(下标，元素)，在指定的下标位置，插入指定的元素

```python
# 插入一个元素
my_list_wait_insert = [1, 2, 3]
my_list_wait_insert.insert(0, 'aaa')
print(my_list_wait_insert) # [1, 'aaa', 2, 3]
```



######  追加元素

方式1：

语法：列表.append(元素)，将指定元素，追加到列表的尾部。

```python
# 追加一个元素
# 方式1
my_list_wait_append1 = ['a', 1, 2, 'ccc']
my_list_wait_append1.append([111, 112])
print(my_list_wait_append1) # ['a', 1, 2, 'ccc', [111, 112]]
```


方式2：

语法：列表.extend(其它数据容器)，将其它数据容器的内容取出，依次追加到列表尾部。

```python
# 追加一个元素
# 方式2
my_list_wait_append2 = ['a', 1, 2, 'ccc']
my_list_wait_append2.extend([222, 223])
print(my_list_wait_append2) # ['a', 1, 2, 'ccc', 222, 223]
```


注意：

两种追加方式效果不一样，append()是将元素作为一个整体，而extend()是将参数list进行拆分后追加到list中。



######  删除元素

语法1：del 列表[下标]

```python
# 删除元素
my_list_wait_remove1 = [1, 2, 'a']
# 方式1
del my_list_wait_remove1[0]
print(my_list_wait_remove1) # [2, 'a']
```


语法2：列表.pop(下标)

pop()会返回移除的值

```python
# 删除元素
my_list_wait_remove2 = [1, 2, 'a']
# 方式2
print(my_list_wait_remove2.pop(0)) # 1
print(my_list_wait_remove2) #[2, 'a']
```


语法3：删除某元素在列表中的第一个匹配项：列表.remove(元素)

```python
# 删除元素
my_list_wait_remove3 = [1, 2, 'a', 'a']
# 方式3
my_list_wait_remove3.remove('a')
print(my_list_wait_remove3) # [1, 2, 'a']
```



######  清空列表内容

语法：列表.clear()

```python
# 清空列表内容
my_list_wait_clear = [1, 2, 'aaa', False]
my_list_wait_clear.clear()
print(my_list_wait_clear) # []
```



#####  统计某元素在列表内的数量

语法：列表.count(元素)

```python
# 统计某元素在列表内的数量
my_list_wait_count = [1, 'a', True, 1, 1, 1]
print(my_list_wait_count.count(True)) # 5,因为True等于1
print(my_list_wait_count.count('a')) # 1
```



#####  统计列表中有多少元素

语法：len(列表)

可以得到一个int数字，表示列表内的元素数量

```python
# 统计列表中有多少元素
my_list_wait_len = ['a', [1, 2, 3], {'name': '张三'}]
print(len(my_list_wait_len)) # 3
```



####  列表的特点

经过上述对列表的学习，可以总结出列表有如下特点：

  * 可以容纳多个元素（上限为2**63-1、9223372036854775807个） 
  * 可以容纳不同类型的元素（混装） 
  * 数据是有序存储的（有下标序号） 
  * 允许重复数据存在 
  * 可以修改（增加或删除元素等） 



####  列表的循环遍历

#####  while 循环遍历list

既然数据容器可以存储多个元素，那么，就会有需求从容器内依次取出元素进行操作。

将容器内的元素依次取出进行处理的行为，称之为：遍历、迭代。

如何遍历列表的元素呢？

  * 可以使用前面学过的vhile循环 

如何在循环中取出列表的元素呢？

  * 使用列表[下标]的方式取出 

循环条件如何控制？

  * 定义一个变量表示下标，从0开始 
  * 循环条件为下标值<列表的元素数量 

> while 循环遍历list


```python
"""
05_list(列表)的循环遍历.py
"""

list = [1, 2, 3, 'a']

def while_func():
    list_len = len(list)
    index = 0
    while index < list_len :
        print(f'index:{index}, 值为:{list[index]}')
        index +=1

while_func()   
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\list\05_list(列表)的循环遍历.py"
index:0, 值为:1
index:1, 值为:2
index:2, 值为:3
index:3, 值为:a

[Done] exited with code=0 in 0.059 seconds
```



#####  for 循环遍历list

除了while循环外，Python中还有另外一种循环形式：for循环。

对比while,for循环更加适合对列表等数据容器进行遍历。

> for 循环遍历list


```python
"""
05_list(列表)的循环遍历.py
"""

list = [1, 2, 3, 'a']      

def for_func():
        for item in list:
            print(f'值为:{item}')

for_func()
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\list\05_list(列表)的循环遍历.py"
值为:1
值为:2
值为:3
值为:a

[Done] exited with code=0 in 0.06 seconds
```


从容器内，依次取出元素并赋值到临时变量上。

在每一次的循环中，我们可以对临时变量（元素）进行处理。



#####  while 循环和for 循环的对比

while循环和for循环，都是循环语句，但细节不同：

  * 在循环控制上： 

    * while 循环可以自定循环条件，并自行控制 
    * for 循环不可以自定循环条件，只可以一个个从容器内取出数据 
  * 在无限循环上： 

    * while 循环可以通过条件控制做到无限循环 
    * for 循环理论上不可以，因为被遍历的容器容量不是无限的 
  * 在使用场景上： 

    * while 循环适用于任何想要循环的场景 
    * for 循环适用于，遍历数据容器的场景或简单的固定次数循环场景 



###  元组

####  元组的定义和操作

为什么需要元组？

​	思考：列表是可以修改的。

​	如果想要传递的信息，不被篡改，列表就不合适了。

​	元组同列表一样，都是可以封装多个、不同类型的元素在内。

​	但最大的不同点在于：

​		元组一旦定义完成，就不可修改

​	所以，当我们需要在程序内封装数据，又不希望封装的数据被篡改，那么元组就非常合适了。

#####  定义元组

元组定义：定义元组使用小括号，且使用逗号隔开各个数据，数据可以是不同的数据类型。

```python
"""
01_定义元组和操作.py
"""

# 定义元组字面量
('a', 1, 2, 3)
# 定义元组变量
tuples1 = ('b', 2)
# 定义空元组
tuples2 = () # 方式1
tuples3 = tuple() # 方式2

# 元组的嵌套
tuples4 = (('a', 1), 2, ('nnnn', 'm'))
print(f'tuples4 = {tuples4}, type = {tye(tuples4)}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\元组\01_定义元组.py"
tuples4 = (('a', 1), 2, ('nnnn', 'm')), type = <class 'tuple'>

[Done] exited with code=0 in 0.056 seconds
```



#####  元组操作

![元组相关操作](/assets/img/Python基础/元组相关操作.png)

```python
tuples4 = (('a', 1), 2, ('nnnn', 'm'), False, 2)

# 下标索引取值
print(tuples4[0][0]) # a

# index查找方法
print(tuples4.index(('a', 1))) # 0

# count 统计
print(tuples4.count(2)) # 2

# len 长度获取
print(len(tuples4)) # 5

# 元组的遍历
# while 遍历
tuples4_len = len(tuples4)
index = 0
while tuples4_len > index:
    print(f"while 遍历,当前index={index},value={tuples4[index]}")
    index += 1
'''
    while 遍历,当前index=0,value=('a', 1)
    while 遍历,当前index=1,value=2
    while 遍历,当前index=2,value=('nnnn', 'm')
    while 遍历,当前index=3,value=False
    while 遍历,当前index=4,value=2
'''

# for 遍历
for item in tuples4:
    print(f"for 遍历,当前value={item}")
'''
    for 遍历,当前value=('a', 1)
    for 遍历,当前value=2
    for 遍历,当前value=('nnnn', 'm')
    for 遍历,当前value=False
    for 遍历,当前value=2
'''    

# 修改元素内容，元组不支持修改内容，但是元组内的列表可以
tuples5 = (('a', 1), 2, ['nnnn', 'm'], False, 2)
print(tuples5) # (('a', 1), 2, ['nnnn', 'm'], False, 2)
# tuples5[-1] = 3 # TypeError: 'tuple' object does not support item assignment
tuples5[2][0] = 'abc'
tuples5[2][1] = 'ccc'
print(tuples5) # (('a', 1), 2, ['abc', 'ccc'], False, 2)
```


​    

####  元组的特点

经过上述对元组的学习，可以总结出列表有如下特点：

  * 可以容纳多个数据 
  * 可以容纳不同类型的数据（混装) 
  * 数据是有序存储的（下标索引） 
  * 允许重复数据存在 
  * 不可以修改（增加或删除元素等） 
  * 支持for循环 

多数特性和 list 一致，不同点在于不可修改的特性。



####  字符串的定义和操作

```python
"""
03_字符串的定义和操作.py
"""

my_str = "qazxswedc1234567890q"

# 通过下标索引取值
value1 = my_str[0]
value2 = my_str[2]
value3 = my_str[-1]
# 打印结果：字符串 my_str 的0下标值是:q, 2下标值是z, -1下标值是:0
print(f'字符串 my_str 的0下标值是:{value1}, 2下标值是{value2}, -1下标值是:{value3}')

# index方法
print(my_str.index('q')) # 0

# replace,将指定元素替换为其它值并返回，不影响原始字符串
print(my_str.replace('q', 'm')) # mazxswedc1234567890m
print(my_str) # qazxswedc1234567890q

# split, 将字符串从指定元素进行分割为多个字符串组合为list并返回，不影响原字符串
print(my_str.split('q')) # ['', 'azxswedc1234567890', '']
print(my_str) # qazxswedc1234567890q

# strip, 去除空格和table等符号并返回新的字符串，不影响原始字符串
my_str1 = " qazxswedc1234567890q    "
print(my_str1.strip()) # qazxswedc1234567890q
print(my_str1)#  qazxswedc1234567890q    (这里有table)

# 统计字符串中某字符的出现次数
print(my_str.count('q')) # 2

# 统计字符串的长度
print(len(my_str)) # 20
```



####  字符串的特点

作为数据容器，字符串有如下特点：

  * 只可以存储字符串 
  * 长度任意（取决于内存大小） 
  * 支持下标索引 
  * 允许重复字符串存在 
  * 不可以修改（增加或删除元素等） 
  * 支持for循环 



###  序列

序列是指：内容连续、有序，可使用下标索引的一类数据容器

**列表、元组、字符串，均可以可以视为序列。**

![序列描述](/assets/img/Python基础/序列描述.png)



####  切片

序列支持切片，即：列表、元组、字符串，均支持进行切片操作。

切片：从一个序列中，取出一个子序列。

语法：序列[起始下标：结束下标：步长]

表示从序列中，从指定位置开始，依次取出元素，到指定位置结束，得到一个新序列：

  * 起始下标表示从何处开始，可以留空，留空视作从头开始 
  * 结束下标（不含）表示何处结束，可以留空，留空视作截取到结尾 
  * 步长表示，依次取元素的间隔 
    * 步长1表示，一个个取元素 
    * 步长2表示，每次跳过1个元素取 
    * 步长N表示，每次跳过N-1个元素取 
    * 步长为负数表示，反向取（注意，起始下标和结束下标也要反向标记） 

注意：切片操作并不会影响序列本身，而是会返回一个新的序列。

```python
"""
05_序列的切片操作.py
起始和结束不写表示从头到尾，步长为1可以省略,例如: my_str1[:]
如果步长是负数，起始和结束得反过来才可以取到值
"""

# 对list进行切片，从1开始，4结束，步长1(步长默认为1可以不写)
my_list = [1, 0, 2, 5, 3, 4]
print(f'对list进行切片，从1开始，4结束，步长1 = {my_list[1: 4]}')

# 对tuple进行切片，从头开始，到最后结束，步长1(起始和结束不写表示从头到尾，步长为1可以省略)
my_tuple = ('a', 'c', 'b', 'e')
print(f'对tuple.进行切片，从头开始，到最后结束，步长1 = {my_tuple[:]}')

# 对str进行切片，从头开始，到最后结束，步长2
my_str1 = 'abcdefg1234567890'
print(f'对str进行切片，从头开始，到最后结束，步长2 = {my_str1[::2]}')

# 对str进行切片，从头开始，到最后结束，步长-1
my_str2 = 'abcdefg1234567890'
print(f'str进行切片，从头开始，到最后结束，步长-1 = {my_str2[:: -1]}, {my_str2[len(my_str2): 0: -1]}')

# 对列表进行切片，从3开始，到1结束，步长-1
my_list1 = [1, 0, 2, 5, 3, 4]
print(f'对列表进行切片，从3开始，到1结束，步长-1 = {my_list1[3: 1: -1]}')

# 对元组进行切片，从头开始，到尾结束，步长-2
my_tuple1 = ('a', 'c', 'b', 'e')
print(f'对元组进行切片，从头开始，到尾结束，步长-2 = {my_tuple1[:: -2]},{my_tupl1[len(my_tuple1): 0: -2]}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\元组\tempCodeRunnerFile.py"
对list进行切片，从1开始，4结束，步长1 = [0, 2, 5]
对tuple.进行切片，从头开始，到最后结束，步长1 = ('a', 'c', 'b', 'e')
对str进行切片，从头开始，到最后结束，步长2 = aceg24680
str进行切片，从头开始，到最后结束，步长-1 = 0987654321gfedcba, 0987654321gfedcb
对列表进行切片，从3开始，到1结束，步长-1 = [5, 2]
对元组进行切片，从头开始，到尾结束，步长-2 = ('e', 'c'),('e', 'c')

[Done] exited with code=0 in 0.061 seconds
```



###  集合（set）

为什么使用集合?

我们目前接触到了列表、元组、字符串三个数据容器了。基本满足大多数的使用场景。

为何又需要学习新的集合类型呢？

通过特性来分析：

  * 列表可修改、支持重复元素且有序 
  * 元组、字符串不可修改、皮持重复元素且有序 

局限就在于：它们都支持重复元素。

如果场景需要对内容做去重处理，列表、元组、字符串就不方便了，

而集合，最主要的特点就是不支持元素的重复（自带去重功能，并且内容无序），所以集合不支持下标索引访问。



####  集合的定义

基本语法：

```python
"""
01_set(集合)的基础语法.py
"""

# 定义集合字面量
{1, 2, 3, 4, 5}
# 定义集合变量
my_set1 = {'a', 'z', 1, 2, 3}
# 定义空集合
my_set3 = set()
```



####  集合的操作

![集合的操作](/assets/img/Python基础/集合的操作.png) 

​    
```python
"""
02_set(集合)的操作.py
"""

# 添加新元素
my_wait_add_set = {'a', 'b', 1, 2, 3, True, False}
print(my_wait_add_set, len(my_wait_add_set)) # True 不打印,也不计入长度计算（因为True=1，set去重）, False不会
my_wait_add_set.add('bb')
print(f'添加新元素,{my_wait_add_set}')

# 移除元素
my_wait_remove_set = {'a', 'b', 1, 2, 3}
my_wait_remove_set.remove(2)
print(f'移除元素,{my_wait_remove_set}')

# 随机取出一个元素
my_wait_get_set = {'a', 'b', 1, 2, 3}
print(f'随机取出一个元素,{my_wait_get_set.pop()}')
print(my_wait_get_set) # 将减少一个元素

# 清空集合
my_wait_clear_set = {'a', 'b', 1, 2, 3}
my_wait_clear_set.clear()
print(f'清空集合,{my_wait_clear_set}')

# 取两个集合的差集
my_wait_su1_set = {'a', 'b', 1, 2, 3, -1}
my_wait_su2_set = {'c', 'b', 2, 3, False, None}
print(f'取两个集合的差集，以my_wait_su1_set为主, {my_wait_su1_set.difference(my_wait_su2_set)}')
print(f'取两个集合的差集，以my_wait_su2_set为主, {my_wait_su2_set.difference(my_wait_su1_set)}')
print(my_wait_su1_set)
print(my_wait_su2_set)

# 消除两个集合的差集
my_wait_su1_clear_set1 = {'a', 'b', 1, 2, 3, -1}
my_wait_su2_clear_set1 = {'c', 'b', 2, 3, False, None}
my_wait_su1_clear_set1.difference_update(my_wait_su2_clear_set1)
print(f'消除两个集合的差集，以my_wait_su1_clear_set为主,{my_wait_su1_clear_set1}')
my_wait_su1_clear_set2 = {'a', 'b', 1, 2, 3, -1}
my_wait_su2_clear_set2 = {'c', 'b', 2, 3, False, None}
my_wait_su2_clear_set2.difference_update(my_wait_su1_clear_set2)
print(f'消除两个集合的差集，以my_wait_su2_clear_set为主,{my_wait_su2_clear_set2}')

# 2个集合合并为1个
my_wait_merge_set1 = {'a', 'b', 1, 2, 3, -1}
my_wait_merge_set2 = {'c', 'b', 2, 3, False, None}
print(f'2个集合合并为1个,{my_wait_merge_set1.union(my_wait_merge_set2)}')

# 统计集合元素数量
my_wait_count_set = {'a', 'b', 1, 2, 3, -1}
print(f'统计集合元素数量, {len(my_wait_count_set)}')

# 集合的遍历
my_wait_for_set = {'a', 'b', 1, 2, 3, -1}
for item in my_wait_for_set:
    print(f'集合的遍历, {item}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\集合(set)\02_set(集合)的操作.py"
{False, 1, 2, 3, 'b', 'a'} 6
添加新元素,{False, 1, 2, 3, 'bb', 'b', 'a'}
移除元素,{1, 3, 'b', 'a'}
随机取出一个元素,1
{2, 3, 'b', 'a'}
清空集合,set()
取两个集合的差集，以my_wait_su1_set为主, {1, 'a', -1}
取两个集合的差集，以my_wait_su2_set为主, {False, None, 'c'}
{1, 2, 3, 'b', 'a', -1}
{False, 2, 3, 'c', 'b', None}
消除两个集合的差集，以my_wait_su1_clear_set为主,{1, 'a', -1}
消除两个集合的差集，以my_wait_su2_clear_set为主,{False, 'c', None}
2个集合合并为1个,{False, 1, 2, 3, 'a', None, 'c', 'b', -1}
统计集合元素数量, 6
集合的遍历, 1
集合的遍历, 2
集合的遍历, 3
集合的遍历, b
集合的遍历, a
集合的遍历, -1

[Done] exited with code=0 in 0.069 seconds
```



####  集合的特点

经过上述对集合的学习，可以总结出集合有如下特点：

  * 可以容纳多个数据 
  * 可以容纳不同类型的数据（混装） 
  * 数据是无序存储的（不支持下标索引） 
  * 不允许重复数据存在 
  * 可以修改（增加或删除元素等） 
  * 支持for循环 



###  字典

####  字典的定义

同样使用不过存储的元素是一个个的：键值对，

如下语法：

```python
"""
01_字典的定义.py
"""

# 定义字典字面量
{'name': '张三', 'age': 18, 'birthday': '0111'}

# 定义字典变量
my_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}

# 定义空字典
my_dict1 = {} # 方式1
my_dict2 = dict() # 方式2

print(f'字典值:{my_dict},空字典1类型:{type(my_dict1)},空字典2类型:{type(my_dict2)}')

# 定义重复key的字典,老的会被覆盖
my_dict3 = {'name': '张三', 'age': 18, 'birthday': '0111', 'name': '李四'}
print(f'重复key的字典:{my_dict3}')
```

```shell
[Running] set PYTHONIOENCODING=utf8 && python -u "d:\code\py\heima_py\11_数据容器\字典\01_字典的定义.py"
字典值:{'name': '张三', 'age': 18, 'birthday': '0111'},空字典1类型:<class 'dict'>,空字典2类型:<class 'dict'>
重复key的字典:{'name': '李四', 'age': 18, 'birthday': '0111'}

[Done] exited with code=0 in 0.062 seconds
```


字典的注意事项：

  * 键值对的Key和Value可以是任意类型(Key不可为字典) 
  * 字典内Key不允许重复，重复添加等同于覆盖原有数据 



####  字典的操作    

```python
"""
02_字典的操作.py
"""

# 定义字典字面量
my_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}

# 字典数据的获取
print(f'获取name,{my_dict["name"]}') # 获取name,张三
print(f'获取age,{my_dict["age"]}') # 获取age,18
print(f'获取birthday,{my_dict["birthday"]}') # 获取birthday,0111

# 定义嵌套字典
my_dict1 = {'password':'123456', 'username': 'admin', 'dict': my_dict}
print(f'嵌套字典:{my_dict1}') # 嵌套字典:{'password': '123456', 'username': 'admin', 'dict': {'name': '张三', 'age': 18, 'birthday': '0111'}}

# 从嵌套字典中获取数据 name
print(f'从嵌套字典中获取数据 name:{my_dict1["dict"]["name"]}') # 从嵌套字典中获取数据 name:张三

# 字典的新增
my_wait_add_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
my_wait_add_dict['height'] = 175
print(f'字典的新增后结果为：{my_wait_add_dict}') # 字典的新增后结果为：{'name': '张三', 'age': 18, 'birthday': '0111', 'height': 175}

# 字典的更新元素
my_wait_update_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
my_wait_update_dict['name'] = '李四'
print(f'字典的更新元素后的结果为:{my_wait_update_dict}') # 字典的更新元素后的结果为:{'name': '李四', 'age': 18, 'birthday': '0111'}

# 字典删除元素
my_wait_del_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
# 删除方式1
del my_wait_del_dict['name']
print(f'字典删除元素后的结果为:{my_wait_del_dict}') # 字典删除元素后的结果为:{'age': 18, 'birthday': '0111'}
# 删除方式2
print(f'pop删除元素,{my_wait_del_dict.pop("age")}') # pop删除元素,18
print(f'del 和 pop删除元素后的结果为:{my_wait_del_dict}') # del 和 pop删除元素后的结果为:{'birthday': '0111'}

# 清空元素
my_wait_clear_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
my_wait_clear_dict.clear()
print(f'清空元素后的结果为：{my_wait_clear_dict}') # 清空元素后的结果为：{}

# 获取全部的key
my_wait_get_allkey_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
print(f'获取全部的key的结果为:{my_wait_get_allkey_dict.keys()}') # 获取全部的key的结果为:dict_keys(['name', 'age', 'birthday'])

# 遍历字典
my_wait_traverse_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
for item in my_wait_traverse_dict.items():
    """
        遍历字典:('name', '张三')
        遍历字典:('age', 18)
        遍历字典:('birthday', '0111')
    """
    print(f'遍历字典:{item}')

# 统计字典内的元素数量
my_wait_key_count_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}
print(f'统计字典内的元素数量的结果为:{len(my_wait_key_count_dict)}') # 3
```



####  字典的特点

经过上述对字典的学习，可以总结出字典有如下特点：

  * 可以容纳多个数据 
  * 可以容纳不同类型的数据 
  * 每一份数据是Key,Value键值对 
  * 可以通过Key获取到 Value,Key 不可重复（重复会覆盖） 
  * 不支持下标索引 
  * 可以修改（增加或删除更新元素等） 
  * 支持for循环，不支持while循环 



###  数据容器的总结对比

####  数据容器的分类

数据容器可以从以下视角进行简单的分类：

  * 是否支持下标索引 
    * 支持：列表、元组、字符串 - 序列类型 
    * 不支持：集合、字典 - 非序列类型 
  * 是否支持重复元素： 
    * 支持：列表、元组、字符串 - 序列类型 
    * 不支持：集合、字典 - 非序列类型 
  * 是否可以修改 
    * 支持：列表、集合、字典 
    * 不支持：元组、字符串 



####  数据容器特点对比

![数据容器特点对比图](/assets/img/Python基础/数据容器特点对比图.png)



####  总结

1.基于各类数据容器的特点，它们的应用场景如下：

  * 列表：一批数据，可修改、可重复的存储场景 
  * 元组：一批数据，不可修改、可重复的存储场景 
  * 字符串：一串字符串的存储场景 
  * 集合：一批数据，去重存储场景 
  * 字典：一批数据，可用Key检索Value的存储场景 



###  数据容器的通用操作

####  遍历

数据容器尽管各自有各自的特点，但是它们也有通用的一些操作。

首先，在遍历上：

  * 5类数据容器都支持 **for循环** 遍历 
  * 列表、元组、字符串支持 **while循环** ，集合、字典不支持（无法下标索引） 

尽管遍历的形式各有不同，但是，它们都支持遍历操作。



####  通用统计功能

![通用统计功能](/assets/img/Python基础/通用统计功能.png)



####  通用转换功能

![通用转换功能](/assets/img/Python基础/通用转换功能.png)



##  文件操作

###  文件编码概念

  1. 什么是编码？ 

     编码就是一种规则集合，记录了内容和二进制间进行相互转换的逻辑。

     编码有许多中，我们最常用的是UTF-8编码。

  2. 为什么需要使用编码？ 

     计算机只认识0和1，所以需要将内容翻译成0和1才能保存在计算机中。

     同时也需要编码，将计算机保存的0和1，反向翻译回可以识别的内容。



###  文件的读取操作

​	[ Python File(文件) 方法 | 菜鸟教程 (runoob.com) ](https://m.runoob.com/python/file-
methods.html)



####  open()打开函数

​	在Python,使用open函数，可以打开一个已经存在的文件，或者创建一个新文件，语法如下：

```python
open(name,mode,encoding)
```


​	name:是要打开的目标文件名的字符串（可以包含文件所在的具体路径）。

​	mode:设置打开文件的模式（访问模式）：只读、写入、追加等。

​	encoding:编码格式（推荐使用UTF-8)

示例代码：

```python
f = open('python.txt','r',encoding="UTF-8)
#encoding的顺序不是第三位，所以不能用位置参数，用关键字参数直接指定
```


​	注意：此时的 ` f ` 是 ` open ` 函数的文件对象，对象是Python中一种特殊的数据类型，拥有属性和方法，可以使用对象.属性或对象.方法对其进行访问。

其他参考： [ Python File(文件) 方法 | 菜鸟教程 (runoob.com)
](https://m.runoob.com/python/file-methods.html)

```python
"""
01_文件的操作.py
"""

# 打开文件
f = open("D:\\code\py\\heima_py\\02_Python入门语法\\12_文件操作\\test.txt", "r", encoding="utf-8")
# 读取文件内容
# print('----------read--读取指定字节---------')
# print(f.read(10))
# print('----------read--读取所有字节---------')
# print(f.read())
# print('----------readline----读取一行内容-------')
# print(f.readline())
# print('----------readlines----读取所有内容，并将每行内容以元素的形式加入到列表中并返回-------')
# print(f.readlines())

# for 循环读取文件行
for line in f:
    print(f'每一行的数据是:{line}')

# 文件的关闭
print('----------close---关闭文件---------')
f.close()

# with open 语法操作文件
with open("D:\\code\py\\heima_py\\02_Python入门语法\\12_文件操作\\test.txt", "r", encoding="utf-8") as f:
    print(f'with open\n {f.readlines()}')
```



###  文件的写出操作

    1. 写入文件使用open函数的 ”w” 模式进行写入 
    2. 写入的方法有： 
       - wite(),写入内容
       - flush(),刷新内容到硬盘中

  3. 注意事项： 

     - w模式，文件不存在，会创建新文件
     - w模式，文件存在，会清空原有内容
     - close()方法，带有flush()方法的功能

     ```python
     """
     03_文件的操作之写操作.py
     """
     
     # 打开文件
     f = open("D:\\code\py\\heima_py\\02_Python入门语法\\12_文件操作\\test.txt", "w", encoding="utf-8")
     # write 写入
     f.write(' hello world!!!123')
     # 刷新内存，将内存的内存写入到硬盘中
     # f.flush()
     # 关闭文件,内置了flush()
     f.close()
     ```

     


###  文件的追加写入操作

  * 追加写入文件使用open函数的 "a" 模式进行写入 
  * 追加写入的方法有（和w模式一致）： 
    * wirte(),写入内容 
    * flush(),刷新内容到硬盘中 
  * 注意事项： 
    * a模式，文件不存在，会创建新文件 
    * a模式，文件存在，会在原有内容后面继续写入 
    * 可以使用”\n”来写出换行符 

```python
"""
04_文件的操作之追加写入操作.py
"""

# 打开文件
f = open("D:\\code\py\\heima_py\\02_Python入门语法\\12_文件操作\\test_append.txt", "a", encoding="utf-8")
# write 写入
f.write(' hello world!!!')
f.write('现在这里是冬天。')
# 刷新内存，将内存的内存写入到硬盘中
# f.flush()
# 关闭文件,内置了flush()
f.close()
```

注意：

  * a模式，文件不存在会创建文件 
  * a模式，文件存在会在最后，追加写入文件 



##  异常

###  了解异常

```python
"""
01_异常.py
"""
with open('./aaa.txt', 'r') as f:
    f.read()

"""
Traceback (most recent call last):
  File "d:\code\py\heima_py\02_Python入门语法\13_异常\01_异常.py", line 4, in <module>
    with open('./aaa.txt', 'r') as f:
FileNotFoundError: [Errno 2] No such file or directory: './aaa.txt'
"""    
```



###  异常的捕获

####  捕获异常

基本语法:

```python
try:
    可能发生的异常
except:
    如果出现异常执行的代码
```


需求：尝试以r模式打开文件，如果文件不存在，则以W方式打开。

```python
"""
02_捕获异常.py

    需求：尝试以r模式打开文件，如果文件不存在，则以W方式打开。
"""

try:
    f = open('D:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\te1.txt', 'r')
except:
    f = open('D:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\te1.txt', 'w')
```



####  捕获指定的异常

基础语法：

```python
# 捕获指定的异常    
try:
    print(aaa)
except NameError as e:
    print('变量未定义,', e)
```



####  捕获所有的异常    

```python
# 捕获所有的异常
try:
   a = 1/0
except Exception as e:
    print(f'出现了异常,内容是:{e}')   
```



###  异常的传递性    

```python
"""
03_异常的传递性.py
"""

def fun1():
    a = 1/0
    return a

def fun2():
    fun1()

def main():
    fun2()

main()
"""
Traceback (most recent call last):
  File "d:\code\py\heima_py\02_Python入门语法\13_异常\03_异常的传递性.py", line 15, in <module>
    main()     
  File "d:\code\py\heima_py\02_Python入门语法\13_异常\03_异常的传递性.py", line 13, in main
    fun2()
  File "d:\code\py\heima_py\02_Python入门语法\13_异常\03_异常的传递性.py", line 10, in fun2
    fun1()
  File "d:\code\py\heima_py\02_Python入门语法\13_异常\03_异常的传递性.py", line 6, in fun1
    a = 1/0
ZeroDivisionError: division by zero
"""
```



##  Python模块

###  什么是模块?

​	Python模块(Module),是一个Python文件，以.py结尾.模块能定义函数，类和变量，模块里也能包含可执行的代码。

​	模块的作用：python中有很多各种不同的模块，每一个模块都可以帮助我

们快速的实现一些功能，比如实现和时间相关的功能就可以使用time模块

​	我们可以认为一个模块就是一个工具包，每一个工具包中都有各种不同的

工具供我们使用进而实现各种不同的功能。

​	大白话：模块就是一个Python文件，里面有类、函数、变量等，我们可以

拿过来用（导入模块去使用）。



###  模块的导入方式

模块在使用前需要先导入。

导入的语法如下：

```python
[from 模块名] import [模块 | 类 丨 变量| 函数 | * ][as 别名]
```


常用的组合形式如：

  * import 模块名 
    
      ```python
    """
    01_模块.py
    """
    # 使用import导入time模块使用sleep功能（函数）
    import time
    print('111')
    time.sleep(5)
    print('222')
    ```
```
    
    
    
  * from 模块名 import 类、变量、方法等 
    
      ```python
    # 使用from导入time的sleep功能（函数）
    from time import sleep
    print('time')
    sleep(5)
    print('time->sleep')
```


​    
  * from 模块名 import * 
    
      ```python
    # 使用*导入time模块的全部功能
    from time import *
    print('time')
    sleep(5)
    print('time->*')
    ```
```
    
    
    
  * import 模块名 as 别名 
    
      ```python
    # 使用as给特定功能加上别名
    import time as t
    print('time')
    sleep(5)
    print('time->as t')
```


​    
  * from 模块名 import 功能名 as 别名 
    
      ```python
    # from 模块名 import 功能名 as 别名
    from time import sleep as sl
    print('time')
    sl(5)
    print('time->as sl')
    ```

注意：

  * from可以省略，直接import即可 
  * as别名可以省略 
  * 通过“.”来确定层级关系 
  * 描块的导入一般写在代码文件的开头位置 



###  模块自定义模块

![自定义模块用例图片](/assets/img/Python基础/自定义模块用例图片.png) 

> 自定义的模块代码(单独的文件):


```python
"""
自定义模块
"""

def start():
    print('我是自定义模块!')
```


> 调用的代码(单独的文件):


```python
"""
02_自定义模块.py
"""
from my_module import start

start()
```


​	注意：同名import 的方法名会被覆盖。



####  main变量    

```python
# 用于测试start函数
if __name__ == '__main__':
    start()
```



####  all变量    

```python
"""
自定义模块
"""

__all__=['abc']

def start():
    print('我是自定义模块!')

def abc():
    print('abc')    

# 用于测试start函数
if __name__ == '__main__':
    start()
```

```python
# 这个时候只可以使用 __all__=['abc']方法
from my_module import * 
abc()
```



##  python包

###  自定义包

​	从物理上看，包就是一个文件夹，在该文件夹下包含了一个iit·py文件，该文件夹可

​	用于包含多个模块文件从逻辑上看，包的本质依然是模块。

​	![python包图](/assets/img/Python基础/python包图.png) 

​	实际层级关系如下：

​	![python自定义包的层级关系](/assets/img/Python基础/python自定义包的层级关系.png) 

步骤如下：

  1. 需要创建包，并且包里需要文件名为： **init.py** (带有两个下划线的)。 

  2. 写包里待导出的函数代码 

        ```python
        """
        my_module1.py
        """
        
        def test():
            print('我是模块1的打印')
        ```

        ```python
        """
        my_module2.py
        """
        
        def test():
            print('我是模块2的打印')
        ```

        


  3. 导入包代码

        ```python
        """
        01_自定义包.py
        """
        import my_package.my_module1
        import my_package.my_module2
        
        my_package.my_module1.test()
        my_package.my_module2.test()
        ```

        

注意：可以在 __init.py__中设置 **all变量** 。



###  安装第三方包

​	我们知道，包可以包含一堆的Python模块，而每个模块又内含许多的功能。

​	所以，我们可以认为：一个包，就是一堆同类型功能的集合体。

​	在Python程序的生态中，有许多非常多的第三方包（非Python官方），可以极大的帮助我们提高开发效率，如：

  * 科学计算中常用的：numpy包 
  * 数据分析中常用的：pandas包 
  * 大数据计算中常用的：pyspark、apache-flink包 
  * 图形可视化常用的：matplotlib、pyecharts 
  * 人工智能常用的：tensorflow 
  * 等 

这些第三方包都需要进行安装，因为Python没有内置。



####  安装第三方包 - pip

​	第三方包的安装非常简单，我们只需要使用Python内置的pip程序即可。

​	打开我们许久未见的：命令提示符程序，在里面输入：

​	pip install 包名称

​	即可通过网络快速安装第三方包。



####  pip的网络优化

​	由于pip是连接的国外的网站进行包的下载，所以有的时候会速度很慢。

​	我们可以通过如下命令，让其连接国内的网站进行包的安装：

    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名称

[ https://pypi.tuna.tsinghua.edu.cn/simple](https://pypi.tuna.tsinghua.edu.cn/simple)  是清华大学提供的一个网站，可供pip程序下载第三方包。



##  json数据格式

###  Python数据和son数据的相互转化  

```python
"""
01_python和json数据的相互转换.py
"""

import json

#准备符合json格式要求的python数据
data= [{"name":"老王", "age":16},{"name":"张三", "age":20}]

#通过json.dumps(data)方法把python数据转化为了json数据
data = json.dumps(data, ensure_ascii=False) # ensure_ascii=False 展示中文
# [{"name": "老王", "age": 16}, {"name": "张三", "age": 20}]
print(data)
# <class 'str'>
print(type(data))

#通过json.loads(data)方法把json数据转化为了python数据
data =  json.loads(data)
# [{'name': '老王', 'age': 16}, {'name': '张三', 'age': 20}]
print(data)
# <class 'list'>
print(type(data))
```



##  pyecharts

​	官网地址： [ https://pyecharts.org ](https://pyecharts.org)

​	如果想要做出数据可视化效果图，可以借助pyecharts模块来完成。

​	概况：

​		Echarts是个由百度开源的数据可视化，凭借着良好的交互性，精巧的图表	设计，得到了众多开发者的认可.而Python是门富有表达力的语言，很适合用	于数据处理，当数据分析遇上数据可视化时pyecharts诞生了。

安装pyecharts:

```python
pip install pyecharts
```



###  pyecharts入门

  * 基础折线图 
    
      ```python
    """
    01_基础折线图.py
    """
    
    from pyecharts.charts import Line
    
    # 得到折线图对象
    line = Line()
    # 添加x轴数据
    line.add_xaxis(['中国', '美国', '英国'])
    # 添加y轴数据
    line.add_yaxis('GDP', [30, 20, 10])
    line.add_yaxis('人口', [20000, 1000, 200])
    # 生成图表
    line.render()
    ```
```
    
    
    
  * 基础柱状图 
    
      ```python
    """
    03_基础柱状图.py
    """
    
    from pyecharts.charts import Bar
    from pyecharts.options import LabelOpts
    
    # 构建柱状图对象
    bar = Bar()
    
    # 添加x轴数据
    bar.add_xaxis(["中国", "美国", "英国"])
    # 添加y轴数据
    bar.add_yaxis(
        "GDP",
        [30, 20, 10],
        # 将数值标签放到右侧
        label_opts=LabelOpts(position='right')
     )
    
    # 反转x、y轴
    bar.reversal_axis()
    
    
    # 绘图
    bar.render("基础柱状图.html")
```


​    
  * 暂无



###  pyecharts有哪些配置选项

pyecharts模块中有很多的配置选项，常用到2个类别的选项：



####  全局配置选项

​	[ 全局配置项 - pyecharts - A Python Echarts Plotting Library built with love.](https://pyecharts.org/#/zh-cn/global_options)

​	set_global_opts 方法

​	这里全局配置选项可以通过set_global_opts方法来进行配置，相应的选项和选项的功能如下：

![set_global_opts方法实现案例图片](/assets/img/Python基础/set_global_opts方法实现案例图片.png) 

​    

```python
"""
01_基础折线图.py
"""
# 导入折线图包
from pyecharts.charts import Line
# 导入标题包、图例包、工具箱包、视觉包
from pyecharts.options import TitleOpts, LegendOpts, ToolboxOpts, VisualMapOpts

# 得到折线图对象
line = Line()
# 添加x轴数据
line.add_xaxis(['中国', '美国', '英国'])
# 添加y轴数据
line.add_yaxis('GDP', [30, 20, 10])

# 设置全局配置项、
line.set_global_opts(
    # 标题
    title_opts=TitleOpts(
        title="GDP展示折线图",
         pos_left="center",
         pos_bottom="1%"
        ),
    # 图例
    legend_opts=LegendOpts(
        is_show=True
    ),
    # 工具箱
    toolbox_opts= ToolboxOpts(
        is_show=True
    ),
    # 视觉
    visualmap_opts=VisualMapOpts(

    )
)

# 生成图表
line.render()
```



####  系列配置选项



###  数据处理



##  面向对象

###  使用对象组织数据

在程序中是可以做到和生活中那样，设计表格、生产表格、填写表格的组织形式的。

  1. 在程序中设计表格，我们称之为：设计类(class) 
        
        ```python
        class student:
        name = None # 记录学生姓名
        ```

  2. 在程序中打印生产表格，我们称之为：创建对象 
        
        ```python
        # 基于类创建对象
        stu_1 = Student()
        stu_2 = Student()
        ```
        
        


  3. 在程序中填写表格，我们称之为：对象属性赋值 
        
        ```python
        # 为学生1对象赋予名称属性值
        stu_1.name="周杰轮"
        # 为学生2对象赋予名称属性值
        stu_2.name="林军杰"
        ```
        
        

###  类的定义和使用

现在我们来看看类的使用语法：

```python
# class是关键字，表示要定义类了
class 类名称：
    # 类的属性，即定义在类中的变量（成员变量）
    类的属性
    # 类的行为，即定义在类中的函数（成员方法）
    类的行为
```


创建类对象的语法：

    对象 = 类名称()


> 类的行为定义：


```python
"""
01_初识class.py
    学生登记表,存在以下属性：
    姓名(name)、性别(gender)、国籍(nationality)、籍贯(native_place)、年龄(age)
"""

# 1. 学生登记表类
class Student:
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None

    # 定义一个行为
    def say_hi(self):
        print(f'我是来着{self.nationality}{self.native_place}的练习生，我叫{self.name},今年{self.age}岁了。')

# 2. 创建一个对象
student = Student()

# 3. 对象属性进行赋值
student.name = '张三'
student.gender = '男'
student.nationality = '中国'
student.native_place = '浙江省'
student.age = 29

# 4. 获取对象中记录的信息
print(student.name)
student.say_hi()
```


可以看出，类中：

  * 不仅可以定义属性用来记录数据 
  * 也可以定义函数，用来记录行为 

其中：

  * 类中定义的属性（变量），我们称之为： **成员变量**
  * 类中定义的行为（函数），我们称之为： **成员方法**



####  成员方法的定义语法

在类中定义成员方法和定义函数基本一致，但仍有细微区别：

```python
def 方法名(se1f,形参1，......，形参N):
    方法体
```


可以看到，在方法定义的参数列表中，有一个：self关键字

self关键字是成员方法定义的时候，必须填写的。

  * 它用来表示类对象自身的意思 。
  * 当我们使用类对象调用方法的是，self会自动被python传入 。
  * 在方法内部，想要访问类的成员变量，必须使用self 。



###  类和对象

####  现实世界的事物和类

![现实世界的事物和类图](/assets/img/Python基础/现实世界的事物和类图.png)

####  为什么非要创建对象才能使用呢？

​	类只是一种程序内的“设计图纸”，需要基于图纸生产实体（对象），才能正常工作

​	这种套路，称之为：面向对象编程。



####  在程序中通过类来描述面向对象

![通过程序来描述闹钟对象图](/assets/img/Python基础/通过程序来描述闹钟对象图.png)



####  基于类创建对象

![基于闹钟类创建对象图](/assets/img/Python基础/基于闹钟类创建对象图.png)
####  代码实现

```python
"""
02_面向对象.py 记得电脑声音开小点
"""

class Clock:
    # id
    id = None
    # 零售价
    price = None

    def ring(self):
        import winsound
        winsound.Beep(2000, 2500)

if __name__ == '__main__':
    clock1 = Clock()
    clock1.id = "1000001"
    clock1.price = 50
    print(f'闹钟ID是{clock1.id},价格是:{clock1.price}')
    clock1.ring()

    clock2 = Clock()
    clock2.id = "1000001"
    clock2.price = 50
    print(f'闹钟ID是{clock2.id},价格是:{clock2.price}')
    clock2.ring()
```


####  构造方法

Python类可以使用： **init** (方法，称之为构造方法。

  * 可以实现：·在创建类对象（构造类）的时候，会自动执行。 
  * 在创建类对象（构造类)的时候，将传入参数自动传递给__init__方法使用。 


```python
"""
03_构造方法.py
"""
#  学生登记表类
class Student:
    # 可以省略
    # name = None
    # gender = None
    # nationality = None
    # native_place = None
    # gender = None

    def __init__(self, name, gender, age, nationality, native_place) -> None:
        self.name = name
        self.gender = gender
        self.age = age
        self.nationality = nationality
        self.native_place = native_place
    
    def say_hi(self):
        print(f'我是来着{self.nationality}{self.native_place}的练习生，我叫{self.name},今年{self.age}岁了。')

stu1 = Student('张三', '男', 27, '中国', native_place='浙江省')
stu1.say_hi()
```



###  其他内置方法

上文学习的init构造方法，是Python:类内置的方法之一。



####  其他常用得内置方法

![其他常用得内置方法图](/assets/img/Python基础/其他常用得内置方法图.png)

​	这些内置的类方法，各自有各自特殊的功能，这些内置方法我们称之为： **魔术方法** 。

![常见魔术方法图](/assets/img/Python基础/常见魔术方法图.png)



####  __str__字符串方法

![不使用__str__方法图](/assets/img/Python基础/不使用__str__方法图.png)

![使用__str__方法图](/assets/img/Python基础/使用__str__方法图.png)

> 代码：


```python
"""
04_常用魔术方法.py
"""
class Stu1:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

class Stu2:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    # __str__字符串方法.py
    def __str__(self) -> str:
        return f'Stu2类对象,name={self.name},age={self.age}'    

if __name__ == '__main__':

    stu1 = Stu1('张三', 26)
    # <__main__.Stu1 object at 0x0000028B8BEF9AC0>
    print(stu1)

    stu2 = Stu2('李四', 30)
    # Stu2类对象,name=李四,age=30
    print(stu2)
```



####  __lt__小于符号比较

![未使用lt小于符号比较图](/assets/img/Python基础/未使用lt小于符号比较图.png) 

![使用lt小于符号比较图](/assets/img/Python基础/使用lt小于符号比较图.png) 

> 代码：


```python
"""
04_常用魔术方法.py
"""
class Stu1:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    def __lt__(self, other):
        return self.age < other.age   

if __name__ == '__main__':

    stu1 = Stu1('张三', 26)
    # <__main__.Stu1 object at 0x0000028B8BEF9AC0>
    print(stu1)

    # __lt__方法
    stu11 = Stu1('张四', 27)
    # __lt__方法,stu1 > stu11 = False
    print(f'__lt__方法,stu1 > stu11 = {stu1 > stu11}')
    stu111 = Stu1('张五', 25)
    # __lt__方法,stu1 > stu111 = True
    print(f'__lt__方法,stu1 > stu111 = {stu1 > stu111}')
```



####  __le__小于等于比较

![lt小于等于方法比较图](/assets/img/Python基础/lt小于等于方法比较图.png) 

> 代码：


```python
"""
04_常用魔术方法.py
"""
class Stu1:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    def __le__(self, other):
        return self.age <= other.age    

if __name__ == '__main__':

    stu1 = Stu1('张三', 26)
    # <__main__.Stu1 object at 0x0000028B8BEF9AC0>
    print(stu1)

    # __le__方法
    stule1 = Stu1('张四', 27)
    # __le__方法,stu1 > stule1 = False
    print(f'__le__方法,stu1 > stule1 = {stu1 >= stule1}')
    stu11e2 = Stu1('张五', 26)
    # __le__方法,stu1 > stu11e2 = True
    print(f'__le__方法,stu1 > stu11e2 = {stu1 <= stu11e2}')
```



####  __eq__比较运算符

![__eq比较运算符__](/assets/img/Python基础/__eq比较运算符__.png) 

​	不实现__eq__方法，对象之间可以比较，但是是比较内存地址，也即是：不同对象 == 比较一定是Flse结果。

​	实现了__eq__方法，就可以按照自己的想法来决定2个对象是否相等了。

> 代码：


```python
"""
04_常用魔术方法.py
"""
class Stu1:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    def __eq__(self, other):
        return self.age == other.age      


if __name__ == '__main__':

    stu1 = Stu1('张三', 26)
    # <__main__.Stu1 object at 0x0000028B8BEF9AC0>
    print(stu1)
    
    # __eq__方法
    stueq1 = Stu1('张四', 27)
    # __eq__方法,stu1 == stule1 = False
    print(f'__eq__方法,stu1 == stule1 = {stu1 >= stueq1}')
    stu1eq2 = Stu1('张五', 26)
    # __eq__方法,stu1 == stu11e2 = True
    print(f'__eq__方法,stu1 == stu11e2 = {stu1 <= stu1eq2}')
```




###  面向对象得三大特性

面向对象编程，是许多编程语言都支持的一种编程思想。

简单理解是：基于模板（类)去创建实体（对象），使用对象完成功能开发。

面向对象包含3大主要特性：

  * 封装 
  * 继承 
  * 多态 



####  封装

封装表示的是，将现实世界事物的：

  * 属性 
  * 行为 

封装到类中，描述为：

  * 成员变量 
  * 成员方法 

从而完成程序对现实世界事物的描述。



#####  私有成员

​	既然现实事物有不公开的属性和行为，那么作为现实事物在程序中映射的类，也应该支持。

类中提供了私有成员的形式来支持。

  * 私有成员变量 
  * 私有成员方法 

定义私有成员的方式非常简单，只需要：

  * 私有成员变量：变量名以开头(2个下划线) 
  * 私有成员方法：方法名以开头（2个下划线 

即可完成私有成员的设置。

```python
"""
05_私有成员.py
"""

class Phone:
    IMEI = None # 序列号
    company = None # 厂商

    __current_voltage = None # 当前电压 私有变量

    def call_by_5g(self):
        print('5g通话已开启')

    def __keep_single_core(self):
        print('让CPU以单核模式运行以节省电量')    

if __name__ == '__main__':
    phone = Phone()
    phone.IMEI = '1001'
    phone.company = 'x米'
    phone.call_by_5g()

    # AttributeError: 'Phone' object has no attribute '__current_voltage'
    # print(phone.__current_voltage)

    # AttributeError: 'Phone' object has no attribute '__keep_single_core'
    # phone.__keep_single_core()
```



######  使用私有成员

```python
"""
05_私有成员.py
"""

class Phone:
    IMEI = None # 序列号
    company = None # 厂商

    __current_voltage = 0.5 # 当前电压 私有变量

    def call_by_5g(self):
        if self.__current_voltage >= 1:
            print('5g通话已开启')
        else:
            self.__keep_single_core()
            print('电量不足，不可以进行5g通话，且已开启CPU单核运行省电。')    

    def __keep_single_core(self):
        print('让CPU以单核模式运行以节省电量')  
      

if __name__ == '__main__':
    phone = Phone()
    phone.IMEI = '1001'
    phone.company = 'x米'
    phone.call_by_5g()

    # AttributeError: 'Phone' object has no attribute '__current_voltage'
    # print(phone.__current_voltage)
    
    # AttributeError: 'Phone' object has no attribute '__keep_single_core'
    # phone.__keep_single_core()
```


​    

####  继承

继承分为：单继承和多继承。

#####  单继承

![单继承实现图](/assets/img/Python基础/单继承实现图.png) 

语法：

```python
class 类名(父类名):
    类内容体
```


继承表示：将从父类那里继承（复制）来成员变量和成员方法（不含私有）。

```python
"""
07_继承.py
"""

class Phone:
    IMEI = None # 序列号
    company = None # 厂商

    __current_voltage = 0.5 # 当前电压 私有变量

    def call_by_5g(self):
        if self.__current_voltage >= 1:
            print('5g通话已开启')
        else:
            self.__keep_single_core()
            print('电量不足，不可以进行5g通话，且已开启CPU单核运行省电。')    

    def __keep_single_core(self):
        print('让CPU以单核模式运行以节省电量')  
      
class Phone_2023(Phone):

    face_recognize = True #  脸部识别

    def call_by_5g_new(self):
        self.call_by_5g()
        print('新呼叫模式')


if __name__ == '__main__':
    phone_new = Phone_2023()
    phone_new.call_by_5g_new()
    print(phone_new.company)
```


​    

#####  多继承

![多继承图](/assets/img/Python基础/多继承图.png) 


​    
```python
"""
07_继承.py
""

class Phone:
    IMEI = None # 序列号
    company = '小米' # 厂商

    __current_voltage = 0.5 # 当前电压 私有变量

    def call_by_4g(self):
        print('4g呼叫模式')
        

# 单继承      
class Phone_2023(Phone):

    face_recognize = True #  脸部识别

    def call_by_5g(self):
        print('5g呼叫模式')

class NFCReader:

    company = 'x米' # 厂商
    nfc_type = '第五代'
    product = 'HH'

    def read_card(self):
        print('读取NFC卡')

    def wrte_card(self):
        print('写入NFC卡')    

class Remote_control:
    rc_type = '红外遥控'

    def controller(self):
        print('红外遥控器开启')

# 多继承
class Phone_new(Phone_2023, NFCReader, Remote_control):

    def msg(self):
        print('我是具备4g呼叫、5g呼叫和NFC与红外遥控功能的手机。')       


if __name__ == '__main__':

    phone = Phone_2023()
    phone.call_by_5g()
    print(phone.company)

    print('------------------------------------------')

    phone_new = Phone_new()
    phone_new.msg()
    phone_new.call_by_4g()
    phone_new.call_by_5g()
    phone_new.controller()
    # 厂商输出:小米,说明后者继承的类相同属性不会覆盖前者
    print(f'厂商输出:{phone_new.company}')
```


​    

#####  复写和使用

​	子类继承父类的成员属性和成员方法后，如果对其“不满意”，那么可以进行复写。

​	即：在子类中重新定义同名的属性或方法即可。

![复写示例图](/assets/img/Python基础/复写示例图.png) 



#####  调用父类同名成员

一旦复写父类成员，那么类对象调用成员的时候，就会调用复写后的新成员

如果需要使用被复写的父类的成员，需要特殊的调用方式：

  * 调用父类成员 使用成员变量：父类名.成员变量 使用成员方法：父类名.成员方法(self) 
  * 使用super()调用父类成员 使用成员变量：super().成员变量 使用成员方法：super().成员方法() 

```python
"""
08_调用父类同名成员.py
"""

class Phone:
    type = '手机'
    IMEI = '10001' # 序列号
    company = '小米' # 厂商
    version = 1.0

    def get_version(slef):
        return slef.version

class XMPhone(Phone):

    def print_info(slef):
        print(f'我是{slef.company}{super().type},序列号是{Phone.IMEI},版本号是{Phone.get_version(slef)}')

    def print_version(slef):
        print(f'手机版本号是{super().get_version()}')

if __name__ == '__main__':
    xmPhone = XMPhone()
    # 我是小米手机,序列号是10001,版本号是1.0
    xmPhone.print_info()
    # 手机版本号是1.0
    xmPhone.print_version()
```



####  类型注解

#####  为什么需要类型注解？

![类型注解提示图](/assets/img/Python基础/类型注解提示图.png) 

#####  什么是类型注解

​	Python:在3.5版本的时候引入了类型注解，以方便静态类型检查工具，IDE等第三方工具。

​	类型注解：在代码中涉及数据交互的地方，提供数据类型的注解（显式的说明）。

主要功能：

  * 帮助第三方DE工具（如PyCharm)对代码进行类型推断，协助做代码提示 
  * 帮助开发者自身对变量进行类型注释 

支持： 变量的类型注解 函数（方法）形参列表和返回值的类型注解

######  变量的类型注解

> 基础语法：


    变量:类型



> 基础数据类型注解：


```python
var_1: int = 10
var_2: f1oat = 3.1415926
var_3: bool = True
var_4: str = "itheima"
```



> 类对象类型注解：


```python
class student:
    pass
stu:student student()
```



######  容器的类型注解

> 基础容器类型注解：


```python
my_1ist: 1ist = [1,2,3]
my_tuple: tuple = (1,2,3)
my_set: set = {1,2,3}
my_dict: dict = {"itheima":666}
my_str: str = "itheima"
```



> 容器类型详细注解：


```python
my_list: list[int] = [1, 2, 3]
my_tuple: tuple[str,int,bool] = ("itheima", 666, True)
my_set: set[int] = {1, 2, 3}
my_dict: dict[str,int] = {"itheima":666}
```


注意：

  * 元组类型设置类型详细注解，需要将每一个元素都标记出来。 
  * 字典类型设置类型详细注解，需要2个类型，第一个是key第二个是value。 



######  注释中进行类型注解

> 语法：


```python
# type: 类型
```

```python
class Stu:
    pass
var_1 = 1 # type: int
var_2 = json.loads(data) # type: dict[str, int]
var_3 = func() # type: Stu
```



######  类型注解的限制

类型注解主要功能在于：

  * 帮助第三方IDE工具（如PyCharm)对代码进行类型推断，协助做代码提示。 
  * 帮助开发者自身对变量进行类型注释（备注）。 

并不会真正的对类型做验证和判断。

也就是，类型注解仅仅是提示性的，不是决定性的。

```python
var_1:int = "itheima"
var_2:str = 123
```


如上代码，是不会报错的哦。



######  函数和方法的类型注解

**形参注解**

```python
def sum(a: int, b: int):
    return a+b # type: int


if __name__ == '__main__':
    print(sum(1, 2))
```


​    


![形参效果图](/assets/img/Python基础/形参效果图.png) 



**返回值注解**

除了上面的那种  注释中进行类型注解  以外还可以用如下方式：

    def add(a: int, b:int) -> int:
        return a+b    
    
    if __name__ == '__main__':
        print(add(2, 3))


![返回值注解2图](/assets/img/Python基础/返回值注解2图.png) 



######  Union联合注解

**变量使用Union**

![需要使用Union的场景图](/assets/img/Python基础/需要使用Union的场景图.png) 

![使用Union后的场景图](/assets/img/Python基础/使用Union后的场景图.png) 



**函数使用Union**

![函数使用Union](/assets/img/Python基础/函数使用Union.png) 

![函数使用Union效果图](/assets/img/Python基础/函数使用Union效果图.png) 



######  类型注解相关代码    

```python
"""
09_类型注解.py
"""
import json

# 变量类型注解
var_1: int = 10
var_2: str = 'aa'
var_3: bool = True

# 类对象类型注解
class Stu:
    pass

stu: Stu = Stu()

# 基础容器类型注解
list_1: list = [1, 2]
tuple_1: tuple = (1, 2)
dict_1: dict = {'age': 28}

# 容器类型的详细注解
list_11: list[int] = [1, 3]
tuple_11: tuple[int, str, bool, dict] = (1, 'a', True, {'age': 28})
dict_11: dict[str, int] = {'age': 28}

# 在注释中进行类型注解
var_11 = 123 # type: int
var_22 = json.loads('{"name": 28}')
def fun1():
    return 3
var_33 = fun1() # type: int    

# 类型注解的限制, 不会报错
var_12: int = 'qqqq'
var_13: str = 22

def sum(a: int, b: int):
    return a+b # type: int

def add(a: int, b:int) -> int:
    return a+b    

# 使用Union类型
from typing import Union
my_list: list[Union[int, str]] = [1, 2, 'aaa'] 

def func(data: Union[int, str]) -> Union[int, str]:
    return data

if __name__ == '__main__':
    print(sum(1, 2))
    print(add(2, 3))

    print(my_list)
    print(func(1))
    print(func('aaa'))
```



####  多态

​	多态：指的是：多种状态，即完成某个行为时，使用不同的对象会得到不同的状态。

```python
"""
10_多态.py
"""

class Animal:

    def speak(self):
        pass

class Cat:

    def speak(self):
        print('喵喵喵')

class Dog:

    def speak(self):
        print('汪汪汪')

def make_noise(animal: Animal):
    animal.speak()

if __name__ == '__main__':
    cat = Cat()
    dog = Dog()
    make_noise(cat)
    make_noise(dog)
```



##  SQL入门和实战

省略



####  Python & mysql

#####  pymysql

除了使用图形化工具以外，我们也可以使用编程语言来执行SQL从而操作数据库。

在Python中，使用第三方库：pymysql来完成对MySQL数据库的操作。

安装：

```python
pip install pymysql
```



```python
"""
01_创建到Mysql的数据库连接.py
"""

from pymysql import Connection

# 获取到Mysql数据库的连接对象
conn = Connection(
    host='127.0.0.1', # 主机名（或IP地址）
    port=3306, # 端口，默认3306
    user='root', # 账户名
    passwd='password' # 密码
)

# 打印Mysql数据库软件信息
print(conn.get_server_info())

# 执行非查询性质sql
# 获取游标对象
cursor = conn.cursor()
# 先选择数据库
conn.select_db('py_test01')
# 使用游标对象，执行sql语句
# cursor.execute('CREATE TABLE test_pymysql(id INT, info VARCHAR(255))')


# 执行查询性质的sql
cursor.execute('select * from test_pymysql')
# 获取查询结果
results: tuple = cursor.fetchall()
print(results)

# 关闭到数据库的连接
conn.close()
```




#####  commit提交

######  手动提交

```python
"""
02_mysql的commit提交.py
"""

from pymysql import Connection

# 获取到Mysql数据库的连接对象
conn = Connection(
    host='127.0.0.1', # 主机名（或IP地址）
    port=3306, # 端口，默认3306
    user='root', # 账户名
    passwd='mysql8.0' # 密码
)

# 得到游标
cursor = conn.cursor()

# 选择数据库
conn.select_db('py_test01')

# 执行sql
cursor.execute('insert into test_pymysql values(2, "bb")')

# commit,不进行这步数据无法插入
conn.commit()

# 关闭到数据库的连接
conn.close()
```



######  自动提交

```python
"""
02_mysql的commit提交.py
"""

from pymysql import Connection

# 获取到Mysql数据库的连接对象
conn = Connection(
    host='127.0.0.1', # 主机名（或IP地址）
    port=3306, # 端口，默认3306
    user='root', # 账户名
    passwd='mysql8.0', # 密码
    autocommit=True # 设置自动提交
)

# 得到游标
cursor = conn.cursor()

# 选择数据库
conn.select_db('py_test01')

# 执行sql
cursor.execute('insert into test_pymysql values(2, "bb")')

# 关闭到数据库的连接
conn.close()
```



##  PySpark

​	暂时省略



#  python进阶

##  闭包

> 非闭包的错误使用方式图

![非闭包的错误使用方式图](/assets/img/Python基础/非闭包的错误使用方式图.png) 



> 转换闭包形式的代码图

![转换闭包形式的代码图](/assets/img/Python基础/转换闭包形式的代码图.png) 


​    
```python
"""
03_闭包实现ATM小案例.py
"""

def account_update(init_amount = 0):
    def atm(num: int, deposit: bool= True):
        nonlocal init_amount
        if deposit:
            init_amount += num
            print(f'存款:+{num},账户余额:{init_amount}')
        else:
            init_amount -= num
            print(f'取款:-{num},账户余额:{init_amount}')

    return atm        

if __name__ == '__main__':
    fn = account_update()
    # 存款:+100,账户余额:100
    fn(100)
    # 取款:-50,账户余额:50
    fn(50, False)
```



###  简单闭包

```python
"""
01_简单闭包.py
"""

def outer(logo):
    def inner(msg):
        print(f'<{logo}>{msg}<{logo}>')

    return inner

if __name__ == '__main__':

    fn1 = outer('张三')
    # <张三>121<张三>
    fn1('121')
    # <张三>abc<张三>
    fn1('abc')

    fn2 = outer('121')
    # <121>加油<121>
    fn2('加油')
```

​	

修改外部函数变量的值：需要使用nonlocal关键字修饰外部函数的变量

才可在内部函数中修改它。

```python
"""
02_修改简单闭包外部函数变量的值.py
"""

def outher(num1):
    def inner(num2):
        nonlocal num1
        num1 += num2
        print(num1)

    return inner    

if __name__ == '__main__':
    fn1 = outher(10)
    # 20
    fn1(10)
    # 40
    fn1(20)
```



###  闭包注意事项

优点，使用闭包可以让我们得到：

  * 无需定义全局变量即可实现通过函数，持续的访问、修改某个值。 
  * 闭包使用的变量的所用于在函数内，难以被错误的调用修改。 

缺点：

  * 由于内部函数持续引用外部函数的值，所以会导致这一部分内存空间不被释放，一直占用内存。 



###  闭包总结

  1. 什么是闭包？ 

     定义双层嵌套函数，内层函数可以访问外层函数的变量。

     将内存函数作为外层函数的返回，此内层函数就是闭包函数。

  2. 闭包的好处和缺点？ 

     - 优点：不定义全局变量，也可以让函数持续访问和修改一个处部变量。
     - 优点：闭包函数引用的外部变量，是外层函数的内部变量。作用域封闭难以被误操作修改。
     - 缺点：额外的内存占用。

  3. nonlocal关键字的作用？ 在闭包函数（内部函数中）想要修改外部函数的变量值。 需要用nonlocal声明这个外部变量。



##  装饰器

​	装饰器其实也是一种闭包，其功能就是在不破坏目标函数原有的代码和功能的前提下，为目标函数增加新功能。

```python
def sleep():
    import random
    import time
    print("睡眠中...")
    time.sleep(rahdom.randint(1,5))
```


希望给sleep函数，增加一个功能：

  * 在调用sleep前输出：我要睡觉了 
  * 在调用sleep后输出：我起床了 



> 闭包写法


```python
"""
01_装饰器得闭包写法.py
"""

def outer(func):
    def inner():
        print('我要睡觉了')
        func()
        print('睡醒了')
    return inner

def sleep():
    import random
    import time

    print('睡眠中...')
    time.sleep(random.randint(1, 5))

if __name__ == '__main__':
    fn = outer(sleep)
    fn()
```



> 语法糖写法


```python
"""
02_装饰器得语法糖写法.py
"""

def outer(func):
    def inner():
        print('我要睡觉了')
        func()
        print('睡醒了')
    return inner

@outer
def sleep():
    import random
    import time

    print('睡眠中...')
    time.sleep(random.randint(1, 5))

if __name__ == '__main__':
    sleep()
```


​    

##  设计模式

设计模式是一种编程套路，可以极大的方便程序的开发。

最常见、最经典的设计模式，就是我们所学习的面向对象了。

除了面向对象外，在编程中也有很多既定的套路可以方便开发，我们称之为设计模式：

  * 单例、工厂模式 
  * 建造者、责任链、状态、备忘录、解释器、访问者、观察者、中介、模板、代理模式 
  * 等等模式 

设计模式非常多，我们主要挑选了2个经常用到的进行讲解。



###  单例模式

> 为什么需要单例模式？

![为什么需要单例模式图？](/assets/img/Python基础/为什么需要单例模式图？.png) 

单例模式(Singleton Pattern)是一种常用的软件设计模式，该模式的主要目的是确保某一个类只有一个实例存在。

在整个系统中，某个类只能出现一个实例时，单例对象就能派上用场。

  * 定义：保证一个类只有一个实例，并提供一个访问它的全局访问点中。 
  * 适用场景：当一个类只能有一个实例，而客户可以从一个众所周知的访问点访问它时。 

> 单例模式的实现

![单例模式的实现图](/assets/img/Python基础/单例模式的实现图.png) 


​    
```python
"""
test.py
"""
class StrTools:
    pass

str_tools = StrTools()
```

```python
"""
01_单例模式.py
"""

from test1 import str_tools

t1 = str_tools
t2 = str_tools

# True
print(t1 == t2)

# <test1.StrTools object at 0x000002986C311CD0>
print(t1)
# <test1.StrTools object at 0x000002986C311CD0>
print(t2)
```


​    

###  工厂模式

当需要大量创建一个类的实例的时候，可以使用工厂模式。

即，从原生的使用类的构造去创建对象的形式

迁移到，基于工厂提供的方法去创建对象的形式。



> 转变为工厂模式

![转变为工厂模式](/assets/img/Python基础/转变为工厂模式.png) 

> 举例代码：


```python
"""
01_工厂模式.py
"""

class Car:
    pass

class HWCar(Car):
    pass

class WLCar(Car):
    pass

class XMCar(Car):
    pass

class CarFactory:

    def get_car(self, car_type: str):
        if car_type == '华为':
            return HWCar()
        elif car_type == '蔚来':
            return WLCar()
        elif car_type == '小米':
            return XMCar
        else:
            print(f'{car_type}车子并没有Class')
            return None        

if __name__ == '__main__':
    car_factory = CarFactory()
    car = car_factory.get_car('华为')

    # <class '__main__.HWCar'>
    print(type(car))
    
```

使用工厂类的get_person(0方法去创建具体的类对象。

优点：

  * 大批量创建对象的时候有统一的入口，易于代码维护。 
  * 当发生修改，仅修改工厂类的创建方法即可。 
  * 符合现实世界的模式，即由工厂来制作产品（对象）。 



##  多线程

###  进程、线程

​	现代操作系统比如Mac OS X,UNIX,Linux,Windows等，都是支持“多任务”的操作系统。

​	进程：就是一个程序，运行在系统之上，那么便称之这个程序为一个运行进程，并分配进程ID方便系统管理。

​	线程：线程是归属于进程的，一个进程可以开启多个线程，执行不同的工作，是进程的实际工作最小单位。

​	![任务管理器图](/assets/img/Python基础/任务管理器图.png) 

​	进程就好比一家公司，是操作系统对程序进行运行管理的单位。

​	线程就好比公司的员工，进程可以有多个线程（员工)，是进程实际的工作者。

​	操作系统中可以运行多个进程，即多任务运行。

​	一个进程内可以运行多个线程，即多线程运行。



> 进程、线程注意点

![进程、线程注意点图](/assets/img/Python基础/进程、线程注意点图.png) 



####  并行执行

并行执行的意思指的是同一时间做不同的工作。

进程之间就是并行执行的，操作系统可以同时运行好多程序，这些程序都是在并行执行。

除了进程外，线程其实也是可以并行执行的。

也就是比如一个Python程序，其实是完全可以做到：

  * 一个线程在输出：你好 
  * 一个线程在输出：Hello 

像这样一个程序在同一时间做两件乃至多件不同的事情，我们就称之为：多线程并行执行。



###  多线程编程

####  threading模块

绝大多数编程语言，都允许多线程编程，Pyhton也不例外。

Python的多线程可以通过threading模块来实现。

```python
"""
01_多线程.py
"""
import threading

"""
group=None, 暂时无用，未来功能的预留参数
target=None, 执行的目标任务名
name=None, 线程名，一般不用设置
args=(), 以元组的方式给执行任务传参 
kwargs=None, 以字典方式给执行任务传参
*,
daemon=None
"""
thread_obj = threading.Thread(

)

# 启动线程，让线程工作
thread_obj.start()
```


​    
```python
"""
02_多线程编程.py
"""
import time
from threading import Thread

def sing(name):
    while True:
        print(f'{name}在唱歌...')
        time.sleep(1)

def dance(name):
    while True:
        print(f'{name}在跳舞...')
        time.sleep(1)

if __name__ == '__main__':

    # 创建线程
    sing_thread = Thread(target=sing, args=('张三', )) # 注意：元组必须得带有逗号
    dance_thread = Thread(target=dance, kwargs={'name': '李四'})

    # 启动线程
    sing_thread.start()
    dance_thread.start()
```



##  网络编程

###  socket

​	socket(简称套接字)是进程之间通信一个工具，好比现实生活中的插座，所有的家用电器要想工作都是基于插座进行，进程之间想要进行网络通信需要socket。

​	Socket: 负责进程之间的网络数据传输，好比数据的搬运工。



###  客户端和服务端

​	2个进程之间通过Socket进行相互通讯，就必须有服务端和客户端。

​	Socket服务端：等待其它进程的连接、可接受发来的消息、可以回复消息。

​	Socket客户端：主动连接服务端、可以发送消息、可以接收回复。

​	![socket的客户端和服务端模拟图](/assets/img/Python基础/socket的客户端和服务端模拟图.png) 



###  Socket服务端开发

```python
"""
01_socket服务端编程.py
"""

import socket

# 1. 创建socket对象
socket_server = socket.socket()

# 2. 绑定socket_server到指定的IP和地址
host = '127.0.0.1'
port = 8000
socket_server.bind((host, port))

# 3. 服务端开始监听端口
backlog = 1
# backlog为int整数，表示允许的连接数量，超出的会等待，可可以不填，不填会自动设置一个合理值
socket_server.listen(backlog)

# 4. 接收客户端连接，获得连接对象
# accept方法是阻塞方法，如果没有连接，会卡再当前这一行不向下执行代码
# accept返回的是一个二元元组，可以使用上述形式，用两个变量接收二元元组的2个元素
conn, address = socket_server.accept()

print(f'接收到客户端连接，连接来着:{address}')

# 接收客户端信息，要使用客户端和服务端本次的连接对象，而非socket_server对象
# recv接受的参数是缓冲区大小，一般给1024即可
# recv方法的返回值是一个字节数组也就是bytes对象，不是字符串，可以通过decode方法通过UTF-8等码.将字节数数组转换为字符申对象
data: str = conn.recv(1024).decode('utf-8')
print(f'接收到客户端发送的消息：{data}')

# 发送回复信息
msg = input('请输入您要回复的消息：')
# encode可以将字符串编码为字节数组对象
conn.send(msg.encode('utf-8'))

# 关闭连接
conn.close()
socket_server.close()
```



###  Socket客户端开发    

```python
"""
02_socket客户端编程.py
"""

import socket

# 1. 创建socket对象
socket_client = socket.socket()

# 2. 连接到服务端
host = '127.0.0.1'
port = 8000
socket_client.connect((host, port))

# 3. 发送消息
while True:
    send_msg = input('请输入要发送的消息：')
    if send_msg == 'exit':
        break
    # 通过encode将字符串编码为字节数组
    socket_client.send(send_msg.encode('utf-8'))

    # 4. 接收服务器返回的消息
    recv_data = socket_client.recv(1024)
    print(f'服务器返回的消息:{recv_data.decode("utf-8")}')

# 5. 关闭连接
socket_client.close()
```



##  正则表达式

​	正则表达式，又称规则表达式(Regular Expression),是使用单个字符串来描述、匹配某个句法规则的字符串，常被用来检索、替换那些符合某个模式（规则）的文本。

​	简单来说，正则表达式就是使用：字符串定义规则，并通过规则去验证字符串是否匹配。

​	比如，验证一个字符串是否是符合条件的电子邮箱地址，只需要配置好正则规则，即可匹配任意邮箱。

​	比如通过正则规则：(w-]+(.w-]+)*@w-]+(.w-]+)+$)即可匹配一个字符串是否是标准邮箱格式。

​	但如果不使用正则，使用if else来对字符串做判断就非常困难了。



###  简单字符串匹配

​	Python正则表达式，使用re模块，并基于re模块中三个基础方法来做正则匹配。

​	分别是：match、search、findall三个基础方法。


​    
```python
"""
01_正则表达式入门.py
"""

import re

'''
    match匹配: 

    从被匹配字符串开头进行匹配，
    匹配成功(只匹配第一个命中项)返回匹配对象（包含匹配的信息），
    匹配不成功返回空。
'''
# 可以匹配到的示例
s1 = 'python 1111 python 12321'
result_match_1= re.match('python', s1)
# <re.Match object; span=(0, 6), match='python'>
print(result_match_1) 
# (0, 6)
print(result_match_1.span())
# python
print(result_match_1.group())

# 无法匹配到的示例
s2 = '1python 1111 python 12321'
result_match_2= re.match('python', s2)
# None
print(result_match_2)

'''
    search: 搜索匹配(只匹配第一个命中项)
'''
a1 = '1python 1111 python 12321'
result_search_1 = re.search('python', a1)
# <re.Match object; span=(0, 6), match='python'>
print(result_search_1)
(1, 7)
print(result_search_1.span())
# python
print(result_search_1.group())

'''
    findall: 搜索全部(匹配所有命中项)
'''
t1 = '1python 1111 python 12321'
result_findall_1 = re.findall('python', t1)
# ['python', 'python']
print(result_findall_1)
```


​    

###  元字符匹配

####  单字符匹配

字符  |  功能  
---|---  
.  |  匹配任意1个字符（除了\n），.匹配点本身  
[ ]  |  匹配[ ]中列举的字符  
\d  |  匹配数字，即0-9  
\D  |  匹配非数字  
\s  |  匹配空白，即空格、tab键  
\S  |  匹配非空白  
\w  |  匹配单词字符，即a-z、A-Z、0-9、_  
\W  |  匹配非单词字符  



####  数量匹配

字符  |  功能  
---|---  
*  |  匹配前一个规则的字符出现0至无数次   
\+  |  匹配前一个规则的字符出现1至无数次  
?  |  匹配前一个规则的字符出现0次或1次  
{m}  |  匹配前一个规则的字符出现m次  
{m,}  |  匹配前一个规则的字符出现最少m次  
{m, n}  |  匹配前一个规则的字符出现m到n次  

注意: {m,n}不能有空格！



####  边界匹配

| 字符 | 功能               |
| :--: | ------------------ |
|  ^   | 匹配字符串开头     |
|  $   | 匹配字符串结尾     |
|  \b  | 匹配一个单词的边界 |
|  \B  | 匹配非单词边界     |

| 字符 | 功能                     |
| :--: | ------------------------ |
|  \|  | 匹配左右任意一个表达式   |
|  ()  | 将括号中字符作为一个分组 |



##  递归

省略


