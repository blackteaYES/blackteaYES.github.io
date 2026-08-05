---
date: 2021-09-30
categories:
  - WebMagic
tag:
  - 开发
  - java
  - springboot整合
  - WebMagic
  - 爬虫

---


# SpringBoot整合WebMagic

## 前言

&emsp;&emsp;为什么我要整合WebMagic ?

&emsp;&emsp;[WebMagic是一个简单灵活的Java爬虫框架。基于WebMagic，你可以快速开发出一个高效、易维护的爬虫。](http://webmagic.io/)

&emsp;&emsp;因为部分网站它不支持外链图片上传,而我已经把我的图片资源上传了,所以我需要把所有的资源进行获取整合再在部分网站重新上传;

&emsp;&emsp;举个🌰:

![图片上传失败例子](/assets/img/WebMagic/CSDN图片上传失败.png)

&emsp;&emsp;红框里的就是上传失败的。

&emsp;&emsp;很无奈,人家不支持外链地址,那没有办法,自己重新上传吧!

&emsp;&emsp;所以我通过[WebMagic](http://webmagic.io/)进行爬取我放置在其他网站的博客再进行上传。


&emsp;&emsp;如下🌰:

​	![博客图片示例](/assets/img/WebMagic/博客图片示例.png)

&emsp;&emsp;爬取后获得的资源：

​	![爬取后的资源](/assets/img/WebMagic/爬取后的资源.png)



## 文档迭代

| version |                             功能                             |                         详细描述                          |
| :-----: | :----------------------------------------------------------: | :-------------------------------------------------------: |
|  0.0.1  | 通过整合WebMagic实现了通用列表(多页面)及详细内容(单页面)的通用爬取接口 | 通用列表(多页面是指列表页面中的详情页),单页就是指的详情页 |



## 项目技术版本(技术选型)

> jdk - version - 1.8
>
> maven - version - 3.8.1
>
> SpringBoot - version - 2.2.2.RELEASE
>
> Swagger - version - 2.7.0
>
> remark - version - 1.0.0
>
> webmagic - version - 0.7.3
>
> 其他 参考[pom](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/pom.xml)



## 项目地址

&emsp;&emsp; Gitee地址：https://gitee.com/zjydzyjs/spring-boot-use-case-collection/tree/master/webmagic



## 前置知识

### WebMagic 自主学习

&emsp;&emsp;[webmagic官网](http://webmagic.io/)

&emsp;&emsp;[webmagic详情文档](http://webmagic.io/docs/zh/)

&emsp;&emsp;这里说一下我的感慨,webmagic的作者是真厉害,他再官方上也说了,该框架是他自己业余开发,这个精神值得佩服,在此感谢作者([Yihua Huang](https://github.com/code4craft));

&emsp;&emsp;假设你已经学习了该项目，可以继续学习了。



## WebMagic 简单测试

&emsp;&emsp;文档中的第一个用例:

![文档中的第一个用例](/assets/img/WebMagic/文档中的第一个用例.png)

&emsp;&emsp;你可以再idea中进行搜索(快速按两次`shift`),输入**GithubRepoPageProcessor**类就可以发现这个作者已经写好的用例了,我们可以测试一下。

```java
package us.codecraft.webmagic.processor.example;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;

public class GithubRepoPageProcessor implements PageProcessor {
    private Site site = Site.me().setRetryTimes(3).setSleepTime(1000).setTimeOut(10000);

    public GithubRepoPageProcessor() {
    }

    public void process(Page page) {
        page.addTargetRequests(page.getHtml().links().regex("(https://github\\.com/[\\w\\-]+/[\\w\\-]+)").all());
        page.addTargetRequests(page.getHtml().links().regex("(https://github\\.com/[\\w\\-])").all());
        page.putField("author", page.getUrl().regex("https://github\\.com/(\\w+)/.*").toString());
        page.putField("name", page.getHtml().xpath("//h1[@class='public']/strong/a/text()").toString());
        if (page.getResultItems().get("name") == null) {
            page.setSkip(true);
        }

        page.putField("readme", page.getHtml().xpath("//div[@id='readme']/tidyText()"));
    }

    public Site getSite() {
        return this.site;
    }

    public static void main(String[] args) {
        Spider.create(new GithubRepoPageProcessor()).addUrl(new String[]{"https://github.com/code4craft"}).thread(5).run();
    }
}
```

&emsp;&emsp;你直接通过通过以下用例进行调用就可以测试了,在类[{@link com.blacktea.webmagic.demo.WebMagicTest}](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/test/java/com/blacktea/webmagic/demo/WebMagicTest.java)里,

```java
@Test
void testDemo1(){
    Spider.create(new GithubRepoPageProcessor())
            .addUrl(new String[]{"https://github.com/code4craft"})
            .thread(5).run();
}
```

&emsp;&emsp;运行得到错误内容:

```java
10:34:13.307 [main] DEBUG us.codecraft.webmagic.scheduler.QueueScheduler - push to queue https://github.com/code4craft
10:34:13.730 [main] INFO us.codecraft.webmagic.Spider - Spider github.com started!
10:34:13.762 [pool-1-thread-1] DEBUG org.apache.http.client.protocol.RequestAddCookies - CookieSpec selected: standard
10:34:13.766 [pool-1-thread-1] DEBUG org.apache.http.client.protocol.RequestAuthCache - Auth cache not set in the context
10:34:13.766 [pool-1-thread-1] DEBUG org.apache.http.impl.conn.PoolingHttpClientConnectionManager - Connection request: [route: {s}->https://github.com:443][total kept alive: 0; route allocated: 0 of 100; total allocated: 0 of 5]
10:34:13.774 [pool-1-thread-1] DEBUG org.apache.http.impl.conn.PoolingHttpClientConnectionManager - Connection leased: [id: 0][route: {s}->https://github.com:443][total kept alive: 0; route allocated: 1 of 100; total allocated: 1 of 5]
10:34:13.775 [pool-1-thread-1] DEBUG org.apache.http.impl.execchain.MainClientExec - Opening connection {s}->https://github.com:443
10:34:13.778 [pool-1-thread-1] DEBUG org.apache.http.impl.conn.DefaultHttpClientConnectionOperator - Connecting to github.com/140.82.112.4:443
10:34:13.778 [pool-1-thread-1] DEBUG org.apache.http.conn.ssl.SSLConnectionSocketFactory - Connecting socket to github.com/140.82.112.4:443 with timeout 10000
10:34:14.052 [pool-1-thread-1] DEBUG org.apache.http.conn.ssl.SSLConnectionSocketFactory - Enabled protocols: [TLSv1]
10:34:14.052 [pool-1-thread-1] DEBUG org.apache.http.conn.ssl.SSLConnectionSocketFactory - Enabled cipher suites:[TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDH_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_DSS_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA, TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDH_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_DSS_WITH_AES_128_CBC_SHA, TLS_EMPTY_RENEGOTIATION_INFO_SCSV]
10:34:14.052 [pool-1-thread-1] DEBUG org.apache.http.conn.ssl.SSLConnectionSocketFactory - Starting handshake
10:34:14.314 [pool-1-thread-1] DEBUG org.apache.http.impl.conn.DefaultManagedHttpClientConnection - http-outgoing-0: Shutdown connection
10:34:14.314 [pool-1-thread-1] DEBUG org.apache.http.impl.execchain.MainClientExec - Connection discarded
10:34:14.314 [pool-1-thread-1] DEBUG org.apache.http.impl.conn.PoolingHttpClientConnectionManager - Connection released: [id: 0][route: {s}->https://github.com:443][total kept alive: 0; route allocated: 0 of 100; total allocated: 0 of 5]
10:34:14.316 [pool-1-thread-1] WARN us.codecraft.webmagic.downloader.HttpClientDownloader - download page https://github.com/code4craft error
javax.net.ssl.SSLHandshakeException: Received fatal alert: protocol_version
	at sun.security.ssl.Alert.createSSLException(Alert.java:131)
	at sun.security.ssl.Alert.createSSLException(Alert.java:117)
	at sun.security.ssl.TransportContext.fatal(TransportContext.java:340)
	at sun.security.ssl.Alert$AlertConsumer.consume(Alert.java:293)
	at sun.security.ssl.TransportContext.dispatch(TransportContext.java:186)
	at sun.security.ssl.SSLTransport.decode(SSLTransport.java:154)
	at sun.security.ssl.SSLSocketImpl.decode(SSLSocketImpl.java:1279)
	at sun.security.ssl.SSLSocketImpl.readHandshakeRecord(SSLSocketImpl.java:1188)
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:401)
	at sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:373)
	at org.apache.http.conn.ssl.SSLConnectionSocketFactory.createLayeredSocket(SSLConnectionSocketFactory.java:436)
	at org.apache.http.conn.ssl.SSLConnectionSocketFactory.connectSocket(SSLConnectionSocketFactory.java:384)
	at org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)
	at org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:374)
	at org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:393)
	at org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)
	at org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:186)
	at org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)
	at org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)
	at org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)
	at org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)
	at us.codecraft.webmagic.downloader.HttpClientDownloader.download(HttpClientDownloader.java:85)
	at us.codecraft.webmagic.Spider.processRequest(Spider.java:404)
	at us.codecraft.webmagic.Spider.access$000(Spider.java:61)
	at us.codecraft.webmagic.Spider$1.run(Spider.java:320)
	at us.codecraft.webmagic.thread.CountableThreadPool$1.run(CountableThreadPool.java:74)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
10:34:15.324 [main] INFO us.codecraft.webmagic.Spider - Spider github.com closed! 1 pages downloaded.

```

&emsp;&emsp;那第一个例子就出现这个问题,那得解决呀,是吧?

&emsp;&emsp;于是我就在github的[issues](https://github.com/code4craft/webmagic/issues/701)找到了该问题！

![(protocol_version)bug解决](/assets/img/WebMagic/issues701.png)

&emsp;&emsp;作者说是会在0.7.4中解决,你可能会说那我们换版本就好了,抱歉,作者可能是工作太忙了,所以0.7.4迟迟不出,那没办法,那咱们就自己改吧。



## 手动解决 protocol_version bug

&emsp;&emsp;先找到作者说的`HttpClientGenerator`类中的方法*buildSSLConnectionSocketFactory*，

```java
private SSLConnectionSocketFactory buildSSLConnectionSocketFactory() {
    try {
        return new SSLConnectionSocketFactory(this.createIgnoreVerifySSL());
    } catch (KeyManagementException var2) {
        this.logger.error("ssl connection fail", var2);
    } catch (NoSuchAlgorithmException var3) {
        this.logger.error("ssl connection fail", var3);
    }

    return SSLConnectionSocketFactory.getSocketFactory();
}
```

&emsp;&emsp;将里面的内容改造就行,不过因为是源码,如果你不想重新打包的话,就需要自己去重写引用`HttpClientGenerator`



## 如何知道在那里使用上HttpClientGenerator的?

​&emsp;&emsp;官网说了,WebMagic的结构分为`Downloader`、`PageProcessor`、`Scheduler`、`Pipeline`四大组件，

&emsp;&emsp;那我们怎么知道这四大组件是怎么相互关联的呢?

​&emsp;&emsp;可以从之前的那个**GithubRepoPageProcessor**类的执行方法中获得

```java
 Spider.create(new GithubRepoPageProcessor())
        .addUrl(new String[]{"https://github.com/code4craft"})
        .thread(5)
        .run();
```

&emsp;&emsp;从上可以知道,执行一个爬取任务,需要通过**Spider**去启动,那我们查看一下

```java
package us.codecraft.webmagic;
......

public class Spider implements Runnable, Task {
    protected Downloader downloader;
    protected List<Pipeline> pipelines = new ArrayList();
    protected PageProcessor pageProcessor;
    protected List<Request> startRequests;
    protected Site site;
    protected String uuid;
    protected Scheduler scheduler = new QueueScheduler();
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    protected CountableThreadPool threadPool;
    protected ExecutorService executorService;
    protected int threadNum = 1;
    protected AtomicInteger stat = new AtomicInteger(0);
    protected boolean exitWhenComplete = true;
    protected static final int STAT_INIT = 0;
    protected static final int STAT_RUNNING = 1;
    protected static final int STAT_STOPPED = 2;
    protected boolean spawnUrl = true;
    protected boolean destroyWhenExit = true;
    private ReentrantLock newUrlLock = new ReentrantLock();
    private Condition newUrlCondition;
    private List<SpiderListener> spiderListeners;
    private final AtomicLong pageCount;
    private Date startTime;
    private int emptySleepTime;

    // ...... 省略
     
     
    /** @deprecated */
    public Spider downloader(Downloader downloader) {
        return this.setDownloader(downloader);
    }

    public Spider setDownloader(Downloader downloader) {
        this.checkIfRunning();
        this.downloader = downloader;
        return this;
    }
     
     public void run() {
        this.checkRunningStat();
        this.initComponent();
        this.logger.info("Spider {} started!", this.getUUID());
        ......
        this.logger.info("Spider {} closed! {} pages downloaded.", this.getUUID(), this.pageCount.get());
     }
    
    protected void initComponent() {
        if (this.downloader == null) {
            // 在这里也看到了默认使用 HttpClientDownloader
            this.downloader = new HttpClientDownloader();
        }

        if (this.pipelines.isEmpty()) {
            this.pipelines.add(new ConsolePipeline());
        }

        this.downloader.setThread(this.threadNum);
        if (this.threadPool == null || this.threadPool.isShutdown()) {
            if (this.executorService != null && !this.executorService.isShutdown()) {
                this.threadPool = new CountableThreadPool(this.threadNum, this.executorService);
            } else {
                this.threadPool = new CountableThreadPool(this.threadNum);
            }
        }

        if (this.startRequests != null) {
            Iterator var1 = this.startRequests.iterator();

            while(var1.hasNext()) {
                Request request = (Request)var1.next();
                this.addRequest(request);
            }

            this.startRequests.clear();
        }

        this.startTime = new Date();
    }
    
}
```

&emsp;&emsp;从上面可以发现四个都有,我们点击进**Downloader**类

&emsp;&emsp;可以发现

​	![Downloader接口实现](/assets/img/WebMagic/Downloader接口实现.png)

&emsp;&emsp;三个实现类(红框内容,my那个是我自己实现的)!

&emsp;&emsp;然后你点进**HttpClientDownloader**类

```java
package us.codecraft.webmagic.downloader;

......
@ThreadSafe
public class HttpClientDownloader extends AbstractDownloader {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private final Map<String, CloseableHttpClient> httpClients = new HashMap();
    // 在这里就发现使用HttpClientGenerator
    private HttpClientGenerator httpClientGenerator = new HttpClientGenerator();
    private HttpUriRequestConverter httpUriRequestConverter = new HttpUriRequestConverter();
    private ProxyProvider proxyProvider;
    private boolean responseHeader = true;
    // ......省略
}
```

&emsp;&emsp;从以上我们知道了**Spider**类中有属性**Download**接口,该接口有实现类**HttpClientDownloader**，当你在执行**Spider**.*run()*时,*run()*会执行*initComponent()*，如果你没有设置**Spider**的`download`属性,就会自动的选择**HttpClientDownloader**作为实现类,而**HttpClientDownloader**中又使用了**HttpClientGenerator**作为参数,那我们既然要改**HttpClientGenerator**类中的方法*buildSSLConnectionSocketFactory（）*,那就得重写**HttpClientGenerator**和**Download**

&emsp;&emsp;实现，得到**[MyHttpClientGenerator](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/config/MyHttpClientGenerator.java)**和**[MyHttpClientDownloader](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/config/MyHttpClientDownloader.java)**。



## 怎么使用新得Download实现?

1. 再在使用**Spider**得时候*setDownloader*(**MyHttpClientDownloader**)：

   ```java
   Spider.create(pageProcessor)
           .setDownloader(new MyHttpClientDownloader());
   ```

   

2. 或者增加一个类用于继承Spider类,重写*initComponent*()方法中得：

   ```java
   	protected void initComponent() {
           if (this.downloader == null) {
           	// 修改这里为 this.downloader = new MyHttpClientDownloader();
               this.downloader = new HttpClientDownloader();
           }
           
           if (this.pipelines.isEmpty()) {
           this.pipelines.add(new ConsolePipeline());
       }
   
       this.downloader.setThread(this.threadNum);
       if (this.threadPool == null || this.threadPool.isShutdown()) {
           if (this.executorService != null && !this.executorService.isShutdown()) {
               this.threadPool = new CountableThreadPool(this.threadNum, this.executorService);
           } else {
               this.threadPool = new CountableThreadPool(this.threadNum);
           }
       }
   
       if (this.startRequests != null) {
           Iterator var1 = this.startRequests.iterator();
   
           while(var1.hasNext()) {
               Request request = (Request)var1.next();
               this.addRequest(request);
           }
   
           this.startRequests.clear();
       }
   
       this.startTime = new Date();
   }
   ```

   

3. 再次执行[*testDemo1()*](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/test/java/com/blacktea/webmagic/demo/WebMagicTest.java)：

   ```java
       @Test
       void testDemo1(){
           // 出现错误 -> javax.net.ssl.SSLHandshakeException: Received fatal alert: protocol_version
   //        Spider.create(new GithubRepoPageProcessor())
   //                .addUrl(new String[]{"https://github.com/code4craft"})
   //                .thread(5).run();
   
           //使用MyHttpClientDownloader解决  protocol_version,但是可能出现github请求超时,这个与github访问有关系,我访问不了
           Spider.create(new GithubRepoPageProcessor())
                   .addUrl(new String[]{"https://github.com/code4craft"})
                   .setDownloader(new MyHttpClientDownloader())
                   .thread(5).run();
       }
   ```

   

## 官网其他用例

```java
package us.codecraft.webmagic.processor;

import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;

public interface PageProcessor {
    void process(Page var1);

    Site getSite();
}
```

你可以通过查找**PageProcessor**接口得实现,得到官网用例,

![PageProcessor实现](/assets/img/WebMagic/PageProcessor实现.png)



## 本文实现

### 功能

&emsp;&emsp;当前版本通过webmagic实现三个[接口](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/controller/ProTestController.java)，可实现三个通用功能。

#### 接口请求报文

| 名称          | 必填  | 类型                    | 说明                                                         |
| ------------- | ----- | ----------------------- | ------------------------------------------------------------ |
| fileName      | true  | String                  | 表示下载后得文件名称(要求带文件类型后缀)；                   |
| itemPageUrl   | false | String                  | 目标页面地址；（该项与helpUrl、targetUrl是分开的,只有进行文章详情爬取的时候才需要itemPageUrl） |
| **helpUrl**   | false | String                  | 提供需要目标地址的页面url,例如CSDN的列表页;                  |
| **targetUrl** | false | String                  | 找寻目标地址的匹配url,暂时仅支持 regx 匹配;                  |
| fields        | true  | `List<Field>`             | 匹配规则集合，长度必须大于0                                  |
| key           | true  | String  (Field.key)     | fields[index].key属性,用于标记该条规则得别名,在导出zip时,会自动将该key作为一级或二级(item一级,list二级)目录名称作为zip内文件分区 |
| value         | true  | String  (Field.value)   | fields[index].value属性,用于在页面中进行匹配得内容           |
| type          | true  | String (Field.type)     | fields[index].type属性,与Field.value进行组合使用,当前支持  ['XPath', 'Regex', 'Css', 'JsonPath']，是对webmagi{@link us.codecraft.webmagic.model.annotation.Type}得复用，[源码](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/util/WebMagicUtil.java)下得**matchVal**()方法 |
| fileType      | true  | String (Field.fileType) | fields[index].fileType属性,是对进行匹配后得到结果数据按照类型进行处理,[源码](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/util/WebMagicUtil.java)下得**getDataMap**()方法 |

### zip分区说明

​
&emsp;&emsp;为了区分匹配后获取的资源与避免文件名称重复导致文件被覆盖,我这里做了目录分区。

​1. 当你用`itemPageUrl` 时,文件结构为： xxx.zip/key/fileType;

2. 当你用`helpUrl and targetUrl`时,文件结构为：第几个页面/key/fileType;



### 匹配结果调试

[WebMagicUtil.**getSelectableValue**()](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/util/WebMagicUtil.java)

```java
private static Object getSelectableValue(Field field,Page page, boolean all){
    Selectable selectable = WebMagicUtil.matchVal(field, page);
    log.debug("当前field.key={},匹配的结果为:{}",field.getKey(),JSON.toJSONString(selectable.all()));
    if (Validator.isNotNull(selectable)){
        // selectable get()/all(),看导出单个具体文件(md),还是压缩文件(zip)
        if (all){
           return selectable.all();
        }else {
           return selectable.get();
        }
    }
    return null;
}
```

&emsp;&emsp;该方法会打印出符合的匹配结果的,默认打印全部结果。



## 1. 通用详情页导出md

### 1.1 swagger下载md文件

&emsp;&emsp;使用swagger-ui进行md文件下载,[地址](http://localhost:8000/swagger-ui.html#!/ProTestController/exportCSDNMdUsingPOST) -> http://localhost:8000/pro/item/export/md

post,application/json



![swagger-md下载请求参数](/assets/img/WebMagic/swagger-md下载请求参数.png)

###	1.2 实际入参json(CSDN示例)

```json
{
    "fileName":"md下载测试.md",
    "itemPageUrl":"https://blog.csdn.net/weixin_43917143/article/details/120436445",
    "fields":[
        {"key":"md","value":"//*[@id=\"article_content\"]/[@id=\"content_views\"]","type":"XPath","fileType":"MD"},
        {"key":"md1","value":"//*[@id=\"article_content\"]/[@id=\"content_views\"]","type":"XPath","fileType":"MD"}
    ]
}
```

如果多个key，我会把多个key匹配到的内容一起写入到一个md,只要匹配到符合的内容在一个以上就会进行 额外拼接 "# md分割-下一篇\n\n"，再拼接下一篇。

### 1.3 效果

![md下载swagger](/assets/img/WebMagic/md下载swagger.png)

![md文件最终效果](/assets/img/WebMagic/md文件最终效果.png)

&emsp;&emsp;因为我这里爬取的匹配结果为2,所以我就会再拼接一条  "# md分割-下一篇`\n\n`"。



&emsp;&emsp;注意: 这里不是因为 fields.szie = 2,所以才导出2个的,是因为你所配置的规则匹配后的内容结果为2。

&emsp;&emsp;有可能你配置的规则没有匹配到内容

&emsp;&emsp;或者

&emsp;&emsp;配置 一个规则却可以出现多个拼接

&emsp;&emsp;多个拼接([多个根据WebMagicUtil.**csdnProcess**()的all参数决定](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/webmagic/src/main/java/com/blacktea/webmagic/demo/util/WebMagicUtil.java))也是有可能的!

&emsp;&emsp;`all 为false`,即为符合当前这条field规则的最多只取一条,也就是一个匹配结果[0]拼接index=0,

​&emsp;&emsp;true,取出所有,也就是一个匹配结果`[size]`,循环多个拼接。



## 2. 通用详情页导出zip

### 2.1 swagger下载zip

​&emsp;&emsp;使用swagger-ui进行zip文件下载,[地址](http://localhost:8000/swagger-ui.html#!/ProTestController/exportCSDNMdUsingPOST) -> http://localhost:8000/pro/item/export/zip

​	post,application/json

### 2.2 json

&emsp;&emsp;CSDN示例

```json
{
    "fileName":"img下载测试.zip",
    "itemPageUrl":"https://blog.csdn.net/weixin_43917143/article/details/120436445",
    "fields":[
          {"key":"images","value":"//*[@id=\"article_content\"]//*//img","type":"XPath","fileType":"PNG"},
          {"key":"icons","value":"//div[@class=\"mouse-box\"]//img","type":"XPath","fileType":"PNG"}
    ]
}
```

&emsp;&emsp;这里建议使用postman进行测试,postman可以将最终结果文件流保存为zip文件

###### 2.3 效果

![详情zip下载效果](/assets/img/WebMagic/详情zip下载效果.png)



## 3.  通用列表页获取详情页进行zip导出

### 3.1下载地址

​&emsp;&emsp;http://localhost:8000/pro/list/export/zip

​&emsp;&emsp;post,application/json

### 3.2 请求参数json

​&emsp;&emsp;CSDN示例:

```json
{
    "fileName":"xxx.zip",
    "helpUrl":"https://blog.csdn.net/weixin_43917143",
    "targetUrl":"(https://blog\\.csdn\\.net/weixin_43917143/article/details/\\w+)",
    "fields":[
        {"key":"md","value":"//*[@id=\"article_content\"]/[@id=\"content_views\"]","type":"XPath","fileType":"MD"},
        {"key":"images","value":"//*[@id=\"article_content\"]//*//img","type":"XPath","fileType":"PNG"},
        {"key":"icons","value":"//div[@class=\"mouse-box\"]//img","type":"XPath","fileType":"PNG"}
    ]
}
```

​&emsp;&emsp;简书示例:

```json
{
    "fileName":"简书-xxx.zip",
    "helpUrl":"https://www.jianshu.com/u/7dcee71ee038",
    "targetUrl":"(https://www\\.jianshu\\.com/p/\\w+)",
    "fields":[
        {"key":"md","value":"//div[@class=\"_gp-ck\"]/section[@class=\"ouvjEz\"][1]","type":"XPath","fileType":"MD"}
    ]
}
```

### 3.3 效果

CSDN效果:

![列表zip下载效果](/assets/img/WebMagic/列表zip下载效果.png)

