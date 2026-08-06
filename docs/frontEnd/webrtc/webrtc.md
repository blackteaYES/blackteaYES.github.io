---
date: 2023-03-17
title: WebRTC的学习
categories:
  - webrtc
tag:
  - 音视频
  - springboot
  - js
footer: 该文章集成了WebRTC和SpringBoot,以websocket作为信令服务。
copyright: false


---




# ![WebRTC](/assets/img/icons/webrtc.svg) WebRTC的学习

## 1. 相关地址

### 1.1 文档教学

&emsp; [WebRTC中文网](http://webrtc.p2hp.com/#google_vignette)

&emsp; [WebRTC中文社区](https://webrtc.org.cn/)

&emsp; [WebRTC英文官网](https://webrtc.org/)

&emsp; [WebRTC安全相关](http://webrtc-security.github.io/)

&emsp; [coturn开源地址](https://github.com/coturn/coturn)

&emsp; [truns、tun测试网站](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)
<br/>

---

#### NAT知相关知识

&emsp; [P2P知识](https://zhuanlan.zhihu.com/p/488135992)
<br>

&emsp; [P2P技术详解(一)：NAT详解——详细原理、P2P简介](https://www.cnblogs.com/mlgjb/p/8243646.htm )

&emsp; [P2P技术详解(二)：P2P中的NAT穿越(打洞)方案详解](https://www.jianshu.com/p/9bfbcbee0abb) 
	
&emsp; [P2P技术详解(三)：P2P技术之STUN、TURN、ICE详解](https://www.jianshu.com/p/258e7d8be2ba) 

&emsp; [详解P2P技术中的NAT穿透原理](https://www.jianshu.com/p/f71707892eb2)
        

---

####  WebRTC 代码相关博客

&emsp; https://www.bbsmax.com/A/B0zqLrWNdv/

&emsp;https://www.an.rustfisher.com/webrtc/web-samples/getUserMedia-open-camera/

&emsp; https://github.com/shushushv/webrtc-p2p

&emsp;[**WebRTC**原理简述](https://www.jianshu.com/p/476f39de86ed)

&emsp;[**WebRTC**介绍及简单使用](https://zhuanlan.zhihu.com/p/490239698)

&emsp; 后续补充...


&emsp;
注意：

   - 如果只是初期入门只需要看第一个中文官网就行了，如果追求最新的文档去英文官网。
   - 我这里的案例实现代码时使用了大佬的代码（代码相关博客里的第一个博客）。
   - 代码实现时强力推荐去看其他相关博客，写的很不错。
---


### 1.2 视频教学

    
&emsp;b站学习地址：https://www.bilibili.com/video/BV1D14y1W7qp?p=1&vd_source=d6cd8b3f892acbf22f02da2bfa7d95fe


&emsp; 我本人也是看该视频进行入门的，非常感谢该UP和讲师，讲的挺好的，缺点是视频不够清晰。

---

## 2. 简述

### 2.1 什么是WebRTC?

&emsp; WebRTC (Web Real-Time Communications) 是一项[实时通讯](https://baike.baidu.com/item/实时通讯/2895640?fromModule=lemma_inlink)技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间[点对点](https://baike.baidu.com/item/点对点/7452984?fromModule=lemma_inlink)（Peer-to-Peer）的连接，实现[视频流](https://baike.baidu.com/item/视频流/9392168?fromModule=lemma_inlink)和（或）[音频流](https://baike.baidu.com/item/音频流/7390786?fromModule=lemma_inlink)或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和[电话会议](https://baike.baidu.com/item/电话会议/2519220?fromModule=lemma_inlink)成为可能。


&emsp; 简单来说，就是可以实现例如微信电话（实时通讯）的技术，并且它不需要任何第三方插件的和软件的限制，在浏览器里就可以实现视频通话。

---

### 2.2 WebRtc可以做什么?

&emsp; WebRTC 有许多不同的用例，从使用摄像头或麦克风的基本 Web 应用程序到更高级的视频通话应用程序和屏幕共享。我们收集了许多代码示例，以更好地说明该技术的工作原理以及您可以使用它的用途.

&emsp; WebRTC提供了视频会议的核心技术，包括音视频的采集、编解码、网络传输、展示等功能，并且还支持跨平台，包括linux、windows、mac、android等。



&emsp; 这句话是WebRTC中文网内的，里面还有很多小例子，[示例](https://webrtc.p2hp.com/samples/)。

&emsp; 我建议先把通信原理看了之后再去写例子。

---

### 2.3 WebRTC的架构
<!-- 
![WebRTC架构图](https://img-blog.csdnimg.cn/922eff6cee7d4b709bcf40288ca6a7b8.png#pic_center) -->


![WebRTC架构图](/assets/img/webrtc/WebRTC架构图.png)
---

#### 2.3.1 WebRTC架构组件介绍

**Your Web App** 

&emsp; Web开发者开发的程序，Web开发者可以基于集成WebRTC的浏览器提供的web API开发基于视频、音频的实时通信 应用。



**Web API** 

&emsp; 面向第三方开发者的WebRTC标准API（Javascript），使开发者能够容易地开发出类似于网络视频聊天的web应用， 最新的标准化进程可以查看这里。 


**WebRTC Native C++ API** 

&emsp; 本地C++ API层，使浏览器厂商容易实现WebRTC标准的Web API，抽象地对数字信号过程进行处理。


**Transport / Session** 

&emsp; 传输/会话层 

&emsp; 会话层组件采用了libjingle库的部分组件实现，无须使用xmpp/jingle协议 。

**VoiceEngine**

&emsp; 音频引擎是包含一系列音频多媒体处理的框架。 

&emsp; PS：VoiceEngine是WebRTC极具价值的技术之一，是Google收购GIPS公司后开源的。在VoIP上，技术业界领先。 

&emsp; Opus：支持从6 kbit/s到510 kbit/s的恒定和可变比特率编码，帧大小从2.5 ms到60 ms，各种采样率从8 kHz（4 kHz 带宽）到48 kHz（20 kHz带宽，可复制人类听觉系统的整个听力范围）。由IETF RFC 6176定义。 

&emsp; *NetEQ* 模块是Webrtc语音引擎中的核心模块 ，一种动态抖动缓冲和错误隐藏算法，用于隐藏网络抖动和数据包丢失 的负面影响。保持尽可能低的延迟，同时保持最高的语音质量。

**VideoEngine** 

&emsp; WebRTC视频处理引擎 

&emsp; VideoEngine是包含一系列视频处理的整体框架，从摄像头采集视频到视频信息网络传输再到视频显示整个完整过程 的解决方案。

&emsp; **VP8** 视频图像编解码器，是WebRTC视频引擎的默认的编解码器 。

&emsp; **VP8**适合实时通信应用场景，因为它主要是针对低延时而设计的编解码器。 

---

### 2.4 WebRTC的原理

&emsp; 首先思考的问题：两个不同网络环境的（具备摄像头/麦克风多媒体设备的）浏览器，要实现点对点 的实时音视频对 话，难点在哪里？ 

1. 了解对方的媒体格式、支持的最大分辨率和其他媒体信息？
2. 要了解彼此的网络，就有可能找到一条通信链路？
3. 两个终端还没有建立连接时,如何交换“媒体信息”和“网络信息”呢?

---

#### 2.4.1 媒体协商（sdp）

![WebRTC媒体协商](/assets/img/webrtc/WebRTC媒体协商.png)

&emsp; 彼此要了解对方支持的媒体格式？

&emsp; 为了保证两端都有正确的编码和解码，最简单的方法就是取它们的交集H264

&emsp; 注意:有一种特殊的协议叫做 ***Session Description protocol (SDP)*** ，可以用来描述上述信息。

&emsp; **媒体协商**：在webrtc中，参与视频通信的**双方必须首先交换SDP信息**，这样双方才能知根知底，而交换SDP的过程，也称为"**媒体协商**"。

---

#### 2.4.2 网络协商（candidate）

&emsp; 同样，在复杂的网络环境中，要在两端之间建立连接，必须有一个双方都可以访问的链路。

&emsp; **理想的网络情况**是每个浏览器的电脑都是私有公网IP，可以直接进行点对点连接。

![理想网络情况](/assets/img/webrtc/理想网络情况.png)
&emsp;

&emsp; **实际情况**是我们的电脑和电脑之前或大或小都是在某个局域网中，需要NAT（Network Address Translation，网络地址转换）。

![实际网络情况](/assets/img/webrtc/实际网络情况.png)

&emsp; 注意：如果是在同一个局域网中，那么直接使用相同的内网网段就可以了，但是一般情况下都是不同的。

&emsp; 在中国的网络环境下，据统计，至少有一半的网络不能直接连接。我个人认为根本原因是:在互联网发展的早期，绝大多数IP4地址资源都被国外所占据。当轮到中国等发展中国家使用IP地址时，大多数计算机没有公网IP地址，只能通过路由器和交换机进行NAT转换，相当一部分NAT是对称的。基本上，没有办法播放它。

&emsp; 那么我们就需要使用NAT进行转换。
![NAT网关转换](/assets/img/webrtc/NAT网关转换.png)
&emsp; 

&emsp; 所以在解决 ***WebRTC*** 使用过程中的上述问题的时候，我们需要用到 ***STUN*** 和 ***TURN*** 。

---

##### 2.4.2.1 STUN

&emsp; ***STUN***（Session Traversal Utilities for NAT，NAT会话穿越应用程序）是一种网络协议，它允许位于NAT（或多重 NAT）后的客户端找出自己的公网地址，查出自己位于哪种类型的NAT之后以及NAT为某一个本地端口所绑定的 Internet端端口。这些信息被用来在两个同时处于NAT路由器之后的主机之间创建UDP通信。该协议由 ***[RFC 5389](https://blog.csdn.net/qq_33743182/article/details/122978451)*** 定 义。

&emsp; 在遇到上述情况的时候，我们可以建立一个STUN服务器，这个服务器做什么用的呢？主要是给无法在公网环境下的 视频通话设备分配公网IP用的。这样两台电脑就可以在公网IP中进行通话。 

![STUN](/assets/img/webrtc/STUN.png)

&emsp; 使用一句话说明 ***STUN*** 做的事情就是：告诉我你的 **公网IP地址+端口** 是什么?

&emsp; 搭建STUN服务器很简单，媒体流传输是按照 ***[P2P](https://zhuanlan.zhihu.com/p/488135992)*** 的方式。 

&emsp; 那么问题来了， ***STUN*** 并不是每次都能成功的为需要 ***NAT*** 的通话设备分配 ***IP*** 地址的，***P2P*** 在传输媒体流时，使用的本地带宽，在多人视频通话的过程中，通话质量的好坏往往需要根据使用者本地的带宽确定。

&emsp; 那么怎么办？ ***TURN*** 可以 很好的解决这个问题。 

---

##### 2.4.2.2 TURN

&emsp; ***TURN*** 的全称为 ***Traversal Using Relays around NAT*** ，是 ***STUN/RFC5389*** 的一个拓展，主要添加了 ***Relay*** 功能。如果终端在 ***NAT*** 之后， 那么在特定的情景下，有可能使得终端无法和其对等端（***peer***）进行直接的通信，这时就需要公网 的服务器作为一个 **中继** ， 对来往的数据进行转发。

&emsp; 这个转发的协议就被定义为TURN。 


![TURN](/assets/img/webrtc/TURN.png)

&emsp; 在 ***STUN*** 分配公网IP **失败** 后，可以通过 ***TURN服务器*** 请求公网IP地址作为**中继地址**。

&emsp; 这种方式的带宽由**服务器端承担**，在多人视频聊天的时候，本地带宽压力较小，并且根据 ***Google*** 的说明，***TURN协议*** 可以使用在所有的环境中。 

---

##### 2.4.2.3 总结

&emsp; （单向数据200kbps 一对一通话） 

&emsp; 以上是 ***WebRTC*** 中经常用到的2个协议，***STUN*** 和 ***TURN*** 服务器我们使用 ***[coturn](https://github.com/coturn/coturn)开源项目*** 来搭建。 

&emsp; 补充：***ICE*** 跟 ***STUN*** 和 ***TURN*** 不一样，ICE不是一种协议，而是一个框架（Framework），它整合了***STUN*** 和 ***TURN*** 。 

&emsp; ***coturn开源项目*** 集成了 ***STUN*** 和 ***TURN***的功能。 

&emsp; 在WebRTC中用来描述网络信息的术语叫 ***candidate*** 。 

&emsp; - 媒体协商 ***sdp*** 

&emsp; - 网络协商 ***candidate*** 

---

#### 2.4.2 媒体协商+网络协商数据的交换通道

&emsp; 从上面 [2.4.1 媒体协商（sdp）](#2.4.1 媒体协商（sdp）) 和 [2.4.2 网络协商（candidate）](2.4.2 网络协商（candidate）) ，我们知道了2个客户端，那怎么去交换？是不是需要一个中间商去做交换？

&emsp; 所以 我们需要一个 **信令服务器**（ ***Signal server*** ）转发彼此的媒体信息和网络信息。


![SignalServer](/assets/img/webrtc/SignalServer.png)

&emsp; 如上图，我们在基于 ***WebRTC API*** 开发应用（APP）时，可以将彼此的APP连接到信令服务器（

&emsp; ***Signal Server*** ，一般 搭建在公网，或者两端都可以访问到的局域网），借助信令服务器，就可以实现上面提到的 ***SDP*** 媒体信息及  ***Candidate*** 网络信息交换。 



&emsp; 我简单理解为如下：

&emsp; 你给朋友写信，信写好了需要寄给朋友，把信放到信箱由邮局进行派送，邮递员交到朋友手上，但是每个地方这么大，不可能是一个邮递员送，肯定是由当地的邮局进行分发派送。

&emsp; 那么，在这个过程中邮局（邮递员）充当了信令服务器（***Signal Server***）的作用，你写的信就是***sdp***，***Candidate*** 就是你填写的朋友地址，这个地址可能因为很大，导致需要根据地址(***NAT/Relay***)进行邮局分发，例如市邮局 -> 县邮局 -> 乡镇邮局 ->邮递员。

&emsp; NAT: 你主动根据邮局地址去拿。

&emsp; Relay：让邮递员送上门。

&emsp; 

&emsp; 交换SDP的过程:


![交换SDP的过程](/assets/img/webrtc/交换SDP的过程.png)
&emsp; 

&emsp; 1. Amy(假设一个人的名字)通过setLocalDescription方法保存自己的SDP信息，然后通过offer方法发送给信令服务器。

&emsp; 2. 信息服务器将Amy的SDP转发给另一端的Bob(另一个虚构的名字)，Bob将首先调用setremotedescription来保存Amy的SDP。
&emsp; 3. 然后Bob调用setLocalDescription方法来保存他的SDP，然后使用answer方法通过信令服务器将他的SDP发送给Amy。

&emsp; 4. Amy收到Bob的SDP后，调用setRemoteDescription进行保存，双方完成SDP交换，找到交集。如果他们能达成协议，他们就可以建立一个p2p连接并开始通信。

---

### 2.5 WebRTC如何查看APIs?

&emsp; 英文网址：[[媒体设备入门  |  WebRTC中文网 (p2hp.com)](http://webrtc.p2hp.com/getting-started/media-devices.html)]

&emsp; 如果看英文吃力，可以选择如下地址学习部分示例：

&emsp; [WebRTC打开本地摄像头 - RustFisher 安卓|Java|设计模式|WebRTC|Python|NestJS|PyQt](https://www.an.rustfisher.com/webrtc/web-samples/getUserMedia-open-camera/)

---

## 3. 安装Coturn穿透和转发服务器

#### 3.1 安装依赖

##### ubuntu系统

```shell
sudo apt-get install libssl-dev

sudo apt-get install libevent-dev
```
---


##### centos系统

```shell
sudo yum install openssl-devel

sudo yum install libevent-devel
```
---


#### 3.2 下载源码进行编译安装Coturn

```shell
# 本次所需完整执行代码
git clone https://github.com/coturn/coturn
cd coturn
./configure
make
sudo make install
```
&emsp;


> 进行 ./configure 的时候报错，如下图：


![configure执行报错1](/assets/img/webrtc/configure执行报错1.png)

&emsp;

> 查阅后表示需要安装 g++
>
> sudo apt-get install g++


![configure执行报错2](/assets/img/webrtc/configure执行报错2.png)

&emsp;


> 缺少 pkg-config
>
> sudo apt-get install pkg-config

&emsp;

> 再次进行：./configure

![configure正常运行](/assets/img/webrtc/configure正常运行.png)

&emsp;


> make

![make](/assets/img/webrtc/make.png)
&emsp;


> sudo make install

---

#### 3.3 启动并测试

##### 启动

```shell
# 启动
sudo nohup turnserver -L 0.0.0.0 -a -u lqf:123456 -v -f -r nort.gov &
```
&emsp;


##### 测试

&emsp; 测试网站：[Trickle ICE (webrtc.github.io)](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

&emsp;

&emsp; 测试stun: 

![测试stun](/assets/img/webrtc/测试stun.png)

&emsp; 注意：stun不需要username和password，我这里是多写了。

&emsp;

测试turn:

![测试turn](/assets/img/webrtc/测试turn.png)

&emsp; 注意：测试trun需要username和password,且 ***IceTransports value*** 选择为relay。

&emsp; 我这里不知道为什么是701，查了一些资料也没有头绪，因为云服务器过期了，就使用的本地虚拟机，所以不知道是不是因为这个，到时候再试试。

---

## 4. 案例实现

### 4.1 一对一通话

#### 4.1.1 一对一通话场景

![一对一通话场景](/assets/img/webrtc/一对一通话场景.png)

&emsp; 在一对一通话场景中，每个 ***Peer*** 均创建有一个 ***PeerConnection*** 对象，由一方主动发 ***Offer SDP***，另一方则应答 ***AnswerSDP***，最后双方交换 ***ICE Candidate*** 从而完成通话链路的建立。但是在中国的网络环境中，据一些统计数据显示，至少1半的网络是无法直接穿透打通，这种情况下只能借助 ***TURN*** 服务器中转。 

---

### 4.1.2 一对一通话场景代码实现

##### 技术选型

&emsp; `前端 -> html、css、js、WebRTC、websocket`
	
&emsp; `后端 -> springboot + websocket`


##### 整体执行流程

![WebRTC整合SpringBoot执行流程](/assets/img/webrtc/WebRTC整合SpringBoot执行流程.png)

##### 页面代码

```html
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>WebRTC + WebSocket</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
<style>
    html,
    body {
        margin: 0;
        padding: 0;
    }

    #main {
        position: absolute;
        width: 370px;
        height: 550px;
    }

    #localVideo {
        position: absolute;
        background: #757474;
        top: 10px;
        right: 10px;
        width: 100px;
        height: 150px;
        z-index: 2;
    }

    #remoteVideo {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: #222;
    }

    #buttons {
        z-index: 3;
        bottom: 20px;
        left: 90px;
        position: absolute;
    }

    #toUser {
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 5px;
        padding-left: 5px;
        margin-bottom: 5px;
    }

    #toUser:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
    }

    #call {
        width: 70px;
        height: 35px;
        background-color: #00BB00;
        border: none;
        margin-right: 25px;
        color: white;
        border-radius: 5px;
    }

    #hangup {
        width: 70px;
        height: 35px;
        background-color: #FF5151;
        border: none;
        color: white;
        border-radius: 5px;
    }
</style>
</head>

<body>
    <div id="main">
        <video id="remoteVideo" playsinline autoplay></video>
        <video id="localVideo" playsinline autoplay muted></video>

        <div id="buttons">
            <span id="myName" style="color: red;"></span>
            <input id="toUser" placeholder="输入在线好友账号" /><br />
            <button id="call">视频通话</button>
            <button id="hangup">挂断</button>
        </div>
    </div>
</body>
<!-- 可引可不引 -->
<!--<script th:src="@{/js/adapter-2021.js}"></script>-->
<script type="text/javascript" th:inline="javascript">

    // 生成一个随机的用户名
    let username = '' + Math.floor(Math.random() * (100 - 1) + 1);
    if(username){
        document.getElementById("myName").innerText = username
    }
    let localVideo = document.getElementById('localVideo');
    let remoteVideo = document.getElementById('remoteVideo');
    let websocket = null;
    let peer = null;

    WebSocketInit();
    ButtonFunInit();

    /* WebSocket */
    function WebSocketInit() {
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            // 使用192.168.8.57的目的是打包成app的时候可以通过局域网访问
            url = "ws://192.168.8.57:8080/webrtc/" + username
            // url = "ws://127.0.0.1:8080/webrtc/" + username
            websocket = new WebSocket(url);
        } else {
            alert("当前浏览器不支持WebSocket！");
        }

        //连接发生错误的回调方法
        websocket.onerror = function (e) {
            console.log(e)
            alert("WebSocket连接发生错误！");
        };

        //连接关闭的回调方法
        websocket.onclose = function () {
            console.error("WebSocket连接关闭");
        };

        //连接成功建立的回调方法
        websocket.onopen = function () {
            console.log("WebSocket连接成功");
        };

        //接收到消息的回调方法
        websocket.onmessage = async function (event) {
            let { type, fromUser, msg, sdp, iceCandidate } = JSON.parse(event.data.replace(/\n/g, "\\n").replace(/\r/g, "\\r"));

            console.log(type);

            if (type === 'hangup') {
                console.log(msg);
                document.getElementById('hangup').click();
                return;
            }

            if (type === 'call_start') {
                // msg = 0 表示拒绝，1表示同意
                let msg = "0"
                if (confirm(fromUser + "发起视频通话，确定接听吗") == true) {
                    document.getElementById('toUser').value = fromUser;
                    WebRTCInit();
                    msg = "1"
                }

                websocket.send(JSON.stringify({
                    type: "call_back",
                    toUser: fromUser,
                    fromUser: username,
                    msg: msg
                }));

                return;
            }

            if (type === 'call_back') {
                if (msg === "1") {
                    console.log(document.getElementById('toUser').value + "同意视频通话");

                    //创建本地视频并发送offer
                    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                    localVideo.srcObject = stream;
                    stream.getTracks().forEach(track => {
                        peer.addTrack(track, stream);
                    });

                    let offer = await peer.createOffer();
                    await peer.setLocalDescription(offer);

                    let newOffer = offer.toJSON();
                    newOffer["fromUser"] = username;
                    newOffer["toUser"] = document.getElementById('toUser').value;
                    websocket.send(JSON.stringify(newOffer));
                } else if (msg === "0") {
                    alert(document.getElementById('toUser').value + "拒绝视频通话");
                    document.getElementById('hangup').click();
                } else {
                    alert(msg);
                    document.getElementById('hangup').click();
                }

                return;
            }

            if (type === 'offer') {
                let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                localVideo.srcObject = stream;
                stream.getTracks().forEach(track => {
                    peer.addTrack(track, stream);
                });

                await peer.setRemoteDescription(new RTCSessionDescription({ type, sdp }));
                let answer = await peer.createAnswer();
                let newAnswer = answer.toJSON();

                newAnswer["fromUser"] = username;
                newAnswer["toUser"] = document.getElementById('toUser').value;
                websocket.send(JSON.stringify(newAnswer));

                await peer.setLocalDescription(answer);
                return;
            }

            if (type === 'answer') {
                peer.setRemoteDescription(new RTCSessionDescription({ type, sdp }));
                return;
            }

            if (type === '_ice') {
                peer.addIceCandidate(iceCandidate);
                return;
            }

        }
    }

    /* WebRTC */
    function WebRTCInit() {

        // RTCPeerConnection 的配置，内网时不需要开启stun、turn
        const defaultConfiguration = {
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            iceTransportPolicy: "all", // relay：如果使用了turn建议使用relay
            // ice
            iceServers: [
                {
                    "urls": [
                        "turn:192.168.147.122:3478?transport=udp",
                        "turn:192.168.147.122:3478?transport=tcp"
                    ],
                    "username": 'lqf',
                    "credential": "123456"
                },
                {
                    "urls": [
                        "stun:192.168.147.122:3478"
                    ]
                }
            ]
        }
        var Rtc = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if(!Rtc){
            alert("不支持WebRTC")
        }
        // peer = new RTCPeerConnection(defaultConfiguration);
        peer = new RTCPeerConnection();
        //ice
        peer.onicecandidate = function (e) {
            if (e.candidate) {
                websocket.send(JSON.stringify({
                    type: '_ice',
                    toUser: document.getElementById('toUser').value,
                    fromUser: username,
                    iceCandidate: e.candidate
                }));
            }
        };

        //track
        peer.ontrack = function (e) {
            if (e && e.streams) {
                remoteVideo.srcObject = e.streams[0];
            }
        };
    }

    /* 按钮事件 */
    function ButtonFunInit() {
        //视频通话
        document.getElementById('call').onclick = function (e) {
            document.getElementById('toUser').style.visibility = 'hidden';

            let toUser = document.getElementById('toUser').value;
            if (!toUser) {
                alert("请先指定好友账号，再发起视频通话！");
                return;
            }

            if (peer == null) {
                WebRTCInit();
            }

            websocket.send(JSON.stringify({
                type: "call_start",
                fromUser: username,
                toUser: toUser,
            }));
        }

        //挂断
        document.getElementById('hangup').onclick = function (e) {
            document.getElementById('toUser').style.visibility = 'unset';

            if (localVideo.srcObject) {
                const videoTracks = localVideo.srcObject.getVideoTracks();
                videoTracks.forEach(videoTrack => {
                    videoTrack.stop();
                    localVideo.srcObject.removeTrack(videoTrack);
                });
            }

            if (remoteVideo.srcObject) {
                const videoTracks = remoteVideo.srcObject.getVideoTracks();
                videoTracks.forEach(videoTrack => {
                    videoTrack.stop();
                    remoteVideo.srcObject.removeTrack(videoTrack);
                });

                //挂断同时，通知对方
                websocket.send(JSON.stringify({
                    type: "hangup",
                    fromUser: username,
                    toUser: document.getElementById('toUser').value,
                }));
            }

            if (peer) {
                peer.ontrack = null;
                peer.onremovetrack = null;
                peer.onremovestream = null;
                peer.onicecandidate = null;
                peer.oniceconnectionstatechange = null;
                peer.onsignalingstatechange = null;
                peer.onicegatheringstatechange = null;
                peer.onnegotiationneeded = null;

                peer.close();
                peer = null;
            }

            localVideo.srcObject = null;
            remoteVideo.srcObject = null;
        }
    }
</script>

</html>
```

---

##### 后端代码

> pom

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.5.3</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.blacktea</groupId>
    <artifactId>wbrtc</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>webrtc</name>
    <description>springboot整合webrtc的demo</description>
    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>

        <!-- 引入WebSocket -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.10</version>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.6.2</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

&emsp;

> 配置类

```java
package com.blacktea.webrtc.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

import java.text.SimpleDateFormat;

/**
 * @description:
 * @author: black tea
 * @date: 2023/3/15 19:37
 */
@Configuration
// 扫描cn.hutool.extra.spring包下所有类并注册之
@ComponentScan(basePackages={"cn.hutool.extra.spring"})
public class MyWebSocketConfig{

    @Bean
    public ServerEndpointExporter serverEndpointExporter(){
        return new ServerEndpointExporter();
    }

    @Bean
    public ObjectMapper mapper(){
        ObjectMapper mapper = new ObjectMapper();
        mapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper;
    }
}
```

&emsp;

> WebSocket服务类

```java
package com.blacktea.webrtc.server;

import cn.hutool.extra.spring.SpringUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @description: WebRtc的 WebSocket 服务
 * @author: black tea
 * @date: 2023/3/15 18:30
 */
@Slf4j
@Component
@ServerEndpoint(value = "/webrtc/{username}")
@Import(cn.hutool.extra.spring.SpringUtil.class)
public class WebRtcWebSocketServer {

    /**
     * 连接集合
     */
    private static final Map<String, Session> sessionMap = new ConcurrentHashMap<>();

    /**
     * 连接建立成功时的调用方法
     * @param session 会话对象
     * @param username 用户
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("username") String username) {
        log.info("ws client 连接成功,username={}, session={}", username, session);
        sessionMap.put(username, session);
    }

    @OnClose
    public void onClose(Session session){
        Set<Map.Entry<String, Session>> entries = sessionMap.entrySet();
        for(Map.Entry<String, Session> entry : entries){
            if (entry.getValue() == session){
                String username = entry.getKey();
                log.info("ws client 关闭成功,username={}, session={}", username, session);
                sessionMap.remove(username);
                break;
            }
        }
    }

    @OnError
    public void onError(Session session, Throwable error){
        log.error("ws 出现异常,", error);
    }

    /**
     * 服务器接收到客户端消息时调用的方法
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        try{
            log.info("receive message:{}", message);
            ObjectMapper mapper = SpringUtil.getBean(ObjectMapper.class);
            //JSON字符串转 HashMap
            HashMap hashMap = mapper.readValue(message, HashMap.class);

            //消息类型
            String type = (String) hashMap.get("type");

            //to user
            String toUser = (String) hashMap.get("toUser");
            Session toUserSession = sessionMap.get(toUser);
            String fromUser = (String) hashMap.get("fromUser");

            //msg
            String msg = (String) hashMap.get("msg");

            //sdp
            String sdp = (String) hashMap.get("sdp");

            //ice
            Map iceCandidate  = (Map) hashMap.get("iceCandidate");

            HashMap<String, Object> map = new HashMap<>();
            map.put("type",type);

            //呼叫的用户不在线
            if(toUserSession == null){
                toUserSession = session;
                map.put("type","call_back");
                map.put("fromUser","系统消息");
                map.put("msg","Sorry，呼叫的用户不在线！");

                send(toUserSession,mapper.writeValueAsString(map));
                return;
            }

            //对方挂断
            if ("hangup".equals(type)) {
                map.put("fromUser",fromUser);
                map.put("msg","对方挂断！");
            }

            //视频通话请求
            if ("call_start".equals(type)) {
                map.put("fromUser",fromUser);
                map.put("msg","1");
            }

            //视频通话请求回应
            if ("call_back".equals(type)) {
                map.put("fromUser",toUser);
                map.put("msg",msg);
            }

            //offer
            if ("offer".equals(type)) {
                map.put("fromUser",toUser);
                map.put("sdp",sdp);
            }

            //answer
            if ("answer".equals(type)) {
                map.put("fromUser",toUser);
                map.put("sdp",sdp);
            }

            //ice
            if ("_ice".equals(type)) {
                map.put("fromUser",toUser);
                map.put("iceCandidate",iceCandidate);
            }

            send(toUserSession,mapper.writeValueAsString(map));
        }catch(Exception e){
            log.error("onMessage,异常:", e);
        }
    }

    /**
     * 封装一个send方法，发送消息到前端
     */
    private void send(Session session, String message) {
        try {
            log.info("send message:{}",message);
            session.getBasicRemote().sendText(message);
        } catch (Exception e) {
            log.error("message,待发送的数据:{},异常:", message, e);
        }
    }

}

```

&emsp; 注意：因为我现在没有公网服务器，所以现在我的所有测试都只进行了内网测试。

---

### 4.1.3 效果图

##### 4.13.1 浏览器效果图
![浏览器视频效果图](/assets/img/webrtc/浏览器视频效果图.png)

---
&emsp;

##### 4.13.2 安卓效果图

> 电脑浏览器效果图

![电脑浏览器效果图](/assets/img/webrtc/电脑浏览器效果图.png)

---
&emsp;


> 手机浏览器效果图

![手机效果图](/assets/img/webrtc/手机效果图.png)




&emsp; app的话可以使用 ***Hbuilder X*** 进行打包。

&emsp; 注意：打包的时候记得修改自己的websocket服务的ip和端口。

---

## 5. 公网部署

因为现在没有公网服务器，所以暂时不弄。
