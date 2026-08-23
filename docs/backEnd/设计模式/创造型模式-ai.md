---
date: 2026-08-22
title: 创造型模式-AI整理版
categories:
  - 设计模式
tag:
  - 开发
  - java
  - springboot
  - 设计模式
footer: 创造型模式-AI整理版

---
# ![Java](/assets/img/icons/java.svg) 创造型模式-AI整理版

> 基于 [创造型模式](./创造型模式.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这系列怎么读

创造型模式处理“对象的创建”：隐藏创建细节，提供更灵活的创建方式，降低系统耦合度。

1. 先看“模式速览表”，对六个模式建立整体印象。
2. 简单工厂、工厂方法、抽象工厂是工厂模式的三种变体，建议连着读、对比着记。
3. 每个模式统一按“一句话定义 → 意图与适用场景 → 角色 → 示例代码 → 优缺点”组织，示例基于 Spring Boot。
4. 复习时先看定义、角色和优缺点，代码留到落地时再回看。

## 模式速览表

| 模式 | 一句话意图 | 典型场景 |
| --- | --- | --- |
| 简单工厂模式 | 一个工厂类根据参数创建不同对象 | 按类型获取 Cat / Dog / SeaOtter |
| 工厂方法模式 | 由具体工厂类负责创建对象 | 实现 `FactoryBean` 创建 `UserService` |
| 抽象工厂模式 | 创建一组相关的对象 | 支付场景：同时提供支付宝、微信支付 |
| 单例模式 | 保证一个类只有一个实例并提供全局访问点 | Spring 单例 Bean、双重检查锁、静态内部类 |
| 原型模式 | 通过复制已有对象来创建新对象 | 实现 `Cloneable`、`@Scope("prototype")` |
| 建造者模式 | 把复杂对象的构造过程分步封装 | `@Builder` 构建对象并用 MapStruct 转换 |

## 目录

- 一、简单工厂模式（Simple Factory Pattern）
- 二、工厂方法模式（Factory Method Pattern）
- 三、抽象工厂模式（Abstract Factory Pattern）
- 四、单例模式（Singleton Pattern）
- 五、原型模式（Prototype Pattern）
- 六、建造者模式（Builder Pattern）

---

## 一、简单工厂模式（Simple Factory Pattern）

### 一句话定义

通过一个工厂类来创建不同类型的对象，客户端只需要向工厂要对象，不需要知道具体的创建过程。

### 意图与适用场景

- 把对象的创建过程封装在工厂类中，客户端与创建细节解耦。
- 工厂根据客户端传入的参数返回不同对象，创建逻辑可在多个客户端中复用。
- 适合“对象类型不多、由参数决定”的创建场景。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 产品接口 | `Animal` |
| 具体产品 | `Cat`、`Dog`、`SeaOtter` |
| 工厂 | `AnimalFactory` |

### 示例代码

1. 定义动物接口并提供实现：

```java
public interface Animal {
    void makeSound();
}

@Slf4j
@Service
public class Cat implements Animal {
    @Override
    public void makeSound() {
        log.info("喵喵喵");
    }
}
// Dog、SeaOtter 同理，分别输出“汪汪汪”“咕噜咕噜”
```

2. 工厂类：注入 Map 形式的 Animal 实现，按名称取对应实现类：

```java
@Component
public class AnimalFactory {

    @Resource
    Map<String, Animal> animalMap;

    public Optional<Animal> getAnimal(String animalType) {
        if (animalType == null) {
            return Optional.empty();
        }
        // 将首字母变小写后作为 key
        String newAnimalType = StrUtil.lowerFirst(animalType);
        return Optional.ofNullable(animalMap.get(newAnimalType));
    }
}
```

3. 测试：`animalFactory.getAnimal(SeaOtter.class.getSimpleName())` 拿到 `Optional<Animal>` 后 `ifPresent(Animal::makeSound)` 即可。

### 优缺点

- 优点：
  1. 创建过程被封装，客户端不依赖创建细节，耦合度更低。
  2. 工厂类可在不同客户端中复用，提高代码复用性。
- 缺点：
  1. 新增对象类型时要修改工厂类代码，违反开放-封闭原则。
  2. 类型多了以后，工厂类代码会变得复杂、难以维护。

---

## 二、工厂方法模式（Factory Method Pattern）

### 一句话定义

定义一个抽象的工厂接口，由具体的工厂类实现该接口来创建对象，把创建过程委托出去，实现对象的创建和使用分离。

### 意图与适用场景

- 抽象工厂接口中包含工厂方法，由具体工厂类实现；客户端只调用工厂方法获取对象。
- 适合需要创建一系列相关对象、但具体对象类型要到运行时才能确定的场景。
- 本例借助 Spring 的 `FactoryBean` 接口落地。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象产品 | `UserService` |
| 具体产品 | `UserServiceImpl` |
| 具体工厂 | `UserServiceFactory`（实现 `FactoryBean<UserService>`） |

### 示例代码

1. 定义接口并实现：

```java
public interface UserService {

    void addUser(Map<String, Object> params);
}

@Slf4j
@Import(SpringUtil.class) // 需要在这里调用 Spring 管理的 Bean 时，要导入 ApplicationContext
public class UserServiceImpl implements UserService {

    @Override
    public void addUser(Map<String, Object> params) {
        log.info("添加用户,参数是:{}", JSONUtil.toJsonStr(params));

        Optional.ofNullable((Cat) SpringUtil.getBean("cat"))
                .ifPresent(Cat::makeSound);
    }
}
```

2. 工厂类实现 `FactoryBean`，重写 `getObject` 返回 `UserServiceImpl`：

```java
@Component
public class UserServiceFactory implements FactoryBean<UserService> {

    @Override
    public UserService getObject() throws Exception {
        return new UserServiceImpl();
    }

    @Override
    public Class<?> getObjectType() {
        return UserService.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
```

3. 测试：直接 `@Autowired private UserService userService`（注入的就是工厂产出的对象），调用 `addUser(userMap)`。

### 优缺点

- 优点：
  1. 创建过程和使用过程分离，提高代码的灵活性和可维护性。
  2. 符合开放-封闭原则：可以通过添加新的工厂类来扩展功能。
- 缺点：
  1. 需要定义大量工厂类，增加代码复杂度。
  2. 不同工厂类可能创建相同类型的对象，造成代码重复。

---

## 三、抽象工厂模式（Abstract Factory Pattern）

### 一句话定义

定义一个抽象工厂接口，由具体工厂类创建一组相关的对象；接口中的多个工厂方法各自负责创建其中一种。

### 意图与适用场景

- 抽象工厂接口通常包含多个工厂方法，具体工厂实现它们，一次提供一组相关对象。
- 适合需要创建一组相关对象、且对象类型要到运行时才能确定的场景。
- 原文案例包含支付方式和小程序类型两组场景，理念相同，这里保留支付方式一组。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象工厂 | `AbstractPayFactory` |
| 具体工厂 | `ConcretePayFactory` |
| 产品接口 | `Pay` |
| 具体产品 | `AliPayService`、`WeChatPayService` |

### 示例代码

1. 支付接口与两种实现：

```java
public interface Pay {

    void pay(Map<String, Object> payParams);
}

@Slf4j
public class AliPayService implements Pay {

    @Override
    public void pay(Map<String, Object> payParams) {
        log.info("支付宝支付");
    }
}

@Slf4j
public class WeChatPayService implements Pay {

    @Override
    public void pay(Map<String, Object> payParams) {
        log.info("微信支付");
    }
}
```

2. 抽象工厂接口与具体工厂：

```java
public interface AbstractPayFactory {

    Optional<AliPayService> createAliPay();

    Optional<WeChatPayService> createWxChatPay();
}

@Service
public class ConcretePayFactory implements AbstractPayFactory {

    @Override
    public Optional<AliPayService> createAliPay() {
        return Optional.of(new AliPayService());
    }

    @Override
    public Optional<WeChatPayService> createWxChatPay() {
        return Optional.of(new WeChatPayService());
    }
}
```

3. 测试：注入 `AbstractPayFactory`，组装 payMap 后分别 `createAliPay()`、`createWxChatPay()`，再 `ifPresent(pay -> pay.pay(payMap))`。

### 优缺点

- 优点：
  1. 创建过程被封装，客户端不依赖创建细节，耦合度低。
  2. 工厂类可以在不同客户端中复用。
- 缺点：
  1. 新增对象类型时，要修改抽象工厂接口和所有具体工厂，违反开放-封闭原则。
  2. 工厂类代码容易变得复杂、难以维护。

三种工厂对比记忆：简单工厂是一个工厂按参数出对象；工厂方法是一个工厂接口对应一类对象；抽象工厂是一个工厂接口出一组相关对象。

---

## 四、单例模式（Singleton Pattern）

### 一句话定义

确保一个类在整个应用程序中只有一个实例，并提供访问该实例的全局方法。

### 意图与适用场景

- 需要全局唯一实例，减少内存开销和系统资源浪费。
- 需要一个全局访问点，方便调用和管理。

### 角色

| 角色 | 说明 |
| --- | --- |
| 单例类 | 私有构造器 + 静态方式持有并返回唯一实例 |
| 全局访问点 | `getInstance()` 或 Spring 注入 |

### 示例代码

原文给出三种写法：

1. Spring 指定为单例（默认就是单例，原文标注其存在线程安全问题）：

```java
@Component
@Scope("singleton") // 实际上默认就是单例
public class MySingleton {
}
```

2. 双重检查锁单例，用于解决线程安全问题：

```java
@Component
@Singleton
public class MySingleton2 {

    private static volatile MySingleton2 instance;

    private MySingleton2() {}

    public static MySingleton2 getInstance() {
        if (instance == null) {
            synchronized (MySingleton2.class) {
                if (instance == null) {
                    instance = new MySingleton2();
                }
            }
        }
        return instance;
    }
}
```

3. 静态内部类单例，同样用于解决线程安全问题：

```java
@Component
public class MySingleton3 {

    private MySingleton3() {}

    private static class SingletonHolder {
        private static final MySingleton3 INSTANCE = new MySingleton3();
    }

    public static MySingleton3 getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

静态内部类的静态实例在类加载时初始化且只初始化一次；静态内部类的加载是线程安全的，因此多线程环境下也只会创建一个实例。

### 测试要点（原文实验结论）

- `getInstance()` 两次获取的是同一个对象；`@Autowired` 注入两次的也是同一个对象。
- 但 `getInstance()` 方式得到的对象不受 Spring 管理，无法访问其他 Bean。
- `getInstance()` 得到的对象和 `@Autowired` 注入的对象不是同一个：类虽是单例，两条获取路径会产生两个对象。

### 优缺点

- 优点：
  1. 保证只有一个实例，减少内存开销和系统资源浪费。
  2. 提供全局访问点，方便代码调用和管理。
- 缺点：
  1. 单例类职责不能过重，否则复杂性和可维护性下降。
  2. 扩展性不高，新增功能可能要修改单例类代码，影响系统稳定性。

---

## 五、原型模式（Prototype Pattern）

### 一句话定义

通过复制已有对象来创建新对象，而不是通过实例化类来创建。

### 意图与适用场景

- 核心是基于对象的复制技术：在不了解对象具体实现的情况下也能创建新对象。
- 适合需要创建大量相似对象、想避免重复创建开销的场景。
- 克隆通常通过实现 `Cloneable` 接口并重写 `clone()` 实现。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 原型类 | `Prototype`（实现 `Cloneable`，重写 `clone()`） |
| 使用方 | 通过 `clone()` 或 Spring 容器获取新对象 |

### 示例代码

1. 原型类：

```java
public class Prototype implements Cloneable {

    private String name;

    public Prototype(String name) {
        this.name = name;
    }

    // 省略 getter/setter

    @Override
    public Prototype clone() throws CloneNotSupportedException {
        return (Prototype) super.clone();
    }
}
```

2. 配置类，把原型类声明为 prototype 作用域：

```java
@Configuration
public class ProtoTypeConfig {

    @Bean
    @Scope("prototype")
    public Prototype prototype() {
        return new Prototype("prototype");
    }
}
```

3. 测试结论（原文实验）：

- 通过 `beanFactory.getBean(Prototype.class)` 拿到 prototype1，再 `prototype1.clone()` 得到 prototype2；修改 prototype2 的 name 不影响 prototype1——克隆返回的是新对象（原文：深克隆拷贝）。
- 通过 `@Autowired` 注入两次得到的 `prototype11 == prototype22` 结果为 `false`。

### 优缺点

- 优点：
  1. 减少对象的创建次数，提高系统的性能和效率。
  2. 避免对象的重复创建。
- 缺点：
  1. 需要实现 `Cloneable` 接口并重写 `clone()` 方法，对复杂对象来说实现比较困难。

---

## 六、建造者模式（Builder Pattern）

### 一句话定义

把复杂对象的构造过程分解成多个简单步骤，封装到一个单独的建造者对象中，实现构造过程与表示的分离。

### 意图与适用场景

- 需要创建复杂对象，又想让客户端代码保持简洁时使用。
- 想在不影响客户端代码的前提下改变对象的内部表示时使用。
- 原文场景：把 `User`（建造者对象）与属性更多的 `UserEntity` 互相转化。单讲创建对象，`@Builder` 已经够用，但直接用 jackson 转化（如 `mapper.convertValue(userEntity, User.class)`）会因 `User` 缺少 `UserEntity` 的部分属性而报错，所以原文选择用 MapStruct 落地。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 建造者 | `User`（`@Builder`） |
| 目标对象 | `UserEntity` |
| 转换器 | `UserMapper`（MapStruct 自动生成 `UserMapperImpl`） |

### 示例代码

1. 定义 `User` 和 `UserEntity`，后者属性更多（还需引入 `mapstruct`、`mapstruct-processor` 两个依赖）：

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder // 实现建造者
public class User {
    private int id;
    private String username;
    private String email;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    private int id;
    private String username;
    private String email;
    private Map<String, Object> other;
}
```

2. 定义转换接口：

```java
@Mapper(componentModel = "spring")
public interface UserMapper {

    UserEntity toEntity(User user);

    User toUser(UserEntity entity);
}
```

3. 服务里演示四种对象转换方式：

```java
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public User getUserById(int id) {
        // 假设从数据库中取到 userEntity
        UserEntity userEntity = this.daoGetUserById(id);

        // 1. 手动把属性一个个设置到建造者对象中
        User build = User.builder()
                .id(id)
                .username(userEntity.getUsername())
                .email(userEntity.getEmail())
                .build();

        // 2. 使用 MapStruct（推荐）
        User toUser = userMapper.toUser(userEntity);
        UserEntity toEntity = userMapper.toEntity(build);

        // 3. 使用 jackson：存在缺少的属性时会报错（例如这里缺少 other），需要自定义序列化
        // User user = mapper.convertValue(userEntity, User.class);

        // 4. BeanUtils.copyProperties()
        User user = User.builder().build();
        BeanUtils.copyProperties(userEntity, user);

        return build;
    }
}
```

4. 测试：注入 `UserService`，调用 `getUserById(1)` 后打印 user 信息。

补充：MapStruct 根据类型和属性名称自动转换，编译期生成 `UserMapperImpl`：`toEntity` 里逐个属性 `set` 到 `UserEntity`；`toUser` 里则先取 `User.builder()`，逐个属性调用后再 `build()` 返回。

### 优缺点

- 优点：
  1. 隐藏复杂构造过程，客户端代码更简洁。
  2. 可以改变对象的内部表示，不影响客户端代码。
  3. 同一构造过程可用于不同对象，提高复用性。
  4. 构造逻辑与表示分离，代码更易维护。
- 缺点：
  1. 建造者对象数量可能增加，代码更复杂。
  2. 构造过程的顺序可能影响最终对象的表示。
  3. 对象构造过程可能需要更多代码来实现。

---

## 最后怎么复习

1. 三个工厂放一起对比：参数建对象（简单工厂）、一类对象一个工厂（工厂方法）、一组相关对象一个工厂（抽象工厂）。
2. 单例记住三种写法和两个坑：`getInstance()` 不归 Spring 管、和注入的不是同一个对象。
3. 原型就是“克隆现成对象”，注意 `Cloneable` + `clone()`。
4. 建造者就是“分步构建复杂对象”，`@Builder` + MapStruct 是原文推荐组合。
