---
date: 2026-08-22
title: Python基础-AI整理版
categories:
  - python
tag:
  - 开发
  - python
footer: Python基础-AI整理版

---
# ![Python](/assets/img/icons/python.svg) Python基础-AI整理版

> 基于 [Python基础](./python.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这份笔记怎么读

这份笔记覆盖从 Python 入门语法到进阶（闭包、装饰器、多线程、Socket、正则）的完整主线。第一次系统学习建议按章节顺序读；快速复习则直接看每节开头的表格和结论，再挑代码回看。

## 学习路线图

| 阶段 | 重点 | 说明 |
| --- | --- | --- |
| 入门 | 字面量、变量、运算符 | 先会写最简单的语句 |
| 基础 | 字符串格式化、input | `%s`、`f"{}"`、输入输出 |
| 流程控制 | if / while / for | 判断、循环、break / continue |
| 函数 | 定义、参数、返回值 | 再学多返回值、4 种传参、lambda |
| 数据容器 | list、tuple、str、set、dict | 重点是各自特点和常用方法 |
| 工程能力 | 文件、异常、模块、包 | 和系统、第三方生态打交道 |
| 面向对象 | 类、魔术方法、三大特性 | 加上类型注解 |
| 进阶 | 闭包、装饰器、多线程、Socket、正则 | 面试和实战常见 |

---

## 一、基础语法：字面量、注释与变量

### 1. 常用的 6 种数据类型

| 类型 | 描述 | 说明 |
| --- | --- | --- |
| 数字（number） | 整数（int）、浮点数（float）、复数（complex）、布尔（bool） | 整数如 10、-10；浮点数如 13.14；复数如 4+3j（以 j 结尾）；布尔表达真和假，True 记作 1，False 记作 0 |
| 字符串（string） | 描述文本的一种数据类型 | 由任意数量的字符组成 |
| 列表（list） | 有序的可变序列 | 使用最频繁的数据类型，可有序记录一堆数据 |
| 元组（tuple） | 有序的不可变序列 | 可有序记录一堆不可变的数据集合 |
| 集合（set） | 无序不重复集合 | 可无序记录一堆不重复的数据 |
| 字典（Dictionary） | 无序的 Key-Value 集合 | 可无序记录一堆 Key-Value 型数据 |

```python
int_value = 6
float_value = 3.14
str_value = "黑马"

print("int：", int_value)      # int： 6
print("float：", float_value)  # float： 3.14
print("string：", str_value)   # string： 黑马
```

### 2. 注释

单行注释用 `#`；多行注释用一对三引号。三引号字符串“用变量接收就是字符串，不用变量接收就是多行注释”，后面字符串一章会再用到。

```python
# 我是单行注释
int_value = 6

"""
我是多行注释
1
2
3
"""
```

### 3. 变量

变量：在程序运行时，记录数据用的。定义格式如下图：

![变量的定义格式](/assets/img/Python基础/变量的定义格式.png)

```python
# 余额50元，买冰淇淋花5元，买可乐花3.5元，打印剩余金额
amount = 50
amount = amount - 5
amount = amount - 3.5

print("钱包余额为:", amount)   # 钱包余额为: 41.5
```

### 4. 变量有类型吗？

变量本身无类型，变量存储的数据有类型，`type()` 查看的是“变量所存储数据的类型”。

![变量有类型嘛？](/assets/img/Python基础/变量有类型嘛？.png)

```python
name = "张三"
age = 18
amount = 35.5

print("name 的类型是：", type(name))     # <class 'str'>
print("age 的类型是：", type(age))       # <class 'int'>
print("amount 的类型是：", type(amount)) # <class 'float'>
```

### 5. 数据类型转换

为什么要转换？很多场景下数据“到手时的类型”不是想要的：文件中读取的数字默认是字符串；`input()` 的结果默认是字符串；数字写出外部系统前要转字符串。

| 语句（函数） | 说明 |
| --- | --- |
| `int(x)` | 将 x 转换为一个整数 |
| `float(x)` | 将 x 转换为一个浮点数 |
| `str(x)` | 将对象 x 转换为字符串 |

三种转换都有返回值，可以 `print()` 直接输出或用变量存储。

```python
print(type(str(11)), str(11))              # <class 'str'> 11，数字转字符串
print(type(int("123")), int("123"))        # <class 'int'> 123，字符串转int
print(type(float("1.01")), float("1.01"))  # <class 'float'> 1.01，字符串转float
print(type(float(1)), float(1))            # <class 'float'> 1.0，int转float
print(type(int(1.01)), int(1.01))          # <class 'int'> 1，float转int，会丢失精度

# 错误示例（报 ValueError）：
# int("123abc")  -> invalid literal for int() with base 10: '123abc'
# float("1.01f") -> could not convert string to float: '1.01f'
```

---

## 二、标识符与运算符

### 1. 标识符命名规则

只允许出现：英文、中文、数字、下划线四类元素。注意：

1. 不推荐使用中文
2. 数字不可以开头
3. 大小写是敏感的
4. 不可使用关键字

### 2. 算术运算符

![算术运算符](/assets/img/Python基础/算术运算符.png)

### 3. 赋值运算符

![赋值运算符](/assets/img/Python基础/赋值运算符.png)

### 4. 复合赋值运算符

![复合赋值运算符](/assets/img/Python基础/复合赋值运算符.png)

---

## 三、字符串详解

### 1. 三种定义方式

1. 单引号定义法：`name = '黑马程序员'`
2. 双引号定义法：`name = "黑马程序员"`
3. 三引号定义法：`name = """黑马程序员"""`，支持换行

```python
str1 = '单引号字符串'
str2 = "双引号字符串"
str3 = """三引号字符串
1,
2,
3。
"""

print(str1, type(str1))  # 单引号字符串 <class 'str'>
print(str2, type(str2))  # 双引号字符串 <class 'str'>
print(str3, type(str3))
```

### 2. 引号嵌套

- 单引号定义法，可以内含双引号
- 双引号定义法，可以内含单引号
- 可以使用转义字符 `\` 将引号解除效用，变成普通字符

```python
name = '"红茶"'
print(name)         # "红茶"

name = "'红茶'"
print(name)         # '红茶'

name = "\"红茶\""
print(name)         # "红茶"
```

更多转义字符查看 [Python3 字符串 | 菜鸟教程](https://www.runoob.com/python3/python3-string.html)。

### 3. 字符串拼接

```python
name = "黑马程序员"
print("我的名字是：" + name + ", 我可以教大家IT技能")
# 我的名字是：黑马程序员, 我可以教大家IT技能
```

注意：无法和非字符串类型拼接：

```python
name = "黑马程序员"
age = 16
print(name + "年龄是" + age)
# TypeError: can only concatenate str (not "int") to str
```

### 4. 字符串格式化（占位符）

`+` 拼接的局限：变量多时麻烦，且无法和数字等类型拼接。占位符可以完成字符串和变量的快速拼接：

```python
my = "我是"
c_name = "红茶"
cn_name = "blacktea"
age = 16
birthday = 622

print(my, c_name, "or", cn_name, "年龄是%s" % age)
# 我是 红茶 or blacktea 年龄是16
print(my, c_name, "or", cn_name, "年龄是%s生日是%s" % (age, birthday))
# 我是 红茶 or blacktea 年龄是16生日是622
```

其中 `%s`：`%` 表示“我要占位”，`s` 表示“将变量变成字符串放入占位的地方”。最常用的三类占位符：

| 格式字符 | 转化 |
| --- | --- |
| `%s` | 将内容转换成字符串，放入占位位置 |
| `%d` | 将内容转换成整数，放入占位位置 |
| `%f` | 将内容转换成浮点型，放入占位位置 |

```python
age = 16
balance = 6.67
print("我是红茶,年龄是%d,余额只有%f" % (age, balance))
# 我是红茶,年龄是16,余额只有6.670000
```

### 5. 格式化的精度控制

辅助符号 `m.n` 控制数据的宽度和精度：

- `m` 控制宽度（很少使用），设置的宽度小于数字自身时不生效
- `.n` 控制小数点精度，会四舍五入

示例：`%5d` 宽度控制 5 位；`%5.2f` 宽度 5、精度 2（小数点和小数部分也算入宽度）；`%.2f` 只限制精度，如 11.345 的结果是 11.35。

```python
num1 = 11.123
print("数字11.123宽度限制为5,结果是:%5f" % num1)               # 11.123000
print("数字11.123宽度限制为1,结果是:%1f" % num1)               # 11.123000
print("数字11.123宽度限制为5,小数精度为2,结果是:%5.2f" % num1)  # 11.12
print("数字11.123小数精度为2,结果是:%.2f" % num1)              # 11.12
```

注意：原文实测 `%5f`、`%1f` 这类只限制整数宽度的写法并没有打印出空格补位。

### 6. 格式化方式 2：f-string

语法：`f"内容{变量}"`，更加优雅，适合对精度没有要求的时候快速使用：

```python
name = "红茶"
birthday = 622
age = 18
balance = 3.1456
print(f"我是{name},年龄为:{age},生日是:{birthday},余额为:{balance}")
# 我是红茶,年龄为:18,生日是:622,余额为:3.1456
```

### 7. 对表达式进行格式化

表达式：一条具有明确执行结果的代码语句，如 `1+1`、`5*2`，或变量定义 `age = 1+1`。

```python
print("1*1的结果是:%d" % 1 * 1)                          # 1*1的结果是:1
print(f"1+1的结果是:{1+1}")                              # 1+1的结果是:2
print("1*2的结果是:", 1 * 2)                             # 1*2的结果是: 2
print("字符串在Python中的类型名称是:%s" % type("字符串"))  # <class 'str'>
```

### 8. 实战：股价计算小程序

```python
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
# 公司:红茶XX公司,股票代码:003032,当前股价:19.99,
# 每日增长系数是:1.2,经过7天的增长后,股价达到了:71.63
```

### 9. 字符串如何比较大小

字符串中的所有字符（大小写英文、数字、特殊符号、空格等）都有对应的 ASCII 码值，字符串比较就是基于码值大小进行的；且是按位比较：一位位对比，只要有一位大，那么整体就大。

![字符串比较图](/assets/img/Python基础/字符串比较图.png)

---

## 四、数据输入：input 语句

`print` 负责输出，`input` 负责获取键盘输入，用一个变量接收即可。注意：得到的结果默认是字符串。

```python
print("您好，您的名称是?")
name = input()
msg = input(f"我可以叫您{name}先生吗?\n")
print("好的。")
# 运行效果（键盘依次输入：绿毛虫、可以）：
# 您好，您的名称是?
# 绿毛虫
# 我可以叫您绿毛虫先生吗?
# 可以
# 好的。
```

实战：欢迎登陆小程序。

```python
user_name = input("请输入姓名：")
user_type = input("请输入用户类型：")
print(f"您好：{user_name},您是尊贵的：{user_type},欢迎登陆。")
# 输入绿毛虫、svip时输出：您好：绿毛虫,您是尊贵的：svip,欢迎登陆。
```

---

## 五、判断语句

### 1. 布尔类型和比较运算符

布尔类型的字面量：`True` 表示真，`False` 表示假。定义：`变量名称 = 布尔类型字面量`。布尔类型不仅可以自行定义，也可以通过比较运算符运算得到：

| 运算符 | 描述 | 示例 |
| :----: | --- | --- |
| == | 判断内容是否相等，满足为 True，不满足为 False | a=3,b=3，则(a==b)为 True |
| != | 判断内容是否不相等 | a=1,b=3，则(a!=b)为 True |
| > | 判断左侧内容是否大于右侧 | a=7,b=3，则(a>b)为 True |
| < | 判断左侧内容是否小于右侧 | a=3,b=7，则(a<b)为 True |
| >= | 判断左侧内容是否大于等于右侧 | a=3,b=3，则(a>=b)为 True |
| <= | 判断左侧内容是否小于等于右侧 | a=3,b=3，则(a<=b)为 True |

```python
res1 = 10 > 5
print(f"10 > 5 的结果是:{res1}, 类型是:{type(res1)}")   # True <class 'bool'>

name = "blacktea"
print(f"\"blacktea\" == 'blacktea' 的结果是:{name == 'blacktea'}")   # True
print(f"\"blacktea\" == \"abs123\" 的结果是:{name == 'abs123'}")     # False
```

### 2. if 语句的基本格式

```python
if 要判断的条件:
    条件成立时，要执行的事情    # 需要4个空格缩进
```

```python
age = int(input("请输入您的年龄:"))

if age >= 18:
    print("时间过得真快啊,您已经成年了！")

print("今年都已经%d岁了啊" % age)
# 输入18时输出：
# 时间过得真快啊,您已经成年了！
# 今年都已经18岁了啊
```

### 3. if else 语句

```python
age = int(input("请输入您的年龄:"))

if age >= 18:
    print("您已经成年了！")
else:
    print("还有%d年成年!" % (18-age))

print("时间过得真快啊,今年都已经%d岁了啊" % age)
# 输入12时输出：还有6年成年! / 时间过得真快啊,今年都已经12岁了啊
```

### 4. if elif else 语句

```python
height = int(input("请输入身高(cm):"))
vip_level = int(input("请输入VIP等级:"))
condition_height = 120
condition_vip_level = 3

if height < condition_height:
    print("您身高未超过%d可以免费游玩。" % condition_height)
elif vip_level > condition_vip_level:
    print("您的会员等级超过%d级可以免费游玩。" % condition_vip_level)
else:
    print("免费条件不满足,需要票价10元。")

print("祝您游玩愉快")
# 输入110、1时输出：您身高未超过120可以免费游玩。/ 祝您游玩愉快
# 输入130、1时输出：免费条件不满足,需要票价10元。/ 祝您游玩愉快
```

### 5. 判断语句的嵌套

![嵌套判断图](/assets/img/Python基础/嵌套判断图.png)

```python
height = int(input("请输入身高(cm):"))
condition_height = 120
condition_vip_level = 3

if height > condition_height:
    print("""
        您身高超过%d,不可以免费游玩,
        但是，如果会员等级超过%d,也可以免费游玩
    """ % (condition_height, condition_vip_level))
    if int(input("请输入VIP等级:")) > condition_vip_level:
         print("您的会员等级超过%d级可以免费游玩。" % condition_vip_level)
    else:
        print("免费条件不满足,需要票价10元。")

print("祝您游玩愉快")
# 输入130、4时依次输出上面三段提示和“祝您游玩愉快”；
# 输入120时不进入if，只输出：祝您游玩愉快
```

### 6. 实战：猜数字案例

需求：随机产生 1~10 的数字，3 次机会猜出，每次猜不中提示大了或小了（通过 3 层嵌套判断实现）：

```python
import random

num_r = random.randint(1, 10)
num = int(input("请输入数字(1~10),第1次机会："))

if num != num_r:
    if num > num_r:
        print("猜错了，且值大于随机值")
    else:
        print("猜错了，且值小于随机值")
    num = int(input("请输入数字(1~10),第2次机会："))
    if num != num_r:
        # 第2次猜错同样先提示大于/小于随机值（与上面写法一致）
        num = int(input("请输入数字(1~10),最后一次机会："))
        if num != num_r:
            print("三次都猜错了，您失败了。")
        else:
            print("恭喜您，最后一次猜到了")
    else:
        print("恭喜您，两次就猜对了")
else:
    print("恭喜您，第一次就猜对了")
```

---

## 六、循环语句

![循环语句前言](/assets/img/Python基础/循环语句前言.png)

### 1. while 循环的基础语法

```python
while 条件:
    条件满足时，做的事情    # 需要4个空格缩进
```

要点：

1. while 的条件需得到布尔类型，True 表示继续循环，False 表示结束循环
2. 需要设置循环终止的条件（如 `i += 1` 配合 `i < 100`），否则将无限循环

基础案例：1~100 累加。

```python
sum = 0
step = 1

while step <= 100:
    sum += step
    step += 1

# 第100次循环时 step 又+1了，所以打印时-1
print(f"1-100累加的和是{sum},循环次数为{step-1}")
# 1-100累加的和是5050,循环次数为100
```

### 2. while 循环的嵌套

嵌套案例：99 乘法表。`end=""` 实现不换行，`\t` 制表符进行对齐。

```python
i = 1

while i <= 9:
    j = 1
    while j <= i:
        print("%d*%d=%d\t" % (j, i, i*j), end="")
        j += 1
    i += 1
    print()

# 输出（9行三角形结构）：
# 1*1=1
# 1*2=2	2*2=4
# 1*3=3	2*3=6	3*3=9
# ......（依次到 1*9=9	2*9=18 ... 9*9=81）
```

### 3. for 循环的基础语法

- while 循环的循环条件是自定义的，自行控制循环条件
- for 循环是一种“轮询”机制，对一批内容进行“逐个处理”

```python
for 临时变量 in 待处理数据集:
    循环满足条件时执行的代码
```

```python
for c in "blacktea":
    print(c)
# 依次输出：b l a c k t e a（每行一个字符）
```

for 循环无法定义循环条件，只能从被处理的数据集中依次取出内容处理，所以理论上无法构建无限循环（被处理的数据集不可能无限大）。注意循环内的语句需要空格缩进。

### 4. range 语句

“待处理数据集”严格来说称之为序列类型：内容可以一个个依次取出的类型（字符串、列表、元组等），for 循环本质上就是遍历序列类型。range 语句可以获得一个简单的数字序列：

| 语法 | 说明 | 示例 |
| --- | --- | --- |
| `range(num)` | 从 0 开始，到 num 结束（不含 num 本身） | `range(5)` 得到 `[0,1,2,3,4]` |
| `range(num1, num2)` | 从 num1 开始，到 num2 结束（不含 num2） | `range(5,10)` 得到 `[5,6,7,8,9]` |
| `range(num1, num2, step)` | 同上，步长以 step 为准（默认 1） | `range(5,10,2)` 得到 `[5,7,9]` |

```python
for i in range(10):         # 语法1：依次输出 0~9
    print(i)

for i in range(5, 10):      # 语法2：依次输出 5~9
    print(i)

for i in range(5, 10, 2):   # 语法3：依次输出 5、7、9
    print(i)
```

### 5. 变量作用域

for 循环内使用的临时变量，规范上只应在 for 内部访问；提前在 for 外定义同名变量，就可以在 for 外使用（本质是覆盖）：

```python
j = 0
for j in range(9):
    print(j)   # 依次输出 0~8
print(j)       # 循环结束后 j 为 8（再次输出 8）
```

### 6. for 循环的嵌套

```python
for i in range(1, 10):
    for j in range(1, i+1):
        print(f'{j}*{i}={j*i}\t', end='')
    print()
```

输出与 while 版的 99 乘法表相同。

### 7. 循环中断：break 和 continue

| 关键字 | 作用 | 说明 |
| --- | --- | --- |
| `continue` | 中断本次循环，直接进入下一次循环 | 可用于 for 和 while，效果一致 |
| `break` | 直接结束循环 | 可用于 for 和 while，效果一致 |

```python
# continue：遇到 continue 就结束当次循环进入下一次，其后的语句不执行
for i in range(1, 10):
    if i == 8:
        continue
    print(i)      # 输出 1 2 3 4 5 6 7 9

# break：直接结束循环，执行循环后的语句
for i in range(1, 10):
    if i == 8:
        break
    print(i)      # 输出 1 2 3 4 5 6 7
```

### 8. 综合案例：发工资

```python
from random import randint
for i in range(1, 21):
    r_num = randint(1, 10)
    if r_num < 5:
        print(f'员工:{i},绩效分:{r_num},低于5分,不发工资。')
    else:
        print(f'员工:{i},绩效分:{r_num},发1000工资。')
# 输出20行，如：员工:1,绩效分:2,低于5分,不发工资。/ 员工:2,绩效分:5,发1000工资。
# 绩效分随机，每次运行结果不同
```

---

## 七、函数基础

### 1. 函数初体验

函数：组织好的、可重复使用的、用来实现特定功能的代码段。`len()` 之所以随时可用，是因为它是 Python 内置函数：提前写好、可重复使用、实现统计长度这一特定功能。

```python
name = "itheima"
print(len(name))   # 7
```

也可以自己封装一个同样功能的函数：

```python
def len_str(str):
    count = 0
    for i in str:
        count += 1
    return count

print(f'字符串1234567890qazxsw...,长度为:{len_str("1234567890qazxsw...")}')
# 字符串1234567890qazxsw...,长度为:19
```

使用函数的好处：将功能封装在函数内，可供随时随地重复利用；提高代码的复用性，减少重复代码，提高开发效率。

### 2. 函数的基础定义语法

```python
def 函数名(传入参数):
    函数体
    return 返回值
```

- 使用步骤：先定义函数，后调用函数
- 参数不需要可以省略；返回值不需要可以省略

```python
def check():
    print('''
        欢迎来到黑马程序员！
        请出示您的健康码以及72小时核酸证明！
    ''')

check()
```

### 3. 函数的传入参数

传入参数的功能是：在函数进行计算的时候，接受外部（调用时）提供的数据。

```python
def add(a, b):
    print(f'{a}+{b}={a+b}')

add(1, 5)    # 1+5=6
```

- 函数定义中提供的 a 和 b，称之为形式参数（形参），表示函数声明将要使用 2 个参数，参数之间用逗号分隔
- 函数调用中提供的 1 和 5，称之为实际参数（实参），表示函数执行时真正使用的参数值，按顺序传入、逗号分隔
- 传入参数的数量不受限制，可以不使用参数，也可以使用任意 N 个

参数练习：自动查体温（正常范围：小于等于 37.5 度）。

```python
def check(temperature):
    if temperature <= 37.5:
        print(f'体温测量中，您的体温是：{temperature}度，体温正常请进！')
    else:
        print(f'体温测量中，您的体温是：{temperature}度，需要隔离！')

print('欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！')
check(float(input('请输入您的体温:')))
# 输入37.5：体温测量中，您的体温是：37.5度，体温正常请进！
# 输入38：体温测量中，您的体温是：38.0度，需要隔离！
```

### 4. 函数返回值之 None

如果函数没有使用 return 语句返回数据，函数也是有返回值的：返回特殊的字面量 `None`，其类型是 `<class 'NoneType'>`。None 表示空的、无实际意义。

```python
def add(a, b):
    print(f'{a}+{b}={a+b}')

add_result = add(1,5)   # 1+5=6
print(f'add函数返回结果、类型:{add_result}、{type(add_result)}')
# add函数返回结果、类型:None、<class 'NoneType'>

if not add_result:      # None 在 if 判断中等同于 False，走这里
    print(f'获取到结果为空')
else:
    print(f'获取到结果为:{add_result}')
# 获取到结果为空
```

None 还可用于声明无内容的变量：定义变量但暂时不需要具体值时，用 None 代替（`name = None`）。

### 5. 函数的说明文档

函数是纯代码语言，逐行阅读效率低，可以给函数添加说明文档辅助理解，内容写在函数体之前：

```python
def func(x, y):
    """
    函数说明
    :param x: 形参x的说明
    :param y: 形参y的说明
    :return: 返回值的说明
    """
    函数体
    return 返回值
```

`:param` 用来解释参数，`:return` 用来解释返回值。VS Code 中将鼠标悬停在函数调用上，可以看到注释内容。

![vscode显示注释内容](/assets/img/Python基础/vscode显示注释内容.png)

### 6. 函数的嵌套使用

函数嵌套调用：一个函数里面又调用了另外一个函数。执行流程：函数 A 中执行到调用函数 B 的语句，会将函数 B 全部执行完成后，再继续执行函数 A 的剩余内容。

```python
def func_b():
    print("--2--")

def func_a():
    print("---1---")
    func_b()
    print("--3--")

func_a()   # ---1--- / --2-- / --3--
```

### 7. 变量在函数中的作用域

变量作用域指变量的作用范围，分为局部变量和全局变量。

```python
# 局部变量：定义在函数体内部，只在函数体内部生效
def testA():
    num = 100
    print(num)

testA()      # 100
print(num)   # NameError: name 'num' is not defined

# 全局变量：在函数体内、外都能生效，多个函数都要用的数据可存全局变量
num2 = 100

def testa():
    print(num2)

def testb():
    print(num2)

testa()  # 100
testb()  # 100

# global 关键字：在函数内部声明变量为全局变量
def testC():
    global num3     # num3 就是全局变量，函数外也可以使用
    num3 = 100
    print(num3)

testC()      # 100
print(num3)   # 100
```

### 8. 函数综合案例：黑马ATM

```python
money = 5000000
name = input('请输入姓名:')

def query_balance():
    '''查询余额，输出当前余额'''
    print(f'当前银行卡余额为：{money}')

def fund(amount):
    '''存款'''
    global money
    money += amount
    return money

def withdrawal(amount):
    '''取款'''
    global money
    money -= amount
    return money

def main_menu():
    '''主菜单'''
    print(f'{name}，欢迎您来到黑马ATM，请选择：1(查询余额)、2（存款）、3（取款）、4（退出）')

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

---

## 八、函数进阶

### 1. 函数的多种返回值

按照返回值的顺序，写对应顺序的多个变量接收即可，变量之间用逗号隔开，支持不同类型的数据 return。

```python
def test_return():
    return 1, 2, 3

x, y, z = test_return()
print(f'x={x}, y={y}, z={z}')   # x=1, y=2, z=3
```

### 2. 函数多种传参方式

| 参数种类 | 说明 | 注意 |
| --- | --- | --- |
| 位置参数 | 根据函数定义的参数位置来传递参数 | 传递的参数和定义的参数的顺序及个数必须一致 |
| 关键字参数 | 通过“键=值”形式传递参数 | 清除了参数的顺序需求；位置参数必须在关键字参数前面 |
| 缺省参数（默认参数） | 为参数提供默认值，调用时可不传该参数 | 所有位置参数必须出现在默认参数前（定义和调用都是） |
| 不定长参数（可变参数） | 用于不确定调用时会传递多少个参数的场景 | 分位置传递和关键字传递 |

```python
def user_info(name, age, gender):
    print(f'您的名字是{name},年龄是:{age},性别是:{gender}')

# 1. 位置参数
user_info('张三', 22, '男')

# 2. 关键字参数，不必注意顺序（可与位置参数混用）
user_info(name='李四1', gender='男', age=20)
user_info("李四2", age=18, gender="女")

# 3. 缺省参数：调用时不传则用默认值，传了则覆盖
def user_info1(name, age, gender='男'):
    print(f'您的名字是{name},年龄是:{age},性别是:{gender}')

user_info1('赵六1', 22)        # 您的名字是赵六1,年龄是:22,性别是:男
user_info1('赵六2', 21, '女')  # 您的名字是赵六2,年龄是:21,性别是:女

# 4.1 不定长参数之位置传递：所有参数按位置合并为一个元组（tuple）
def user_info2(*args):
    print(args)

user_info2('张三', 18, '女')  # ('张三', 18, '女')
user_info2(1)                # (1,)

# 4.2 不定长参数之关键字传递：所有“键=值”组成字典
def user_info3(**args):
    print(args)

user_info3(name='张三', age=16, gender='男')  # {'name': '张三', 'age': 16, 'gender': '男'}
user_info3(id=111)                            # {'id': 111}
```

### 3. 匿名函数

#### 函数作为参数传递

```python
def add(x, y):
    return x+y

def call1(add, *args):
    result = add(args[0], args[1])
    return result

print(f'1+2={call1(add, 1, 2)}')   # 1+2=3
print(f'6+2={call1(add, 6, 2)}')   # 6+2=8
```

总结：函数本身可以作为参数传入另一个函数中使用，作用在于传入计算逻辑而非传入数据。

#### lambda 匿名函数

有名称的函数，可以基于名称重复使用；无名称（lambda）的匿名函数，只可临时使用一次。

```python
lambda 传入参数: 函数体（一行代码）
```

- lambda 是关键字，表示定义匿名函数
- 传入参数表示匿名函数的形式参数，如 x, y 表示接收 2 个形式参数
- 函数体就是函数的执行逻辑，只能写一行，无法写多行代码

```python
def call(*args):
    result = args[0](args[1], args[2])
    return result

print(f'6+6={call(lambda x,y: x+y, 6, 6)}')   # 6+6=12
```

定义的函数功能完全一致，只是 lambda 关键字定义的函数是匿名的，无法二次使用。

---

## 九、数据容器

数据容器：一种可以容纳多份数据的数据类型，每一份数据称之为 1 个元素，元素可以是任意类型。根据特点（是否支持重复元素、是否可以修改、是否有序等）分为 5 类：列表（list）、元组（tuple）、字符串（str）、集合（set）、字典（dict）。

### 1. list（列表）

#### 定义与下标索引

```python
# 字面量：[元素1, 元素2, 元素3, ...]，以 [] 作为标识，元素之间用逗号隔开
my_list = ['张三', '李四', '王五', '赵六', 666, 1.11, False]

my_list = []        # 定义空列表，方式1
my_list = list()    # 方式2
```

元素的数据类型没有任何限制，元素也可以是列表（嵌套列表）。

```python
my_list = [1, 2, 3, 4, 5]
my_list2 = [my_list, ['a', 'b', 'c', 'd', 'e']]

print(my_list[0])       # 1
print(my_list2[0])      # [1, 2, 3, 4, 5]
print(my_list2[1][2])   # c，嵌套列表：先取下标1，再取其中下标2

print(my_list[-1])      # 5，倒序下标从-1开始递减
print(my_list[1])       # 2，正序下标从0开始递增
```

下标索引注意：超出取值范围无法取出元素，并且会报错。

#### 常用操作方法

列表除了定义、下标取值以外，还提供了插入、删除、清空、修改、统计等功能，称之为列表的方法。

![列表的常用方法](/assets/img/Python基础/列表的常用方法.png)

函数与方法的区别：函数是封装的代码单元；将函数定义为 class（类）的成员，就称之为方法。方法和函数功能一样，只是使用格式不同：函数 `num = add(1,2)`，方法 `num = student.add(1,2)`（对象.方法）。

```python
my_list = ['a', 'b', 'c']

print(my_list.index('a'))    # 0，查找某元素的下标，找不到报错 ValueError

my_list[0] = 'aaa'           # 修改特定位置（索引）的元素值，正向、反向下标均可
my_list.insert(1, 'x')       # 插入元素：在指定的下标位置插入指定的元素

my_list.append([111, 112])   # 追加方式1：append，将元素作为一个整体追加到尾部
my_list.extend([222, 223])   # 追加方式2：extend，将其它数据容器的内容取出依次追加

del my_list[0]               # 删除方式1：del 列表[下标]
print(my_list.pop(0))        # x，删除方式2：pop(下标)，会返回被移除的值
my_list.remove('b')          # 删除方式3：remove(元素)，删除第一个匹配项

my_list.clear()              # 清空列表，得到 []

nums = [1, 'a', True, 1, 1, 1]
print(nums.count(True))      # 5，统计某元素在列表内的数量（True 等于 1）
print(len(nums))             # 6，统计列表中有多少元素
```

注意：`append()` 是将元素作为一个整体追加，`extend()` 是将参数容器拆分后依次追加。

#### 列表的特点

- 可以容纳多个元素（上限为 2**63-1，9223372036854775807 个）
- 可以容纳不同类型的元素（混装）
- 数据是有序存储的（有下标序号）
- 允许重复数据存在
- 可以修改（增加或删除元素等）

#### 循环遍历

将容器内的元素依次取出进行处理的行为，称之为遍历、迭代。

```python
my_list = [1, 2, 3, 'a']

# while 遍历：变量表示下标从0开始，条件为 下标 < 元素数量
index = 0
while index < len(my_list):
    print(f'index:{index}, 值为:{my_list[index]}')
    index += 1
# index:0, 值为:1 / index:1, 值为:2 / index:2, 值为:3 / index:3, 值为:a

# for 遍历：依次取出元素赋值到临时变量
for item in my_list:
    print(f'值为:{item}')   # 值为:1 / 值为:2 / 值为:3 / 值为:a
```

| 对比维度 | while 循环 | for 循环 |
| --- | --- | --- |
| 循环控制 | 可以自定义循环条件，并自行控制 | 不可以自定义循环条件，只能从容器内一个个取出数据 |
| 无限循环 | 可以通过条件控制做到无限循环 | 理论上不可以，被遍历的容器容量不是无限的 |
| 使用场景 | 适用于任何想要循环的场景 | 适用于遍历数据容器的场景，或简单的固定次数循环场景 |

### 2. 元组（tuple）

为什么需要元组？列表是可以修改的，如果想要传递的信息不被篡改，列表就不合适了。元组同列表一样可以封装多个、不同类型的元素，但最大的不同点在于：元组一旦定义完成，就不可修改。

定义元组使用小括号，且使用逗号隔开各个数据，数据可以是不同的数据类型。

```python
tuples1 = ('b', 2)       # 定义元组变量
tuples2 = ()             # 定义空元组，方式1
tuples3 = tuple()        # 方式2

tuples4 = (('a', 1), 2, ('nnnn', 'm'))   # 元组的嵌套
print(f'tuples4 = {tuples4}, type = {type(tuples4)}')
# tuples4 = (('a', 1), 2, ('nnnn', 'm')), type = <class 'tuple'>
```

![元组相关操作](/assets/img/Python基础/元组相关操作.png)

```python
tuples4 = (('a', 1), 2, ('nnnn', 'm'), False, 2)

print(tuples4[0][0])             # a，下标索引取值（支持嵌套）
print(tuples4.index(('a', 1)))   # 0，index查找
print(tuples4.count(2))          # 2，count统计
print(len(tuples4))              # 5，len长度获取

# while 遍历和 for 遍历均支持（while 写法与列表一致：下标 + len 控制）
for item in tuples4:
    print(f"for 遍历,当前value={item}")
```

元组不支持修改内容，但是元组内的列表可以：

```python
tuples5 = (('a', 1), 2, ['nnnn', 'm'], False, 2)
# tuples5[-1] = 3
# TypeError: 'tuple' object does not support item assignment

tuples5[2][0] = 'abc'
tuples5[2][1] = 'ccc'
print(tuples5)   # (('a', 1), 2, ['abc', 'ccc'], False, 2)
```

元组的特点：可以容纳多个数据；可容纳不同类型的数据（混装）；数据有序存储（下标索引）；允许重复数据存在；不可以修改（增加或删除元素等）；支持for循环。多数特性和 list 一致，不同点在于不可修改。

### 3. 字符串（str）作为容器

```python
my_str = "qazxswedc1234567890q"

print(my_str[0])     # q，通过下标索引取值
print(my_str[-1])    # 0
print(my_str.index('q'))   # 0，index方法

# replace：将指定元素替换为其它值并返回，不影响原始字符串
print(my_str.replace('q', 'm'))  # mazxswedc1234567890m
print(my_str)                    # qazxswedc1234567890q

# split：将字符串按指定元素分割为多个字符串，组合为list并返回，不影响原字符串
print(my_str.split('q'))         # ['', 'azxswedc1234567890', '']

# strip：去除首尾空格和tab等符号并返回新字符串，不影响原始字符串
my_str1 = " qazxswedc1234567890q    "
print(my_str1.strip())           # qazxswedc1234567890q

print(my_str.count('q'))         # 2，统计字符串中某字符的出现次数
print(len(my_str))               # 20，统计字符串的长度
```

字符串的特点：只可以存储字符串；长度任意（取决于内存大小）；支持下标索引；允许重复字符串存在；不可以修改（增加或删除元素等）；支持for循环。

### 4. 序列与切片

序列：内容连续、有序，可使用下标索引的一类数据容器。列表、元组、字符串均可以视为序列。

![序列描述](/assets/img/Python基础/序列描述.png)

切片：从一个序列中，取出一个子序列。语法：`序列[起始下标:结束下标:步长]`

- 起始下标可以留空，留空视作从头开始
- 结束下标（不含）可以留空，留空视作截取到结尾
- 步长表示依次取元素的间隔：1 表示一个个取；2 表示每次跳过 1 个元素；N 表示每次跳过 N-1 个；负数表示反向取（起始下标和结束下标也要反向标记）

注意：切片操作不影响序列本身，而是返回一个新的序列。

```python
my_list = [1, 0, 2, 5, 3, 4]
print(f'对list切片，从1开始，4结束，步长1 = {my_list[1: 4]}')   # [0, 2, 5]

my_tuple = ('a', 'c', 'b', 'e')
print(f'对tuple切片，从头开始，到最后结束，步长1 = {my_tuple[:]}')  # ('a', 'c', 'b', 'e')

my_str1 = 'abcdefg1234567890'
print(f'对str切片，从头开始，到最后结束，步长2 = {my_str1[::2]}')   # aceg24680
print(f'str切片，从头开始，到最后结束，步长-1 = {my_str1[:: -1]}, {my_str1[len(my_str1): 0: -1]}')
# 0987654321gfedcba, 0987654321gfedcb

my_list1 = [1, 0, 2, 5, 3, 4]
print(f'对列表切片，从3开始，到1结束，步长-1 = {my_list1[3: 1: -1]}')   # [5, 2]

my_tuple1 = ('a', 'c', 'b', 'e')
print(f'对元组切片，从头开始，到尾结束，步长-2 = {my_tuple1[:: -2]},{my_tuple1[len(my_tuple1): 0: -2]}')
# ('e', 'c'),('e', 'c')
```

### 5. 集合（set）

为什么需要集合？列表可修改、支持重复元素且有序；元组、字符串不可修改、支持重复元素且有序。它们的局限都在于支持重复元素，如果场景需要去重，就不方便了。

集合最主要的特点就是不支持元素的重复（自带去重功能，并且内容无序），所以集合不支持下标索引访问。

```python
my_set1 = {'a', 'z', 1, 2, 3}   # 定义集合变量
my_set3 = set()                 # 定义空集合
```

![集合的操作](/assets/img/Python基础/集合的操作.png)

```python
my_set = {'a', 'b', 1, 2, 3, True, False}
# True 不打印也不计入长度（因为 True=1，set 去重），False 不会去重
print(my_set, len(my_set))      # {False, 1, 2, 3, 'b', 'a'} 6
my_set.add('bb')                # 添加新元素
my_set.remove(2)                # 移除元素
print(my_set.pop())             # 随机取出一个元素（集合将减少一个元素）
my_set.clear()                  # 清空集合，得到 set()

s1 = {'a', 'b', 1, 2, 3, -1}
s2 = {'c', 'b', 2, 3, False, None}
print(len(s1))                  # 6，统计集合元素数量
print(s1.difference(s2))        # {1, 'a', -1}，取差集，以s1为主，不影响原集合
print(s2.difference(s1))        # {False, None, 'c'}，以s2为主
s1.difference_update(s2)        # 消除两个集合的差集，s1 原地变为 {1, 'a', -1}
print(s1.union(s2))             # 2个集合合并为1个 {False, 1, 2, 3, 'a', None, 'c', 'b', -1}

# 集合的遍历（无序）
for item in {'a', 'b', 1, 2, 3, -1}:
    print(item)
```

集合的特点：可以容纳多个数据；可容纳不同类型的数据（混装）；数据是无序存储的（不支持下标索引）；不允许重复数据存在；可以修改（增加或删除元素等）；支持for循环。

### 6. 字典（dict）

字典同样使用大括号，不过存储的元素是一个个的键值对：

```python
my_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}   # 定义字典变量

my_dict1 = {}        # 定义空字典，方式1
my_dict2 = dict()    # 方式2

# 定义重复key的字典，老的会被覆盖
my_dict3 = {'name': '张三', 'age': 18, 'birthday': '0111', 'name': '李四'}
print(my_dict3)      # {'name': '李四', 'age': 18, 'birthday': '0111'}
```

注意事项：

- 键值对的 Key 和 Value 可以是任意类型（Key 不可为字典）
- 字典内 Key 不允许重复，重复添加等同于覆盖原有数据

```python
my_dict = {'name': '张三', 'age': 18, 'birthday': '0111'}

print(my_dict["name"])           # 张三，字典数据的获取

# 嵌套字典，并从嵌套字典中获取数据
my_dict1 = {'password': '123456', 'username': 'admin', 'dict': my_dict}
print(my_dict1["dict"]["name"])  # 张三

my_dict['height'] = 175          # 新增（Key不存在即新增）
my_dict['name'] = '李四'          # 更新元素（Key存在即更新）

del my_dict['name']              # 删除方式1：del
print(my_dict.pop("age"))        # 18，删除方式2：pop，会返回被删除的值
my_dict.clear()                  # 清空元素，得到 {}

d = {'name': '张三', 'age': 18, 'birthday': '0111'}
print(d.keys())                  # dict_keys(['name', 'age', 'birthday'])，获取全部的key

for item in d.items():           # 遍历字典
    print(item)                  # ('name', '张三') / ('age', 18) / ('birthday', '0111')

print(len(d))                    # 3，统计字典内的元素数量
```

字典的特点：可以容纳多个数据；可容纳不同类型的数据；每一份数据是 Key-Value 键值对；可以通过 Key 获取到 Value，Key 不可重复（重复会覆盖）；不支持下标索引；可以修改（增加或删除更新元素等）；支持for循环，不支持while循环。

### 7. 数据容器的总结对比

| 分类视角 | 支持 | 不支持 |
| --- | --- | --- |
| 是否支持下标索引 | 列表、元组、字符串（序列类型） | 集合、字典（非序列类型） |
| 是否支持重复元素 | 列表、元组、字符串（序列类型） | 集合、字典（非序列类型） |
| 是否可以修改 | 列表、集合、字典 | 元组、字符串 |

![数据容器特点对比图](/assets/img/Python基础/数据容器特点对比图.png)

基于各类数据容器的特点，它们的应用场景：

| 容器 | 应用场景 |
| --- | --- |
| 列表 | 一批数据，可修改、可重复的存储场景 |
| 元组 | 一批数据，不可修改、可重复的存储场景 |
| 字符串 | 一串字符串的存储场景 |
| 集合 | 一批数据，去重存储场景 |
| 字典 | 一批数据，可用 Key 检索 Value 的存储场景 |

### 8. 数据容器的通用操作

- 遍历：5 类数据容器都支持 for 循环遍历；列表、元组、字符串支持 while 循环，集合、字典不支持（无法下标索引）

通用统计功能：

![通用统计功能](/assets/img/Python基础/通用统计功能.png)

通用转换功能：

![通用转换功能](/assets/img/Python基础/通用转换功能.png)

---

## 十、文件操作

### 1. 文件编码概念

编码是一种规则集合，记录了内容和二进制间相互转换的逻辑，最常用的是 UTF-8。为什么需要编码？计算机只认识 0 和 1，需要将内容翻译成 0 和 1 才能保存，也需要编码将 0 和 1 反向翻译回可识别的内容。

### 2. 文件的读取操作

在 Python 中使用 open 函数，可以打开一个已经存在的文件，或者创建一个新文件：

```python
open(name, mode, encoding)
```

- name：要打开的目标文件名的字符串（可以包含具体路径）
- mode：设置打开文件的模式（访问模式）：只读、写入、追加等
- encoding：编码格式（推荐使用 UTF-8）

```python
f = open('python.txt', 'r', encoding="UTF-8")
# encoding的顺序不是第三位，所以不能用位置参数，用关键字参数直接指定
```

`f` 是 open 函数的文件对象。对象是 Python 中一种特殊的数据类型，拥有属性和方法，可以使用 `对象.属性` 或 `对象.方法` 访问。更多方法参考 [Python File(文件) 方法 | 菜鸟教程](https://www.runoob.com/python/file-methods.html)。

```python
f = open("python.txt", "r", encoding="utf-8")

print(f.read(10))     # read(num)：读取指定字节数
print(f.read())       # read()：读取所有字节
print(f.readline())   # readline()：读取一行内容
print(f.readlines())  # readlines()：读取所有内容，每行作为元素加入列表并返回

for line in f:        # for 循环读取文件行
    print(f'每一行的数据是:{line}')

f.close()   # 文件的关闭

# with open 语法操作文件（作用域结束后自动关闭）
with open("python.txt", "r", encoding="utf-8") as f:
    print(f'with open\n {f.readlines()}')
```

### 3. 文件的写出操作

写入文件使用 open 函数的 `w` 模式，写入方法有：`write()` 写入内容、`flush()` 刷新内容到硬盘中。

注意事项：

- w 模式，文件不存在，会创建新文件
- w 模式，文件存在，会清空原有内容
- `close()` 方法带有 `flush()` 方法的功能

```python
f = open("test.txt", "w", encoding="utf-8")
f.write('hello world!!!123')   # write 写入
# f.flush()                    # 刷新内存，将内存的内容写入到硬盘中
f.close()                      # 关闭文件，内置了flush()
```

### 4. 文件的追加写入操作

追加写入使用 `a` 模式，写入方法和 w 模式一致。注意：

- a 模式，文件不存在，会创建新文件
- a 模式，文件存在，会在原有内容后面继续写入
- 可以使用 `\n` 来写出换行符

```python
f = open("test_append.txt", "a", encoding="utf-8")
f.write('hello world!!!')
f.write('现在这里是冬天。')
f.close()
```

---

## 十一、异常

### 1. 了解异常

程序运行出错时会抛出异常并终止，例如打开不存在的文件：

```python
with open('./aaa.txt', 'r') as f:
    f.read()
# FileNotFoundError: [Errno 2] No such file or directory: './aaa.txt'
```

### 2. 异常的捕获

基本语法：

```python
try:
    可能发生的异常
except:
    如果出现异常执行的代码
```

需求：尝试以 r 模式打开文件，如果文件不存在，则以 w 方式打开。

```python
try:
    f = open('te1.txt', 'r')
except:
    f = open('te1.txt', 'w')
```

捕获指定的异常 / 捕获所有的异常：

```python
# 捕获指定的异常
try:
    print(aaa)
except NameError as e:
    print('变量未定义,', e)

# 捕获所有的异常
try:
   a = 1/0
except Exception as e:
    print(f'出现了异常,内容是:{e}')
```

### 3. 异常的传递性

异常会沿着函数调用链向上传递，最终在最外层被抛出：

```python
def fun1():
    a = 1/0
    return a

def fun2():
    fun1()

def main():
    fun2()

main()
# Traceback（从 main -> fun2 -> fun1 逐层显示调用栈）
# ZeroDivisionError: division by zero
```

---

## 十二、模块与包

### 1. 什么是模块

Python 模块（Module）是一个 Python 文件，以 .py 结尾，能定义函数、类和变量，也能包含可执行的代码。

大白话：模块就是一个 Python 文件，里面有类、函数、变量等，可以拿过来用（导入模块去使用）。每个模块都可以帮助我们快速实现一些功能，比如和时间相关的功能用 time 模块。

### 2. 模块的导入方式

```python
[from 模块名] import [模块 | 类 | 变量 | 函数 | *] [as 别名]
```

常用的组合形式：

```python
import time                     # 方式1：import 模块名
time.sleep(5)

from time import sleep          # 方式2：from 模块名 import 功能名
sleep(5)

from time import *              # 方式3：导入全部功能
sleep(5)

import time as t                # 方式4：给模块起别名
t.sleep(5)

from time import sleep as sl    # 方式5：给功能起别名
sl(5)
```

注意：from 可以省略直接 import；as 别名可以省略；通过 `.` 来确定层级关系；模块的导入一般写在代码文件的开头位置。

### 3. 自定义模块

![自定义模块用例图片](/assets/img/Python基础/自定义模块用例图片.png)

```python
"""
自定义模块 my_module.py
"""
__all__ = ['abc']    # __all__ 变量：控制 from my_module import * 能导入的内容

def start():
    print('我是自定义模块!')

def abc():
    print('abc')

# __main__ 变量：包住的代码只在直接运行该文件时执行，被导入时不执行，常用于测试
if __name__ == '__main__':
    start()
```

```python
"""
调用方（单独的文件）
"""
from my_module import start

start()   # 我是自定义模块!

# 注意：同名 import 的方法名会被覆盖
# from my_module import * 时只可以使用 __all__=['abc'] 里的方法
```

### 4. 自定义包

从物理上看，包就是一个文件夹，文件夹下包含一个 `__init__.py` 文件，可用于包含多个模块文件；从逻辑上看，包的本质依然是模块。

![python包图](/assets/img/Python基础/python包图.png)

实际层级关系如下：

![python自定义包的层级关系](/assets/img/Python基础/python自定义包的层级关系.png)

步骤：

1. 创建包，并且包里需要有文件名为 `__init__.py` 的文件（带有两个下划线）
2. 写包里待导出的函数代码
3. 导入包并使用

```python
# my_package/my_module1.py
def test():
    print('我是模块1的打印')

# my_package/my_module2.py 同理（test 打印“我是模块2的打印”）

# 使用方
import my_package.my_module1
import my_package.my_module2

my_package.my_module1.test()
my_package.my_module2.test()
```

注意：可以在 `__init__.py` 中设置 `__all__` 变量。

### 5. 安装第三方包

一个包就是一堆同类型功能的集合体。Python 生态中有许多第三方包（非官方），可以极大提高开发效率：

- 科学计算常用：numpy
- 数据分析常用：pandas
- 大数据计算常用：pyspark、apache-flink
- 图形可视化常用：matplotlib、pyecharts
- 人工智能常用：tensorflow

这些第三方包都需要安装（Python 没有内置），使用 Python 内置的 pip 程序，在命令提示符中输入：

```shell
pip install 包名称
```

pip 连接的是国外的网站，有时速度很慢，可以让其连接国内网站安装。[https://pypi.tuna.tsinghua.edu.cn/simple](https://pypi.tuna.tsinghua.edu.cn/simple) 是清华大学提供的网站，可供 pip 下载第三方包：

```shell
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名称
```

---

## 十三、JSON 与 pyecharts

### 1. json 数据格式

Python 数据和 json 数据的相互转化：

```python
import json

# 准备符合json格式要求的python数据
data = [{"name":"老王", "age":16},{"name":"张三", "age":20}]

# 通过json.dumps(data)方法把python数据转化为json数据
data = json.dumps(data, ensure_ascii=False)   # ensure_ascii=False 展示中文
print(data)          # [{"name": "老王", "age": 16}, {"name": "张三", "age": 20}]
print(type(data))    # <class 'str'>

# 通过json.loads(data)方法把json数据转化为python数据
data = json.loads(data)
print(data)          # [{'name': '老王', 'age': 16}, {'name': '张三', 'age': 20}]
print(type(data))    # <class 'list'>
```

### 2. pyecharts

官网地址：[https://pyecharts.org](https://pyecharts.org)

想要做出数据可视化效果图，可以借助 pyecharts 模块。ECharts 是由百度开源的数据可视化库，交互性好、图表设计精巧，与富于表达力、适合数据处理的 Python 结合，便有了 pyecharts。

```shell
pip install pyecharts
```

#### 基础折线图

```python
from pyecharts.charts import Line

line = Line()                           # 得到折线图对象
line.add_xaxis(['中国', '美国', '英国'])  # 添加x轴数据
line.add_yaxis('GDP', [30, 20, 10])     # 添加y轴数据
line.add_yaxis('人口', [20000, 1000, 200])
line.render()                           # 生成图表
```

#### 基础柱状图

```python
from pyecharts.charts import Bar
from pyecharts.options import LabelOpts

bar = Bar()
bar.add_xaxis(["中国", "美国", "英国"])
bar.add_yaxis(
    "GDP",
    [30, 20, 10],
    label_opts=LabelOpts(position='right')   # 将数值标签放到右侧
)
bar.reversal_axis()           # 反转x、y轴
bar.render("基础柱状图.html")  # 绘图
```

#### 全局配置选项

pyecharts 常用到 2 个类别的配置选项：全局配置选项和系列配置选项。全局配置选项通过 `set_global_opts` 方法配置，[官方文档](https://pyecharts.org/#/zh-cn/global_options)：

![set_global_opts方法实现案例图片](/assets/img/Python基础/set_global_opts方法实现案例图片.png)

```python
from pyecharts.charts import Line
from pyecharts.options import TitleOpts, LegendOpts, ToolboxOpts, VisualMapOpts

line = Line()
line.add_xaxis(['中国', '美国', '英国'])
line.add_yaxis('GDP', [30, 20, 10])

line.set_global_opts(
    title_opts=TitleOpts(                    # 标题
        title="GDP展示折线图",
        pos_left="center",
        pos_bottom="1%"
    ),
    legend_opts=LegendOpts(is_show=True),    # 图例
    toolbox_opts=ToolboxOpts(is_show=True),  # 工具箱
    visualmap_opts=VisualMapOpts()           # 视觉
)

line.render()   # 生成图表
```

---

## 十四、面向对象

### 1. 使用对象组织数据

在程序中可以像生活中那样，设计表格、生产表格、填写表格：

1. 设计表格，称之为：设计类（class）
2. 生产表格，称之为：创建对象
3. 填写表格，称之为：对象属性赋值

```python
class Student:
    name = None   # 记录学生姓名（设计类）

stu_1 = Student()   # 创建对象
stu_2 = Student()

stu_1.name = "周杰伦"   # 对象属性赋值
stu_2.name = "林俊杰"
```

### 2. 类的定义和使用

```python
# class是关键字，表示要定义类了
class 类名称:
    类的属性    # 即定义在类中的变量（成员变量）
    类的行为    # 即定义在类中的函数（成员方法）

# 创建类对象
对象 = 类名称()
```

```python
class Student:
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None

    def say_hi(self):
        print(f'我是来自{self.nationality}{self.native_place}的练习生，我叫{self.name},今年{self.age}岁了。')

student = Student()          # 创建一个对象
student.name = '张三'         # 对象属性进行赋值
student.gender = '男'
student.nationality = '中国'
student.native_place = '浙江省'
student.age = 29

print(student.name)          # 张三
student.say_hi()
```

类中不仅可以定义属性用来记录数据，也可以定义函数用来记录行为：类中定义的属性（变量）称之为成员变量，类中定义的行为（函数）称之为成员方法。

#### 成员方法的定义语法

在类中定义成员方法和定义函数基本一致，但参数列表中有一个必须填写的 self 关键字：

```python
def 方法名(self, 形参1, ......, 形参N):
    方法体
```

- self 用来表示类对象自身
- 使用类对象调用方法时，self 会自动被 Python 传入
- 在方法内部，想要访问类的成员变量，必须使用 self

### 3. 类和对象

![现实世界的事物和类图](/assets/img/Python基础/现实世界的事物和类图.png)

为什么非要创建对象才能使用？类只是一种程序内的“设计图纸”，需要基于图纸生产实体（对象）才能正常工作，这种套路称之为：面向对象编程。

![通过程序来描述闹钟对象图](/assets/img/Python基础/通过程序来描述闹钟对象图.png)

![基于闹钟类创建对象图](/assets/img/Python基础/基于闹钟类创建对象图.png)

代码实现（闹钟类）：

```python
class Clock:
    id = None       # id
    price = None    # 零售价

    def ring(self):
        import winsound
        winsound.Beep(2000, 2500)

clock1 = Clock()      # 基于类创建对象
clock1.id = "1000001"
clock1.price = 50
print(f'闹钟ID是{clock1.id},价格是:{clock1.price}')
clock1.ring()         # 调用成员方法（电脑会发出蜂鸣声）
```

### 4. 构造方法

Python 类可以使用 `__init__` 方法，称之为构造方法：

- 在创建类对象（构造类）的时候，会自动执行
- 创建类对象时，传入参数会自动传递给 `__init__` 方法使用

```python
class Student:
    # 定义了 __init__ 后，类属性定义可以省略

    def __init__(self, name, gender, age, nationality, native_place) -> None:
        self.name = name
        self.gender = gender
        self.age = age
        self.nationality = nationality
        self.native_place = native_place

    def say_hi(self):
        print(f'我是来自{self.nationality}{self.native_place}的练习生，我叫{self.name},今年{self.age}岁了。')

stu1 = Student('张三', '男', 27, '中国', native_place='浙江省')
stu1.say_hi()
```

### 5. 其他内置方法（魔术方法）

`__init__` 构造方法是 Python 类内置的方法之一，这些各有特殊功能的内置方法称之为魔术方法。

![其他常用得内置方法图](/assets/img/Python基础/其他常用得内置方法图.png)

![常见魔术方法图](/assets/img/Python基础/常见魔术方法图.png)

#### __str__ 字符串方法

![不使用__str__方法图](/assets/img/Python基础/不使用__str__方法图.png)

![使用__str__方法图](/assets/img/Python基础/使用__str__方法图.png)

#### __lt__ 小于符号比较

![未使用lt小于符号比较图](/assets/img/Python基础/未使用lt小于符号比较图.png)

![使用lt小于符号比较图](/assets/img/Python基础/使用lt小于符号比较图.png)

#### __le__ 小于等于比较

![lt小于等于方法比较图](/assets/img/Python基础/lt小于等于方法比较图.png)

#### __eq__ 比较运算符

![__eq比较运算符__](/assets/img/Python基础/__eq比较运算符__.png)

不实现 `__eq__` 方法，对象之间可以比较，但比较的是内存地址，也就是不同对象 `==` 比较一定是 False 结果；实现了 `__eq__` 方法，就可以按照自己的想法决定 2 个对象是否相等。

四个常用魔术方法合并示例（按 age 比较）：

```python
class Stu:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    def __str__(self) -> str:
        return f'Stu类对象,name={self.name},age={self.age}'

    def __lt__(self, other):
        return self.age < other.age

    def __le__(self, other):
        return self.age <= other.age

    def __eq__(self, other):
        return self.age == other.age

stu1 = Stu('张三', 26)
print(stu1)               # Stu类对象,name=张三,age=26（不定义__str__时打印的是内存地址）

stu2 = Stu('张四', 27)
stu3 = Stu('张五', 26)
print(stu1 < stu2)        # False（__lt__：26 < 27）
print(stu1 <= stu3)       # True（__le__：26 <= 26）
print(stu1 >= stu2)       # False
print(stu1 == stu3)       # True（__eq__：按age比较）
print(stu1 == stu2)       # False
```

### 6. 面向对象的三大特性

面向对象编程是许多编程语言都支持的编程思想：基于模板（类）去创建实体（对象），使用对象完成功能开发。包含 3 大主要特性：封装、继承、多态。

#### 封装

封装表示将现实世界事物的属性和行为，封装到类中，描述为成员变量和成员方法，从而完成程序对现实世界事物的描述。

私有成员：现实事物有不公开的属性和行为，类中也提供了私有成员的形式来支持：

- 私有成员变量：变量名以 `__` 开头（2 个下划线）
- 私有成员方法：方法名以 `__` 开头（2 个下划线）

```python
class Phone:
    IMEI = None            # 序列号
    company = None         # 厂商
    __current_voltage = 0.5   # 当前电压 私有变量

    def call_by_5g(self):
        if self.__current_voltage >= 1:
            print('5g通话已开启')
        else:
            self.__keep_single_core()
            print('电量不足，不可以进行5g通话，且已开启CPU单核运行省电。')

    def __keep_single_core(self):
        print('让CPU以单核模式运行以节省电量')

phone = Phone()
phone.IMEI = '1001'
phone.company = 'x米'
phone.call_by_5g()
# 让CPU以单核模式运行以节省电量
# 电量不足，不可以进行5g通话，且已开启CPU单核运行省电。

# 类的外部无法访问私有成员，会报错：
# print(phone.__current_voltage)
# AttributeError: 'Phone' object has no attribute '__current_voltage'
# phone.__keep_single_core()
# AttributeError: 'Phone' object has no attribute '__keep_single_core'
```

私有成员的意义：类内部可以正常使用，外部无法直接访问，保证类内部数据的安全。

#### 继承

继承表示：将从父类那里继承（复制）来成员变量和成员方法（不含私有）。继承分为：单继承和多继承。

单继承：

![单继承实现图](/assets/img/Python基础/单继承实现图.png)

```python
class 类名(父类名):
    类内容体
```

```python
# Phone 类沿用上面封装一节的定义
class Phone_2023(Phone):
    face_recognize = True   # 脸部识别

    def call_by_5g_new(self):
        self.call_by_5g()
        print('新呼叫模式')

phone_new = Phone_2023()
phone_new.call_by_5g_new()
print(phone_new.company)
```

多继承：

![多继承图](/assets/img/Python基础/多继承图.png)

```python
class Phone:
    company = '小米'          # 厂商

    def call_by_4g(self):
        print('4g呼叫模式')

class Phone_2023(Phone):
    face_recognize = True     # 脸部识别

    def call_by_5g(self):
        print('5g呼叫模式')

class NFCReader:
    company = 'x米'           # 与Phone重名，用于演示多继承同名属性
    nfc_type = '第五代'

    def read_card(self):
        print('读取NFC卡')

    def write_card(self):
        print('写入NFC卡')

class Remote_control:
    rc_type = '红外遥控'

    def controller(self):
        print('红外遥控器开启')

# 多继承
class Phone_new(Phone_2023, NFCReader, Remote_control):

    def msg(self):
        print('我是具备4g呼叫、5g呼叫和NFC与红外遥控功能的手机。')

phone_new = Phone_new()
phone_new.msg()           # 我是具备4g呼叫、5g呼叫和NFC与红外遥控功能的手机。
phone_new.call_by_4g()    # 4g呼叫模式
phone_new.call_by_5g()    # 5g呼叫模式
phone_new.controller()    # 红外遥控器开启
# 多个父类有相同属性时，先继承的优先（不会被后面的覆盖）
print(phone_new.company)  # 小米
```

复写：子类继承父类的成员属性和成员方法后，如果对其“不满意”，可以进行复写，即在子类中重新定义同名的属性或方法即可。

![复写示例图](/assets/img/Python基础/复写示例图.png)

调用父类同名成员：一旦复写父类成员，类对象调用成员时就会调用复写后的新成员。如果需要使用被复写的父类成员，需要特殊的调用方式：

| 方式 | 成员变量 | 成员方法 |
| --- | --- | --- |
| 使用父类名调用 | `父类名.成员变量` | `父类名.成员方法(self)` |
| 使用 super() 调用 | `super().成员变量` | `super().成员方法()` |

```python
class Phone:
    type = '手机'
    IMEI = '10001'      # 序列号
    company = '小米'    # 厂商
    version = 1.0

    def get_version(self):
        return self.version

class XMPhone(Phone):

    def print_info(self):
        print(f'我是{self.company}{super().type},序列号是{Phone.IMEI},版本号是{Phone.get_version(self)}')

    def print_version(self):
        print(f'手机版本号是{super().get_version()}')

xmPhone = XMPhone()
xmPhone.print_info()      # 我是小米手机,序列号是10001,版本号是1.0
xmPhone.print_version()   # 手机版本号是1.0
```

#### 多态

多态：多种状态，即完成某个行为时，使用不同的对象会得到不同的状态。

```python
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

cat = Cat()
dog = Dog()
make_noise(cat)   # 喵喵喵
make_noise(dog)   # 汪汪汪
```

### 7. 类型注解

#### 为什么需要类型注解

![类型注解提示图](/assets/img/Python基础/类型注解提示图.png)

Python 在 3.5 版本引入了类型注解，以方便静态类型检查工具、IDE 等第三方工具。类型注解：在代码中涉及数据交互的地方，提供数据类型的注解（显式的说明）。主要功能：

- 帮助第三方 IDE 工具（如 PyCharm）对代码进行类型推断，协助做代码提示
- 帮助开发者自身对变量进行类型注释

支持：变量的类型注解、函数（方法）形参列表和返回值的类型注解。

#### 变量的类型注解

基础语法：`变量: 类型`

```python
import json

var_1: int = 10            # 变量类型注解
var_2: float = 3.1415926
var_3: bool = True
var_4: str = "itheima"

class Stu:
    pass

stu: Stu = Stu()           # 类对象类型注解

my_list: list = [1, 2, 3]  # 基础容器类型注解
my_dict: dict = {"itheima": 666}

my_list: list[int] = [1, 2, 3]                      # 容器类型详细注解
my_tuple: tuple[str, int, bool] = ("itheima", 666, True)
my_dict: dict[str, int] = {"itheima": 666}

def fun1():
    return 3

var_11 = 123            # type: int（在注释中进行类型注解）
var_22 = json.loads('{"name": 28}')   # type: dict
var_33 = fun1()         # type: int
```

注意：

- 元组类型设置详细注解，需要将每一个元素都标记出来
- 字典类型设置详细注解，需要 2 个类型，第一个是 key 第二个是 value
- 类型注解是提示性的、不是决定性的，并不会真正对类型做验证和判断（下面这样写不会报错）：

```python
var_1: int = "itheima"
var_2: str = 123
```

#### 函数和方法的类型注解

形参注解：

```python
def sum(a: int, b: int):
    return a+b   # type: int
```

![形参效果图](/assets/img/Python基础/形参效果图.png)

返回值注解（用 `-> 类型`）：

```python
def add(a: int, b: int) -> int:
    return a+b
```

![返回值注解2图](/assets/img/Python基础/返回值注解2图.png)

#### Union 联合注解

当变量或参数可能是多种类型之一时，使用 Union。

变量使用 Union：

![需要使用Union的场景图](/assets/img/Python基础/需要使用Union的场景图.png)

![使用Union后的场景图](/assets/img/Python基础/使用Union后的场景图.png)

函数使用 Union：

![函数使用Union](/assets/img/Python基础/函数使用Union.png)

![函数使用Union效果图](/assets/img/Python基础/函数使用Union效果图.png)

```python
from typing import Union

my_list: list[Union[int, str]] = [1, 2, 'aaa']

def func(data: Union[int, str]) -> Union[int, str]:
    return data

print(my_list, func(1), func('aaa'))   # [1, 2, 'aaa'] 1 aaa
```

---

## 十五、数据库操作：pymysql

除了图形化工具，也可以使用编程语言执行 SQL 操作数据库。Python 中使用第三方库 pymysql 操作 MySQL。

```shell
pip install pymysql
```

### 1. 创建到 MySQL 的数据库连接

```python
from pymysql import Connection

conn = Connection(
    host='127.0.0.1',   # 主机名（或IP地址）
    port=3306,          # 端口，默认3306
    user='root',        # 账户名
    passwd='password'   # 密码
)

print(conn.get_server_info())   # 打印MySQL数据库软件信息

cursor = conn.cursor()          # 获取游标对象
conn.select_db('py_test01')     # 先选择数据库
# 执行非查询性质sql：
# cursor.execute('CREATE TABLE test_pymysql(id INT, info VARCHAR(255))')

cursor.execute('select * from test_pymysql')   # 执行查询性质的sql
results: tuple = cursor.fetchall()             # 获取查询结果
print(results)

conn.close()   # 关闭到数据库的连接
```

### 2. commit 提交

手动提交：执行插入等写操作后，必须 commit，不进行这步数据无法插入。

```python
cursor.execute('insert into test_pymysql values(2, "bb")')
conn.commit()
conn.close()
```

自动提交：在创建连接时设置 `autocommit=True`，即可省去手动 commit。

```python
conn = Connection(
    host='127.0.0.1',
    port=3306,
    user='root',
    passwd='mysql8.0',
    autocommit=True   # 设置自动提交
)
```

---

## 十六、Python 进阶：闭包与装饰器

### 1. 闭包

> 非闭包的错误使用方式：

![非闭包的错误使用方式图](/assets/img/Python基础/非闭包的错误使用方式图.png)

> 转换为闭包形式：

![转换闭包形式的代码图](/assets/img/Python基础/转换闭包形式的代码图.png)

简单闭包：

```python
def outer(logo):
    def inner(msg):
        print(f'<{logo}>{msg}<{logo}>')
    return inner

fn1 = outer('张三')
fn1('121')   # <张三>121<张三>
fn1('abc')   # <张三>abc<张三>

fn2 = outer('121')
fn2('加油')  # <121>加油<121>
```

修改外部函数变量的值：需要使用 nonlocal 关键字修饰外部函数的变量，才可在内部函数中修改它。

```python
def outher(num1):
    def inner(num2):
        nonlocal num1
        num1 += num2
        print(num1)

    return inner

fn1 = outher(10)
fn1(10)   # 20
fn1(20)   # 40
```

闭包实现 ATM 小案例：

```python
def account_update(init_amount = 0):
    def atm(num: int, deposit: bool = True):
        nonlocal init_amount
        if deposit:
            init_amount += num
            print(f'存款:+{num},账户余额:{init_amount}')
        else:
            init_amount -= num
            print(f'取款:-{num},账户余额:{init_amount}')

    return atm

fn = account_update()
fn(100)        # 存款:+100,账户余额:100
fn(50, False)  # 取款:-50,账户余额:50
```

### 2. 闭包总结

1. 什么是闭包？定义双层嵌套函数，内层函数可以访问外层函数的变量；将内层函数作为外层函数的返回，此内层函数就是闭包函数。
2. 优点：无需定义全局变量即可让函数持续访问、修改某个值；闭包引用的变量作用域封闭在函数内，难以被误操作修改。
3. 缺点：内部函数持续引用外部函数的值，这部分内存空间不会被释放，一直占用内存。
4. nonlocal 关键字的作用：在闭包函数（内部函数）中想要修改外部函数的变量值，需要用 nonlocal 声明这个外部变量。

### 3. 装饰器

装饰器其实也是一种闭包，其功能是在不破坏目标函数原有的代码和功能的前提下，为目标函数增加新功能。

假设有如下函数，希望调用 sleep 前输出“我要睡觉了”、调用后输出“睡醒了”：

```python
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

# 写法1：闭包写法
fn = outer(sleep)
fn()   # 我要睡觉了 / 睡眠中... / 睡醒了

# 写法2：语法糖写法（效果等价，更常用）
@outer
def sleep2():
    print('睡眠中...')

sleep2()   # 我要睡觉了 / 睡眠中... / 睡醒了
```

---

## 十七、设计模式：单例与工厂

设计模式是一种编程套路，可以极大的方便程序的开发，最常见、最经典的就是面向对象。此外还有单例、工厂，以及建造者、责任链、状态、备忘录、解释器、访问者、观察者、中介、模板、代理等模式。

### 1. 单例模式

为什么需要单例模式？

![为什么需要单例模式图？](/assets/img/Python基础/为什么需要单例模式图？.png)

单例模式（Singleton Pattern）是一种常用的软件设计模式，主要目的是确保某一个类只有一个实例存在。

- 定义：保证一个类只有一个实例，并提供一个访问它的全局访问点
- 适用场景：当一个类只能有一个实例，而客户可以从一个众所周知的访问点访问它时

实现方式：

![单例模式的实现图](/assets/img/Python基础/单例模式的实现图.png)

```python
"""
test1.py
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

print(t1 == t2)   # True，两个变量指向同一个对象（内存地址相同）
print(t1)         # <test1.StrTools object at 0x000002986C311CD0>
print(t2)         # <test1.StrTools object at 0x000002986C311CD0>
```

### 2. 工厂模式

当需要大量创建一个类的实例的时候，可以使用工厂模式：从原生的使用类的构造去创建对象，迁移到基于工厂提供的方法去创建对象。

![转变为工厂模式](/assets/img/Python基础/转变为工厂模式.png)

```python
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
            return XMCar()
        else:
            print(f'{car_type}车子并没有Class')
            return None

car_factory = CarFactory()
car = car_factory.get_car('华为')
print(type(car))   # <class '__main__.HWCar'>
```

使用工厂类的 get_car() 方法去创建具体的类对象。优点：

- 大批量创建对象的时候有统一的入口，易于代码维护
- 当发生修改，仅修改工厂类的创建方法即可
- 符合现实世界的模式，即由工厂来制作产品（对象）

---

## 十八、多线程

### 1. 进程、线程

- 进程：一个程序运行在系统之上，就称之为一个运行进程，并分配进程 ID 方便系统管理
- 线程：归属于进程，一个进程可以开启多个线程执行不同的工作，是进程的实际工作最小单位

![任务管理器图](/assets/img/Python基础/任务管理器图.png)

进程就好比一家公司，是操作系统对程序进行运行管理的单位；线程就好比公司的员工，是进程实际的工作者。操作系统中可以运行多个进程，即多任务运行；一个进程内可以运行多个线程，即多线程运行。

![进程、线程注意点图](/assets/img/Python基础/进程、线程注意点图.png)

并行执行：同一时间做不同的工作。进程之间就是并行执行的；线程也是可以并行执行的，比如一个 Python 程序可以一个线程在输出“你好”、一个线程在输出"Hello"。一个程序在同一时间做两件乃至多件不同的事情，就称之为多线程并行执行。

### 2. 多线程编程

绝大多数编程语言都允许多线程编程，Python 的多线程可以通过 threading 模块来实现。

```python
import threading

"""
group=None,    暂时无用，未来功能的预留参数
target=None,   执行的目标任务名
name=None,     线程名，一般不用设置
args=(),       以元组的方式给执行任务传参
kwargs=None,   以字典方式给执行任务传参
"""
thread_obj = threading.Thread()
thread_obj.start()   # 启动线程，让线程工作
```

```python
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

# 创建线程（注意：元组必须得带有逗号）
sing_thread = Thread(target=sing, args=('张三', ))
dance_thread = Thread(target=dance, kwargs={'name': '李四'})

# 启动线程
sing_thread.start()
dance_thread.start()
# 运行后两个任务会交替持续输出（唱歌和跳舞同时进行）
```

---

## 十九、网络编程：Socket

### 1. socket 是什么

socket（简称套接字）是进程之间通信的一个工具，好比现实生活中的插座：家用电器要想工作都基于插座，进程之间想要进行网络通信需要 socket。socket 负责进程之间的网络数据传输，好比数据的搬运工。

2 个进程之间通过 socket 相互通讯，必须有服务端和客户端：

- Socket 服务端：等待其它进程的连接、可接受发来的消息、可以回复消息
- Socket 客户端：主动连接服务端、可以发送消息、可以接收回复

![socket的客户端和服务端模拟图](/assets/img/Python基础/socket的客户端和服务端模拟图.png)

### 2. Socket 服务端开发

```python
import socket

# 1. 创建socket对象
socket_server = socket.socket()

# 2. 绑定socket_server到指定的IP和端口
socket_server.bind(('127.0.0.1', 8000))

# 3. 服务端开始监听端口
# backlog为int整数，表示允许的连接数量，超出的会等待，可以不填，不填会自动设置一个合理值
socket_server.listen(1)

# 4. 接收客户端连接，获得连接对象
# accept是阻塞方法，没有连接时会卡在这一行；返回二元元组，可用两个变量接收
conn, address = socket_server.accept()
print(f'接收到客户端连接，连接来自:{address}')

# 接收客户端信息要用本次的连接对象（而非socket_server）
# recv参数是缓冲区大小，一般给1024；返回bytes对象，需decode转字符串
data: str = conn.recv(1024).decode('utf-8')
print(f'接收到客户端发送的消息：{data}')

# 发送回复信息（encode可以将字符串编码为字节数组对象）
msg = input('请输入您要回复的消息：')
conn.send(msg.encode('utf-8'))

# 关闭连接
conn.close()
socket_server.close()
```

### 3. Socket 客户端开发

```python
import socket

socket_client = socket.socket()              # 1. 创建socket对象
socket_client.connect(('127.0.0.1', 8000))   # 2. 连接到服务端

# 3. 发送消息
while True:
    send_msg = input('请输入要发送的消息：')
    if send_msg == 'exit':
        break
    socket_client.send(send_msg.encode('utf-8'))

    # 4. 接收服务器返回的消息
    recv_data = socket_client.recv(1024)
    print(f'服务器返回的消息:{recv_data.decode("utf-8")}')

socket_client.close()   # 5. 关闭连接
```

---

## 二十、正则表达式

正则表达式（Regular Expression）是使用单个字符串来描述、匹配某个句法规则的字符串，常被用来检索、替换那些符合某个模式（规则）的文本。

简单来说：用字符串定义规则，并通过规则去验证字符串是否匹配。比如验证一个字符串是否是符合条件的电子邮箱地址，配置好正则规则即可匹配任意邮箱；不用正则、用 if else 判断就非常困难。

### 1. 三个基础方法

Python 正则表达式使用 re 模块，基于三个基础方法做正则匹配：match、search、findall。

```python
import re

# match：从被匹配字符串开头进行匹配，
# 匹配成功（只匹配第一个命中项）返回匹配对象（包含匹配的信息），匹配不成功返回None
result_match_1 = re.match('python', 'python 1111 python 12321')
print(result_match_1)          # <re.Match object; span=(0, 6), match='python'>
print(result_match_1.span())   # (0, 6)
print(result_match_1.group())  # python

# 无法匹配到的示例（开头不是python）
print(re.match('python', '1python 1111 python 12321'))   # None

# search：搜索匹配（只匹配第一个命中项）
result_search_1 = re.search('python', '1python 1111 python 12321')
print(result_search_1)          # <re.Match object; span=(1, 7), match='python'>
print(result_search_1.span())   # (1, 7)
print(result_search_1.group())  # python

# findall：搜索全部（匹配所有命中项）
print(re.findall('python', '1python 1111 python 12321'))
# ['python', 'python']
```

### 2. 元字符匹配

单字符匹配：

| 字符 | 功能 |
| --- | --- |
| . | 匹配任意 1 个字符（除了\n），\. 匹配点本身 |
| [ ] | 匹配 [ ] 中列举的字符 |
| \d | 匹配数字，即 0-9 |
| \D | 匹配非数字 |
| \s | 匹配空白，即空格、tab 键 |
| \S | 匹配非空白 |
| \w | 匹配单词字符，即 a-z、A-Z、0-9、_ |
| \W | 匹配非单词字符 |

数量匹配：

| 字符 | 功能 |
| --- | --- |
| * | 匹配前一个规则的字符出现 0 至无数次 |
| + | 匹配前一个规则的字符出现 1 至无数次 |
| ? | 匹配前一个规则的字符出现 0 次或 1 次 |
| {m} | 匹配前一个规则的字符出现 m 次 |
| {m,} | 匹配前一个规则的字符出现最少 m 次 |
| {m, n} | 匹配前一个规则的字符出现 m 到 n 次 |

注意：`{m,n}` 中不能有空格！

边界匹配：

| 字符 | 功能 |
| --- | --- |
| ^ | 匹配字符串开头 |
| $ | 匹配字符串结尾 |
| \b | 匹配一个单词的边界 |
| \B | 匹配非单词边界 |

其他：

| 字符 | 功能 |
| --- | --- |
| \| | 匹配左右任意一个表达式 |
| () | 将括号中字符作为一个分组 |

---

## 二十一、一页总结

### 核心认知

- Python 6 种常用类型：数字、字符串、列表、元组、集合、字典
- 字符串格式化：`%s/%d/%f` 可控精度，`f"{变量}"` 快速优雅
- `input()` 的结果是字符串，需要数字要做类型转换
- 判断、循环靠缩进组织代码块；for 用于遍历序列，while 可自定义条件
- 函数：4 种传参（位置、关键字、缺省、不定长），`lambda` 只能写一行
- 数据容器选型：可修改可重复用 list，不可修改用 tuple，去重用 set，Key 检索用 dict
- 面向对象三大特性：封装（私有成员 `__`）、继承（复写 + super()）、多态
- 类型注解只是提示，不做强制校验
- 装饰器基于闭包：不破坏原函数的前提下增加功能，语法糖 `@装饰器`
- pymysql 写库后记得 commit（或 `autocommit=True`）

### 下一步建议

继续学习时，可以顺着这条路线往下：

1. SQL 入门与实战（原文对应章节）
2. PySpark 大数据计算
3. 常用第三方库深入：numpy、pandas、matplotlib
4. 异常处理的更多用法、面向对象进阶
