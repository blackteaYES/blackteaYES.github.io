---
date: 2021-03-15
title: 基于Docker实现mysql主从配置
categories:
  - mysql主从配置
tag:
  - 运维
  - docker
  - mysql
  
order: 2  

---


# ![Docker](/assets/img/icons/docker.svg) 基于Docker实现mysql主从配置

## 版本

```docker
mysql - latest(8.0)
```

## 感谢

&emsp;&emsp;感谢B站**狂神说java**这个IP上上传的[视频资源](https://www.bilibili.com/video/BV1ei4y1K7dn?spm_id_from=333.999.0.0)

&emsp;&emsp;[主从复制报错2061：Authentication plugin 'caching_sha2_password' reported error:Authentication require secure connection - 墨天轮](https://www.modb.pro/db/29919)

&emsp;&emsp;[Docker搭建MySQL8主从复制 （全网最详细版）_bright的博客-CSDN博客](https://blog.csdn.net/qq_40942490/article/details/109158285)

&emsp;&emsp;[ShardingShpere数据库中间件- 专栏 -KuangStudy](https://www.kuangstudy.com/zl/sharding#1369645557613608962)

&emsp;&emsp;[ERROR1776(HY000):ParametersMASTER_LOG_FILE, MASTER_LOG_POS, RELAY_LOG_FILE and RELAY_LOG_POS can_小伟的博客-CSDN博客](https://blog.csdn.net/zhengwei125/article/details/79412857)

&emsp;&emsp;[@@GLOBAL.GTID_MODE = OFF 问题_wangxuelei036的博客-CSDN博客](https://blog.csdn.net/wangxuelei036/article/details/105848909)


---

## docker安装配置mysql

### 安装mysql

```shell
docker pull mysql:latest
```

&emsp;&emsp;选择你自己需要安装的mysql版本,这这里选择的是最新的(latest),对应 **8.0**,版本这里包含了一个连接的坑,我下文会讲!

&emsp;&emsp;如果你不是使用**Docker**进行安装,而是直接在linux下安装mysql,我[推荐教程](https://www.kuangstudy.com/zl/sharding#1369621064673521666) - [（02~03）](https://www.kuangstudy.com/zl/sharding#1369621064673521666)

&emsp;&emsp;该博客是**KaungStudy**飞哥提供的文档。

---


### mysql 是否安装成功?

```shell
# 查看安装成功的镜像
docker images
```

![查看docker已安装镜像](/assets/img/基于Docker配置mysql主从复制/查看docker已安装镜像.png)

&emsp;&emsp;存在**mysql**红框内容就表示安装成功!

---

### mysql 启动

```shell
docker run -p 3306:3306 --name mysql-master -e MYSQL_ROOT_PASSWORD=12345678 -d mysql:latest
```

>run : 启动
>
>-p 3306:3306 : 指定映射端口, -p 外部端口:内部端口(容器内部)
>
>--name mysql-master ：给容器起别名,起个名称方便以后称呼(我用的主-mysql是mymysql)
>
>-e MYSQL_ROOT_PASSWORD=12345678 : 设置root用户的密码
>
>-d : 后台运行
>
>mysql:latest ： mysql:tag,tag就是你选择的msyql版本号

---

### 查看mysql容器是否启动成功?

&emsp;&emsp;mysql启动成功后,会打印出当前运行容器的id或者你自己查看容器状态!

```shell
docker ps
```

![查看正在运行的容器列表](/assets/img/基于Docker配置mysql主从复制/查看正在运行的容器列表.png)

&emsp;&emsp;这样的就表示启动成功了。


## msyql配置主从数据库

### mysql共同配置

&emsp;&emsp;先进入 mysql容器内部,这里我的主mysql叫**mymysql**,命令如下:

```shell
docker exec -it mymysql /bin/bash
```

![进入容器](/assets/img/基于Docker配置mysql主从复制/进入容器.png)

&emsp;&emsp;可以看到下一行的**root@**已经不一样了,并且该id就是你当前进入的容器的容器id,

&emsp;&emsp;查看容器内部配置文件所在,我已经把my.cnf所在截图了,如下图:

![my.cnf路径](/assets/img/基于Docker配置mysql主从复制/my.cnf路径.png)

&emsp;&emsp;`/etc/mysql/my.cnf` (这个有用!)

&emsp;&emsp;OK，我感觉我是不是废话太多了,那我们下面就加快进度吧!

&emsp;&emsp;拿到路径之后,我们先进入**my.cnf**。

![vim进入my.conf](/assets/img/基于Docker配置mysql主从复制/vim进入my.conf.png)

&emsp;&emsp;好吧,容器内部没装vim,你可以自己去安装。

```shell
apt-get update

apt-get install vim
```

&emsp;&emsp;我就没有这么去安装了我直接用了**docker cp**

---

### 使用 docker cp 配置 my.cnf

1. 将my.cnf 从容器复制到主机上。

   ```shell
   docker cp 容器id(或容器名称):/etc/mysql/my.cnf /docker/mysql/master(或slavel1)/my.cnf
   ```

   将容器id或名称为XXX的容器在  /etc/mysql/my.cnf 复制给主机路径下的/docker/mysql/master/my.cnf文件。

   

2. 修改my.cnf(添加对应的主从配置)。

   ```shell
   # 主节点如下:
   [mysqld]
   ## 同一局域网内注意要唯一
   server-id=100  
   ## 开启二进制日志功能，可以随便取（关键）
   log-bin=master-bin
   binlog-format=ROW     // 二级制日志格式，有三种 row，statement，mixed
   binlog-do-db=数据库名  //同步的数据库名称,如果不配置，表示同步所有的库
   ```

   ```shell
   # 从节点如下:
   [mysqld]
   # 设置server_id,注意要唯一
   server-id=201  
   # 开启二进制日志功能，以备Slave作为其它Slave的Master时使用
   log-bin=mysql-slave-bin   
   # relay_log配置中继日志
   relay_log=mysql-relay-bin  
   # 设置为只读,该项如果不设置，表示slave可读可写
   read_only=1  
   ```

   注意每个主从节点的server-id都要唯一!!!

   

3. 将修改后的my.cnf复制回容器中。

   ```shell
   docker cp /docker/mysql/master(或slavel1)/my.cnf 容器id(或容器名称):/etc/mysql/my.cnf 
   ```

   就是和步骤1的指令路径反一下。

   

4. 重启服务

   ```shell
   docker restart 容器名称/容器id
   ```

---

### master(主)配置

&emsp;&emsp;经过共同配置之后呢,我们先进入主-mysql中,查看对应配置从节点需要的信息。



#### 进入mysql内部

```shell
# 进入容器内部
docker exec -it 容器id/容器名称 /bin/bash
# 进入mysql
mysql -uroot -p密码
```

![进入master-mysql](/assets/img/基于Docker配置mysql主从复制/进入master-mysql.png)

&emsp;&emsp;登录成功

---

#### 查看master服务的binlog文件名和位置(master节点执行)

```mysql
show master status;
```

![master服务的binlog文件名和位置](/assets/img/基于Docker配置mysql主从复制/master服务的binlog文件名和位置.png)

&emsp;&emsp;OK，接下来配置从节点。

---

### slave(从)配置

&emsp;&emsp;它一开始的步骤和主的一样,都是共同配置,唯一不一样的是修改 **my.cnf**不一样,请注意!

&emsp;&emsp;这里的内容已经在[共同配置](#mysql共同配置)里面写了。


#### 进入mysql内部

```shell
# 进入容器内部
docker exec -it 容器id/容器名称 /bin/bash
# 进入mysql
mysql -uroot -p密码
```

![进入slave1-mysql](/assets/img/基于Docker配置mysql主从复制/进入slave1-mysql.png)

&emsp;&emsp;登录成功。

---

#### 执行 change master to

```mysql
change master to master_user='root',master_password='mysql8.0',master_host='192.168.168.101',master_port=3306,get_master_public_key=1, master_log_file='master-bin.000004', master_log_pos=1097, master_connect_retry=30;

```

> master_host ：Master库的地址。

>
> master_port：Master的端口号，指的是容器的端口号。

>
> master_user：用于数据同步的用户。

>
> master_password：用于同步的用户的密码。

>
> master_log_file：指定 Slave 从哪个日志文件开始复制数据，即上文中提到的 File 字段的值。

>
> master_log_pos：从哪个 Position 开始读，即上文中提到的 Position 字段的值。

>
> master_connect_retry：如果连接失败，重试的时间间隔，单位是秒，默认是60秒。

>
> get_master_public_key=1: 解决 **Authentication plugin 'caching_sha2_password' reported error:Authentication require secure connection** 问题导致的密码插件问题 - msyql8.0才出现的问题。
>

> 注意: 当前字段中说的文中指的是 在锚点 - **查看master服务的binlog文件名和位置(master节点执行)**那里查询出来的主节点信息。

---

### 启动slave

```msyql
start slave;
```

---

### 查看是否配置成功?

```mysql
show slave status \G
```

&emsp;&emsp;\G : 表示换行。

![查询从节状态](/assets/img/基于Docker配置mysql主从复制/查询从节状态.png)

&emsp;&emsp;两个 YES 就成功了!

---

### 配置从节点时,出现的各种问题?

&emsp;&emsp;**飞哥**这里已经例举了一大部分,我就不一一讲了,放置传送门: https://www.kuangstudy.com/zl/sharding#1369645557613608962

---

#### 我讲一下我的主机配置时出现的问题?

&emsp;&emsp;1.  **Authentication plugin 'caching_sha2_password' reported error:Authentication require secure connection** 问题导致的密码插件问题 - msyql8.0才出现的问题。

   &emsp;&emsp;从配置锚点 - **执行 change master to**里已经加上了该解决的配置了,看 get_master_public_key=1，从[博客](https://www.modb.pro/db/29919)中得到的解决方法(在评论那块)。

---

&emsp;&emsp;2. No query specified

&emsp;&emsp;show slave status\G; 

&emsp;&emsp;多了个分号(`;`)。

---

&emsp;&emsp;3. The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).

   &emsp;&emsp;因为我的从节点连接主节点配置那里的ip地址配置错了。



&emsp;&emsp;4. Parameters MASTER_LOG_FILE, MASTER_LOG_POS, RELAY_LOG_FILE and RELAY_LOG_POS can

   &emsp;&emsp;由于之前用的master_auto_position=1，现在改回0，重新用pos方法change就可以了。

   ```mysql
   # 停止slave
   stop slave;
   # 清楚配置
   reset slave;
   change master to master_auto_position=0;
   change master to master_user='root',master_password='mysql8.0',master_host='192.168.168.101',master_port=3306,get_master_public_key=1, master_log_file='master-bin.000004', master_log_pos=1097, master_connect_retry=30;
   # 启动slave
   start slave;
   ```

---

### 使用 root用户 造成从(slavel-mysql)服务器可以操作数据（crud）?
影响: 一不小心就可能造成主从数据不一致!

[mysql从库不能写吗_mysql的主从复制，从库设为只读不能写_L NEO的博客-CSDN博客](https://blog.csdn.net/weixin_36434967/article/details/113311189)

&emsp;&emsp;我建议给从库分配一个普通用户账号并仅分配对应权限!

```mysql
# 例如以下,创建一个名称为 'username' 密码为 'password' 且任何ip都可以连接的账号 
create user 'username'@'%' identified by 'password';
# 分配权限,例如我只给他 SELECT 权限
grant select on *.* to 'username'@'%';
# 需要刷新
flush privileges;
# 查看效果
show grants for 'username'@'%';

```


![查看权限](/assets/img/基于Docker配置mysql主从复制/查看权限.png)

&emsp;&emsp;然后你就可以自己去测试了，如果先看账号创建成功了吗?

```mysql
# 查询 mysql 库下的用户表信息
select host,user from mysql.user;
```

![查看用户表信息](/assets/img/基于Docker配置mysql主从复制/查看用户表信息.png)

&emsp;&emsp;权限分配成功后,我这边使用**navicat**对'username'账号进行登录,并(修改、新增、删除)数据,出现下图错误信息!

![无权限提示](/assets/img/基于Docker配置mysql主从复制/无权限提示.png)



