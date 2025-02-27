import{_ as p,V as i,W as o,Y as n,X as s,$ as e,a0 as a,C as l}from"./framework-a71e09ed.js";const c="/assets/img/Python基础/变量的定义格式.png",u="/assets/img/Python基础/变量有类型嘛？.png",r="/assets/img/Python基础/算术运算符.png",d="/assets/img/Python基础/赋值运算符.png",k="/assets/img/Python基础/复合赋值运算符.png",v="/assets/img/Python基础/字符串比较图.png",m="/assets/img/Python基础/嵌套判断图.png",b="/assets/img/Python基础/循环语句前言.png",g="/assets/img/Python基础/vscode显示注释内容.png",h="/assets/img/Python基础/列表的常用方法.png",y="/assets/img/Python基础/元组相关操作.png",_="/assets/img/Python基础/序列描述.png",f="/assets/img/Python基础/集合的操作.png",q="/assets/img/Python基础/数据容器特点对比图.png",w="/assets/img/Python基础/通用统计功能.png",x="/assets/img/Python基础/通用转换功能.png",P="/assets/img/Python基础/自定义模块用例图片.png",N="/assets/img/Python基础/python包图.png",D="/assets/img/Python基础/python自定义包的层级关系.png",T="/assets/img/Python基础/set_global_opts方法实现案例图片.png",I="/assets/img/Python基础/现实世界的事物和类图.png",O="/assets/img/Python基础/通过程序来描述闹钟对象图.png",E="/assets/img/Python基础/基于闹钟类创建对象图.png",C="/assets/img/Python基础/其他常用得内置方法图.png",S="/assets/img/Python基础/常见魔术方法图.png",z="/assets/img/Python基础/不使用__str__方法图.png",F="/assets/img/Python基础/使用__str__方法图.png",j="/assets/img/Python基础/未使用lt小于符号比较图.png",A="/assets/img/Python基础/使用lt小于符号比较图.png",R="/assets/img/Python基础/lt小于等于方法比较图.png",H="/assets/img/Python基础/__eq比较运算符__.png",G="/assets/img/Python基础/单继承实现图.png",B="/assets/img/Python基础/多继承图.png",Y="/assets/img/Python基础/复写示例图.png",U="/assets/img/Python基础/类型注解提示图.png",M="/assets/img/Python基础/形参效果图.png",V="/assets/img/Python基础/返回值注解2图.png",L="/assets/img/Python基础/需要使用Union的场景图.png",X="/assets/img/Python基础/使用Union后的场景图.png",W="/assets/img/Python基础/函数使用Union.png",K="/assets/img/Python基础/函数使用Union效果图.png",Q="/assets/img/Python基础/非闭包的错误使用方式图.png",$="/assets/img/Python基础/转换闭包形式的代码图.png",Z="/assets/img/Python基础/为什么需要单例模式图？.png",J="/assets/img/Python基础/单例模式的实现图.png",nn="/assets/img/Python基础/转变为工厂模式.png",sn="/assets/img/Python基础/任务管理器图.png",an="/assets/img/Python基础/进程、线程注意点图.png",tn="/assets/img/Python基础/socket的客户端和服务端模拟图.png",en={},pn=a(`<h1 id="python基础" tabindex="-1"><a class="header-anchor" href="#python基础" aria-hidden="true">#</a> Python基础</h1><h2 id="常用的6种数据类型" tabindex="-1"><a class="header-anchor" href="#常用的6种数据类型" aria-hidden="true">#</a> 常用的6种数据类型</h2><table><thead><tr><th style="text-align:left;">类型</th><th>描述</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">数字（number）</td><td>支持：<br>整数（int）<br>浮点数（float）<br>复数（complex）<br>布尔（bool）</td><td>整数(int),如：10、-10<br>----------------------------------------------------------------------------------<br>浮点数(f1oat),如：13.14、-13.14<br>-----------------------------------------------------------------------------------<br>复数(complex),如：4+3j,以j结尾表示复数<br>-----------------------------------------------------------------------------------<br>布尔(bool)表达现实生活中的逻辑，即真和假，True表示真，<br>False表示假。<br>True本质上是一个数字记作1，False记作0</td></tr><tr><td style="text-align:left;">字符串（string）</td><td>描述文本的一种数据类型</td><td>字符串(string)由任意数量的字符组成</td></tr><tr><td style="text-align:left;">列表（list）</td><td>有序的可变序列</td><td>Python中使用最频繁的数据类型，可有序记录一堆数据</td></tr><tr><td style="text-align:left;">元组（tuple）</td><td>有序的不可变序列</td><td>可有序记录一堆不可变的Python数据集合<br></td></tr><tr><td style="text-align:left;">集合（set）</td><td>无序不重复集合</td><td>可无序记录一堆不重复的Python数据集合<br></td></tr><tr><td style="text-align:left;">字典（Dictionary）</td><td>无序的Key-Value集合</td><td>可无序记录一堆Key-Value型的Python数据集合</td></tr></tbody></table><blockquote><p>字面量代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>int_value <span class="token operator">=</span> <span class="token number">6</span>
float_value <span class="token operator">=</span> <span class="token number">3.14</span>
str_value <span class="token operator">=</span> <span class="token string">&quot;黑马&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;int：&quot;</span><span class="token punctuation">,</span> int_value<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;float：&quot;</span><span class="token punctuation">,</span> int_value<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;string：&quot;</span><span class="token punctuation">,</span> str_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打印结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\01">\\01</span>_Python中的字面量.py&quot;</span>
int： <span class="token number">6</span>
float： <span class="token number">6</span>
string： 黑马

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.053</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><blockquote><p>注释代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 我是单行注释</span>
int_value <span class="token operator">=</span> <span class="token number">6</span>
float_value <span class="token operator">=</span> <span class="token number">3.14</span>
str_value <span class="token operator">=</span> <span class="token string">&quot;黑马&quot;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
我是多行注释
1
2
3
&quot;&quot;&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;int：&quot;</span><span class="token punctuation">,</span> int_value<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;float：&quot;</span><span class="token punctuation">,</span> int_value<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;string：&quot;</span><span class="token punctuation">,</span> str_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打印结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\02">\\02</span>_Python中的注释.py&quot;</span>
int： <span class="token number">6</span>
float： <span class="token number">6</span>
string： 黑马

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.062</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="什么是变量" tabindex="-1"><a class="header-anchor" href="#什么是变量" aria-hidden="true">#</a> 什么是变量？</h3><p>变量：在程序运行时，能储存计算结果或能表示值的抽象概念。 简单的说，变量就是在程序运行时，记录数据用的。</p><figure><img src="`+c+`" alt="变量的定义格式" tabindex="0" loading="lazy"><figcaption>变量的定义格式</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    当前余额为50元,
    买一支冰淇淋花费5元,
    再买一瓶可乐花费3.5元，
    打印出钱包剩余金额
    
    &quot;&quot;&quot;</span>
    
    amount <span class="token operator">=</span> <span class="token number">50</span>
    amount <span class="token operator">=</span> amount <span class="token operator">-</span> <span class="token number">5</span>
    amount <span class="token operator">=</span> amount <span class="token operator">-</span> <span class="token number">3.5</span>
    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;钱包余额为:&quot;</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打印结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
    <span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\03">\\03</span>_Python中的变量.py&quot;</span>
    钱包余额为: <span class="token number">41.5</span>
    
    <span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.054</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h2><h3 id="变量有类型吗" tabindex="-1"><a class="header-anchor" href="#变量有类型吗" aria-hidden="true">#</a> 变量有类型吗？</h3><pre><code>我们通过type(变量)可以输出类型，这是查看变量的类型还是数据的类型？

查看的是：变量存储的数据的类型。因为，变量无类型，但是它存储的数据有。
</code></pre><figure><img src="`+u+`" alt="变量有类型嘛？" tabindex="0" loading="lazy"><figcaption>变量有类型嘛？</figcaption></figure><blockquote><p>数据类型代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">from</span> re <span class="token keyword">import</span> A
​    
​    name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
​    name_type <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
​    age <span class="token operator">=</span> <span class="token number">18</span>
​    age_type <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
​    amount <span class="token operator">=</span> <span class="token number">35.5</span>
​    amount_type <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span>
​    
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;name 的类型是：&quot;</span><span class="token punctuation">,</span> name_type<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;age 的类型是：&quot;</span><span class="token punctuation">,</span> age_type<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;amount 的类型是：&quot;</span><span class="token punctuation">,</span> amount_type<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><blockquote><p>打印结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
    <span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\04">\\04</span>_Python中的变量类型.py&quot;</span>
    name 的类型是： <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>
    age 的类型是： <span class="token operator">&lt;</span>class <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>
    amount 的类型是： <span class="token operator">&lt;</span>class <span class="token string">&#39;float&#39;</span><span class="token operator">&gt;</span>
    
    <span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.066</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h2><h3 id="为什么要转换类型" tabindex="-1"><a class="header-anchor" href="#为什么要转换类型" aria-hidden="true">#</a> 为什么要转换类型？</h3><p>数据类型之间，在特定的场景下，是可以相互转换的，如字符串转数字、数字转字</p><p>符串等</p><p>那么，我们为什么要转换它们呢？</p><p>数据类型转换，将会是我们以后经常使用的功能。</p><p>如：</p><ul><li>从文件中读取的数字，默认是字符串，我们需要转换成数字类型；</li><li>后续学习的iput0语句，默认结果是字符串，若需要数字也需要转换；</li><li>将数字转换成字符串用以写出到外部系统；</li><li>等等；</li></ul><h3 id="常见的转换语句" tabindex="-1"><a class="header-anchor" href="#常见的转换语句" aria-hidden="true">#</a> 常见的转换语句</h3><table><thead><tr><th>语句（函数）</th><th>说明</th></tr></thead><tbody><tr><td>int(x)</td><td>将x转换为一个整数</td></tr><tr><td>float(x)</td><td>将x转换为一个浮点数</td></tr><tr><td>str(x)</td><td>将对象x转换为字符串</td></tr></tbody></table><p>这三种转换都是返回值得，可以使用 <code>print()</code> 直接输出或使用变量存储结果值。</p><blockquote><p>常见类型转换代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
    <span class="token comment"># 数字转字符串</span>
    int_value <span class="token operator">=</span> <span class="token number">11</span>
    str_int <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>int_value<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>str_int<span class="token punctuation">)</span><span class="token punctuation">,</span> str_int<span class="token punctuation">)</span>
    
    float_value <span class="token operator">=</span> <span class="token number">11.11</span>
    str_float <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>float_value<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>str_float<span class="token punctuation">)</span><span class="token punctuation">,</span> str_float<span class="token punctuation">)</span>

​    <span class="token comment"># 字符串转int</span>
​    str_num <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
​    int_num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>str_num<span class="token punctuation">)</span>
​    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span><span class="token punctuation">,</span> int_num<span class="token punctuation">)</span>
​    
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    错误示例之非int字符串转int
    
    错误提示: ValueError: invalid literal for int() with base 10: &#39;123abc&#39;
    &quot;&quot;&quot;</span>
    <span class="token comment"># str_num_error = &quot;123abc&quot;</span>
    <span class="token comment"># int_num_fail = int(str_num_error)</span>
    <span class="token comment"># print(type(int_num_fail), int_num_fail)</span>

​    <span class="token comment"># 字符串转float</span>
​    str_f <span class="token operator">=</span> <span class="token string">&quot;1.01&quot;</span>
​    float_f <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>str_f<span class="token punctuation">)</span>
​    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>float_f<span class="token punctuation">)</span><span class="token punctuation">,</span> float_f<span class="token punctuation">)</span>
​    
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    错误示例之非float字符串装float
    
    错误提示: ValueError: could not convert string to float: &#39;1.01f&#39;
    &quot;&quot;&quot;</span>
    <span class="token comment"># str_f_error = &quot;1.01f&quot;</span>
    <span class="token comment"># float_f_fail = float(str_f_error)</span>
    <span class="token comment"># print(type(float_f_fail), float_f_fail)</span>

​    <span class="token comment"># int转float </span>
​    int_num <span class="token operator">=</span> <span class="token number">1</span>
​    float_num <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>int_num<span class="token punctuation">)</span>
​    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>float_num<span class="token punctuation">)</span><span class="token punctuation">,</span> float_num<span class="token punctuation">)</span>
​    
​    <span class="token comment"># float转int，会丢失精度</span>
​    float_num_1 <span class="token operator">=</span> <span class="token number">1.01</span>
​    int_num_1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>float_num_1<span class="token punctuation">)</span>
​    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>int_num_1<span class="token punctuation">)</span><span class="token punctuation">,</span> int_num_1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><blockquote><p>常见类型转换代码打印： 以下内容是注释掉报错代码后的结果。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\05">\\05</span>_Python中的数据类型转换.py&quot;</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span> <span class="token number">11</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span> <span class="token number">11.11</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span> <span class="token number">123</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;float&#39;</span><span class="token operator">&gt;</span> <span class="token number">1.01</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;float&#39;</span><span class="token operator">&gt;</span> <span class="token number">1.0</span>
    <span class="token operator">&lt;</span>class <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span> <span class="token number">1</span>
    
    <span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.055</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><h3 id="标识符命名规则·内容限定" tabindex="-1"><a class="header-anchor" href="#标识符命名规则·内容限定" aria-hidden="true">#</a> 标识符命名规则·内容限定</h3><p>标识符命名中，只允许出现：</p><ul><li><p>英文</p></li><li><p>中文</p></li><li><p>数字</p></li><li><p>下划线（_)</p></li></ul><p>这四类元素。</p><p>其余任何内容都不被允许。</p><p>注意：</p><ol><li>不推荐使用中文；</li><li>数字不可以开头；</li><li>大小写是敏感的；</li><li>不可使用关键字；</li></ol><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><figure><img src="`+r+'" alt="算术运算符" tabindex="0" loading="lazy"><figcaption>算术运算符</figcaption></figure><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><figure><img src="'+d+'" alt="赋值运算符" tabindex="0" loading="lazy"><figcaption>赋值运算符</figcaption></figure><h3 id="复合赋值运算符" tabindex="-1"><a class="header-anchor" href="#复合赋值运算符" aria-hidden="true">#</a> 复合赋值运算符</h3><figure><img src="'+k+'" alt="复合赋值运算符" tabindex="0" loading="lazy"><figcaption>复合赋值运算符</figcaption></figure><h2 id="字符串扩展" tabindex="-1"><a class="header-anchor" href="#字符串扩展" aria-hidden="true">#</a> 字符串扩展</h2><h3 id="字符串的三种定义方式" tabindex="-1"><a class="header-anchor" href="#字符串的三种定义方式" aria-hidden="true">#</a> 字符串的三种定义方式</h3><ul><li><p>字符串在Python中有多种定义形式：</p><ol><li>单引号定义法：name = &#39;黑马程序员&#39;</li><li>双引号定义法：name = &quot;黑马程序员&quot;</li><li>三引号定义法：name = &quot;&quot;&quot;黑马程序员&quot;&quot;&quot;</li></ol></li></ul><p>三引号定义法，和多行注释的写法一样，同样支持换行操作。</p><p>使用变量接收它，它就是字符串。</p><p>不使用变量接收它，就可以作为多行注释使用。</p><br>',67),on=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 1. 单引号字符串定义</span>
str1 <span class="token operator">=</span> <span class="token string">&#39;单引号字符串&#39;</span>

<span class="token comment"># 2. 双引号字符串定义</span>
str2 <span class="token operator">=</span> <span class="token string">&quot;双引号字符串&quot;</span>

<span class="token comment"># 3. 三引号字符串</span>
str3 <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;三引号字符串
1,
2,
3。
&quot;&quot;&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str3<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><blockquote><p>打印效果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\0">\\0</span>8_Python中的字符串三种定义方式.py&quot;</span>
单引号字符串 <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>
双引号字符串 <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>
三引号字符串
<span class="token number">1</span>,
<span class="token number">2</span>,
<span class="token number">3</span>。
 <span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.116</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串的引号嵌套" tabindex="-1"><a class="header-anchor" href="#字符串的引号嵌套" aria-hidden="true">#</a> 字符串的引号嵌套</h4><p>思考：如果我想要定义的字符串本身，是包含：单引号、双引号自身呢？如何写？</p><ul><li>单引号定义法，可以内含双引号；</li><li>双引号定义法，可以内含单引号；</li><li>可以使用转义字符 \\ 来将引号解除效用，变成普通字符串；</li></ul><blockquote><p>字符串引号嵌套：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 在单引号内包含双引号</span>
name <span class="token operator">=</span> <span class="token string">&#39;&quot;红茶&quot;&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

<span class="token comment"># 在双引号内包含单引号</span>
name <span class="token operator">=</span> <span class="token string">&quot;&#39;红茶&#39;&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

<span class="token comment"># 使用转义符 \\ 解除引号的效用</span>
name <span class="token operator">=</span> <span class="token string">&quot;\\&quot;红茶\\&quot;&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

name <span class="token operator">=</span> <span class="token string">&#39;\\&#39;红茶\\&#39;&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打印嵌套结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;红茶&quot;</span>
<span class="token string">&#39;红茶&#39;</span>
<span class="token string">&quot;红茶&quot;</span>
<span class="token string">&#39;红茶&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),ln={href:"https://www.runoob.com/python3/python3-string.html",target:"_blank",rel:"noopener noreferrer"},cn=a(`<h3 id="字符串拼接" tabindex="-1"><a class="header-anchor" href="#字符串拼接" aria-hidden="true">#</a> 字符串拼接</h3><p>如果我们有两个字符串（文本）字面量，可以将其拼接成一个字符串，通过+号即可</p><p>完成，如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;学T来黑马&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;月薪过万&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>学IT来黑马月薪过万
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过一般，单纯的2个字符串字面量进行拼接显得很呆，一般，字面量和变量或变量</p><p>和变量之间会使用拼接，如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;黑马程序员&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我的名字是：&quot;</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">&quot;, 我可以教大家IT技能&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>我的名字是：黑马程序员，我可以教大家IT技能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：无法和 <strong>非字符串类型</strong> 进行拼接。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 字符串字面量拼接整数类型导致的错误</span>
age <span class="token operator">=</span> <span class="token number">16</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my <span class="token operator">+</span> c_name<span class="token punctuation">,</span> <span class="token string">&quot;or&quot;</span><span class="token punctuation">,</span> cn_name <span class="token operator">+</span> <span class="token string">&quot;年龄是&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>TypeError: can only concatenate str <span class="token punctuation">(</span>not <span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span> to str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字符串格式化" tabindex="-1"><a class="header-anchor" href="#字符串格式化" aria-hidden="true">#</a> 字符串格式化</h3><p>我们会发现，这个拼接字符串也不好用啊！</p><ol><li><p>变量过多，拼接起来实在是太麻烦了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是”+name+&quot;</span><span class="token punctuation">,</span>我的性别是：<span class="token string">&quot;+sex+&quot;</span><span class="token punctuation">,</span>我住在：<span class="token string">&quot;+address+&quot;</span><span class="token punctuation">,</span>我的爱好是：&quot;<span class="token operator">+</span>hobby<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>字符串无法和数字或其它类型完成拼接。</p></li></ol><p>所以有没有其他方式，即方便又支持拼接其它类型呢？</p><blockquote><p>我们可以通过如下语法，完成字符串和变量的快速拼接。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过占位符的形式，完成拼接</span>
my <span class="token operator">=</span> <span class="token string">&quot;我是&quot;</span>
c_name <span class="token operator">=</span> <span class="token string">&quot;红茶&quot;</span>
cn_name <span class="token operator">=</span> <span class="token string">&quot;blacktea&quot;</span>
age <span class="token operator">=</span> <span class="token number">16</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>my<span class="token punctuation">,</span> c_name<span class="token punctuation">,</span> <span class="token string">&quot;or&quot;</span><span class="token punctuation">,</span> cn_name<span class="token punctuation">,</span> <span class="token string">&quot;年龄是%s&quot;</span> <span class="token operator">%</span> age<span class="token punctuation">)</span>

birthday <span class="token operator">=</span> <span class="token number">622</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my<span class="token punctuation">,</span> c_name<span class="token punctuation">,</span> <span class="token string">&quot;or&quot;</span><span class="token punctuation">,</span> cn_name<span class="token punctuation">,</span> <span class="token string">&quot;年龄是%s生日是%s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>age<span class="token punctuation">,</span> birthday<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\07">\\07</span>_Python中的字符串格式化.py&quot;</span>
我是 红茶 or blacktea 年龄是16
我是 红茶 or blacktea 年龄是16生日是622

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.121</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的，%s</p><ul><li>% 表示：我要占位</li><li>s 表示：将变量变成字符串放入占位的地方</li></ul><p>所以，综合起来的意思就是：我先占个位置，等一会有个变量过来，我把它变成字</p><p>符串放到占位的位置。</p><p>Python中，其实支持非常多的数据类型占位 最常用的是如下三类：</p><table><thead><tr><th>格式字符</th><th>转化</th></tr></thead><tbody><tr><td>%s</td><td>将内容转换成字符串，放入占位位置</td></tr><tr><td>%d</td><td>将内容转换成整数，放入占位位置</td></tr><tr><td>%f</td><td>将内容转换成浮点型，放入占位位置</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my <span class="token operator">=</span> <span class="token string">&quot;我是&quot;</span>
c_name <span class="token operator">=</span> <span class="token string">&quot;红茶&quot;</span>
age <span class="token operator">=</span> <span class="token number">16</span>
balance <span class="token operator">=</span> <span class="token number">6.67</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my<span class="token operator">+</span>c_name<span class="token operator">+</span><span class="token string">&quot;,年龄是%d,余额只有%f&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>age<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>打印结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>我是红茶,年龄是16,余额只有6.670000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),un={href:"https://www.runoob.com/python3/python3-string.html",target:"_blank",rel:"noopener noreferrer"},rn=a(`<h3 id="格式化的精度控制" tabindex="-1"><a class="header-anchor" href="#格式化的精度控制" aria-hidden="true">#</a> 格式化的精度控制</h3><p>我们可以使用辅助符号&quot;m.n&quot;来控制数据的宽度和精度。</p><ul><li>m 控制宽度，要求是数字（很少使用），设置的宽度小于数字自身，不生效。</li><li>.n 控制小数点精度，要求是数字，会进行小数的四舍五入。</li></ul><p>示例：</p><ul><li><p>%5d：表示将整数的宽度控制在5位，如数字11，被设置为5d,就会变成：空格 空格 空格11，用三个空格补足宽度。</p></li><li><p>%5.2f：表示将宽度控制为5，将小数点精度设置为2；</p></li></ul><p>小数点和小数部分也算入宽度计算。</p><p>如，对11.345设置了%7.2f后，结果是：空格空格11.35。</p><p>2个空格补足宽度，小数部分限制2位精度后，四舍五入为.35</p><ul><li>%.2f：表示不限制宽度，只设置小数点精度为2，如11.345设置%.2f后，结果是11.35。</li></ul><blockquote><p>精度控制代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num1 <span class="token operator">=</span> <span class="token number">11.123</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数字11.123宽度限制为5,结果是:%5f&quot;</span> <span class="token operator">%</span> num1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数字11.123宽度限制为1,结果是:%1f&quot;</span> <span class="token operator">%</span> num1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数字11.123宽度限制为5,小数精度为2,,结果是:%5.2f&quot;</span> <span class="token operator">%</span> num1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;数字11.123小数精度为2,,结果是:%.2f&quot;</span> <span class="token operator">%</span> num1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>数字11.123宽度限制为5,结果是:11.123000
数字11.123宽度限制为1,结果是:11.123000
数字11.123宽度限制为5,小数精度为2,,结果是:11.12
数字11.123小数精度为2,,结果是:11.12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：我测试的结果并没有打印出空格。</p><h3 id="字符串格式化方式2" tabindex="-1"><a class="header-anchor" href="#字符串格式化方式2" aria-hidden="true">#</a> 字符串格式化方式2</h3><p>目前通过%符号占位已经很方便了，还能进行精度控制。</p><p>可是追求效率和优雅的Python,是否有更加优雅的方式解决问题呢？</p><p>那当然：有。</p><p>通过语法：&quot;内容{变量}&quot;的格式来快速格式化。</p><blockquote><p>代码：</p></blockquote><div class="language-pytho line-numbers-mode" data-ext="pytho"><pre class="language-pytho"><code>&quot;&quot;&quot;
演示第二种字符串格式化的方式:f&quot;{占位}&quot;
&quot;&quot;&quot;
name = &quot;红茶&quot;
birthday = 622
age = 18
balance = 3.1456
print(f&quot;我是{name},年龄为:{age},生日是:{birthday},余额为:{balance}&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>8_字符串格式化的方式2.py&quot;</span>
我是红茶,年龄为:18,生日是:622,余额为:3.1456

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.056</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：适合对精度没有要求的时候快速使用。</p><h3 id="对表达式进行格式化" tabindex="-1"><a class="header-anchor" href="#对表达式进行格式化" aria-hidden="true">#</a> 对表达式进行格式化</h3><p>刚刚的演示，都是基于变量的。</p><p>可是，我想更加优雅些，少写点代码，直接对“表达式”进行格式化是否可行呢？</p><p>那么，我们先了解一下什么是表达式。</p><p>表达式：一条具有明确执行结果的代码语句</p><p>1+1、5*2,就是表达式，因为有具体的结果，结果是个数字。</p><p>又或者，常见的变量定义：</p><p>name = &quot;张三&quot; age = 1+1</p><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
演示对表达式进行字符串格式化
&quot;&quot;&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1*1的结果是:%d&quot;</span> <span class="token operator">%</span> <span class="token number">1</span><span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;1+1的结果是:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;1*2的结果是:&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;字符串在Python中的类型名称是:%s&quot;</span> <span class="token operator">%</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&quot;字符串&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_对表达式进行格式化.py&quot;</span>
<span class="token number">1</span>*1的结果是:1
<span class="token number">1</span>+1的结果是:2
<span class="token number">1</span>*2的结果是: <span class="token number">2</span>
字符串在Python中的类型名称是:<span class="token operator">&lt;</span>class <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.054</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="股价计算小程序" tabindex="-1"><a class="header-anchor" href="#股价计算小程序" aria-hidden="true">#</a> 股价计算小程序</h3><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
定义如下变量：
name,公司名
stock_price,当前股价
stock_code,股票代码
stock_price_daily_growth_factor,股票每日增长系数，浮点数类型，比如1.2
growth_days,增长天数
计算，经过growth_days天的增长后，股价达到了多少钱
使用字符串格式化进行输出，如果是浮点数，要求小数点精度2位数。
股价19.99*系数1.2*7天=71.62778419199998，小数点现在精度2位后结果：71.63

&quot;&quot;&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;红茶XX公司&quot;</span>
stock_price <span class="token operator">=</span> <span class="token number">19.99</span>
stock_code <span class="token operator">=</span> <span class="token string">&quot;003032&quot;</span>
stock_price_daily_growth_factor <span class="token operator">=</span> <span class="token number">1.2</span>
growth_days <span class="token operator">=</span> <span class="token number">7</span>

result <span class="token operator">=</span> stock_price <span class="token operator">*</span> stock_price_daily_growth_factor<span class="token operator">**</span>growth_days

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
公司:%s,股票代码:%s,当前股价:%.2f,
每日增长系数是:%.1f,经过%d天的增长后,股价达到了:%.2f
&quot;&quot;&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> stock_code<span class="token punctuation">,</span> stock_price<span class="token punctuation">,</span> stock_price_daily_growth_factor<span class="token punctuation">,</span> growth_days<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法\\股价计算小程序.py&quot;</span>

公司:红茶XX公司,股票代码:003032,当前股价:19.990000,
每日增长系数是:1.2,经过7天的增长后,股价达到了:71.63

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.055</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串如何比较大小" tabindex="-1"><a class="header-anchor" href="#字符串如何比较大小" aria-hidden="true">#</a> 字符串如何比较大小</h3><h4 id="ascii码表" tabindex="-1"><a class="header-anchor" href="#ascii码表" aria-hidden="true">#</a> ASCII码表</h4><figure><img src="https://pic3.zhimg.com/80/v2-99d2c2240b51e0dc2772927113111992_720w.webp" alt=" ASCII码表图
" tabindex="0" loading="lazy"><figcaption> ASCII码表图 </figcaption></figure><p>在程序中，字符串所用的所有字符如：</p><ul><li>大小写英文单词</li><li>数字</li><li>特殊符号(！、\\、、@、#、空格等)</li></ul><p>都有其对应的ASCII码表值</p><p>每一个字符都能对应上一个：数字的码值</p><p>字符串进行比较就是基于数字的码值大小进行比较的。</p><h4 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h4><p>字符串是按位比较，也就是一位位进行对比，只要有一位大，那么整体就大。</p><figure><img src="`+v+`" alt="字符串比较图" tabindex="0" loading="lazy"><figcaption>字符串比较图</figcaption></figure><h2 id="数据输入-input语句" tabindex="-1"><a class="header-anchor" href="#数据输入-input语句" aria-hidden="true">#</a> 数据输入（input语句）</h2><h3 id="inputi语句-函数" tabindex="-1"><a class="header-anchor" href="#inputi语句-函数" aria-hidden="true">#</a> inputi语句（函数）</h3><p>我们前面学习过prit语句（函数），可以完成将内容（字面量、变量等）输出到屏幕</p><p>上。</p><p>在Python中，与之对应的还有一个inputi语句，用来获取键盘输入。</p><ul><li>数据输出：print</li><li>数据输入：input</li></ul><p>使用上也非常简单：</p><p>使用input()语句可以从键盘获取输入</p><p>使用一个变量接收（存储）iput语句获取的键盘输入数据即可</p><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
演示Python的input语句
获取键盘输入的信息
&quot;&quot;&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;您好，您的名称是?&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;我可以叫您</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">先生吗?\\n&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;好的。&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/07_input语句.py
您好，您的名称是?
绿毛虫
我可以叫您绿毛虫先生吗?
可以
好的。
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="欢迎登陆小程序" tabindex="-1"><a class="header-anchor" href="#欢迎登陆小程序" aria-hidden="true">#</a> 欢迎登陆小程序</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
定义两个变量，用以获取从键盘输入的内容，并给出提示信息：
变量1,变量名:user_name,记录用户名称
变量2,变量名:user_type,记录用户类型
&quot;&quot;&quot;</span>

user_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入姓名：&quot;</span><span class="token punctuation">)</span>
user_type <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入用户类型：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;您好：</span><span class="token interpolation"><span class="token punctuation">{</span>user_name<span class="token punctuation">}</span></span><span class="token string">,您是尊贵的：</span><span class="token interpolation"><span class="token punctuation">{</span>user_type<span class="token punctuation">}</span></span><span class="token string">,欢迎登陆。&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/07_input语句/08_input语句之欢迎登陆小程序.py
请输入姓名：绿毛虫
请输入用户类型：svip
您好：绿毛虫,您是尊贵的：svip,欢迎登陆。
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句" aria-hidden="true">#</a> 判断语句</h2><h3 id="布尔类型和比较运算符" tabindex="-1"><a class="header-anchor" href="#布尔类型和比较运算符" aria-hidden="true">#</a> 布尔类型和比较运算符</h3><p><a href="#%E5%B8%B8%E7%94%A8%E7%9A%846%E7%A7%8D%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">常用的6种数据类型</a></p><h4 id="布尔类型的定义" tabindex="-1"><a class="header-anchor" href="#布尔类型的定义" aria-hidden="true">#</a> 布尔类型的定义</h4><p>布尔类型的字面量：</p><ul><li>True表示真（是、肯定）</li><li>False表示假（否、否定）</li></ul><p>定义变量存储布尔类型数据： <strong>变量名称 = 布尔类型字面量</strong></p><p>布尔类型不仅可以自行定义，同时也可以通过计算的来，也就是使用比较运算符进行比较运算得到布尔类型的结果。</p><h4 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h4><p>布尔类型的数据，不仅可以通过定义得到，也可以通过比较运算符进行内容比较得到。</p><table><thead><tr><th style="text-align:center;">运算符</th><th style="text-align:left;">描述</th><th>示例</th></tr></thead><tbody><tr><td style="text-align:center;">==</td><td style="text-align:left;">判断内容是否相等，满足为True,不满足为False</td><td>如a=3,b=3,则(a=b)为True</td></tr><tr><td style="text-align:center;">!=</td><td style="text-align:left;">判断内容是否不相等，满足为True,不满足为False</td><td>如a=1,b=3,则(a!=b)为True</td></tr><tr><td style="text-align:center;">&gt;</td><td style="text-align:left;">判断运算符左侧内容是否大于右侧<br>满足为True,不满足为False</td><td>如a=7,b=3,则(a&gt;b)为True</td></tr><tr><td style="text-align:center;">&lt;</td><td style="text-align:left;">判断运算符左侧内容是否小于右侧<br>满足为True,不满足为False</td><td>如a=3,b=7,则(a&lt;b)为True</td></tr><tr><td style="text-align:center;">&gt;=</td><td style="text-align:left;">判断运算符左侧内容是否大于等于右侧<br>满足为True,不满足为False</td><td>如a=3,b=3,则a&gt;=b)为True</td></tr><tr><td style="text-align:center;">&lt;=</td><td style="text-align:left;">判断运算符左侧内容是否小于等于右侧<br>满足为True,不满足为False</td><td>如a=3,b=3,则a&lt;=b)为True</td></tr></tbody></table><blockquote><p>比较运算符代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>res1 <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;10 &gt; 5 的结果是:</span><span class="token interpolation"><span class="token punctuation">{</span>res1<span class="token punctuation">}</span></span><span class="token string">, 类型是:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

name <span class="token operator">=</span> <span class="token string">&quot;blacktea&quot;</span> 
res2 <span class="token operator">=</span> name <span class="token operator">==</span> <span class="token string">&#39;blacktea&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\\&quot;blaktea\\&quot; == \\&#39;blacktea\\&#39; 的结果是:</span><span class="token interpolation"><span class="token punctuation">{</span>res2<span class="token punctuation">}</span></span><span class="token string">, 类型是:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

res3 <span class="token operator">=</span> name <span class="token operator">==</span> <span class="token string">&quot;abs123&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\\&quot;blaktea\\&quot; == \\&quot;abs123\\&quot; 的结果是:</span><span class="token interpolation"><span class="token punctuation">{</span>res3<span class="token punctuation">}</span></span><span class="token string">, 类型是:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出结果：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>8_判断语句<span class="token entity" title="\\0">\\0</span>8_比较运算符.py&quot;</span>
<span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">5</span> 的结果是:True, 类型是:<span class="token operator">&lt;</span>class <span class="token string">&#39;bool&#39;</span><span class="token operator">&gt;</span>
<span class="token string">&quot;blaktea&quot;</span> <span class="token operator">==</span> <span class="token string">&#39;blacktea&#39;</span> 的结果是:True, 类型是:<span class="token operator">&lt;</span>class <span class="token string">&#39;bool&#39;</span><span class="token operator">&gt;</span>
<span class="token string">&quot;blaktea&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;abs123&quot;</span> 的结果是:False, 类型是:<span class="token operator">&lt;</span>class <span class="token string">&#39;bool&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.06</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if语句的基本格式" tabindex="-1"><a class="header-anchor" href="#if语句的基本格式" aria-hidden="true">#</a> if语句的基本格式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序中的判断：

    if 要判断的条件:
    
        条件成立时，要执行的事情

注意：执行的事情这里需要4个空格缩进！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if语句代码</span>

age_str <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的年龄:&quot;</span><span class="token punctuation">)</span>
age <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>age_str<span class="token punctuation">)</span>

<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;时间过得真快啊,您已经成年了！&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;今年都已经%d岁了啊&quot;</span> <span class="token operator">%</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果</span>
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if判断语句.py
请输入您的年龄:18
时间过得真快啊,您已经成年了！
今年都已经18岁了啊
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-else语句" tabindex="-1"><a class="header-anchor" href="#if-else语句" aria-hidden="true">#</a> if else语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序中的判断：

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#  if else 代码：</span>

age_str <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入您的年龄:&quot;</span><span class="token punctuation">)</span>
age <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>age_str<span class="token punctuation">)</span>

<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;您已经成年了！&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;还有%d年成年!&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">18</span><span class="token operator">-</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>    

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;时间过得真快啊,今年都已经%d岁了啊&quot;</span> <span class="token operator">%</span> age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  输出结果</span>

<span class="token comment"># 成年</span>
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if_else判断语句.py
请输入您的年龄:18
您已经成年了！
时间过得真快啊,今年都已经18岁了啊
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> 

<span class="token comment"># 非成年</span>
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/02_if_else判断语句.py
请输入您的年龄:12
还有6年成年<span class="token operator">!</span>
时间过得真快啊,今年都已经12岁了啊
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-elif-else语句" tabindex="-1"><a class="header-anchor" href="#if-elif-else语句" aria-hidden="true">#</a> if elif else语句</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if elif else代码：</span>

height <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入身高(cm):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
vip_level <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入VIP等级:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
condition_height <span class="token operator">=</span> <span class="token number">120</span>
condition_vip_level <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">if</span> height <span class="token operator">&lt;</span> condition_height<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;您升高未超过%d可以免费游玩。&quot;</span> <span class="token operator">%</span> condition_height<span class="token punctuation">)</span>
<span class="token keyword">elif</span> vip_level <span class="token operator">&gt;</span> condition_vip_level<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;您的会员等级超过%d级可以免费游玩。&quot;</span> <span class="token operator">%</span> condition_vip_level<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;免费条件不满足,需要票价10元。&quot;</span><span class="token punctuation">)</span>        

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;祝您游玩愉快&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:130
请输入VIP等级:1
免费条件不满足,需要票价10元。
祝您游玩愉快
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:110
请输入VIP等级:1
您升高未超过120可以免费游玩。
祝您游玩愉快
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/05_if_elif_else判断语句.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:130
请输入VIP等级:4
您的会员等级超过3级可以免费游玩。
祝您游玩愉快
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断语句的嵌套" tabindex="-1"><a class="header-anchor" href="#判断语句的嵌套" aria-hidden="true">#</a> 判断语句的嵌套</h3><figure><img src="`+m+`" alt="嵌套判断图" tabindex="0" loading="lazy"><figcaption>嵌套判断图</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 判断语句嵌套代码：</span>

height <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入身高(cm):&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

condition_height <span class="token operator">=</span> <span class="token number">120</span>
condition_vip_level <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">if</span> height <span class="token operator">&gt;</span> condition_height<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
        您升高超过%d,不可以免费游玩,
        但是，如果会员等级超过%d,也可以免费游玩
    &quot;&quot;&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>condition_height<span class="token punctuation">,</span> condition_vip_level<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入VIP等级:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> condition_vip_level<span class="token punctuation">:</span>
         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;您的会员等级超过%d级可以免费游玩。&quot;</span> <span class="token operator">%</span> condition_vip_level<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;免费条件不满足,需要票价10元。&quot;</span><span class="token punctuation">)</span>       

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;祝您游玩愉快&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:130

        您升高超过120,不可以免费游玩,
        但是，如果会员等级超过3,也可以免费游玩

请输入VIP等级:4
您的会员等级超过3级可以免费游玩。
祝您游玩愉快

PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:120
祝您游玩愉快

PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/02_Python入门语法/08_判断语句/07_判断语句嵌套.py
请输入身高<span class="token punctuation">(</span>cm<span class="token punctuation">)</span>:121

        您升高超过120,不可以免费游玩,
        但是，如果会员等级超过3,也可以免费游玩

请输入VIP等级:2
免费条件不满足,需要票价10元。
祝您游玩愉快
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例" aria-hidden="true">#</a> 实战案例</h3><h4 id="案例需求" tabindex="-1"><a class="header-anchor" href="#案例需求" aria-hidden="true">#</a> 案例需求</h4><p>定义一个数字（1~10，随机产生)，通过3次判断来猜出来数字?</p><h4 id="案例要求" tabindex="-1"><a class="header-anchor" href="#案例要求" aria-hidden="true">#</a> 案例要求</h4><ol><li>数字随机产生，范围1~10</li><li>有3次机会猜测数字，通过3层嵌套判断实现</li><li>每次猜不中，会提示大了或小了</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

num_r <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前随机生成的数字是:&quot;</span><span class="token punctuation">,</span> num_r<span class="token punctuation">)</span>
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入数字(1~10),首次次机会：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> num <span class="token operator">!=</span> num_r<span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">&gt;</span> num_r<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;猜错了，且值大于随机值&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;猜错了，且值小于随机值&quot;</span><span class="token punctuation">)</span>    
    num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入数字(1~10),第二次机会：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> num <span class="token operator">!=</span> num_r<span class="token punctuation">:</span>
        <span class="token keyword">if</span> num <span class="token operator">&gt;</span> num_r<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;猜错了，且值大于随机值&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;猜错了，且值小于随机值&quot;</span><span class="token punctuation">)</span>   
        num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入数字(1~10),最后一次次机会：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> num <span class="token operator">!=</span> num_r<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;三次都猜错了，您失败了。&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜您，最后一次猜到了&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜您，两次就猜对了&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜您，第一次就猜对了&quot;</span><span class="token punctuation">)</span>               
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><figure><img src="`+b+`" alt="循环语句前言" tabindex="0" loading="lazy"><figcaption>循环语句前言</figcaption></figure><h3 id="while循环的基础语法" tabindex="-1"><a class="header-anchor" href="#while循环的基础语法" aria-hidden="true">#</a> while循环的基础语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序中的循环：

    while 条件:
        条件满足时，做的事情1
        条件满足时，做的事情2
        条件满足时，做的事情3
        ...(省略)...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：做的事情这里需要4个空格缩进！</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># while循环的基础语法代码：</span>

i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;做一件事情，序号:&quot;</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span><span class="token number">1</span>

<span class="token comment"># 必然触发</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;做了%d件事情了哦。&quot;</span> <span class="token operator">%</span> i<span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li><p>while的条件需得到布尔类型，True表示继续循环，False表示结束循环。</p></li><li><p>需要设置循环终止的条件，如+=1配合ⅰ&lt;100，就能确保100次后停止，否则将无限循环。</p></li><li><p>空格缩进和f判断一样，都需要设置。</p></li></ol><h3 id="while循环的基础案例" tabindex="-1"><a class="header-anchor" href="#while循环的基础案例" aria-hidden="true">#</a> while循环的基础案例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># while循环的基础案例</span>

<span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>
step <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">while</span> step <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">+=</span>step 
    step <span class="token operator">+=</span><span class="token number">1</span>

<span class="token comment"># 因为第100次的时候 step+1了，所以打印的时候-1。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;1-100累加的和是</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">sum</span><span class="token punctuation">}</span></span><span class="token string">,循环次数为</span><span class="token interpolation"><span class="token punctuation">{</span>step<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while循环的嵌套应用" tabindex="-1"><a class="header-anchor" href="#while循环的嵌套应用" aria-hidden="true">#</a> while循环的嵌套应用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序中的循环：

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while循环的嵌套案例" tabindex="-1"><a class="header-anchor" href="#while循环的嵌套案例" aria-hidden="true">#</a> while循环的嵌套案例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
while循环的嵌套循环实现99乘法表
&quot;&quot;&quot;</span>
i <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">:</span>
    j <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">while</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">:</span>
        <span class="token comment"># end=&quot;&quot; 实现不换行, \\t制表符进行对齐</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%d*%d=%d\\t&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token operator">*</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
        j <span class="token operator">+=</span><span class="token number">1</span>
    i <span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\02">\\02</span>_练习之九九乘法表.py&quot;</span>
<span class="token number">1</span>*1<span class="token operator">=</span><span class="token number">1</span>	
<span class="token number">1</span>*2<span class="token operator">=</span><span class="token number">2</span>	<span class="token number">2</span>*2<span class="token operator">=</span><span class="token number">4</span>	
<span class="token number">1</span>*3<span class="token operator">=</span><span class="token number">3</span>	<span class="token number">2</span>*3<span class="token operator">=</span><span class="token number">6</span>	<span class="token number">3</span>*3<span class="token operator">=</span><span class="token number">9</span>	
<span class="token number">1</span>*4<span class="token operator">=</span><span class="token number">4</span>	<span class="token number">2</span>*4<span class="token operator">=</span><span class="token number">8</span>	<span class="token number">3</span>*4<span class="token operator">=</span><span class="token number">12</span>	<span class="token number">4</span>*4<span class="token operator">=</span><span class="token number">16</span>	
<span class="token number">1</span>*5<span class="token operator">=</span><span class="token number">5</span>	<span class="token number">2</span>*5<span class="token operator">=</span><span class="token number">10</span>	<span class="token number">3</span>*5<span class="token operator">=</span><span class="token number">15</span>	<span class="token number">4</span>*5<span class="token operator">=</span><span class="token number">20</span>	<span class="token number">5</span>*5<span class="token operator">=</span><span class="token number">25</span>	
<span class="token number">1</span>*6<span class="token operator">=</span><span class="token number">6</span>	<span class="token number">2</span>*6<span class="token operator">=</span><span class="token number">12</span>	<span class="token number">3</span>*6<span class="token operator">=</span><span class="token number">18</span>	<span class="token number">4</span>*6<span class="token operator">=</span><span class="token number">24</span>	<span class="token number">5</span>*6<span class="token operator">=</span><span class="token number">30</span>	<span class="token number">6</span>*6<span class="token operator">=</span><span class="token number">36</span>	
<span class="token number">1</span>*7<span class="token operator">=</span><span class="token number">7</span>	<span class="token number">2</span>*7<span class="token operator">=</span><span class="token number">14</span>	<span class="token number">3</span>*7<span class="token operator">=</span><span class="token number">21</span>	<span class="token number">4</span>*7<span class="token operator">=</span><span class="token number">28</span>	<span class="token number">5</span>*7<span class="token operator">=</span><span class="token number">35</span>	<span class="token number">6</span>*7<span class="token operator">=</span><span class="token number">42</span>	<span class="token number">7</span>*7<span class="token operator">=</span><span class="token number">49</span>	
<span class="token number">1</span>*8<span class="token operator">=</span><span class="token number">8</span>	<span class="token number">2</span>*8<span class="token operator">=</span><span class="token number">16</span>	<span class="token number">3</span>*8<span class="token operator">=</span><span class="token number">24</span>	<span class="token number">4</span>*8<span class="token operator">=</span><span class="token number">32</span>	<span class="token number">5</span>*8<span class="token operator">=</span><span class="token number">40</span>	<span class="token number">6</span>*8<span class="token operator">=</span><span class="token number">48</span>	<span class="token number">7</span>*8<span class="token operator">=</span><span class="token number">56</span>	<span class="token number">8</span>*8<span class="token operator">=</span><span class="token number">64</span>	
<span class="token number">1</span>*9<span class="token operator">=</span><span class="token number">9</span>	<span class="token number">2</span>*9<span class="token operator">=</span><span class="token number">18</span>	<span class="token number">3</span>*9<span class="token operator">=</span><span class="token number">27</span>	<span class="token number">4</span>*9<span class="token operator">=</span><span class="token number">36</span>	<span class="token number">5</span>*9<span class="token operator">=</span><span class="token number">45</span>	<span class="token number">6</span>*9<span class="token operator">=</span><span class="token number">54</span>	<span class="token number">7</span>*9<span class="token operator">=</span><span class="token number">63</span>	<span class="token number">8</span>*9<span class="token operator">=</span><span class="token number">72</span>	<span class="token number">9</span>*9<span class="token operator">=</span><span class="token number">81</span>	

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.072</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环的基础语法" tabindex="-1"><a class="header-anchor" href="#for循环的基础语法" aria-hidden="true">#</a> for循环的基础语法</h3><h4 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h4><p>除了while循环语句外，Python同样提供了for循环语句。</p><p>两者能完成的功能基本差不多，但仍有一些区别：</p><ul><li>while循环的循环条件是自定义的，自行控制循环条件。</li><li>for循环是一种”轮询”机制，是对一批内容进行”逐个处理”。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>程序中的for循环：
    for 临时变量 in 待处理数据集:
        循环满足条件时执行的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 遍历字符串代码：</span>

name <span class="token operator">=</span> <span class="token string">&quot;blacktea&quot;</span>

<span class="token keyword">for</span> c <span class="token keyword">in</span> name<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\f">\\f</span>or循环语句<span class="token entity" title="\\01">\\01</span>_for循环之遍历字符串.py&quot;</span>
b
l
a
c
k
t
e
a

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.063</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同while循环不同，for循环是无法定义循环条件的。</p><p>只能从被处理的数据集中，依次取出内容进行处理。</p><p>所以，理论上讲，Python的for循环无法构建无限循环（被处理的数据集不可能无限大）。</p><h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h5><ol><li><p>for循环的语法格式是： for临时变量in待处理数据集(序列)：循环满足条件时执行的代码。</p></li><li><p>for循环的注意点：</p><ul><li>无法定义循环条件，只能被动取出数据处理。</li><li>要注意，循环内的语句，需要有空格缩进。</li></ul></li></ol><h4 id="range语句" tabindex="-1"><a class="header-anchor" href="#range语句" aria-hidden="true">#</a> range语句</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    for 临时变量 in 待处理数据集:
        循环满足条件时执行的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>语法中的：待处理数据集，严格来说，称之为：<strong>序列类型</strong>。</p><p>序列类型指，其内容可以一个个依次取出的一种类型，包括：</p><ul><li>字符串</li><li>列表</li><li>元组</li><li>等</li></ul><p>fo循环语句，本质上是遍历：<strong>序列类型</strong>。</p><p>尽管除字符串外，其它的序列类型目前没学习到，但是不妨碍我们通过学习rnge语</p><p>句，获得一个简单的数字序列。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    语法1：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 代码：</span>

num <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment"># range 语法1 range(num)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------------------------------&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># range 语法2 range(start, num)</span>
start <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------------------------------&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># range 语法3 range(strat, num, step)</span>
step <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> num<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\f">\\f</span>or循环语句<span class="token entity" title="\\02">\\02</span>_range语句.py&quot;</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
---------------------------------------------------
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
---------------------------------------------------
<span class="token number">5</span>
<span class="token number">7</span>
<span class="token number">9</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.057</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 代码：</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;for循环的作用域-----------------------------------------&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 提前定义,就可以在for循环外使用,本质是覆盖</span>
j <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>    
<span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

for循环的作用域-----------------------------------------
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环的嵌套应用" tabindex="-1"><a class="header-anchor" href="#for循环的嵌套应用" aria-hidden="true">#</a> for循环的嵌套应用</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#for循环嵌套打印99乘法表：</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>j<span class="token punctuation">}</span></span><span class="token string">*</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span>j<span class="token operator">*</span>i<span class="token punctuation">}</span></span><span class="token string">\\t&#39;</span></span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\f">\\f</span>or循环语句<span class="token entity" title="\\03">\\03</span>_for循环打印99乘法表.py&quot;</span>
<span class="token number">1</span>*1<span class="token operator">=</span><span class="token number">1</span>	
<span class="token number">1</span>*2<span class="token operator">=</span><span class="token number">2</span>	<span class="token number">2</span>*2<span class="token operator">=</span><span class="token number">4</span>	
<span class="token number">1</span>*3<span class="token operator">=</span><span class="token number">3</span>	<span class="token number">2</span>*3<span class="token operator">=</span><span class="token number">6</span>	<span class="token number">3</span>*3<span class="token operator">=</span><span class="token number">9</span>	
<span class="token number">1</span>*4<span class="token operator">=</span><span class="token number">4</span>	<span class="token number">2</span>*4<span class="token operator">=</span><span class="token number">8</span>	<span class="token number">3</span>*4<span class="token operator">=</span><span class="token number">12</span>	<span class="token number">4</span>*4<span class="token operator">=</span><span class="token number">16</span>	
<span class="token number">1</span>*5<span class="token operator">=</span><span class="token number">5</span>	<span class="token number">2</span>*5<span class="token operator">=</span><span class="token number">10</span>	<span class="token number">3</span>*5<span class="token operator">=</span><span class="token number">15</span>	<span class="token number">4</span>*5<span class="token operator">=</span><span class="token number">20</span>	<span class="token number">5</span>*5<span class="token operator">=</span><span class="token number">25</span>	
<span class="token number">1</span>*6<span class="token operator">=</span><span class="token number">6</span>	<span class="token number">2</span>*6<span class="token operator">=</span><span class="token number">12</span>	<span class="token number">3</span>*6<span class="token operator">=</span><span class="token number">18</span>	<span class="token number">4</span>*6<span class="token operator">=</span><span class="token number">24</span>	<span class="token number">5</span>*6<span class="token operator">=</span><span class="token number">30</span>	<span class="token number">6</span>*6<span class="token operator">=</span><span class="token number">36</span>	
<span class="token number">1</span>*7<span class="token operator">=</span><span class="token number">7</span>	<span class="token number">2</span>*7<span class="token operator">=</span><span class="token number">14</span>	<span class="token number">3</span>*7<span class="token operator">=</span><span class="token number">21</span>	<span class="token number">4</span>*7<span class="token operator">=</span><span class="token number">28</span>	<span class="token number">5</span>*7<span class="token operator">=</span><span class="token number">35</span>	<span class="token number">6</span>*7<span class="token operator">=</span><span class="token number">42</span>	<span class="token number">7</span>*7<span class="token operator">=</span><span class="token number">49</span>	
<span class="token number">1</span>*8<span class="token operator">=</span><span class="token number">8</span>	<span class="token number">2</span>*8<span class="token operator">=</span><span class="token number">16</span>	<span class="token number">3</span>*8<span class="token operator">=</span><span class="token number">24</span>	<span class="token number">4</span>*8<span class="token operator">=</span><span class="token number">32</span>	<span class="token number">5</span>*8<span class="token operator">=</span><span class="token number">40</span>	<span class="token number">6</span>*8<span class="token operator">=</span><span class="token number">48</span>	<span class="token number">7</span>*8<span class="token operator">=</span><span class="token number">56</span>	<span class="token number">8</span>*8<span class="token operator">=</span><span class="token number">64</span>	
<span class="token number">1</span>*9<span class="token operator">=</span><span class="token number">9</span>	<span class="token number">2</span>*9<span class="token operator">=</span><span class="token number">18</span>	<span class="token number">3</span>*9<span class="token operator">=</span><span class="token number">27</span>	<span class="token number">4</span>*9<span class="token operator">=</span><span class="token number">36</span>	<span class="token number">5</span>*9<span class="token operator">=</span><span class="token number">45</span>	<span class="token number">6</span>*9<span class="token operator">=</span><span class="token number">54</span>	<span class="token number">7</span>*9<span class="token operator">=</span><span class="token number">63</span>	<span class="token number">8</span>*9<span class="token operator">=</span><span class="token number">72</span>	<span class="token number">9</span>*9<span class="token operator">=</span><span class="token number">81</span>	

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.06</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="循环中断-break和continue" tabindex="-1"><a class="header-anchor" href="#循环中断-break和continue" aria-hidden="true">#</a> 循环中断：break和continue</h3><h4 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h4><p>continue关键字用于：中断本次循环，直接进入下一次循环</p><p>continue可以用于：for循环和while循环，效果一致</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    语句<span class="token number">1</span>
    <span class="token keyword">continue</span>
    语句<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在循环内，遇到continue就结束当次循环，进行下一次</li><li>所以，语句2是不会执行的。</li></ul><p>应用场景:</p><p>在循环中，因某些原因，临时结束本次循环。</p><h4 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h4><p>break关键字用于：直接结束循环</p><p>break可以用于：for循环和while循环，效果一致</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    语句<span class="token number">1</span>
    <span class="token keyword">break</span>
    语句<span class="token number">2</span>
语句<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在循环内，遇到oreak就结束循环了</p><p>所以，执行了语句1后，直接执行语句3了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
    04_for循环之break和continue
&quot;&quot;&quot;</span>

<span class="token comment"># continue</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span><span class="token number">8</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----------------------------------------------&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># beark</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\f">\\f</span>or循环语句<span class="token entity" title="\\04">\\04</span>_for循环之break和continue.py&quot;</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">9</span>
-----------------------------------------------
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.06</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for循环综合案例" tabindex="-1"><a class="header-anchor" href="#for循环综合案例" aria-hidden="true">#</a> for循环综合案例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;&quot;
05_for案例之发工资.py
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> random <span class="token keyword">import</span> randint
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    r_num <span class="token operator">=</span> randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> r_num <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;员工:</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">,绩效分:</span><span class="token interpolation"><span class="token punctuation">{</span>r_num<span class="token punctuation">}</span></span><span class="token string">,低于5分,不发工资。&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;员工:</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">,绩效分:</span><span class="token interpolation"><span class="token punctuation">{</span>r_num<span class="token punctuation">}</span></span><span class="token string">,发1000工资。&#39;</span></span><span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\02">\\02</span>_Python入门语法<span class="token entity" title="\\0">\\0</span>9_循环语句<span class="token entity" title="\\f">\\f</span>or循环语句<span class="token entity" title="\\05">\\05</span>_for案例之发工资.py&quot;</span>
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

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.061</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="函数初体验" tabindex="-1"><a class="header-anchor" href="#函数初体验" aria-hidden="true">#</a> 函数初体验</h3><p>函数：是组织好的，可重复使用的，用来实现特定功能的代码段。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token string">&quot;itheima&quot;</span>
length <span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>
<span class="token comment"># 结果为：7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么随时都可以使用len()统计长度？</p><p>因为，len()是Python内置的函数：</p><ul><li>是提前写好的</li><li>可以重复使用</li><li>实现统计长度这一特定功能的代码</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_函数快速体验.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">len_str</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        count <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">return</span> count

str1 <span class="token operator">=</span> <span class="token string">&#39;1234567890qazxsw...&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字符串</span><span class="token interpolation"><span class="token punctuation">{</span>str1<span class="token punctuation">}</span></span><span class="token string">,长度为:</span><span class="token interpolation"><span class="token punctuation">{</span>len_str<span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果：</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\10">\\10</span>_函数<span class="token entity" title="\\01">\\01</span>_函数快速体验.py&quot;</span>
字符串1234567890qazxsw<span class="token punctuation">..</span>.,长度为:19

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.056</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h4><ol><li><p>函数是： 组织好的、可重复使用的、用来实现特定功能的代码段。</p></li><li><p>使用函数的好处是：</p><ul><li><p>将功能封装在函数内，可供随时随地重复利用。</p></li><li><p>提高代码的复用性，减少重复代码，提高开发效率。</p></li></ul></li></ol><h3 id="函数的基础定义语法" tabindex="-1"><a class="header-anchor" href="#函数的基础定义语法" aria-hidden="true">#</a> 函数的基础定义语法</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数的定义：</span>

<span class="token keyword">def</span> 函数名<span class="token punctuation">(</span>传入参数<span class="token punctuation">)</span><span class="token punctuation">:</span>
    函数体
    <span class="token keyword">return</span> 返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数使用步骤：</p><ul><li>先定义函数</li><li>后调用函数</li></ul><p>注意事项：</p><ul><li>参数不需要，可以省略</li><li>返回值不需要，可以省略</li></ul><h3 id="函数的定义练习" tabindex="-1"><a class="header-anchor" href="#函数的定义练习" aria-hidden="true">#</a> 函数的定义练习</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_函数基础定义练习案例.py

    定义一个函数，函数名任意，要求调用函数后可以输出如下欢迎语：
    欢迎来到黑马程序员！
    请出示您的健康码以及72小时核酸证明！
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;
        欢迎来到黑马程序员！
        请出示您的健康码以及72小时核酸证明！
    &#39;&#39;&#39;</span><span class="token punctuation">)</span>

check<span class="token punctuation">(</span><span class="token punctuation">)</span>    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\10">\\10</span>_函数<span class="token entity" title="\\02">\\02</span>_函数基础定义练习案例.py&quot;</span>

        欢迎来到黑马程序员！
        请出示您的健康码以及72小时核酸证明！
        
<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.058</span> seconds        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的传入参数" tabindex="-1"><a class="header-anchor" href="#函数的传入参数" aria-hidden="true">#</a> 函数的传入参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_函数的传入参数.py
    传入参数的功能是：在函数进行计算的时候，接受外部（调用时）提供的数据
&quot;&quot;&quot;</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token operator">+</span>b<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果</span>

<span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\10">\\10</span>_函数<span class="token entity" title="\\03">\\03</span>_函数的传入参数.py&quot;</span>
<span class="token number">1</span>+5<span class="token operator">=</span><span class="token number">6</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.054</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数定义中，提供的a和b,称之为：形式参数（形参），表示函数声明将要使用2个参数</p><ul><li>参数之间使用逗号进行分隔</li></ul><p>函数调用中，提供的1和5，称之为：实际参数（实参），表示函数执行时真正使用的</p><p>参数值</p><ul><li>传入的时候，按照顺序传入数据，使用逗号分隔</li></ul><p>注意：传入参数的数量是不受限制的。</p><ul><li>可以不使用参数</li><li>也可以仅使用任意N个参数</li></ul><h3 id="函数的参数练习案例" tabindex="-1"><a class="header-anchor" href="#函数的参数练习案例" aria-hidden="true">#</a> 函数的参数练习案例</h3><blockquote><p>04_函数的练习案例之自动查核酸 代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_函数的练习案例之自动查核酸.py
    定义一个函数，名称任意，并接受一个参数传入（数字类型，表示体温）
    在函数内进行体温判断（正常范围：小于等于37.5度)，并输出如下内容：

        欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
        体温测量中，您的体温是：37.3度，体温正常请进！

        欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
        体温测量中，您的体温是：39.3度，需要隔离！
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> temperature <span class="token operator">&lt;=</span> <span class="token number">37.5</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;体温测量中，您的体温是：</span><span class="token interpolation"><span class="token punctuation">{</span>temperature<span class="token punctuation">}</span></span><span class="token string">度，体温正常请进！&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;体温测量中，您的体温是：</span><span class="token interpolation"><span class="token punctuation">{</span>temperature<span class="token punctuation">}</span></span><span class="token string">度，需要隔离！&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！&#39;</span><span class="token punctuation">)</span>
check<span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入您的体温:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:37.5
体温测量中，您的体温是：37.5度，体温正常请进！
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:38
体温测量中，您的体温是：38.0度，需要隔离！
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> D:/Python/Python39/python.exe d:/code/py/heima_py/10_函数/04_函数的练习案例之自动查核酸.py
欢迎来到黑马程序员！请出示您的健康码以及72小时核酸证明，并配合测量体温！
请输入您的体温:36
体温测量中，您的体温是：36.0度，体温正常请进！
PS D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>py<span class="token punctuation">\\</span>heima_py<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3><p>参考 <a href="#%E5%87%BD%E6%95%B0%E7%9A%84%E5%9F%BA%E7%A1%80%E5%AE%9A%E4%B9%89%E8%AF%AD%E6%B3%95">函数的基础定义语法 </a> 之 <strong>函数的定义</strong> 。</p><h3 id="函数返回值之none" tabindex="-1"><a class="header-anchor" href="#函数返回值之none" aria-hidden="true">#</a> 函数返回值之None</h3><h4 id="none类型" tabindex="-1"><a class="header-anchor" href="#none类型" aria-hidden="true">#</a> None类型</h4><p>思考：如果函数没有使用return语句返回数据，那么函数有返回值吗？</p><p>实际上是：有的。</p><p>Python中有一个特殊的字面量：None,其类型是：&lt;class&#39;NoneType&#39;&gt;</p><p>无返回值的函数，实际上就是返回了：None这个字面量。</p><p>None表示：空的、无实际意义的意思。</p><p>函数返回的None,就表示，这个函数没有返回什么有意义的内容。</p><p>也就是返回了空的意思。</p><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_函数返回类型None.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token punctuation">{</span>b<span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span>a<span class="token operator">+</span>b<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

add_result <span class="token operator">=</span> add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;add函数返回结果、类型:</span><span class="token interpolation"><span class="token punctuation">{</span>add_result<span class="token punctuation">}</span></span><span class="token string">、</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>add_result<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 在if中 None 等于 False</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> add_result<span class="token punctuation">:</span> <span class="token comment"># 非空（非 None）走这里</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取到结果为空&#39;</span></span><span class="token punctuation">)</span>    
<span class="token keyword">else</span><span class="token punctuation">:</span> <span class="token comment"># 空（None）的话走这里</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取到结果为:</span><span class="token interpolation"><span class="token punctuation">{</span>add_result<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\10">\\10</span>_函数<span class="token entity" title="\\05">\\05</span>_函数返回类型None.py&quot;</span>
<span class="token number">1</span>+5<span class="token operator">=</span><span class="token number">6</span>
add函数返回结果、类型:None、<span class="token operator">&lt;</span>class <span class="token string">&#39;NoneType&#39;</span><span class="token operator">&gt;</span>
获取到结果为空

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.073</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于声明无内容的变量上</p><ul><li><p>定义变量，但暂时不需要变量有具体值，可以用None来代替</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 暂不赋予变量具体值</span>
name <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="函数的说明文档" tabindex="-1"><a class="header-anchor" href="#函数的说明文档" aria-hidden="true">#</a> 函数的说明文档</h3><p>函数是纯代码语言，想要理解其含义，就需要一行行的去阅读理解代码，效率比较</p><p>低。</p><p>我们可以给函数添加说明文档，辅助理解函数的作用。</p><p>语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    函数说明
    :param x: 形参x的说明
    :param y: 形参y的说明
    :return: 返回值的说明
    &quot;&quot;&quot;</span>
    函数体
    <span class="token keyword">return</span> 返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过多行注释的形式，对函数进行说明解释</p><ul><li>内容应写在函数体之前</li></ul><p>vs code将鼠标悬停在add()调用方法上，可以看到注释内容。</p><figure><img src="`+g+`" alt="vscode显示注释内容" tabindex="0" loading="lazy"><figcaption>vscode显示注释内容</figcaption></figure><ul><li>：param用来解释参数</li><li>：return用来解释返回值</li></ul><h3 id="函数的嵌套使用" tabindex="-1"><a class="header-anchor" href="#函数的嵌套使用" aria-hidden="true">#</a> 函数的嵌套使用</h3><p>什么是函数的嵌套？</p><p>所谓函数嵌套调用指的是一个函数里面又调用了另外一个函数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--2--&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">func_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;---1---&quot;</span><span class="token punctuation">)</span>
    func_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;--3--&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#调用函数func_a</span>
func_a<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xshell line-numbers-mode" data-ext="xshell"><pre class="language-xshell"><code>[Running] set PYTHONIOENCODING=utf8 &amp;&amp; python -u &quot;d:\\code\\py\\heima_py\\10_函数\\07_函数的嵌套使用.py&quot;
---1---
--2--
--3--

[Done] exited with code=0 in 0.058 seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>什么是嵌套调用 ？</p><p>在一个函数中，调用另外一个函数</p></li><li><p>执行流程 ？</p><p>函数A中执行到调用函数B的语句，会将函数B全部执行完成后，继续执行函数A的剩余内容。</p></li></ol><h3 id="变量在函数中的作用域" tabindex="-1"><a class="header-anchor" href="#变量在函数中的作用域" aria-hidden="true">#</a> 变量在函数中的作用域</h3><h4 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h4><p>变量作用域指的是变量的作用范围（变量在哪里可用，在哪里不可用）</p><p>主要分为两类：局部变量和全局变量</p><p>所谓局部变量是定义在函数体内部的变量，即只在函数体内部生效。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">testA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span><span class="token number">100</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

testA<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment"># 报错：NameError: name &#39;num&#39; is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量a是定义在\`testA函数内部的变量，在函数外部访问则立即报错。</p><h4 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h4><p>所谓全局变量，指的是在函数体内、外都能生效的变量</p><p>思考：如果有一个数据，在函数A和函数B中都要使用，该怎么办？</p><p>答：将这个数据存储在一个全局变量里面。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 全局变量</span>
num2 <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">def</span> <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">testb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>

testa<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 100</span>
testb<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 100  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="global-关键字" tabindex="-1"><a class="header-anchor" href="#global-关键字" aria-hidden="true">#</a> global 关键字</h4><p>使用 <strong>global</strong> 关键字可以在函数内部声明变量为全局变量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 局部变量</span>
<span class="token keyword">def</span> <span class="token function">testA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用 global 关键字，就不会出现局部变量，函数外使用报错</span>
    <span class="token keyword">global</span> num
    num <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

testA<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment"># 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h4><ol><li><p>什么是局部变量？</p><p>作用范围在函数内部，在函数外部无法使用</p></li><li><p>什么是全局变量？</p><p>在函数内部和外部均可使用</p></li><li><p>如何将函数内定义的变量声明为全局变量 ？</p><ul><li>使用<strong>global</strong>关键字，变量声明为全局变量。</li></ul></li></ol><h3 id="函数的综合案例" tabindex="-1"><a class="header-anchor" href="#函数的综合案例" aria-hidden="true">#</a> 函数的综合案例</h3><blockquote><p>黑马ATM 代码:</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
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

&quot;&quot;&quot;</span>

money <span class="token operator">=</span> <span class="token number">5000000</span>
name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入姓名:&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">query_balance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
        查询余额函数
        输出当前余额
    &#39;&#39;&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;当前银行卡余额为：</span><span class="token interpolation"><span class="token punctuation">{</span>money<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fund</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
        存款函数
        : param amount: 金额(整数)
        : return money: 返回余额
    &#39;&#39;&#39;</span>
    <span class="token keyword">global</span> money
    money <span class="token operator">+=</span> amount
    <span class="token keyword">return</span> money

<span class="token keyword">def</span> <span class="token function">withdrawal</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
        取款函数
        : param amount: 金额(整数)
        : return: money: 返回余额
    &#39;&#39;&#39;</span>
    <span class="token keyword">global</span> money
    money <span class="token operator">-=</span> amount
    <span class="token keyword">return</span> money

<span class="token comment">#  主菜单函数 </span>
<span class="token keyword">def</span> <span class="token function">main_menu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
        主菜单函数
    &#39;&#39;&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;&#39;&#39;
        </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">，欢迎您来到黑马ATM，请选择：
        主菜单：1(查询余额)、2（存款）、3（取款）、4（退出）
    &#39;&#39;&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    main_menu<span class="token punctuation">(</span><span class="token punctuation">)</span>
    ops <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入操作:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ops <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token keyword">or</span> ops <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;不合法的操作，即将退出程序...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">elif</span> ops <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;程序即将退出...&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> ops <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
            fund<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入存款金额（整数）:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> ops <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
            amount <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入取款金额（整数）:&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> amount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;这个金额（</span><span class="token interpolation"><span class="token punctuation">{</span>amount<span class="token punctuation">}</span></span><span class="token string">）不合法,取款失败&#39;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">elif</span> amount <span class="token operator">&gt;</span> money<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;金额超出,取款失败&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                withdrawal<span class="token punctuation">(</span>amount<span class="token punctuation">)</span>
        query_balance<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数进阶" tabindex="-1"><a class="header-anchor" href="#函数进阶" aria-hidden="true">#</a> 函数进阶</h2><h3 id="函数的多种返回值" tabindex="-1"><a class="header-anchor" href="#函数的多种返回值" aria-hidden="true">#</a> 函数的多种返回值</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01函数的多返回值.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">test_return</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span>

x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> test_return<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;x=</span><span class="token interpolation"><span class="token punctuation">{</span>x<span class="token punctuation">}</span></span><span class="token string">, y=</span><span class="token interpolation"><span class="token punctuation">{</span>y<span class="token punctuation">}</span></span><span class="token string">, z=</span><span class="token interpolation"><span class="token punctuation">{</span>z<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># x=1, y=2, z=3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照返回值的顺序，写对应顺序的多个变量接收即可</p><p>变量之间用逗号隔开</p><p>支持不同类型的数据 return</p><h3 id="函数多种传参方式" tabindex="-1"><a class="header-anchor" href="#函数多种传参方式" aria-hidden="true">#</a> 函数多种传参方式</h3><h4 id="函数参数种类" tabindex="-1"><a class="header-anchor" href="#函数参数种类" aria-hidden="true">#</a> 函数参数种类</h4><p>使用方式上的不同，函数有4种常见参数使用方式：</p><ul><li><p>位置参数：调用函数时根据函数定义的参数位置来传递参数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_函数的参数种类.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">user_info</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的名字是</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">,年龄是:</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">,性别是:</span><span class="token interpolation"><span class="token punctuation">{</span>gender<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 1.位置参数</span>
user_info<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：传递的参数和定义的参数的顺序及个数必须一致。</p></li><li><p>关键字参数：函数调用时通过&quot;键=值&quot;形式传递了参数。</p><p>作用：可以让函数更加清晰、容易使用，同时也清除了参数的顺序需求。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">user_info</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的名字是</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">,年龄是:</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">,性别是:</span><span class="token interpolation"><span class="token punctuation">{</span>gender<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    
<span class="token comment"># 2. 关键字参数,不必注意顺序</span>
user_info<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;李四1&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># 位置参数和关键字参数混用</span>
user_info<span class="token punctuation">(</span><span class="token string">&quot;李四2&quot;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：函数调用时，如果有位置参数时，位置参数必须在关键字参数的前面，但关键字参数之间不存先后顺序。</p></li><li><p>缺省参数：缺省参数也叫默认参数，用于定义函数，为参数提供默认值，调用函 数时可不传该默认参数的值（注意：所有位置参数必须出现在默认参数前，包括、函数定义和调用)。</p><p>作用：当调用函数时没有传递参数，就会使用默认是用缺省参数对应的值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 3. 缺省参数</span>
<span class="token keyword">def</span> <span class="token function">user_info1</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;您的名字是</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">,年龄是:</span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">,性别是:</span><span class="token interpolation"><span class="token punctuation">{</span>gender<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

user_info1<span class="token punctuation">(</span><span class="token string">&#39;赵六1&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token comment"># 您的名字是赵六1,年龄是:22,性别是:男</span>
user_info1<span class="token punctuation">(</span><span class="token string">&#39;赵六2&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 您的名字是赵六2,年龄是:21,性别是:女  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：函数调用时，如果为缺省参数传值则修改默认参数值，否则使用这个默认值。</p></li><li><p>不定长参数：不定长参数也叫可变参数，用于不确定调用的时候会传递多少个参 数（不传参也可以）的场景。</p><p>作用：当调用函数时不确定参数个数时，可以使用不定长参数。</p><p>不定长参数的类型：</p><ol><li><p>位置传递</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 4. 不定长参数</span>
<span class="token comment"># 4.1 位置传递不定长参数</span>
<span class="token keyword">def</span> <span class="token function">user_info2</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>

user_info2<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span> <span class="token comment"># (&#39;张三&#39;, 18, &#39;女&#39;)</span>
user_info2<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># (1,)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传进的所有参数都会被args变量收集，它会根据传进参数的位置合并为一个元组(tuple),args是元组类型，这就是位置传递。</p></li><li><p>关键字传递</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 4.2 关键字传递的不定长</span>
<span class="token keyword">def</span> <span class="token function">user_info3</span><span class="token punctuation">(</span><span class="token operator">**</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>

user_info3<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span> <span class="token comment"># {&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 16, &#39;gender&#39;: &#39;男&#39;}</span>
user_info3<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">111</span><span class="token punctuation">)</span> <span class="token comment"># {&#39;id&#39;: 111}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：参数是“键=值”形式的形式的情况下，所有的“键=值”都会被args接受，同时会根据“键=值”组成字典。</p></li></ol></li></ul><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3><h4 id="函数作为参数传递" tabindex="-1"><a class="header-anchor" href="#函数作为参数传递" aria-hidden="true">#</a> 函数作为参数传递</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_函数作为参数传递.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x<span class="token operator">+</span>y

<span class="token keyword">def</span> <span class="token function">call1</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> add<span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

<span class="token keyword">def</span> <span class="token function">call2</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span>    

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;1+2=</span><span class="token interpolation"><span class="token punctuation">{</span>call1<span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 1+2=3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;6+2=</span><span class="token interpolation"><span class="token punctuation">{</span>call1<span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 6+2=8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>函数本身是可以作为参数，传入另一个函数中进行使用的。</li><li>将函数传入的作用在于：传入计算逻辑而非传入数据。</li></ol><h4 id="lambda匿名函数" tabindex="-1"><a class="header-anchor" href="#lambda匿名函数" aria-hidden="true">#</a> lambda匿名函数</h4><p>有名称的函数，可以基于名称重复使用</p><p>无名称( <strong>lamdba</strong> )的匿名函数，只可临时使用一次。</p><p>匿名函数定义语法：</p><p>lambda传入参数：函数体（一行代码）</p><ul><li>lambda是关键字，表示定义匿名函数</li><li>传入参数表示匿名函数的形式参数，如：x,y表示接收2个形式参数</li><li>函数体，就是函数的执行逻辑，要注意：只能写一行，无法写多行代码 \\</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_lamdba匿名函数.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;6+6=</span><span class="token interpolation"><span class="token punctuation">{</span>call<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> x<span class="token operator">+</span>y<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 6+6=12 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义的函数功能完全一致，只是lambda关键字定义的函数是匿名的，无法二次使用。</p><h2 id="数据容器" tabindex="-1"><a class="header-anchor" href="#数据容器" aria-hidden="true">#</a> 数据容器</h2><p>Python中的数据容器：</p><p>一种可以容纳多份数据的数据类型，容纳的每一份数据称之为1个元素</p><p>每一个元素，可以是任意类型的数据，如字符串、数字、布尔等。</p><p>数据容器根据特点的不同，如：</p><ul><li>是否支持重复元素</li><li>是否可以修改</li><li>是否有序，等</li></ul><p>分为5类，分别是：</p><p>列表(list)、元组(tuple)、字符串(str)、集合(set)、字典(dict)</p><h3 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表" aria-hidden="true">#</a> list（列表）</h3>`,291),dn={href:"http://runoob.com",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://www.runoob.com/python/python-",target:"_blank",rel:"noopener noreferrer"},vn=a(`<h4 id="列表-list-基础语法" tabindex="-1"><a class="header-anchor" href="#列表-list-基础语法" aria-hidden="true">#</a> 列表(list)基础语法</h4><blockquote><p>基础语法：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 字面量</span>
<span class="token punctuation">[</span>元素<span class="token number">1</span><span class="token punctuation">,</span> 元素<span class="token number">2</span><span class="token punctuation">,</span> 元素<span class="token number">3</span><span class="token punctuation">,</span>元素<span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>

<span class="token comment"># 定义变量</span>
变量名称 <span class="token operator">=</span> <span class="token punctuation">[</span>元素<span class="token number">1</span><span class="token punctuation">,</span> 元素<span class="token number">2</span><span class="token punctuation">,</span>元素<span class="token punctuation">,</span> 元素<span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>

<span class="token comment"># 定义空列表</span>
变量名称 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
变量名称 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表内的每一个数据，称之为元素</p><ul><li>以 [] 作为标识</li><li>列表内每一个元素之间用，逗号隔开</li></ul><blockquote><p>01_list(列表)的定义方式 代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_list(列表)的定义方式.py
&quot;&quot;&quot;</span>

my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赵六&#39;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token number">1.11</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;name_list type = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 定义一个嵌套列表</span>
my_list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;嵌套list = </span><span class="token interpolation"><span class="token punctuation">{</span>my_list2<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;嵌套list type = </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\list<span class="token entity" title="\\01">\\01</span>_list(列表)的定义方式.py&quot;</span>
<span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span>, <span class="token string">&#39;李四&#39;</span>, <span class="token string">&#39;王五&#39;</span>, <span class="token string">&#39;赵六&#39;</span>, <span class="token number">666</span>, <span class="token number">1.11</span>, False<span class="token punctuation">]</span>
name_list <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>class <span class="token string">&#39;list&#39;</span><span class="token operator">&gt;</span>
嵌套list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span>, <span class="token string">&#39;李四&#39;</span>, <span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span>, <span class="token number">222</span>, True<span class="token punctuation">]</span><span class="token punctuation">]</span>
嵌套list <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>class <span class="token string">&#39;list&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.062</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><p>列表的定义语法</p><p>[元素1, 元素2, 元素3, ......]</p></li><li><p>什么是元素？</p><p>数据容器内的每一份数据，都称之为元素。</p></li><li><p>元素的类型有限制吗？</p><p>元素的数据类型没有任何限制，甚至元素也可以是列表，这样就定义了嵌套列表。</p></li></ol><h4 id="列表-list-的下表索引" tabindex="-1"><a class="header-anchor" href="#列表-list-的下表索引" aria-hidden="true">#</a> 列表(list)的下表索引</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_list(列表)的下标索引.py
&quot;&quot;&quot;</span>

my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
my_list2 <span class="token operator">=</span> <span class="token punctuation">[</span>my_list<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># 获取 my_list 下标为0的索引数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 1</span>

<span class="token comment">#  获取 my_list2 下标为0的索引数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># [1, 2, 3, 4, 5]</span>

<span class="token comment"># 获取  my_list2 下标为1的索引数据里的c</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;------------倒叙--------------&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 获取倒叙数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-------------正序-------------&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 获取正序数据</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\list<span class="token entity" title="\\02">\\02</span>_list(列表)的下标索引.py&quot;</span>
<span class="token number">1</span>
<span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span><span class="token punctuation">]</span>
c
------------倒叙--------------
<span class="token number">5</span>
<span class="token number">4</span>
<span class="token number">3</span>
-------------正序-------------
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.07</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><p>列表的下标索引是什么？</p><p>列表的每一个元素都有编号称之为下标索引。</p><p>从前向后的方向，编号从0开始递增。</p><p>从后向前的方向，编号从-1开始递减。</p></li><li><p>如何通过下标索引取出对应位置的元素呢？</p><p>列表下标]，即可取出。</p></li><li><p>下标索引的注意事项：</p><p>要注意下标索引的取值范围，超出范围无法取出元素，并且会报错。</p></li></ol><h4 id="列表-list-常用的操作方法" tabindex="-1"><a class="header-anchor" href="#列表-list-常用的操作方法" aria-hidden="true">#</a> 列表(list)常用的操作方法</h4><p>列表除了可以：</p><ul><li>定义</li><li>使用下标索引获取值</li></ul><p>以外，列表也提供了一系列功能：</p><ul><li>插入元素</li><li>删除元素</li><li>清空列表</li><li>修改元素</li><li>统计元素个数</li></ul><p>等等功能，这些功能我们都称之为：列表的方法</p><figure><img src="`+h+`" alt="列表的常用方法" tabindex="0" loading="lazy"><figcaption>列表的常用方法</figcaption></figure><p>回忆：函数是一个封装的代码单元，可以提供特定功能。</p><p>在Python中，如果将函数定义为class(类)的成员，那么函数会称之为：方法</p><blockquote><p>函数：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    	<span class="token keyword">return</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法和函数功能一样，有传入参数，有返回值，只是方法的使用格式不同：</p><ul><li><p>函数的使用：</p><p>num = add(1,2)</p></li><li><p>方法的使用：</p><p>student = Student()</p><p>num = student.add(1,2)</p></li></ul><h5 id="列表的查询功能" tabindex="-1"><a class="header-anchor" href="#列表的查询功能" aria-hidden="true">#</a> 列表的查询功能</h5><ul><li><p>查找某元素的下标</p><p>功能：查找指定元素在列表的下标，如果找不到，报错ValueError</p><p>语法：列表.index(元素)</p><p>index就是列表对象（变量）内置的方法（函数）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 获取 a 在列表的下标</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h5 id="列表的修改方法" tabindex="-1"><a class="header-anchor" href="#列表的修改方法" aria-hidden="true">#</a> 列表的修改方法</h5><h6 id="修改特定位置-索引-的元素值" tabindex="-1"><a class="header-anchor" href="#修改特定位置-索引-的元素值" aria-hidden="true">#</a> 修改特定位置（索引）的元素值</h6><p>语法：</p><pre><code>列表[下标] = 值
</code></pre><p>可以使用如上语法，直接对指定下标（正向、反向下标均可）的值进行：</p><p>重新赋值（修改）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># 修改指定下标的值</span>
my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;aaa&#39;</span>
my_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;d&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span> <span class="token comment"># [&#39;aaa&#39;, &#39;b&#39;, &#39;d&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="插入元素" tabindex="-1"><a class="header-anchor" href="#插入元素" aria-hidden="true">#</a> 插入元素</h6><p>语法：列表.insert(下标，元素)，在指定的下标位置，插入指定的元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 插入一个元素</span>
my_list_wait_insert <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
my_list_wait_insert<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_insert<span class="token punctuation">)</span> <span class="token comment"># [1, &#39;aaa&#39;, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="追加元素" tabindex="-1"><a class="header-anchor" href="#追加元素" aria-hidden="true">#</a> 追加元素</h6><p>方式1：</p><p>语法：列表.append(元素)，将指定元素，追加到列表的尾部。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 追加一个元素</span>
<span class="token comment"># 方式1</span>
my_list_wait_append1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ccc&#39;</span><span class="token punctuation">]</span>
my_list_wait_append1<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_append1<span class="token punctuation">)</span> <span class="token comment"># [&#39;a&#39;, 1, 2, &#39;ccc&#39;, [111, 112]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：</p><p>语法：列表.extend(其它数据容器)，将其它数据容器的内容取出，依次追加到列表尾部。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 追加一个元素</span>
<span class="token comment"># 方式2</span>
my_list_wait_append2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ccc&#39;</span><span class="token punctuation">]</span>
my_list_wait_append2<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">223</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_append2<span class="token punctuation">)</span> <span class="token comment"># [&#39;a&#39;, 1, 2, &#39;ccc&#39;, 222, 223]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>两种追加方式效果不一样，append()是将元素作为一个整体，而extend()是将参数list进行拆分后追加到list中。</p><h6 id="删除元素" tabindex="-1"><a class="header-anchor" href="#删除元素" aria-hidden="true">#</a> 删除元素</h6><p>语法1：del 列表[下标]</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 删除元素</span>
my_list_wait_remove1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># 方式1</span>
<span class="token keyword">del</span> my_list_wait_remove1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_remove1<span class="token punctuation">)</span> <span class="token comment"># [2, &#39;a&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法2：列表.pop(下标)</p><p>pop()会返回移除的值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 删除元素</span>
my_list_wait_remove2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># 方式2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_remove2<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_remove2<span class="token punctuation">)</span> <span class="token comment">#[2, &#39;a&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法3：删除某元素在列表中的第一个匹配项：列表.remove(元素)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 删除元素</span>
my_list_wait_remove3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># 方式3</span>
my_list_wait_remove3<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_remove3<span class="token punctuation">)</span> <span class="token comment"># [1, 2, &#39;a&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="清空列表内容" tabindex="-1"><a class="header-anchor" href="#清空列表内容" aria-hidden="true">#</a> 清空列表内容</h6><p>语法：列表.clear()</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 清空列表内容</span>
my_list_wait_clear <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>
my_list_wait_clear<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_clear<span class="token punctuation">)</span> <span class="token comment"># []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="统计某元素在列表内的数量" tabindex="-1"><a class="header-anchor" href="#统计某元素在列表内的数量" aria-hidden="true">#</a> 统计某元素在列表内的数量</h5><p>语法：列表.count(元素)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 统计某元素在列表内的数量</span>
my_list_wait_count <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_count<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5,因为True等于1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list_wait_count<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="统计列表中有多少元素" tabindex="-1"><a class="header-anchor" href="#统计列表中有多少元素" aria-hidden="true">#</a> 统计列表中有多少元素</h5><p>语法：len(列表)</p><p>可以得到一个int数字，表示列表内的元素数量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 统计列表中有多少元素</span>
my_list_wait_len <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_list_wait_len<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表的特点" tabindex="-1"><a class="header-anchor" href="#列表的特点" aria-hidden="true">#</a> 列表的特点</h4><p>经过上述对列表的学习，可以总结出列表有如下特点：</p><ul><li>可以容纳多个元素（上限为2**63-1、9223372036854775807个）</li><li>可以容纳不同类型的元素（混装）</li><li>数据是有序存储的（有下标序号）</li><li>允许重复数据存在</li><li>可以修改（增加或删除元素等）</li></ul><h4 id="列表的循环遍历" tabindex="-1"><a class="header-anchor" href="#列表的循环遍历" aria-hidden="true">#</a> 列表的循环遍历</h4><h5 id="while-循环遍历list" tabindex="-1"><a class="header-anchor" href="#while-循环遍历list" aria-hidden="true">#</a> while 循环遍历list</h5><p>既然数据容器可以存储多个元素，那么，就会有需求从容器内依次取出元素进行操作。</p><p>将容器内的元素依次取出进行处理的行为，称之为：遍历、迭代。</p><p>如何遍历列表的元素呢？</p><ul><li>可以使用前面学过的vhile循环</li></ul><p>如何在循环中取出列表的元素呢？</p><ul><li>使用列表[下标]的方式取出</li></ul><p>循环条件如何控制？</p><ul><li>定义一个变量表示下标，从0开始</li><li>循环条件为下标值&lt;列表的元素数量</li></ul><blockquote><p>while 循环遍历list</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_list(列表)的循环遍历.py
&quot;&quot;&quot;</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">while_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    list_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span>
    index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> index <span class="token operator">&lt;</span> list_len <span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;index:</span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">, 值为:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">list</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        index <span class="token operator">+=</span><span class="token number">1</span>

while_func<span class="token punctuation">(</span><span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\list<span class="token entity" title="\\05">\\05</span>_list(列表)的循环遍历.py&quot;</span>
index:0, 值为:1
index:1, 值为:2
index:2, 值为:3
index:3, 值为:a

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.059</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="for-循环遍历list" tabindex="-1"><a class="header-anchor" href="#for-循环遍历list" aria-hidden="true">#</a> for 循环遍历list</h5><p>除了while循环外，Python中还有另外一种循环形式：for循环。</p><p>对比while,for循环更加适合对列表等数据容器进行遍历。</p><blockquote><p>for 循环遍历list</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_list(列表)的循环遍历.py
&quot;&quot;&quot;</span>

<span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>      

<span class="token keyword">def</span> <span class="token function">for_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;值为:</span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

for_func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\list<span class="token entity" title="\\05">\\05</span>_list(列表)的循环遍历.py&quot;</span>
值为:1
值为:2
值为:3
值为:a

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.06</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从容器内，依次取出元素并赋值到临时变量上。</p><p>在每一次的循环中，我们可以对临时变量（元素）进行处理。</p><h5 id="while-循环和for-循环的对比" tabindex="-1"><a class="header-anchor" href="#while-循环和for-循环的对比" aria-hidden="true">#</a> while 循环和for 循环的对比</h5><p>while循环和for循环，都是循环语句，但细节不同：</p><ul><li><p>在循环控制上：</p><ul><li>while 循环可以自定循环条件，并自行控制</li><li>for 循环不可以自定循环条件，只可以一个个从容器内取出数据</li></ul></li><li><p>在无限循环上：</p><ul><li>while 循环可以通过条件控制做到无限循环</li><li>for 循环理论上不可以，因为被遍历的容器容量不是无限的</li></ul></li><li><p>在使用场景上：</p><ul><li>while 循环适用于任何想要循环的场景</li><li>for 循环适用于，遍历数据容器的场景或简单的固定次数循环场景</li></ul></li></ul><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3><h4 id="元组的定义和操作" tabindex="-1"><a class="header-anchor" href="#元组的定义和操作" aria-hidden="true">#</a> 元组的定义和操作</h4><p>为什么需要元组？</p><p>​ 思考：列表是可以修改的。</p><p>​ 如果想要传递的信息，不被篡改，列表就不合适了。</p><p>​ 元组同列表一样，都是可以封装多个、不同类型的元素在内。</p><p>​ 但最大的不同点在于：</p><p>​ 元组一旦定义完成，就不可修改</p><p>​ 所以，当我们需要在程序内封装数据，又不希望封装的数据被篡改，那么元组就非常合适了。</p><h5 id="定义元组" tabindex="-1"><a class="header-anchor" href="#定义元组" aria-hidden="true">#</a> 定义元组</h5><p>元组定义：定义元组使用小括号，且使用逗号隔开各个数据，数据可以是不同的数据类型。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_定义元组和操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 定义元组字面量</span>
<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 定义元组变量</span>
tuples1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 定义空元组</span>
tuples2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 方式1</span>
tuples3 <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 方式2</span>

<span class="token comment"># 元组的嵌套</span>
tuples4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;nnnn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;tuples4 = </span><span class="token interpolation"><span class="token punctuation">{</span>tuples4<span class="token punctuation">}</span></span><span class="token string">, type = </span><span class="token interpolation"><span class="token punctuation">{</span>tye<span class="token punctuation">(</span>tuples4<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\元组<span class="token entity" title="\\01">\\01</span>_定义元组.py&quot;</span>
tuples4 <span class="token operator">=</span> <span class="token variable"><span class="token punctuation">((</span>&#39;a&#39;<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>&#39;nnnn&#39;<span class="token punctuation">,</span> &#39;m&#39;<span class="token punctuation">))</span></span>, <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>class <span class="token string">&#39;tuple&#39;</span><span class="token operator">&gt;</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.056</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="元组操作" tabindex="-1"><a class="header-anchor" href="#元组操作" aria-hidden="true">#</a> 元组操作</h5><figure><img src="`+y+`" alt="元组相关操作" tabindex="0" loading="lazy"><figcaption>元组相关操作</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tuples4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;nnnn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># 下标索引取值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tuples4<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># a</span>

<span class="token comment"># index查找方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tuples4<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>

<span class="token comment"># count 统计</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tuples4<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>

<span class="token comment"># len 长度获取</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>tuples4<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 5</span>

<span class="token comment"># 元组的遍历</span>
<span class="token comment"># while 遍历</span>
tuples4_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>tuples4<span class="token punctuation">)</span>
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> tuples4_len <span class="token operator">&gt;</span> index<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;while 遍历,当前index=</span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">,value=</span><span class="token interpolation"><span class="token punctuation">{</span>tuples4<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
    while 遍历,当前index=0,value=(&#39;a&#39;, 1)
    while 遍历,当前index=1,value=2
    while 遍历,当前index=2,value=(&#39;nnnn&#39;, &#39;m&#39;)
    while 遍历,当前index=3,value=False
    while 遍历,当前index=4,value=2
&#39;&#39;&#39;</span>

<span class="token comment"># for 遍历</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> tuples4<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;for 遍历,当前value=</span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
    for 遍历,当前value=(&#39;a&#39;, 1)
    for 遍历,当前value=2
    for 遍历,当前value=(&#39;nnnn&#39;, &#39;m&#39;)
    for 遍历,当前value=False
    for 遍历,当前value=2
&#39;&#39;&#39;</span>    

<span class="token comment"># 修改元素内容，元组不支持修改内容，但是元组内的列表可以</span>
tuples5 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;nnnn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tuples5<span class="token punctuation">)</span> <span class="token comment"># ((&#39;a&#39;, 1), 2, [&#39;nnnn&#39;, &#39;m&#39;], False, 2)</span>
<span class="token comment"># tuples5[-1] = 3 # TypeError: &#39;tuple&#39; object does not support item assignment</span>
tuples5<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
tuples5<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;ccc&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tuples5<span class="token punctuation">)</span> <span class="token comment"># ((&#39;a&#39;, 1), 2, [&#39;abc&#39;, &#39;ccc&#39;], False, 2)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h4 id="元组的特点" tabindex="-1"><a class="header-anchor" href="#元组的特点" aria-hidden="true">#</a> 元组的特点</h4><p>经过上述对元组的学习，可以总结出列表有如下特点：</p><ul><li>可以容纳多个数据</li><li>可以容纳不同类型的数据（混装)</li><li>数据是有序存储的（下标索引）</li><li>允许重复数据存在</li><li>不可以修改（增加或删除元素等）</li><li>支持for循环</li></ul><p>多数特性和 list 一致，不同点在于不可修改的特性。</p><h4 id="字符串的定义和操作" tabindex="-1"><a class="header-anchor" href="#字符串的定义和操作" aria-hidden="true">#</a> 字符串的定义和操作</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_字符串的定义和操作.py
&quot;&quot;&quot;</span>

my_str <span class="token operator">=</span> <span class="token string">&quot;qazxswedc1234567890q&quot;</span>

<span class="token comment"># 通过下标索引取值</span>
value1 <span class="token operator">=</span> my_str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
value2 <span class="token operator">=</span> my_str<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
value3 <span class="token operator">=</span> my_str<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># 打印结果：字符串 my_str 的0下标值是:q, 2下标值是z, -1下标值是:0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字符串 my_str 的0下标值是:</span><span class="token interpolation"><span class="token punctuation">{</span>value1<span class="token punctuation">}</span></span><span class="token string">, 2下标值是</span><span class="token interpolation"><span class="token punctuation">{</span>value2<span class="token punctuation">}</span></span><span class="token string">, -1下标值是:</span><span class="token interpolation"><span class="token punctuation">{</span>value3<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># index方法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 0</span>

<span class="token comment"># replace,将指定元素替换为其它值并返回，不影响原始字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># mazxswedc1234567890m</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">)</span> <span class="token comment"># qazxswedc1234567890q</span>

<span class="token comment"># split, 将字符串从指定元素进行分割为多个字符串组合为list并返回，不影响原字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># [&#39;&#39;, &#39;azxswedc1234567890&#39;, &#39;&#39;]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">)</span> <span class="token comment"># qazxswedc1234567890q</span>

<span class="token comment"># strip, 去除空格和table等符号并返回新的字符串，不影响原始字符串</span>
my_str1 <span class="token operator">=</span> <span class="token string">&quot; qazxswedc1234567890q    &quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str1<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># qazxswedc1234567890q</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str1<span class="token punctuation">)</span><span class="token comment">#  qazxswedc1234567890q    (这里有table)</span>

<span class="token comment"># 统计字符串中某字符的出现次数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_str<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 2</span>

<span class="token comment"># 统计字符串的长度</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串的特点" tabindex="-1"><a class="header-anchor" href="#字符串的特点" aria-hidden="true">#</a> 字符串的特点</h4><p>作为数据容器，字符串有如下特点：</p><ul><li>只可以存储字符串</li><li>长度任意（取决于内存大小）</li><li>支持下标索引</li><li>允许重复字符串存在</li><li>不可以修改（增加或删除元素等）</li><li>支持for循环</li></ul><h3 id="序列" tabindex="-1"><a class="header-anchor" href="#序列" aria-hidden="true">#</a> 序列</h3><p>序列是指：内容连续、有序，可使用下标索引的一类数据容器</p><p><strong>列表、元组、字符串，均可以可以视为序列。</strong></p><figure><img src="`+_+`" alt="序列描述" tabindex="0" loading="lazy"><figcaption>序列描述</figcaption></figure><h4 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h4><p>序列支持切片，即：列表、元组、字符串，均支持进行切片操作。</p><p>切片：从一个序列中，取出一个子序列。</p><p>语法：序列[起始下标：结束下标：步长]</p><p>表示从序列中，从指定位置开始，依次取出元素，到指定位置结束，得到一个新序列：</p><ul><li>起始下标表示从何处开始，可以留空，留空视作从头开始</li><li>结束下标（不含）表示何处结束，可以留空，留空视作截取到结尾</li><li>步长表示，依次取元素的间隔 <ul><li>步长1表示，一个个取元素</li><li>步长2表示，每次跳过1个元素取</li><li>步长N表示，每次跳过N-1个元素取</li><li>步长为负数表示，反向取（注意，起始下标和结束下标也要反向标记）</li></ul></li></ul><p>注意：切片操作并不会影响序列本身，而是会返回一个新的序列。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_序列的切片操作.py
起始和结束不写表示从头到尾，步长为1可以省略,例如: my_str1[:]
如果步长是负数，起始和结束得反过来才可以取到值
&quot;&quot;&quot;</span>

<span class="token comment"># 对list进行切片，从1开始，4结束，步长1(步长默认为1可以不写)</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;对list进行切片，从1开始，4结束，步长1 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token format-spec"> 4]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 对tuple进行切片，从头开始，到最后结束，步长1(起始和结束不写表示从头到尾，步长为1可以省略)</span>
my_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;对tuple.进行切片，从头开始，到最后结束，步长1 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_tuple<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token format-spec">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 对str进行切片，从头开始，到最后结束，步长2</span>
my_str1 <span class="token operator">=</span> <span class="token string">&#39;abcdefg1234567890&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;对str进行切片，从头开始，到最后结束，步长2 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_str1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token format-spec">2]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 对str进行切片，从头开始，到最后结束，步长-1</span>
my_str2 <span class="token operator">=</span> <span class="token string">&#39;abcdefg1234567890&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;str进行切片，从头开始，到最后结束，步长-1 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_str2<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token format-spec"> -1]</span><span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>my_str2<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_str2<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token format-spec"> -1]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 对列表进行切片，从3开始，到1结束，步长-1</span>
my_list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;对列表进行切片，从3开始，到1结束，步长-1 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_list1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token format-spec"> -1]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 对元组进行切片，从头开始，到尾结束，步长-2</span>
my_tuple1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;对元组进行切片，从头开始，到尾结束，步长-2 = </span><span class="token interpolation"><span class="token punctuation">{</span>my_tuple1<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token format-spec"> -2]</span><span class="token punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token punctuation">{</span>my_tupl1<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_tuple1<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">:</span><span class="token format-spec"> -2]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\元组<span class="token entity" title="\\t">\\t</span>empCodeRunnerFile.py&quot;</span>
对list进行切片，从1开始，4结束，步长1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span>, <span class="token number">2</span>, <span class="token number">5</span><span class="token punctuation">]</span>
对tuple.进行切片，从头开始，到最后结束，步长1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span>, <span class="token string">&#39;c&#39;</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
对str进行切片，从头开始，到最后结束，步长2 <span class="token operator">=</span> aceg24680
str进行切片，从头开始，到最后结束，步长-1 <span class="token operator">=</span> 0987654321gfedcba, 0987654321gfedcb
对列表进行切片，从3开始，到1结束，步长-1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span>, <span class="token number">2</span><span class="token punctuation">]</span>
对元组进行切片，从头开始，到尾结束，步长-2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span>, <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span>, <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.061</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合（set）</h3><p>为什么使用集合?</p><p>我们目前接触到了列表、元组、字符串三个数据容器了。基本满足大多数的使用场景。</p><p>为何又需要学习新的集合类型呢？</p><p>通过特性来分析：</p><ul><li>列表可修改、支持重复元素且有序</li><li>元组、字符串不可修改、皮持重复元素且有序</li></ul><p>局限就在于：它们都支持重复元素。</p><p>如果场景需要对内容做去重处理，列表、元组、字符串就不方便了，</p><p>而集合，最主要的特点就是不支持元素的重复（自带去重功能，并且内容无序），所以集合不支持下标索引访问。</p><h4 id="集合的定义" tabindex="-1"><a class="header-anchor" href="#集合的定义" aria-hidden="true">#</a> 集合的定义</h4><p>基本语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_set(集合)的基础语法.py
&quot;&quot;&quot;</span>

<span class="token comment"># 定义集合字面量</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token comment"># 定义集合变量</span>
my_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token comment"># 定义空集合</span>
my_set3 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合的操作" tabindex="-1"><a class="header-anchor" href="#集合的操作" aria-hidden="true">#</a> 集合的操作</h4><figure><img src="`+f+`" alt="集合的操作" tabindex="0" loading="lazy"><figcaption>集合的操作</figcaption></figure><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_set(集合)的操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 添加新元素</span>
my_wait_add_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_wait_add_set<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>my_wait_add_set<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># True 不打印,也不计入长度计算（因为True=1，set去重）, False不会</span>
my_wait_add_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;添加新元素,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_add_set<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 移除元素</span>
my_wait_remove_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
my_wait_remove_set<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;移除元素,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_remove_set<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 随机取出一个元素</span>
my_wait_get_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;随机取出一个元素,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_get_set<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_wait_get_set<span class="token punctuation">)</span> <span class="token comment"># 将减少一个元素</span>

<span class="token comment"># 清空集合</span>
my_wait_clear_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
my_wait_clear_set<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;清空集合,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_clear_set<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 取两个集合的差集</span>
my_wait_su1_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
my_wait_su2_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;取两个集合的差集，以my_wait_su1_set为主, </span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_su1_set<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>my_wait_su2_set<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;取两个集合的差集，以my_wait_su2_set为主, </span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_su2_set<span class="token punctuation">.</span>difference<span class="token punctuation">(</span>my_wait_su1_set<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_wait_su1_set<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_wait_su2_set<span class="token punctuation">)</span>

<span class="token comment"># 消除两个集合的差集</span>
my_wait_su1_clear_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
my_wait_su2_clear_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">}</span>
my_wait_su1_clear_set1<span class="token punctuation">.</span>difference_update<span class="token punctuation">(</span>my_wait_su2_clear_set1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;消除两个集合的差集，以my_wait_su1_clear_set为主,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_su1_clear_set1<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
my_wait_su1_clear_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
my_wait_su2_clear_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">}</span>
my_wait_su2_clear_set2<span class="token punctuation">.</span>difference_update<span class="token punctuation">(</span>my_wait_su1_clear_set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;消除两个集合的差集，以my_wait_su2_clear_set为主,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_su2_clear_set2<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 2个集合合并为1个</span>
my_wait_merge_set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
my_wait_merge_set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;2个集合合并为1个,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_merge_set1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>my_wait_merge_set2<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 统计集合元素数量</span>
my_wait_count_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;统计集合元素数量, </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_wait_count_set<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 集合的遍历</span>
my_wait_for_set <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> my_wait_for_set<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;集合的遍历, </span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\集合(set)<span class="token entity" title="\\02">\\02</span>_set(集合)的操作.py&quot;</span>
<span class="token punctuation">{</span>False, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span> <span class="token number">6</span>
添加新元素,<span class="token punctuation">{</span>False, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;bb&#39;</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span>
移除元素,<span class="token punctuation">{</span><span class="token number">1</span>, <span class="token number">3</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span>
随机取出一个元素,1
<span class="token punctuation">{</span><span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span>
清空集合,set<span class="token punctuation">(</span><span class="token punctuation">)</span>
取两个集合的差集，以my_wait_su1_set为主, <span class="token punctuation">{</span><span class="token number">1</span>, <span class="token string">&#39;a&#39;</span>, -1<span class="token punctuation">}</span>
取两个集合的差集，以my_wait_su2_set为主, <span class="token punctuation">{</span>False, None, <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;b&#39;</span>, <span class="token string">&#39;a&#39;</span>, -1<span class="token punctuation">}</span>
<span class="token punctuation">{</span>False, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;c&#39;</span>, <span class="token string">&#39;b&#39;</span>, None<span class="token punctuation">}</span>
消除两个集合的差集，以my_wait_su1_clear_set为主,<span class="token punctuation">{</span><span class="token number">1</span>, <span class="token string">&#39;a&#39;</span>, -1<span class="token punctuation">}</span>
消除两个集合的差集，以my_wait_su2_clear_set为主,<span class="token punctuation">{</span>False, <span class="token string">&#39;c&#39;</span>, None<span class="token punctuation">}</span>
<span class="token number">2</span>个集合合并为1个,<span class="token punctuation">{</span>False, <span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token string">&#39;a&#39;</span>, None, <span class="token string">&#39;c&#39;</span>, <span class="token string">&#39;b&#39;</span>, -1<span class="token punctuation">}</span>
统计集合元素数量, <span class="token number">6</span>
集合的遍历, <span class="token number">1</span>
集合的遍历, <span class="token number">2</span>
集合的遍历, <span class="token number">3</span>
集合的遍历, b
集合的遍历, a
集合的遍历, <span class="token parameter variable">-1</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.069</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合的特点" tabindex="-1"><a class="header-anchor" href="#集合的特点" aria-hidden="true">#</a> 集合的特点</h4><p>经过上述对集合的学习，可以总结出集合有如下特点：</p><ul><li>可以容纳多个数据</li><li>可以容纳不同类型的数据（混装）</li><li>数据是无序存储的（不支持下标索引）</li><li>不允许重复数据存在</li><li>可以修改（增加或删除元素等）</li><li>支持for循环</li></ul><h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3><h4 id="字典的定义" tabindex="-1"><a class="header-anchor" href="#字典的定义" aria-hidden="true">#</a> 字典的定义</h4><p>同样使用不过存储的元素是一个个的：键值对，</p><p>如下语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_字典的定义.py
&quot;&quot;&quot;</span>

<span class="token comment"># 定义字典字面量</span>
<span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>

<span class="token comment"># 定义字典变量</span>
my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>

<span class="token comment"># 定义空字典</span>
my_dict1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 方式1</span>
my_dict2 <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 方式2</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字典值:</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict<span class="token punctuation">}</span></span><span class="token string">,空字典1类型:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>my_dict1<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">,空字典2类型:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>my_dict2<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 定义重复key的字典,老的会被覆盖</span>
my_dict3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;重复key的字典:</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict3<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Running<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token assign-left variable">PYTHONIOENCODING</span><span class="token operator">=</span>utf8 <span class="token operator">&amp;&amp;</span> python <span class="token parameter variable">-u</span> <span class="token string">&quot;d:<span class="token entity" title="\\c">\\c</span>ode\\py\\heima_py<span class="token entity" title="\\11">\\11</span>_数据容器\\字典<span class="token entity" title="\\01">\\01</span>_字典的定义.py&quot;</span>
字典值:<span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;张三&#39;</span>, <span class="token string">&#39;age&#39;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>, <span class="token string">&#39;birthday&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>,空字典1类型:<span class="token operator">&lt;</span>class <span class="token string">&#39;dict&#39;</span><span class="token operator">&gt;</span>,空字典2类型:<span class="token operator">&lt;</span>class <span class="token string">&#39;dict&#39;</span><span class="token operator">&gt;</span>
重复key的字典:<span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;李四&#39;</span>, <span class="token string">&#39;age&#39;</span><span class="token builtin class-name">:</span> <span class="token number">18</span>, <span class="token string">&#39;birthday&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span>Done<span class="token punctuation">]</span> exited with <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">in</span> <span class="token number">0.062</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字典的注意事项：</p><ul><li>键值对的Key和Value可以是任意类型(Key不可为字典)</li><li>字典内Key不允许重复，重复添加等同于覆盖原有数据</li></ul><h4 id="字典的操作" tabindex="-1"><a class="header-anchor" href="#字典的操作" aria-hidden="true">#</a> 字典的操作</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_字典的操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 定义字典字面量</span>
my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>

<span class="token comment"># 字典数据的获取</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取name,</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 获取name,张三</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取age,</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict<span class="token punctuation">[</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 获取age,18</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取birthday,</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict<span class="token punctuation">[</span><span class="token string">&quot;birthday&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 获取birthday,0111</span>

<span class="token comment"># 定义嵌套字典</span>
my_dict1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dict&#39;</span><span class="token punctuation">:</span> my_dict<span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;嵌套字典:</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict1<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 嵌套字典:{&#39;password&#39;: &#39;123456&#39;, &#39;username&#39;: &#39;admin&#39;, &#39;dict&#39;: {&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 18, &#39;birthday&#39;: &#39;0111&#39;}}</span>

<span class="token comment"># 从嵌套字典中获取数据 name</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;从嵌套字典中获取数据 name:</span><span class="token interpolation"><span class="token punctuation">{</span>my_dict1<span class="token punctuation">[</span><span class="token string">&quot;dict&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 从嵌套字典中获取数据 name:张三</span>

<span class="token comment"># 字典的新增</span>
my_wait_add_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
my_wait_add_dict<span class="token punctuation">[</span><span class="token string">&#39;height&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">175</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字典的新增后结果为：</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_add_dict<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 字典的新增后结果为：{&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 18, &#39;birthday&#39;: &#39;0111&#39;, &#39;height&#39;: 175}</span>

<span class="token comment"># 字典的更新元素</span>
my_wait_update_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
my_wait_update_dict<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字典的更新元素后的结果为:</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_update_dict<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 字典的更新元素后的结果为:{&#39;name&#39;: &#39;李四&#39;, &#39;age&#39;: 18, &#39;birthday&#39;: &#39;0111&#39;}</span>

<span class="token comment"># 字典删除元素</span>
my_wait_del_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
<span class="token comment"># 删除方式1</span>
<span class="token keyword">del</span> my_wait_del_dict<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;字典删除元素后的结果为:</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_del_dict<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 字典删除元素后的结果为:{&#39;age&#39;: 18, &#39;birthday&#39;: &#39;0111&#39;}</span>
<span class="token comment"># 删除方式2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;pop删除元素,</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_del_dict<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># pop删除元素,18</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;del 和 pop删除元素后的结果为:</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_del_dict<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># del 和 pop删除元素后的结果为:{&#39;birthday&#39;: &#39;0111&#39;}</span>

<span class="token comment"># 清空元素</span>
my_wait_clear_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
my_wait_clear_dict<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;清空元素后的结果为：</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_clear_dict<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 清空元素后的结果为：{}</span>

<span class="token comment"># 获取全部的key</span>
my_wait_get_allkey_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;获取全部的key的结果为:</span><span class="token interpolation"><span class="token punctuation">{</span>my_wait_get_allkey_dict<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 获取全部的key的结果为:dict_keys([&#39;name&#39;, &#39;age&#39;, &#39;birthday&#39;])</span>

<span class="token comment"># 遍历字典</span>
my_wait_traverse_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> my_wait_traverse_dict<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
        遍历字典:(&#39;name&#39;, &#39;张三&#39;)
        遍历字典:(&#39;age&#39;, 18)
        遍历字典:(&#39;birthday&#39;, &#39;0111&#39;)
    &quot;&quot;&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;遍历字典:</span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 统计字典内的元素数量</span>
my_wait_key_count_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;birthday&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0111&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;统计字典内的元素数量的结果为:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>my_wait_key_count_dict<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span> <span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字典的特点" tabindex="-1"><a class="header-anchor" href="#字典的特点" aria-hidden="true">#</a> 字典的特点</h4><p>经过上述对字典的学习，可以总结出字典有如下特点：</p><ul><li>可以容纳多个数据</li><li>可以容纳不同类型的数据</li><li>每一份数据是Key,Value键值对</li><li>可以通过Key获取到 Value,Key 不可重复（重复会覆盖）</li><li>不支持下标索引</li><li>可以修改（增加或删除更新元素等）</li><li>支持for循环，不支持while循环</li></ul><h3 id="数据容器的总结对比" tabindex="-1"><a class="header-anchor" href="#数据容器的总结对比" aria-hidden="true">#</a> 数据容器的总结对比</h3><h4 id="数据容器的分类" tabindex="-1"><a class="header-anchor" href="#数据容器的分类" aria-hidden="true">#</a> 数据容器的分类</h4><p>数据容器可以从以下视角进行简单的分类：</p><ul><li>是否支持下标索引 <ul><li>支持：列表、元组、字符串 - 序列类型</li><li>不支持：集合、字典 - 非序列类型</li></ul></li><li>是否支持重复元素： <ul><li>支持：列表、元组、字符串 - 序列类型</li><li>不支持：集合、字典 - 非序列类型</li></ul></li><li>是否可以修改 <ul><li>支持：列表、集合、字典</li><li>不支持：元组、字符串</li></ul></li></ul><h4 id="数据容器特点对比" tabindex="-1"><a class="header-anchor" href="#数据容器特点对比" aria-hidden="true">#</a> 数据容器特点对比</h4><figure><img src="`+q+'" alt="数据容器特点对比图" tabindex="0" loading="lazy"><figcaption>数据容器特点对比图</figcaption></figure><h4 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3" aria-hidden="true">#</a> 总结</h4><p>1.基于各类数据容器的特点，它们的应用场景如下：</p><ul><li>列表：一批数据，可修改、可重复的存储场景</li><li>元组：一批数据，不可修改、可重复的存储场景</li><li>字符串：一串字符串的存储场景</li><li>集合：一批数据，去重存储场景</li><li>字典：一批数据，可用Key检索Value的存储场景</li></ul><h3 id="数据容器的通用操作" tabindex="-1"><a class="header-anchor" href="#数据容器的通用操作" aria-hidden="true">#</a> 数据容器的通用操作</h3><h4 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h4><p>数据容器尽管各自有各自的特点，但是它们也有通用的一些操作。</p><p>首先，在遍历上：</p><ul><li>5类数据容器都支持 <strong>for循环</strong> 遍历</li><li>列表、元组、字符串支持 <strong>while循环</strong> ，集合、字典不支持（无法下标索引）</li></ul><p>尽管遍历的形式各有不同，但是，它们都支持遍历操作。</p><h4 id="通用统计功能" tabindex="-1"><a class="header-anchor" href="#通用统计功能" aria-hidden="true">#</a> 通用统计功能</h4><figure><img src="'+w+'" alt="通用统计功能" tabindex="0" loading="lazy"><figcaption>通用统计功能</figcaption></figure><h4 id="通用转换功能" tabindex="-1"><a class="header-anchor" href="#通用转换功能" aria-hidden="true">#</a> 通用转换功能</h4><figure><img src="'+x+'" alt="通用转换功能" tabindex="0" loading="lazy"><figcaption>通用转换功能</figcaption></figure><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><h3 id="文件编码概念" tabindex="-1"><a class="header-anchor" href="#文件编码概念" aria-hidden="true">#</a> 文件编码概念</h3><ol><li><p>什么是编码？</p><p>编码就是一种规则集合，记录了内容和二进制间进行相互转换的逻辑。</p><p>编码有许多中，我们最常用的是UTF-8编码。</p></li><li><p>为什么需要使用编码？</p><p>计算机只认识0和1，所以需要将内容翻译成0和1才能保存在计算机中。</p><p>同时也需要编码，将计算机保存的0和1，反向翻译回可以识别的内容。</p></li></ol><h3 id="文件的读取操作" tabindex="-1"><a class="header-anchor" href="#文件的读取操作" aria-hidden="true">#</a> 文件的读取操作</h3>',191),mn={href:"http://runoob.com",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://m.runoob.com/python/file-",target:"_blank",rel:"noopener noreferrer"},gn=a(`<h4 id="open-打开函数" tabindex="-1"><a class="header-anchor" href="#open-打开函数" aria-hidden="true">#</a> open()打开函数</h4><p>​ 在Python,使用open函数，可以打开一个已经存在的文件，或者创建一个新文件，语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">open</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>mode<span class="token punctuation">,</span>encoding<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ name:是要打开的目标文件名的字符串（可以包含文件所在的具体路径）。</p><p>​ mode:设置打开文件的模式（访问模式）：只读、写入、追加等。</p><p>​ encoding:编码格式（推荐使用UTF-8)</p><p>示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;python.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span>&quot;UTF<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment">#encoding的顺序不是第三位，所以不能用位置参数，用关键字参数直接指定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 注意：此时的 <code>f</code> 是 <code>open</code> 函数的文件对象，对象是Python中一种特殊的数据类型，拥有属性和方法，可以使用对象.属性或对象.方法对其进行访问。</p>`,9),hn={href:"https://m.runoob.com/python/file-methods.html",target:"_blank",rel:"noopener noreferrer"},yn=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_文件的操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 打开文件</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\code\\py\\\\heima_py\\\\02_Python入门语法\\\\12_文件操作\\\\test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 读取文件内容</span>
<span class="token comment"># print(&#39;----------read--读取指定字节---------&#39;)</span>
<span class="token comment"># print(f.read(10))</span>
<span class="token comment"># print(&#39;----------read--读取所有字节---------&#39;)</span>
<span class="token comment"># print(f.read())</span>
<span class="token comment"># print(&#39;----------readline----读取一行内容-------&#39;)</span>
<span class="token comment"># print(f.readline())</span>
<span class="token comment"># print(&#39;----------readlines----读取所有内容，并将每行内容以元素的形式加入到列表中并返回-------&#39;)</span>
<span class="token comment"># print(f.readlines())</span>

<span class="token comment"># for 循环读取文件行</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;每一行的数据是:</span><span class="token interpolation"><span class="token punctuation">{</span>line<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 文件的关闭</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----------close---关闭文件---------&#39;</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># with open 语法操作文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\code\\py\\\\heima_py\\\\02_Python入门语法\\\\12_文件操作\\\\test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;with open\\n </span><span class="token interpolation"><span class="token punctuation">{</span>f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件的写出操作" tabindex="-1"><a class="header-anchor" href="#文件的写出操作" aria-hidden="true">#</a> 文件的写出操作</h3><pre><code>1. 写入文件使用open函数的 ”w” 模式进行写入 
2. 写入的方法有： 
   - wite(),写入内容
   - flush(),刷新内容到硬盘中
</code></pre><ol start="3"><li><p>注意事项：</p><ul><li>w模式，文件不存在，会创建新文件</li><li>w模式，文件存在，会清空原有内容</li><li>close()方法，带有flush()方法的功能</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_文件的操作之写操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 打开文件</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\code\\py\\\\heima_py\\\\02_Python入门语法\\\\12_文件操作\\\\test.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># write 写入</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39; hello world!!!123&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 刷新内存，将内存的内存写入到硬盘中</span>
<span class="token comment"># f.flush()</span>
<span class="token comment"># 关闭文件,内置了flush()</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="文件的追加写入操作" tabindex="-1"><a class="header-anchor" href="#文件的追加写入操作" aria-hidden="true">#</a> 文件的追加写入操作</h3><ul><li>追加写入文件使用open函数的 &quot;a&quot; 模式进行写入</li><li>追加写入的方法有（和w模式一致）： <ul><li>wirte(),写入内容</li><li>flush(),刷新内容到硬盘中</li></ul></li><li>注意事项： <ul><li>a模式，文件不存在，会创建新文件</li><li>a模式，文件存在，会在原有内容后面继续写入</li><li>可以使用”\\n”来写出换行符</li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_文件的操作之追加写入操作.py
&quot;&quot;&quot;</span>

<span class="token comment"># 打开文件</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\code\\py\\\\heima_py\\\\02_Python入门语法\\\\12_文件操作\\\\test_append.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># write 写入</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39; hello world!!!&#39;</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;现在这里是冬天。&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 刷新内存，将内存的内存写入到硬盘中</span>
<span class="token comment"># f.flush()</span>
<span class="token comment"># 关闭文件,内置了flush()</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>a模式，文件不存在会创建文件</li><li>a模式，文件存在会在最后，追加写入文件</li></ul><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><h3 id="了解异常" tabindex="-1"><a class="header-anchor" href="#了解异常" aria-hidden="true">#</a> 了解异常</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_异常.py
&quot;&quot;&quot;</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./aaa.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
Traceback (most recent call last):
  File &quot;d:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\01_异常.py&quot;, line 4, in &lt;module&gt;
    with open(&#39;./aaa.txt&#39;, &#39;r&#39;) as f:
FileNotFoundError: [Errno 2] No such file or directory: &#39;./aaa.txt&#39;
&quot;&quot;&quot;</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常的捕获" tabindex="-1"><a class="header-anchor" href="#异常的捕获" aria-hidden="true">#</a> 异常的捕获</h3><h4 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h4><p>基本语法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    可能发生的异常
<span class="token keyword">except</span><span class="token punctuation">:</span>
    如果出现异常执行的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：尝试以r模式打开文件，如果文件不存在，则以W方式打开。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_捕获异常.py

    需求：尝试以r模式打开文件，如果文件不存在，则以W方式打开。
&quot;&quot;&quot;</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;D:\\\\code\\\\py\\\\heima_py\\\\02_Python入门语法\\\\13_异常\\\\te1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;D:\\\\code\\\\py\\\\heima_py\\\\02_Python入门语法\\\\13_异常\\\\te1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获指定的异常" tabindex="-1"><a class="header-anchor" href="#捕获指定的异常" aria-hidden="true">#</a> 捕获指定的异常</h4><p>基础语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 捕获指定的异常    </span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>aaa<span class="token punctuation">)</span>
<span class="token keyword">except</span> NameError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;变量未定义,&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获所有的异常" tabindex="-1"><a class="header-anchor" href="#捕获所有的异常" aria-hidden="true">#</a> 捕获所有的异常</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 捕获所有的异常</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
   a <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;出现了异常,内容是:</span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常的传递性" tabindex="-1"><a class="header-anchor" href="#异常的传递性" aria-hidden="true">#</a> 异常的传递性</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_异常的传递性.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>
    <span class="token keyword">return</span> a

<span class="token keyword">def</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    fun1<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    fun2<span class="token punctuation">(</span><span class="token punctuation">)</span>

main<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
Traceback (most recent call last):
  File &quot;d:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\03_异常的传递性.py&quot;, line 15, in &lt;module&gt;
    main()     
  File &quot;d:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\03_异常的传递性.py&quot;, line 13, in main
    fun2()
  File &quot;d:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\03_异常的传递性.py&quot;, line 10, in fun2
    fun1()
  File &quot;d:\\code\\py\\heima_py\\02_Python入门语法\\13_异常\\03_异常的传递性.py&quot;, line 6, in fun1
    a = 1/0
ZeroDivisionError: division by zero
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python模块" tabindex="-1"><a class="header-anchor" href="#python模块" aria-hidden="true">#</a> Python模块</h2><h3 id="什么是模块" tabindex="-1"><a class="header-anchor" href="#什么是模块" aria-hidden="true">#</a> 什么是模块?</h3><p>​ Python模块(Module),是一个Python文件，以.py结尾.模块能定义函数，类和变量，模块里也能包含可执行的代码。</p><p>​ 模块的作用：python中有很多各种不同的模块，每一个模块都可以帮助我</p><p>们快速的实现一些功能，比如实现和时间相关的功能就可以使用time模块</p><p>​ 我们可以认为一个模块就是一个工具包，每一个工具包中都有各种不同的</p><p>工具供我们使用进而实现各种不同的功能。</p><p>​ 大白话：模块就是一个Python文件，里面有类、函数、变量等，我们可以</p><p>拿过来用（导入模块去使用）。</p><h3 id="模块的导入方式" tabindex="-1"><a class="header-anchor" href="#模块的导入方式" aria-hidden="true">#</a> 模块的导入方式</h3><p>模块在使用前需要先导入。</p><p>导入的语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token keyword">from</span> 模块名<span class="token punctuation">]</span> <span class="token keyword">import</span> <span class="token punctuation">[</span>模块 <span class="token operator">|</span> 类 丨 变量<span class="token operator">|</span> 函数 <span class="token operator">|</span> <span class="token operator">*</span> <span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">as</span> 别名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用的组合形式如：</p><ul><li><p>import 模块名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_模块.py
&quot;&quot;&quot;</span>
<span class="token comment"># 使用import导入time模块使用sleep功能（函数）</span>
<span class="token keyword">import</span> time
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;222&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    
    
    
  * from 模块名 import 类、变量、方法等 
    
      \`\`\`python
    # 使用from导入time的sleep功能（函数）
    from time import sleep
    print(&#39;time&#39;)
    sleep(5)
    print(&#39;time-&gt;sleep&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><ul><li><p>from 模块名 import *</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用*导入time模块的全部功能</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">)</span>
sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;time-&gt;*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    
    
    
  * import 模块名 as 别名 
    
      \`\`\`python
    # 使用as给特定功能加上别名
    import time as t
    print(&#39;time&#39;)
    sleep(5)
    print(&#39;time-&gt;as t&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><ul><li><p>from 模块名 import 功能名 as 别名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># from 模块名 import 功能名 as 别名</span>
<span class="token keyword">from</span> time <span class="token keyword">import</span> sleep <span class="token keyword">as</span> sl
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">)</span>
sl<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;time-&gt;as sl&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>注意：</p><ul><li>from可以省略，直接import即可</li><li>as别名可以省略</li><li>通过“.”来确定层级关系</li><li>描块的导入一般写在代码文件的开头位置</li></ul><h3 id="模块自定义模块" tabindex="-1"><a class="header-anchor" href="#模块自定义模块" aria-hidden="true">#</a> 模块自定义模块</h3><figure><img src="`+P+`" alt="自定义模块用例图片" tabindex="0" loading="lazy"><figcaption>自定义模块用例图片</figcaption></figure><blockquote><p>自定义的模块代码(单独的文件):</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
自定义模块
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是自定义模块!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用的代码(单独的文件):</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_自定义模块.py
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> my_module <span class="token keyword">import</span> start

start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 注意：同名import 的方法名会被覆盖。</p><h4 id="main变量" tabindex="-1"><a class="header-anchor" href="#main变量" aria-hidden="true">#</a> main变量</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 用于测试start函数</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="all变量" tabindex="-1"><a class="header-anchor" href="#all变量" aria-hidden="true">#</a> all变量</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
自定义模块
&quot;&quot;&quot;</span>

__all__<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是自定义模块!&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">abc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>    

<span class="token comment"># 用于测试start函数</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 这个时候只可以使用 __all__=[&#39;abc&#39;]方法</span>
<span class="token keyword">from</span> my_module <span class="token keyword">import</span> <span class="token operator">*</span> 
abc<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python包" tabindex="-1"><a class="header-anchor" href="#python包" aria-hidden="true">#</a> python包</h2><h3 id="自定义包" tabindex="-1"><a class="header-anchor" href="#自定义包" aria-hidden="true">#</a> 自定义包</h3><p>​ 从物理上看，包就是一个文件夹，在该文件夹下包含了一个iit·py文件，该文件夹可</p><p>​ 用于包含多个模块文件从逻辑上看，包的本质依然是模块。</p><p>​ <img src="`+N+'" alt="python包图" loading="lazy"></p><p>​ 实际层级关系如下：</p><p>​ <img src="'+D+'" alt="python自定义包的层级关系" loading="lazy"></p><p>步骤如下：</p>',68),_n={href:"http://init.py",target:"_blank",rel:"noopener noreferrer"},fn=a(`<li><p>写包里待导出的函数代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
my_module1.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是模块1的打印&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
my_module2.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是模块2的打印&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导入包代码</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_自定义包.py
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> my_package<span class="token punctuation">.</span>my_module1
<span class="token keyword">import</span> my_package<span class="token punctuation">.</span>my_module2

my_package<span class="token punctuation">.</span>my_module1<span class="token punctuation">.</span>test<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_package<span class="token punctuation">.</span>my_module2<span class="token punctuation">.</span>test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),qn=a(`<p>注意：可以在 __init.py__中设置 <strong>all变量</strong> 。</p><h3 id="安装第三方包" tabindex="-1"><a class="header-anchor" href="#安装第三方包" aria-hidden="true">#</a> 安装第三方包</h3><p>​ 我们知道，包可以包含一堆的Python模块，而每个模块又内含许多的功能。</p><p>​ 所以，我们可以认为：一个包，就是一堆同类型功能的集合体。</p><p>​ 在Python程序的生态中，有许多非常多的第三方包（非Python官方），可以极大的帮助我们提高开发效率，如：</p><ul><li>科学计算中常用的：numpy包</li><li>数据分析中常用的：pandas包</li><li>大数据计算中常用的：pyspark、apache-flink包</li><li>图形可视化常用的：matplotlib、pyecharts</li><li>人工智能常用的：tensorflow</li><li>等</li></ul><p>这些第三方包都需要进行安装，因为Python没有内置。</p><h4 id="安装第三方包-pip" tabindex="-1"><a class="header-anchor" href="#安装第三方包-pip" aria-hidden="true">#</a> 安装第三方包 - pip</h4><p>​ 第三方包的安装非常简单，我们只需要使用Python内置的pip程序即可。</p><p>​ 打开我们许久未见的：命令提示符程序，在里面输入：</p><p>​ pip install 包名称</p><p>​ 即可通过网络快速安装第三方包。</p><h4 id="pip的网络优化" tabindex="-1"><a class="header-anchor" href="#pip的网络优化" aria-hidden="true">#</a> pip的网络优化</h4><p>​ 由于pip是连接的国外的网站进行包的下载，所以有的时候会速度很慢。</p><p>​ 我们可以通过如下命令，让其连接国内的网站进行包的安装：</p><pre><code>pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名称
</code></pre>`,16),wn={href:"https://pypi.tuna.tsinghua.edu.cn/simple",target:"_blank",rel:"noopener noreferrer"},xn=a(`<h2 id="json数据格式" tabindex="-1"><a class="header-anchor" href="#json数据格式" aria-hidden="true">#</a> json数据格式</h2><h3 id="python数据和son数据的相互转化" tabindex="-1"><a class="header-anchor" href="#python数据和son数据的相互转化" aria-hidden="true">#</a> Python数据和son数据的相互转化</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_python和json数据的相互转换.py
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> json

<span class="token comment">#准备符合json格式要求的python数据</span>
data<span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;老王&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">#通过json.dumps(data)方法把python数据转化为了json数据</span>
data <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>data<span class="token punctuation">,</span> ensure_ascii<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># ensure_ascii=False 展示中文</span>
<span class="token comment"># [{&quot;name&quot;: &quot;老王&quot;, &quot;age&quot;: 16}, {&quot;name&quot;: &quot;张三&quot;, &quot;age&quot;: 20}]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment"># &lt;class &#39;str&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#通过json.loads(data)方法把json数据转化为了python数据</span>
data <span class="token operator">=</span>  json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment"># [{&#39;name&#39;: &#39;老王&#39;, &#39;age&#39;: 16}, {&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 20}]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment"># &lt;class &#39;list&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pyecharts" tabindex="-1"><a class="header-anchor" href="#pyecharts" aria-hidden="true">#</a> pyecharts</h2>`,4),Pn={href:"https://pyecharts.org",target:"_blank",rel:"noopener noreferrer"},Nn=a(`<p>​ 如果想要做出数据可视化效果图，可以借助pyecharts模块来完成。</p><p>​ 概况：</p><p>​ Echarts是个由百度开源的数据可视化，凭借着良好的交互性，精巧的图表 设计，得到了众多开发者的认可.而Python是门富有表达力的语言，很适合用 于数据处理，当数据分析遇上数据可视化时pyecharts诞生了。</p><p>安装pyecharts:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install pyecharts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pyecharts入门" tabindex="-1"><a class="header-anchor" href="#pyecharts入门" aria-hidden="true">#</a> pyecharts入门</h3><ul><li><p>基础折线图</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_基础折线图.py
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>charts <span class="token keyword">import</span> Line

<span class="token comment"># 得到折线图对象</span>
line <span class="token operator">=</span> Line<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 添加x轴数据</span>
line<span class="token punctuation">.</span>add_xaxis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;美国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;英国&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 添加y轴数据</span>
line<span class="token punctuation">.</span>add_yaxis<span class="token punctuation">(</span><span class="token string">&#39;GDP&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
line<span class="token punctuation">.</span>add_yaxis<span class="token punctuation">(</span><span class="token string">&#39;人口&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">20000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 生成图表</span>
line<span class="token punctuation">.</span>render<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    
    
    
  * 基础柱状图 
    
      \`\`\`python
    &quot;&quot;&quot;
    03_基础柱状图.py
    &quot;&quot;&quot;
    
    from pyecharts.charts import Bar
    from pyecharts.options import LabelOpts
    
    # 构建柱状图对象
    bar = Bar()
    
    # 添加x轴数据
    bar.add_xaxis([&quot;中国&quot;, &quot;美国&quot;, &quot;英国&quot;])
    # 添加y轴数据
    bar.add_yaxis(
        &quot;GDP&quot;,
        [30, 20, 10],
        # 将数值标签放到右侧
        label_opts=LabelOpts(position=&#39;right&#39;)
     )
    
    # 反转x、y轴
    bar.reversal_axis()
    
    
    # 绘图
    bar.render(&quot;基础柱状图.html&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><ul><li>暂无</li></ul><h3 id="pyecharts有哪些配置选项" tabindex="-1"><a class="header-anchor" href="#pyecharts有哪些配置选项" aria-hidden="true">#</a> pyecharts有哪些配置选项</h3><p>pyecharts模块中有很多的配置选项，常用到2个类别的选项：</p><h4 id="全局配置选项" tabindex="-1"><a class="header-anchor" href="#全局配置选项" aria-hidden="true">#</a> 全局配置选项</h4>`,13),Dn={href:"https://pyecharts.org/#/zh-cn/global_options",target:"_blank",rel:"noopener noreferrer"},Tn=a('<p>​ set_global_opts 方法</p><p>​ 这里全局配置选项可以通过set_global_opts方法来进行配置，相应的选项和选项的功能如下：</p><figure><img src="'+T+`" alt="set_global_opts方法实现案例图片" tabindex="0" loading="lazy"><figcaption>set_global_opts方法实现案例图片</figcaption></figure><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_基础折线图.py
&quot;&quot;&quot;</span>
<span class="token comment"># 导入折线图包</span>
<span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>charts <span class="token keyword">import</span> Line
<span class="token comment"># 导入标题包、图例包、工具箱包、视觉包</span>
<span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>options <span class="token keyword">import</span> TitleOpts<span class="token punctuation">,</span> LegendOpts<span class="token punctuation">,</span> ToolboxOpts<span class="token punctuation">,</span> VisualMapOpts

<span class="token comment"># 得到折线图对象</span>
line <span class="token operator">=</span> Line<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 添加x轴数据</span>
line<span class="token punctuation">.</span>add_xaxis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;美国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;英国&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 添加y轴数据</span>
line<span class="token punctuation">.</span>add_yaxis<span class="token punctuation">(</span><span class="token string">&#39;GDP&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 设置全局配置项、</span>
line<span class="token punctuation">.</span>set_global_opts<span class="token punctuation">(</span>
    <span class="token comment"># 标题</span>
    title_opts<span class="token operator">=</span>TitleOpts<span class="token punctuation">(</span>
        title<span class="token operator">=</span><span class="token string">&quot;GDP展示折线图&quot;</span><span class="token punctuation">,</span>
         pos_left<span class="token operator">=</span><span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
         pos_bottom<span class="token operator">=</span><span class="token string">&quot;1%&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment"># 图例</span>
    legend_opts<span class="token operator">=</span>LegendOpts<span class="token punctuation">(</span>
        is_show<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment"># 工具箱</span>
    toolbox_opts<span class="token operator">=</span> ToolboxOpts<span class="token punctuation">(</span>
        is_show<span class="token operator">=</span><span class="token boolean">True</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment"># 视觉</span>
    visualmap_opts<span class="token operator">=</span>VisualMapOpts<span class="token punctuation">(</span>

    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment"># 生成图表</span>
line<span class="token punctuation">.</span>render<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系列配置选项" tabindex="-1"><a class="header-anchor" href="#系列配置选项" aria-hidden="true">#</a> 系列配置选项</h4><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="使用对象组织数据" tabindex="-1"><a class="header-anchor" href="#使用对象组织数据" aria-hidden="true">#</a> 使用对象组织数据</h3><p>在程序中是可以做到和生活中那样，设计表格、生产表格、填写表格的组织形式的。</p><ol><li><p>在程序中设计表格，我们称之为：设计类(class)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">student</span><span class="token punctuation">:</span>
name <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 记录学生姓名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在程序中打印生产表格，我们称之为：创建对象</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 基于类创建对象</span>
stu_1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
stu_2 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在程序中填写表格，我们称之为：对象属性赋值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 为学生1对象赋予名称属性值</span>
stu_1<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;周杰轮&quot;</span>
<span class="token comment"># 为学生2对象赋予名称属性值</span>
stu_2<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;林军杰&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="类的定义和使用" tabindex="-1"><a class="header-anchor" href="#类的定义和使用" aria-hidden="true">#</a> 类的定义和使用</h3><p>现在我们来看看类的使用语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># class是关键字，表示要定义类了</span>
<span class="token keyword">class</span> 类名称：
    <span class="token comment"># 类的属性，即定义在类中的变量（成员变量）</span>
    类的属性
    <span class="token comment"># 类的行为，即定义在类中的函数（成员方法）</span>
    类的行为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建类对象的语法：</p><pre><code>对象 = 类名称()
</code></pre><blockquote><p>类的行为定义：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_初识class.py
    学生登记表,存在以下属性：
    姓名(name)、性别(gender)、国籍(nationality)、籍贯(native_place)、年龄(age)
&quot;&quot;&quot;</span>

<span class="token comment"># 1. 学生登记表类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token boolean">None</span>
    gender <span class="token operator">=</span> <span class="token boolean">None</span>
    nationality <span class="token operator">=</span> <span class="token boolean">None</span>
    native_place <span class="token operator">=</span> <span class="token boolean">None</span>
    age <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token comment"># 定义一个行为</span>
    <span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;我是来着</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>nationality<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>native_place<span class="token punctuation">}</span></span><span class="token string">的练习生，我叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">,今年</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string">岁了。&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 2. 创建一个对象</span>
student <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 3. 对象属性进行赋值</span>
student<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
student<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>
student<span class="token punctuation">.</span>nationality <span class="token operator">=</span> <span class="token string">&#39;中国&#39;</span>
student<span class="token punctuation">.</span>native_place <span class="token operator">=</span> <span class="token string">&#39;浙江省&#39;</span>
student<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">29</span>

<span class="token comment"># 4. 获取对象中记录的信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
student<span class="token punctuation">.</span>say_hi<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，类中：</p><ul><li>不仅可以定义属性用来记录数据</li><li>也可以定义函数，用来记录行为</li></ul><p>其中：</p><ul><li>类中定义的属性（变量），我们称之为： <strong>成员变量</strong></li><li>类中定义的行为（函数），我们称之为： <strong>成员方法</strong></li></ul><h4 id="成员方法的定义语法" tabindex="-1"><a class="header-anchor" href="#成员方法的定义语法" aria-hidden="true">#</a> 成员方法的定义语法</h4><p>在类中定义成员方法和定义函数基本一致，但仍有细微区别：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> 方法名<span class="token punctuation">(</span>se1f<span class="token punctuation">,</span>形参<span class="token number">1</span>，<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>，形参N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    方法体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在方法定义的参数列表中，有一个：self关键字</p><p>self关键字是成员方法定义的时候，必须填写的。</p><ul><li>它用来表示类对象自身的意思 。</li><li>当我们使用类对象调用方法的是，self会自动被python传入 。</li><li>在方法内部，想要访问类的成员变量，必须使用self 。</li></ul><h3 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h3><h4 id="现实世界的事物和类" tabindex="-1"><a class="header-anchor" href="#现实世界的事物和类" aria-hidden="true">#</a> 现实世界的事物和类</h4><figure><img src="`+I+'" alt="现实世界的事物和类图" tabindex="0" loading="lazy"><figcaption>现实世界的事物和类图</figcaption></figure><h4 id="为什么非要创建对象才能使用呢" tabindex="-1"><a class="header-anchor" href="#为什么非要创建对象才能使用呢" aria-hidden="true">#</a> 为什么非要创建对象才能使用呢？</h4><p>​ 类只是一种程序内的“设计图纸”，需要基于图纸生产实体（对象），才能正常工作</p><p>​ 这种套路，称之为：面向对象编程。</p><h4 id="在程序中通过类来描述面向对象" tabindex="-1"><a class="header-anchor" href="#在程序中通过类来描述面向对象" aria-hidden="true">#</a> 在程序中通过类来描述面向对象</h4><figure><img src="'+O+'" alt="通过程序来描述闹钟对象图" tabindex="0" loading="lazy"><figcaption>通过程序来描述闹钟对象图</figcaption></figure><h4 id="基于类创建对象" tabindex="-1"><a class="header-anchor" href="#基于类创建对象" aria-hidden="true">#</a> 基于类创建对象</h4><figure><img src="'+E+`" alt="基于闹钟类创建对象图" tabindex="0" loading="lazy"><figcaption>基于闹钟类创建对象图</figcaption></figure><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_面向对象.py 记得电脑声音开小点
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Clock</span><span class="token punctuation">:</span>
    <span class="token comment"># id</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token comment"># 零售价</span>
    price <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">ring</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">import</span> winsound
        winsound<span class="token punctuation">.</span>Beep<span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    clock1 <span class="token operator">=</span> Clock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    clock1<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token string">&quot;1000001&quot;</span>
    clock1<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;闹钟ID是</span><span class="token interpolation"><span class="token punctuation">{</span>clock1<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">,价格是:</span><span class="token interpolation"><span class="token punctuation">{</span>clock1<span class="token punctuation">.</span>price<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    clock1<span class="token punctuation">.</span>ring<span class="token punctuation">(</span><span class="token punctuation">)</span>

    clock2 <span class="token operator">=</span> Clock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    clock2<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token string">&quot;1000001&quot;</span>
    clock2<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;闹钟ID是</span><span class="token interpolation"><span class="token punctuation">{</span>clock2<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">}</span></span><span class="token string">,价格是:</span><span class="token interpolation"><span class="token punctuation">{</span>clock2<span class="token punctuation">.</span>price<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    clock2<span class="token punctuation">.</span>ring<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h4><p>Python类可以使用： <strong>init</strong> (方法，称之为构造方法。</p><ul><li>可以实现：·在创建类对象（构造类）的时候，会自动执行。</li><li>在创建类对象（构造类)的时候，将传入参数自动传递给__init__方法使用。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_构造方法.py
&quot;&quot;&quot;</span>
<span class="token comment">#  学生登记表类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">:</span>
    <span class="token comment"># 可以省略</span>
    <span class="token comment"># name = None</span>
    <span class="token comment"># gender = None</span>
    <span class="token comment"># nationality = None</span>
    <span class="token comment"># native_place = None</span>
    <span class="token comment"># gender = None</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> age<span class="token punctuation">,</span> nationality<span class="token punctuation">,</span> native_place<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
        self<span class="token punctuation">.</span>nationality <span class="token operator">=</span> nationality
        self<span class="token punctuation">.</span>native_place <span class="token operator">=</span> native_place
    
    <span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;我是来着</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>nationality<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>native_place<span class="token punctuation">}</span></span><span class="token string">的练习生，我叫</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">,今年</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string">岁了。&#39;</span></span><span class="token punctuation">)</span>

stu1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span> native_place<span class="token operator">=</span><span class="token string">&#39;浙江省&#39;</span><span class="token punctuation">)</span>
stu1<span class="token punctuation">.</span>say_hi<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他内置方法" tabindex="-1"><a class="header-anchor" href="#其他内置方法" aria-hidden="true">#</a> 其他内置方法</h3><p>上文学习的init构造方法，是Python:类内置的方法之一。</p><h4 id="其他常用得内置方法" tabindex="-1"><a class="header-anchor" href="#其他常用得内置方法" aria-hidden="true">#</a> 其他常用得内置方法</h4><figure><img src="`+C+'" alt="其他常用得内置方法图" tabindex="0" loading="lazy"><figcaption>其他常用得内置方法图</figcaption></figure><p>​ 这些内置的类方法，各自有各自特殊的功能，这些内置方法我们称之为： <strong>魔术方法</strong> 。</p><figure><img src="'+S+'" alt="常见魔术方法图" tabindex="0" loading="lazy"><figcaption>常见魔术方法图</figcaption></figure><h4 id="str-字符串方法" tabindex="-1"><a class="header-anchor" href="#str-字符串方法" aria-hidden="true">#</a> __str__字符串方法</h4><figure><img src="'+z+'" alt="不使用__str__方法图" tabindex="0" loading="lazy"><figcaption>不使用__str__方法图</figcaption></figure><figure><img src="'+F+`" alt="使用__str__方法图" tabindex="0" loading="lazy"><figcaption>使用__str__方法图</figcaption></figure><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_常用魔术方法.py
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">Stu1</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

<span class="token keyword">class</span> <span class="token class-name">Stu2</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token comment"># __str__字符串方法.py</span>
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;Stu2类对象,name=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">,age=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>    

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    stu1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;__main__.Stu1 object at 0x0000028B8BEF9AC0&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span>

    stu2 <span class="token operator">=</span> Stu2<span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token comment"># Stu2类对象,name=李四,age=30</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stu2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lt-小于符号比较" tabindex="-1"><a class="header-anchor" href="#lt-小于符号比较" aria-hidden="true">#</a> __lt__小于符号比较</h4><figure><img src="`+j+'" alt="未使用lt小于符号比较图" tabindex="0" loading="lazy"><figcaption>未使用lt小于符号比较图</figcaption></figure><figure><img src="'+A+`" alt="使用lt小于符号比较图" tabindex="0" loading="lazy"><figcaption>使用lt小于符号比较图</figcaption></figure><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_常用魔术方法.py
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">Stu1</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__lt__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>age <span class="token operator">&lt;</span> other<span class="token punctuation">.</span>age   

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    stu1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;__main__.Stu1 object at 0x0000028B8BEF9AC0&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span>

    <span class="token comment"># __lt__方法</span>
    stu11 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张四&#39;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span>
    <span class="token comment"># __lt__方法,stu1 &gt; stu11 = False</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__lt__方法,stu1 &gt; stu11 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&gt;</span> stu11<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    stu111 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张五&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    <span class="token comment"># __lt__方法,stu1 &gt; stu111 = True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__lt__方法,stu1 &gt; stu111 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&gt;</span> stu111<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="le-小于等于比较" tabindex="-1"><a class="header-anchor" href="#le-小于等于比较" aria-hidden="true">#</a> __le__小于等于比较</h4><figure><img src="`+R+`" alt="lt小于等于方法比较图" tabindex="0" loading="lazy"><figcaption>lt小于等于方法比较图</figcaption></figure><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_常用魔术方法.py
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">Stu1</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__le__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>age <span class="token operator">&lt;=</span> other<span class="token punctuation">.</span>age    

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    stu1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;__main__.Stu1 object at 0x0000028B8BEF9AC0&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span>

    <span class="token comment"># __le__方法</span>
    stule1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张四&#39;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span>
    <span class="token comment"># __le__方法,stu1 &gt; stule1 = False</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__le__方法,stu1 &gt; stule1 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&gt;=</span> stule1<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    stu11e2 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张五&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># __le__方法,stu1 &gt; stu11e2 = True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__le__方法,stu1 &gt; stu11e2 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&lt;=</span> stu11e2<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eq-比较运算符" tabindex="-1"><a class="header-anchor" href="#eq-比较运算符" aria-hidden="true">#</a> __eq__比较运算符</h4><figure><img src="`+H+`" alt="eq比较运算符" tabindex="0" loading="lazy"><figcaption><strong>eq比较运算符</strong></figcaption></figure><p>​ 不实现__eq__方法，对象之间可以比较，但是是比较内存地址，也即是：不同对象 == 比较一定是Flse结果。</p><p>​ 实现了__eq__方法，就可以按照自己的想法来决定2个对象是否相等了。</p><blockquote><p>代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
04_常用魔术方法.py
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">Stu1</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__eq__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>age <span class="token operator">==</span> other<span class="token punctuation">.</span>age      


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    stu1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;__main__.Stu1 object at 0x0000028B8BEF9AC0&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stu1<span class="token punctuation">)</span>
    
    <span class="token comment"># __eq__方法</span>
    stueq1 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张四&#39;</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">)</span>
    <span class="token comment"># __eq__方法,stu1 == stule1 = False</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__eq__方法,stu1 == stule1 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&gt;=</span> stueq1<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    stu1eq2 <span class="token operator">=</span> Stu1<span class="token punctuation">(</span><span class="token string">&#39;张五&#39;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span>
    <span class="token comment"># __eq__方法,stu1 == stu11e2 = True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;__eq__方法,stu1 == stu11e2 = </span><span class="token interpolation"><span class="token punctuation">{</span>stu1 <span class="token operator">&lt;=</span> stu1eq2<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象得三大特性" tabindex="-1"><a class="header-anchor" href="#面向对象得三大特性" aria-hidden="true">#</a> 面向对象得三大特性</h3><p>面向对象编程，是许多编程语言都支持的一种编程思想。</p><p>简单理解是：基于模板（类)去创建实体（对象），使用对象完成功能开发。</p><p>面向对象包含3大主要特性：</p><ul><li>封装</li><li>继承</li><li>多态</li></ul><h4 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h4><p>封装表示的是，将现实世界事物的：</p><ul><li>属性</li><li>行为</li></ul><p>封装到类中，描述为：</p><ul><li>成员变量</li><li>成员方法</li></ul><p>从而完成程序对现实世界事物的描述。</p><h5 id="私有成员" tabindex="-1"><a class="header-anchor" href="#私有成员" aria-hidden="true">#</a> 私有成员</h5><p>​ 既然现实事物有不公开的属性和行为，那么作为现实事物在程序中映射的类，也应该支持。</p><p>类中提供了私有成员的形式来支持。</p><ul><li>私有成员变量</li><li>私有成员方法</li></ul><p>定义私有成员的方式非常简单，只需要：</p><ul><li>私有成员变量：变量名以开头(2个下划线)</li><li>私有成员方法：方法名以开头（2个下划线</li></ul><p>即可完成私有成员的设置。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_私有成员.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span>
    IMEI <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 序列号</span>
    company <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 厂商</span>

    __current_voltage <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 当前电压 私有变量</span>

    <span class="token keyword">def</span> <span class="token function">call_by_5g</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;5g通话已开启&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__keep_single_core</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;让CPU以单核模式运行以节省电量&#39;</span><span class="token punctuation">)</span>    

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    phone <span class="token operator">=</span> Phone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone<span class="token punctuation">.</span>IMEI <span class="token operator">=</span> <span class="token string">&#39;1001&#39;</span>
    phone<span class="token punctuation">.</span>company <span class="token operator">=</span> <span class="token string">&#39;x米&#39;</span>
    phone<span class="token punctuation">.</span>call_by_5g<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># AttributeError: &#39;Phone&#39; object has no attribute &#39;__current_voltage&#39;</span>
    <span class="token comment"># print(phone.__current_voltage)</span>

    <span class="token comment"># AttributeError: &#39;Phone&#39; object has no attribute &#39;__keep_single_core&#39;</span>
    <span class="token comment"># phone.__keep_single_core()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="使用私有成员" tabindex="-1"><a class="header-anchor" href="#使用私有成员" aria-hidden="true">#</a> 使用私有成员</h6><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
05_私有成员.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span>
    IMEI <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 序列号</span>
    company <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 厂商</span>

    __current_voltage <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token comment"># 当前电压 私有变量</span>

    <span class="token keyword">def</span> <span class="token function">call_by_5g</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>__current_voltage <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;5g通话已开启&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__keep_single_core<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;电量不足，不可以进行5g通话，且已开启CPU单核运行省电。&#39;</span><span class="token punctuation">)</span>    

    <span class="token keyword">def</span> <span class="token function">__keep_single_core</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;让CPU以单核模式运行以节省电量&#39;</span><span class="token punctuation">)</span>  
      

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    phone <span class="token operator">=</span> Phone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone<span class="token punctuation">.</span>IMEI <span class="token operator">=</span> <span class="token string">&#39;1001&#39;</span>
    phone<span class="token punctuation">.</span>company <span class="token operator">=</span> <span class="token string">&#39;x米&#39;</span>
    phone<span class="token punctuation">.</span>call_by_5g<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># AttributeError: &#39;Phone&#39; object has no attribute &#39;__current_voltage&#39;</span>
    <span class="token comment"># print(phone.__current_voltage)</span>
    
    <span class="token comment"># AttributeError: &#39;Phone&#39; object has no attribute &#39;__keep_single_core&#39;</span>
    <span class="token comment"># phone.__keep_single_core()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4><p>继承分为：单继承和多继承。</p><h5 id="单继承" tabindex="-1"><a class="header-anchor" href="#单继承" aria-hidden="true">#</a> 单继承</h5><figure><img src="`+G+`" alt="单继承实现图" tabindex="0" loading="lazy"><figcaption>单继承实现图</figcaption></figure><p>语法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> 类名<span class="token punctuation">(</span>父类名<span class="token punctuation">)</span><span class="token punctuation">:</span>
    类内容体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>继承表示：将从父类那里继承（复制）来成员变量和成员方法（不含私有）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
07_继承.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span>
    IMEI <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 序列号</span>
    company <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 厂商</span>

    __current_voltage <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token comment"># 当前电压 私有变量</span>

    <span class="token keyword">def</span> <span class="token function">call_by_5g</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>__current_voltage <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;5g通话已开启&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__keep_single_core<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;电量不足，不可以进行5g通话，且已开启CPU单核运行省电。&#39;</span><span class="token punctuation">)</span>    

    <span class="token keyword">def</span> <span class="token function">__keep_single_core</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;让CPU以单核模式运行以节省电量&#39;</span><span class="token punctuation">)</span>  
      
<span class="token keyword">class</span> <span class="token class-name">Phone_2023</span><span class="token punctuation">(</span>Phone<span class="token punctuation">)</span><span class="token punctuation">:</span>

    face_recognize <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token comment">#  脸部识别</span>

    <span class="token keyword">def</span> <span class="token function">call_by_5g_new</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>call_by_5g<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;新呼叫模式&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    phone_new <span class="token operator">=</span> Phone_2023<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone_new<span class="token punctuation">.</span>call_by_5g_new<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>phone_new<span class="token punctuation">.</span>company<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h5 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h5><figure><img src="`+B+`" alt="多继承图" tabindex="0" loading="lazy"><figcaption>多继承图</figcaption></figure><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&quot;&quot;</span>&quot;
07_继承<span class="token punctuation">.</span>py
<span class="token string">&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span>
    IMEI <span class="token operator">=</span> <span class="token boolean">None</span> <span class="token comment"># 序列号</span>
    company <span class="token operator">=</span> <span class="token string">&#39;小米&#39;</span> <span class="token comment"># 厂商</span>

    __current_voltage <span class="token operator">=</span> <span class="token number">0.5</span> <span class="token comment"># 当前电压 私有变量</span>

    <span class="token keyword">def</span> <span class="token function">call_by_4g</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;4g呼叫模式&#39;</span><span class="token punctuation">)</span>
        

<span class="token comment"># 单继承      </span>
<span class="token keyword">class</span> <span class="token class-name">Phone_2023</span><span class="token punctuation">(</span>Phone<span class="token punctuation">)</span><span class="token punctuation">:</span>

    face_recognize <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token comment">#  脸部识别</span>

    <span class="token keyword">def</span> <span class="token function">call_by_5g</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;5g呼叫模式&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">NFCReader</span><span class="token punctuation">:</span>

    company <span class="token operator">=</span> <span class="token string">&#39;x米&#39;</span> <span class="token comment"># 厂商</span>
    nfc_type <span class="token operator">=</span> <span class="token string">&#39;第五代&#39;</span>
    product <span class="token operator">=</span> <span class="token string">&#39;HH&#39;</span>

    <span class="token keyword">def</span> <span class="token function">read_card</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;读取NFC卡&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">wrte_card</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;写入NFC卡&#39;</span><span class="token punctuation">)</span>    

<span class="token keyword">class</span> <span class="token class-name">Remote_control</span><span class="token punctuation">:</span>
    rc_type <span class="token operator">=</span> <span class="token string">&#39;红外遥控&#39;</span>

    <span class="token keyword">def</span> <span class="token function">controller</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;红外遥控器开启&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 多继承</span>
<span class="token keyword">class</span> <span class="token class-name">Phone_new</span><span class="token punctuation">(</span>Phone_2023<span class="token punctuation">,</span> NFCReader<span class="token punctuation">,</span> Remote_control<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">msg</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我是具备4g呼叫、5g呼叫和NFC与红外遥控功能的手机。&#39;</span><span class="token punctuation">)</span>       


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    phone <span class="token operator">=</span> Phone_2023<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone<span class="token punctuation">.</span>call_by_5g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>phone<span class="token punctuation">.</span>company<span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;------------------------------------------&#39;</span><span class="token punctuation">)</span>

    phone_new <span class="token operator">=</span> Phone_new<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone_new<span class="token punctuation">.</span>msg<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone_new<span class="token punctuation">.</span>call_by_4g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone_new<span class="token punctuation">.</span>call_by_5g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    phone_new<span class="token punctuation">.</span>controller<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 厂商输出:小米,说明后者继承的类相同属性不会覆盖前者</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;厂商输出:</span><span class="token interpolation"><span class="token punctuation">{</span>phone_new<span class="token punctuation">.</span>company<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h5 id="复写和使用" tabindex="-1"><a class="header-anchor" href="#复写和使用" aria-hidden="true">#</a> 复写和使用</h5><p>​ 子类继承父类的成员属性和成员方法后，如果对其“不满意”，那么可以进行复写。</p><p>​ 即：在子类中重新定义同名的属性或方法即可。</p><figure><img src="`+Y+`" alt="复写示例图" tabindex="0" loading="lazy"><figcaption>复写示例图</figcaption></figure><h5 id="调用父类同名成员" tabindex="-1"><a class="header-anchor" href="#调用父类同名成员" aria-hidden="true">#</a> 调用父类同名成员</h5><p>一旦复写父类成员，那么类对象调用成员的时候，就会调用复写后的新成员</p><p>如果需要使用被复写的父类的成员，需要特殊的调用方式：</p><ul><li>调用父类成员 使用成员变量：父类名.成员变量 使用成员方法：父类名.成员方法(self)</li><li>使用super()调用父类成员 使用成员变量：super().成员变量 使用成员方法：super().成员方法()</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
08_调用父类同名成员.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">:</span>
    <span class="token builtin">type</span> <span class="token operator">=</span> <span class="token string">&#39;手机&#39;</span>
    IMEI <span class="token operator">=</span> <span class="token string">&#39;10001&#39;</span> <span class="token comment"># 序列号</span>
    company <span class="token operator">=</span> <span class="token string">&#39;小米&#39;</span> <span class="token comment"># 厂商</span>
    version <span class="token operator">=</span> <span class="token number">1.0</span>

    <span class="token keyword">def</span> <span class="token function">get_version</span><span class="token punctuation">(</span>slef<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> slef<span class="token punctuation">.</span>version

<span class="token keyword">class</span> <span class="token class-name">XMPhone</span><span class="token punctuation">(</span>Phone<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">print_info</span><span class="token punctuation">(</span>slef<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;我是</span><span class="token interpolation"><span class="token punctuation">{</span>slef<span class="token punctuation">.</span>company<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">}</span></span><span class="token string">,序列号是</span><span class="token interpolation"><span class="token punctuation">{</span>Phone<span class="token punctuation">.</span>IMEI<span class="token punctuation">}</span></span><span class="token string">,版本号是</span><span class="token interpolation"><span class="token punctuation">{</span>Phone<span class="token punctuation">.</span>get_version<span class="token punctuation">(</span>slef<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">print_version</span><span class="token punctuation">(</span>slef<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;手机版本号是</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    xmPhone <span class="token operator">=</span> XMPhone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 我是小米手机,序列号是10001,版本号是1.0</span>
    xmPhone<span class="token punctuation">.</span>print_info<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 手机版本号是1.0</span>
    xmPhone<span class="token punctuation">.</span>print_version<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h4><h5 id="为什么需要类型注解" tabindex="-1"><a class="header-anchor" href="#为什么需要类型注解" aria-hidden="true">#</a> 为什么需要类型注解？</h5><figure><img src="`+U+`" alt="类型注解提示图" tabindex="0" loading="lazy"><figcaption>类型注解提示图</figcaption></figure><h5 id="什么是类型注解" tabindex="-1"><a class="header-anchor" href="#什么是类型注解" aria-hidden="true">#</a> 什么是类型注解</h5><p>​ Python:在3.5版本的时候引入了类型注解，以方便静态类型检查工具，IDE等第三方工具。</p><p>​ 类型注解：在代码中涉及数据交互的地方，提供数据类型的注解（显式的说明）。</p><p>主要功能：</p><ul><li>帮助第三方DE工具（如PyCharm)对代码进行类型推断，协助做代码提示</li><li>帮助开发者自身对变量进行类型注释</li></ul><p>支持： 变量的类型注解 函数（方法）形参列表和返回值的类型注解</p><h6 id="变量的类型注解" tabindex="-1"><a class="header-anchor" href="#变量的类型注解" aria-hidden="true">#</a> 变量的类型注解</h6><blockquote><p>基础语法：</p></blockquote><pre><code>变量:类型
</code></pre><blockquote><p>基础数据类型注解：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>var_1<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
var_2<span class="token punctuation">:</span> f1oat <span class="token operator">=</span> <span class="token number">3.1415926</span>
var_3<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">True</span>
var_4<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;itheima&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类对象类型注解：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">student</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
stu<span class="token punctuation">:</span>student student<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="容器的类型注解" tabindex="-1"><a class="header-anchor" href="#容器的类型注解" aria-hidden="true">#</a> 容器的类型注解</h6><blockquote><p>基础容器类型注解：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_1ist<span class="token punctuation">:</span> 1ist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
my_tuple<span class="token punctuation">:</span> <span class="token builtin">tuple</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
my_set<span class="token punctuation">:</span> <span class="token builtin">set</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>
my_dict<span class="token punctuation">:</span> <span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;itheima&quot;</span><span class="token punctuation">:</span><span class="token number">666</span><span class="token punctuation">}</span>
my_str<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;itheima&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>容器类型详细注解：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>my_list<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
my_tuple<span class="token punctuation">:</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">bool</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;itheima&quot;</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
my_set<span class="token punctuation">:</span> <span class="token builtin">set</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
my_dict<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;itheima&quot;</span><span class="token punctuation">:</span><span class="token number">666</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>元组类型设置类型详细注解，需要将每一个元素都标记出来。</li><li>字典类型设置类型详细注解，需要2个类型，第一个是key第二个是value。</li></ul><h6 id="注释中进行类型注解" tabindex="-1"><a class="header-anchor" href="#注释中进行类型注解" aria-hidden="true">#</a> 注释中进行类型注解</h6><blockquote><p>语法：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># type: 类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
var_1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># type: int</span>
var_2 <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment"># type: dict[str, int]</span>
var_3 <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># type: Stu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="类型注解的限制" tabindex="-1"><a class="header-anchor" href="#类型注解的限制" aria-hidden="true">#</a> 类型注解的限制</h6><p>类型注解主要功能在于：</p><ul><li>帮助第三方IDE工具（如PyCharm)对代码进行类型推断，协助做代码提示。</li><li>帮助开发者自身对变量进行类型注释（备注）。</li></ul><p>并不会真正的对类型做验证和判断。</p><p>也就是，类型注解仅仅是提示性的，不是决定性的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>var_1<span class="token punctuation">:</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token string">&quot;itheima&quot;</span>
var_2<span class="token punctuation">:</span><span class="token builtin">str</span> <span class="token operator">=</span> <span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上代码，是不会报错的哦。</p><h6 id="函数和方法的类型注解" tabindex="-1"><a class="header-anchor" href="#函数和方法的类型注解" aria-hidden="true">#</a> 函数和方法的类型注解</h6><p><strong>形参注解</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b <span class="token comment"># type: int</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><figure><img src="`+M+`" alt="形参效果图" tabindex="0" loading="lazy"><figcaption>形参效果图</figcaption></figure><p><strong>返回值注解</strong></p><p>除了上面的那种 注释中进行类型注解 以外还可以用如下方式：</p><pre><code>def add(a: int, b:int) -&gt; int:
    return a+b    

if __name__ == &#39;__main__&#39;:
    print(add(2, 3))
</code></pre><figure><img src="`+V+'" alt="返回值注解2图" tabindex="0" loading="lazy"><figcaption>返回值注解2图</figcaption></figure><h6 id="union联合注解" tabindex="-1"><a class="header-anchor" href="#union联合注解" aria-hidden="true">#</a> Union联合注解</h6><p><strong>变量使用Union</strong></p><figure><img src="'+L+'" alt="需要使用Union的场景图" tabindex="0" loading="lazy"><figcaption>需要使用Union的场景图</figcaption></figure><figure><img src="'+X+'" alt="使用Union后的场景图" tabindex="0" loading="lazy"><figcaption>使用Union后的场景图</figcaption></figure><p><strong>函数使用Union</strong></p><figure><img src="'+W+'" alt="函数使用Union" tabindex="0" loading="lazy"><figcaption>函数使用Union</figcaption></figure><figure><img src="'+K+`" alt="函数使用Union效果图" tabindex="0" loading="lazy"><figcaption>函数使用Union效果图</figcaption></figure><h6 id="类型注解相关代码" tabindex="-1"><a class="header-anchor" href="#类型注解相关代码" aria-hidden="true">#</a> 类型注解相关代码</h6><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
09_类型注解.py
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> json

<span class="token comment"># 变量类型注解</span>
var_1<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
var_2<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;aa&#39;</span>
var_3<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 类对象类型注解</span>
<span class="token keyword">class</span> <span class="token class-name">Stu</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

stu<span class="token punctuation">:</span> Stu <span class="token operator">=</span> Stu<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 基础容器类型注解</span>
list_1<span class="token punctuation">:</span> <span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
tuple_1<span class="token punctuation">:</span> <span class="token builtin">tuple</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
dict_1<span class="token punctuation">:</span> <span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span>

<span class="token comment"># 容器类型的详细注解</span>
list_11<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
tuple_11<span class="token punctuation">:</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
dict_11<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span>

<span class="token comment"># 在注释中进行类型注解</span>
var_11 <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment"># type: int</span>
var_22 <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;: 28}&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">3</span>
var_33 <span class="token operator">=</span> fun1<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># type: int    </span>

<span class="token comment"># 类型注解的限制, 不会报错</span>
var_12<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token string">&#39;qqqq&#39;</span>
var_13<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token number">22</span>

<span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b <span class="token comment"># type: int</span>

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b    

<span class="token comment"># 使用Union类型</span>
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Union
my_list<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>Union<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span> 

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> Union<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Union<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> data

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h4><p>​ 多态：指的是：多种状态，即完成某个行为时，使用不同的对象会得到不同的状态。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
10_多态.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;喵喵喵&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">speak</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;汪汪汪&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">make_noise</span><span class="token punctuation">(</span>animal<span class="token punctuation">:</span> Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    animal<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    cat <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
    dog <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
    make_noise<span class="token punctuation">(</span>cat<span class="token punctuation">)</span>
    make_noise<span class="token punctuation">(</span>dog<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql入门和实战" tabindex="-1"><a class="header-anchor" href="#sql入门和实战" aria-hidden="true">#</a> SQL入门和实战</h2><p>省略</p><h4 id="python-mysql" tabindex="-1"><a class="header-anchor" href="#python-mysql" aria-hidden="true">#</a> Python &amp; mysql</h4><h5 id="pymysql" tabindex="-1"><a class="header-anchor" href="#pymysql" aria-hidden="true">#</a> pymysql</h5><p>除了使用图形化工具以外，我们也可以使用编程语言来执行SQL从而操作数据库。</p><p>在Python中，使用第三方库：pymysql来完成对MySQL数据库的操作。</p><p>安装：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install pymysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_创建到Mysql的数据库连接.py
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> Connection

<span class="token comment"># 获取到Mysql数据库的连接对象</span>
conn <span class="token operator">=</span> Connection<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 主机名（或IP地址）</span>
    port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment"># 端口，默认3306</span>
    user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 账户名</span>
    passwd<span class="token operator">=</span><span class="token string">&#39;password&#39;</span> <span class="token comment"># 密码</span>
<span class="token punctuation">)</span>

<span class="token comment"># 打印Mysql数据库软件信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>conn<span class="token punctuation">.</span>get_server_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 执行非查询性质sql</span>
<span class="token comment"># 获取游标对象</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 先选择数据库</span>
conn<span class="token punctuation">.</span>select_db<span class="token punctuation">(</span><span class="token string">&#39;py_test01&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 使用游标对象，执行sql语句</span>
<span class="token comment"># cursor.execute(&#39;CREATE TABLE test_pymysql(id INT, info VARCHAR(255))&#39;)</span>


<span class="token comment"># 执行查询性质的sql</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;select * from test_pymysql&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 获取查询结果</span>
results<span class="token punctuation">:</span> <span class="token builtin">tuple</span> <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>

<span class="token comment"># 关闭到数据库的连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="commit提交" tabindex="-1"><a class="header-anchor" href="#commit提交" aria-hidden="true">#</a> commit提交</h5><h6 id="手动提交" tabindex="-1"><a class="header-anchor" href="#手动提交" aria-hidden="true">#</a> 手动提交</h6><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_mysql的commit提交.py
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> Connection

<span class="token comment"># 获取到Mysql数据库的连接对象</span>
conn <span class="token operator">=</span> Connection<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 主机名（或IP地址）</span>
    port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment"># 端口，默认3306</span>
    user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 账户名</span>
    passwd<span class="token operator">=</span><span class="token string">&#39;mysql8.0&#39;</span> <span class="token comment"># 密码</span>
<span class="token punctuation">)</span>

<span class="token comment"># 得到游标</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 选择数据库</span>
conn<span class="token punctuation">.</span>select_db<span class="token punctuation">(</span><span class="token string">&#39;py_test01&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 执行sql</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into test_pymysql values(2, &quot;bb&quot;)&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># commit,不进行这步数据无法插入</span>
conn<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭到数据库的连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="自动提交" tabindex="-1"><a class="header-anchor" href="#自动提交" aria-hidden="true">#</a> 自动提交</h6><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_mysql的commit提交.py
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> pymysql <span class="token keyword">import</span> Connection

<span class="token comment"># 获取到Mysql数据库的连接对象</span>
conn <span class="token operator">=</span> Connection<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 主机名（或IP地址）</span>
    port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment"># 端口，默认3306</span>
    user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 账户名</span>
    passwd<span class="token operator">=</span><span class="token string">&#39;mysql8.0&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 密码</span>
    autocommit<span class="token operator">=</span><span class="token boolean">True</span> <span class="token comment"># 设置自动提交</span>
<span class="token punctuation">)</span>

<span class="token comment"># 得到游标</span>
cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 选择数据库</span>
conn<span class="token punctuation">.</span>select_db<span class="token punctuation">(</span><span class="token string">&#39;py_test01&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 执行sql</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&#39;insert into test_pymysql values(2, &quot;bb&quot;)&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭到数据库的连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pyspark" tabindex="-1"><a class="header-anchor" href="#pyspark" aria-hidden="true">#</a> PySpark</h2><p>​ 暂时省略</p><h1 id="python进阶" tabindex="-1"><a class="header-anchor" href="#python进阶" aria-hidden="true">#</a> python进阶</h1><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><blockquote><p>非闭包的错误使用方式图</p></blockquote><figure><img src="`+Q+'" alt="非闭包的错误使用方式图" tabindex="0" loading="lazy"><figcaption>非闭包的错误使用方式图</figcaption></figure><blockquote><p>转换闭包形式的代码图</p></blockquote><figure><img src="'+$+`" alt="转换闭包形式的代码图" tabindex="0" loading="lazy"><figcaption>转换闭包形式的代码图</figcaption></figure><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
03_闭包实现ATM小案例.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">account_update</span><span class="token punctuation">(</span>init_amount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">atm</span><span class="token punctuation">(</span>num<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> deposit<span class="token punctuation">:</span> <span class="token builtin">bool</span><span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> init_amount
        <span class="token keyword">if</span> deposit<span class="token punctuation">:</span>
            init_amount <span class="token operator">+=</span> num
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;存款:+</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">,账户余额:</span><span class="token interpolation"><span class="token punctuation">{</span>init_amount<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            init_amount <span class="token operator">-=</span> num
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;取款:-</span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">,账户余额:</span><span class="token interpolation"><span class="token punctuation">{</span>init_amount<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> atm        

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    fn <span class="token operator">=</span> account_update<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 存款:+100,账户余额:100</span>
    fn<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token comment"># 取款:-50,账户余额:50</span>
    fn<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单闭包" tabindex="-1"><a class="header-anchor" href="#简单闭包" aria-hidden="true">#</a> 简单闭包</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_简单闭包.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>logo<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;&lt;</span><span class="token interpolation"><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span><span class="token string">&gt;</span><span class="token interpolation"><span class="token punctuation">{</span>msg<span class="token punctuation">}</span></span><span class="token string">&lt;</span><span class="token interpolation"><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span><span class="token string">&gt;&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> inner

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    fn1 <span class="token operator">=</span> outer<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;张三&gt;121&lt;张三&gt;</span>
    fn1<span class="token punctuation">(</span><span class="token string">&#39;121&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;张三&gt;abc&lt;张三&gt;</span>
    fn1<span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>

    fn2 <span class="token operator">=</span> outer<span class="token punctuation">(</span><span class="token string">&#39;121&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># &lt;121&gt;加油&lt;121&gt;</span>
    fn2<span class="token punctuation">(</span><span class="token string">&#39;加油&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>修改外部函数变量的值：需要使用nonlocal关键字修饰外部函数的变量</p><p>才可在内部函数中修改它。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_修改简单闭包外部函数变量的值.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">outher</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> num1
        num1 <span class="token operator">+=</span> num2
        <span class="token keyword">print</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span>

    <span class="token keyword">return</span> inner    

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    fn1 <span class="token operator">=</span> outher<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token comment"># 20</span>
    fn1<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token comment"># 40</span>
    fn1<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包注意事项" tabindex="-1"><a class="header-anchor" href="#闭包注意事项" aria-hidden="true">#</a> 闭包注意事项</h3><p>优点，使用闭包可以让我们得到：</p><ul><li>无需定义全局变量即可实现通过函数，持续的访问、修改某个值。</li><li>闭包使用的变量的所用于在函数内，难以被错误的调用修改。</li></ul><p>缺点：</p><ul><li>由于内部函数持续引用外部函数的值，所以会导致这一部分内存空间不被释放，一直占用内存。</li></ul><h3 id="闭包总结" tabindex="-1"><a class="header-anchor" href="#闭包总结" aria-hidden="true">#</a> 闭包总结</h3><ol><li><p>什么是闭包？</p><p>定义双层嵌套函数，内层函数可以访问外层函数的变量。</p><p>将内存函数作为外层函数的返回，此内层函数就是闭包函数。</p></li><li><p>闭包的好处和缺点？</p><ul><li>优点：不定义全局变量，也可以让函数持续访问和修改一个处部变量。</li><li>优点：闭包函数引用的外部变量，是外层函数的内部变量。作用域封闭难以被误操作修改。</li><li>缺点：额外的内存占用。</li></ul></li><li><p>nonlocal关键字的作用？ 在闭包函数（内部函数中）想要修改外部函数的变量值。 需要用nonlocal声明这个外部变量。</p></li></ol><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><p>​ 装饰器其实也是一种闭包，其功能就是在不破坏目标函数原有的代码和功能的前提下，为目标函数增加新功能。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> random
    <span class="token keyword">import</span> time
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;睡眠中...&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>rahdom<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>希望给sleep函数，增加一个功能：</p><ul><li>在调用sleep前输出：我要睡觉了</li><li>在调用sleep后输出：我起床了</li></ul><blockquote><p>闭包写法</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_装饰器得闭包写法.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我要睡觉了&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡醒了&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> inner

<span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> random
    <span class="token keyword">import</span> time

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡眠中...&#39;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    fn <span class="token operator">=</span> outer<span class="token punctuation">(</span>sleep<span class="token punctuation">)</span>
    fn<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>语法糖写法</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_装饰器得语法糖写法.py
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我要睡觉了&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡醒了&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> inner

<span class="token decorator annotation punctuation">@outer</span>
<span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">import</span> random
    <span class="token keyword">import</span> time

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;睡眠中...&#39;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2><p>设计模式是一种编程套路，可以极大的方便程序的开发。</p><p>最常见、最经典的设计模式，就是我们所学习的面向对象了。</p><p>除了面向对象外，在编程中也有很多既定的套路可以方便开发，我们称之为设计模式：</p><ul><li>单例、工厂模式</li><li>建造者、责任链、状态、备忘录、解释器、访问者、观察者、中介、模板、代理模式</li><li>等等模式</li></ul><p>设计模式非常多，我们主要挑选了2个经常用到的进行讲解。</p><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3><blockquote><p>为什么需要单例模式？</p></blockquote><figure><img src="`+Z+'" alt="为什么需要单例模式图？" tabindex="0" loading="lazy"><figcaption>为什么需要单例模式图？</figcaption></figure><p>单例模式(Singleton Pattern)是一种常用的软件设计模式，该模式的主要目的是确保某一个类只有一个实例存在。</p><p>在整个系统中，某个类只能出现一个实例时，单例对象就能派上用场。</p><ul><li>定义：保证一个类只有一个实例，并提供一个访问它的全局访问点中。</li><li>适用场景：当一个类只能有一个实例，而客户可以从一个众所周知的访问点访问它时。</li></ul><blockquote><p>单例模式的实现</p></blockquote><figure><img src="'+J+`" alt="单例模式的实现图" tabindex="0" loading="lazy"><figcaption>单例模式的实现图</figcaption></figure><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
test.py
&quot;&quot;&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">StrTools</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

str_tools <span class="token operator">=</span> StrTools<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_单例模式.py
&quot;&quot;&quot;</span>

<span class="token keyword">from</span> test1 <span class="token keyword">import</span> str_tools

t1 <span class="token operator">=</span> str_tools
t2 <span class="token operator">=</span> str_tools

<span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t1 <span class="token operator">==</span> t2<span class="token punctuation">)</span>

<span class="token comment"># &lt;test1.StrTools object at 0x000002986C311CD0&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
<span class="token comment"># &lt;test1.StrTools object at 0x000002986C311CD0&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3><p>当需要大量创建一个类的实例的时候，可以使用工厂模式。</p><p>即，从原生的使用类的构造去创建对象的形式</p><p>迁移到，基于工厂提供的方法去创建对象的形式。</p><blockquote><p>转变为工厂模式</p></blockquote><figure><img src="`+nn+`" alt="转变为工厂模式" tabindex="0" loading="lazy"><figcaption>转变为工厂模式</figcaption></figure><blockquote><p>举例代码：</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_工厂模式.py
&quot;&quot;&quot;</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">HWCar</span><span class="token punctuation">(</span>Car<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">WLCar</span><span class="token punctuation">(</span>Car<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">XMCar</span><span class="token punctuation">(</span>Car<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">class</span> <span class="token class-name">CarFactory</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get_car</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> car_type<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> car_type <span class="token operator">==</span> <span class="token string">&#39;华为&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> HWCar<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> car_type <span class="token operator">==</span> <span class="token string">&#39;蔚来&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> WLCar<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> car_type <span class="token operator">==</span> <span class="token string">&#39;小米&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> XMCar
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>car_type<span class="token punctuation">}</span></span><span class="token string">车子并没有Class&#39;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>        

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    car_factory <span class="token operator">=</span> CarFactory<span class="token punctuation">(</span><span class="token punctuation">)</span>
    car <span class="token operator">=</span> car_factory<span class="token punctuation">.</span>get_car<span class="token punctuation">(</span><span class="token string">&#39;华为&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># &lt;class &#39;__main__.HWCar&#39;&gt;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用工厂类的get_person(0方法去创建具体的类对象。</p><p>优点：</p><ul><li>大批量创建对象的时候有统一的入口，易于代码维护。</li><li>当发生修改，仅修改工厂类的创建方法即可。</li><li>符合现实世界的模式，即由工厂来制作产品（对象）。</li></ul><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><h3 id="进程、线程" tabindex="-1"><a class="header-anchor" href="#进程、线程" aria-hidden="true">#</a> 进程、线程</h3><p>​ 现代操作系统比如Mac OS X,UNIX,Linux,Windows等，都是支持“多任务”的操作系统。</p><p>​ 进程：就是一个程序，运行在系统之上，那么便称之这个程序为一个运行进程，并分配进程ID方便系统管理。</p><p>​ 线程：线程是归属于进程的，一个进程可以开启多个线程，执行不同的工作，是进程的实际工作最小单位。</p><p>​ <img src="`+sn+'" alt="任务管理器图" loading="lazy"></p><p>​ 进程就好比一家公司，是操作系统对程序进行运行管理的单位。</p><p>​ 线程就好比公司的员工，进程可以有多个线程（员工)，是进程实际的工作者。</p><p>​ 操作系统中可以运行多个进程，即多任务运行。</p><p>​ 一个进程内可以运行多个线程，即多线程运行。</p><blockquote><p>进程、线程注意点</p></blockquote><figure><img src="'+an+`" alt="进程、线程注意点图" tabindex="0" loading="lazy"><figcaption>进程、线程注意点图</figcaption></figure><h4 id="并行执行" tabindex="-1"><a class="header-anchor" href="#并行执行" aria-hidden="true">#</a> 并行执行</h4><p>并行执行的意思指的是同一时间做不同的工作。</p><p>进程之间就是并行执行的，操作系统可以同时运行好多程序，这些程序都是在并行执行。</p><p>除了进程外，线程其实也是可以并行执行的。</p><p>也就是比如一个Python程序，其实是完全可以做到：</p><ul><li>一个线程在输出：你好</li><li>一个线程在输出：Hello</li></ul><p>像这样一个程序在同一时间做两件乃至多件不同的事情，我们就称之为：多线程并行执行。</p><h3 id="多线程编程" tabindex="-1"><a class="header-anchor" href="#多线程编程" aria-hidden="true">#</a> 多线程编程</h3><h4 id="threading模块" tabindex="-1"><a class="header-anchor" href="#threading模块" aria-hidden="true">#</a> threading模块</h4><p>绝大多数编程语言，都允许多线程编程，Pyhton也不例外。</p><p>Python的多线程可以通过threading模块来实现。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_多线程.py
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> threading

<span class="token triple-quoted-string string">&quot;&quot;&quot;
group=None, 暂时无用，未来功能的预留参数
target=None, 执行的目标任务名
name=None, 线程名，一般不用设置
args=(), 以元组的方式给执行任务传参 
kwargs=None, 以字典方式给执行任务传参
*,
daemon=None
&quot;&quot;&quot;</span>
thread_obj <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>

<span class="token punctuation">)</span>

<span class="token comment"># 启动线程，让线程工作</span>
thread_obj<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_多线程编程.py
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread

<span class="token keyword">def</span> <span class="token function">sing</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">在唱歌...&#39;</span></span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">dance</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">在跳舞...&#39;</span></span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    <span class="token comment"># 创建线程</span>
    sing_thread <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sing<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 注意：元组必须得带有逗号</span>
    dance_thread <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>dance<span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment"># 启动线程</span>
    sing_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    dance_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2><h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> socket</h3><p>​ socket(简称套接字)是进程之间通信一个工具，好比现实生活中的插座，所有的家用电器要想工作都是基于插座进行，进程之间想要进行网络通信需要socket。</p><p>​ Socket: 负责进程之间的网络数据传输，好比数据的搬运工。</p><h3 id="客户端和服务端" tabindex="-1"><a class="header-anchor" href="#客户端和服务端" aria-hidden="true">#</a> 客户端和服务端</h3><p>​ 2个进程之间通过Socket进行相互通讯，就必须有服务端和客户端。</p><p>​ Socket服务端：等待其它进程的连接、可接受发来的消息、可以回复消息。</p><p>​ Socket客户端：主动连接服务端、可以发送消息、可以接收回复。</p><p>​ <img src="`+tn+`" alt="socket的客户端和服务端模拟图" loading="lazy"></p><h3 id="socket服务端开发" tabindex="-1"><a class="header-anchor" href="#socket服务端开发" aria-hidden="true">#</a> Socket服务端开发</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_socket服务端编程.py
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> socket

<span class="token comment"># 1. 创建socket对象</span>
socket_server <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 2. 绑定socket_server到指定的IP和地址</span>
host <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span>
port <span class="token operator">=</span> <span class="token number">8000</span>
socket_server<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 3. 服务端开始监听端口</span>
backlog <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># backlog为int整数，表示允许的连接数量，超出的会等待，可可以不填，不填会自动设置一个合理值</span>
socket_server<span class="token punctuation">.</span>listen<span class="token punctuation">(</span>backlog<span class="token punctuation">)</span>

<span class="token comment"># 4. 接收客户端连接，获得连接对象</span>
<span class="token comment"># accept方法是阻塞方法，如果没有连接，会卡再当前这一行不向下执行代码</span>
<span class="token comment"># accept返回的是一个二元元组，可以使用上述形式，用两个变量接收二元元组的2个元素</span>
conn<span class="token punctuation">,</span> address <span class="token operator">=</span> socket_server<span class="token punctuation">.</span>accept<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;接收到客户端连接，连接来着:</span><span class="token interpolation"><span class="token punctuation">{</span>address<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 接收客户端信息，要使用客户端和服务端本次的连接对象，而非socket_server对象</span>
<span class="token comment"># recv接受的参数是缓冲区大小，一般给1024即可</span>
<span class="token comment"># recv方法的返回值是一个字节数组也就是bytes对象，不是字符串，可以通过decode方法通过UTF-8等码.将字节数数组转换为字符申对象</span>
data<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> conn<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;接收到客户端发送的消息：</span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 发送回复信息</span>
msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入您要回复的消息：&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># encode可以将字符串编码为字节数组对象</span>
conn<span class="token punctuation">.</span>send<span class="token punctuation">(</span>msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 关闭连接</span>
conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
socket_server<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="socket客户端开发" tabindex="-1"><a class="header-anchor" href="#socket客户端开发" aria-hidden="true">#</a> Socket客户端开发</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
02_socket客户端编程.py
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> socket

<span class="token comment"># 1. 创建socket对象</span>
socket_client <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 2. 连接到服务端</span>
host <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span>
port <span class="token operator">=</span> <span class="token number">8000</span>
socket_client<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 3. 发送消息</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    send_msg <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入要发送的消息：&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> send_msg <span class="token operator">==</span> <span class="token string">&#39;exit&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token comment"># 通过encode将字符串编码为字节数组</span>
    socket_client<span class="token punctuation">.</span>send<span class="token punctuation">(</span>send_msg<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment"># 4. 接收服务器返回的消息</span>
    recv_data <span class="token operator">=</span> socket_client<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;服务器返回的消息:</span><span class="token interpolation"><span class="token punctuation">{</span>recv_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token comment"># 5. 关闭连接</span>
socket_client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h2><p>​ 正则表达式，又称规则表达式(Regular Expression),是使用单个字符串来描述、匹配某个句法规则的字符串，常被用来检索、替换那些符合某个模式（规则）的文本。</p><p>​ 简单来说，正则表达式就是使用：字符串定义规则，并通过规则去验证字符串是否匹配。</p><p>​ 比如，验证一个字符串是否是符合条件的电子邮箱地址，只需要配置好正则规则，即可匹配任意邮箱。</p><p>​ 比如通过正则规则：(w-]+(.w-]+)*@w-]+(.w-]+)+$)即可匹配一个字符串是否是标准邮箱格式。</p><p>​ 但如果不使用正则，使用if else来对字符串做判断就非常困难了。</p><h3 id="简单字符串匹配" tabindex="-1"><a class="header-anchor" href="#简单字符串匹配" aria-hidden="true">#</a> 简单字符串匹配</h3><p>​ Python正则表达式，使用re模块，并基于re模块中三个基础方法来做正则匹配。</p><p>​ 分别是：match、search、findall三个基础方法。</p><p>​</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
01_正则表达式入门.py
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> re

<span class="token triple-quoted-string string">&#39;&#39;&#39;
    match匹配: 

    从被匹配字符串开头进行匹配，
    匹配成功(只匹配第一个命中项)返回匹配对象（包含匹配的信息），
    匹配不成功返回空。
&#39;&#39;&#39;</span>
<span class="token comment"># 可以匹配到的示例</span>
s1 <span class="token operator">=</span> <span class="token string">&#39;python 1111 python 12321&#39;</span>
result_match_1<span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
<span class="token comment"># &lt;re.Match object; span=(0, 6), match=&#39;python&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_match_1<span class="token punctuation">)</span> 
<span class="token comment"># (0, 6)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_match_1<span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># python</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_match_1<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 无法匹配到的示例</span>
s2 <span class="token operator">=</span> <span class="token string">&#39;1python 1111 python 12321&#39;</span>
result_match_2<span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token comment"># None</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_match_2<span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
    search: 搜索匹配(只匹配第一个命中项)
&#39;&#39;&#39;</span>
a1 <span class="token operator">=</span> <span class="token string">&#39;1python 1111 python 12321&#39;</span>
result_search_1 <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span>
<span class="token comment"># &lt;re.Match object; span=(0, 6), match=&#39;python&#39;&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_search_1<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_search_1<span class="token punctuation">.</span>span<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># python</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_search_1<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&#39;&#39;&#39;
    findall: 搜索全部(匹配所有命中项)
&#39;&#39;&#39;</span>
t1 <span class="token operator">=</span> <span class="token string">&#39;1python 1111 python 12321&#39;</span>
result_findall_1 <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;python&#39;</span><span class="token punctuation">,</span> t1<span class="token punctuation">)</span>
<span class="token comment"># [&#39;python&#39;, &#39;python&#39;]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result_findall_1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="元字符匹配" tabindex="-1"><a class="header-anchor" href="#元字符匹配" aria-hidden="true">#</a> 元字符匹配</h3><h4 id="单字符匹配" tabindex="-1"><a class="header-anchor" href="#单字符匹配" aria-hidden="true">#</a> 单字符匹配</h4><table><thead><tr><th>字符</th><th>功能</th></tr></thead><tbody><tr><td>.</td><td>匹配任意1个字符（除了\\n），.匹配点本身</td></tr><tr><td>[ ]</td><td>匹配[ ]中列举的字符</td></tr><tr><td>\\d</td><td>匹配数字，即0-9</td></tr><tr><td>\\D</td><td>匹配非数字</td></tr><tr><td>\\s</td><td>匹配空白，即空格、tab键</td></tr><tr><td>\\S</td><td>匹配非空白</td></tr><tr><td>\\w</td><td>匹配单词字符，即a-z、A-Z、0-9、_</td></tr><tr><td>\\W</td><td>匹配非单词字符</td></tr></tbody></table><h4 id="数量匹配" tabindex="-1"><a class="header-anchor" href="#数量匹配" aria-hidden="true">#</a> 数量匹配</h4><table><thead><tr><th>字符</th><th>功能</th></tr></thead></table><ul><li>| 匹配前一个规则的字符出现0至无数次<br> + | 匹配前一个规则的字符出现1至无数次<br> ? | 匹配前一个规则的字符出现0次或1次<br> {m} | 匹配前一个规则的字符出现m次<br> {m,} | 匹配前一个规则的字符出现最少m次<br> {m, n} | 匹配前一个规则的字符出现m到n次</li></ul><p>注意: {m,n}不能有空格！</p><h4 id="边界匹配" tabindex="-1"><a class="header-anchor" href="#边界匹配" aria-hidden="true">#</a> 边界匹配</h4><table><thead><tr><th style="text-align:center;">字符</th><th>功能</th></tr></thead><tbody><tr><td style="text-align:center;">^</td><td>匹配字符串开头</td></tr><tr><td style="text-align:center;">$</td><td>匹配字符串结尾</td></tr><tr><td style="text-align:center;">\\b</td><td>匹配一个单词的边界</td></tr><tr><td style="text-align:center;">\\B</td><td>匹配非单词边界</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">字符</th><th>功能</th></tr></thead><tbody><tr><td style="text-align:center;">|</td><td>匹配左右任意一个表达式</td></tr><tr><td style="text-align:center;">()</td><td>将括号中字符作为一个分组</td></tr></tbody></table><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h2><p>省略</p>`,309);function In(On,En){const t=l("ExternalLinkIcon");return i(),o("div",null,[pn,n(" > 字符串的三种定义： "),on,s("p",null,[n("更多转义字符查看： "),s("a",ln,[n(" Python3 字符串 | 菜鸟教程 (runoob.com) "),e(t)])]),cn,s("p",null,[n("更多数据类型占位符查看： "),s("a",un,[n(" Python3 字符串 | 菜鸟教程 (runoob.com) "),e(t)])]),rn,s("p",null,[n("[ Python 运算符 | 菜鸟教程 ("),s("a",dn,[n("runoob.com"),e(t)]),n(") ]("),s("a",kn,[n("https://www.runoob.com/python/python-"),e(t)]),n(" operators.html#ysf4)")]),vn,s("p",null,[n("​ [ Python File(文件) 方法 | 菜鸟教程 ("),s("a",mn,[n("runoob.com"),e(t)]),n(") ]("),s("a",bn,[n("https://m.runoob.com/python/file-"),e(t)]),n(" methods.html)")]),gn,s("p",null,[n("其他参考： "),s("a",hn,[n(" Python File(文件) 方法 | 菜鸟教程 (runoob.com) "),e(t)])]),yn,s("ol",null,[s("li",null,[s("p",null,[n("需要创建包，并且包里需要文件名为： "),s("strong",null,[s("a",_n,[n("init.py"),e(t)])]),n(" (带有两个下划线的)。")])]),fn]),qn,s("p",null,[s("a",wn,[n(" https://pypi.tuna.tsinghua.edu.cn/simple"),e(t)]),n(" 是清华大学提供的一个网站，可供pip程序下载第三方包。")]),xn,s("p",null,[n("​ 官网地址： "),s("a",Pn,[n(" https://pyecharts.org "),e(t)])]),Nn,s("p",null,[n("​ "),s("a",Dn,[n(" 全局配置项 - pyecharts - A Python Echarts Plotting Library built with love."),e(t)])]),Tn])}const Sn=p(en,[["render",In],["__file","python.html.vue"]]);export{Sn as default};
