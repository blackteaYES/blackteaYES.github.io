---
date: 2026-08-22
title: WebRTC的学习-AI整理版
categories:
  - webrtc
tag:
  - 音视频
  - springboot
  - js
footer: 该文章集成了WebRTC和SpringBoot,以websocket作为信令服务。

---
# ![WebRTC](/assets/img/icons/webrtc.svg) WebRTC的学习-AI整理版

> 基于 [WebRTC的学习](./webrtc.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这份笔记怎么读

建议先看懂原理再动手写例子，按下面顺序阅读：

1. WebRTC 是什么、能做什么
2. WebRTC 的整体架构
3. 通信原理：媒体协商（SDP）+ 网络协商（Candidate）+ 信令服务器
4. 安装 coturn（STUN/TURN）穿透和转发服务器
5. 跑通一对一通话案例（WebRTC + SpringBoot + WebSocket）
6. 打包 App、公网部署

## 学习路线图

| 阶段 | 重点 | 说明 |
| --- | --- | --- |
| 入门 | 概念与架构 | 知道 WebRTC 能做什么、分几层 |
| 原理 | NAT、STUN、TURN、ICE | 理解点对点连接是怎么建立的 |
| 原理 | SDP 与信令服务器 | 理解媒体信息和网络信息如何交换 |
| 环境 | coturn | 搭建 STUN/TURN 服务器并测试 |
| 实战 | 一对一通话 | WebRTC + SpringBoot + WebSocket 完整案例 |
| 进阶 | 公网部署 | 有公网服务器后再实践 |

---

## 一、WebRTC 是什么

WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输，使用户在无需安装任何插件或第三方软件的情况下，创建点对点的数据分享和电话会议成为可能。

简单来说，就是可以实现例如微信电话的技术，在浏览器里就可以实现视频通话。

WebRTC 有许多不同的用例，从使用摄像头或麦克风的基本 Web 应用程序到更高级的视频通话应用程序和屏幕共享。它提供了视频会议的核心技术，包括音视频的采集、编解码、网络传输、展示等功能，并且支持跨平台（Linux、Windows、Mac、Android 等）。WebRTC 中文网内还有很多小[示例](https://webrtc.p2hp.com/samples/)。

---

## 二、WebRTC 的架构

![WebRTC架构图](/assets/img/webrtc/WebRTC架构图.png)

| 组件 | 说明 |
| --- | --- |
| Your Web App | Web 开发者基于浏览器提供的 Web API 开发的实时通信应用 |
| Web API | 面向第三方开发者的 WebRTC 标准 API（JavaScript） |
| WebRTC Native C++ API | 本地 C++ API 层，使浏览器厂商容易实现标准的 Web API，抽象地对数字信号过程进行处理 |
| Transport / Session | 传输/会话层，采用 libjingle 库的部分组件实现，无须使用 xmpp/jingle 协议 |
| VoiceEngine | 音频引擎，一系列音频多媒体处理框架，是 Google 收购 GIPS 公司后开源的，VoIP 技术业界领先 |
| VideoEngine | 视频处理引擎，从摄像头采集到网络传输再到视频显示的完整解决方案 |

引擎中的两个重点：

- Opus（音频编码）：支持 6 kbit/s 到 510 kbit/s 的恒定和可变比特率编码，帧大小 2.5 ms 到 60 ms，采样率 8 kHz 到 48 kHz（20 kHz 带宽，可覆盖人类听觉系统的整个听力范围），由 IETF RFC 6176 定义
- NetEQ 模块：语音引擎的核心模块，一种动态抖动缓冲和错误隐藏算法，用于隐藏网络抖动和数据包丢失的负面影响，尽可能保持低延迟和最高语音质量
- VP8（视频编码）：WebRTC 视频引擎默认的编解码器，针对低延时设计，适合实时通信场景

---

## 三、WebRTC 的通信原理

两个不同网络环境的（具备摄像头/麦克风的）浏览器要实现点对点的实时音视频对话，难点有三个：

1. 了解对方的媒体格式、支持的最大分辨率和其他媒体信息？
2. 了解彼此的网络，才有可能找到一条通信链路？
3. 还没建立连接时，如何交换“媒体信息”和“网络信息”？

对应两组协商和一个交换通道：媒体协商（sdp）、网络协商（candidate）、信令服务器。

### 1. 媒体协商（SDP）

![WebRTC媒体协商](/assets/img/webrtc/WebRTC媒体协商.png)

彼此要了解对方支持的媒体格式，最简单的方法就是取它们的交集（如 H264）。有一种特殊的协议叫做 Session Description Protocol（SDP），可以用来描述这些信息。

媒体协商：参与视频通信的双方必须首先交换 SDP 信息，这样双方才能知根知底，交换 SDP 的过程就称为“媒体协商”。

### 2. 网络协商（Candidate）

理想的网络情况是每台电脑都有私有公网 IP，可以直接点对点连接。

![理想网络情况](/assets/img/webrtc/理想网络情况.png)

实际情况是电脑之间或大或小都在某个局域网中，需要 NAT（Network Address Translation，网络地址转换）。同一局域网内可以直接用内网网段，但一般都是在不同局域网中。

![实际网络情况](/assets/img/webrtc/实际网络情况.png)

在中国的网络环境下，据统计至少有一半的网络不能直接连接。根本原因：互联网发展早期绝大多数 IPv4 地址资源被国外占据，轮到中国等发展中国家时，大多数计算机没有公网 IP，只能通过路由器和交换机做 NAT 转换，且相当一部分 NAT 是对称的，基本无法直接打通。

![NAT网关转换](/assets/img/webrtc/NAT网关转换.png)

所以要解决上述问题，需要用到 STUN 和 TURN。

#### 2.1 STUN

STUN（Session Traversal Utilities for NAT，NAT 会话穿越应用程序）是一种网络协议，由 RFC 5389 定义。它允许位于 NAT（或多重 NAT）后的客户端找出自己的公网地址、查明自己位于哪种类型的 NAT 之后、以及 NAT 为某个本地端口所绑定的公网端口，这些信息被用来在两个同时处于 NAT 路由器之后的主机之间创建 UDP 通信。

我们可以搭建一个 STUN 服务器，它主要是给无法在公网环境下的视频通话设备分配公网 IP 用的，这样两台电脑就可以在公网 IP 中进行通话。

![STUN](/assets/img/webrtc/STUN.png)

一句话说明 STUN 做的事情：告诉我你的公网 IP 地址 + 端口是什么？搭建 STUN 服务器很简单，媒体流传输按 P2P 方式进行。

但 STUN 并不是每次都能成功分配 IP 地址，且 P2P 传输用的是本地带宽，多人视频通话时质量好坏取决于使用者的本地带宽。这就需要 TURN 来解决。

#### 2.2 TURN

TURN（Traversal Using Relays around NAT）是 STUN/RFC 5389 的一个拓展，主要添加了 Relay 功能。如果终端在 NAT 之后，特定情景下可能无法和其对等端（peer）直接通信，这时就需要公网的服务器作为一个中继，对来往的数据进行转发，这个转发协议就被定义为 TURN。

![TURN](/assets/img/webrtc/TURN.png)

在 STUN 分配公网 IP 失败后，可以通过 TURN 服务器请求公网 IP 地址作为中继地址。这种方式带宽由服务器端承担，多人视频聊天时本地带宽压力较小，且根据 Google 的说明，TURN 协议可以使用在所有的环境中。

#### 2.3 ICE 与总结

- STUN 和 TURN 是 WebRTC 中经常用到的 2 个协议，服务器用 coturn 开源项目搭建（集成了 STUN 和 TURN 的功能）
- ICE 跟 STUN 和 TURN 不一样，它不是一种协议，而是一个框架（Framework），整合了 STUN 和 TURN
- WebRTC 中描述网络信息的术语叫 candidate

一句话对照：媒体协商 sdp，网络协商 candidate。

### 3. 信令服务器（Signal Server）

两个客户端之间怎么交换 SDP 和 Candidate？需要一个“中间商”，也就是信令服务器（Signal Server），转发彼此的媒体信息和网络信息。

![SignalServer](/assets/img/webrtc/SignalServer.png)

开发应用时，把彼此的 APP 连接到信令服务器（一般搭建在公网，或两端都可以访问到的局域网），借助它完成 SDP 媒体信息及 Candidate 网络信息的交换。

一个类比：写信给朋友，信是 sdp，地址是 candidate；邮局（邮递员）充当信令服务器，地址太大需要逐级分发（市邮局 -> 县邮局 -> 乡镇邮局 -> 邮递员）。NAT 相当于你主动根据邮局地址去拿，Relay 相当于让邮递员送上门。

交换 SDP 的过程：

![交换SDP的过程](/assets/img/webrtc/交换SDP的过程.png)

1. Amy 通过 setLocalDescription 保存自己的 SDP 信息，然后通过 offer 方法发送给信令服务器
2. 信令服务器将 Amy 的 SDP 转发给另一端的 Bob，Bob 先调用 setRemoteDescription 保存 Amy 的 SDP
3. Bob 调用 setLocalDescription 保存他的 SDP，再使用 answer 方法通过信令服务器发给 Amy
4. Amy 收到后调用 setRemoteDescription 保存，双方完成 SDP 交换、找到交集，能达成协议就可以建立 P2P 连接并开始通信

---

## 四、安装 coturn 穿透和转发服务器

### 1. 安装依赖

```shell
# ubuntu
sudo apt-get install libssl-dev
sudo apt-get install libevent-dev

# centos
sudo yum install openssl-devel
sudo yum install libevent-devel
```

### 2. 下载源码编译安装

```shell
git clone https://github.com/coturn/coturn
cd coturn
./configure
make
sudo make install
```

执行 `./configure` 时可能遇到的报错：

- 需要安装 g++：`sudo apt-get install g++`

![configure执行报错1](/assets/img/webrtc/configure执行报错1.png)

- 缺少 pkg-config：`sudo apt-get install pkg-config`，之后再次执行 `./configure`

![configure执行报错2](/assets/img/webrtc/configure执行报错2.png)

configure 正常运行后，依次执行 make 和 sudo make install。

![configure正常运行](/assets/img/webrtc/configure正常运行.png)

![make](/assets/img/webrtc/make.png)

### 3. 启动并测试

```shell
sudo nohup turnserver -L 0.0.0.0 -a -u lqf:123456 -v -f -r nort.gov &
```

用 [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/) 测试。

测试 stun：

![测试stun](/assets/img/webrtc/测试stun.png)

注意：stun 不需要 username 和 password（截图里是多写了）。

测试 turn：

![测试turn](/assets/img/webrtc/测试turn.png)

注意：测试 turn 需要 username 和 password，且 IceTransports value 选择为 relay。测试时出现过 701 的返回码，查资料没有头绪，可能和当时用的是本地虚拟机（云服务器过期）有关，待后续再试。

---

## 五、案例实现：一对一通话

### 1. 场景说明

![一对一通话场景](/assets/img/webrtc/一对一通话场景.png)

在一对一通话场景中，每个 Peer 均创建有一个 PeerConnection 对象，由一方主动发 Offer SDP，另一方应答 Answer SDP，最后双方交换 ICE Candidate 完成通话链路的建立。在中国的网络环境中，至少一半的网络无法直接穿透打通，这种情况只能借助 TURN 服务器中转。

### 2. 技术选型与整体流程

- 前端：html、css、js、WebRTC、websocket
- 后端：springboot + websocket

![WebRTC整合SpringBoot执行流程](/assets/img/webrtc/WebRTC整合SpringBoot执行流程.png)

### 3. 前端页面代码

页面结构：远端全屏视频 + 本地小窗视频 + 好友账号输入框 + 通话/挂断按钮（样式部分见原文）。

```html
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
```

核心 JS 逻辑：

```html
<script type="text/javascript">
    // 生成一个随机的用户名
    let username = '' + Math.floor(Math.random() * (100 - 1) + 1);
    if (username) {
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
        if ('WebSocket' in window) {
            // 使用局域网IP的目的是打包成app时可以通过局域网访问
            url = "ws://192.168.8.57:8080/webrtc/" + username
            websocket = new WebSocket(url);
        } else {
            alert("当前浏览器不支持WebSocket！");
        }

        websocket.onerror = function (e) {
            console.log(e)
            alert("WebSocket连接发生错误！");
        };

        websocket.onclose = function () {
            console.error("WebSocket连接关闭");
        };

        websocket.onopen = function () {
            console.log("WebSocket连接成功");
        };

        websocket.onmessage = async function (event) {
            let { type, fromUser, msg, sdp, iceCandidate } = JSON.parse(event.data.replace(/\n/g, "\\n").replace(/\r/g, "\\r"));

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

                    // 创建本地视频并发送offer
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
        if (!Rtc) {
            alert("不支持WebRTC")
        }
        // peer = new RTCPeerConnection(defaultConfiguration);
        peer = new RTCPeerConnection();
        // ice
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

        // track
        peer.ontrack = function (e) {
            if (e && e.streams) {
                remoteVideo.srcObject = e.streams[0];
            }
        };
    }

    /* 按钮事件 */
    function ButtonFunInit() {
        // 视频通话
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

        // 挂断
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

                // 挂断同时，通知对方
                websocket.send(JSON.stringify({
                    type: "hangup",
                    fromUser: username,
                    toUser: document.getElementById('toUser').value,
                }));
            }

            if (peer) {
                // 将peer的各类回调置空：ontrack、onremovetrack、onremovestream、
                // onicecandidate、oniceconnectionstatechange、onsignalingstatechange、
                // onicegatheringstatechange、onnegotiationneeded
                peer.close();
                peer = null;
            }

            localVideo.srcObject = null;
            remoteVideo.srcObject = null;
        }
    }
</script>
```

### 4. 后端代码

核心依赖：spring-boot-starter-parent 2.5.3 + spring-boot-starter-websocket + lombok + hutool-all（Java 1.8）。

配置类：

```java
@Configuration
// 扫描cn.hutool.extra.spring包下所有类并注册之
@ComponentScan(basePackages = {"cn.hutool.extra.spring"})
public class MyWebSocketConfig {

    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }

    @Bean
    public ObjectMapper mapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper;
    }
}
```

WebSocket 信令服务类（ConcurrentHashMap 保存在线会话，把收到的 offer/answer/ice 按接收人转发）：

```java
@Slf4j
@Component
@ServerEndpoint(value = "/webrtc/{username}")
@Import(cn.hutool.extra.spring.SpringUtil.class)
public class WebRtcWebSocketServer {

    /**
     * 连接集合
     */
    private static final Map<String, Session> sessionMap = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("username") String username) {
        log.info("ws client 连接成功,username={}, session={}", username, session);
        sessionMap.put(username, session);
    }

    @OnClose
    public void onClose(Session session) {
        Set<Map.Entry<String, Session>> entries = sessionMap.entrySet();
        for (Map.Entry<String, Session> entry : entries) {
            if (entry.getValue() == session) {
                log.info("ws client 关闭成功,username={}, session={}", entry.getKey(), session);
                sessionMap.remove(entry.getKey());
                break;
            }
        }
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("ws 出现异常,", error);
    }

    /**
     * 服务器接收到客户端消息时调用的方法
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        try {
            log.info("receive message:{}", message);
            ObjectMapper mapper = SpringUtil.getBean(ObjectMapper.class);
            HashMap hashMap = mapper.readValue(message, HashMap.class);

            String type = (String) hashMap.get("type");           // 消息类型
            String toUser = (String) hashMap.get("toUser");
            Session toUserSession = sessionMap.get(toUser);
            String fromUser = (String) hashMap.get("fromUser");
            String msg = (String) hashMap.get("msg");
            String sdp = (String) hashMap.get("sdp");
            Map iceCandidate = (Map) hashMap.get("iceCandidate");

            HashMap<String, Object> map = new HashMap<>();
            map.put("type", type);

            // 呼叫的用户不在线
            if (toUserSession == null) {
                map.put("type", "call_back");
                map.put("fromUser", "系统消息");
                map.put("msg", "Sorry，呼叫的用户不在线！");
                send(session, mapper.writeValueAsString(map));
                return;
            }

            if ("hangup".equals(type)) {          // 对方挂断
                map.put("fromUser", fromUser);
                map.put("msg", "对方挂断！");
            }
            if ("call_start".equals(type)) {      // 视频通话请求
                map.put("fromUser", fromUser);
                map.put("msg", "1");
            }
            if ("call_back".equals(type)) {       // 视频通话请求回应
                map.put("fromUser", toUser);
                map.put("msg", msg);
            }
            if ("offer".equals(type)) {           // offer
                map.put("fromUser", toUser);
                map.put("sdp", sdp);
            }
            if ("answer".equals(type)) {          // answer
                map.put("fromUser", toUser);
                map.put("sdp", sdp);
            }
            if ("_ice".equals(type)) {            // ice
                map.put("fromUser", toUser);
                map.put("iceCandidate", iceCandidate);
            }

            send(toUserSession, mapper.writeValueAsString(map));
        } catch (Exception e) {
            log.error("onMessage,异常:", e);
        }
    }

    /**
     * 封装一个send方法，发送消息到前端
     */
    private void send(Session session, String message) {
        try {
            log.info("send message:{}", message);
            session.getBasicRemote().sendText(message);
        } catch (Exception e) {
            log.error("message,待发送的数据:{},异常:", message, e);
        }
    }
}
```

注意：因为没有公网服务器，当时所有测试都只进行了内网测试。

### 5. 效果图

![浏览器视频效果图](/assets/img/webrtc/浏览器视频效果图.png)

![电脑浏览器效果图](/assets/img/webrtc/电脑浏览器效果图.png)

![手机效果图](/assets/img/webrtc/手机效果图.png)

App 可以使用 HBuilder X 进行打包，打包时记得修改自己的 websocket 服务的 ip 和端口。

---

## 六、公网部署

因为当时没有公网服务器，公网部署暂时没有实践，待有公网环境后再补充。

---

## 七、参考资料

原文开头集中放了大量外链，整理成下表按需取用：

| 名称 | 地址 | 用途 |
| --- | --- | --- |
| WebRTC 中文网 | <http://webrtc.p2hp.com/#google_vignette> | 入门只看这个就够 |
| WebRTC 中文社区 | <https://webrtc.org.cn/> | 中文社区 |
| WebRTC 英文官网 | <https://webrtc.org/> | 最新文档 |
| WebRTC 安全相关 | <http://webrtc-security.github.io/> | 安全知识 |
| 媒体设备入门 | <http://webrtc.p2hp.com/getting-started/media-devices.html> | 查看 WebRTC APIs |
| 打开本地摄像头示例 | <https://www.an.rustfisher.com/webrtc/web-samples/getUserMedia-open-camera/> | 中文示例 |
| WebRTC 代码案例博客 | <https://www.bbsmax.com/A/B0zqLrWNdv/> | 本篇案例代码来源 |
| webrtc-p2p 源码 | <https://github.com/shushushv/webrtc-p2p> | 参考源码 |
| WebRTC 原理简述 | <https://www.jianshu.com/p/476f39de86ed> | 原理博客 |
| WebRTC 介绍及简单使用 | <https://zhuanlan.zhihu.com/p/490239698> | 入门介绍 |
| coturn 开源地址 | <https://github.com/coturn/coturn> | STUN/TURN 服务器搭建 |
| Trickle ICE 测试网站 | <https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/> | 测试 stun/turn |
| P2P 知识 | <https://zhuanlan.zhihu.com/p/488135992> | P2P 基础 |
| P2P 技术详解（一）：NAT 详解 | <https://www.cnblogs.com/mlgjb/p/8243646.htm> | NAT 原理、P2P 简介 |
| P2P 技术详解（二）：NAT 穿越（打洞） | <https://www.jianshu.com/p/9bfbcbee0abb> | 打洞方案 |
| P2P 技术详解（三）：STUN、TURN、ICE | <https://www.jianshu.com/p/258e7d8be2ba> | 穿透协议 |
| 详解 P2P 技术中的 NAT 穿透原理 | <https://www.jianshu.com/p/f71707892eb2> | NAT 穿透原理 |
| b 站视频教学 | <https://www.bilibili.com/video/BV1D14y1W7qp?p=1&vd_source=d6cd8b3f892acbf22f02da2bfa7d95fe> | 入门视频 |

---

## 八、一页总结

- WebRTC 让浏览器不装插件就能点对点传输音视频和任意数据
- 建立连接要解决三件事：媒体信息（SDP）、网络信息（Candidate）、两者如何交换（信令服务器）
- STUN 负责“告诉我公网 IP+端口”，TURN 负责“打不通时中继转发”，ICE 是整合两者的框架
- 信令服务器用 WebSocket 实现，本篇用 SpringBoot + WebSocket 完成
- 一对一流程：call_start -> call_back -> offer -> answer -> 交换 ICE Candidate -> P2P 通话
