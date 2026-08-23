---
date: 2026-08-22
title: 结构型模式-AI整理版
categories:
  - 设计模式
tag:
  - 开发
  - java
  - springboot
  - 设计模式
footer: 结构型模式-AI整理版

---
# ![Java](/assets/img/icons/java.svg) 结构型模式-AI整理版

> 基于 [结构型模式](./结构型模式.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这系列怎么读

结构型模式关注“类与对象的组合”：通过适配、桥接、包装、代理等手段，把类和对象组合成更大的结构，同时保持结构清晰、耦合度低。

1. 先看“模式速览表”，对七个模式建立整体印象。
2. 两组易混的模式对比着记：适配器做“接口转换”、外观做“简化入口”；装饰器“包一层加行为”、代理“包一层控访问”。
3. 每个模式统一按“一句话定义 → 意图与适用场景 → 角色 → 示例代码 → 优缺点”组织；外观和代理的测试依赖服务已启动。

## 模式速览表

| 模式 | 一句话意图 | 典型场景 |
| --- | --- | --- |
| 适配器模式 | 把一个接口转换成客户端期望的另一种接口 | 三孔插座转两孔插座 |
| 桥接模式 | 抽象与实现分离，两个维度独立变化 | 消息服务 × QQ/微信客户端 |
| 装饰器模式 | 包装对象动态扩展功能，不改原对象 | 给跑步服务加计时能力 |
| 组合模式 | 树形结构统一处理“部分-整体” | 登录校验流程组件化 |
| 外观模式 | 用简单接口隐藏复杂子系统 | 对外 REST 接口封装 JPA 查询 |
| 享元模式 | 共享对象减少内存、提高性能 | 内部状态共享、外部状态传参 |
| 代理模式 | 用代理对象控制对另一对象的访问 | AOP 切面打印接口出入参 |

## 目录

- 一、适配器模式（Adapter Pattern）
- 二、桥接模式（Bridge Pattern）
- 三、装饰器模式（Decorator Pattern）
- 四、组合模式（Composite Pattern）
- 五、外观模式（Facade Pattern）
- 六、享元模式（Flyweight Pattern）
- 七、代理模式（Proxy Pattern）

---

## 一、适配器模式（Adapter Pattern）

### 一句话定义

允许将一个类的接口转换成客户端所期望的另一种接口，使原本不兼容的类可以协同工作。

### 意图与适用场景

- 想复用现有类，但它的接口和客户端期望的不一致。
- 直接改现有类接口会牵扯大量改动、破坏封装性，不如用适配器转换。
- 分两种类型：类适配器（用继承实现）、对象适配器（用组合实现），本例是对象适配器。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 目标接口（Target） | `Target`：客户端期望的两孔插座 |
| 被适配者（Adaptee） | `ThreePinSocket`：被适配的三孔插座 |
| 适配器（Adapter） | `Adapter`：实现 Target 并组合 ThreePinSocket |

### 示例代码

1. 目标接口和被适配的类：

```java
public interface Target {
    /** 三孔转两孔插座 */
    void twoSocket();
}

@Slf4j
@Component
public class ThreePinSocket {

    public void insert() {
        log.info("三口插座被插入电器插头。");
    }
}
```

2. 适配器，实现 Target 并持有被适配对象：

```java
@Component
@RequiredArgsConstructor
public class Adapter implements Target {

    private final ThreePinSocket threePinSocket;

    @Override
    public void twoSocket() {
        threePinSocket.insert();
    }
}
```

这样调用 `twoSocket()` 时，实际执行的是被适配类的 `insert()`。测试：注入 `Adapter` 后调用 `adapter.twoSocket()` 即可。

### 优缺点

- 优点：
  1. 增加类的透明性和复用性，客户端可以直接使用现有的类。
  2. 让接口不兼容的现有类与客户端协同工作。
- 缺点：
  1. 增加系统复杂度和代码阅读难度。
  2. 可能影响系统性能。
- 使用时权衡优缺点，选择合适的实现方式。

---

## 二、桥接模式（Bridge Pattern）

### 一句话定义

把抽象部分与实现部分分离成两个独立的继承结构，再通过桥接接口连接，使它们可以独立变化、互不影响。

### 意图与适用场景

- 一个类存在“功能”和“实现”两个变化维度时，把两个维度拆开，避免类爆炸。
- 抽象类通过桥接接口调用实现类的方法；可以不改原有代码就动态切换实现方式。
- 本例两个维度：消息服务（QQ / 微信）× 客户端实现（QQClient / WeChatClient）。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象类（Abstraction） | `MessageService`，持有 `Client` 引用 |
| 扩充抽象 | `QQMessageServiceImpl`、`WeChatMessageServiceImpl` |
| 实现接口（Implementor） | `Client` |
| 具体实现 | `QQClient`、`WeChatClient` |

### 示例代码

1. 抽象类和扩充抽象类：

```java
/**
 * 消息的接口
 */
public abstract class MessageService {

    public abstract void sendMessage(String message);

    public abstract void receiveMessage(String message);

    /** 桥接的客户端 */
    protected Client client;

    public MessageService(Client client) {
        this.client = client;
    }
}

@Service("qqMessageService")
@Slf4j
public class QQMessageServiceImpl extends MessageService {

    public QQMessageServiceImpl(@Qualifier("QQClient") Client client) {
        super(client);
    }

    @Override
    public void sendMessage(String message) {
        client.sendMsg(message);
    }

    @Override
    public void receiveMessage(String message) {
        client.receiveMsg(message);
    }
}
// WeChatMessageServiceImpl 同理，注入 weChatClient
```

2. 实现接口和具体实现：

```java
/**
 * 客户端接口
 */
public interface Client {

    /** 登录、授权 */
    void login();

    /** 发送消息并编码 */
    void sendMsg(String message);

    /** 接收并解码消息 */
    String receiveMsg(String message);
}

@Slf4j
@Component
public class QQClient implements Client {

    @Override
    public void login() {
        log.info("QQ客户端进行QQ登录授权。");
    }

    @Override
    public void sendMsg(String message) {
        // 模仿加密，实际根据文档修改
        log.info("QQ客户端发送编码后的消息：【{}】", Base64.encode(message, StandardCharsets.UTF_8));
    }

    @Override
    public String receiveMsg(String message) {
        // 模仿解密，实际根据文档修改
        String decryptMsg = Base64.decodeStr(message, StandardCharsets.UTF_8);
        log.info("QQ客户端接收消息并解码之后：【{}】", decryptMsg);
        return decryptMsg;
    }
}
// WeChatClient 同理，做微信登录授权和 Base64 编解码
```

3. 测试：分别注入两个 `MessageService`，调用 `sendMessage` / `receiveMessage`（入参为 Base64 编码后的消息），观察走不同的客户端实现。

### 优缺点

- 优点：
  1. 分离抽象和实现，两者独立变化，提高系统灵活性和可扩展性。
  2. 对客户端隐藏实现细节，客户端只关注抽象部分，降低复杂度。
  3. 可以动态切换不同的实现方式，满足不同需求。
  4. 提高系统的可维护性和可复用性。
- 缺点：原文未专门列出。

---

## 三、装饰器模式（Decorator Pattern）

### 一句话定义

把对象包装进具有新行为的装饰器对象中，动态扩展对象的功能，而不修改原始对象的代码。

### 意图与适用场景

- 组件接口定义被装饰对象的行为；装饰器接口与组件接口相同并新增行为；具体装饰器把组件包装起来添加额外行为。
- 可以在运行时动态添加、删除或修改对象的行为。
- 本例：给“跑步服务”动态加上“计时”能力。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 组件接口 | `RunService` |
| 具体组件 | `RunServiceImpl` |
| 装饰器接口 | `RunServiceDecorator`（继承 RunService，新增行为） |
| 具体装饰器 | `RunServiceTimeDecorator`（持有 RunService） |

### 示例代码

1. 基本接口、具体实现和装饰器接口：

```java
public interface RunService {

    void startRun();

    void endRun();
}

@Service("runService")
@Slf4j
public class RunServiceImpl implements RunService {

    @Override
    public void startRun() {
        log.info("开始跑步...");
    }

    @Override
    public void endRun() {
        log.info("结束跑步...");
    }
}

public interface RunServiceDecorator extends RunService {

    /** 开始跑步并计时 */
    void startRunTime();

    /** 结束跑步并结束计时 */
    void endRunTime();
}
```

2. 具体装饰器，实现额外行为：

```java
@Slf4j
@Service
@RequiredArgsConstructor
public class RunServiceTimeDecorator implements RunServiceDecorator {

    private final RunService runService;

    private TimeInterval timer = null;

    @Override
    public void startRun() {
        runService.startRun();
    }

    @Override
    public void endRun() {
        runService.endRun();
    }

    @Override
    public void startRunTime() {
        timer = DateUtil.timer();
        this.startRun();
    }

    @Override
    public void endRunTime() {
        this.endRun();
        log.info("本次跑步，耗费了:{}毫秒", timer.intervalRestart());
    }
}
```

3. 测试：先直接用 `runService` 跑一次；再用装饰器 `startRunTime()` → `sleep(5秒)` → `endRunTime()`，日志会打印本次耗时。

### 注意点

- `RunServiceImpl` 的 `@Service("runService")` 必须带名称，否则无法自动注入；用 `@Qualifier("runServiceImpl")` 也能解决，但每个注入点都要改，原文不建议。

### 优缺点

- 优点：
  1. 运行时动态添加、删除或修改对象行为，不改动对象本身的代码。
  2. 代码更灵活、可扩展，也更容易维护。
- 缺点：原文未专门列出（另见注入名称的注意点）。

---

## 四、组合模式（Composite Pattern）

### 一句话定义

将对象组合成树形结构来表示“部分-整体”的层次结构，让客户端对单个对象和组合对象的使用具有一致性。

### 意图与适用场景

- 树中有两类节点：叶节点（最底层，没有子节点）和组合节点（包含一个或多个子节点）。
- 核心思想：把对象组合成树形结构，通过递归遍历整棵树，实现对整体的操作。
- 本例：把登录校验流程组件化，逐个节点执行。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象组件 | `Component<T>` |
| 叶子节点 | `Leaf<T>` |
| 组合节点 | `Composite<T>`（持有 `children` 列表） |

注意：原文示例里的 Condition 其实就是 Leaf，只是为了区分有无父级组合组件才另起名；树上只有组合节点和叶子节点。

### 实现逻辑图

![组合模式逻辑图](/assets/img/设计模式/创作型模式/组合模式逻辑图.png)

执行顺序：root → 记录开始组件 → 登录参数校验组合组件（检查对象是否为空 → 检查 username → 检查 password → 检查时间戳）→ 记录结束时间组件。

### 示例代码

1. 抽象组件、组合组件、叶子节点：

```java
public abstract class Component<T> {

    protected String name;

    protected Consumer<T> consumer;

    public Component(String name, Consumer<T> consumer) {
        this.name = name;
        this.consumer = consumer;
    }

    public abstract void operation(T data);
}

@Slf4j
public class Composite<T> extends Component<T> {

    private List<Component<T>> children = new ArrayList<>();

    public Composite(String name, Consumer<T> consumer) {
        super(name, consumer);
    }

    @Override
    public void operation(T data) {
        Optional.ofNullable(consumer).ifPresent(c -> c.accept(data));
        startForEachComponent(data);
    }

    public void add(Component<T> component) {
        children.add(component);
    }

    public void addAll(Collection<Component<T>> components) {
        children.addAll(components);
    }

    private void startForEachComponent(T data) {
        log.info("【{}】，开始执行所有组件。", this.name);
        children.forEach(component -> component.operation(data));
        log.info("【{}】,结束执行所有组件。", this.name);
    }
}

@Slf4j
public class Leaf<T> extends Component<T> {

    public Leaf(String name, Consumer<T> consumer) {
        super(name, consumer);
    }

    @Override
    public void operation(T data) {
        consumer.accept(data);
    }
}
```

2. 登录条件验证类，把组件组装成树：

```java
@Service
@Slf4j
public class LoginCondition<T> {

    public void check(T data) {
        Composite<T> root = new Composite<>("root组件", null);
        AtomicLong startTime = new AtomicLong();

        // 记录开始时间
        root.add(new Leaf<>("记录开始时间组件", d -> startTime.set(System.currentTimeMillis())));

        // 登录参数校验组合组件
        Composite<T> condition = new Composite<>("登录参数校验组合组件", null);
        Leaf<T> conditionObj = new Leaf<>("检查对象是否为空组件", d -> {
            if (d == null) {
                throw ExceptionUtil.wrapRuntime("对象不可以为空！");
            }
        });
        Leaf<T> conditionUsername = new Leaf<>("检查username组件", d -> {
            Map<String, Object> map = (Map<String, Object>) d;
            if (StrUtil.isEmptyIfStr(map.get("username"))) {
                throw ExceptionUtil.wrapRuntime("用户名不可以为空！");
            }
        });
        // 原文还有检查password、检查时间戳（不可为空且不可超出当前2分钟）两个叶子
        condition.addAll(Arrays.asList(conditionObj, conditionUsername));
        root.add(condition);

        // 记录结束时间
        root.add(new Leaf<>("记录结束时间组件",
                d -> log.info("本次执行操作，总耗时{}毫秒。", System.currentTimeMillis() - startTime.get())));

        root.operation(data);
    }
}
```

3. 测试：注入 `LoginCondition<Map<String, Object>>`，组装包含 username、password、timestamp 的 map 后调用 `check(map)`，日志会按树的顺序逐个执行组件。

### 优缺点

- 优点：
  1. 简化客户端代码：不需要知道对象的具体类型，用相同方式处理叶节点和组合节点。
  2. 增加新组件容易：添加新的叶节点和组合节点不需要修改现有代码。
  3. 相同的操作应用于所有节点，提高代码复用性。
- 缺点：原文未专门列出。

---

## 五、外观模式（Facade Pattern）

### 一句话定义

提供一个简单的接口，隐藏一组复杂的子系统，让客户端能更方便地使用这些子系统。

### 意图与适用场景

- 外观类封装一组复杂子系统，为客户端提供简单接口；客户端不关心子系统的具体实现。
- 原文例子：多媒体播放器要支持音频、视频、图片，可定义外观类封装各播放子系统，客户端只管调播放接口。
- 本例：访问 MySQL（django 库）并对外提供接口层。需先引入 `mysql-connector-java`、`spring-boot-starter-data-jpa` 依赖并配置 datasource。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 子系统 | JPA Repository、MySQL 数据访问 |
| 外观 | `App01UserInfoService` 封装查询逻辑 |
| 对外入口 | `UserInfoController` 提供 REST 接口 |

### 示例代码

1. 实体类和 Repository：

```java
@Entity(name = "app01_userinfo")
@Data
public class App01Userinfo {
    @Id
    private Long id;
    private String name;
    private String password;
    private Integer age;
}

public interface App01UserInfoRepository extends JpaRepository<App01Userinfo, Long> {

    App01Userinfo findByName(String name);
}
```

2. 逻辑类（外观）：

```java
@Service
@RequiredArgsConstructor
public class App01UserInfoService {

    private final App01UserInfoRepository userInfoRepository;

    public Optional<App01Userinfo> getUserByName(String name) {
        return Optional.ofNullable(userInfoRepository.findByName(name));
    }
}
```

3. 对外提供 REST 接口：

```java
@RequestMapping("/user/")
@RestController
@RequiredArgsConstructor
public class UserInfoController {

    private final App01UserInfoService userInfoService;

    @GetMapping("{name}")
    public App01Userinfo getByUserInfo(@PathVariable String name) {
        return userInfoService.getUserByName(name).orElseGet(App01Userinfo::new);
    }
}
```

4. 测试：用 `TestRestTemplate` 请求 `http://localhost:8080/user/赵羽` 并打印返回结果。注意：测试时必须保证服务已启动。

### 优缺点

- 优点：
  1. 简化客户端与子系统之间的交互，降低客户端的复杂度。
  2. 提高代码的可维护性和可读性。
- 缺点：原文未专门列出。

---

## 六、享元模式（Flyweight Pattern）

### 一句话定义

通过共享对象来减少内存使用和提高性能：相似的对象被共享，而不是每个都新建实例。

### 意图与适用场景

- 对象分两种状态：
  1. 内部状态：固有属性，不随环境变化，可以被共享。
  2. 外部状态：随环境变化的属性，不能被共享，作为参数传给享元对象。
- 把内部状态抽象成共享对象，减少创建对象的数量、节省内存。
- 常用于需要创建大量相似对象的场景，例如游戏中的粒子系统、文本编辑器中的字符。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 享元接口 | `Flyweight` |
| 具体享元 | `ConcreteFlyweight`（持有内部状态） |
| 享元工厂 | `FlyweightFactory`（Map 缓存共享对象） |
| 调用方 | `FlyweightService` |

### 示例代码

1. 享元接口、具体享元和享元工厂：

```java
public interface Flyweight {

    void operation(String extrinsicState);
}

@AllArgsConstructor
@Slf4j
public class ConcreteFlyweight implements Flyweight {

    private final String intrinsicState;

    @Override
    public void operation(String extrinsicState) {
        log.info("内部状态：{}，外部状态：{}", intrinsicState, extrinsicState);
    }
}

@Component
public class FlyweightFactory {

    private Map<String, Flyweight> flyweightMap = new HashMap<>();

    public Flyweight getFlyweight(String intrinsicState) {
        if (!flyweightMap.containsKey(intrinsicState)) {
            flyweightMap.put(intrinsicState, new ConcreteFlyweight(intrinsicState));
        }
        return flyweightMap.get(intrinsicState);
    }
}
```

2. 享元服务类注入工厂，`doSomething(内部状态, 外部状态)` 里 `getFlyweight(内部状态)` 取共享对象后调用 `operation(外部状态)`。

3. 测试：依次调用 `doSomething("n1", "w1")`、`doSomething("n1", "w2")`（复用同一个 n1 享元对象）、`doSomething("n2", "w2")`。

### 优缺点

- 优点：
  1. 共享内部状态，避免创建大量相似的对象。
  2. 节省内存，提高应用程序的性能和效率。
- 缺点：原文未专门列出。

---

## 七、代理模式（Proxy Pattern）

### 一句话定义

提供一个代理对象来控制对另一个对象的访问。

### 意图与适用场景

- 通常用于三种情况：
  1. 远程代理：代理对象在不同的地址空间中，可以通过网络通信。
  2. 虚拟代理：创建时不立即加载真正的对象，需要时才加载。
  3. 安全代理：控制对真正对象的访问权限，可以验证访问者的权限。
- 核心思想：代理对象与真实对象实现相同的接口，代理持有真实对象的引用，必要时调用其方法。
- 本例用 Spring AOP 实现（需增加 `spring-boot-starter-aop` 依赖）：给指定目录下所有 Controller 接口自动生成代理，打印入参和返回值。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 真实对象 | `ProxyPatternController` 的接口方法 |
| 代理 | Spring AOP 根据 `LogProxyAspect` 切面生成的代理对象 |
| 客户端 | 通过 HTTP 请求接口的调用方 |

### 示例代码

1. 定义一个接口类，用于接收参数和返回结果：

```java
@RequestMapping("proxy")
@RestController
public class ProxyPatternController {

    @PostMapping("/{name}")
    public Map<String, Object> test(@PathVariable String name, @RequestBody Map<String, Object> params) {
        Map<String, Object> response = new HashMap<>();
        response.put("code", 200);
        response.put("message", "成功");
        return response;
    }
}
```

2. 日志代理切面，打印指定目录下所有 controller 接口的入参和返回值：

```java
@Aspect
@Component
@Slf4j
public class LogProxyAspect {

    @Pointcut("execution(* com.blacktea.structuralpatterns.proxypattern.controller.*.*(..))")
    public void pointcut() {}

    @Before("pointcut()")
    public void beforePointcut(JoinPoint joinPoint) {
        Map<String, Object> map = new HashMap<>();
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        String[] parameterNames = signature.getParameterNames();
        Object[] args = joinPoint.getArgs();
        for (int i = 0; i < args.length; i++) {
            map.put(parameterNames[i], args[i]);
        }
        log.info("入参解析后：{}，请求参数为：{}", map, Arrays.toString(args));
    }

    @AfterReturning(pointcut = "pointcut()", returning = "result")
    public void afterReturningPointcut(JoinPoint joinPoint, Object result) {
        log.info("接口调用结束，返回结果为：{}", result);
    }
}
```

3. 测试：启动项目后，用 `HttpRequest.post("http://localhost:8080/proxy/赵羽")` 携带 JSON body（`.body(...).timeout(20000).execute()`）请求接口，日志会打印入参和返回结果。注意：必须保证服务已启动；也可直接用 Postman 或其他工具请求测试。

### 优缺点

- 优点：
  1. 对客户端隐藏真实对象的实现细节，提高系统的安全性和稳定性。
  2. 可以在不修改真实对象的情况下，对其进行增强或限制访问。
  3. 可以实现远程调用，让客户端访问不同地址空间中的对象。
- 缺点：
  1. 增加系统复杂度：需要增加代理类和真实对象的接口。
  2. 可能影响系统性能：代理对象要做额外处理，增加系统开销。

---

## 最后怎么复习

1. 适配器做接口转换，外观做简化入口；装饰器包一层加行为，代理包一层控访问（本例是 AOP）。
2. 桥接：两个变化维度拆成两棵继承树，靠组合连接。
3. 组合：树形结构，叶子和组合节点同一套接口。
4. 享元：内部状态共享、外部状态传参，记住“工厂 + Map 缓存”骨架。
