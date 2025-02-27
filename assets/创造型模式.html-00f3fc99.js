import{_ as p,V as c,W as o,X as n,Y as s,$ as t,a0 as e,C as i}from"./framework-a71e09ed.js";const l={},u=e(`<h1 id="创造型模式" tabindex="-1"><a class="header-anchor" href="#创造型模式" aria-hidden="true">#</a> 创造型模式</h1><p>  创造型模式是设计模式中的一类，它主要用于处理对象的创建，隐藏对象的创建细节，提供更加灵活的对象创建方式，降低系统的耦合度。</p><p>   常见的创造型模式包括：</p><ol style="padding-left:5em;"><li><a href="/backEnd/设计模式/创造型模式.html#简单工厂模式-simple-factory-pattern">简单工厂模式（Simple Factory Pattern）</a></li><li><a href="/backEnd/设计模式/创造型模式.html#工厂方法模式-factory-method-pattern">工厂方法模式（Factory Method Pattern）</a></li><li><a href="/backEnd/设计模式/创造型模式.html#抽象工厂模式-abstract-factory-pattern">抽象工厂模式（Abstract Factory Pattern）</a></li><li><a href="/backEnd/设计模式/创造型模式.html#单例模式-singleton-pattern">单例模式（Singleton Pattern）</a></li><li><a href="/backEnd/设计模式/创造型模式.html#原型模式-prototype-pattern">原型模式（Prototype Pattern）</a></li><li><a href="/backEnd/设计模式/创造型模式.html#建造者模式-builder-pattern">建造者模式（Builder Pattern）</a></li></ol><p>  其中，简单工厂模式、工厂方法模式和抽象工厂模式都是工厂模式的不同变体，它们都用于创建对象；</p><p>  单例模式用于保证一个类只有一个实例；</p><p>  原型模式用于复制对象；</p><p>  建造者模式用于创建复杂对象。</p><h2 id="简单工厂模式-simple-factory-pattern" tabindex="-1"><a class="header-anchor" href="#简单工厂模式-simple-factory-pattern" aria-hidden="true">#</a> 简单工厂模式（Simple Factory Pattern）</h2><p>  简单工厂模式是一种创建型设计模式，它通过一个工厂类来创建不同类型的对象。简单工厂模式将对象的创建过程封装在一个工厂类中，客户端只需要通过工厂类来获取所需的对象，而不需要知道具体的对象创建过程。</p><p>  在简单工厂模式中，工厂类负责创建不同类型的对象，并且可以根据客户端的需求来创建不同的对象。工厂类通常包含一个静态方法，该方法接收一个参数，根据参数的不同来创建不同类型的对象。</p><p>  简单工厂模式的优点是可以将对象的创建过程封装起来，客户端不需要知道具体的对象创建过程，从而减少了客户端的耦合度。同时，简单工厂模式也可以提高代码的复用性，因为可以在不同的客户端中重复使用同一个工厂类。</p><p>  简单工厂模式的缺点是当需要创建新类型的对象时，需要修改工厂类的代码，从而违反了开放-封闭原则。此外，简单工厂模式也会导致工厂类的代码变得过于复杂，难以维护。</p><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用简单工厂模式，可以通过以下步骤实现：</p><ol><li><p>定义一个动物接口Animal，并且实现接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 动物接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/18 23:30
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 动物发出声音
     */</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/18 23:31
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵喵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/18 23:31
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪汪&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 0:35
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SeaOtter</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;咕噜咕噜&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个工厂类AnimalFactory，并且通过注入Map形式的Animal接口实现来实现获取对应Animal实现类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/18 23:33
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnimalFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Animal</span><span class="token punctuation">&gt;</span></span> animalMap<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Animal</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAnimal</span><span class="token punctuation">(</span><span class="token class-name">String</span> animalType<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>animalType <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 将首字母变小写</span>
        <span class="token class-name">String</span> newAnimalType <span class="token operator">=</span>  <span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">lowerFirst</span><span class="token punctuation">(</span>animalType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>animalMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>newAnimalType<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AnimalFactory</span> animalFactory<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 简单工厂模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testSimpleFactoryModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 简单工厂模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Animal</span><span class="token punctuation">&gt;</span></span> catOpt <span class="token operator">=</span> animalFactory<span class="token punctuation">.</span><span class="token function">getAnimal</span><span class="token punctuation">(</span><span class="token class-name">SeaOtter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        catOpt<span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token operator">::</span><span class="token function">makeSound</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,16),d={href:"https://github.com/iluwatar/java-design-patterns/blob/master/localization/zh/factory/README.md",target:"_blank",rel:"noopener noreferrer"},r=e(`<h2 id="工厂方法模式-factory-method-pattern" tabindex="-1"><a class="header-anchor" href="#工厂方法模式-factory-method-pattern" aria-hidden="true">#</a> 工厂方法模式（Factory Method Pattern）</h2><p>  工厂方法模式是一种创建型设计模式，它定义了一个抽象的工厂接口，具体的工厂类实现该接口来创建不同类型的对象。工厂方法模式将对象的创建过程委托给具体的工厂类，从而将对象的创建和使用分离开来。</p><p>  在工厂方法模式中，抽象工厂接口中通常包含一个工厂方法，该方法由具体的工厂类来实现，用于创建不同类型的对象。客户端通过调用工厂方法来获取所需的对象，而不需要知道具体的对象创建过程。</p><p>  工厂方法模式的优点是可以将对象的创建过程和使用过程分离开来，从而提高代码的灵活性和可维护性。同时，工厂方法模式也符合开放-封闭原则，因为可以通过添加新的工厂类来扩展系统的功能。</p><p>  工厂方法模式的缺点是需要定义大量的工厂类，从而增加了代码的复杂度。此外，工厂方法模式也可能导致代码的重复，因为不同的工厂类可能会创建相同类型的对象。</p><p>  总的来说，工厂方法模式适用于需要创建一系列相关的对象，但是具体的对象类型在运行时才能确定的情况下。</p><h3 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用工厂方法模式，可以通过以下步骤实现：</p><ol><li><p>定义一个接口UserService，并且实现接口UserServiceImpl：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 1:08
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 1:10
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">SpringUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">// 如果需要在这里调用Spring管理的Bean，需要导入 ApplicationContext</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;添加用户,参数是:{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token punctuation">)</span> <span class="token class-name">SpringUtil</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
               <span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span><span class="token class-name">Cat</span><span class="token operator">::</span><span class="token function">makeSound</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建工厂类UserServiceFactory并且实现FactoryBean接口，重写 getObject方法返回一个UserServiceImpl对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 1:12
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceFactory</span> <span class="token keyword">implements</span> <span class="token class-name">FactoryBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserService</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserService</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getObjectType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">UserService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 工厂方法模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFactorymethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 工厂方法模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> userMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userService<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span>userMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9),k={href:"https://github.com/iluwatar/java-design-patterns/blob/master/localization/zh/factory-method/README.md",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="抽象工厂模式-abstract-factory-pattern" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式-abstract-factory-pattern" aria-hidden="true">#</a> 抽象工厂模式（Abstract Factory Pattern）</h2><p>  抽象工厂模式是一种创建型设计模式，它定义了一个抽象的工厂接口，具体的工厂类实现该接口来创建一组相关的对象。抽象工厂模式将对象的创建过程封装在一个工厂类中，客户端只需要通过工厂类来获取所需的对象，而不需要知道具体的对象创建过程。</p><p>  在抽象工厂模式中，抽象工厂接口中通常包含多个工厂方法，每个工厂方法用于创建一个相关的对象。具体的工厂类实现这些工厂方法来创建一组相关的对象。客户端通过调用工厂方法来获取所需的对象，而不需要知道具体的对象创建过程。</p><p>  抽象工厂模式的优点是可以将对象的创建过程封装起来，客户端不需要知道具体的对象创建过程，从而减少了客户端的耦合度。同时，抽象工厂模式也可以提高代码的复用性，因为可以在不同的客户端中重复使用同一个工厂类。</p><p>  抽象工厂模式的缺点是当需要创建新类型的对象时，需要修改抽象工厂接口和所有的具体工厂类的代码，从而违反了开放-封闭原则。此外，抽象工厂模式也会导致工厂类的代码变得过于复杂，难以维护。</p><p>  总的来说，抽象工厂模式适用于需要创建一组相关的对象，且这些对象的类型在运行时才能确定的情况下。</p><h3 id="如何使用-2" tabindex="-1"><a class="header-anchor" href="#如何使用-2" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用抽象工厂模式，可以通过以下步骤实现：</p><p>  这里的代码案例场景有支付方式和小程序类型，我如下只选择了支付方式了说明，因为两个其实包含的理念一样。</p><ol><li><p>这里我使用一个支付的业务场景来说明，不过这里做了不同支付方式的案例。</p></li><li><p>定义一个支付接口Pay，并且实现该接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 支付接口
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 14:40
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Pay</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> payParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 14:42
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliPayService</span> <span class="token keyword">implements</span> <span class="token class-name">Pay</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> payParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;支付宝支付&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 14:41
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeChatPayService</span> <span class="token keyword">implements</span> <span class="token class-name">Pay</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> payParams<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;微信支付&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个支付方式工厂接口AbstractPayFactory，里面存在两个方法，分别返回不同支付方式的对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 14:44
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AbstractPayFactory</span> <span class="token punctuation">{</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AliPayService</span><span class="token punctuation">&gt;</span></span> <span class="token function">createAliPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">WeChatPayService</span><span class="token punctuation">&gt;</span></span> <span class="token function">createWxChatPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个工厂实现类ConcretePayFactory来实现AbstractPayFactory。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 14:46
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcretePayFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbstractPayFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AliPayService</span><span class="token punctuation">&gt;</span></span> <span class="token function">createAliPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AliPayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">WeChatPayService</span><span class="token punctuation">&gt;</span></span> <span class="token function">createWxChatPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeChatPayService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractPayFactory</span> payFactory<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 抽象工厂方法
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testAbstractPayFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;测试 抽象工厂方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> payMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;amount&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;22.5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 测试 支付</span>
        payFactory<span class="token punctuation">.</span><span class="token function">createAliPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>pay <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    payMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;payMethod&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;支付宝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    pay<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>payMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        payFactory<span class="token punctuation">.</span><span class="token function">createWxChatPay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>pay <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    payMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;payMethod&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;支付宝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    pay<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span>payMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,10),m={href:"https://github.com/iluwatar/java-design-patterns/blob/master/localization/zh/abstract-factory/README.md",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="单例模式-singleton-pattern" tabindex="-1"><a class="header-anchor" href="#单例模式-singleton-pattern" aria-hidden="true">#</a> 单例模式（Singleton Pattern）</h2><p>  单例模式是一种创建型设计模式，它的目的是确保在整个应用程序中只有一个类的实例，并提供全局访问点。实现单例模式的类只有一个实例，并提供访问该实例的全局方法。</p><p>  单例模式的优点包括：</p><ol style="padding-left:5em;"><li>保证只有一个实例存在，减少了内存开销和系统资源的浪费。</li><li>提供了全局访问点，方便了代码的调用和管理。</li></ol><p>  但是单例模式也有一些缺点，比如：</p><ol style="padding-left:5em;"><li>单例类的职责不能过重，否则会导致代码的复杂性和可维护性下降。</li><li>单例类的扩展性不高，如果需要添加新的功能，可能需要修改单例类的代码，这可能会导致系统的不稳定。</li></ol><p>  总之，单例模式是一种非常常用的设计模式，它可以在需要的时候方便地创建唯一的实例，并提供全局访问点，从而提高代码的可维护性和可读性。</p><h3 id="如何使用-3" tabindex="-1"><a class="header-anchor" href="#如何使用-3" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用单例模式，可以通过以下步骤实现：</p><p>这里写了三种单例，分别是：</p><ol><li><p>Spring指定为单例，但是存在线程安全问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 非线程安全
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 16:15
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">&quot;singleton&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 指定类型为单例，实际上默认就是单例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySingleton</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>双重锁单例，用于解决线程安全问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 双重检查锁来确保线程安全,但是这样会被反射获得
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 16:15
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Singleton</span> <span class="token comment">// 用于标记一个类为单例模式。它的作用是告诉Spring框架，在整个应用程序中只需要创建一个该类的实例。</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySingleton2</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">MySingleton2</span> instance<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">MySingleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">MySingleton2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">MySingleton2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MySingleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>内部静态类，用于解决线程安全问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 静态内部类实现
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 16:40
 *
 * 在这个示例中，使用@Component注解标记了MySingleton类，以便Spring框架能够将该类识别为一个可注入的bean。
 * 静态内部类SingletonHolder包含了一个静态实例变量INSTANCE，该变量在类加载时被初始化，且只会被初始化一次。由于静态内部类的加载是线程安全的，因此可以保证在多线程环境下，只有一个实例被创建。
 * 在getInstance()方法中，直接返回SingletonHolder.INSTANCE变量，这样就可以获取到该类的实例。
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySingleton3</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">MySingleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">MySingleton3</span> <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MySingleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">MySingleton3</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span><span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton</span> mySingleton1<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton</span> mySingleton2<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton2</span> mySingleton21<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton2</span> mySingleton22<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton3</span> mySingleton31<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MySingleton3</span> mySingleton32<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 单例模式
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;测试 单例模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 线程不安全之单例模式</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;线程不安全之单例模式{}&quot;</span><span class="token punctuation">,</span> mySingleton1<span class="token operator">==</span>mySingleton2<span class="token operator">?</span><span class="token string">&quot;成功&quot;</span><span class="token operator">:</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 双重检查锁之单例模式
         *
         *  两种使用方式
         *   1. MySingleton2.getInstance()
         *
         *   2. @Autowired
         *      private MySingleton2 mySingleton22;
         *
         *   注意：
         *      1. 第一种方法不被Spring所管理，无法访问其他bean。
         *      2. 虽然该类是单例，但并不代表两种方式的到的对象时同一个哦。
         */</span>
        <span class="token class-name">MySingleton2</span> instance1 <span class="token operator">=</span> <span class="token class-name">MySingleton2</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MySingleton2</span> instance2 <span class="token operator">=</span> <span class="token class-name">MySingleton2</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;双重检查锁之单例模式{}&quot;</span><span class="token punctuation">,</span> instance1<span class="token operator">==</span>instance2<span class="token operator">?</span><span class="token string">&quot;成功&quot;</span><span class="token operator">:</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;双重检查锁之单例模式{}&quot;</span><span class="token punctuation">,</span> mySingleton21<span class="token operator">==</span>mySingleton22<span class="token operator">?</span><span class="token string">&quot;成功&quot;</span><span class="token operator">:</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;双重检查锁之单例模式，mySingleton21 == instance1的结果为:{},由此可见，方式1和方式2的到的对象可不是同一个哦。&quot;</span><span class="token punctuation">,</span> mySingleton21<span class="token operator">==</span>instance1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 内部静态类之单例模式
         *  1. MySingleton3.getInstance()
         *
         *  2. @Autowired
         *     private MySingleton3 mySingleton31;
         *
         *  注意：
         *   1. 第一种方法不被Spring所管理，无法访问其他bean。
         *   2. 虽然该类是单例，但并不代表两种方式的到的对象时同一个哦。
         */</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;内部静态类之单例模式{}&quot;</span><span class="token punctuation">,</span> mySingleton31<span class="token operator">==</span>mySingleton32<span class="token operator">?</span><span class="token string">&quot;成功&quot;</span><span class="token operator">:</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MySingleton3</span> instance11 <span class="token operator">=</span> <span class="token class-name">MySingleton3</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MySingleton3</span> instance22 <span class="token operator">=</span> <span class="token class-name">MySingleton3</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;内部静态类之单例模式{}&quot;</span><span class="token punctuation">,</span> instance11<span class="token operator">==</span>instance22<span class="token operator">?</span><span class="token string">&quot;成功&quot;</span><span class="token operator">:</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;内部静态类之单例模式，mySingleton31 == instance21的结果为:{},由此可见，方式1和方式2的到的对象可不是同一个哦。&quot;</span><span class="token punctuation">,</span> mySingleton31<span class="token operator">==</span>instance11<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),y={href:"https://github.com/iluwatar/java-design-patterns/tree/master/singleton",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="原型模式-prototype-pattern" tabindex="-1"><a class="header-anchor" href="#原型模式-prototype-pattern" aria-hidden="true">#</a> 原型模式（Prototype Pattern）</h2><p>  原型模式是一种创建型设计模式，其核心思想是通过复制已有对象来创建新的对象，而不是通过实例化类来创建新的对象。原型模式是一种基于对象的复制技术，它可以在不知道对象具体实现的情况下创建新的对象，同时可以避免创建大量的重复对象，提高系统的性能和效率。</p><p>  在原型模式中，原型类是一个可被复制的对象，它定义了一个克隆方法，用于复制自身并返回一个新的对象实例。克隆方法通常是通过实现Java中的Cloneable接口来实现的。</p><p>  使用原型模式的主要优点是可以减少对象的创建次数，提高系统的性能和效率，同时也可以避免对象的重复创建。原型模式的主要缺点是需要实现Cloneable接口，并重写clone方法，这对于一些复杂的对象来说可能会比较困难。</p><p>  总之，原型模式是一种非常实用的设计模式，它可以在需要创建大量对象的情况下，提高系统的性能和效率，同时也可以避免对象的重复创建。</p><h3 id="如何使用-4" tabindex="-1"><a class="header-anchor" href="#如何使用-4" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用原型模式，可以通过以下步骤实现：</p><ol><li><p>定义一个原型类Prototype实现Cloneable接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:04
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Prototype</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Prototype</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Prototype</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Prototype</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个配置类ProtoTypeConfig，用来定义Prototype类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:08
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoTypeConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">&quot;prototype&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Prototype</span> <span class="token function">prototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Prototype</span><span class="token punctuation">(</span><span class="token string">&quot;prototype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BeanFactory</span> beanFactory<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Prototype</span> prototype11<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Prototype</span> prototype22<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 原型模式
     * 结果： 原型返回的是新的对象，使用的是深克隆拷贝哦。
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testPrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;测试 原型模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 通过 beanFactory 获取
         */</span>
        <span class="token class-name">Prototype</span> prototype1 <span class="token operator">=</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Prototype</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Prototype</span> prototype2 <span class="token operator">=</span> prototype1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>prototype1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;prototype&quot;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>prototype2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;prototype&quot;</span>
        prototype2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;newPrototype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>prototype1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;prototype&quot;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>prototype2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;newPrototype&quot;</span>

        <span class="token doc-comment comment">/**
         * 通过  @Autowired 获取
         */</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;prototype11==prototype22,结果为：{}&quot;</span><span class="token punctuation">,</span> prototype11<span class="token operator">==</span>prototype22<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prototype1==prototype2,结果为：false</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,8),w={href:"https://github.com/iluwatar/java-design-patterns/tree/master/prototype",target:"_blank",rel:"noopener noreferrer"},f=e(`<h2 id="建造者模式-builder-pattern" tabindex="-1"><a class="header-anchor" href="#建造者模式-builder-pattern" aria-hidden="true">#</a> 建造者模式（Builder Pattern）</h2><p>  建造者模式是一种创建型设计模式，它允许您创建复杂的对象，同时将其构造过程与表示分离。它涉及将构造逻辑封装在一个单独的对象中，这使得您可以改变一个对象的内部表示方式，而不会影响到客户端代码。</p><p>  在建造者模式中，您将一个复杂对象的构造过程分解成多个简单的步骤，并将每个步骤的实现委托给一个单独的建造者对象。客户端代码只需指定要构建的对象类型和所需的步骤，然后将它们传递给相应的建造者对象，以便构建出所需的对象。</p><p>  建造者模式的优点包括：</p><ol style="padding-left:5em;"><li>可以隐藏对象的复杂构造过程，使客户端代码更简洁。</li><li>可以改变对象的内部表示方式，而不会影响到客户端代码。</li><li>可以将同一构造过程用于不同的对象，提高代码的复用性。</li><li>可以将构造逻辑与表示分离，使得代码更易于维护。</li></ol><p>  建造者模式的缺点包括：</p><ol style="padding-left:5em;"><li>建造者对象的数量可能会增加，增加代码的复杂性。</li><li>构造过程的顺序可能会影响最终对象的表示方式。</li><li>对象的构造过程可能会变得更加复杂，需要更多的代码来实现。</li></ol><p>  总之，建造者模式是一种有效的创建复杂对象的方法，它可以将构造逻辑与表示分离，提高代码的复用性和可维护性。</p><h3 id="如何使用-5" tabindex="-1"><a class="header-anchor" href="#如何使用-5" aria-hidden="true">#</a> 如何使用</h3><p>在Spring Boot中使用建造者模式，可以通过以下步骤实现：</p><p>将一个User对象(建造者)转化为UserEntity对象的场景。其实如果单讲如何创建建造者，User类已经可以实现了，但是使用时会存在一些转化的问题，例如：User user = mapper.convertValue(userEntity, User.class);</p><p>转化时会报错，因为User里缺少了UserEntity对象里的一些属性，所以我这里考虑之下将我如何使用的方式进行编写。</p><ol><li><p>定义一个建造者User类，一个UserEntity类，后者类属性比前者多：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:36
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Builder</span> <span class="token comment">// 实现建造者</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:36
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserEntity</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> other<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>因为我使用的mapstruct(以下简称ms)，所以需要在pom里面加入两个依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mapstruct<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mapstruct<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mapstruct<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mapstruct-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>导入依赖后，创建一个接口UserMapper：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 20:17
 */</span>
<span class="token annotation punctuation">@Mapper</span><span class="token punctuation">(</span>componentModel <span class="token operator">=</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token class-name">UserEntity</span> <span class="token function">toEntity</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">User</span> <span class="token function">toUser</span><span class="token punctuation">(</span><span class="token class-name">UserEntity</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义一个接口UserService并实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:38
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JsonProcessingException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>:
 * <span class="token keyword">@author</span>: black tea
 * <span class="token keyword">@date</span>: 2023/3/19 19:38
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JsonProcessingException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 假设从数据库中去到userEntity</span>
        <span class="token class-name">UserEntity</span> userEntity <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">daoGetUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1. 将普通对象里的属性一个一个设置到构造者对象中</span>
        <span class="token class-name">User</span> build <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 使用 MapStruct（推荐）</span>
        <span class="token class-name">User</span> toUser <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">toUser</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserEntity</span> toEntity <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">toEntity</span><span class="token punctuation">(</span>build<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. 使用jackson</span>
        <span class="token class-name">ObjectMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将构造者对象转为普通对象</span>
        <span class="token class-name">UserEntity</span> newUserEntity <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>
                mapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>build<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">UserEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 存在缺少的对象时会报错，例如现在缺少other,这种就需要自定义序列化</span>
<span class="token comment">//        User user = mapper.convertValue(userEntity, User.class);</span>

        <span class="token comment">// 4. BeanUtils.copyProperties()</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>userEntity<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> build<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">UserEntity</span> <span class="token function">daoGetUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">UserEntity</span> userEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&quot;xxx@xx.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> other <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        other<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://icon.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setOther</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> userEntity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单元测试使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>blacktea<span class="token punctuation">.</span>creationalpatterns<span class="token punctuation">.</span>builderpattern<span class="token punctuation">.</span>servce<span class="token punctuation">.</span></span>UserService</span> userService1<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 测试 建造者模式
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">JsonProcessingException</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testBuilderPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JsonProcessingException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;测试 建造者模式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">User</span> user <span class="token operator">=</span> userService1<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;打印user信息:{}&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：ms是根据类型、属性名称之间进行自动转换的，如下就是本次案例转换后生成的类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Generated</span><span class="token punctuation">(</span>
    value <span class="token operator">=</span> <span class="token string">&quot;org.mapstruct.ap.MappingProcessor&quot;</span><span class="token punctuation">,</span>
    date <span class="token operator">=</span> <span class="token string">&quot;2023-03-23T18:44:41+0800&quot;</span><span class="token punctuation">,</span>
    comments <span class="token operator">=</span> <span class="token string">&quot;version: 1.4.1.Final, compiler: javac, environment: Java 1.8.0_271 (Oracle Corporation)&quot;</span>
<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserMapperImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserEntity</span> <span class="token function">toEntity</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> user <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">UserEntity</span> userEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        userEntity<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span> user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        userEntity<span class="token punctuation">.</span><span class="token function">setEmail</span><span class="token punctuation">(</span> user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> userEntity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">toUser</span><span class="token punctuation">(</span><span class="token class-name">UserEntity</span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> entity <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">UserBuilder</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        user<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span> entity<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span> entity<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span> entity<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> user<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,13),h={href:"https://github.com/iluwatar/java-design-patterns/tree/master/localization/zh/builder",target:"_blank",rel:"noopener noreferrer"};function S(q,j){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("  GitHub学习地址："),n("a",d,[s("java-design-patterns/README.md at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),r,n("p",null,[s("  GitHub学习地址："),n("a",k,[s("java-design-patterns/README.md at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),v,n("p",null,[s("  GitHub学习地址："),n("a",m,[s("java-design-patterns/README.md at master · iluwatar/java-design-patterns (github.com)"),t(a)])]),b,n("p",null,[s("  GitHub学习地址："),n("a",y,[s("Java-design-patterns/singleton at master ·iluwatar/java-design-patterns (github.com)"),t(a)])]),g,n("p",null,[s("  GitHub学习地址："),n("a",w,[s("Java 设计模式/原型在大师 ·iluwatar/java-design-patterns (github.com)"),t(a)])]),f,n("p",null,[s("  GitHub学习地址："),n("a",h,[s("java-design-patterns/localization/zh/builder at master · iluwatar/java-design-patterns (github.com)"),t(a)])])])}const M=p(l,[["render",S],["__file","创造型模式.html.vue"]]);export{M as default};
