---
date: 2021-09-23
title: SpringBoot 整合 Sharding-JDBC(mysql-8.0)
categories:
  - Sharding
tag:
  - 开发
  - java
  - springboot整合
  - 分库分表

---



# ![Sharding-JDBC](/assets/img/icons/springboot.svg) SpringBoot 整合 Sharding-JDBC(mysql-8.0)

## 感谢

&emsp;&emsp;​从网上的资源查找后进行学习的,该项目适用于个人学习。

&emsp;&emsp;B站、CSDN、简书、GitHub、Gitee、[ShardingShpere数据库中间件- 专栏 -KuangStudy](https://www.kuangstudy.com/zl/sharding#1369675551090008065)、[数据分片 :: ShardingSphere](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/)


&emsp;&emsp;在此，非常感谢狂神及狂神飞哥的教学视频及网站文档、感谢其他开发者提供的解决问题的博客、感谢ShardingSphere团队提供的开源技术等!

&emsp;&emsp;需要进行视频学习的小伙伴可以去B站搜索狂神说Java或[狂神自己的网站学习](https://www.kuangstudy.com/course)

&emsp;&emsp;我很多都是基于[ShardingShpere数据库中间件- 专栏 -KuangStudy](https://www.kuangstudy.com/zl/sharding#1369675551090008065)去进行学习的!

## 文档迭代

| version |             功能             |                           详细描述                           |
| :-----: | :--------------------------: | :----------------------------------------------------------: |
|  0.0.1  | 读写分离与数据分片(分库分表) | 通过整合Sharding-JDBC实现主从数据库读写分离和分库分表进行数据分片。 |
|         |                              |                                                              |

## 项目技术版本(技术选型)

|     技术      |    version    |                             描述                             |
| :-----------: | :-----------: | :----------------------------------------------------------: |
|      jdk      |       8       |             符合你当前选择的springboot版本就可以             |
|     maven     |     3.8.1     |             符合你当前选择的springboot版本就可以             |
|  springboot   | 2.2.2.RELEASE |                                                              |
| Sharding-JDBC |   4.0.0-RC1   |                                                              |
|     mysql     |      8.0      |                                                              |
|     其他      |               | 参考maven,[pom配置](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/spring-boot-sql/sharding-jdbc/pom.xml) |


## Sharding-JDBC官网

### 基础知识

&emsp;&emsp;基础知识了解可以自己去阅读下[文档](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/overview/#sharding-jdbc)，我搬运过来也没有什么意义!

### 概念&功能

&emsp;&emsp;下图是我从官网截取来的!

![概念&功能](/assets/img/ShardingJDBC/概念&功能.png)

## 读写分离

### 读写分离内容

&emsp;&emsp;[读写分离核心概念地址](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/read-write-split/concept/)


![读写分离内容](/assets/img/ShardingJDBC/读写分离内容.png)


### 数据库环境配置

### mysql-主从复制

&emsp;&emsp;要玩读写分离,那么你一定要有已经配置好主从复制的库,如果没有,那么我想你需要下面这个来进行配置!（任选其一）

&emsp;&emsp;1. [基于Docker 配置主从服务器实现 mysql主从复制（8.0版本）_meng前行的博客-CSDN博客](https://blog.csdn.net/weixin_43917143/article/details/120288480)

&emsp;&emsp;2. [基于Docker 配置主从服务器实现 mysql主从复制(8.0) - 简书](https://www.jianshu.com/p/0ac6b26215b6)

&emsp;&emsp;这是我自己根据[ShardingShpere数据库中间件- 专栏 -KuangStudy](https://www.kuangstudy.com/zl/sharding#1369645557613608962)写的博客。


### 项目配置ShardingJDBC

### 读写分离yml配置文件
![读写分离配置](/assets/img/ShardingJDBC/读写分离配置.png)

&emsp;&emsp;[官网中的读写分离配置](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/manual/sharding-jdbc/configuration/config-spring-boot/#%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB)


![读写分离-yml配置](/assets/img/ShardingJDBC/读写分离-yml配置.png)

&emsp;&emsp;注意: ds1和下面的dataSourc配置其实是Map的(k,v）,所以在这里idea并不会进行代码提示,需要自己检查是否输入错误!

---

### yml配置文件解析之为什么是Map?

&emsp;&emsp;进入**SpringBootConfiguration**类可以看到如下：

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package org.apache.shardingsphere.shardingjdbc.spring.boot;
......

@Configuration
@EnableConfigurationProperties({SpringBootShardingRuleConfigurationProperties.class, SpringBootMasterSlaveRuleConfigurationProperties.class, SpringBootEncryptRuleConfigurationProperties.class, SpringBootPropertiesConfigurationProperties.class})
@ConditionalOnProperty(
    prefix = "spring.shardingsphere",
    name = {"enabled"},
    havingValue = "true",
    matchIfMissing = true
)
public class SpringBootConfiguration implements EnvironmentAware {
    private final SpringBootShardingRuleConfigurationProperties shardingProperties;
    private final SpringBootMasterSlaveRuleConfigurationProperties masterSlaveProperties;
    private final SpringBootEncryptRuleConfigurationProperties encryptProperties;
    private final SpringBootPropertiesConfigurationProperties propMapProperties;
    private final Map<String, DataSource> dataSourceMap = new LinkedHashMap();
    private final ShardingRuleConfigurationYamlSwapper shardingSwapper = new ShardingRuleConfigurationYamlSwapper();
    private final MasterSlaveRuleConfigurationYamlSwapper masterSlaveSwapper = new MasterSlaveRuleConfigurationYamlSwapper();
    private final EncryptRuleConfigurationYamlSwapper encryptSwapper = new EncryptRuleConfigurationYamlSwapper();

	......

    // 它通过实现EnvironmentAware接口来获取配置文件中的配置属性,这里就获取了
    // spring.shardingsphere.datasource.下的属性
    public final void setEnvironment(Environment environment) {
        String prefix = "spring.shardingsphere.datasource.";
        // 拿到我这里的 ds1,ds2
        Iterator var3 = this.getDataSourceNames(environment, prefix).iterator();

        // 通过while 遍历获得每个具体的数据源配置,将数据源配置根据k,v存入 dataSourceMap
        while(var3.hasNext()) {
            String each = (String)var3.next();

            try {
                // DataSource属性获得,put进入 dataSourceMap,说明
                //  private final Map<String, DataSource> dataSourceMap = new LinkedHashMap();
                // 就是存放数据源配置的属性
                this. dataSourceMap.put(each, this.getDataSource(environment, prefix, each));
            } catch (ReflectiveOperationException var6) {
                throw new ShardingException("Can't find datasource type!", var6);
            }
        }

    }

    // 获取数据源名称集合(例如我这里的 ds1,ds2)
    private List<String> getDataSourceNames(Environment environment, String prefix) {
        StandardEnvironment standardEnv = (StandardEnvironment)environment;
        standardEnv.setIgnoreUnresolvableNestedPlaceholders(true);
        return null == standardEnv.getProperty(prefix + "name") ? (new InlineExpressionParser(standardEnv.getProperty(prefix + "names"))).splitAndEvaluate() : Collections.singletonList(standardEnv.getProperty(prefix + "name"));
    }
	
    // 获取对应数据源名称的数据源配置
    private DataSource getDataSource(Environment environment, String prefix, String dataSourceName) throws ReflectiveOperationException {
        Map<String, Object> dataSourceProps = (Map)PropertyUtil.handle(environment, prefix + dataSourceName.trim(), Map.class);
        Preconditions.checkState(!dataSourceProps.isEmpty(), "Wrong datasource properties!");
        return DataSourceUtil.getDataSource(dataSourceProps.get("type").toString(), dataSourceProps);
    }
    ......

}
```

&emsp;&emsp;你如果好奇我是怎么找到的**SpringBootConfiguration**?

&emsp;&emsp;请你先进入配置文件,例如我这里的 **application-readwrite.yml**,

&emsp;&emsp;1. 按住ctrl + 选择spring.shardingsphere.datasource.names,然后点击鼠标左键就可以进入类了。

&emsp;&emsp;2. 通过寻找`sharding-jdbc-spring-boot-starter-4.0.0-RC1.jar`配置中的自动配置类。

![寻找配置](/assets/img/ShardingJDBC/寻找配置.png)

&emsp;&emsp;我个人是建议你一定要会第二种,虽然第一种很方便,这就像那啥,你可以不用但不能不会，并且这个方法对看自动配置原理很有用。

---

### 配置文件解析是Map的话,那我这个数据源该怎么配置,和单个数据源有什么不同?

#### 1. 那我这个数据源该怎么配置？

&emsp;&emsp;按照官网说的支持如下图:

![支持数据源类型](/assets/img/ShardingJDBC/支持数据源类型.png)

&emsp;&emsp;你只要选择它支持的数据库连接池的配置就可以了。

#### 2. 单个数据源有什么不同?

&emsp;&emsp;几乎没什么不同,除了从原来的单个类,变成`Map<String,类>`,就是数据结构上稍微变动,数据源内的具体配置还是那个类,不需要变动。

#### 测试

&emsp;&emsp;好了,到了这里了我们就假设你已经配置好了mysql-主从复制和yml配置了,没有配置好的请配置完成再看!

&emsp;&emsp;现在的数据如下图：原user表数据: 

![原user表数据](/assets/img/ShardingJDBC/原user表数据.png)

&emsp;&emsp;左主右从，接下来我们先查询以下,是不是从**从库** *查询*，然后  *新增、修改、删除* 都在**主库**完成。

## 单元测试效果(读写分离)
&emsp;&emsp;单元测试方法如下：

```java
package com.blacktea.shardingjdbc;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.blacktea.shardingjdbc.entites.domain.User;
import com.blacktea.shardingjdbc.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
@Slf4j
class ShardingJdbcReadWriteTests {

    @Autowired
    private UserService userService;

    @Test
    void contextLoads() {
    }

    @Test
    void list(){
        List<User> list = userService.list();
        log.info("size:{},从库查询全部数据:{}", list.size(),JSONUtil.toJsonStr(list));
    }

    @Test
    @Transactional
    // 因为JUnit使用 @Transactional会自动开启事务,即没有报错也会执行事务,所以需要 @Rollback(false)关闭事务
    @Rollback(false)
    void add(){
        User user = new User();
        user.setName("读写分离添加!");
        log.info("主库添加结果:{}",userService.save(user));
//        int i = 1/0;
    }

    @Test
    void update(){
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("name","读写分离添加!");
        User user = userService.getOne(userQueryWrapper);
        user.setName("读写分离修改!");
        log.info("主库修改结果:{}",userService.updateById(user));
    }

    @Test
    void delete() throws Exception {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("id",1440877837299494914L);
        log.info("主库删除结果:{}",userService.remove(queryWrapper));
    }
}

```


### 查询 - 从库操作

&emsp;&emsp;执行方法`list()`,结果如下图:

![list方法结果](/assets/img/ShardingJDBC/list方法结果.png)

&emsp;&emsp;ds2 根据yml配置可以得知,确实是从库的配置。

​&emsp;&emsp;那么**ShardingJdbc**读写分离也确实是从`从库`中查询数据。

### 增加、删除、修改 - 主库

![增加](/assets/img/ShardingJDBC/增加.png)

&emsp;&emsp;注意: 我在测试增加的时候发现了一个问题,*Committed transaction for test*，他会自动进行回滚,导致数据库中并没有插入数据,但是该结果返回的是true,

&emsp;&emsp;后来我查询资料后发现 因为**JUnit使用 @Transactional会自动开启事务,即没有报错也会执行事务,所以需要 @Rollback(false)关闭事务**了。

&emsp;&emsp;资料如下:

​&emsp;&emsp;1. https://blog.csdn.net/jinbaizhe/article/details/81055495

​&emsp;&emsp;2. https://blog.csdn.net/u013107634/article/details/108888818

#### 插入成功

![插入结果](/assets/img/ShardingJDBC/插入结果.png)

#### 修改成功

![修改成功1](/assets/img/ShardingJDBC/修改成功1.png)

![修改结果](/assets/img/ShardingJDBC/修改结果.png)


#### 删除成功

![删除成功](/assets/img/ShardingJDBC/删除成功.png)

![删除结果](/assets/img/ShardingJDBC/删除结果.png)

&emsp;&emsp;OK,那么读写分离入门那就结束了！

---

## 数据分片

### 数据分片内容

&emsp;&emsp;[数据分片官方知识](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/)

![数据分片内容](/assets/img/ShardingJDBC/数据分片内容.png)

---

###### 分片配置
![分片yml配置](/assets/img/ShardingJDBC/分片yml配置.png)

&emsp;&emsp;[官网中的读写分离配置](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/manual/sharding-jdbc/configuration/config-spring-boot/#%E6%95%B0%E6%8D%AE%E5%88%86%E7%89%87)

&emsp;&emsp;注意: 

​&emsp;&emsp;1. sub1：表示分库又分表;

​&emsp;&emsp;2. sub2表示：(分库而固定表)或(固定库而分表);

---

### yml配置说明

```yaml
spring:
  main:
    allow-bean-definition-overriding: true
  shardingsphere:
    # 参数配置，显示sql
    props:
      sql:
        show: true
    # 配置数据源
    datasource:
      # 给每个数据源取别名，下面的ds1,ds2任意取名字
      names: ds0,ds1
      # 给master-ds1每个数据源配置数据库连接信息
      ds0:
        # 配置druid数据源
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://192.168.168.101:3306/sharding_sphere?useUnicode=true&characterEncoding=utf8&tinyInt1isBit=false&useSSL=false&serverTimezone=Asia/Shanghai
        username: root
        password: mysql8.0
        maxPoolSize: 100
        minPoolSize: 5
      # 配置ds2-slave
      ds1:
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://127.0.0.1:3306/sharding_sphere?useUnicode=true&characterEncoding=utf8&tinyInt1isBit=false&useSSL=false&serverTimezone=Asia/Shanghai
        username: root
        password: mysql8.0
        maxPoolSize: 100
        minPoolSize: 5
    sharding:
      # 配置分表的规则
      tables:
        # user 逻辑表名
        sys_user:
          key-generator:
            # 主键的列明，
            column: id
            type: SNOWFLAKE
          # 数据节点：数据源$->{0..N}.逻辑表名$->{0..N}
          actual-data-nodes: ds$->{0..1}.sys_user$->{0..1}
          # 拆分库策略，也就是什么样子的数据放入放到哪个数据库中。
          database-strategy:
            inline:
              sharding-column: sex    # 分片字段（分片键）
              algorithm-expression: ds$->{sex % 2} # 分片算法表达式
          # 拆分表策略，也就是什么样子的数据放入放到哪个数据表中。
          table-strategy:
            # 按出生日期中的年份进行分表
#            standard:
#              shardingColumn: date_birth # 字段名不存在默认 sys_user全匹配 添加
#              preciseAlgorithmClassName: com.blacktea.shardingjdbc.config.BirthdayAlgorithm
            # 按年龄进行分表
            inline:
              sharding-column: age    # 分片字段（分片键）
              algorithm-expression: sys_user$->{age % 2} # 分片算法表达式
```

&emsp;&emsp;`spring.shardingsphere.sharding.tables` : 表示对表进行分片(含分库和同库分表)。

&emsp;&emsp;具体配置可以参考 **SpringBootShardingRuleConfigurationProperties**类与[文档](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/concept/configuration/)。

&emsp;&emsp;SpringBootShardingRuleConfigurationProperties 解析如下:

```java
package org.apache.shardingsphere.shardingjdbc.spring.boot.sharding;

import org.apache.shardingsphere.core.yaml.config.sharding.YamlShardingRuleConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(
    prefix = "spring.shardingsphere.sharding"
)
public class SpringBootShardingRuleConfigurationProperties extends YamlShardingRuleConfiguration {
    public SpringBootShardingRuleConfigurationProperties() {
    }
}
```

&emsp;&emsp;其实值都在父类 **YamlShardingRuleConfiguration**里 如下:

```java
package org.apache.shardingsphere.core.yaml.config.sharding;
......
public class YamlShardingRuleConfiguration implements YamlConfiguration {
    // tables 逻辑表名 - k 对应 sys_user, v对应其他
    private Map<String, YamlTableRuleConfiguration> tables = new LinkedHashMap();
    private Collection<String> bindingTables = new ArrayList();
    private Collection<String> broadcastTables = new ArrayList();
    private String defaultDataSourceName;
    private YamlShardingStrategyConfiguration defaultDatabaseStrategy;
    private YamlShardingStrategyConfiguration defaultTableStrategy;
    private YamlKeyGeneratorConfiguration defaultKeyGenerator;
    private Map<String, YamlMasterSlaveRuleConfiguration> masterSlaveRules = new LinkedHashMap();
    private YamlEncryptRuleConfiguration encryptRule;

   ......
}
```

&emsp;&emsp;**YamlTableRuleConfiguration**又包含了对应的表策略、库策略、表主键生成等。

```java
package org.apache.shardingsphere.core.yaml.config.sharding;
......

public class YamlTableRuleConfiguration implements YamlConfiguration {
    private String logicTable;
    private String actualDataNodes;
    // 分表策略
    private YamlShardingStrategyConfiguration databaseStrategy;
    // 分库策略
    private YamlShardingStrategyConfiguration tableStrategy;
    // 表主键生成
    private YamlKeyGeneratorConfiguration keyGenerator;
    private String logicIndex;
    
    ......
}
```

&emsp;&emsp;策略对象都是同一个类**YamlShardingStrategyConfiguration**,里面包含了5个ShardingStrategy配置

```java
package org.apache.shardingsphere.core.yaml.config.sharding;
......

public class YamlShardingStrategyConfiguration implements YamlConfiguration {
    private YamlStandardShardingStrategyConfiguration standard;
    private YamlComplexShardingStrategyConfiguration complex;
    private YamlHintShardingStrategyConfiguration hint;
    private YamlInlineShardingStrategyConfiguration inline;
    private YamlNoneShardingStrategyConfiguration none;
	......
}
```

&emsp;&emsp;对应文档中的3.1数据分片下的分片中的[分片策略](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/concept/sharding/) 5 种

![分片策略](/assets/img/ShardingJDBC/分片策略.png)

&emsp;&emsp;对应yml中的

&emsp;&emsp; `spring.shardingsphere.sharding.tables.sys_user.database-strategy`

&emsp;&emsp;与

&emsp;&emsp;`spring.shardingsphere.sharding.tables.sys_user.table-strategy`

&emsp;&emsp;这里的策略有5种,我在配置中只实现了两种,因为我是根据**飞哥**的文档进行学习的,其他几种就没尝试,以后有机会在补吧。

&emsp;&emsp;我这里常用的就是*inline*和*standard*。

&emsp;&emsp;inline 使用参考官网 [3.1.4. 其他功能](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/other-features/inline-expression/)

&emsp;&emsp;strategy 使用参考 *application-sub1.yml*中的strategy 

&emsp;&emsp;使用的策略类：[com.blacktea.shardingjdbc.config.BirthdayAlgorithm](https://gitee.com/zjydzyjs/spring-boot-use-case-collection/blob/master/spring-boot-sql/sharding-jdbc/src/main/java/com/blacktea/shardingjdbc/config/BirthdayAlgorithm.java#)

&emsp;&emsp;该类通过实现{@link org.apache.shardingsphere.api.sharding.standard.PreciseShardingAlgorithm}接口实现.
&emsp;&emsp;doSharding()方法的返回值就是你配置的库或表的实际sql名称。

&emsp;&emsp;strategy 其他实现方式,可以通过源码看到如下图(接口关系)。

![接口关系](/assets/img/ShardingJDBC/接口关系.png)

&emsp;&emsp;都是通过实现顶层接口 *ShardingAlgorithm*。

&emsp;&emsp;其实你从官网文档的 3.1.1. 核心概念 的 [分片](https://shardingsphere.apache.org/document/legacy/4.x/document/cn/features/sharding/concept/sharding/)也可以找到,如下图:

![核心概念-分片](/assets/img/ShardingJDBC/核心概念-分片.png)

&emsp;&emsp;分片算法有四种!

&emsp;&emsp;具体想要用那个根据自己的业务去决定吧!

### 数据库准备

​&emsp;&emsp;1. 准备两个及以上的数据库,我这里准备的是虚拟机-mysql和本地-mysql,你可以按自己的条件准备,只要存在两个库就行;

&emsp;&emsp;2. 数据库中需要存有相同且与yml中配置的满足库与表策略的表,

&emsp;&emsp;例如我这里的，如下:

![数据库图](/assets/img/ShardingJDBC/数据库图.png)

```mysql
# 创建语句,其他表就是名字不一样而已
CREATE TABLE `sys_user0` (
  `id` bigint NOT NULL,
  `user_name` varchar(255) NOT NULL COMMENT '账号名称',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `age` int DEFAULT NULL COMMENT '年龄',
  `date_birth` datetime DEFAULT NULL COMMENT '出生日期',
  `sex` int DEFAULT NULL COMMENT '1:男,2:女',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 单元测试效果（数据分片）

&emsp;&emsp;​我写了个用例：`com.blacktea.shardingjdbc.ShardingJdbcSub1Tests`。

```java
package com.blacktea.shardingjdbc;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.blacktea.shardingjdbc.entites.domain.SysUser;
import com.blacktea.shardingjdbc.service.SysUserService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.CollectionUtils;

import java.util.Date;
import java.util.List;

@SpringBootTest
@Slf4j
class ShardingJdbcSub1Tests {

    @Autowired
    private SysUserService sysUserService;

    public SysUser getUser(int ds_index,int table_index){
        SysUser sysUser = new SysUser();
        // ds 索引是根据 ds$->{sex % 2} # 分片算法表达式
        if (ds_index == 0){
            sysUser.setSex(2);
        }else {
            sysUser.setSex(1);
        }
        // table 索引 是根据 sys_user$->{age % 2} # 分片算法表达式
        if (table_index == 0){
            sysUser.setAge(22);
        }else {
            sysUser.setAge(23);
        }
        sysUser.setPassword("******");
        sysUser.setUserName("测试分库分表-"+sysUser.getSex()+"-"+sysUser.getAge());
        sysUser.setDateBirth(new Date());
        return sysUser;
    }

    @Test
//    @Transactional(rollbackFor = Exception.class)
    void createDs0_sysUser0(){
        SysUser user = this.getUser(0, 0);
        boolean save = sysUserService.save(user);
//        int i = 1/0;
        // 单库 Transactional 有效
    }

    @Test
    void createDs0_sysUser1(){
        SysUser user = this.getUser(0, 1);
        boolean save = sysUserService.save(user);
    }


    @Test
    void createDs1_sysUser0(){
        SysUser user = this.getUser(1, 0);
        boolean save = sysUserService.save(user);
    }

    @Test
    void createDs1_sysUser1(){
        SysUser user = this.getUser(1, 1);
        boolean save = sysUserService.save(user);
    }

    @Test
//    @Transactional(rollbackFor = Exception.class)
//    @ShardingTransactionType(TransactionType.XA)
    void batchAdd(){
        for (int i = 0; i < 10; i++) {
            if (i % 4 == 0){
                this.createDs0_sysUser0();
            }else if (i % 4 == 1){
                this.createDs0_sysUser1();
            }else if (i % 4 == 2){
                this.createDs1_sysUser0();
            }else {
                this.createDs1_sysUser1();
            }
        }
        //  @Transactional，这样跨库同样支持,不需要XA
//        int i = 1/0;
    }

    @Test
    void updateUser(){
        UpdateWrapper<SysUser> updateWrapper = new UpdateWrapper<>();
        updateWrapper.eq("age",22);
        // 测试根据age的为22并修改该集合判断如何修改多库多表的?
        // 从打印的sql可以发现,它是从配置中的所有 ds$.table$ 进行符合策略遍历修改
        // 结果并不会,只在原表基础上更新数据！
        updateWrapper.set("age",30);
        sysUserService.update(updateWrapper);
        // 结论：如果你要修改该策略值(不再匹配策略故障那种)怎么办?
        // 例如： table=sys_user+ age % 2 -> sys_user0表示偶数,sys_user1表示奇数
        // 1. 假如 库0-sys_user0中的age=22,你要改成23,那么你应该要换到库0-sys_user1中
        // 不换的话,以后再根据age=22就再也查不到这条数据了进行更改了,因为它根本不会匹配到该表
        // 本质的话: 该表不应该存在不同于该分表或分库策略的记录,即使是修改出来的也不应该存在!
    }

    /**
     * 与修改存在一样的问题
     */
    @Test
    void delete(){
        QueryWrapper<SysUser> query = new QueryWrapper<>();
        query.eq("age",22);
        sysUserService.remove(query);
    }

    @Test
    void list(){
        // 从打印的sql 日志可以发现它是从配置中的所有 ds$.table$ 进行遍历查询,最后将结果汇总
        QueryWrapper<SysUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("age",22);
        List<SysUser> list = sysUserService.list(queryWrapper);
        log.info("size:{},库查询全部数据:{}", list.size(), JSONUtil.toJsonStr(list));
    }

    @Test
    void page(){
        long current=1;
        long size=10;
        Page<SysUser> sysUserPage = new Page<>(current,size);
        do {
            sysUserPage = sysUserService.page(sysUserPage);
            List<SysUser> records = sysUserPage.getRecords();
            log.info("size:{},当前第{}页,数据:{}", records.size(), current,JSONUtil.toJsonStr(records));
            current++;
            sysUserPage.setCurrent(current);
        }while (!CollectionUtils.isEmpty(sysUserPage.getRecords()));

    }
}

```

### 新增

&emsp;&emsp;执行createDs0_sysUser0()，正常效果是在ds0的sys_user表生成一条数据,

![新增成功](/assets/img/ShardingJDBC/新增成功.png)

&emsp;&emsp;然后我又运行了 **createDs0_sysUser1()**和**createDs1_sysUser0()**，我就不放用例执行图了，直接放结果吧，如下图:

![新增结果](/assets/img/ShardingJDBC/新增结果.png)


### 修改

​&emsp;&emsp;那新增是按照策略不同进行分库分表的,那么修改、删除呢?
​来,上用例!

​![修改1](/assets/img/ShardingJDBC/修改1.png)

&emsp;&emsp;从sql日志中可以发现在两个库的四个表都执行了修改语句,当前修改根据 *user_name*,该值是没有配置在yml的库表策略里的;

&emsp;&emsp;那么我们换一下,换成有配置的 *age*进行测试。

![age测试修改](/assets/img/ShardingJDBC/age测试修改.png)

&emsp;&emsp;你会发现它就执行了age%2对应的表,这里也就是*sys_user0*,没有执行*sys_user1*,直接出现脏数据!

### 删除
![删除测试](/assets/img/ShardingJDBC/删除测试.png)

&emsp;&emsp;与修改一样存在相同问题!!!

### 查询

![查询测试结果](/assets/img/ShardingJDBC/查询测试结果.png)

&emsp;&emsp;与修改一样存在相同问题!!!

### 修改、删除、查询需注意

&emsp;&emsp;通过**修改**(包括删除、查询)的测试发现，好家伙，这不是完犊子了么？

&emsp;&emsp;如果我不小心使用未配置的字段进行所有表的修改，然后就会漏改一些配置不到的库表，额......。

&emsp;&emsp;所以进行更新的时候一定要注意是否是策略字段!

&emsp;&emsp;如果是策略字段，在修改策略字段对应值(表值)的时候，不要修改成非该表配置策略对应的值，这样会导致该条记录失去以该策略字段修改的功能!!!（因为匹配不到该表)!

&emsp;&emsp;怎么解决?

&emsp;&emsp;其实通过**Sharding-JDBC**查询是不会查出那些脏数据的,但是你自己在数据库中可以看到,这就很难受,不是吗!!!

&emsp;&emsp;其实这也是你自己操作的不规范,因为你自己配置了库表策略了,还这样进行修改、删除和查询!!!

&emsp;&emsp;1. 在修改完事后，根据策略进行移库移表等操作!

&emsp;&emsp;简单点,就是删除该数据,再插入该数据,会自动根据策略存储库表的。

&emsp;&emsp;2. 不要进行存有策略的字段的修改,就算修改也尽量修改为同样策略运算结果后同库同表的值!

&emsp;&emsp;简单点,就是 age%2 原本等于几现在就要等于几

&emsp;&emsp;3. 待大佬补充......

