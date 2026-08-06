---
date: 2023-02-24
title: Redis
categories:
  - redis
tag:
  - 开发
  - 缓存

---


# ![Redis](/assets/img/icons/redis.svg)  Redis

[ Redis数据结构 - 简书 (jianshu.com) ](https://www.jianshu.com/p/3673f055bb3f)

![redis基本数据结构](/assets/img/redis/redis基本数据结构.png)

![redis数据结构简单图1](/assets/img/redis/redis数据结构简单图1.png)

![跳表图](/assets/img/redis/跳表图.png)

##  string

###  常用指令

| 指令                                                  | 作用                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| SET key value [EX seconds] [PX milliseconds] [NX\|XX] | 将字符串值 value 关联到 key 。<br/><br/>如果 key 已经持有其他值， SET 就覆写旧值， 无视类型。<br/><br/>当 SET 命令对一个带有生存时间（TTL）的键进行设置之后， 该键原有的 TTL 将被清除。<br/><br/>可选参数<br/>从 Redis 2.6.12 版本开始， SET 命令的行为可以通过一系列参数来修改：<br/><br/>EX seconds ： 将键的过期时间设置为 seconds 秒。 执行 SET key value EX seconds 的效果等同于执行 SETEX key seconds value 。<br/><br/>PX milliseconds ： 将键的过期时间设置为 milliseconds 毫秒。 执行 SET key value PX milliseconds 的效果等同于执行 PSETEX key milliseconds value 。<br/><br/>NX ： 只在键不存在时， 才对键进行设置操作。 执行 SET key value NX 的效果等同于执行 SETNX key value 。<br/><br/>XX ： 只在键已经存在时， 才对键进行设置操作。<br/><br/>Note<br/><br/>因为 SET 命令可以通过参数来实现 SETNX 、 SETEX 以及 PSETEX 命令的效果， 所以 Redis 将来的版本可能会移除并废弃 SETNX 、 SETEX 和 PSETEX 这三个命令。<br/><br/>返回值<br/>在 Redis 2.6.12 版本以前， SET 命令总是返回 OK 。<br/><br/>从 Redis 2.6.12 版本开始， SET 命令只在设置操作成功完成时才返回 OK ； 如果命令使用了 NX 或者 XX 选项， 但是因为条件没达到而造成设置操作未执行， 那么命令将返回空批量回复（NULL Bulk Reply）。 |
| GET key                                               | 返回与键 key 相关联的字符串值。<br/><br/>返回值<br/>如果键 key 不存在， 那么返回特殊值 nil ； 否则， 返回键 key 的值。<br/><br/>如果键 key 的值并非字符串类型， 那么返回一个错误， 因为 GET 命令只能用于字符串值。 |
| STRLEN key                                            | 返回键 key 储存的字符串值的长度。<br/><br/>返回值<br/>STRLEN 命令返回字符串值的长度。<br/><br/>当键 key 不存在时， 命令返回 0 。<br/><br/>当 key 储存的不是字符串值时， 返回一个错误。 |
| DECR key                                              | 为键 key 储存的数字值减去一。<br/><br/>如果键 key 不存在， 那么键 key 的值会先被初始化为 0 ， 然后再执行 DECR 操作。<br/><br/>如果键 key 储存的值不能被解释为数字， 那么 DECR 命令将返回一个错误。<br/><br/>本操作的值限制在 64 位(bit)有符号数字表示之内。<br/><br/>关于递增(increment) / 递减(decrement)操作的更多信息， 请参见 INCR 命令的文档。<br/><br/>返回值<br/>DECR 命令会返回键 key 在执行减一操作之后的值。 |
| INCR key                                              | 为键 key 储存的数字值加上一。<br/><br/>如果键 key 不存在， 那么它的值会先被初始化为 0 ， 然后再执行 INCR 命令。<br/><br/>如果键 key 储存的值不能被解释为数字， 那么 INCR 命令将返回一个错误。<br/><br/>本操作的值限制在 64 位(bit)有符号数字表示之内。<br/><br/>Note<br/><br/>INCR 命令是一个针对字符串的操作。 因为 Redis 并没有专用的整数类型， 所以键 key 储存的值在执行 INCR 命令时会被解释为十进制 64 位有符号整数。<br/><br/>返回值<br/>INCR 命令会返回键 key 在执行加一操作之后的值。 |

###  应用场景

  1. 分布式锁(setnx) 
  2. 递增、递减（点赞数（只是统计被点赞总数））  



##  hash

对应java的 **Map<String, Map<K, V>>** 结构。

###  常用指令

| 指令                                  | 作用                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| HSET hash field value                 | 将哈希表 hash 中域 field 的值设置为 value 。<br/><br/>如果给定的哈希表并不存在， 那么一个新的哈希表将被创建并执行 HSET 操作。<br/><br/>如果域 field 已经存在于哈希表中， 那么它的旧值将被新值 value 覆盖。 |
| HGET hash field                       | 返回哈希表中给定域的值。                                     |
| HMSET key field value [field value …] | 同时将多个 field-value (域-值)对设置到哈希表 key 中。<br/><br/>此命令会覆盖哈希表中已存在的域。<br/><br/>如果 key 不存在，一个空哈希表被创建并执行 HMSET 操作。 |
| HMGET key field [field …]             | 返回哈希表 key 中，一个或多个给定域的值。<br/><br/>如果给定的域不存在于哈希表，那么返回一个 nil 值。<br/><br/>因为不存在的 key 被当作一个空哈希表来处理，所以对一个不存在的 key 进行 HMGET 操作将返回一个只带有 nil 值的表。 |
| HGETALL                               | 返回哈希表 key 中，所有的域和值。<br/><br/>在返回值里，紧跟每个域名(field name)之后是域的值(value)，所以返回值的长度是哈希表大小的两倍。 |
| HLEN key                              | 返回哈希表 key 中域的数量。                                  |
| HDEL key field [field …]              | 删除哈希表 `key` 中的一个或多个指定域，不存在的域将被忽略。  |
| HEXISTS hash field                    | 检查给定域 `field` 是否存在于哈希表 `hash` 当中。            |



###  应用场景

购物车场景，存储用户基础信息。

例如：

 ![用户基础信息](/assets/img/redis/用户基础信息.png)

##  list

list是有序的，且可以重复的。

###  常用指令


| 指令                      | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| LLEN key                  | 返回列表 key 的长度。<br/><br/>如果 key 不存在，则 key 被解释为一个空列表，返回 0 .<br/><br/>如果 key 不是列表类型，返回一个错误。 |
| LPOP key                  | 移除并返回列表 `key` 的头元素。                              |
| LREM key count value      | 根据参数 count 的值，移除列表中与参数 value 相等的元素。<br/><br/>count 的值可以是以下几种：<br/><br/>count > 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。<br/><br/>count < 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。<br/><br/>count = 0 : 移除表中所有与 value 相等的值。 |
| LPUSH key value [value …] | 将一个或多个值 value 插入到列表 key 的表头<br/><br/>如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表头： 比如说，对空列表 mylist 执行命令 LPUSH mylist a b c ，列表的值将是 c b a ，这等同于原子性地执行 LPUSH mylist a 、 LPUSH mylist b 和 LPUSH mylist c 三个命令。<br/><br/>如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作。<br/><br/>当 key 存在但不是列表类型时，返回一个错误。 |
| RPUSH key value [value …] | 将一个或多个值 value 插入到列表 key 的表尾(最右边)。<br/><br/>如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表尾：比如对一个空列表 mylist 执行 RPUSH mylist a b c ，得出的结果列表为 a b c ，等同于执行命令 RPUSH mylist a 、 RPUSH mylist b 、 RPUSH mylist c 。<br/><br/>如果 key 不存在，一个空列表会被创建并执行 RPUSH 操作。<br/><br/>当 key 存在但不是列表类型时，返回一个错误。 |
| LPUSHX key value          | 将值 value 插入到列表 key 的表头，当且仅当 key 存在并且是一个列表。<br/><br/>和 LPUSH key value [value …] 命令相反，当 key 不存在时， LPUSHX 命令什么也不做。 |
| RPUSHX key value          | 将值 value 插入到列表 key 的表尾，当且仅当 key 存在并且是一个列表。<br/><br/>和 RPUSH key value [value …] 命令相反，当 key 不存在时， RPUSHX 命令什么也不做。 |



###  应用场景

微信文章订阅公众号

例如：

![指定用户订阅文章](/assets/img/redis/指定用户订阅文章.png)

##  set

集合，不可重复。

###  常用指令

| 指令                       | 作用                                                         |
| -------------------------- | ------------------------------------------------------------ |
| SADD key member [member …] | 将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略。<br/><br/>假如 key 不存在，则创建一个只包含 member 元素作成员的集合。<br/><br/>当 key 不是集合类型时，返回一个错误。 |
| SREM key member [member …] | 移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。<br/><br/>当 key 不是集合类型，返回一个错误。 |
| SMEMBERS key               | 返回集合 key 中的所有成员。<br/><br/>不存在的 key 被视为空集合。 |
| SISMEMBER key member       | 判断 member 元素是否集合 key 的成员。<br/>如果 `member` 元素是集合的成员，返回 `1` 。 如果 `member` 元素不是集合的成员，或 `key` 不存在，返回 `0` 。 |
| SCARD key                  | 返回集合 `key` 的基数(集合中元素的数量)。                    |
| SRANDMEMBER key [count]    | 如果命令执行时，只提供了 key 参数，那么返回集合中的一个随机元素。<br/><br/>从 Redis 2.6 版本开始， SRANDMEMBER 命令接受可选的 count 参数：<br/><br/>如果 count 为正数，且小于集合基数，那么命令返回一个包含 count 个元素的数组，数组中的元素各不相同。如果 count 大于等于集合基数，那么返回整个集合。<br/><br/>如果 count 为负数，那么命令返回一个数组，数组中的元素可能会重复出现多次，而数组的长度为 count 的绝对值。<br/><br/>该操作和 SPOP key 相似，但 SPOP key 将随机元素从集合中移除并返回，而 SRANDMEMBER 则仅仅返回随机元素，而不对集合进行任何改动。 |
| SPOP key                   | 移除并返回集合中的一个随机元素。<br/><br/>如果只想获取一个随机元素，但不想该元素从集合中被移除的话，可以使用 SRANDMEMBER key [count] 命令。<br/><br/>返回值<br/>被移除的随机元素。 当 key 不存在或 key 是空集时，返回 nil 。 |
| SDIFF key [key …]          | 返回一个集合的全部成员，该集合是所有给定集合之间的差集。<br/><br/>不存在的 key 被视为空集。<br/><br/>返回值<br/>一个包含差集成员的列表。 |

###  应用场景

  1. 随机抽奖小程序 

  2. 微信朋友圈点赞 

  3. 微博好友关注的社交关系（使用SINTER key（获取交集）） 

  4. QQ推荐可能认识的人（使用SDIFF key （获取差集）） 

例如：

随机抽奖小程序

![随机抽奖](/assets/img/redis/随机抽奖.png)

QQ推荐可能认识的人(注意：我这里把好友本身算进去了，其实需要去除)

![可能认识的人](/assets/img/redis/可能认识的人.png)

##  zset

有序集合，不可重复。

在有序集合中加入了一个元素和该元素的分数。

object encoding key是压缩列表(ziplist)和跳表(skiplist)。

  1. ziplist（压缩列表(O（N））： 

  2. skiplist（跳表（O（logN）））： 

###  常用指令

| ZADD key score member [[score member] [score member] …]     | 将一个或多个 member 元素及其 score 值加入到有序集 key 当中。<br/><br/>如果某个 member 已经是有序集的成员，那么更新这个 member 的 score 值，并通过重新插入这个 member 元素，来保证该 member 在正确的位置上。<br/><br/>score 值可以是整数值或双精度浮点数。<br/><br/>如果 key 不存在，则创建一个空的有序集并执行 ZADD 操作。<br/><br/>当 key 存在但不是有序集类型时，返回一个错误。 |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| ZRANGE key start stop [WITHSCORES]                          | 返回有序集 key 中，指定区间内的成员。<br/><br/>其中成员的位置按 score 值递增(从小到大)来排序。<br/><br/>具有相同 score 值的成员按字典序(lexicographical order )来排列。<br/><br/>如果你需要成员按 score 值递减(从大到小)来排列，请使用 ZREVRANGE key start stop [WITHSCORES] 命令。<br/><br/>下标参数 start 和 stop 都以 0 为底，也就是说，以 0 表示有序集第一个成员，以 1 表示有序集第二个成员，以此类推。 你也可以使用负数下标，以 -1 表示最后一个成员， -2 表示倒数第二个成员，以此类推。<br/><br/>超出范围的下标并不会引起错误。 比如说，当 start 的值比有序集的最大下标还要大，或是 start > stop 时， ZRANGE 命令只是简单地返回一个空列表。 另一方面，假如 stop 参数的值比有序集的最大下标还要大，那么 Redis 将 stop 当作最大下标来处理。<br/><br/>可以通过使用 WITHSCORES 选项，来让成员和它的 score 值一并返回，返回列表以 value1,score1, ..., valueN,scoreN 的格式表示。 客户端库可能会返回一些更复杂的数据类型，比如数组、元组等。 |
| ZSCORE key member                                           | 返回有序集 key 中，成员 member 的 score 值。<br/><br/>如果 member 元素不是有序集 key 的成员，或 key 不存在，返回 nil 。<br/><br/>返回值<br/>member 成员的 score 值，以字符串形式表示。 |
| ZREM key member [member …]                                  | 移除有序集 key 中的一个或多个成员，不存在的成员将被忽略。<br/><br/>当 key 存在但不是有序集类型时，返回一个错误。 |
| ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count] | 返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列。<br/><br/>具有相同 score 值的成员按字典序(lexicographical order)来排列(该属性是有序集提供的，不需要额外的计算)。<br/><br/>可选的 LIMIT 参数指定返回结果的数量及区间(就像SQL中的 SELECT LIMIT offset, count )，注意当 offset 很大时，定位 offset 的操作可能需要遍历整个有序集，此过程最坏复杂度为 O(N) 时间。<br/><br/>可选的 WITHSCORES 参数决定结果集是单单返回有序集的成员，还是将有序集成员及其 score 值一起返回。 该选项自 Redis 2.0 版本起可用。<br/><br/>区间及无限<br/>min 和 max 可以是 -inf 和 +inf ，这样一来，你就可以在不知道有序集的最低和最高 score 值的情况下，使用 ZRANGEBYSCORE 这类命令。<br/><br/>默认情况下，区间的取值使用闭区间 (小于等于或大于等于)，你也可以通过给参数前增加 ( 符号来使用可选的开区间 (小于或大于)。 |
| ZINCRBY key increment member                                | 为有序集 key 的成员 member 的 score 值加上增量 increment 。<br/><br/>可以通过传递一个负数值 increment ，让 score 减去相应的值，比如 ZINCRBY key -5 member ，就是让 member 的 score 值减去 5 。<br/><br/>当 key 不存在，或 member 不是 key 的成员时， ZINCRBY key increment member 等同于 ZADD key increment member 。<br/><br/>当 key 不是有序集类型时，返回一个错误。<br/><br/>score 值可以是整数值或双精度浮点数。<br/><br/>返回值<br/>member 成员的新 score 值，以字符串形式表示。 |
| ZCARD key                                                   | 返回有序集 key 的基数。<br/><br/>返回值<br/>当 key 存在且是有序集类型时，返回有序集的基数。 当 key 不存在时，返回 0 。 |
| ZCOUNT key min max                                          | 返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量。<br/><br/>关于参数 min 和 max 的详细使用方法，请参考 ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count] 命令。<br/><br/>返回值<br/>score 值在 min 和 max 之间的成员的数量。 |

<br/>

###  应用场景

  1. 可以根据商品的销售进行排序。 

  2. 点赞排行榜的排序。 

  3. 战力榜排序； 

战力榜如下：

![战力榜](/assets/img/redis/战力榜.png)



##  reids分布式锁

####  什么是分布式锁？

分布式微服务架构，拆分后各个微服务之间为了避免冲突和数据故障而加入的一种锁。

####  有哪些可以实现分布式锁？

  1. mysql 

  2. zookeeper 

  3. reids（setnx） 

一般常用的是redis分布式锁。

####  问题？

#####  redis做分布式锁的时候，需要注意哪些问题？

  1. redis.setnx的时候需要注意原子性； 

  2. redis.del的时候需要注意原子性，确保删除的是该线程持有的锁，一般采用lua脚本使用(官网推荐)； 

  3. setnx时设置了过期时间，存在过期时间结束却线程未执行结束，这个时候其他线程可以获得锁，这个可以使用获取锁的线程后台启动一个守护线程，每次快过期时间快到时，重置过期时间； 

#####  如果redis是单点部署，会带来什么问题？

那你准备怎么解决单点问题？

[ (23条消息) Redis 单机部署常见问题以及生产环境下的优化和安全设置_dlin2020的博客-CSDN博客
](https://blog.csdn.net/weixin_38587368/article/details/108083509)

#####  集群模式下，比如主从模式，有没有什么问题？

[ Redis 主从集群常见的问题有哪些？ - 知乎 (zhihu.com)
](https://www.zhihu.com/question/507441007/answer/2471128698)

#####  那你简单的介绍一下Redlock? 你简历上写了redisson，你描述一下？

[ Redisson 分布式锁源码 09：RedLock 红锁的故事 (bbsmax.com)
](https://www.bbsmax.com/A/D854NgVVzE/)

#####  redis分布式锁如何续期？看门狗知道吗？

通过守护进程看门狗，每隔10s（this.internalLockLeaseTime /
3L）检查是否完成，未结束进行续期，每次续命值默认为30s（this.internalLockLeaseTime）。

看门狗是个守护线程，守护线程的特性是必须得有线程守护，服务宕机，守护线程关闭，不会再次续期，key直到过期失效。

#####  不可以用lua脚本，还有其他办法吗？

使用事务



###  缓存过期淘汰策略

* * *

redis内存(maxmemory)设置为0或者未设置时，，在64位操作系统下为不限制内存大小，在32位操作系统下最多使用3GB内存。

redis内存maxmemory默认配置为0。

redis内存设置一般推荐为最大物理内存的四分之三。

config get maxmemory 查看运行的最大限制内存大小。

config set maxmemory 1 设置最大限制内存为1字节。

info memory 查看内存信息。



####  如何修改内存大小？

  1. 修改配置文件的maxmemory属性； 
  2. 通过指令执行修改（config set maxmemory value）； 



####  redis内存满了怎么办？

set k1 v1

抛出如下错误：

`OOM command not allowed when used memory > 'maxmemory'.`



####  redis缓存淘汰策略

```shell

#  最大限制内存

 maxmemory

#  内存淘汰策略

 MAXMEMORY POLICY: how Redis will select what to remove when maxmemory

 is reached. You can select one from the following behaviors:

#

#  对所有设置了过期时间的key使用LRU算法进行删除

 volatile-lru -> Evict using approximated LRU, only keys with an expire set.

#  对所有key使用LRU算法进行删除

 allkeys-lru -> Evict any key using approximated LRU.

#  对所有设置了过期时间的key使用LFU算法进行删除

 volatile-lfu -> Evict using approximated LFU, only keys with an expire set.

#  对所有key使用LFU算法进行删除

 allkeys-lfu -> Evict any key using approximated LFU.

#  对所有设置了过期时间的key使用随机删除

 volatile-random -> Remove a random key having an expire set.

#  对所有的key使用随机删除

 allkeys-random -> Remove a random key, any key.

#  删除马上要过期的key

 volatile-ttl -> Remove the key with the nearest expire time (minor TTL)

#  不会驱逐任何key

 noeviction -> Don't evict anything, just return an error on write operations.

#  意味着最近最少使用

 LRU means Least Recently Used

#  意味着最常用

 LFU means Least Frequently Used



2个维度：

  1. 过期键中筛选； 

  2. 所有键中筛选； 

4个方面：

  1. lru； 

  2. lfu； 

  3. 随机； 

  4. ttl； 

实际最常用： allkeys-lru

```

当没有配置 **MAXMEMORY POLICY** ，默认为 **maxmemory_policy:noeviction** 。



#####  如果一个键是过期的，那它到了过期时间之后就马上从内存之后删除吗？

######  三大过期删除策略

  1. 定时删除：对CPU不友好，用处理器性能换取存储空间。(时间换空间) 。

  2. 惰性删除：数据达到过期时间，下次调用再进行删除，会造成大量无效数据，除非FLUSHDB。（空间换时间） 。

  3. 定期删除：每隔一段时间执行一次删除过期键操作，并利用限制删除操作执行的时长和频率来减少对CPU时间的影响。 

![定期删除的特点](/assets/img/redis/定期删除的特点.png)

即使这样还是会有漏网之鱼，所以出现了淘汰策略。



###  LRU算法

  1. 参考 `LinkHashMap` 进行实现； 

  2. 使用 `Map` 加 `Node `实现； 

第二种实现如下：

```java


package com.blacktea.redisson;

import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;

import java.util.Map;

import java.util.StringJoiner;

/**
 * @description:
 * @author: black tea
 * @date: 2022/7/3 19:22
 */

@Slf4j

public class MyLruDemo {


    /**
     * Node节点，作为数据的载体
     *
     * @param <K>
     * @param <V>
     */

    static class Node<K, V> {

        Node<K, V> prev;
        Node<K, V> next;
        V value;
        K key;

        public Node(K key, V value) {

            this.prev = this.next = null;
            this.value = value;
            this.key = key;

        }


        public Node() {
            this.prev = this.next = null;
        }

    }


    /**
     * 双向链表，里面的数据就是我们的Node
     *
     * @param <K>
     * @param <V>
     */

    class DoubleLinkedList<K, V> {

        Node<K, V> head;
        Node<K, V> tail;

        public DoubleLinkedList() {

            head = new Node<>();
            tail = new Node<>();
            head.next = tail;
            tail.prev = head;

        }


        public void addHead(Node<K, V> node) {

            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;

        }


        public void removeNode(Node<K, V> node) {

            node.next.prev = node.prev;
            node.prev.next = node.next;
            node.prev = null;
            node.next = null;

        }


        public Node<K, V> getLast() {

            // 尾结点是虚拟节点
            return tail.prev;

        }

    }


    private int cacheSize;

    Map<Integer, Node<Integer, Integer>> map;

    DoubleLinkedList<Integer, Integer> doubleLinkedList;
    
    public MyLruDemo(int cacheSize) {

        // 缓存长度
        this.cacheSize = cacheSize;
        // 查找 hash
        this.map = new HashMap<>();
        // 双向链表
        this.doubleLinkedList = new DoubleLinkedList<>();

    }


    public int get(int key) {

        if (!map.containsKey(key)) {
            return -1;
        }

        // 将Node放到队列头部
        Node<Integer, Integer> node = map.get(key);
        doubleLinkedList.removeNode(node);
        doubleLinkedList.addHead(node);
        return node.value;

    }


    public void put(int key, int value) {

        Node<Integer, Integer> node;
        if (map.containsKey(key)) {
            node = map.get(key);
            doubleLinkedList.removeNode(node);
            node.value = value;
        } else {
            // 初始化Node
            node = new Node<>(key, value);
            if (map.size() == cacheSize) {
                // 缓存长度达到
                Node<Integer, Integer> lastNode = doubleLinkedList.getLast();
                map.remove(lastNode.key);
                doubleLinkedList.removeNode(lastNode);
            }

        }

        map.put(key, node);
        // 添加到队列头
        doubleLinkedList.addHead(node);

    }


    public void logNode() {
        Node<Integer, Integer> head = this.doubleLinkedList.head;
        Node<Integer, Integer> node = head.next;
        StringJoiner nodeJoiner = new StringJoiner(",");
        while (node.next != null) {
            nodeJoiner.add(node.key.toString());
            node = node.next;
        }
        log.info("当前lru的结果是{}", nodeJoiner.toString());

    }


    public static void main(String[] args) {

        MyLruDemo myLruDemo = new MyLruDemo(3);
        myLruDemo.put(1, 1);
        myLruDemo.put(2, 2);
        myLruDemo.put(3, 3);
        myLruDemo.logNode();
        
        myLruDemo.put(4, 4);
        myLruDemo.logNode();
        
        myLruDemo.put(3, 3);
        myLruDemo.logNode();
        
        myLruDemo.put(3, 3);
        myLruDemo.logNode();
        
        myLruDemo.put(3, 3);
        myLruDemo.logNode();
        
        myLruDemo.put(5, 1);
        myLruDemo.logNode();

    }

}

```

### 分布式锁luan脚本

```lua
if (redis.call('exists', KEYS[1]) == 0)
    then redis.call('hincrby', KEYS[1], ARGV[2], 1);
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end;
if (redis.call('hexists', KEYS[1], ARGV[2]) == 1)
    then redis.call('hincrby', KEYS[1], ARGV[2], 1);
    redis.call('pexpire', KEYS[1], ARGV[1]);
    return nil;
end;
return redis.call('pttl', KEYS[1]);
```


