import{_ as e,V as c,W as o,X as n,Y as s,$ as t,a0 as p,C as i}from"./framework-a71e09ed.js";const l="/assets/img/设计模式/创作型模式/组合模式逻辑图.png",u={},k=p(`<h1 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h1><p>  设计模式中的结构型模式有以下几种：</p><ol style="padding-left:5em;"><li><a href="/backEnd/设计模式/结构型模式.html#适配器模式-adapter-pattern">适配器模式（Adapter Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#桥接模式-bridge-pattern">桥接模式（Bridge Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#装饰器模式-decorator-pattern">装饰器模式（Decorator Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#组合模式-composite-pattern">组合模式（Composite Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#外观模式-facade-pattern">外观模式（Facade Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#享元模式-flyweight-pattern">享元模式（Flyweight Pattern）</a></li><li><a href="/backEnd/设计模式/结构型模式.html#代理模式-proxy-pattern">代理模式（Proxy Pattern）</a></li></ol><h2 id="适配器模式-adapter-pattern" tabindex="-1"><a class="header-anchor" href="#适配器模式-adapter-pattern" aria-hidden="true">#</a> 适配器模式(Adapter Pattern)</h2><p>  适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一种接口。</p><p>  通俗地说，适配器模式就是将一个类的接口转换成另一个客户端所期望的接口，以实现类与客户端之间的兼容。</p><p>  在软件开发中，经常会遇到需要复用一些现有的类，但这些类的接口与客户端所期望的接口不一致的情况。如果直接修改现有类的接口，会牵扯到大量的修改工作，同时也有可能会破坏现有类的封装性，因此不是一个好的选择。这时，适配器模式就可以派上用场，通过一个适配器来转换现有类的接口，以满足客户端的需求。</p><p>  适配器模式通常包括两种类型：类适配器和对象适配器。类适配器使用继承来实现适配器，而对象适配器使用组合来实现适配器。</p><p>  适配器模式的优点包括可以增加类的透明性和复用性，可以让客户端使用现有的类，同时也可以让现有的类与客户端协同工作。但是适配器模式也有一些缺点，例如会增加系统的复杂度和代码的阅读难度，同时也可能会影响系统的性能。因此，在使用适配器模式时需要权衡其优缺点，选择合适的实现方式。</p><h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><p>  在Spring Boot中使用适配器模式，可以通过以下步骤实现：</p><ol><li><p>创建一个接口（Target），定义需要适配的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
     <span class="token doc-comment comment">/**
     * 三孔转两孔插座
     */</span>
    <span class="token keyword">void</span> <span class="token function">twoSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个适配器类（Adapter），实现Target接口，并持有一个被适配的对象（ThreePinSocket）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token keyword">implements</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ThreePinSocket</span> threePinSocket<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 目标是实现可以调用三孔插座
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">twoSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        threePinSocket<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个被适配的类（ThreePinSocket），其中包含一个需要适配的方法（insert）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreePinSocket</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;三口插座被插入电器插头。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>这样，在Adapter中调用twoSocket方法时，实际上是调用了适配器中的insert方法，从而实现了适配功能。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Adapter</span> adapter<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testAdapterPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        adapter<span class="token punctuation">.</span><span class="token function">twoSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/adapter",target:"_blank",rel:"noopener noreferrer"},r=p(`<h2 id="桥接模式-bridge-pattern" tabindex="-1"><a class="header-anchor" href="#桥接模式-bridge-pattern" aria-hidden="true">#</a> 桥接模式(Bridge Pattern)</h2><p>  桥接模式是一种结构型设计模式，它能够将抽象部分与实现部分分离开来，从而使它们可以独立地变化，而不会相互影响。桥接模式的核心思想是将一个类的功能和实现分离开来，使得它们可以独立地变化，而不会相互影响。这样，我们可以在不修改原有代码的情况下，动态地切换不同的实现方式，从而达到灵活性和扩展性的目的。</p><p>  具体来说，桥接模式是通过将抽象类与其实现类分离开来，将它们变成两个独立的继承等级结构，然后通过一个桥接接口将两个继承等级连接起来。这样，抽象类就可以通过桥接接口来调用实现类的方法，从而达到解耦的效果。</p><p>  总的来说，桥接模式的主要优点包括：</p><ol style="padding-left:5em;"><li>分离抽象部分和实现部分，使得它们可以独立地变化，从而提高了系统的灵活性和可扩展性。</li><li>对客户端隐藏了实现细节，使得客户端只需要关注抽象部分，从而降低了系统的复杂度。</li><li>可以动态地切换不同的实现方式，从而满足不同的需求。</li><li>提高了系统的可维护性和可复用性。</li></ol><p>  总之，桥接模式是一种非常重要的设计模式，它可以帮助我们解决很多复杂的问题，提高系统的可维护性和可扩展性。</p><h3 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h3><p>  在Spring Boot中使用桥接模式，可以通过以下步骤实现：</p><ol><li><p>定义抽象类和实现类。例如，我们定义一个抽闲类MessageService和两个实现QQMessageServiceImpl和WeChatMessageServiceImpl。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 消息的接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:24
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 发送消息
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息内容
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 接收消息
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息内容
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 客户端
     */</span>
    <span class="token keyword">protected</span> <span class="token class-name">Client</span> client<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MessageService</span><span class="token punctuation">(</span><span class="token class-name">Client</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> client<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:34
 */</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;qqMessageService&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QQMessageServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">QQMessageServiceImpl</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;QQClient&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Client</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;通过qqClient发送消息：【{}】&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;通过qqClient解码消息：【{}】&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">receiveMsg</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:57
 */</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;weChatMessageService&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeChatMessageServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">MessageService</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">WeChatMessageServiceImpl</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;weChatClient&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Client</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;通过wxClient发送消息：【{}】&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;通过wxClient解码消息：【{}】&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        client<span class="token punctuation">.</span><span class="token function">receiveMsg</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义客户端的实现的接口。例如，我们定义一个Client接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 客户端接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:36
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 登录接口、授权接口
     */</span>
    <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 发送消息并编码
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息
     */</span>
    <span class="token keyword">void</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 接收解码消息
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息
     * <span class="token keyword">@return</span> String 解码后的消息
     */</span>
    <span class="token class-name">String</span> <span class="token function">receiveMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现Cient接口。例如，我们实现QQClient和WeChatClient类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: QQ 客户端
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:40
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QQClient</span> <span class="token keyword">implements</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;QQ客户端进行QQ登录授权。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// // 模仿加密，实际根据文档修改</span>
        <span class="token class-name">String</span> encryptMsg <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;QQ客户端发送编码后的消息，消息内容：【{}】&quot;</span><span class="token punctuation">,</span> encryptMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">receiveMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//  // 模仿解密，实际根据文档修改</span>
        <span class="token class-name">String</span> decryptMsg <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">decodeStr</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;QQ客户端接收消息并解码之后，消息内容：【{}】&quot;</span><span class="token punctuation">,</span> decryptMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> decryptMsg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 微信客户端
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 15:50
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeChatClient</span> <span class="token keyword">implements</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;微信客户端进行微信登录授权。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 模仿加密，实际根据文档修改</span>
        <span class="token class-name">String</span> encryptMsg <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;微信客户端发送编码后的消息，消息内容：【{}】&quot;</span><span class="token punctuation">,</span> encryptMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">receiveMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 模仿解密，实际根据文档修改</span>
        <span class="token class-name">String</span> decryptMsg <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">decodeStr</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;微信客户端接收消息并解码之后，消息内容：【{}】&quot;</span><span class="token punctuation">,</span> decryptMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> decryptMsg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MessageService</span> qqMessageService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MessageService</span> weChatMessageService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testBridgePattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        qqMessageService<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;发送qq消息：123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        qqMessageService<span class="token punctuation">.</span><span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;接收qq消息：654321&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        weChatMessageService<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;发送微信消息：你好微信，收到请回复&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weChatMessageService<span class="token punctuation">.</span><span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;接收微信消息：收到。&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们使用桥接模式将抽象类和实现类分离，以便更好地管理和维护代码。通过这种方式，我们可以在不影响抽象类的情况下更改实现类，从而更好地应对变化。</p></li></ol>`,9),v={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/bridge",target:"_blank",rel:"noopener noreferrer"},m=p(`<h2 id="装饰器模式-decorator-pattern" tabindex="-1"><a class="header-anchor" href="#装饰器模式-decorator-pattern" aria-hidden="true">#</a> 装饰器模式(Decorator Pattern)</h2><p>  装饰器模式是一种结构型设计模式，它允许通过将对象包装在具有新行为的装饰器对象中来动态地扩展对象的功能，而不需要修改原始对象的代码。</p><p>  在装饰器模式中，有一个基本的组件接口，它定义了要被装饰的对象的基本行为。然后有一个装饰器接口，它与基本组件接口相同，但它还包含了一些额外的行为。最后，有一个具体的装饰器类，它实现了装饰器接口，并将基本组件对象包装在其中，以添加额外的行为。</p><p>  通过使用装饰器模式，可以在运行时动态地添加、删除或修改对象的行为，而不需要修改对象本身的代码。这使得代码更加灵活和可扩展，同时也更容易维护。</p><h3 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用桥接模式，可以通过以下步骤实现：</p><ol><li><p>定义一个基本接口RunService：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 跑步的接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 16:57
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RunService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 开始跑步
     */</span>
    <span class="token keyword">void</span> <span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 结束跑步
     */</span>
    <span class="token keyword">void</span> <span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个具体类RunServiceImpl实现该接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 16:58
 */</span>
<span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span><span class="token string">&quot;runService&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">RunService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;开始跑步...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;结束跑步...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个装饰器接口RunServiceDecorator：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 16:59
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RunServiceDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">RunService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 开始跑步并计时
     */</span>
    <span class="token keyword">void</span> <span class="token function">startRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 结束跑步并结束计时
     */</span>
    <span class="token keyword">void</span> <span class="token function">endRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个具体的装饰器接口实现类RunServiceTimeDecorator：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 跑步计时装饰器接口实现
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 17:01
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunServiceTimeDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">RunServiceDecorator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RunService</span> runService<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">TimeInterval</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        runService<span class="token punctuation">.</span><span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        runService<span class="token punctuation">.</span><span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">endRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;本次跑步，耗费了:{}毫秒&quot;</span><span class="token punctuation">,</span> timer<span class="token punctuation">.</span><span class="token function">intervalRestart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RunService</span> runService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RunServiceDecorator</span> runServiceDecorator<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 装饰器模式
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testDecoratorPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 装饰器模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        runService<span class="token punctuation">.</span><span class="token function">startRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        runService<span class="token punctuation">.</span><span class="token function">endRun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        runServiceDecorator<span class="token punctuation">.</span><span class="token function">startRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        runServiceDecorator<span class="token punctuation">.</span><span class="token function">endRunTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：RunServiceImpl 类上标注的注解@Service(&quot;runService&quot;)必须得像这样标注上名称，否则无法自动注入获得，除非指定名称，如下例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">RunService</span> <span class="token punctuation">{</span>
	<span class="token comment">// 省略</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Autowired</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;runServiceImpl&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">RunService</span> runService<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，每个注入的就都需要修改了，不建议使用。</p></li></ol>`,7),b={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/decorator",target:"_blank",rel:"noopener noreferrer"},g=p('<h2 id="组合模式-composite-pattern" tabindex="-1"><a class="header-anchor" href="#组合模式-composite-pattern" aria-hidden="true">#</a> 组合模式(Composite Pattern)</h2><p>  组合模式是一种结构型设计模式，它允许你将对象组合成树形结构来表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。</p><p>  在组合模式中，有两种类型的对象：叶节点和组合节点。叶节点表示树形结构中的最底层的节点，它没有任何子节点。组合节点则表示树形结构中的非叶节点，它包含了一个或多个子节点。</p><p>  组合模式的核心思想是：将对象组合成树形结构，然后通过递归的方式来遍历整个树形结构，从而实现对整个树形结构的操作。</p><p>  组合模式的优点包括：</p><ol style="padding-left:5em;"><li>简化客户端代码：组合模式使得客户端不需要知道对象的具体类型，可以使用相同的方式来处理叶节点和组合节点。</li><li>增加新的组件变得容易：通过组合模式，可以很容易地添加新的叶节点和组合节点，而不需要对现有的代码进行修改。</li><li>提高代码复用性：组合模式将相同的操作应用于所有节点，从而提高了代码的复用性。</li></ol><p>  总之，组合模式是一种非常有用的设计模式，它可以帮助我们更好地管理树形结构，提高代码的可维护性和可扩展性。</p><h3 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h3><p>  实现逻辑图，如下：</p><figure><img src="'+l+`" alt="组合模式逻辑图" tabindex="0" loading="lazy"><figcaption>组合模式逻辑图</figcaption></figure><p>  执行顺序：</p><p>    root -&gt;</p><p>​     记录开始组件 -&gt;</p><p>     登录参数校验组合组件 -&gt;</p><p>​       检查对象是否为空组件 -&gt; 检查username组件 -&gt; 检查password组件 -&gt; 检查时间戳组件 -&gt;</p><p>​     记录结束时间组件</p><p>  在Spring Boot中使用组合模式，可以通过以下步骤实现：</p><p>  注意：如下组件实现类，例如Leaf和Condition，Condition其实就是Leaf,只是我为了区分有没有父级组合组件类才另创的，实际上它就是Leaf（叶子节点），树上面也只有组合组件节点和叶子节点，不会有其他。</p><ol><li><p>定义一个抽象组件类Component：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 组件类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 17:59
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Component</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>consumer <span class="token operator">=</span> consumer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个继承Component的组合组件类Composite；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 组合组件类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 17:53
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Composite</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Composite</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>consumer<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>c <span class="token operator">-&gt;</span> c<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">startForEachComponent</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        children<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        children<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> components<span class="token punctuation">)</span><span class="token punctuation">{</span>
        children<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">startForEachComponent</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;【{}】，开始执行所有组件。&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>component <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;执行【{}】组件&quot;</span><span class="token punctuation">,</span> component<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            component<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;【{}】,结束执行所有组件。&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个继承Component的叶子节点类Leaf；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 叶子节点组件
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 18:08
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Leaf</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        consumer<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个登录条件验证类LoginCondition进行使用组件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 登录条件验证类
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 18:29
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginCondition</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Composite</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composite</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;root组件&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AtomicLong</span> startTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> startLeaf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;记录开始时间组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            startTime<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>startLeaf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Composite</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> condition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composite</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;登录参数校验组合组件&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> conditionObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;检查对象是否为空组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>d <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;对象不可以为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 比如说存在username和password和timestamp，且timestamp不可以超出当前2分钟</span>
        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> conditionUsername <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;检查username组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> d<span class="token punctuation">;</span>
            <span class="token class-name">Object</span> username <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmptyIfStr</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;用户名不可以为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> conditionPassword <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;检查password组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> d<span class="token punctuation">;</span>
            <span class="token class-name">Object</span> password <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isEmptyIfStr</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;密码不可以为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> conditionTimestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;检查时间戳组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> d<span class="token punctuation">;</span>
            <span class="token class-name">Long</span> timestamp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Validator</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;时间戳不可以为空！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">long</span> currentTimeMillis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTimeMillis <span class="token operator">-</span> timestamp <span class="token operator">&gt;</span> <span class="token number">60000</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token function">wrapRuntime</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间戳超时，请重新生成后再尝试！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        condition<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>conditionObj<span class="token punctuation">,</span> conditionUsername<span class="token punctuation">,</span> conditionPassword<span class="token punctuation">,</span> conditionTimestamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> endLeaf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leaf</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;记录结束时间组件&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;本次执行操作，总耗时{}毫秒。&quot;</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>endLeaf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        root<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">LoginCondition</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> loginCondition<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 组合模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testCompositePattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 组合模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        loginCondition<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,19),y={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/composite",target:"_blank",rel:"noopener noreferrer"},w=p(`<h2 id="外观模式-facade-pattern" tabindex="-1"><a class="header-anchor" href="#外观模式-facade-pattern" aria-hidden="true">#</a> 外观模式(Facade Pattern)</h2><p>  外观模式（Facade Pattern）是一种结构型设计模式，它提供了一个简单的接口，隐藏了一组复杂的子系统，使得客户端能够更加方便地使用这些子系统。它的主要作用是简化客户端与子系统之间的交互，降低客户端的复杂度。</p><p>  在外观模式中，我们会定义一个外观类（Facade Class），它封装了一组复杂的子系统，为客户端提供了一个简单的接口。客户端只需要通过这个接口来访问子系统，而无需关心子系统的具体实现。</p><p>  举个例子，假设我们要开发一个多媒体播放器，它需要支持播放音频、视频和图片等多种格式。我们可以定义一个外观类，它封装了一组复杂的子系统，包括音频播放器、视频播放器和图片浏览器等。客户端只需要通过外观类提供的接口来播放多媒体文件，而无需关心每个子系统的具体实现。</p><p>  总之，外观模式可以帮助我们简化客户端与子系统之间的交互，提高代码的可维护性和可读性。</p><h3 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h3><p>这里以访问mysql数据库（django）库获取数据并对外提供接口层来给外部访问作为演示。</p><ol><li><p>在pom中引入jpa和mysql连接配置项：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改application.yml 配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> <span class="token key atrule">spring</span><span class="token punctuation">:</span>
 	<span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/django<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;zeroDateTimeBehavior=convertToNull&amp;autoReconnect=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> password
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个实体类App01Userinfo：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;app01_userinfo&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App01Userinfo</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个接口App01UserInfoRepository继承JpaRepository用来访问数据库的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 22:39
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">App01UserInfoRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">App01Userinfo</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">App01Userinfo</span> <span class="token function">findByName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个逻辑类App01UserInfoService：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 22:41
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App01UserInfoService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">App01UserInfoRepository</span> userInfoRepository<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">App01Userinfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserByName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>userInfoRepository<span class="token punctuation">.</span><span class="token function">findByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个接口类UserInfoController，来对外提供restful接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/22 23:00
 */</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user/&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfoController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">App01UserInfoService</span> userInfoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">App01Userinfo</span> <span class="token function">getByUserInfo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">App01Userinfo</span><span class="token punctuation">&gt;</span></span> userInfoOpt <span class="token operator">=</span> userInfoService<span class="token punctuation">.</span><span class="token function">getUserByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> userInfoOpt<span class="token punctuation">.</span><span class="token function">orElseGet</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">App01Userinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 测试 外观模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testFacadePattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 外观模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TestRestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestRestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;赵羽&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">App01Userinfo</span><span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">exchange</span><span class="token punctuation">(</span>
                <span class="token string">&quot;http://localhost:&quot;</span> <span class="token operator">+</span> <span class="token number">8080</span> <span class="token operator">+</span> <span class="token string">&quot;/user/&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">,</span>
                <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span>
                <span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ParameterizedTypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">App01Userinfo</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;查询{}的信息，信息是:{}&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：启动 testFacadePattern 方法时，必须保证服务已经启动。</p></li></ol>`,8),f={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/facade",target:"_blank",rel:"noopener noreferrer"},h=p(`<h2 id="享元模式-flyweight-pattern" tabindex="-1"><a class="header-anchor" href="#享元模式-flyweight-pattern" aria-hidden="true">#</a> 享元模式(Flyweight Pattern)</h2><p>  享元模式是一种结构型设计模式，它通过共享对象来减少内存使用和提高性能。在享元模式中，相似的对象会被共享而不是每个对象都创建一个新的实例。</p><p>  具体来说，享元模式将对象分为两种：内部状态和外部状态。内部状态指对象的固有属性，不会因为环境的变化而改变，可以被共享；而外部状态则是对象的变化属性，会随着环境的变化而改变，不可以被共享。</p><p>  通过将内部状态抽象成共享对象，可以减少创建新对象的数量，从而节省内存。同时，外部状态可以作为享元对象的参数进行传递，从而实现动态变化。</p><p>  在实际应用中，享元模式通常用于需要创建大量相似对象的场景，例如游戏中的粒子系统、文本编辑器中的字符等。通过使用享元模式，可以大大提高应用程序的性能和效率。</p><p>  总之，享元模式是一种优化内存使用的设计模式，通过共享内部状态来避免创建大量相似的对象，从而提高性能和效率。</p><h3 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h3><p>  在SpringBoot中使用享元模式，可以通过创建一个享元工厂来管理共享对象。具体步骤如下：</p><ol><li><p>定义享元接口和实现类，定义一个享元接口，包含共享对象的内部状态和外部状态的方法。然后创建一个实现类，实现这个接口。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 定义享元接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 13:59
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">String</span> extrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 实现享元接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 14:00
 */</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFlyweight</span> <span class="token keyword">implements</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> intrinsicState<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token class-name">String</span> extrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;内部状态：{}&quot;</span><span class="token punctuation">,</span> intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;外部状态：{}&quot;</span><span class="token punctuation">,</span> extrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建享元工厂，创建一个享元工厂类，用于管理共享对象。在这个类中，可以使用Map来存储已经创建的共享对象，并提供一个方法来获取共享对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 创建享元工厂
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 14:02
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Flyweight</span><span class="token punctuation">&gt;</span></span> flyweightMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Flyweight</span> <span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token class-name">String</span> intrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flyweightMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flyweightMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flyweightMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建享元服务类FlyweightService：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 14:03
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">FlyweightFactory</span> flyweightFactory<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token class-name">String</span> intrinsicState<span class="token punctuation">,</span> <span class="token class-name">String</span> extrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Flyweight</span> flyweight <span class="token operator">=</span> flyweightFactory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweight<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span>extrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">FlyweightService</span> flyweightService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 享元模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testFlyweightPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 享元模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        flyweightService<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token string">&quot;n1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweightService<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token string">&quot;n1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweightService<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token string">&quot;n2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>  在这个示例中，我们定义了一个Flyweight接口和一个ConcreteFlyweight实现类，用于表示共享对象。然后，我们创建了一个FlyweightFactory类，用于管理共享对象。在SpringBoot应用程序中，我们创建了一个FlyweightService类，并将FlyweightFactory注入到这个类中。在这个类中，我们可以通过调用FlyweightFactory的getFlyweight方法来获取共享对象，并传递外部状态。</p>`,10),q={href:"https://github.com/iluwatar/java-design-patterns/tree/master/flyweight",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.csdn.net/wg22222222/article/details/108932020",target:"_blank",rel:"noopener noreferrer"},j=p(`<h2 id="代理模式-proxy-pattern" tabindex="-1"><a class="header-anchor" href="#代理模式-proxy-pattern" aria-hidden="true">#</a> 代理模式(Proxy Pattern)</h2><p>  代理模式是一种结构型设计模式，它允许你提供一个代理对象来控制对另一个对象的访问。</p><p>  代理模式通常用于以下情况：</p><ol style="padding-left:5em;"><li>远程代理：代理对象在不同的地址空间中，可以通过网络进行通信。</li><li>虚拟代理：代理对象在创建时不会立即加载真正的对象，而是在需要时才进行加载。</li><li>安全代理：代理对象控制对真正对象的访问权限，可以验证访问者的权限。</li></ol><p>  代理模式的核心思想是代理对象与真正对象实现相同的接口，代理对象持有真正对象的引用，并在必要时调用真正对象的方法。</p><p>  代理模式的优点包括：</p><ol style="padding-left:5em;"><li>对客户端隐藏真正对象的实现细节，提高了系统的安全性和稳定性。</li><li>可以在不修改真正对象的情况下，对其进行增强或限制访问。</li><li>可以实现远程调用，使得客户端可以访问不同地址空间中的对象。</li></ol><p>  代理模式的缺点包括：</p><ol style="padding-left:5em;"><li>代理模式会增加系统的复杂度，因为需要增加代理类和真正对象的接口。</li><li>代理模式可能会影响系统的性能，因为代理对象需要进行额外的处理，增加了系统的开销。</li></ol><p>  总的来说，代理模式可以帮助我们实现更加灵活和安全的系统。</p><h3 id="如何使用-6" tabindex="-1"><a class="header-anchor" href="#如何使用-6" aria-hidden="true">#</a> 如何使用</h3><p>在SpringBoot中使用代理模式。具体步骤如下：</p><ol><li><p>修改pom，增加aop依赖项：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个接口ProxyPatternController，用于接受参数和返回结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 14:53
 */</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;proxy&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyPatternController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个日志代理切面类LogProxyAspect，用于打印指定目录下所有的controller接口的入参和返回值信息：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/23 14:56
 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogProxyAspect</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(* com.blacktea.structuralpatterns.proxypattern.controller.*.*(..))&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;pointcut()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforePointcut</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameterNames <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> arg <span class="token operator">=</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> parameterName <span class="token operator">=</span> parameterNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>parameterName<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;入参进行解析后：{}&quot;</span><span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;接口调用开始，请求参数为：{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>pointcut<span class="token operator">=</span><span class="token string">&quot;pointcut()&quot;</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterReturningPointcut</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Object</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;接口调用结束，返回结果为：{}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动项目后进行测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 测试 代理模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testProxyPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 代理模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;赵羽&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;isOk&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;测试代理模式。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:&quot;</span> <span class="token operator">+</span> <span class="token number">8080</span> <span class="token operator">+</span> <span class="token string">&quot;/proxy/&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token comment">//超时，毫秒</span>
                <span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;测试 代理模式接口返回的结果：{}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：单元测试时，必须保证服务已启动。</p><p>也可以不适应单元测试，直接通过postman或是其他工具进行请求测试。</p></li></ol>`,13),x={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/proxy",target:"_blank",rel:"noopener noreferrer"};function C(M,T){const a=i("ExternalLinkIcon");return c(),o("div",null,[k,n("p",null,[s("  GitHub学习地址："),n("a",d,[s("java-design-patterns/localization/zh/adapter at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),r,n("p",null,[s("​ GitHub学习地址："),n("a",v,[s("java-design-patterns/localization/zh/bridge at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),m,n("p",null,[s("​   GitHub学习地址："),n("a",b,[s("java-design-patterns/localization/zh/decorator at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),g,n("p",null,[s("GitHub学习地址："),n("a",y,[s("java-design-patterns/localization/zh/composite at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),w,n("p",null,[s("  GitHub学习地址："),n("a",f,[s("java-design-patterns/localization/zh/facade at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),h,n("p",null,[s("  GitHub学习地址（英文）："),n("a",q,[s("Java-design-patterns/flyweight在Master ·iluwatar/java-design-patterns (github.com)"),t(a)])]),n("p",null,[s("  CSDN翻译： "),n("a",S,[s("(117条消息) 享元（Flyweight）模式_梵法利亚的博客-CSDN博客"),t(a)])]),j,n("p",null,[s("GitHub学习地址："),n("a",x,[s("java-design-patterns/localization/zh/proxy at master · iluwatar/java-design-patterns (github.com)"),t(a)])])])}const _=e(u,[["render",C],["__file","结构型模式.html.vue"]]);export{_ as default};
