---
date: 2026-08-22
title: 行为型模式-AI整理版
categories:
  - 设计模式
tag:
  - 开发
  - java
  - springboot
  - 设计模式
footer: 行为型模式-AI整理版

---
# ![Java](/assets/img/icons/java.svg) 行为型模式-AI整理版

> 基于 [行为型模式](./行为型模式.md) 重新整理。
>
> 目标不是“把原文再说一遍”，而是把内容改成更适合学习、复习、回看的笔记结构。

## 这系列怎么读

行为型模式关注对象之间的通信和协作，以及如何把职责划分到不同的对象中，让系统更灵活、更易扩展和维护。

原文把它分成两类：

- 类行为型模式（关注类之间的通信）：模板方法（定义算法骨架，实现交给子类）、策略（一组可互换的算法）、状态（内部状态改变时改变行为）。
- 对象行为型模式（关注对象之间的通信）：观察者（一对多依赖，状态变化通知）、迭代器（顺序访问聚合对象而不暴露内部结构）、责任链（请求沿接收者链传递）、命令（请求封装成对象）、备忘录（保存恢复对象之前的状态）、访问者（不改对象结构的前提下操作元素）、中介者（用中介对象封装对象间的交互，使交互松耦合）。

阅读建议：

1. 十一个模式中，策略、模板方法、观察者、责任链最常用，建议优先吃透。
2. 每个模式统一按“一句话定义 → 意图与适用场景 → 角色 → 示例代码 → 优缺点”组织。
3. 命令模式和备忘录模式都用“历史栈”做撤销，可以对比着记。

## 模式速览表

| 模式 | 一句话意图 | 典型场景 |
| --- | --- | --- |
| 责任链模式 | 请求沿处理者链传递，直到有人处理 | 请求日志：路径 → 参数 → 时间 → 入库 |
| 命令模式 | 把请求封装成对象，支持撤销 | 文本编辑器的添加 / 删除 / 撤销 |
| 解释器模式 | 定义语法表示和解释方法 | 解析简单 DSL（name is John and ...） |
| 迭代器模式 | 顺序遍历集合而不暴露内部结构 | 实现 `Iterable` 的自定义集合 |
| 中介者模式 | 用中介对象封装对象间的交互 | 图书馆借还书协调图书服务与用户服务 |
| 备忘录模式 | 保存并恢复对象之前的状态 | 购物车撤销添加操作 |
| 观察者模式 | 一对多依赖，状态变化通知所有观察者 | 订单状态变化通知发货、库存系统 |
| 状态模式 | 内部状态改变时改变对象行为 | 电梯开关门、上下行 |
| 策略模式 | 一组可互换的算法封装成独立类 | 支付方式选择（支付宝 / 微信） |
| 模板方法模式 | 定义算法骨架，细节延迟到子类 | 付款流程：校验 → 支付 → 通知 |
| 访问者模式 | 不改变对象结构的前提下定义新操作 | 订单结构的打印与总价计算 |

## 目录

- 一、责任链模式（Chain of Responsibility Pattern）
- 二、命令模式（Command Pattern）
- 三、解释器模式（Interpreter Pattern）
- 四、迭代器模式（Iterator Pattern）
- 五、中介者模式（Mediator Pattern）
- 六、备忘录模式（Memento Pattern）
- 七、观察者模式（Observer Pattern）
- 八、状态模式（State Pattern）
- 九、策略模式（Strategy Pattern）
- 十、模板方法模式（Template Method Pattern）
- 十一、访问者模式（Visitor Pattern）

---

## 一、责任链模式（Chain of Responsibility Pattern）

### 一句话定义

允许将请求沿着处理者链进行传递，直到有一个处理者能够处理请求为止。

### 意图与适用场景

- 每个处理者都持有下一个处理者的引用，形成链式结构；收到请求时先判断自己能否处理，能则处理，不能则传给下一个。
- 避免请求发送者和接收者之间的耦合：发送者不需要知道请求最终由谁处理。
- 常用于日志记录、异常处理、权限验证等场景，例如 Web 应用中把请求交给多个过滤器处理。
- 本例场景：记录所有进入系统的请求日志（路径、参数、时间等）并写入数据库。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象处理者 | `RequestLogger`（持有 nextHandler、定义 order） |
| 具体处理者 | `PathLogger`、`ParamLogger`、`TimeLogger`、`DatabaseLogger` |
| 链的组装者 | `ChainOfResponsibilityPatternConfig`（按 order 排序并串链） |

### 示例代码

1. 责任链节点类（抽象处理者 + 一个具体处理者）：

```java
public abstract class RequestLogger {

    protected RequestLogger nextHandler;

    public void setNextHandler(RequestLogger nextHandler) {
        this.nextHandler = nextHandler;
    }

    /** 执行任务 */
    public abstract void handler(HttpServletRequest request);

    /** 按照该顺序执行，越小执行越早 */
    public abstract int order();
}

@Slf4j
@Component
public class PathLogger extends RequestLogger {

    @Override
    public void handler(HttpServletRequest request) {
        log.info("请求路径:{}", request.getRequestURI());
        if (nextHandler != null) {
            nextHandler.handler(request);
        }
    }

    @Override
    public int order() {
        return 100;
    }
}
// ParamLogger（打印请求参数，order 101）、TimeLogger（打印请求接收时间，order 102）
// DatabaseLogger（将请求写入库，order 200）写法相同，只是日志内容和 order 不同
```

2. 配置责任链，按 order 排序并串起 nextHandler：

```java
@Configuration
@RequiredArgsConstructor
public class ChainOfResponsibilityPatternConfig {

    private final List<RequestLogger> loggers;

    @Bean
    public RequestLogger requestLogger() {
        loggers.sort(Comparator.comparingInt(RequestLogger::order));
        IntStream.range(0, loggers.size())
                .forEach(index -> {
                    RequestLogger current = loggers.get(index);
                    RequestLogger next = index < loggers.size() - 1 ? loggers.get(index + 1) : null;
                    if (next != null) {
                        current.setNextHandler(next);
                    }
                });
        return loggers.get(0);
    }
}
```

3. 对外接口，入口处调用链头：

```java
@RequestMapping("/request/test")
@RestController
@RequiredArgsConstructor
public class RequestLoggerTestController {

    private final RequestLogger requestLogger;

    @RequestMapping("{name}")
    public String handlerRequest(@PathVariable String name, HttpServletRequest request) {
        requestLogger.handler(request);
        return "请求处理成功";
    }
}
```

4. 测试：分别用 `HttpRequest.get("http://localhost:8080/request/test/张三?a=1&b=33&c=search")` 和带表单的 `HttpRequest.post(url).form(paramMap).timeout(20000)` 各请求一次。运行输出（节选）：

```text
handler.PathLogger      : 请求路径:/request/test/%E5%BC%A0%E4%B8%89
handler.ParamLogger     : 请求参数:{"a":["1"],"b":["33"],"c":["search"]}
handler.TimeLogger      : 请求接收时间:2023-03-24 17:24:13
handler.DatabaseLogger  : 将请求写入库:org.apache.catalina.connector.RequestFacade@70d5695e
```

责任链可以方便地把不同的日志记录节点组合起来，实现灵活的请求日志记录。

### 优缺点

- 优点：
  1. 请求发送者和接收者解耦，发送者无需知道请求由谁处理。
  2. 节点可自由组合，灵活性和可扩展性好。
- 缺点：原文未专门列出。

---

## 二、命令模式（Command Pattern）

### 一句话定义

将请求封装成一个对象，使不同的请求可以参数化，并支持撤销操作、命令队列和日志记录等功能。

### 意图与适用场景

- 请求发送者和接收者解耦：接收者只需要实现执行命令的方法即可完成请求处理。
- 核心思想是把“请求”和“实现”解耦，实现松耦合。
- 常用于菜单、工具栏、快捷键等界面操作的处理，也常用于事务处理、日志记录、撤销和重做。
- 本例：一个简单文本编辑器的添加、删除和撤销。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象命令 | `Command`（execute + undo） |
| 具体命令 | `AddCommand`、`DeleteCommand` |
| 接收者 | `Editor`（真正做添加 / 删除） |
| 调用者 | `CommandExecutor`（执行并维护命令历史栈） |

### 示例代码

1. 命令接口及实现类：

```java
public interface Command {

    /** 执行 */
    void execute();

    /** 撤销 */
    void undo();
}

public class AddCommand implements Command {

    private String text;      // 内容
    private int start;        // 开始的位置
    private Editor editor;    // 文本编辑器

    public AddCommand(Editor editor, String text, int start) {
        this.text = text;
        this.start = start;
        this.editor = editor;
    }

    @Override
    public void execute() {
        editor.add(text, start);
    }

    @Override
    public void undo() {
        editor.delete(start, start + text.length());
    }
}
// DeleteCommand 与之相反：execute 调 editor.delete，undo 调 editor.add
```

2. 命令执行器，维护命令历史记录：

```java
public class CommandExecutor {

    private final Stack<Command> historyStack;

    public CommandExecutor() {
        this.historyStack = new Stack<>();
    }

    public void executeCommand(Command command) {
        command.execute();
        historyStack.push(command);
    }

    public void undoCommand() {
        if (!historyStack.isEmpty()) {
            // 从历史记录取出最后一个命令并撤销
            Command command = historyStack.pop();
            command.undo();
        }
    }
}
```

3. 文本编辑器，封装 add / delete 并委托执行器：

```java
@Component
public class Editor {

    private final CommandExecutor executor = new CommandExecutor();
    private final StringBuilder content = new StringBuilder();

    public void add(String text, int start) {
        content.insert(start, text);
    }

    public void delete(int start, int end) {
        content.delete(start, end);
    }

    public void execute(Command command) {
        executor.executeCommand(command);
    }

    public void undo() {
        executor.undoCommand();
    }

    public String getContent() {
        return content.toString();
    }
}
```

4. 测试：先 `execute(new AddCommand(editor, "你好啊，我是红茶。", 0))` 并打印内容；再取内容的一段文字 `execute(new DeleteCommand(editor, text, 2))`；最后 `editor.undo()` 撤销上一步，每步打印编辑器内容观察变化。

### 优缺点

- 优点：
  1. 请求与实现解耦，发送者和接收者之间松耦合。
  2. 请求被对象化，可以参数化，支持撤销操作、命令队列和日志记录。
- 缺点：原文未专门列出。

---

## 三、解释器模式（Interpreter Pattern）

### 一句话定义

定义一种语言语法的表示，并定义该语言的解释方法，从而实现对这门语言的解释和执行。

### 意图与适用场景

- 常用于实现编译器、解释器、正则表达式引擎等应用程序。
- 核心思想是把“语言解释器”和“语言语法”分离，实现语言的灵活扩展和重用。
- 本例：用解释器模式实现一个简单 DSL，描述人的基本信息：

```text
name is John and age is greater than 18 and gender is male
```

这个语句由三个表达式组成：一个等于运算、一个大于运算和一个等于运算，整体再用“与”运算连接。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象表达式 | `Expression`（interpret 方法） |
| 终结符表达式 | `EqualsExpression`、`GreaterThanExpression` |
| 非终结符表达式 | `AndExpression` |
| 上下文 | `Context`（存放变量值） |

### 示例代码

1. 表达式接口和两个终结符表达式：

```java
public interface Expression {

    boolean interpret(Context context);
}

public class EqualsExpression implements Expression {

    private String variableName;
    private String value;

    public EqualsExpression(String variableName, String value) {
        this.variableName = variableName;
        this.value = value;
    }

    @Override
    public boolean interpret(Context context) {
        String variableValue = (String) context.getVariableValue(variableName);
        return variableValue != null && variableValue.equals(value);
    }
}

public class GreaterThanExpression implements Expression {

    private final String variableName;
    private final int value;

    public GreaterThanExpression(String variableName, int value) {
        this.variableName = variableName;
        this.value = value;
    }

    @Override
    public boolean interpret(Context context) {
        Object variableValue = context.getVariableValue(variableName);
        if (variableValue == null) {
            return false;
        }
        int intValue = (int) variableValue;
        return intValue > value;
    }
}
```

2. 非终结符表达式，表示与运算，需要左、右两个表达式：

```java
public class AndExpression implements Expression {

    private final Expression left;
    private final Expression right;

    public AndExpression(Expression left, Expression right) {
        this.left = left;
        this.right = right;
    }

    @Override
    public boolean interpret(Context context) {
        return left.interpret(context) && right.interpret(context);
    }
}
```

3. 测试，构建表达式树解释 DSL：

```java
@Test
void testInterpreterPattern() {
    // 需要进行解释的dsl语句
    String dsl = "name is John and age is greater than 18 and gender is male";
    // 构建解释表达式
    Expression expression = new AndExpression(
        new AndExpression(
            new EqualsExpression("name", "John"),
            new GreaterThanExpression("age", 18)
        ),
        new EqualsExpression("gender", "male")
    );
    // 假设正确的值
    Map<String, Object> metaMap = new HashMap<>();
    metaMap.put("name", "John");
    metaMap.put("age", 20);
    metaMap.put("gender", "male");

    boolean result = expression.interpret(new Context(metaMap));
    log.info("解释最后的结果：{}", result);
}
```

这种方式可以很容易地扩展到更复杂的 DSL。

### 优缺点

- 优点：增加新的语法规则相对容易。
- 缺点：
  1. 增加新的表达式类型比较困难。
  2. 解释器的性能通常较低。

---

## 四、迭代器模式（Iterator Pattern）

### 一句话定义

提供一种顺序访问聚合对象中各个元素的方法，而又不暴露聚合对象的内部结构。

### 意图与适用场景

- 把“遍历集合的过程”与“集合本身”解耦，集合可以独立变化而不影响遍历算法。
- Java 标准库已内置迭代器支持，实际开发中通常是“实现 `Iterable` 接口”让自定义集合支持 for-each。

### 角色

| 角色 | 说明 |
| --- | --- |
| 抽象迭代器（Iterator） | 定义遍历集合的接口：获取下一个元素、判断是否还有元素等 |
| 具体迭代器（ConcreteIterator） | 实现遍历并维护遍历状态 |
| 抽象集合（Aggregate） | 定义集合接口，包括获取迭代器的方法 |
| 具体集合（ConcreteAggregate） | 实现抽象集合接口，负责创建具体迭代器 |

### 示例代码

1. 定义接口并提供返回迭代器的实现：

```java
public interface MyCollection<T> extends Iterable<T> {

    @Override
    Iterator<T> iterator();
}

public class MyArrayList<T> implements MyCollection<T> {

    private List<T> list;

    public MyArrayList(List<T> list) {
        this.list = list;
    }

    @Override
    public Iterator<T> iterator() {
        return list.iterator();
    }
}
```

2. 测试，用 for-each 遍历：

```java
@Test
void testIteratorPattern() {
    List<String> myList = new ArrayList<>();
    myList.add("foo");
    myList.add("bar");

    MyCollection<String> myCollection = new MyArrayList<>(myList);
    for (String element : myCollection) {
        log.info(element);
    }
}
```

### 优缺点

- 优点：
  1. 隐藏集合的内部结构，遍历算法与集合实现相互独立。
  2. 可以按不同顺序遍历集合，而无需修改集合的代码。
  3. 可以同时遍历多个集合，而无需了解它们的具体实现。
- 缺点：
  1. 需要额外的迭代器类，增加了代码复杂度。
  2. 遍历时需要额外空间存储迭代器对象，增加了内存开销。

---

## 五、中介者模式（Mediator Pattern）

### 一句话定义

用中介者对象来封装一系列对象之间的交互，避免对象之间直接相互作用，从而降低耦合度。

### 意图与适用场景

- 对象间的通信都通过中介者进行，而不是直接相互作用，使系统更灵活、可扩展、易维护。
- 可以避免出现复杂的逻辑交互，让系统更简单、清晰。
- 本例：图书馆管理系统中的借书和还书模块，借书 / 还书时要更新图书库存和用户借阅信息，用中介者协调图书服务和用户服务之间的消息传递。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象中介者 | `Mediator`（handleMessage、register） |
| 具体中介者 | `ConcreteMediator` |
| 抽象同事类 | `Colleague`（send、receive） |
| 具体同事类 | `BookService`、`UserService` |

### 示例代码

1. 中介者接口：

```java
public interface Mediator {

    /** 处理消息 */
    void handleMessage(String message, Colleague colleague, Object... args);

    /** 注册同事类 */
    void register(String name, Colleague colleague);
}
```

2. 具体中介者。注意：colleagueMap 不要使用注入，会引起循环依赖问题（可以解决但是不好），原文选择手动注册：

```java
@Component
@Slf4j
public class ConcreteMediator implements Mediator {

    private final Map<String, Colleague> colleagueMap = new HashMap<>();

    @Override
    public void handleMessage(String message, Colleague colleague, Object... args) {
        if (colleague instanceof BookService) {
            // 图书服务发消息：借书 / 还书都要通知用户服务更新借阅信息
            Book book = (Book) args[0];
            UserService userService = (UserService) colleagueMap.get("userService");
            if (message.equals("borrowBook")) {
                log.info("中介 图书服务借出图书...");
                userService.updateBorrowInfo(book.getIsbn(), book.getBorrower());
            } else if (message.equals("returnBook")) {
                log.info("中介 图书服务收回图书...");
                userService.updateBorrowInfo(book.getIsbn(), null);
            }
        } else if (colleague instanceof UserService) {
            // 用户服务发消息
            if (message.equals("updateBorrowInfo")) {
                log.info("中介 用户服务更新借阅信息...");
            }
        }
    }

    @Override
    public void register(String name, Colleague colleague) {
        colleagueMap.put(name, colleague);
    }
}
```

3. 同事接口和具体同事类，构造时向中介者注册自己：

```java
public interface Colleague {

    void send(String message, Object... args);

    void receive(String message);
}

@Slf4j
@Service
public class BookService implements Colleague {

    private final Mediator mediator;

    public BookService(@Autowired Mediator mediator) {
        mediator.register(StrUtil.lowerFirst(this.getClass().getSimpleName()), this);
        this.mediator = mediator;
    }

    public void borrowBook(Book book) {
        log.info("book service图书服务借出图书...");
        send("borrowBook", book);
    }

    public void returnBook(Book book) {
        log.info("book service 图书服务收回图书...");
        send("returnBook", book);
    }

    @Override
    public void send(String message, Object... args) {
        mediator.handleMessage(message, this, args);
    }

    @Override
    public void receive(String message) {
        log.info("图书服务接收到消息：" + message);
    }
}
// UserService 同理：updateBorrowInfo 后 send("updateBorrowInfo")
```

4. 业务逻辑中通过同事类发消息，由中介者协调（`BorrowService` 的 `borrow` / `returnBook` 分别设置 borrower 后调用 `bookService.borrowBook(book)` / `returnBook(book)`）。

5. 测试：`borrowService.borrow(book, "张三")` 后打印图书信息，再 `borrowService.returnBook(book)` 打印。运行输出（节选）：

```text
mediatorpattern.BookService      : book service图书服务借出图书...
mediatorpattern.ConcreteMediator : 中介 图书服务借出图书...
mediatorpattern.UserService      : user service 用户服务更新借阅信息...
mediatorpattern.ConcreteMediator : 中介 用户服务更新借阅信息...
```

`ConcreteMediator` 协调了 `BookService` 和 `UserService` 之间的消息传递和处理：图书服务借出或收回图书时，中介会调用用户服务的 `updateBorrowInfo` 更新借阅信息。

### 优缺点

- 优点：
  1. 降低对象间的耦合度，系统更灵活、可扩展、易维护。
  2. 避免出现复杂的逻辑交互，系统更简单、清晰。
  3. 集中处理对象间的通信，提高系统的性能和效率。
- 缺点：
  1. 中介者对象本身可能变得过于复杂，难以维护。
  2. 可能导致系统过于集中化，降低灵活性和可扩展性。

---

## 六、备忘录模式（Memento Pattern）

### 一句话定义

在不破坏封装性的前提下捕获并存储一个对象的内部状态，并在需要时把对象恢复到先前的状态。

### 意图与适用场景

- 需要保存 / 恢复对象状态，又不能暴露对象实现细节时使用。
- 本例：购物车 `Cart` 包含商品列表和总价，每次添加商品状态都会变化，用备忘录实现“撤销添加”。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 原发器（Originator） | `Cart`：创建备忘录、从备忘录恢复状态 |
| 备忘录（Memento） | `CartMemento`：存储 Cart 的内部状态 |
| 负责人（Caretaker） | `CartService`：管理备忘录栈，需要时请求恢复 |

### 示例代码

1. 商品类和备忘录类：

```java
@Data
public class Goods {

    private Long id;

    private String name;

    private BigDecimal price;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartMemento {

    /** 商品列表 */
    private List<Goods> items = new ArrayList<>();

    /** 总价 */
    private BigDecimal totalPrice = BigDecimal.ZERO;
}
```

2. 购物车类，提供创建和恢复备忘录的方法：

```java
@Component
public class Cart {

    private List<Goods> items = new ArrayList<>();
    private BigDecimal totalPrice = BigDecimal.ZERO;

    public void addItem(Goods goods) {
        items.add(goods);
        totalPrice = totalPrice.add(goods.getPrice());
    }

    /** 创建备忘录对象 */
    public CartMemento createMemento() {
        return new CartMemento(new ArrayList<>(items), totalPrice);
    }

    /** 恢复状态 */
    public void restoreMemento(CartMemento memento) {
        items = new ArrayList<>(memento.getItems());
        totalPrice = memento.getTotalPrice();
    }
    // 省略 getItems()、getTotalPrice()
}
```

3. 购物车服务，用历史栈实现撤销：

```java
@Service
@RequiredArgsConstructor
public class CartService {

    private final Cart cart;
    private final Stack<CartMemento> history = new Stack<>();

    public void addGoods(Goods goods) {
        // 先保存当前状态，再修改
        history.push(cart.createMemento());
        cart.addItem(goods);
    }

    public void undo() {
        if (!history.isEmpty()) {
            cart.restoreMemento(history.pop());
        }
    }
    // 省略 getGoodsList()、getTotalPrice()
}
```

4. 测试：依次添加“350ml可乐（3.5）”和“550ml雪碧（5.0）”两件商品并打印购物车和总金额；再 `cartService.undo()` 撤销上次的添加，购物车只剩第一件商品。

每次添加商品都会创建一个备忘录保存购物车状态；撤销时从栈中取出最近的备忘录，用 `restoreMemento()` 恢复购物车状态。

### 优缺点

- 优点：
  1. 轻松实现对象状态的保存和恢复。
  2. 保持了对象的封装性。
- 缺点：
  1. 可能占用大量内存空间，因为需要保存对象的所有状态。

---

## 七、观察者模式（Observer Pattern）

### 一句话定义

定义一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，主题状态变化时所有观察者都会收到通知并自动更新。

### 意图与适用场景

- 主题对象（被观察者）维护一个观察者列表，提供添加、删除和通知观察者的方法；观察者实现接收通知的方法。
- 主题变化时遍历观察者列表，逐个调用通知方法，把变化信息传递出去。
- 可以实现松耦合，提高系统的可扩展性和可维护性；常用于事件处理、GUI 编程、消息传递等场景。
- 本例：订单系统，订单状态改变时通知发货系统、库存系统等多个观察者（借助 Spring 事件机制实现）。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 主题（被观察者） | `OrderService`（发布事件） |
| 事件 | `OrderStatusChangeEvent`（继承 `ApplicationEvent`） |
| 观察者 | `DeliverySystem`、`InventorySystem`（实现 `ApplicationListener`） |

### 示例代码

1. 订单状态枚举、订单类和订单状态变化事件类：

```java
public enum OrderStatus {
    /** 交付 */
    DELIVERED,
    /** 支付 */
    PAID;
}

@Data
public class Order {

    private OrderStatus status;
}

/** 订单状态变化事件类 */
public class OrderStatusChangeEvent extends ApplicationEvent {

    private Order order;

    public OrderStatusChangeEvent(Object source, Order order) {
        super(source);
        this.order = order;
    }

    public Order getOrder() {
        return order;
    }
}
```

2. 订单服务类，用 Spring 提供的事件发布器发布事件：

```java
@Service
@RequiredArgsConstructor
public class OrderService {

    private final ApplicationEventPublisher publisher;

    public void updateOrderStatus(Order order, OrderStatus newStatus) {
        // 更新订单状态
        order.setStatus(newStatus);
        // 发布订单状态变化事件
        publisher.publishEvent(new OrderStatusChangeEvent(this, order));
    }
}
```

3. 定义多个观察者，监听同一事件：

```java
/** 发货系统 */
@Slf4j
@Component
public class DeliverySystem implements ApplicationListener<OrderStatusChangeEvent> {

    @Override
    public void onApplicationEvent(OrderStatusChangeEvent event) {
        Order order = event.getOrder();
        if (order.getStatus() == OrderStatus.DELIVERED) {
            // 发货
            log.info("发货操作");
        }
    }
}

/** 库存系统 */
@Component
@Slf4j
public class InventorySystem implements ApplicationListener<OrderStatusChangeEvent> {

    @Override
    public void onApplicationEvent(OrderStatusChangeEvent event) {
        Order order = event.getOrder();
        if (order.getStatus() == OrderStatus.PAID) {
            // 扣减库存
            log.info("扣减库存操作");
        }
    }
}
```

4. 测试：对同一个 order 分别 `updateOrderStatus(order, OrderStatus.DELIVERED)` 和 `updateOrderStatus(order, OrderStatus.PAID)`。输出结果：

```text
c.b.b.o.event.DeliverySystem  : 发货操作
c.b.b.o.event.InventorySystem : 扣减库存操作
```

订单状态改变时，`OrderService` 发布一个 `OrderStatusChangeEvent` 事件，所有监听该事件的观察者都会收到通知，根据订单状态做相应操作。

### 优缺点

- 优点：
  1. 主题和观察者之间松耦合，提高系统的可扩展性和可维护性。
  2. 更好地理解和管理对象之间的依赖关系。
- 缺点：原文未专门列出。

---

## 八、状态模式（State Pattern）

### 一句话定义

允许对象在其内部状态发生改变时改变其行为，使对象看起来像是改变了它的类。

### 意图与适用场景

- 把“状态的判断和处理”从业务逻辑中分离出来，让代码更清晰、易维护和扩展。
- 状态接口定义所有具体状态要实现的方法；具体状态实现方法以反映特定行为；上下文持有当前状态对象，把请求委托给当前状态处理。
- 可用于状态机、工作流、游戏等场景。
- 本例：电梯的开门、关门、上升、下降。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 状态接口 | `ElevatorState`（default 方法给出默认行为） |
| 具体状态 | `OpenState`、`CloseState`、`UpState`、`DownState` |
| 上下文 | `ElevatorContext`（持有当前状态并切换） |

### 示例代码

1. 状态接口和具体状态类：

```java
public interface ElevatorState {

    Logger log = LoggerFactory.getLogger(ElevatorState.class);

    /** 开门 */
    default void openDoor() {
        log.info("电梯门打开了！");
    }

    /** 关门 */
    default void closeDoor() {
        log.info("电梯门关闭了！");
    }

    /** 上升 */
    default void goUp() {
        log.info("电梯正在上行中...");
    }

    /** 下降 */
    default void goDown() {
        log.info("电梯正在下行中...");
    }
}

@Slf4j
@Component
public class OpenState implements ElevatorState {

    @Override
    public void openDoor() {
        log.info("电梯门已经打开了，无需再次打开！");
    }
}
// CloseState：closeDoor 提示“已经关闭，无需再次关闭”
// UpState：上行中无法开门 / 关门，goDown 提示“电梯转为下行状态”
// DownState：下行中无法开门 / 关门，goUp 提示“电梯转为上行状态”
```

2. 电梯上下文类，注入所有状态对象并按需切换：

```java
@Slf4j
@Component
public class ElevatorContext {

    private final Map<String, ElevatorState> stateMap;

    private ElevatorState state;

    public ElevatorContext(Map<String, ElevatorState> stateMap) {
        this.stateMap = stateMap;
        // 默认状态为closeState
        setState(CloseState.class);
    }

    public void setState(Class<? extends ElevatorState> cls) {
        String simpleName = cls.getSimpleName();
        String mapKey = StrUtil.lowerFirst(simpleName);
        this.state = Optional.ofNullable(stateMap.get(mapKey))
                .orElseThrow(() -> ExceptionUtil.wrapRuntime("找不到具体的" + simpleName + "电梯状态类"));
    }

    public void open() {
        state.openDoor();
        setState(OpenState.class);
    }

    public void close() {
        state.closeDoor();
        setState(CloseState.class);
    }

    public void up() {
        state.goUp();
        setState(UpState.class);
    }

    public void down() {
        state.goDown();
        setState(DownState.class);
    }
}
```

状态对象通过注入获得，默认状态为 closeState。

3. 测试：注入 `ElevatorContext` 后依次调用 `open()`、`close()`、`up()`、`down()`，观察不同状态下的行为和状态切换。

### 优缺点

- 优点：
  1. 状态的判断和处理从业务逻辑中分离，代码更清晰，易于维护和扩展。
  2. 更好地理解和管理对象之间的状态转换。
- 缺点：原文未专门列出。

---

## 九、策略模式（Strategy Pattern）

### 一句话定义

定义一组算法，把每个算法封装在独立的类中，并使它们可以互换。

### 意图与适用场景

- 算法的实现从客户端代码中分离出来，客户端只关心怎么用，不关心实现细节。
- 需要换算法时只改相应的策略类，不改客户端代码；还支持运行时动态切换算法。
- 本例：支付方式的策略选择（支付宝 / 微信）。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象策略 | `PayStrategy` |
| 具体策略 | `AliPayStrategy`、`WeChatPayStrategy` |
| 上下文 | `PayContext`（持有当前策略并委托执行） |

### 示例代码

1. 支付策略接口和两个实现：

```java
public interface PayStrategy {

    /**
     * 支付
     * @param amount 金额
     */
    void pay(BigDecimal amount);
}

@Component
@Slf4j
public class AliPayStrategy implements PayStrategy {

    @Override
    public void pay(BigDecimal amount) {
        log.info("支付宝支付，金额{}", amount);
    }
}

@Slf4j
@Component
public class WeChatPayStrategy implements PayStrategy {

    @Override
    public void pay(BigDecimal amount) {
        log.info("微信支付，金额{}", amount);
    }
}
```

2. 支付上下文，注入所有策略并按 key 选择：

```java
@Component
@RequiredArgsConstructor
public class PayContext {

    private final Map<String, PayStrategy> payStrategyMap;

    private PayStrategy payStrategy;

    /** 按名称选择，如 "aliPayStrategy" */
    public void setPayStrategy(String payType) {
        this.payStrategy = getPayStrategyByKey(payType)
                .orElseThrow(() -> ExceptionUtil.wrapRuntime("找不到具体类型为【" + payType + "】的支付策略类"));
    }

    /** 按类选择，key 为类名首字母小写 */
    public void setPayStrategy(Class<? extends PayStrategy> cls) {
        String simpleName = cls.getSimpleName();
        this.payStrategy = getPayStrategyByKey(StrUtil.lowerFirst(simpleName))
                .orElseThrow(() -> ExceptionUtil.wrapRuntime("找不到具体的【" + simpleName + "】支付策略类"));
    }

    private Optional<PayStrategy> getPayStrategyByKey(String mapKey) {
        return Optional.ofNullable(payStrategyMap.get(mapKey));
    }

    public void pay(BigDecimal amount) {
        payStrategy.pay(amount);
    }
}
```

3. 测试：`payContext.setPayStrategy("aliPayStrategy")` 后 `pay(new BigDecimal("99.90"))` 走支付宝；再 `setPayStrategy(WeChatPayStrategy.class)` 后 `pay(...)` 切换到微信支付。

### 优缺点

- 优点：
  1. 算法独立于使用它的客户端而变化，提高灵活性和可维护性。
  2. 改变算法只需修改相应的策略类，不改客户端代码。
  3. 支持运行时动态切换算法。
- 缺点：原文未专门列出。

---

## 十、模板方法模式（Template Method Pattern）

### 一句话定义

定义一个算法的骨架，把一些步骤的实现延迟到子类中。

### 意图与适用场景

- 抽象类中同时包含抽象方法和具体方法，共同组成算法骨架：抽象方法由子类实现，具体方法在抽象类中实现。
- 核心思想是“由父类控制子类”：父类定义骨架，子类只实现具体细节，避免代码重复，提高复用性和可维护性。
- 支持钩子方法，让子类可以影响算法的执行过程。
- 本例：付款流程，校验和支付由不同子类实现，通知逻辑固定在模板里。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象模板 | `PaymentTemplate`（makePayment 骨架 + 抽象方法） |
| 具体实现 | `CreditCardPayment`、`PayPalPayment` |

### 示例代码

1. 抽象模板类，定义模板方法和抽象方法：

```java
@Slf4j
public abstract class PaymentTemplate {

    /** 模板方法：固定算法骨架 */
    public void makePayment() {
        validate();
        processPayment();
        sendNotification();
    }

    public abstract void validate();

    public abstract void processPayment();

    public void sendNotification() {
        log.info("已成功付款。");
    }
}
```

2. 具体实现类，继承模板类并实现抽象方法：

```java
@Component
@Slf4j
public class CreditCardPayment extends PaymentTemplate {

    @Override
    public void validate() {
        log.info("正在验证信用卡信息...");
    }

    @Override
    public void processPayment() {
        log.info("处理信用卡付款...");
    }
}

@Slf4j
@Component
public class PayPalPayment extends PaymentTemplate {

    @Override
    public void validate() {
        log.info("正在验证PayPal账户信息...");
    }

    @Override
    public void processPayment() {
        log.info("处理PayPal付款...");
    }
}
```

3. 测试：`paymentTemplates.forEach(PaymentTemplate::makePayment)`。这里用 `List<PaymentTemplate>` 接收，是因为存在两个实现类的 Bean，所以用集合注入；也可以用 Map 或单个注入。

### 优缺点

- 优点：
  1. 父类统一控制算法骨架，避免代码重复，提高复用性和可维护性。
  2. 支持钩子方法，子类可以影响算法的执行过程，行为更灵活。
- 缺点：原文未专门列出。

---

## 十一、访问者模式（Visitor Pattern）

### 一句话定义

将算法与对象结构分离，使你可以在不改变对象结构的前提下定义新的操作。

### 意图与适用场景

- 访问者类包含一系列访问方法，对不同类型的对象进行访问和操作；对象结构包含一组元素，这些元素可以“接受”访问者的访问。
- 核心思想是“双重分派”：访问者先选择合适的访问方法，再根据被访问对象的类型选择合适的处理方式。
- 本例：处理一个订单结构对象的“打印”和“计算总价”两种业务逻辑。

### 角色

| 角色 | 本例对应 |
| --- | --- |
| 抽象访问者 | `OrderVisitor`（对每种元素一个 visit 方法 + getResult） |
| 具体访问者 | `OrderPrintVisitor`、`OrderPriceVisitor` |
| 抽象元素 | `OrderItem`（accept 方法） |
| 具体元素 | `ProductOrderItem`、`DiscountOrderItem` |
| 对象结构 | `OrderStructure`（持有元素列表，逐个 accept） |

### 示例代码

1. 访问者接口和订单项接口、订单项类：

```java
public interface OrderVisitor {

    /** 访问 产品订单项 */
    void visit(ProductOrderItem item);

    /** 访问 折扣订单项 */
    void visit(DiscountOrderItem item);

    /** 获取结果 */
    Object getResult();
}

public interface OrderItem {

    /** 接受 订单访问 */
    void accept(OrderVisitor visitor);
}

@Data
public class ProductOrderItem implements OrderItem {

    /** 产品名称 */
    private final String name;

    /** 产品单价 */
    private final BigDecimal price;

    /** 产品数量 */
    private final int quantity;

    @Override
    public void accept(OrderVisitor visitor) {
        visitor.visit(this);
    }
}

@Data
public class DiscountOrderItem implements OrderItem {

    /** 折扣，例如88折，填88 */
    private final BigDecimal discount;

    @Override
    public void accept(OrderVisitor visitor) {
        visitor.visit(this);
    }
}
```

2. 两个具体访问者，分别实现打印和计算总价：

```java
/** 订单打印访问者类 */
public class OrderPrintVisitor implements OrderVisitor {

    private final StringBuilder builder = new StringBuilder();

    @Override
    public void visit(ProductOrderItem item) {
        builder.append(item.getQuantity()).append(" x ")
                .append(item.getName()).append(": ")
                .append(item.getPrice()).append("\n");
    }

    @Override
    public void visit(DiscountOrderItem item) {
        builder.append("折扣: ").append(item.getDiscount()).append("%\n");
    }

    @Override
    public String getResult() {
        return builder.toString();
    }
}

/** 订单价格访问者类 */
public class OrderPriceVisitor implements OrderVisitor {

    private BigDecimal totalPrice = BigDecimal.ZERO;

    @Override
    public void visit(ProductOrderItem item) {
        totalPrice = totalPrice.add(
                item.getPrice().multiply(new BigDecimal(item.getQuantity())));
    }

    @Override
    public void visit(DiscountOrderItem item) {
        BigDecimal divide = item.getDiscount().divide(new BigDecimal("100"), 2, BigDecimal.ROUND_DOWN);
        totalPrice = totalPrice.multiply(divide);
        totalPrice = totalPrice.setScale(2, BigDecimal.ROUND_DOWN);
    }

    @Override
    public BigDecimal getResult() {
        return totalPrice;
    }
}
```

3. 订单结构类，接受访问者并逐个访问元素：

```java
public class OrderStructure {

    private final List<OrderItem> items = new ArrayList<>();

    public void addItem(OrderItem item) {
        items.add(item);
    }

    public void accept(OrderVisitor visitor) {
        for (OrderItem item : items) {
            item.accept(visitor);
        }
    }
}
```

4. 测试，同一个订单结构分别用两个访问者处理：

```java
@Test
void testVisitorPattern() {
    OrderStructure order = new OrderStructure();
    order.addItem(new ProductOrderItem("手机", new BigDecimal("888.213"), 1));
    order.addItem(new DiscountOrderItem(new BigDecimal("88")));

    OrderPrintVisitor printVisitor = new OrderPrintVisitor();
    order.accept(printVisitor);

    OrderPriceVisitor priceVisitor = new OrderPriceVisitor();
    order.accept(priceVisitor);

    log.info(printVisitor.getResult() + "总价: " + priceVisitor.getResult());
}
```

### 优缺点

- 优点：
  1. 可以在不修改被访问者的情况下增加新的操作。
  2. 相关操作集中在访问者中，代码更清晰、易维护。
- 缺点：
  1. 增加新的被访问者或新的访问者都需要修改代码，会增加代码的复杂度。

---

## 最后怎么复习

1. 一句话串联十一个模式：责任链传请求、命令封请求、解释器解语法、迭代器走集合、中介者管通信、备忘录存状态、观察者发通知、状态换行为、策略换算法、模板定骨架、访问者加操作。
2. 两个“撤销”对比：命令模式把操作封成命令压栈，备忘录模式把整个对象状态存档压栈。
3. Spring 里最常见的落地：策略 + Map 注入（支付）、观察者 + 事件机制（订单通知）、责任链 + order 排序串链（请求日志）。
4. 类行为型（模板方法、策略、状态）靠继承和多态；对象行为型（观察者、迭代器、责任链、命令、备忘录、访问者、中介者）靠组合和委托。
