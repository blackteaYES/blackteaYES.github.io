import{_ as p,V as o,W as c,X as n,Y as s,$ as t,a0 as e,C as i}from"./framework-a71e09ed.js";const l={},u=e(`<h1 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h1><p>  设计模式中的行为型模式有以下几种：</p><ol style="padding-left:5em;"><li><a href="/backEnd/设计模式/行为型模式.html#责任链模式-chain-of-responsibility-pattern">责任链模式(Chain of Responsibility Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#命令模式-command-pattern">命令模式(Command Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#解释器模式-interpreter-pattern">解释器模式(Interpreter Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#迭代器模式-iterator-pattern">迭代器模式(Iterator Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#中介者模式-mediator-pattern">中介者模式(Mediator Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#备忘录模式-memento-pattern">备忘录模式(Memento Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#观察者模式-observer-pattern">观察者模式(Observer Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#状态模式-state-pattern">状态模式(State Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#策略模式-strategy-pattern">策略模式(Strategy Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#模板方法模式-template-method-pattern">模板方法模式(Template Method Pattern)</a></li><li><a href="/backEnd/设计模式/行为型模式.html#访问者模式-visitor-pattern">访问者模式(Visitor Pattern)</a></li></ol><p>  在设计模式中，行为型模式是指关注对象之间的通信和协作，以及如何将职责划分到不同的对象中。行为型模式可以进一步分为类行为型模式和对象行为型模式两类。</p><p>  类行为型模式关注类之间的通信，包括模板方法模式、策略模式和状态模式。其中，模板方法模式定义了算法的骨架，具体实现由子类完成；策略模式定义了一组算法，使它们之间可以互相替换；状态模式允许对象在内部状态改变时改变它的行为。</p><p>  对象行为型模式关注对象之间的通信，包括观察者模式、迭代器模式、责任链模式、命令模式、备忘录模式、访问者模式和中介者模式。其中，观察者模式定义了对象之间的一对多依赖关系，当一个对象状态改变时，所有依赖它的对象都会收到通知；迭代器模式提供一种顺序访问聚合对象中各个元素的方法，而又不暴露聚合对象的内部结构；责任链模式为请求创建一个接收者对象的链，请求沿着链传递，直到有一个对象处理请求；命令模式将请求封装成对象，从而允许使用不同的请求、队列或日志来参数化其他对象；备忘录模式提供了在不破坏封装性的前提下，保存和恢复对象之前状态的能力；访问者模式定义了一组操作，可以在不改变对象结构的前提下，对对象元素进行操作；中介者模式定义了一个中介对象来封装对象之间的交互，从而使对象之间的交互松散耦合。</p><p>  总之，行为型模式关注对象之间的交互和协作，通过将职责分配到不同的对象中，使得系统更加灵活、可扩展和易于维护。</p><h2 id="责任链模式-chain-of-responsibility-pattern" tabindex="-1"><a class="header-anchor" href="#责任链模式-chain-of-responsibility-pattern" aria-hidden="true">#</a> 责任链模式（Chain of Responsibility Pattern）</h2><p>  责任链模式是一种行为型设计模式，它允许将请求沿着处理者链进行传递，直到有一个处理者能够处理请求为止。</p><p>  在责任链模式中，每个处理者都有一个指向下一个处理者的引用，形成一个链式结构。当收到请求时，处理者首先判断自己是否有能力处理该请求，如果有，则处理请求并返回处理结果；如果没有，则将请求传递给下一个处理者，直到有一个处理者能够处理为止。</p><p>  责任链模式可以有效地避免请求发送者和接收者之间的耦合，使得请求发送者无需知道请求会被哪个处理者处理，同时也提高了系统的灵活性和可扩展性。</p><p>  在实际应用中，责任链模式经常被用于日志记录、异常处理、权限验证等场景，例如，在一个Web应用中，可以将请求传递给多个过滤器进行处理，每个过滤器只负责处理自己关心的请求，从而实现请求的过滤和控制。</p><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>  演示如何使用责任链模式实现请求日志记录：</p><p>  场景：一个Web应用需要记录所有进入系统的请求日志，包括请求路径、请求参数、请求时间等信息，并将日志写入数据库。</p><ol><li><p>定义责任链节点类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 请求日志节点类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:12
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">RequestLogger</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">RequestLogger</span> nextHandler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNextHandler</span><span class="token punctuation">(</span><span class="token class-name">RequestLogger</span> nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> nextHandler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行任务
     * <span class="token keyword">@param</span> <span class="token parameter">request</span> 请求对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 执照该顺序执行，越小执行越早
     * <span class="token keyword">@return</span> int
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 打印请求路径
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:19
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PathLogger</span> <span class="token keyword">extends</span> <span class="token class-name">RequestLogger</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;请求路径:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 打印请求参数
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:21
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ParamLogger</span> <span class="token keyword">extends</span> <span class="token class-name">RequestLogger</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;请求参数:{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">101</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 打印请求接收时间
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:22
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TimeLogger</span> <span class="token keyword">extends</span> <span class="token class-name">RequestLogger</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;请求接收时间:{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">102</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 将请求写入库
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:23
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseLogger</span> <span class="token keyword">extends</span> <span class="token class-name">RequestLogger</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;将请求写入库:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            nextHandler<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置责任链：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 责任链配置
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:28
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChainOfResponsibilityPatternConfig</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RequestLogger</span><span class="token punctuation">&gt;</span></span> loggers<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestLogger</span> <span class="token function">requestLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        loggers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">comparingInt</span><span class="token punctuation">(</span><span class="token class-name">RequestLogger</span><span class="token operator">::</span><span class="token function">order</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> loggers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>index <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token class-name">RequestLogger</span> current <span class="token operator">=</span> loggers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">RequestLogger</span> next <span class="token operator">=</span> index <span class="token operator">&lt;</span> loggers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">?</span> loggers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        current<span class="token punctuation">.</span><span class="token function">setNextHandler</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> loggers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对外接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 测试请求日志责任链接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 16:41
 */</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/request/test&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RequestLoggerTestController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RequestLogger</span> requestLogger<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handlerRequest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        requestLogger<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;请求处理成功&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 	<span class="token doc-comment comment">/**
     * 测试 责任链模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testChainOfResponsibilityPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> apiUrl <span class="token operator">=</span> <span class="token string">&quot;request/test/&quot;</span><span class="token operator">+</span>name<span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8080/&quot;</span><span class="token operator">+</span>apiUrl<span class="token punctuation">;</span>

        <span class="token comment">// get请求测试</span>
        <span class="token class-name">String</span> getUrl <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">&quot;?a=1&amp;b=33&amp;c=search&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpResponse</span> httpResponseGet <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>getUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;get请求{},返回内容:{}&quot;</span><span class="token punctuation">,</span> httpResponseGet<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> httpResponseGet<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// post请求测试</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> paramMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        paramMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        paramMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;******&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpResponse</span> httpResponsePost <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">form</span><span class="token punctuation">(</span>paramMap<span class="token punctuation">)</span><span class="token comment">//表单内容</span>
                <span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token comment">//超时，毫秒</span>
                <span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;post请求{},返回内容:{}&quot;</span><span class="token punctuation">,</span> httpResponsePost<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> httpResponsePost<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>  可以看到，责任链模式可以方便地将不同的日志记录节点组合起来，实现灵活的请求日志记录。</p><p>  为方便查看，省略前面的完整信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>handler.PathLogger               : 请求路径:/request/test/%E5%BC%A0%E4%B8%89
handler.ParamLogger              : 请求参数:{&quot;a&quot;:[&quot;1&quot;],&quot;b&quot;:[&quot;33&quot;],&quot;c&quot;:[&quot;search&quot;]}
handler.TimeLogger               : 请求接收时间:2023-03-24 17:24:13
handler.DatabaseLogger           : 将请求写入库:org.apache.catalina.connector.RequestFacade@70d5695e
handler.PathLogger               : 请求路径:/request/test/%E5%BC%A0%E4%B8%89
handler.ParamLogger              : 请求参数:{&quot;password&quot;:[&quot;******&quot;],&quot;username&quot;:[&quot;333333&quot;]}
handler.TimeLogger               : 请求接收时间:2023-03-24 17:24:14
handler.DatabaseLogger           : 将请求写入库:org.apache.catalina.connector.RequestFacade@70d5695e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/chain",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="命令模式-command-pattern" tabindex="-1"><a class="header-anchor" href="#命令模式-command-pattern" aria-hidden="true">#</a> 命令模式（Command Pattern）</h2><p>  命令模式是一种行为型设计模式，它将请求封装成一个对象，从而使不同的请求可以进行参数化，支持撤销操作，以及支持命令队列和日志记录等功能。在命令模式中，请求发送者和请求接收者之间被解耦，请求接收者只需要实现一个执行命令的方法，即可完成请求的处理。命令模式的核心思想是将请求和实现解耦，从而实现请求和实现的松耦合。命令模式常用于实现菜单、工具栏和快捷键等用户界面操作的处理，也常用于实现事务处理、日志记录、撤销操作和重做操作等功能。</p><h3 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h3><p>  这里是一个简单文本编辑器的案例，通过以下步骤实现：</p><ol><li><p>定义命令接口(Command)及其实现类，其中包含执行(execute)和撤销(undo)两个方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 命令接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 20:17
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 执行
     */</span>
    <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 撤销
     */</span>
    <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 添加命令类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 20:18
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 内容
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 开始的位置
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> start<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 文本编辑器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">AddCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">,</span> <span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> start<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> text<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 删除命令类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 22:52
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteCommand</span> <span class="token keyword">implements</span>  <span class="token class-name">Command</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 内容
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 开始的位置
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> start<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 文本编辑器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DeleteCommand</span><span class="token punctuation">(</span><span class="token class-name">Editor</span> editor<span class="token punctuation">,</span> <span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> start<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> editor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> text<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义命令执行器(CommandExecutor)，用于执行和撤销命令，并维护命令历史记录。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 命令执行器类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 20:23
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommandExecutor</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Command</span><span class="token punctuation">&gt;</span></span> historyStack<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CommandExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>historyStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">)</span><span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        historyStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undoCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>historyStack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 进行撤回操作</span>
            <span class="token class-name">Command</span> command <span class="token operator">=</span> historyStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            command<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义文本编辑器(Editor)，包含添加(add)和删除(delete)方法，并将它们封装成命令对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 文本编辑器
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/24 20:20
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Editor</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">CommandExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommandExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">StringBuilder</span> content <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        content<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        content<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        executor<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        executor<span class="token punctuation">.</span><span class="token function">undoCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Editor</span> editor<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 命令模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testCommandPttern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 命令模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AddCommand</span> addCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AddCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span><span class="token string">&quot;你好啊，我是红茶。&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        editor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>addCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;1. 添加命令后，本次编辑器内容：{}&quot;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> text <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DeleteCommand</span> deleteCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteCommand</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        editor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>deleteCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;2. 删除命令后，本次编辑器内容：{}&quot;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        editor<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;3. 撤销之前的命令后，本次编辑器内容：{}&quot;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>  以上代码实现了一个简单的编辑器，支持添加和删除文本，并提供了撤销操作。在添加和删除文本时，会创建相应的命令对象并执行；在撤销操作时，会从命令历史记录中取出最后一个命令对象并执行其撤销操作。</p>`,6),r={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/command",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="解释器模式-interpreter-pattern" tabindex="-1"><a class="header-anchor" href="#解释器模式-interpreter-pattern" aria-hidden="true">#</a> 解释器模式（Interpreter Pattern）</h2><p>  解释器模式是一种行为型设计模式，它定义了一种语言语法的表示，并定义了该语言解释器的解释方法，从而实现对该语言的解释和执行。解释器模式常用于实现编译器、解释器、正则表达式引擎等应用程序。在解释器模式中，通常有两种角色：抽象表达式和具体表达式。抽象表达式定义了解释器的接口和解释方法，具体表达式实现了具体的解释方法。解释器模式的核心思想是将语言解释器和语言语法分离，从而实现语言的灵活扩展和重用。</p><p>  解释器模式的优点是增加新的语法规则相对容易，缺点是增加新的表达式类型比较困难，且解释器的性能通常较低。</p><h3 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h3><p>  使用解释器模式来实现一个简单的DSL（领域特定语言）。</p><p>  假设我们有一个DSL，它由一系列表达式组成，可以用于描述一个人的基本信息。例如，我们可以使用以下语句来描述一个人的基本信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name is John and age is greater than 18 and gender is male
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>  这个语句由三个表达式组成：一个等于运算、一个大于运算和一个等于运算。我们可以使用解释器模式来将这个DSL解析为一个Java对象，并使用这个对象来处理人的基本信息。</p><ol><li><p>首先，我们定义一个接口Expression，它有一个interpret方法用于解析表达式并返回结果。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 表达式接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 15:20
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>

    <span class="token keyword">boolean</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>我们实现两个具体的表达式类：EqualsExpression和GreaterThanExpression，它们分别表示等于和大于运算。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 等于
 *  具体的表达式类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 15:22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EqualsExpression</span> <span class="token keyword">implements</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> variableName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">EqualsExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span> variableName<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>variableName <span class="token operator">=</span> variableName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> variableValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getVariableValue</span><span class="token punctuation">(</span>variableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> variableValue <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> variableValue<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 大于
 * 具体的表达式类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 15:23
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GreaterThanExpression</span> <span class="token keyword">implements</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> variableName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">GreaterThanExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span> variableName<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>variableName <span class="token operator">=</span> variableName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> variableValue <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getVariableValue</span><span class="token punctuation">(</span>variableName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>variableValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> intValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> variableValue<span class="token punctuation">;</span>
            <span class="token keyword">return</span> intValue <span class="token operator">&gt;</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>我们实现一个具体的非终结符表达式类：AndExpression，它表示与运算。它需要一个左表达式和右表达式作为参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: and 表达式
 *  非终结符表达式类，它表示与运算。它需要一个左表达式和右表达式作为参数。
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 15:23
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AndExpression</span> <span class="token keyword">implements</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Expression</span> left<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Expression</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AndExpression</span><span class="token punctuation">(</span><span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * 测试 解释器模式
  */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testInterpreterPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 解释器模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要进行解释的dsl语句</span>
    <span class="token class-name">String</span> dsl <span class="token operator">=</span> <span class="token string">&quot;name is John and age is greater than 18 and gender is male&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// 构建解释表达式</span>
    <span class="token class-name">Expression</span> expression <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AndExpression</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">AndExpression</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">EqualsExpression</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token class-name">GreaterThanExpression</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">EqualsExpression</span><span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 假设正确的值</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> metaMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    metaMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    metaMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    metaMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span>metaMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> result <span class="token operator">=</span> expression<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;解释最后的结果：{}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用了解释器模式来将DSL解析为一个Java对象，并使用这个对象来处理人的基本信息。这种方法可以很容易地扩展到更复杂的DSL中。</p></li></ol>`,9),m={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/interpreter",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="迭代器模式-iterator-pattern" tabindex="-1"><a class="header-anchor" href="#迭代器模式-iterator-pattern" aria-hidden="true">#</a> 迭代器模式（Iterator Pattern）</h2><p>  迭代器模式是一种行为型设计模式，主要用于按照特定顺序遍历集合中的元素，而无需暴露集合内部的结构。迭代器模式将遍历集合的过程与集合本身解耦，使得集合可以独立地变化而不影响遍历算法。</p><p>  通常，迭代器模式包含以下组件：</p><ol style="padding-left:5em;"><li>抽象迭代器（Iterator）：定义了遍历集合的接口，包括获取下一个元素、判断是否还有元素等方法。</li><li>具体迭代器（ConcreteIterator）：实现了抽象迭代器接口，负责遍历集合并维护遍历状态。</li><li>抽象集合（Aggregate）：定义了集合的接口，包括获取迭代器方法等。</li><li>具体集合（ConcreteAggregate）：实现了抽象集合接口，负责创建具体迭代器。</li></ol><p>  迭代器模式的优点在于：</p><ol style="padding-left:5em;"><li>隐藏了集合的内部结构，使得遍历算法与集合的实现相互独立。</li><li>可以按照不同的顺序遍历集合，而无需修改集合的代码。</li><li>可以同时遍历多个集合，而无需了解它们的具体实现。</li></ol><p>  迭代器模式的缺点在于：</p><ol style="padding-left:5em;"><li>需要额外的迭代器类，增加了代码复杂度。</li><li>遍历时需要额外的空间存储迭代器对象，增加了内存开销。</li></ol><h3 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h3><p>  使用Java标准库提供的迭代器接口来实现迭代器模式。</p><p>  以下是一个简单的示例：</p><ol><li><p>首先，定义一个接口，该接口包含迭代器方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:08
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后，实现该接口的类需要提供一个返回迭代器的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:09
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">MyCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">MyArrayList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，MyArrayList类使用Java标准库中的List接口来存储元素。它实现了MyCollection接口，并提供了一个返回迭代器的方法。</p></li><li><p>单元测试，使用MyArrayList类来遍历元素：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 	<span class="token doc-comment comment">/**
     * 测试 迭代器模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testIteratorPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 迭代器模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> myList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MyCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> myCollection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>myList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> element <span class="token operator">:</span> myCollection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,12),y={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/iterator",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="中介者模式-mediator-pattern" tabindex="-1"><a class="header-anchor" href="#中介者模式-mediator-pattern" aria-hidden="true">#</a> 中介者模式（Mediator Pattern）</h2><p>  中介者模式是一种行为型设计模式，它用于降低多个对象之间的耦合度，通过将对象间的通信集中到一个中介者对象中进行处理，从而避免对象间的直接相互作用。</p><p>  中介者模式的主要组成部分包括：</p><ol style="padding-left:5em;"><li>抽象中介者（Mediator）：定义了中介者对象的接口，包括注册对象、转发消息等方法。</li><li>具体中介者（ConcreteMediator）：实现了抽象中介者接口，负责协调各个对象之间的通信。</li><li>抽象同事类（Colleague）：定义了同事类的接口，包括注册中介者、发送消息等方法。</li><li>具体同事类（ConcreteColleague）：实现了抽象同事类接口，负责向中介者发送消息，同时也接收中介者转发的消息。</li></ol><p>  在中介者模式中，对象间的通信是通过中介者对象进行的，而不是直接相互作用。这种方式可以降低对象间的耦合度，从而使系统更加灵活、可扩展和易维护。同时，中介者模式也可以避免出现复杂的逻辑交互，使系统更加简单、清晰。</p><p>  中介者模式的优点在于：</p><ol style="padding-left:5em;"><li>可以降低对象间的耦合度，使系统更加灵活、可扩展和易维护。</li><li>可以避免出现复杂的逻辑交互，使系统更加简单、清晰。</li><li>可以集中处理对象间的通信，提高系统的性能和效率。</li></ol><p>  中介者模式的缺点在于：</p><ol style="padding-left:5em;"><li>中介者对象本身可能会变得过于复杂，难以维护。</li><li>中介者模式可能会导致系统变得过于集中化，从而降低系统的灵活性和可扩展性。</li></ol><h3 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h3><p>  假设有一个图书馆管理系统，其中包含了借书和还书两个模块。当用户借书或还书时，需要更新图书库存和用户借阅信息。这时就可以使用中介者模式来协调图书服务和用户服务之间的消息传递和处理。</p><ol><li><p>定义中介者接口Mediator。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 中介者接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:34
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 处理消息
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息
     * <span class="token keyword">@param</span> <span class="token parameter">colleague</span> 同事对象
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> 入参参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 注册同事类
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>  同事名称
     * <span class="token keyword">@param</span> <span class="token parameter">colleague</span> 同事对象
     */</span>
    <span class="token keyword">void</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现中介者接口Mediator的具体类ConcreteMediator，包含一个Map类型的成员变量，用于存储不同对象之间的消息关系。</p><p>注意：colleagueMap不要使用注入，会引起循环依赖问题（可以解决但是不好），我这里为了避免该问题，选择手动注册。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:36
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteMediator</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Colleague</span><span class="token punctuation">&gt;</span></span> colleagueMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token keyword">instanceof</span> <span class="token class-name">BookService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 图书服务发送消息</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;borrowBook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 借书</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;中介 图书服务借出图书...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 更新图书库存</span>
                <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">)</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> colleagueMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                userService<span class="token punctuation">.</span><span class="token function">updateBorrowInfo</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token function">getIsbn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getBorrower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;returnBook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 还书</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;中介 图书服务收回图书...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 更新图书库存</span>
                <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">)</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> colleagueMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                userService<span class="token punctuation">.</span><span class="token function">updateBorrowInfo</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token function">getIsbn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>colleague <span class="token keyword">instanceof</span> <span class="token class-name">UserService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用户服务发送消息</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;updateBorrowInfo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 更新用户借阅信息</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;中介 用户服务更新借阅信息...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Colleague</span> colleague<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        colleagueMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> colleague<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义同事接口Colleague，包含发送消息的方法send和接收消息的方法receive，并持有中介者对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 抽象同事接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:34
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现具体同事类BookService和UserService，分别实现抽象同事接口Colleague的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:37
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookService</span> <span class="token keyword">implements</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BookService</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">lowerFirst</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">borrowBook</span><span class="token punctuation">(</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;book service图书服务借出图书...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;borrowBook&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">returnBook</span><span class="token punctuation">(</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;book service 图书服务收回图书...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;returnBook&quot;</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;图书服务接收到消息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:44
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">implements</span> <span class="token class-name">Colleague</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">Mediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">lowerFirst</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateBorrowInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> isbn<span class="token punctuation">,</span> <span class="token class-name">String</span> borrower<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;user service 用户服务更新借阅信息...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;updateBorrowInfo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mediator<span class="token punctuation">.</span><span class="token function">handleMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;用户服务接收到消息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在业务逻辑中，通过具体同事类发送消息，并由中介者来协调处理消息。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 16:48
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BorrowService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BookService</span> bookService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">borrow</span><span class="token punctuation">(</span><span class="token class-name">Book</span> book<span class="token punctuation">,</span> <span class="token class-name">String</span> borrower<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 借书</span>
        book<span class="token punctuation">.</span><span class="token function">setBorrower</span><span class="token punctuation">(</span>borrower<span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookService<span class="token punctuation">.</span><span class="token function">borrowBook</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">returnBook</span><span class="token punctuation">(</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 还书</span>
        book<span class="token punctuation">.</span><span class="token function">setBorrower</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bookService<span class="token punctuation">.</span><span class="token function">returnBook</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BorrowService</span> borrowService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 中介模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testMediatorPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 中介模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        borrowService<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;借书后，图书的信息:{}&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        borrowService<span class="token punctuation">.</span><span class="token function">returnBook</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;还书后，图书的信息:{}&quot;</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上示例中，中介者ConcreteMediator协调了BookService和UserService之间的消息传递和处理，当BookService借出图书或收回图书时，ConcreteMediator会调用UserService的updateBorrowInfo方法来更新用户借阅信息。</p></li></ol><p>测试接口打印：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BehavioralPatternsApplicationTests : 测试 中介模式
mediatorpattern.BookService        : book service图书服务借出图书...
mediatorpattern.ConcreteMediator   : 中介 图书服务借出图书...
mediatorpattern.UserService        : user service 用户服务更新借阅信息...
mediatorpattern.ConcreteMediator   : 中介 用户服务更新借阅信息...
BehavioralPatternsApplicationTests : 借书后，图书的信息:Book(borrower=张三, isBn=null)
mediatorpattern.BookService        : book service 图书服务收回图书...
mediatorpattern.ConcreteMediator   : 中介 图书服务收回图书...
mediatorpattern.UserService        : user service 用户服务更新借阅信息...
mediatorpattern.ConcreteMediator   : 中介 用户服务更新借阅信息...
BehavioralPatternsApplicationTests : 还书后，图书的信息:Book(borrower=null, isBn=null)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),w={href:"https://github.com/iluwatar/java-design-patterns/tree/master/mediator",target:"_blank",rel:"noopener noreferrer"},f=e(`<h2 id="备忘录模式-memento-pattern" tabindex="-1"><a class="header-anchor" href="#备忘录模式-memento-pattern" aria-hidden="true">#</a> 备忘录模式（Memento Pattern）</h2><p>  备忘录模式是一种行为型设计模式，它允许在不破坏封装性的前提下捕获和存储一个对象的内部状态，并能在需要时将对象恢复到先前的状态。简单来说，备忘录模式可以让你在不暴露对象实现细节的情况下，保存和恢复对象状态。</p><p>  在备忘录模式中，有三个主要角色：</p><ol style="padding-left:5em;"><li>Originator（原发器）：创建并持有对象的状态，并能够将其状态保存到备忘录中或从备忘录中恢复状态。</li><li>Memento（备忘录）：存储原发器对象的内部状态，并且可以防止原发器以外的对象访问备忘录。</li><li>Caretaker（负责人）：负责管理备忘录，并在需要时向原发器请求恢复状态。</li></ol><p>  备忘录模式的优点是能够轻松地实现对象状态的保存和恢复，同时保持了对象的封装性。但是，备忘录模式也有一些缺点，比如可能会占用大量的内存空间，因为需要保存对象的所有状态。</p><h3 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h3><p>  在购物车中使用备忘录模式。</p><p>  假设有一个购物车类Cart，其包含商品列表items和总价totalPrice。当用户向购物车中添加商品时，Cart类的状态会发生改变。为了实现撤销操作，我们可以使用备忘录模式。</p><ol><li><p>创建一个商品类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 商品类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 20:08
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Goods</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> price<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>再定义一个备忘录类CartMemento，用于保存Cart类的状态：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 备忘录类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 20:07
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CartMemento</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 商品列表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 总价
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> totalPrice <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在Cart类中定义一个createMemento()方法用于创建备忘录对象，以及一个restoreMemento()方法用于恢复状态：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 购物车类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 20:12
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cart</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 商品列表
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 总价
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> totalPrice <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加商品
     * <span class="token keyword">@param</span> <span class="token parameter">goods</span> 商品
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token class-name">Goods</span> goods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalPrice <span class="token operator">=</span> totalPrice<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goods<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 创建备忘录对象
     * <span class="token keyword">@return</span> CartMemento 备忘录对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CartMemento</span> <span class="token function">createMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CartMemento</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">,</span> totalPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 恢复状态
     *
     * <span class="token keyword">@param</span> <span class="token parameter">memento</span> 备忘录对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">restoreMemento</span><span class="token punctuation">(</span><span class="token class-name">CartMemento</span> memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>memento<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalPrice <span class="token operator">=</span> memento<span class="token punctuation">.</span><span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> totalPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在CartService类中使用备忘录模式实现撤销操作：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 购物车服务类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 20:14
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CartService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Cart</span> cart<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartMemento</span><span class="token punctuation">&gt;</span></span> history <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加商品
     * <span class="token keyword">@param</span> <span class="token parameter">goods</span> 商品对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addGoods</span><span class="token punctuation">(</span><span class="token class-name">Goods</span> goods<span class="token punctuation">)</span><span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cart<span class="token punctuation">.</span><span class="token function">createMemento</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cart<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 撤销操作
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>history<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">CartMemento</span> memento <span class="token operator">=</span> history<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cart<span class="token punctuation">.</span><span class="token function">restoreMemento</span><span class="token punctuation">(</span>memento<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Goods</span><span class="token punctuation">&gt;</span></span> <span class="token function">getGoodsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> cart<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> cart<span class="token punctuation">.</span><span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">CartService</span> cartService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 备忘录模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testMementoPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 备忘录模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 添加商品1</span>
        <span class="token class-name">Goods</span> goods <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;350ml可乐&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;3.5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cartService<span class="token punctuation">.</span><span class="token function">addGoods</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加商品2</span>
        <span class="token class-name">Goods</span> goods1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;550ml雪碧&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        goods1<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;5.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cartService<span class="token punctuation">.</span><span class="token function">addGoods</span><span class="token punctuation">(</span>goods1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;当前购物车里有:{},总金额为:{}&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>cartService<span class="token punctuation">.</span><span class="token function">getGoodsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cartService<span class="token punctuation">.</span><span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 撤销上次的添加</span>
        cartService<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;当前购物车里有:{},总金额为:{}&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>cartService<span class="token punctuation">.</span><span class="token function">getGoodsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cartService<span class="token punctuation">.</span><span class="token function">getTotalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  这样，当用户向购物车中添加商品时，每次操作都会创建一个备忘录对象保存Cart类的状态。当用户需要撤销操作时，可以从备忘录栈中取出最近一次的备忘录对象，然后使用restoreMemento()方法恢复Cart类的状态。</p></li></ol>`,9),h={href:"https://github.com/iluwatar/java-design-patterns/tree/master/memento",target:"_blank",rel:"noopener noreferrer"},q=e(`<h2 id="观察者模式-observer-pattern" tabindex="-1"><a class="header-anchor" href="#观察者模式-observer-pattern" aria-hidden="true">#</a> 观察者模式（Observer Pattern）</h2><p>  观察者模式是一种设计模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，当主题对象发生变化时，它的所有观察者都会收到通知并自动更新自己的状态。这种模式可以实现松耦合，让主题和观察者之间的耦合度降低，从而提高系统的可扩展性和可维护性。</p><p>  在观察者模式中，主题对象（也称为被观察者）维护了一个观察者列表，并提供了添加、删除和通知观察者的方法。观察者对象需要实现一个接口或抽象类，其中定义了接收主题对象通知的方法。当主题对象发生变化时，它会遍历观察者列表，并调用每个观察者的通知方法，将变化的信息传递给它们。</p><p>  观察者模式可以应用于许多场景，例如事件处理、GUI编程、消息传递等等。它可以帮助我们实现更灵活、更可扩展的系统，并且可以让我们更好地理解和管理对象之间的依赖关系。</p><h3 id="如何使用-6" tabindex="-1"><a class="header-anchor" href="#如何使用-6" aria-hidden="true">#</a> 如何使用</h3><p>  假设有一个订单系统，当订单状态发生改变时，需要通知多个观察者，比如发货系统、库存系统等等。</p><ol><li><p>我们可以定义订单状态枚举OrderStatus、订单类Order、订单状态变化事件类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:47
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OrderStatus</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 交付
     */</span>
    <span class="token constant">DELIVERED</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 支付
     */</span>
    <span class="token constant">PAID</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:47
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">OrderStatus</span> status<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单状态变化事件类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:49
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderStatusChangeEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Order</span> order<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OrderStatusChangeEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">,</span> <span class="token class-name">Order</span> order<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>order <span class="token operator">=</span> order<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Order</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> order<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>Order</code>表示订单类，<code>OrderStatusChangeEvent</code>表示订单状态变化事件类，继承自<code>ApplicationEvent</code>。</p></li><li><p>然后，我们定义一个订单服务类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单服务类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:50
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ApplicationEventPublisher</span> publisher<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateOrderStatus</span><span class="token punctuation">(</span><span class="token class-name">Order</span> order<span class="token punctuation">,</span> <span class="token class-name">OrderStatus</span> newStatus<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 更新订单状态</span>
        order<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span>newStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 发布订单状态变化事件</span>
        publisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OrderStatusChangeEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>ApplicationEventPublisher</code>是Spring框架提供的事件发布器，可以用来发布事件。当订单状态发生改变时，我们调用<code>publisher.publishEvent()</code>方法发布一个<code>OrderStatusChangeEvent</code>事件。</p></li><li><p>接下来，我们定义多个观察者：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 发货系统
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:52
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeliverySystem</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderStatusChangeEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">OrderStatusChangeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Order</span> order <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">OrderStatus</span><span class="token punctuation">.</span><span class="token constant">DELIVERED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发货</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;发货操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 库存系统
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/25 22:53
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InventorySystem</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderStatusChangeEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">OrderStatusChangeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Order</span> order <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">OrderStatus</span><span class="token punctuation">.</span><span class="token constant">PAID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 扣减库存</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;扣减库存操作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>DeliverySystem</code>表示发货系统，<code>InventorySystem</code>表示库存系统，它们都实现了<code>ApplicationListener&lt;OrderStatusChangeEvent&gt;</code>接口，表示它们监听<code>OrderStatusChangeEvent</code>事件。</p></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderService</span> orderService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 观察者模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testObserverPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 观察者模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知监听系统</span>
        orderService<span class="token punctuation">.</span><span class="token function">updateOrderStatus</span><span class="token punctuation">(</span>order<span class="token punctuation">,</span> <span class="token class-name">OrderStatus</span><span class="token punctuation">.</span><span class="token constant">DELIVERED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知监听系统</span>
        orderService<span class="token punctuation">.</span><span class="token function">updateOrderStatus</span><span class="token punctuation">(</span>order<span class="token punctuation">,</span> <span class="token class-name">OrderStatus</span><span class="token punctuation">.</span><span class="token constant">PAID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span>b<span class="token punctuation">.</span>b<span class="token punctuation">.</span></span>BehavioralPatternsApplicationTests</span> <span class="token operator">:</span> 测试 观察者模式
<span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span>b<span class="token punctuation">.</span>b<span class="token punctuation">.</span>o<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span>DeliverySystem</span>             <span class="token operator">:</span> 发货操作
<span class="token class-name"><span class="token namespace">c<span class="token punctuation">.</span>b<span class="token punctuation">.</span>b<span class="token punctuation">.</span>o<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span>InventorySystem</span>            <span class="token operator">:</span> 扣减库存操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当订单状态发生改变时，<code>OrderService</code>会发布一个<code>OrderStatusChangeEvent</code>事件，所有监听该事件的观察者都会收到通知，根据订单状态进行相应的操作。</p></li></ol>`,7),S={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/observer",target:"_blank",rel:"noopener noreferrer"},x=e(`<h2 id="状态模式-state-pattern" tabindex="-1"><a class="header-anchor" href="#状态模式-state-pattern" aria-hidden="true">#</a> 状态模式（State Pattern）</h2><p>  状态模式是一种设计模式，它允许对象在其内部状态发生改变时改变其行为，从而使对象看起来像是改变了其类。这种模式可以将状态的判断和处理从业务逻辑中分离出来，从而使得代码更加清晰，易于维护和扩展。</p><p>  在状态模式中，一个对象的行为取决于其内部状态，当状态发生改变时，对象的行为也会相应地改变。状态模式包含三个角色：状态接口、具体状态和上下文。状态接口定义了所有具体状态所需实现的方法，具体状态实现了这些方法以反映其特定的行为，上下文包含一个当前状态对象，并将请求委托给当前状态对象处理。</p><p>  状态模式可以应用于许多场景，例如状态机、工作流、游戏等等。它可以帮助我们实现更灵活、更可扩展的系统，并且可以让我们更好地理解和管理对象之间的状态转换。</p><h3 id="如何使用-7" tabindex="-1"><a class="header-anchor" href="#如何使用-7" aria-hidden="true">#</a> 如何使用</h3><p>  下面来写一个电梯实际案例：</p><ol><li><p>定义状态接口（State）和具体状态类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 电梯状态接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ElevatorState</span> <span class="token punctuation">{</span>

    <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">ElevatorState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 开门
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;电梯门打开了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 关门
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;电梯门关闭了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 上升
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">goUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在上行中...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 下降
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">goDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在下行中...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 打开电梯状态类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:18
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenState</span> <span class="token keyword">implements</span> <span class="token class-name">ElevatorState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯门已经打开了，无需再次打开！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:  关闭电梯状态类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:25
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CloseState</span> <span class="token keyword">implements</span> <span class="token class-name">ElevatorState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯门已经关闭了，无需再次关闭！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 上升电梯状态类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:26
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpState</span> <span class="token keyword">implements</span> <span class="token class-name">ElevatorState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在上行中，无法打开门！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在上行中，无法关闭门！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">goDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯转为下行状态！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 下降电梯状态类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:28
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DownState</span> <span class="token keyword">implements</span> <span class="token class-name">ElevatorState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在上行中，无法打开门！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯正在上行中，无法关闭门！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">goUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;电梯转为上行状态！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义电梯上下文类（ElevatorContext）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 电梯上下文类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 15:29
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElevatorContext</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ElevatorState</span><span class="token punctuation">&gt;</span></span> stateMap<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">ElevatorState</span> state<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ElevatorContext</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ElevatorState</span><span class="token punctuation">&gt;</span></span> stateMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stateMap <span class="token operator">=</span> stateMap<span class="token punctuation">;</span>
        <span class="token comment">// 默认状态为closeState</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">CloseState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">ElevatorState</span><span class="token punctuation">&gt;</span></span> cls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> simpleName <span class="token operator">=</span> cls<span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> mapKey <span class="token operator">=</span> <span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">lowerFirst</span><span class="token punctuation">(</span>simpleName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ElevatorState</span><span class="token punctuation">&gt;</span></span> stateOptional <span class="token operator">=</span>
                <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>stateMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>mapKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> stateOptional
                <span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;找不到具体的&quot;</span> <span class="token operator">+</span> simpleName <span class="token operator">+</span> <span class="token string">&quot;电梯状态类&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">openDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">OpenState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">closeDoor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">CloseState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">goUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">UpState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">goDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">DownState</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入状态对象，使用@Autowired注解，使用默认状态为closeState。</p></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ElevatorContext</span> elevatorContext<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 状态模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testStatePattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 状态模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        elevatorContext<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        elevatorContext<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        elevatorContext<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        elevatorContext<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,7),j={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/state",target:"_blank",rel:"noopener noreferrer"},C=e(`<h2 id="策略模式-strategy-pattern" tabindex="-1"><a class="header-anchor" href="#策略模式-strategy-pattern" aria-hidden="true">#</a> 策略模式（Strategy Pattern）</h2><p>  策略模式是一种行为型设计模式，它定义了一组算法，将每个算法封装在独立的类中，并使它们可以互换。该模式使得算法可以独立于使用它的客户端而变化，从而提高了灵活性和可维护性。</p><p>  具体而言，策略模式将算法的实现从客户端代码中分离出来，使得客户端代码只需要知道如何使用这些算法即可，而不需要关心具体的实现细节。这样，当需要改变算法时，只需要修改相应的策略类即可，而不需要修改客户端代码。同时，策略模式还支持动态切换算法，使得客户端可以在运行时选择不同的算法，从而实现更加灵活的行为。</p><p>  总之，策略模式通过将算法的实现与客户端代码分离，提高了代码的可维护性和灵活性，是一种常用的设计模式。</p><h3 id="如何使用-8" tabindex="-1"><a class="header-anchor" href="#如何使用-8" aria-hidden="true">#</a> 如何使用</h3><p>  支付方式的策略案例。</p><ol><li><p>定义一个支付策略接口和实现两个支付策略类（AliPayStrategy和WeChatPayStrategy）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 支付策略接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 17:57
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PayStrategy</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 支付
     * <span class="token keyword">@param</span> <span class="token parameter">amount</span> 金额
     */</span>
    <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 支付宝支付策略
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 17:58
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliPayStrategy</span> <span class="token keyword">implements</span>  <span class="token class-name">PayStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;支付宝支付，金额{}&quot;</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 微信支付策略
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 17:59
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeChatPayStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">PayStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;微信支付，金额{}&quot;</span><span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个支付上下文（PayContext）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 支付上下文
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 18:00
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayContext</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> payStrategyMap<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">PayStrategy</span> payStrategy<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPayStrategy</span><span class="token punctuation">(</span><span class="token class-name">String</span> payType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> payStrategyOptional <span class="token operator">=</span> <span class="token function">getPayStrategyByKey</span><span class="token punctuation">(</span>payType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>payStrategy <span class="token operator">=</span> payStrategyOptional
                <span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;找不到具体类型为【&quot;</span> <span class="token operator">+</span> payType <span class="token operator">+</span> <span class="token string">&quot;】的支付策略类&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPayStrategy</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> cls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> simpleName <span class="token operator">=</span> cls<span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> mapKey <span class="token operator">=</span> <span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">lowerFirst</span><span class="token punctuation">(</span>simpleName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> payStrategyOptional <span class="token operator">=</span> <span class="token function">getPayStrategyByKey</span><span class="token punctuation">(</span>mapKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>payStrategy <span class="token operator">=</span> payStrategyOptional
                <span class="token punctuation">.</span><span class="token function">orElseThrow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;找不到具体的【&quot;</span> <span class="token operator">+</span> simpleName <span class="token operator">+</span> <span class="token string">&quot;】支付策略类&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PayStrategy</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPayStrategyByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> mapKey<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>payStrategyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>mapKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span><span class="token punctuation">{</span>
        payStrategy<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">PayContext</span> payContext<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 策略模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testStrategyPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 策略模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BigDecimal</span> amount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;99.90&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 支付宝支付</span>
        payContext<span class="token punctuation">.</span><span class="token function">setPayStrategy</span><span class="token punctuation">(</span><span class="token string">&quot;aliPayStrategy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payContext<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 微信支付</span>
        payContext<span class="token punctuation">.</span><span class="token function">setPayStrategy</span><span class="token punctuation">(</span><span class="token class-name">WeChatPayStrategy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payContext<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,7),O={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/strategy",target:"_blank",rel:"noopener noreferrer"},P=e(`<h2 id="模板方法模式-template-method-pattern" tabindex="-1"><a class="header-anchor" href="#模板方法模式-template-method-pattern" aria-hidden="true">#</a> 模板方法模式（Template Method Pattern）</h2><p>  模板方法模式是一种行为型设计模式，它定义了一个算法的骨架，将一些步骤的实现延迟到子类中。具体而言，模板方法模式通过定义一个抽象类，其中包含了一个或多个抽象方法和具体方法，这些方法组成了一个算法的骨架。其中，抽象方法由子类实现，具体方法则在抽象类中实现。</p><p>  模板方法模式的核心思想是“由父类控制子类”，即将算法的控制权交给父类，由父类定义算法的骨架，子类只需要实现其中的具体细节。这样可以避免代码重复，提高代码的复用性和可维护性。同时，模板方法模式还支持钩子方法，使得子类可以影响算法的执行过程，从而实现更加灵活的行为。</p><p>  总之，模板方法模式通过定义一个算法的骨架和具体实现，将算法的控制权交给父类，提高了代码的复用性和可维护性，是一种常用的设计模式。</p><h3 id="如何使用-9" tabindex="-1"><a class="header-anchor" href="#如何使用-9" aria-hidden="true">#</a> 如何使用</h3><p>  这是一个付款的例子。</p><ol><li><p>创建一个抽象类作为模板类，定义模板方法和抽象方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 付款模板类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 21:28
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">PaymentTemplate</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makePayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">processPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">sendNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">processPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;已成功付款。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建具体的实现类，继承模板类，并实现抽象方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 银行卡付款
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 21:49
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreditCardPayment</span> <span class="token keyword">extends</span> <span class="token class-name">PaymentTemplate</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;正在验证信用卡信息...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;处理信用卡付款...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: PayPal支付
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 21:53
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PayPalPayment</span> <span class="token keyword">extends</span> <span class="token class-name">PaymentTemplate</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;正在验证PayPal帐户信息...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;处理PayPal付款...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PaymentTemplate</span><span class="token punctuation">&gt;</span></span> paymentTemplates<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 模板方法策略
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testTemplateMethodPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 模板方法策略&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        paymentTemplates<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">PaymentTemplate</span><span class="token operator">::</span><span class="token function">makePayment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我之所以使用<code>List&lt;PaymentTemplate&gt;</code>，是因为存在两个实现类的bean，所以使用集合进行接收，你也可以使用Map或是单个注入。</p></li></ol>`,7),E={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/template-method",target:"_blank",rel:"noopener noreferrer"},B=e(`<h2 id="访问者模式-visitor-pattern" tabindex="-1"><a class="header-anchor" href="#访问者模式-visitor-pattern" aria-hidden="true">#</a> 访问者模式（Visitor Pattern）</h2><p>  访问者模式是一种行为型设计模式，它将算法与对象结构分离开来，使得可以在不改变对象结构的前提下定义新的操作。具体而言，访问者模式定义了一个访问者类，其中包含了一系列访问方法，用于对不同类型的对象进行访问和操作。同时，访问者模式还定义了一个对象结构，其中包含了一组元素，这些元素可以接受访问者的访问。</p><p>  访问者模式的核心思想是“双重分派”，即在访问者模式中，访问者先选择合适的访问方法，然后再根据被访问的对象的类型选择合适的处理方式。这样可以使得算法与对象结构分离，从而实现更加灵活的行为。</p><p>  访问者模式的优点是可以在不修改被访问者的情况下增加新的操作，同时也可以将相关的操作集中在访问者中，使得代码更加清晰和可维护。缺点是增加新的被访问者或者新的访问者都需要修改代码，会增加代码的复杂度。</p><p>  总之，访问者模式通过定义一个访问者类和一个对象结构，将算法与对象结构分离，提高了代码的灵活性和可扩展性，是一种常用的设计模式。</p><h3 id="如何使用-10" tabindex="-1"><a class="header-anchor" href="#如何使用-10" aria-hidden="true">#</a> 如何使用</h3><p>  处理一个订单结构对象的打印和计算总价的业务逻辑。</p><ol><li><p>首先，我们定义一个OrderVisitor接口，它包含了访问不同类型订单项的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单访问者接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:38
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderVisitor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 访问 产品订单项
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 产品订单项
     */</span>
    <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">ProductOrderItem</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 访问 折扣订单项目
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 折扣订单项目
     */</span>
    <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">DiscountOrderItem</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取结果
     * <span class="token keyword">@return</span> Object
     */</span>
    <span class="token class-name">Object</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接下来，我们定义两个订单项类ProductOrderItem和DiscountOrderItem，它们都实现了一个accept方法，接受一个OrderVisitor对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单项目类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:39
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderItem</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 接受 订单访问
     * <span class="token keyword">@param</span> <span class="token parameter">visitor</span> 订单访问对象
     */</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">OrderVisitor</span> visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 产品订单项类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:39
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductOrderItem</span> <span class="token keyword">implements</span> <span class="token class-name">OrderItem</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 产品名称
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 产品单价
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BigDecimal</span> price<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 产品数量
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> quantity<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">OrderVisitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 折扣订单项目
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:41
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DiscountOrderItem</span> <span class="token keyword">implements</span> <span class="token class-name">OrderItem</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 折扣，例如88折，填88
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BigDecimal</span> discount<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">OrderVisitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        visitor<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后，我们实现具体的OrderVisitor类，它实现了OrderVisitor接口，并定义了visit方法的具体实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单打印访问者类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:42
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPrintVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">OrderVisitor</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">StringBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">ProductOrderItem</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getQuantity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot; x &quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;: &quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">DiscountOrderItem</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;折扣: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getDiscount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单价格访问者类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:44
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPriceVisitor</span> <span class="token keyword">implements</span> <span class="token class-name">OrderVisitor</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> totalPrice <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">ProductOrderItem</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        totalPrice <span class="token operator">=</span> totalPrice<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
                item<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getQuantity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">visit</span><span class="token punctuation">(</span><span class="token class-name">DiscountOrderItem</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> divide <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getDiscount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalPrice <span class="token operator">=</span> totalPrice<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>divide<span class="token punctuation">)</span><span class="token punctuation">;</span>
        totalPrice <span class="token operator">=</span> totalPrice<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> totalPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>最后，我们定义一个OrderStructure类，它包含了一个OrderItem列表，并提供了一个accept方法，接受一个OrderVisitor对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 订单结构类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/26 22:47
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderStructure</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderItem</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token class-name">OrderItem</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">OrderVisitor</span> visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderItem</span> item <span class="token operator">:</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试，处理订单对象的打印和计算总价的业务逻辑，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     * 测试 访问者模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testVisitorPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 访问者模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderStructure</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProductOrderItem</span><span class="token punctuation">(</span><span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;888.213&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DiscountOrderItem</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;88&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderPrintVisitor</span> printVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderPrintVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>printVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> printResult <span class="token operator">=</span> printVisitor<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OrderPriceVisitor</span> priceVisitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderPriceVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>priceVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> totalPrice <span class="token operator">=</span> priceVisitor<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>printResult <span class="token operator">+</span> <span class="token string">&quot;总价: &quot;</span> <span class="token operator">+</span> totalPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,8),M={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/visitor",target:"_blank",rel:"noopener noreferrer"};function D(L,_){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("  GitHub学习地址："),n("a",d,[s("java-design-patterns/localization/zh/chain at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),k,n("p",null,[s("  GitHub学习地址："),n("a",r,[s("java-design-patterns/localization/zh/command at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),v,n("p",null,[s("  GitHub学习地址："),n("a",m,[s("java-design-patterns/localization/zh/interpreter at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),b,n("p",null,[s("  GitHub学习地址："),n("a",y,[s("java-design-patterns/localization/zh/iterator at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),g,n("p",null,[s("  GitHub学习地址："),n("a",w,[s("java-design-patterns/mediator at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),f,n("p",null,[s("  GitHub学习地址："),n("a",h,[s("java-design-patterns/memento at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),q,n("p",null,[s("  GitHub学习地址："),n("a",S,[s("java-design-patterns/localization/zh/observer at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),x,n("p",null,[s("  GitHub学习地址："),n("a",j,[s("java-design-patterns/localization/zh/state at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),C,n("p",null,[s("  GitHub学习地址："),n("a",O,[s("java-design-patterns/localization/zh/strategy at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),P,n("p",null,[s("  GitHub学习地址："),n("a",E,[s("java-design-patterns/localization/zh/template-method at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),B,n("p",null,[s("  GitHub学习地址："),n("a",M,[s("java-design-patterns/localization/zh/visitor at master · iluwatar/java-design-patterns (github.com)"),t(a)])])])}const I=p(l,[["render",D],["__file","行为型模式.html.vue"]]);export{I as default};
