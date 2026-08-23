---
date: 2026-08-22
title: Elastic Stack-AI整理版
categories:
  - ElasticStack
tag:
  - 开发
  - ElasticStack
footer: Elastic Stack学习-AI整理版

---
# ![Elastic Stack](/assets/img/icons/elasticsearch.svg) Elastic Stack-AI整理版

> 基于 [Elastic Stack](./ElasticStack.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这份笔记怎么读

如果你是第一次系统学 Elastic Stack，建议按下面顺序阅读：

1. Elastic Stack 简介与组件分工
2. 为什么搜索不用数据库（倒排索引与 Lucene）
3. Elasticsearch 是什么、能做什么
4. 核心概念（Index、Document、shard、replica 等）
5. es 快速入门：用 RESTful 请求完成图书 CRUD
6. 文档深入：_source、全量替换、局部更新、乐观锁、bulk
7. 图解 es 内部机制：分片、副本、扩容、容错
8. 图解文档存储机制：路由、增删改查内部流程
9. Mapping 映射与分词器

## 学习路线图

| 阶段 | 重点 | 说明 |
| --- | --- | --- |
| 入门 | 组件分工 | 知道 ES、Logstash、Kibana、Beats 各自干什么 |
| 原理 | 倒排索引、Lucene | 理解数据库做搜索的弊端 |
| 概念 | Index、Document、shard | 掌握 es 核心名词，并与 MySQL 对照 |
| 上手 | 文档 CRUD | 用 RESTful 请求完成增删改查 |
| 深入 | 版本控制、bulk | 理解乐观锁并发控制与批量操作 |
| 分布式 | 分片、副本、扩容、容错 | 图解 es 集群内部机制 |
| 进阶 | Mapping、分词器 | 理解精确匹配与全文检索的差别 |

---

## 一、Elastic Stack 简介

ELK 是一个免费开源的日志分析架构技术栈总称，[官网](https://www.elastic.co/cn/)，包含三大基础组件：Elasticsearch、Logstash、Kibana。实际上 ELK 不仅仅适用于日志分析，它还可以支持其它任何数据搜索、分析和收集的场景，日志分析和收集只是更具有代表性，并非唯一。

![ELK架构图](/assets/img/ElasticStack/ELK架构图.png)

随着 ELK 的发展，又有新成员 Beats、Elastic Cloud 的加入，形成了 Elastic Stack。也就是说，ELK 是旧的称呼，Elastic Stack 是新的名字。

![ElasticStack架构图](/assets/img/ElasticStack/ElasticStack架构图.png)

### Elastic Stack 特色

| 特色 | 说明 |
| --- | --- |
| 处理方式灵活 | elasticsearch 是目前最流行的准实时全文检索引擎，具有高速检索大数据的能力 |
| 配置简单 | 每个组件仅需配置一个配置文件，大量参数已有默认值，改想改的选项即可 |
| 接口简单 | 采用 JSON 形式的 RESTful API 接收数据并响应，无关语言 |
| 性能高效 | 基于优秀的全文搜索技术 Lucene，采用倒排索引，可在百亿级数据量下秒级搜出内容 |
| 灵活扩展 | elasticsearch 和 logstash 可根据集群规模线性拓展，内部自动实现集群协作 |
| 数据展现华丽 | kibana 作为前端展现工具，图表华丽，配置简单 |

---

## 二、Elastic Stack 组件介绍

### 1. 四大组件

| 组件 | 说明 |
| --- | --- |
| Elasticsearch | Java 开发，基于 Lucene、分布式、通过 RESTful 方式交互的近实时搜索平台框架。特点：分布式、零配置、自动发现、索引自动分片、索引副本机制、RESTful 风格接口、多数据源、自动搜索负载等 |
| Logstash | Java 开发的数据抽取转化工具，C/S 架构：client 端安装在需要收集信息的主机上，server 端将收到的各节点日志过滤、修改后一并发往 elasticsearch 或其他组件 |
| Kibana | 基于 Node.js 的开源免费可视化工具，为 Logstash 和 Elasticsearch 提供日志分析友好的 Web 界面，可汇总、分析和搜索重要数据日志 |
| Beats | 多种单一用途数据采集器的集合，从成百上千台机器和系统向 Logstash 或 Elasticsearch 发送数据 |

### 2. Beats 家族

| 采集器 | 用途 |
| --- | --- |
| Packetbeat | 轻量型网络数据采集器（数据包分析器），支持 ICMP (v4 and v6)、DNS、HTTP、MySQL、PostgreSQL、Redis、MongoDB、Memcache 等协议 |
| Filebeat | 轻量型日志采集器，转发和汇总日志与文件，面对成百上千服务器的日志时不用再 SSH |
| Metricbeat | 轻量型指标采集器，输送系统和服务统计数据（从 CPU 到内存，从 Redis 到 Nginx），可监控 Apache http、HAProxy、MongoDB、MySQL、Nginx、PostgreSQL、Redis、System、Zookeeper 等 |
| Winlogbeat | 轻量型 Windows 事件日志采集器，将事件日志实时流式传输至 Elasticsearch 和 Logstash |
| Auditbeat | 轻量型审计日志采集器，收集 Linux 审计框架的数据，监控文件完整性 |
| Heartbeat | 面向运行状态监测的采集器，通过主动探测（给定 URL 列表）监测服务可用性，并发送信息和响应时间 |
| Functionbeat | 面向云端数据的无服务器采集器，部署在云服务商的 FaaS 平台上，收集、传送并监测云服务相关数据 |

### 3. Elastic Cloud

基于 Elasticsearch 的软件即服务（SaaS）解决方案，通过 Elastic 的官方合作伙伴使用托管的 Elasticsearch 服务。

---

## 三、为什么搜索不用数据库

### 1. 搜索是什么

概念：用户输入想要的关键词，返回含有该关键词的所有信息。场景：互联网搜索（谷歌、百度、新闻首页）、站内搜索/垂直搜索（企业 OA 查订单、人员、部门，电商网站搜商品）。

### 2. 数据库做搜索的弊端

数据量小、简单搜索时可以用数据库，数据量大之后会出现：

1. 存储问题：商品上亿条时，单表过大必须拆分表，磁盘占用过大必须分库（mycat）
2. 性能问题：查询“笔记本电脑”等关键词时，上亿条数据逐行扫描，性能跟不上
3. 不能分词：只能搜索和关键词完全一样的数据，无法把“笔记电脑”、“电脑”这类数据也带给用户

总结：互联网搜索不会用数据库搜索，数据量是 PB 级。

### 3. 全文检索、倒排索引和 Lucene

全文检索：数据存储时，进行分词建立 term 索引库。

![建立term索引库](/assets/img/ElasticStack/建立term索引库.png)

倒排索引源于需要根据属性的值来查找记录：索引表中的每一项都包括一个属性值和具有该属性值的各记录的地址。由于不是由记录来确定属性值，而是由属性值来确定记录的位置，因而称为倒排索引（inverted index）。带有倒排索引的文件称为倒排文件（inverted file）。

Lucene 就是一个 jar 包，封装了全文检索的引擎、搜索的算法代码。开发时引入 lucene 的 jar 包，通过 API 开发搜索相关业务，底层会在磁盘建立索引库。

---

## 四、Elasticsearch 是什么

### 1. 简介

Elasticsearch 是一个基于 Lucene 的搜索服务器，提供了一个分布式多用户能力的全文搜索引擎，基于 RESTful web 接口。[官网](https://www.elastic.co/cn/what-is/elasticsearch)

![Elasticsearch](/assets/img/ElasticStack/Elasticsearch.png)

### 2. Elasticsearch 的功能

1. 分布式的搜索引擎和数据分析引擎：搜索（互联网搜索、电商站内搜索、OA 查询）、数据分析（近一周哪些品类图书销售前十、最近 3 天阅读量最高的十个关键词、舆情分析）
2. 全文检索，结构化检索，数据分析：
   - 全文检索：`select * from books where book_name like '%java%'`
   - 结构化检索：`select * from books where category_id = 'spring'`
   - 数据分析：`select category_id, count(*) from books group by category_id`
3. 对海量数据进行近实时的处理：
   - 分布式：ES 自动将海量数据分散到多台服务器存储和检索，进行并行查询；相对地，Lucene 是单机应用
   - 近实时：数据库上亿条数据查询一次耗时几个小时（批处理），es 只需秒级

![lucene-es部署](/assets/img/ElasticStack/lucene-es部署.png)

### 3. Elasticsearch 的使用场景

- 国外：维基百科（全文检索、高亮、搜索推荐）、Stack Overflow（程序讨论论坛）、GitHub（搜索上千亿行代码）、电商网站检索商品、日志数据分析（ELK）、商品价格监控网站、BI 商业智能系统（连锁超市分析各商品季节销量与利润、成本管理）
- 国内：百度搜索（第一次查询使用 es）、OA/ERP 系统站内搜索

### 4. Elasticsearch 的特点

| 特点 | 说明 |
| --- | --- |
| 可拓展性 | 大型分布式集群（数百台服务器）处理 PB 级数据，小公司也可单机部署 |
| 技术整合 | 将全文检索（lucene）、数据分析软件、分布式技术（如分布式数据库 mycat）整合在一起 |
| 部署简单 | 开箱即用，解压直接运行；拓展只需多部署几个实例，负载均衡、分片迁移集群内部自己实施 |
| 接口简单 | RESTful API 交互，跨语言 |
| 功能强大 | 作为传统数据库的补充，提供全文检索、同义词处理、相关度排名等数据库不能提供的功能 |

![Elasticsearch的特点](/assets/img/ElasticStack/Elasticsearch的特点.png)

### 5. lucene 和 elasticsearch 的关系

- Lucene：最先进、功能最强大的搜索库，但直接基于它开发非常复杂，API 复杂
- Elasticsearch：基于 lucene，封装了许多底层功能，提供简单易用的 RESTful API 和多语言客户端，如 Java 高级客户端（Java High Level REST Client）和底层客户端（Java Low Level REST Client）

![Elasticsearch交互](/assets/img/ElasticStack/Elasticsearch交互.png)

起源：Shay Banon 在 2004 年失业，陪老婆去伦敦学习厨师，失业在家帮老婆写菜谱搜索引擎，封装了 lucene 的开源项目 compass；找到工作后做分布式高性能项目，再封装 compass 写出了 elasticsearch，使 lucene 支持分布式。他现在是 Elasticsearch 创始人兼 Elastic 首席执行官。

---

## 五、Elasticsearch 的核心概念

### 1. 九大核心概念

1. NRT（Near Realtime）近实时：写入数据时过 1 秒才会被搜索到（内部在分词、录入索引）；搜索和分析数据需要秒级出结果
2. Cluster 集群：一个或多个启动着 es 实例的机器群。同一网络下集群名一样的多个实例自动组成集群，自动均衡分片。默认集群名为 `elasticsearch`
3. Node 节点：每个 es 实例称为一个节点，节点名自动分配或手动配置
4. Document 文档：es 的最小数据单元，像数据库中的一条记录，通常以 JSON 表示，多个 document 存于一个索引（Index）中

```json
{
  "book_id": "1",
  "book_name": "java编程思想",
  "book_desc": "从Java的基础语法到最高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。",
  "category_id": "2",
  "category_name": "java"
}
```

5. Index 索引：包含一堆有相似结构的文档数据。创建规则：仅限小写字母；不能包含 `\`、`/`、`*`、`?`、`"`、`<`、`>`、`|`、`#` 以及空格符等特殊符号；7.0 起不再包含冒号；不能以 `-`、`_` 或 `+` 开头；不能超过 255 字节（多字节字符计入限制）
6. Field 字段：就像数据库中的列（Columns），定义每个 document 应该有的字段
7. Type 类型：index 中的一个逻辑数据分类。6.0 之前有 type 概念（相当于关系数据库的表），ES 官方在 ES9.0 彻底删除 type，本教程中都为 `_doc`
8. shard 分片：index 数据过大时，将 index 分为多个 shard 分布式存储在各服务器上，支持海量数据和高并发，提升性能和吞吐量
9. replica 副本：任何一台机器都可能宕机，为保证数据安全，将每个 index 的分片备份存储在另外的机器上，保证少数机器宕机集群仍可搜索。能正常提供查询和插入的分片叫主分片（primary shard），其余叫备份分片（replica shard）。es6 默认新建索引 5 分片、1 副本（共 10 个分片，集群最小规模两台）；es7 默认 1 分片、1 副本（共 2 个分片）

![es核心概念](/assets/img/ElasticStack/es核心概念.png)

### 2. 数据库核心概念 vs Elasticsearch 核心概念

| 关系型数据库（比如 MySQL） | 非关系型数据库（Elasticsearch） |
| --- | --- |
| 数据库 Database | 索引 Index |
| 表 Table | 索引 Index（原为 Type） |
| 数据行 Row | 文档 Document |
| 数据列 Column | 字段 Field |
| 约束 Schema | 映射 Mapping |

---

## 六、es 快速入门：图书的 CRUD

### 1. CRUD 速查表

| 操作 | 语法 | 说明 |
| --- | --- | --- |
| 创建索引 | `PUT /index` | 创建名为 book 的索引 |
| 新增文档 | `PUT /index/_doc/id` | 指定 id 新增 |
| 查询文档 | `GET /index/_doc/id` | 根据 _id 查询 |
| 全量替换 | `PUT /index/_doc/id` | 提交全部字段覆盖旧文档 |
| 局部修改 | `POST /index/_update/id` | 只提交要修改的字段 |
| 删除文档 | `DELETE /index/_doc/id` | 根据 _id 删除 |

### 2. 创建图书索引

```json
PUT /book
```

响应结果返回 `"acknowledged" : true, "shards_acknowledged" : true, "index" : "book"`。

### 3. 新增图书（新增文档）

```json
PUT /book/_doc/1
{
    "name": "Bootstrap开发",
    "description": "Bootstrap是推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。",
    "studymodel": "201002",
    "price": 38.6,
    "timestamp": "2019-08-25 19:11:35",
    "pic": "group1/M00/00/00/wKh1QFs6RCeAYOpHAAJx5ZjNDEM428.jpg",
    "tags": ["bootstrap", "dev"]
}
```

响应结果：

```json
{
  "_index" : "book",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 1,
  "result" : "created",
  "_shards" : { "total" : 2, "successful" : 1, "failed" : 0 },
  "_seq_no" : 0,
  "_primary_term" : 1
}
```

### 4. 根据 _id 查询图书

`GET /book/_doc/1`：文档存在时返回 `found : true`，并在 `_source` 中原样返回插入的字段和值；不存在时只返回 `_index`、`_type`、`_id` 和 `found : false`。

### 5. 全量替换与局部修改

- 全量替换：再次执行 `PUT /book/_doc/1` 并提交全部字段，`_version` 递增，`result` 变为 `updated`
- 局部修改（推荐的新端点）：

```json
POST /book/_update/1
{
    "doc": {
        "name": "Bootstrap开发_update",
        "tags": ["bootstrap", "dev"]
    }
}
```

旧写法 `POST /book/_doc/1/_update` 会提示弃用警告：`[types removal] Specifying types in document update requests is deprecated, use the endpoint /{index}/_update/{id} instead.`

### 6. 删除图书

`DELETE /book/_doc/1`：响应结果中 `result` 为 `"deleted"`，版本号依然递增。

---

## 七、文档 Document 深入

### 1. 默认自带字段解析

| 字段 | 含义 | 要点 |
| --- | --- | --- |
| `_index` | 文档属于哪个索引 | 类似数据放在一个索引中（图书放 book、员工放 employee），各索引互不影响；命名用英文小写、尽量不用特殊字符 |
| `_type` | 类别 | 后续版本将彻底删除，当前不断弱化，见到的 type 都为 `_doc` |
| `_id` | 文档唯一标识 | 就像表的主键；可手动或自动生成 |
| `_source` | 插入数据时的所有字段和值 | GET 数据时在 `_source` 中原样返回 |

![不同数据放到不同索引中](/assets/img/ElasticStack/不同数据放到不同索引中.png)

### 2. 生成文档 id

- 手动生成：`PUT /index/_doc/id`
- 自动生成：`POST /index/_doc`，自动 id 长度 20 个字符，URL 安全、base64 编码、GUID、分布式生成不冲突

### 3. 定制返回字段

就像 SQL 不写 `select *` 而写 `select name, price from book` 一样：

```json
GET /book/_doc/1?_source_includes=name,price
```

`_source` 中只返回指定的字段。

### 4. 全量替换的实质

执行两次 PUT，返回结果中版本号（`_version`）不断上升，此过程为全量替换。实质：旧文档的内容不会立即删除，只是标记为 deleted，适当的时机集群会将这些文档删除。

![全量替换图](/assets/img/ElasticStack/全量替换图.png)

### 5. 强制创建

为防止覆盖原有数据，新增时可设置为强制创建，不会覆盖原有文档。可以用于数据库同步数据，确保数据只插入一次、不会重复插入或覆盖。

```json
PUT /test_index/_doc/1/_create
{
    "test_field": "test"
}
```

第一次请求正常返回 `result : "created"`；再次请求（已存在数据）返回 409 和 `version_conflict_engine_exception`：`version conflict, document already exists`。

### 6. 局部更新 partial update

全量替换需要提交文档所有数据，partial update 只修改变动字段：

```json
POST /index/_doc/id/_update
{
    "doc": {
        "field": "value"
    }
}
```

内部与全量替换是一样的：旧文档标记为删除，新建一个文档。

![图解局部更新内部原理](/assets/img/ElasticStack/图解局部更新内部原理.png)

优点：大大减少网络传输次数和流量，提升性能；减少并发冲突发生的概率。

### 7. 使用脚本更新

es 可以内置脚本执行复杂操作，例如 `painless` 脚本。注意：`groovy` 脚本在 es6 以后就不支持了，原因是耗内存、不安全、有远程注入漏洞。

需求 1：修改文档 6 的 num 字段，加 1。

```json
PUT /test_index/_doc/6
{
    "num": 0
}

POST /test_index/_doc/6/_update
{
    "script": "ctx._source.num += 1"
}
```

查询 `GET /test_index/_doc/6`，`_source` 中的 `num` 变为 1。

需求 2：搜索所有文档，将 num 字段乘以 2 输出（script_fields）。

```json
GET /test_index/_search
{
    "script_fields": {
        "my_doubled_field": {
            "script": {
                "lang": "expression",
                "source": "doc['num'] * multiplier",
                "params": {
                    "multiplier": 2
                }
            }
        }
    }
}
```

外部脚本：`painless` 是内置支持的，脚本内容可以通过 REST 接口或放到 config/scripts 目录等多种途径传给 es，默认开启。注意：脚本性能低下，且容易发生注入。官方文档：<https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-using.html>

### 8. ES 的并发问题与乐观锁

![ES并发问题](/assets/img/ElasticStack/ES并发问题.png)

如同秒杀场景，多线程情况下，ES 同样会出现并发冲突问题。为控制并发问题，通常采用锁机制：

| 机制 | 做法 | 优点 | 缺点 |
| --- | --- | --- | --- |
| 悲观锁 | 所有情况都上锁，只有一个线程可以操作数据（数据库的行级锁、表级锁、读锁、写锁等） | 方便，直接加锁，对程序透明 | 效率低 |
| 乐观锁 | 对数据本身不加锁，提交数据时通过一种机制验证是否存在冲突（如 es 中通过版本号验证） | 并发能力高 | 操作繁琐，提交数据时可能反复重试多次 |

es 对于文档的增删改都是基于版本号（`_version`）：

- 对同一个 id 多次 PUT，`_version` 从 1 递增到 2
- 即使是 DELETE，版本号也依然递增，验证了延迟删除策略：如果删一条数据立马删除的话，所有分片和副本都要立马删除，对 es 集群压力太大

es 内部主从同步时，是多线程异步 + 乐观锁机制。

![图解es内部主从同步并发控制](/assets/img/ElasticStack/图解es内部主从同步并发控制.png)

### 9. 批量增删改 bulk

bulk 操作将文档的增删改一系列操作通过一次请求全都做完，减少网络传输次数。

```json
POST /_bulk
{"create": {"_index": "test_index", "_id": "8"}}
{"test_field": "test8"}
{"update": {"_index": "test_index", "_id": "3"}}
{"doc": {"test_field": "bulk test"}}
{"delete": {"_index": "test_index", "_id": "5"}}
```

四种 action 的区别：

- `delete`：删除一个文档，只要 1 个 json 串就可以了
- `create`：相当于强制创建 `PUT /index/_doc/id/_create`
- `index`：普通的 PUT 操作，可以是创建文档，也可以是全量替换文档
- `update`：执行的是局部更新 partial update 操作

其他要点：

1. 格式：每个 json 内部不能换行，相邻 json 之间必须换行
2. 隔离：每个操作互不影响，操作失败的行会返回其失败信息
3. 实际用法：一次请求不要太大，否则积压到内存中性能会下降；一次几千个操作、大小在几 MB 正好

---

## 八、Java API 实现文档管理

之前写的整合博客：

- CSDN：[spring-boot 整合 elasticsearch 7.x（简单入门含 gitee 源码）](https://blog.csdn.net/weixin_43917143/article/details/120235058)
- 简书：[spring-boot 整合 elasticsearch 7.x（简单入门含 gitee 源码）](https://www.jianshu.com/p/e1f63f2fdc55)

---

## 九、图解 es 内部机制（分布式）

### 1. es 对复杂分布式机制的透明隐藏

- 分布式机制：分布式数据存储及共享
- 分片机制：数据存储到哪个分片、副本数据写入
- 集群发现机制（cluster discovery）：新启动 es 实例，自动加入集群
- shard 负载均衡：大量数据写入及查询，es 会将数据平均分配
- shard 副本：新增副本数，分片重分配

### 2. 垂直扩容与水平扩容

- 垂直扩容：使用更强大的服务器替代老服务器。但单机存储及运算能力有上限，且成本直线上升（如 1T 服务器 1 万，单个 10T 服务器可能 20 万）
- 水平扩容：采购更多服务器加入集群，是大数据的主流做法

新增或减少 es 实例时，es 集群会将数据重新分配（rebalance）。

### 3. master 节点与节点对等

master 节点的功能：创建删除节点、创建删除索引。节点对等的分布式架构：节点对等，每个节点都能接收所有的请求，自动请求路由，响应收集。

![图解es分布式基础](/assets/img/ElasticStack/图解es分布式基础.png)

### 4. 分片 shard、副本 replica 机制

1. 每个 index 包含一个或多个 shard；每个 shard 都是最小工作单元，承载部分数据，是一个 lucene 实例，有完整的建立索引和处理请求的能力
2. 增减节点时，shard 会自动在 nodes 中负载均衡
3. 每个 document 肯定只存在于某一个 primary shard 以及其对应的 replica shard 中，不可能存在于多个 primary shard
4. replica shard 是 primary shard 的副本，负责容错，以及承担读请求负载
5. primary shard 的数量在创建索引时就固定了，replica shard 的数量可以随时修改
6. 默认 primary shard 数量是 1，replica 默认是 1，默认共 2 个 shard。注意：es7 以前 primary shard 默认 5、replica 默认 1，默认 10 个 shard
7. primary shard 不能和自己的 replica shard 放在同一个节点上（否则节点宕机两者都丢失，起不到容错作用），但可以和其他 primary shard 的 replica shard 放在同一节点上

### 5. 单 node 环境下创建 index

```json
PUT /test_index1
{
    "settings": {
        "number_of_shards": 3,
        "number_of_replicas": 1
    }
}
```

单 node 环境下创建一个有 3 个 primary shard、3 个 replica shard 的 index 时：

1. 集群 status 是 yellow
2. 只会将 3 个 primary shard 分配到仅有的一个 node 上，另外 3 个 replica shard 无法分配
3. 集群可以正常工作，但一旦节点宕机，数据全部丢失且集群不可用

![设置分片插件可视化效果](/assets/img/ElasticStack/设置分片插件可视化效果.png)

![图解单node环境下创建index是什么样子的](/assets/img/ElasticStack/图解单node环境下创建index是什么样子的.png)

### 6. 2 个 node 环境下 replica shard 的分配

1. replica shard 分配：3 个 primary shard、3 个 replica shard、2 个 node
2. primary 同步数据到 replica
3. 读请求：primary / replica 都可以承担

![图解2个node环境下replica_shard是如何分配的](/assets/img/ElasticStack/图解2个node环境下replica_shard是如何分配的.png)

### 7. 图解横向扩容

- 分片自动负载均衡，分片向空闲机器转移
- 每个节点存储更少分片，给每个分片的系统资源更多，整体集群性能提高
- 扩容极限：节点数大于整体分片数，必有空闲机器
- 超出扩容极限时可以增加副本数，如设置副本数为 2，总共 3 * 3 = 9 个分片，9 台机器同时运行，存储和搜索性能更强、容错性更好
- 容错性：只要一个索引的所有主分片在，集群就还可以运行

![图解横向扩容](/assets/img/ElasticStack/图解横向扩容.png)

当前示例图最多可挂掉 6 台机器，只要确保 P0、P1、P2 存在即可：P 挂掉时，对应的副本 R 可以升级为 P。

### 8. 图解 es 容错机制

以 3 分片、2 副本数、3 节点为例：

1. master node 宕机：自动 master 选举，集群为 red
2. replica 容错：新 master 将 replica 提升为 primary shard，yellow
3. 数据恢复：重启宕机 node，master copy replica 到该 node，使用原有的 shard 并同步宕机后的修改，green

![图解es容错机制master选举，replica容错，数据恢复](/assets/img/ElasticStack/图解es容错机制masteri选举，replica容错，数据恢复.png)

---

## 十、图解文档存储机制

### 1. 数据路由

一个文档最终会落在主分片中的某一个分片上，到底应该在哪一个分片？这就是数据路由。

路由算法：

```shell
shard = hash(routing) % number_of_primary_shards
```

哈希值对主分片数取模。对一个文档进行 CRUD 时，都会带一个路由值 routing number，默认为文档 id（可能手动指定，也可能自动生成）。

举例：存储 1 号文档，哈希计算值为 2，此索引有 3 个主分片，那么 2 % 3 = 2，此文档就在 P2 分片上。无论 hash 值是几，对主分片数求余的结果一定在 0 到 number_of_primary_shards - 1 之间。

手动指定 routing key：

```json
PUT /test_index/_doc/157?routing=tom
{
    "username": "tom"
}
```

场景：架构师可以手动指定已有数据的一个属性为路由值，好处是可以定制一类文档存储到一个分片中；缺点是设计不好会造成数据倾斜。所以不同文档尽量放到不同的索引中，剩下的事情交给 es 集群自己处理。

注意：主分片数量不可变。因为涉及到以往数据的查询搜索，一旦建立索引，主分片数就不能再改。

![图解文档存储机制](/assets/img/ElasticStack/图解文档存储机制.png)

### 2. 文档的增删改内部机制

增删改可以看做 update，都是对数据的改动。一个改动请求发送到 es 集群，经历四个步骤：

1. 客户端选择一个 node 发送请求，这个 node 就是 coordinating node（协调节点）
2. coordinating node 对 document 进行路由，将请求转发给对应的 node（有 primary shard）
3. 该 node 上的 primary shard 处理请求，然后将数据同步到 replica node
4. coordinating node 发现 primary node 和所有 replica node 都搞定之后，返回响应结果给客户端

![图解文档的增删改内部机制](/assets/img/ElasticStack/图解文档的增删改内部机制.png)

### 3. 文档的查询内部机制

1. 客户端发送请求到任意一个 node，成为 coordinating node
2. coordinating node 对 document 进行路由，将请求转发到对应的 node，使用 round-robin 轮询算法，在 primary shard 以及其所有 replica 中随机选择一个，让读请求负载均衡
3. 接收请求的 node 返回 document 给 coordinating node，coordinating node 再返回给客户端
4. 特殊情况：document 还在建立索引过程中，可能只有 primary shard 有、replica shard 都没有，此时可能读取不到；完成索引建立后就都有了

![图解文档的查询内部机制](/assets/img/ElasticStack/图解文档的查询内部机制.png)

### 4. bulk api 奇特的 json 格式

```json
POST /_bulk
{"delete": {"_index": "test_index", "_id": "5"}}
{"create": {"_index": "test_index", "_id": "14"}}
{"test_field": "test14"}
{"update": {"_index": "test_index", "_id": "2"}}
{"doc": {"test_field": "bulk test"}}
```

为什么不用“更优雅”的 json 数组格式？因为 bulk 中的每个操作都可能要转发到不同 node 的 shard 去执行：

- 标准 json 数组格式：es 要先把 json 文本解析为 JSONArray 对象，内存中出现同一份数据的两个拷贝；再对每个 document 路由、按 shard 分组、序列化、发送
- 内存代价：假设 100 个 bulk 请求发送到一个节点，每个 10MB 就是 1GB；json 再拷贝一份为 JSONArray 对象，内存翻倍到 2GB 以上，会积压搜索等其他请求的内存，还导致 JVM 垃圾回收更频繁、更耗时
- 现在的奇特格式（ndjson）：不用转换为 json 对象，无内存拷贝，直接按换行符切割 json，对每两个一组的 json 读取 meta 进行路由，直接发送到 node

最大优势：不需要将 json 数组解析为 JSONArray 对象、形成大数据的拷贝，浪费内存空间，尽可能地保证性能。

---

## 十一、Mapping 映射入门

### 1. 什么是 mapping 映射

概念：自动或手动为 index 中的 `_doc` 建立的一种数据结构和相关配置，简称为 mapping 映射。

插入几条数据，让 es 自动建立索引：

```json
PUT /website/_doc/1
{
    "post_date": "2019-01-01",
    "title": "my first article",
    "content": "this is my first article in this website",
    "author_id": 11400
}
```

对比数据库建表语句：

```mysql
create table website(
    post_date date,
    title varchar(50),
    content varchar(100),
    author_id int(11)
);
```

动态映射（dynamic mapping）：自动为我们建立 index 以及对应的 mapping，其中包含每个 field 对应的数据类型，以及如何分词等设置。也可以在创建数据之前，先手动创建 index 以及对应的 mapping。

```json
GET /website/_mapping
```

响应结果（节选）：

```json
{
  "website" : {
    "mappings" : {
      "properties" : {
        "author_id" : { "type" : "long" },
        "content" : { "type" : "text", "fields" : { "keyword" : { "type" : "keyword", "ignore_above" : 256 } } },
        "post_date" : { "type" : "date" },
        "title" : { "type" : "text", "fields" : { "keyword" : { "type" : "keyword", "ignore_above" : 256 } } }
      }
    }
  }
}
```

尝试各种搜索：

```json
GET /website/_search?q=2019
GET /website/_search?q=2019-01-01
GET /website/_search?q=post_date:2019-01-01
GET /website/_search?q=post_date:2019
GET /website/_search?q=third
GET /website/_search?q=title:third
```

搜索结果不一致的原因：es 自动建立 mapping 时为不同的 field 设置了不同的 data type，不同 data type 的分词、搜索行为不一样，所以 text 字段和 post_date 字段的搜索表现完全不同。

### 2. 精确匹配与全文检索的对比分析

exact value 精确匹配：

- `2019-01-01` 作为 exact value，必须输入 `2019-01-01` 才能搜出来，输入 `01` 搜不出来
- type 为 date 时是精确匹配，相当于 `select * from book where post_date = '2019-01-01'`

full text 全文检索：

- 搜“笔记电脑”，“笔记本电脑”词条也会出现，相当于 `select * from book where name like '%笔记电脑%'`
- 缩写 vs 全称：cn vs china；格式转化：like liked likes；大小写：Tom vs tom；同义词：like vs love
- `2019-01-01`、`20190101`，搜 2019 或 01 都可以搜出来
- 不是单纯匹配完整的值，而是可以对值拆分词语（分词）后匹配，也可以通过缩写、时态、大小写、同义词等匹配，深入 NLP 自然语义处理

### 3. 全文检索下倒排索引核心原理

两个文档：

- doc1：`I really liked my small dogs, and I think my mom also liked them.`
- doc2：`He never liked any dogs, so I hope that my mom will not expect me to liked him.`

第一步，分词，建立初步的倒排索引：

| term | doc1 | doc2 |
| --- | --- | --- |
| I | * | * |
| really | * | |
| liked | * | * |
| my | * | * |
| small | * | |
| dogs | * | |
| and | * | |
| think | * | |
| mom | * | * |
| also | * | |
| them | * | |
| He / never / any / so / hope / that / will / not / expect / me / to / him | | * |

此时搜索 `mother like little dog`，不可能有任何结果：mom 与 mother 在我们人类看来是一样的，想进行标准化操作。

normalization（正规化）：建立倒排索引时，对拆分出的各个单词进行相应处理，以提升后面搜索时能搜到相关联文档的概率，包括时态的转换、单复数的转换、同义词的转换、大小写的转换。

```text
mom    ---> mother
liked  ---> like
small  ---> little
dogs   ---> dog
```

重新建立倒排索引，加入 normalization（表中发生变化的行）：

| term | doc1 | doc2 | normalization |
| --- | --- | --- | --- |
| like | * | * | liked ---> like |
| little | * | | small ---> little |
| dog | * | | dogs ---> dog |
| mother | * | * | mom ---> mother |

再次用 `mother liked little dog` 搜索：对搜索条件同样进行分词和 normalization（liked 转 like），doc1 和 doc2 都会搜索出来。

### 4. 分词器 analyzer

作用：切分词语 + normalization（提升 recall 召回率）。给 es 一段句子，拆分成一个个单个的单词，同时对每个单词做 normalization（时态转换、单复数转换）。recall 召回率：搜索的时候，增加能够搜索到的结果的数量。

analyzer 的 3 个组成部分（步骤）：

1. character filter：在分词之前先预处理，比如过滤 html 标签（`<span>hello</span>` ---> hello）、`&` ---> and（`I & you` ---> `I and you`）
2. tokenizer：分词，`hello you and me` ---> hello, you, and, me
3. token filter：lowercase、stop word、synonym 等，如 dogs ---> dog、liked ---> like、Tom ---> tom、a/the/an 干掉、mother ---> mom、small ---> little。stop word 停用词：了、的、呢

一个分词器很重要：将一段文本进行各种处理，处理好的结果才会拿去建立倒排索引。

内置分词器（例句：`Set the shape to semi-transparent by calling set_trans(5)`）：

| 分词器 | 分词结果 |
| --- | --- |
| standard analyzer（默认） | set, the, shape, to, semi, transparent, by, calling, set_trans, 5 |
| simple analyzer | set, the, shape, to, semi, transparent, by, calling, set, trans |
| whitespace analyzer | Set, the, shape, to, semi-transparent, by, calling, set_trans(5) |
| language analyzer（如 english） | set, shape, semi, transpar, call, set_tran, 5 |

官方文档地址：[Built-in analyzer reference | Elasticsearch Guide [7.7] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/7.7/analysis-analyzers.html)

### 5. query string 根据字段分词策略

- query string 必须以和 index 建立时相同的 analyzer 进行分词
- query string 对 exact value 和 full text 区别对待：date 是 exact value 精确匹配，text 是 full text 全文检索

测试分词器：

```json
GET /_analyze
{
    "analyzer": "standard",
    "text": "Text to analyze 70"
}
```

响应结果：`text`、`to`、`analyze`、`70` 四个 token，及各自的 start_offset、end_offset、type、position。

---

## 十二、一页总结

- ELK 是旧称，加入 Beats 等新成员后叫 Elastic Stack
- 数据库做搜索有存储、性能、不能分词三大弊端，所以要倒排索引
- es 基于 lucene，封装成分布式、RESTful 的近实时搜索服务器
- Index 对应数据库、Document 对应行、Field 对应列
- 写入后约 1 秒可搜索（近实时）；主分片数创建后不可变
- 全量替换和局部更新内部都是“旧文档标记删除 + 新建文档”
- 并发控制基于 `_version` 乐观锁
- bulk 用 ndjson 格式是为了避免 json 数组解析带来的内存翻倍
- 精确匹配（exact value）与全文检索（full text）的差异由 mapping 的字段类型和分词器决定
