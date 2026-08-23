---
date: 2026-08-22
title: Arthas基础使用-AI整理版
categories:
  - arthas
tag:
  - 运维
  - bug
footer: Arthas基础使用-AI整理版

---
# ![Java](/assets/img/icons/java.svg) Arthas基础使用-AI整理版

> 基于 [Arthas基础使用](./arthas.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这份笔记怎么读

原文是一篇“跟着截图一步步做”的安装教程，信息量很大但藏在截图和长输出里。这份整理版把它重组成三块：

1. 安装与快速入门：把截图步骤提炼成可以直接复制的命令块
2. 命令速查表：一张表看完所有命令的用途和关键用法
3. 排查场景：按“遇到什么问题用哪个命令”重新组织

如果是第一次用 Arthas，建议按顺序读；如果只是临时排查问题，直接跳到「四、按排查场景用命令」。

| 你想做什么 | 建议看的章节 |
| --- | --- |
| 装好 Arthas 并跑通第一个例子 | 一、安装与卸载 + 二、快速入门 |
| 临时查一个命令怎么用 | 三、命令速查表 |
| 排查 CPU、线程、类加载、方法返回值 | 四、按排查场景用命令 |
| 清屏、翻历史、退出 | 五、基础命令行 |
| 复习 | 六、一页总结 |

关于截图：原文的安装部分大多是过程性截图（下载进度、资源目录等），本文只保留了少量能说明"成功状态"和"输出长什么样"的代表性截图，步骤本身改用命令块表达。

## Arthas 是什么

Arthas（阿尔萨斯）是阿里巴巴开源的 Java 诊断工具。它以 jar 包方式启动，attach 到目标 Java 进程上，就可以在不重启应用的情况下查看线程、内存、类、方法执行等信息。

| 资源 | 地址 |
| --- | --- |
| 官网 | <https://arthas.aliyun.com/> |
| Gitee | <https://gitee.com/arthas/arthas> |
| GitHub | <https://github.com/alibaba/arthas> |

---

## 一、安装与卸载

### 1. 安装的核心就两步

```shell
# 下载 arthas-boot.jar
curl -O https://alibaba.github.io/arthas/arthas-boot.jar

# 启动（前提：机器上已经有正在运行的 java 进程）
java -jar arthas-boot.jar
```

启动后会列出当前机器上的 Java 进程，输入编号（如 `1`）开始监控。第一次使用会自动下载 Arthas 相关资源包。

下载完成后，用户目录下会多出两个文件夹：

- `.arthas`：Arthas 的资源目录（Linux root 用户在 `/root/.arthas/lib/3.6.6/arthas`）
- `logs`：日志目录

选择进程后，界面出现 `ARTHAS` 图标和 `arthas` 命令前缀（如 `[arthas@5773]$`），就表示监听进程成功。

![进程监听成功](/assets/img/arthas/进程监听成功.png)

### 2. Windows 安装

Windows 下没有额外差异，在 cmd 里先通过 curl 下载，然后**先启动一个 java 程序**，再启动 arthas-boot：

```shell
curl -O https://alibaba.github.io/arthas/arthas-boot.jar
java -jar arthas-boot.jar
```

启动 arthas-boot 后会列出机器上的 java 进程，选择 `1`，程序会自动进行 arthas 相关资源下载。出现提示后，就可以在 C 盘用户目录下发现两个文件夹：`.arthas` 和 `logs`。

### 3. Linux（Ubuntu）安装的三个坑

原文在 Ubuntu 上安装时踩了三个坑，值得记住。

#### 坑一：没有 curl

```shell
apt install curl
```

如果安装 curl 时报错“无法获得锁 /var/lib/dpkg/lock-frontend - open (11: 资源暂时不可用)”，说明有别的 apt 进程占着锁。先查出 apt 进程再杀掉：

```shell
ps -e | grep apt
```

**注意：杀死进程后有可能出现新的进程，所以杀死后要再次查询，确保没有 apt 进程在运行，然后再安装 curl。**

#### 坑二：启动时找不到进程

启动 `arthas-boot.jar` 可能出现找不到进程的情况，这时要在指令后面直接加上需要监控的进程 ID：

```shell
java -jar arthas-boot.jar 35724
```

#### 坑三：只装了 jre，报缺少 tools.jar

如果机器上只有 jre 没有 jdk，启动会报缺少 `tools.jar`，重新安装 jdk 即可：

```shell
apt install openjdk-8-jdk
```

**注意：安装目录最好与 jre 相同（如都在 `/usr/lib/jvm/java-8-openjdk-amd64` 下），否则很可能需要重新进行 java 配置。**

装好 jdk 后重新执行启动指令，能正常出现进程选择列表就表示安装成功，选择进程（如 `1`）后即可开始监控。

### 4. 离线安装

内网环境可以提前下载好包再拷贝进去：

| 资源 | 地址 |
| --- | --- |
| 官网下载页（CloudShell/全量下载） | <https://arthas.aliyun.com/doc/download.html> |
| maven 下载最新版 | <https://arthas.aliyun.com/download/latest_version?mirror=aliyun> |
| 离线文档 | <https://arthas.aliyun.com/download/doc/latest_version?mirror=aliyun> |

### 5. 卸载

直接删除 Arthas 相关的资源包就可以了（即前文的 `.arthas` 等目录）。

---

## 二、快速入门：math-game

math-game 是官网用例：一个简单的程序，每隔一秒生成一个随机数，执行质因数分解，并打印分解结果。拿它练手最合适。

源码：[MathGame.java](https://github.com/alibaba/arthas/blob/master/math-game/src/main/java/demo/MathGame.java)

```shell
# 1. 下载并启动示例程序
curl -O https://arthas.aliyun.com/math-game.jar
java -jar math-game.jar

# 2. 另开一个终端，启动 arthas
java -jar arthas-boot.jar
```

然后选择选项 `1` 开始监控：

![math-game程序开始监控](/assets/img/arthas/math-game程序开始监控.png)

### 端口冲突怎么办

如果启动时报端口冲突，可以指定端口启动：

```shell
java -jar arthas-boot.jar --telnet-port 9998 --http-port -1
```

### 用浏览器访问控制台

启动成功后，可以通过浏览器访问 Arthas 控制台。浏览器地址在启动 Arthas 监控时的输出里可以看到。

![浏览器访问Arthas控制台](/assets/img/arthas/浏览器访问athas控制台.png)

小结：整套流程就是“示例程序 + arthas-boot”两个 jar，先跑程序再 attach；端口冲突换端口，想看图形界面就走浏览器控制台。

---

## 三、命令速查表

原文实际展开讲解过的命令，一张表速查（文档列均为官网地址）：

| 命令 | 作用 | 关键用法 | 文档 |
| --- | --- | --- | --- |
| `dashboard` | 当前进程的数据总览（线程、内存、GC 等） | `dashboard`，`q` 或 `Ctrl+C` 中断 | [文档](https://arthas.aliyun.com/doc/dashboard.html) |
| `thread` | 查看线程信息、线程堆栈 | `thread`、`thread -n 3`、`thread -b`、`thread --state WAITING` | [文档](https://arthas.aliyun.com/doc/thread.html) |
| `jad` | 反编译指定类 | `jad demo.MathGame` | [文档](https://arthas.aliyun.com/doc/jad.html) |
| `watch` | 观察方法的入参、返回值、异常 | `watch demo.MathGame primeFactors returnObj` | [文档](https://arthas.aliyun.com/doc/watch.html) |
| `jvm` | 查看当前 JVM 的整体信息 | `jvm` | [文档](https://arthas.aliyun.com/doc/jvm.html) |
| `sysprop` | 查看、修改系统属性（System Property） | `sysprop java.version`、`sysprop user.country CN` | [文档](https://arthas.aliyun.com/doc/sysprop.html) |
| `sysenv` | 查看环境变量（System Environment Variables） | `sysenv USER` | [文档](https://arthas.aliyun.com/doc/sysenv.html) |
| `vmoption` | 查看、更新 VM 诊断参数 | `vmoption PrintGC true` | [文档](https://arthas.aliyun.com/doc/vmoption.html) |
| `getstatic` | 查看类的静态属性 | `getstatic demo.MathGame random` | [文档](https://arthas.aliyun.com/doc/getstatic.html) |
| `ognl` | 执行 OGNL 表达式 | `ognl '@demo.MathGame@random'` | [文档](https://arthas.aliyun.com/doc/ognl.html) |
| `sc` | 搜索 JVM 已加载的类（Search-Class） | `sc demo.*`、`sc -d demo.MathGame` | [文档](https://arthas.aliyun.com/doc/sc.html) |
| `help` | 查看命令列表和具体命令的用法 | `help` | [文档](https://arthas.aliyun.com/doc/help.html) |
| `cat` | 打印文件内容，类似 linux 的 cat | `cat helloArthas.txt` | [文档](https://arthas.aliyun.com/doc/cat.html) |
| `grep` | 管道过滤，类似传统 grep | `sysprop \| grep java -n` | [文档](https://arthas.aliyun.com/doc/grep.html) |
| `pwd` | 返回当前工作目录 | `pwd` | [文档](https://arthas.aliyun.com/doc/pwd.html) |
| `cls` | 清空当前屏幕区域 | `cls` | [文档](https://arthas.aliyun.com/doc/cls.html) |
| `session` | 查看当前会话信息 | `session` | [文档](https://arthas.aliyun.com/doc/session.html) |
| `reset` | 重置增强类，还原被 Arthas 增强过的类 | `reset` | [文档](https://arthas.aliyun.com/doc/reset.html) |
| `version` | 输出目标 Java 进程加载的 Arthas 版本号 | `version` | [文档](https://arthas.aliyun.com/doc/version.html) |
| `history` | 打印命令历史 | `history 10`、`history -c` | [文档](https://arthas.aliyun.com/doc/history.html) |
| `keymap` | 输出快捷键映射表 | `keymap` | [文档](https://arthas.aliyun.com/doc/keymap.html) |
| `stop` / `exit` / `quit` | 退出 Arthas（两种退出粒度） | 见「退出与还原」 | [stop](https://arthas.aliyun.com/doc/stop.html) / [quit](https://arthas.aliyun.com/doc/quit.html) |

此外，`help` 的输出里还能看到一批原文未展开的命令（`monitor`、`stack`、`trace`、`tt`、`heapdump`、`profiler`、`vmtool`、`jfr`、`mc`、`redefine` 等），需要时去官网文档查即可，本文不展开。

---

## 四、按排查场景用命令

这一章把原文的命令按“排查什么问题”重新分组。每个场景都基于原文实际演示过的用法。

### 场景 1：先看进程整体状况 → dashboard

`dashboard` 用 help 里的说法是 "Overview of target jvm's thread, memory, gc, vm, tomcat info"，即目标 JVM 的线程、内存、GC、VM 等信息总览。

输入 `dashboard` 回车，会展示当前进程的信息；按 `Ctrl+C` 或 `q` 可以中断执行。

![dashboard](/assets/img/arthas/dashboard.png)

线程区域各列的含义：

| 列 | 含义 |
| --- | --- |
| ID | Java 级别的线程 ID。注意不能和 jstack 里的 nativeID 一一对应 |
| NAME | 线程名 |
| GROUP | 线程组名 |
| PRIORITY | 线程优先级，1~10 之间的数字，越大优先级越高 |
| STATE | 线程的状态 |
| CPU% | 线程的 cpu 使用率。比如采样间隔 1000ms，某线程增量 cpu 时间为 100ms，则 cpu 使用率 = 100/1000 = 10% |
| DELTA_TIME | 上次采样之后线程运行的增量 CPU 时间，单位为秒 |
| TIME | 线程运行总 CPU 时间，格式为`分:秒` |
| INTERRUPTED | 线程当前的中断位状态 |
| DAEMON | 是否是 daemon 线程 |

![dashboard内容描述](/assets/img/arthas/dashboard内容描述.png)

小结：

- `dashboard` 是每次排查的起点，先看全局再下钻
- 最常盯的三列：CPU%、STATE、TIME
- 它是总览，不是终点——发现异常线程后，交给 `thread` 下钻

### 场景 2：CPU 飙高、线程阻塞怎么查 → thread

排查思路：先在 `dashboard` 里看哪几个线程 CPU% 高或状态异常，再用 `thread` 看具体线程的堆栈。

`thread` 用来查看当前线程信息、查看线程的堆栈：

| 参数 | 说明 |
| --- | --- |
| id | 线程 id |
| [n:] | 指定最忙的前 N 个线程并打印堆栈 |
| [b] | 找出当前阻塞其他线程的线程 |
| [i `<value>`] | 指定 cpu 使用率统计的采样间隔，单位毫秒，默认值 200 |
| [--all] | 显示所有匹配的线程 |

![thread示例](/assets/img/arthas/thread示例.png)

还可以按状态查线程，比如查询处于等待状态的线程：

```shell
thread --state WAITING
```

![查询处于等待状态的线程](/assets/img/arthas/查询处于等待状态的线程.png)

小结：

- CPU 飙高：`dashboard` 找到高 CPU% 的线程 ID → `thread <id>` 看堆栈
- 想直接看最忙线程：`thread -n <N>`
- 线程互相卡住：`thread -b` 找阻塞源头
- 统计口径不满意：用 `-i` 调整采样间隔

### 场景 3：怀疑运行的类不是最新代码、或来自别的 jar → jad

`jad` 用来反编译类，写法是“jad + 包名.类名”。它的输出里有三块关键信息：

```text
[arthas@5773]$ jad demo.MathGame

# 类加载器
ClassLoader:
+-sun.misc.Launcher$AppClassLoader@74a14482
  +-sun.misc.Launcher$ExtClassLoader@12a3a380

# 这个类所在的 jar 包位置
Location:
/home/blacktea/%e6%a1%8c%e9%9d%a2/arthas/math-game.jar

# 反编译出的源码（节选）
package demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class MathGame {
    private static Random random = new Random();
    private int illegalArgumentCount = 0;

    public List<Integer> primeFactors(int number) {
        if (number < 2) {
            ++this.illegalArgumentCount;
            throw new IllegalArgumentException("number is: " + number + ", need >= 2");
        }
        ArrayList<Integer> result = new ArrayList<Integer>();
        int i = 2;
        while (i <= number) {
            if (number % i == 0) {
                result.add(i);
                number /= i;
                i = 2;
                continue;
            }
            ++i;
        }
        return result;
    }

    public static void main(String[] args) throws InterruptedException {
        MathGame game = new MathGame();
        while (true) {
            game.run();
            TimeUnit.SECONDS.sleep(1L);
        }
    }

    public void run() throws InterruptedException {
        try {
            int number = random.nextInt() / 10000;
            List<Integer> primeFactors = this.primeFactors(number);
            MathGame.print(number, primeFactors);
        }
        catch (Exception e) {
            System.out.println(String.format("illegalArgumentCount:%3d, ", this.illegalArgumentCount) + e.getMessage());
        }
    }
    // ...省略 print 方法
}

Affect(row-cnt:1) cost in 678 ms.
```

排查时主要看：

1. `ClassLoader`：这个类是被哪个类加载器加载的
2. `Location`：这个类来自哪个 jar 包——“怀疑加载了旧版本 jar / 冲突 jar”时先看这里
3. 源码：确认线上运行的到底是不是你改过的代码

小结：

- 写法就是 `jad 全限定类名`，输出自带类加载器和 jar 定位
- 反编译不需要源码包，线上没有源码也能看
- 和 `sc -d` 配合：jad 看代码，sc 看加载信息

### 场景 4：方法到底返回了什么、有没有抛异常 → watch

`watch` 可以查看指定函数的返回值。比如查看 `demo.MathGame#primeFactors`：

```shell
watch demo.MathGame primeFactors returnObj
```

输出示例（节选）：

```text
Press Q or Ctrl+C to abort.
Affect(class count: 1 , method count: 1) cost in 94 ms, listenerId: 1
method=demo.MathGame.primeFactors location=AtExit
ts=2022-10-14 19:07:12; [cost=0.623656ms] result=@ArrayList[
    @Integer[2],
    @Integer[2],
    @Integer[2],
    @Integer[2],
    @Integer[3],
    @Integer[3],
    @Integer[7],
    @Integer[181],
]
method=demo.MathGame.primeFactors location=AtExceptionExit
ts=2022-10-14 19:07:13; [cost=0.105696ms] result=null
method=demo.MathGame.primeFactors location=AtExceptionExit
ts=2022-10-14 19:07:14; [cost=0.038471ms] result=null
method=demo.MathGame.primeFactors location=AtExit
ts=2022-10-14 19:07:16; [cost=0.143085ms] result=@ArrayList[
    @Integer[6637],
]
method=demo.MathGame.primeFactors location=AtExit
ts=2022-10-14 19:07:17; [cost=0.073486ms] result=@ArrayList[
    @Integer[3],
    @Integer[3],
    @Integer[5],
    @Integer[2467],
]
```

watch 会持续输出：方法每被调用一次，就打印一条记录。

看输出的三个要点：

- `location=AtExit`：方法正常返回
- `location=AtExceptionExit`：方法抛异常退出（上面示例中 result 为 null）
- `cost`：这次调用耗时

小结：

- 命令格式：`watch 类名 方法名 观察点`
- 不用写日志、不用重启，方法每次被调用都能看到结果
- 同一份输出里同时能看到正常返回和异常退出，适合排查“偶发异常”

### 场景 5：JVM 整体状况怎么样 → jvm

`jvm` 一条命令输出目标 JVM 的全部关键信息，输出是分块的：

| 分块 | 内容 |
| --- | --- |
| RUNTIME | JVM 启动时间、VM 名称/版本、CLASS-PATH、LIBRARY-PATH 等 |
| CLASS-LOADING | 已加载类数量（LOADED-CLASS-COUNT）、总共加载过（TOTAL-LOADED-CLASS-COUNT）、已卸载（UNLOADED-CLASS-COUNT） |
| COMPILATION | JIT 编译器名称、总编译时间 |
| GARBAGE-COLLECTORS | 各个 GC 的名称、回收次数（collectionCount）和耗时（collectionTime），如 PS Scavenge、PS MarkSweep |
| MEMORY-MANAGERS | 内存管理器与它管理的内存区域的对应关系 |
| MEMORY | 堆（HEAP-MEMORY-USAGE）与非堆（NO-HEAP-MEMORY-USAGE）的 init/used/committed/max，以及 PENDING-FINALIZE-COUNT |
| OPERATING-SYSTEM | 操作系统、架构、CPU 数量、负载 |
| THREAD | 线程计数，见下表 |
| FILE-DESCRIPTOR | 文件描述符，见下 |

THREAD 相关指标（判断线程泄漏、死锁看这里）：

- COUNT：JVM 当前活跃的线程数
- DAEMON-COUNT：JVM 当前活跃的守护线程数
- PEAK-COUNT：从 JVM 启动开始曾经活着的最大线程数
- STARTED-COUNT：从 JVM 启动开始总共启动过的线程次数
- DEADLOCK-COUNT：JVM 当前死锁的线程数

文件描述符相关：

- MAX-FILE-DESCRIPTOR-COUNT：JVM 进程最大可以打开的文件描述符数
- OPEN-FILE-DESCRIPTOR-COUNT：JVM 当前打开的文件描述符数

实际输出示例（节选，帮助对照分块）：

```text
[arthas@8044]$ jvm
 RUNTIME
 MACHINE-NAME            8044@blacktea-virtual-machine
 JVM-START-TIME          2022-10-15 00:04:33
 VM-NAME                 OpenJDK 64-Bit Server VM
 VM-VERSION              25.342-b07
 CLASS-PATH              math-game.jar
 // ...

 CLASS-LOADING
 LOADED-CLASS-COUNT      3951
 TOTAL-LOADED-CLASS-COUNT 3951
 UNLOADED-CLASS-COUNT    0

 COMPILATION
 NAME                    HotSpot 64-Bit Tiered Compilers
 TOTAL-COMPILE-TIME      1063 [time (ms)]

 GARBAGE-COLLECTORS
 PS Scavenge             collectionCount : 5
 [count/time (ms)]       collectionTime : 37
 PS MarkSweep            collectionCount : 1
 [count/time (ms)]       collectionTime : 21

 MEMORY
 HEAP-MEMORY-USAGE       init : 65011712(62.0 MiB)
 [memory in bytes]       used : 40636872(38.8 MiB)
                         committed : 79167488(75.5 MiB)
                         max : 910163968(868.0 MiB)
 NO-HEAP-MEMORY-USAGE    used : 31325976(29.9 MiB)

 OPERATING-SYSTEM
 OS                      Linux
 PROCESSORS-COUNT        2
 LOAD-AVERAGE            0.09

 THREAD
 COUNT                   14
 DAEMON-COUNT            13
 PEAK-COUNT              15
 STARTED-COUNT           18
 DEADLOCK-COUNT          0

 FILE-DESCRIPTOR
 MAX-FILE-DESCRIPTOR-COUNT    1048576
 OPEN-FILE-DESCRIPTOR-COUNT   74
```

小结：

- 一条 `jvm` 命令顶一组 jinfo/jstat 查询，输出按分块组织
- 怀疑线程泄漏：盯 COUNT 和 PEAK-COUNT 的差距
- 怀疑死锁：直接看 DEADLOCK-COUNT 是否大于 0
- 怀疑文件句柄泄漏：看 OPEN-FILE-DESCRIPTOR-COUNT 是否持续增长

### 场景 6：查系统属性、环境变量 → sysprop、sysenv

`sysprop` 查看当前 JVM 的系统属性（System Property），既能看也能改，官方给的使用参考是 `sysprop [-h] [property-name] [property-value]`：

```shell
sysprop                  # 查看所有属性
sysprop java.version     # 查看单个属性
sysprop user.country CN  # 修改单个属性
```

查看单个属性的输出：

```text
[arthas@8044]$ sysprop java.version
 KEY                                            VALUE
------------------------------------------------------------------------
 java.version                                   1.8.0_342
```

修改单个属性的输出：

```text
[arthas@8044]$ sysprop user.country CN
Successfully changed the system property.
 KEY                                            VALUE
------------------------------------------------------------------------
 user.country                                   CN
```

配合 `grep` 还可以只看关心的部分，例如只显示 java 相关的系统信息：

```shell
sysprop | grep java -n
```

```text
5:  java.specification.version        1.8
8:  java.class.path                   math-game.jar
17: sun.boot.library.path             /usr/lib/jvm/java-8-openjdk-amd64/jre/lib/amd64
23: java.home                         /usr/lib/jvm/java-8-openjdk-amd64/jre
43: java.version                      1.8.0_342
// ...
```

`sysenv` 查看当前 JVM 的环境变量（System Environment Variables），官方给的使用参考是 `sysenv [-h] [env-name]`，原文演示了查看用法：

```shell
sysenv        # 查看所有环境变量
sysenv USER   # 查看单个环境变量
```

```text
[arthas@2951]$ sysenv USER
 KEY                                VALUE
------------------------------------------------------------------------
 USER                               root
```

小结：

- `sysprop` 管 System Property，可查可改
- `sysenv` 管环境变量，用来查
- 两者都支持“不带参数看全部、带参数看单个”，配合 `grep` 过滤最顺手

实际排查中，`file.encoding`、`java.home`、`JAVA_HOME`、`CLASSPATH` 这类值经常和预期不一致，先想到这两个命令。

### 场景 7：临时打开 GC 日志等 VM 诊断参数 → vmoption

`vmoption` 查看、更新 VM 诊断相关的参数，不用重启进程：

```shell
vmoption               # 查看所有 option
vmoption PrintGC       # 查看指定 option
vmoption PrintGC true  # 更新指定 option
```

输出列含义：KEY（参数名）、VALUE（当前值）、ORIGIN（来源，如 DEFAULT）、WRITEABLE（是否可写）。查看所有 option 的输出（节选）：

```text
[arthas@3540]$ vmoption
 KEY                              VALUE    ORIGIN    WRITEABLE
------------------------------------------------------------------------
 HeapDumpBeforeFullGC             false    DEFAULT   true
 HeapDumpAfterFullGC              false    DEFAULT   true
 HeapDumpOnOutOfMemoryError       false    DEFAULT   true
 HeapDumpPath                              DEFAULT   true
 PrintGC                          false    DEFAULT   true
 PrintGCDetails                   false    DEFAULT   true
 PrintGCDateStamps                false    DEFAULT   true
 PrintGCTimeStamps                false    DEFAULT   true
 PrintGCID                        false    DEFAULT   true
 PrintClassHistogramBeforeFullGC  false    DEFAULT   true
 PrintClassHistogramAfterFullGC   false    DEFAULT   true
 PrintClassHistogram              false    DEFAULT   true
 MinHeapFreeRatio                 0        DEFAULT   true
 MaxHeapFreeRatio                 100      DEFAULT   true
 PrintConcurrentLocks             false    DEFAULT   true
```

更新指定 option 的输出：

```text
[arthas@3540]$ vmoption PrintGC true
Successfully updated the vm option.
 NAME     BEFORE-VALUE  AFTER-VALUE
------------------------------------
 PrintGC  false         true
```

小结：线上想临时看 GC 情况，`vmoption PrintGC true`、`vmoption PrintGCDetails true` 动态打开即可，不用改启动参数重启进程。

### 场景 8：看静态字段、执行任意表达式 → getstatic、ognl

#### getstatic

通过 `getstatic` 可以方便地查看类的静态属性，用法 `getstatic class_name field_name`：

```shell
getstatic demo.MathGame random
```

输出示例：

```text
field: random
@Random[
    serialVersionUID=@Long[3905348978240129619],
    seed=@AtomicLong[195428618683892],
    multiplier=@Long[25214903917],
    addend=@Long[11],
    mask=@Long[281474976710655],
    DOUBLE_UNIT=@Double[1.1102230246251565E-16],
    BadBound=@String[bound must be positive],
    BadRange=@String[bound must be greater than origin],
    BadSize=@String[size must be non-negative],
    seedUniquifier=@AtomicLong[-3282039941672302964],
    nextNextGaussian=@Double[0.0],
    haveNextNextGaussian=@Boolean[false],
    serialPersistentFields=@ObjectStreamField[][isEmpty=false;size=3],
    unsafe=@Unsafe[sun.misc.Unsafe@2601d6f8],
    seedOffset=@Long[24],
]
Affect(row-cnt:1) cost in 16 ms.
```

官方推荐直接使用 `ognl` 命令，更加灵活。怎么选：只想瞄一眼某个静态字段，用 `getstatic` 更省事；要执行表达式、调用方法、组合多个值，用 `ognl`。

#### ognl

执行 OGNL 表达式，从 3.0.5 版本开始支持。

| 参数 | 说明 |
| --- | --- |
| express | 执行的表达式 |
| [c:] | 执行表达式的 ClassLoader 的 hashcode，默认值是 SystemClassLoader |
| [classLoaderClass:] | 指定执行表达式的 ClassLoader 的 class name |
| [x] | 结果对象的展开层次，默认值 1 |

三类常用写法：

```shell
# 1. 调用静态函数
ognl '@java.lang.System@out.println("hello")'

# 2. 获取静态类的静态字段
ognl '@demo.MathGame@random'

# 3. 执行多行表达式，赋值给临时变量，返回一个 List
ognl '#value1=@System@getProperty("java.home"), #value2=@System@getProperty("java.runtime.name"), {#value1, #value2}'
```

写法 2 的输出示例（节选）：

```text
@Random[
    serialVersionUID=@Long[3905348978240129619],
    seed=@AtomicLong[70265295786481],
    multiplier=@Long[25214903917],
    // ...省略
]
```

写法 3 的输出示例：

```text
@ArrayList[
    @String[/usr/lib/jvm/java-8-openjdk-amd64/jre],
    @String[OpenJDK Runtime Environment],
]
```

延伸资料：

- OGNL 特殊用法：[arthas issues#71](https://github.com/alibaba/arthas/issues/71)
- OGNL 表达式官方指南：<https://commons.apache.org/proper/commons-ognl/language-guide.html>

小结（记住一个套路即可）：

- 取静态字段：`@类名@字段名`
- 调静态方法：`@类名@方法名(参数)`
- 临时变量用 `#变量名`，多行表达式用逗号分隔，最后用 `{...}` 返回一个 List

### 场景 9：类到底存不存在、被谁加载了 → sc

`sc` 是 “Search-Class” 的简写，能搜索出所有已经加载到 JVM 中的 Class 信息。

| 参数 | 说明 |
| --- | --- |
| class-pattern | 类名表达式匹配 |
| method-pattern | 方法名表达式匹配 |
| [d] | 输出当前类的详细信息，包括类所加载的原始文件来源、类的声明、加载的 ClassLoader 等。如果一个类被多个 ClassLoader 所加载，则会出现多次 |
| [E] | 开启正则表达式匹配，默认为通配符匹配 |
| [f] | 输出当前类的成员变量信息（需要配合参数 -d 一起使用） |
| [x:] | 指定输出静态变量时属性的遍历深度，默认为 0，即直接使用 `toString` 输出 |
| [c:] | 指定 class 的 ClassLoader 的 hashcode |
| [classLoaderClass:] | 指定执行表达式的 ClassLoader 的 class name |
| [n:] | 具有详细信息的匹配类的最大数量（默认为 100） |

两个使用提示：

1. class-pattern 支持全限定名（如 `com.taobao.test.AAA`），也支持 `com/taobao/test/AAA` 这样的格式——从异常堆栈里拷贝类名过来时，不用再手动把 `/` 替换成 `.`
2. sc 默认开启了子类匹配功能，当前类的子类也会被搜索出来；想精确匹配，执行 `options disable-sub-class true`

三种用法：

```shell
sc demo.*               # 模糊搜索
sc -d demo.MathGame     # 打印类的详细信息
sc -d -f demo.MathGame  # 在 -d 基础上再打印 Field 信息
```

模糊搜索的输出：

```text
[arthas@4222]$ sc demo.*
demo.MathGame
Affect(row-cnt:1) cost in 7 ms.
```

`sc -d` 输出示例：

```text
[arthas@4222]$ sc -d demo.MathGame
 class-info        demo.MathGame
 code-source       /home/blacktea/%e6%a1%8c%e9%9d%a2/arthas/math-game.jar
 name              demo.MathGame
 isInterface       false
 isAnnotation      false
 isEnum            false
 isAnonymousClass  false
 isArray           false
 isLocalClass      false
 isMemberClass     false
 isPrimitive       false
 isSynthetic       false
 simple-name       MathGame
 modifier          public
 annotation
 interfaces
 super-class       +-java.lang.Object
 class-loader      +-sun.misc.Launcher$AppClassLoader@74a14482
                     +-sun.misc.Launcher$ExtClassLoader@12a3a380
 classLoaderHash   74a14482

Affect(row-cnt:1) cost in 14 ms.
```

`sc -d -f` 会额外输出 fields 区域（成员变量的 name / type / modifier / value）：

```text
 fields            name     random
                   type     java.util.Random
                   modifier private,static
                   value    java.util.Random@23c17246

                   name     illegalArgumentCount
                   type     int
                   modifier private
```

排查“类加载冲突”的要点：同一个类如果被多个 ClassLoader 加载，`sc -d` 的结果会出现多次；对照 `code-source`（类来自哪个文件）和 `classLoaderHash`（被哪个加载器加载），就能确认冲突。

小结：

- 确认“类有没有被加载”：`sc demo.*` 先搜一遍
- 确认“类从哪来、被谁加载”：`sc -d`，看 code-source 和 class-loader
- 还想看成员变量：`sc -d -f`
- 搜出来的子类太多干扰判断时：`options disable-sub-class true`

---

## 五、基础命令行

这些命令不直接参与诊断，但日常使用很顺手，多数和 linux 命令类似。先记一句话：文件用 `cat`/`pwd`，过滤用 `grep`，清屏用 `cls`，翻命令用 `history`，忘了命令用 `help`。

### 1. 文件类：cat、pwd

```shell
# cat 打印文件内容，和 linux 里的 cat 类似
cat helloArthas.txt
```

输出示例：

```text
[arthas@7519]$ cat helloArthas.txt
你好啊，arthas，很高兴认识你！
```

```shell
# pwd 返回当前的工作目录
pwd
# /home/blacktea/桌面/arthas
```

### 2. 过滤：grep

类似传统的 `grep` 命令，配合管道使用，是原文里出镜率最高的组合技：

```shell
sysprop | grep java
sysprop | grep java -n
sysenv | grep -v JAVA
sysenv | grep -e "(?i)(JAVA|sun)" -m 3  -C 2
sysenv | grep JAVA -A2 -B3
thread | grep -m 10 -e  "TIMED_WAITING|WAITING"
```

| 参数 | 说明 |
| --- | --- |
| -A, --after-context `<value>` | 同时打印匹配行之后 NUM 行 |
| -B, --before-context `<value>` | 同时打印匹配行之前 NUM 行 |
| -C, --context `<value>` | 同时打印匹配行前后 NUM 行 |
| -i, --ignore-case | 忽略大小写（默认区分大小写） |
| -v, --invert-match | 反选，输出不匹配的行 |
| -n, --line-number | 输出带行号 |
| -m, --max-count `<value>` | 选中 NUM 行后停止 |
| -e, --regex | 启用正则表达式匹配 |
| --trim-end | 去掉行尾空白 |

使用感受：凡是输出很长的命令（`sysprop`、`sysenv`、`thread`），先接一条 `grep` 再看，效率高得多；`-m` 限制条数、`-n` 带行号、`-C` 带上下文是三个最常用的参数。

### 3. 会话类：cls、session、version、history

#### cls

清空当前屏幕区域。

> 提示：非终端模式下使用 cls，会提示 "Command 'cls' is only support tty session."

#### session

查看当前会话的信息，显示当前绑定的 pid 以及会话 id：

```text
[arthas@7519]$ session
 Name        Value
--------------------------------------------------
 JAVA_PID    7519
 SESSION_ID  919c02a3-a0f0-4e07-afd9-5a865c165ad5
```

> 提示：如果配置了 tunnel server，会追加打印代理 id、tunnel 服务器的 url 以及连接状态；如果使用了 staturl 做统计，会追加显示 statUrl 地址。

#### version

输出当前目标 Java 进程所加载的 Arthas 版本号。

#### history

打印命令历史。历史指令会通过一个名叫 history 的文件持久化，所以可以查看当前 arthas 服务器的**所有**历史命令，而不仅限于本次会话。

| 参数 | 说明 |
| --- | --- |
| [c:] | 清空历史指令 |
| [n:] | 显示最近执行的 n 条指令 |

```shell
history 10   # 显示最近 10 条记录
history -c   # 清空历史记录
```

显示历史最近 10 条记录的输出：

```text
[arthas@7519]$ history 10
   28  cls
   29  sysprop | grep java -n
   30  sysprop | grep java -n -m 10
   31  sysprop | grep java -n -m1
   32  sysprop | grep java -n -m 2
   33  cls
   34  pwd
   35  cls
   36  session
   37  history 10
```

清空历史记录后再查看，就只剩刚才执行的那条命令了：

```text
[arthas@7519]$ history -c
[arthas@7519]$ history 10
    1  history 10
```

### 4. 帮助类：help、keymap

#### help

查看命令帮助信息：可以查看当前 arthas 版本支持的指令，也可以查看具体指令的使用说明。忘了某个命令怎么写，第一反应就是 `help`。`help` 输出的命令清单（即当前版本支持的全部命令）：

```text
 NAME         DESCRIPTION
 help         Display Arthas Help
 auth         Authenticates the current session
 keymap       Display all the available keymap for the specified connection.
 sc           Search all the classes loaded by JVM
 sm           Search the method of classes loaded by JVM
 classloader  Show classloader info
 jad          Decompile class
 getstatic    Show the static field of a class
 monitor      Monitor method execution statistics, e.g. total/success/failure count, average rt, fail rate, etc.
 stack        Display the stack trace for the specified class and method
 thread       Display thread info, thread stack
 trace        Trace the execution time of specified method invocation.
 watch        Display the input/output parameter, return object, and thrown exception of specified method invocation
 tt           Time Tunnel
 jvm          Display the target JVM information
 memory       Display jvm memory info.
 perfcounter  Display the perf counter information.
 ognl         Execute ognl expression.
 mc           Memory compiler, compiles java files into bytecode and class files in memory.
 redefine     Redefine classes. @see Instrumentation#redefineClasses(ClassDefinition...)
 retransform  Retransform classes. @see Instrumentation#retransformClasses(Class...)
 dashboard    Overview of target jvm's thread, memory, gc, vm, tomcat info.
 dump         Dump class byte array from JVM
 heapdump     Heap dump
 options      View and change various Arthas options
 cls          Clear the screen
 reset        Reset all the enhanced classes
 version      Display Arthas version
 session      Display current session information
 sysprop      Display, and change the system properties.
 sysenv       Display the system env.
 vmoption     Display, and update the vm diagnostic options.
 logger       Print logger info, and update the logger level
 history      Display command history
 cat          Concatenate and print files
 base64       Encode and decode using Base64 representation
 echo         write arguments to the standard output
 pwd          Return working directory name
 mbean        Display the mbean information
 grep         grep command for pipes.
 tee          tee command for pipes.
 profiler     Async Profiler. https://github.com/jvm-profiling-tools/async-profiler
 vmtool       jvm tool
 stop         Stop/Shutdown Arthas server and exit the console.
 jfr          Java Flight Recorder Command
```

#### keymap

`keymap` 命令输出当前的快捷键映射表，默认快捷键如下：

| 快捷键 | 快捷键说明 | 命令名称 | 命令说明 |
| --- | --- | --- | --- |
| `"\C-a"` | ctrl + a | beginning-of-line | 跳到行首 |
| `"\C-e"` | ctrl + e | end-of-line | 跳到行尾 |
| `"\C-f"` | ctrl + f | forward-word | 向前移动一个单词 |
| `"\C-b"` | ctrl + b | backward-word | 向后移动一个单词 |
| `"\e[D"` | 键盘左方向键 | backward-char | 光标向前移动一个字符 |
| `"\e[C"` | 键盘右方向键 | forward-char | 光标向后移动一个字符 |
| `"\e[B"` | 键盘下方向键 | next-history | 下翻显示下一个命令 |
| `"\e[A"` | 键盘上方向键 | previous-history | 上翻显示上一个命令 |
| `"\C-h"` | ctrl + h | backward-delete-char | 向后删除一个字符 |
| `"\C-?"` | ctrl + shift + / | backward-delete-char | 向后删除一个字符 |
| `"\C-u"` | ctrl + u | undo | 撤销上一个命令，相当于清空当前行 |
| `"\C-d"` | ctrl + d | delete-char | 删除当前光标所在字符 |
| `"\C-k"` | ctrl + k | kill-line | 删除当前光标到行尾的所有字符 |
| `"\C-i"` | ctrl + i | complete | 自动补全，相当于敲 `TAB` |
| `"\C-j"` | ctrl + j | accept-line | 结束当前行，相当于敲回车 |
| `"\C-m"` | ctrl + m | accept-line | 结束当前行，相当于敲回车 |
| `"\C-w"` |  | backward-delete-word |  |
| `"\C-x\e[3~"` |  | backward-kill-line |  |
| `"\e\C-?"` |  | backward-kill-word |  |

两个通用技巧：

- 任何时候按 `tab` 键，会根据当前的输入给出提示
- 命令后敲 `-` 或 `--`，然后按 `tab` 键，可以展示出此命令具体的选项

### 5. 退出与还原：exit / quit / stop / reset

三个退出命令，粒度不一样：

| 命令 | 行为 |
| --- | --- |
| `quit` / `exit` | 只是退出当前的连接。Attach 到目标进程上的 arthas 还会继续运行，端口会保持开放，下次连接时可以直接连接上 |
| `stop` | 完全退出 arthas。Arthas 服务端 stop 时会重置所有增强过的类 |
| `reset` | 手动重置增强类，将被 Arthas 增强过的类全部还原 |

排查结束后，记得 `stop` 或 `reset`，把增强过的类还原掉。

---

## 六、一页总结

### 通用排查路线

1. `dashboard` 看全局：线程 CPU%、内存、GC 一屏看完
2. `thread` 定位线程：`thread -n` 看最忙线程，`thread -b` 找阻塞源，`thread --state` 按状态筛
3. `jad` / `sc -d` 确认类：看 Location / code-source 确认类来自哪个 jar，看 ClassLoader / classLoaderHash 确认被谁加载
4. `watch` 看方法：返回值、异常退出（AtExceptionExit）、耗时一目了然
5. `jvm` / `sysprop` / `sysenv` / `vmoption` 查环境：JVM 分块信息、系统属性、环境变量、动态改 VM 参数

### 安装记忆卡

```shell
curl -O https://alibaba.github.io/arthas/arthas-boot.jar
java -jar arthas-boot.jar              # 选择进程编号
java -jar arthas-boot.jar 35724        # 直接指定进程 ID
java -jar arthas-boot.jar --telnet-port 9998 --http-port -1   # 端口冲突时
```

Linux 三个坑：apt 被锁就 `ps -e | grep apt` 杀干净再装 curl；只装了 jre 缺 tools.jar 就 `apt install openjdk-8-jdk`（目录和 jre 保持一致）。

### 学完这篇你应该能回答

1. Arthas 怎么安装、怎么指定要监控的进程
2. CPU 飙高时用哪两个命令配合定位
3. 怎么确认线上运行的类来自哪个 jar、被哪个 ClassLoader 加载
4. 怎么观察一个方法的返回值和异常
5. `exit` 和 `stop` 的区别是什么，增强过的类怎么还原

### 下一步建议

`help` 清单里还有不少本文（以及原文）没展开的命令，比如 `trace`（方法调用链耗时）、`monitor`（方法执行统计）、`stack`（调用栈）、`tt`（时间隧道）、`heapdump`（堆快照），用到时直接查官网文档 <https://arthas.aliyun.com/doc/commands.html> 对应条目即可。
