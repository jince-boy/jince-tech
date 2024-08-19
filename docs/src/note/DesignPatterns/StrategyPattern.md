# 策略模式

## 概述

策略模式是一种行为设计模式，允许在运行时选择算法或行为的方式。通过将每种算法封装成独立的类，并让这些类实现相同的接口，可以使得算法之间可以互换，客户端代码可以在不修改代码的情况下选择不同的策略。

策略模式适用以下场景：

1. 多种算法实现：当需要在不同的情境下选择不同的算法时，策略模式非常有用。例如，可以使用策略模式来实现不同的排序算法或计算逻辑。
2. 避免条件语句：当有大量与算法或行为相关的条件语句时，策略模式可以将这些条件语句替换为策略类，简化代码。
3. 算法独立性：如果算法需要独立于使用它们的客户端类而变化，可以将算法封装到策略类中，易于扩展和维护。

## 策略模式的实现方式

#### 运行原理

策略模式的核心在于定义一个策略接口，该接口定义了所有策略算法必须实现的方法。不同的策略类实现该接口并提供具体的算法。上下文类在内部维护一个策略对象，并通过该对象来调用具体算法。

1. 策略接口：`Strategy` 定义了一个算法接口 `doOperation()`，所有具体策略类都实现该接口。
2. 具体策略类：例如 `AdditionStrategy`、`SubtractionStrategy` 和 `MultiplicationStrategy`，它们分别实现了具体的算法。
3. 上下文类：`Context` 类持有一个策略对象，客户端通过 `Context` 来选择和执行不同的策略，而不需要关心具体的算法实现。

```java
// 策略接口
interface Strategy {
    int doOperation(int num1, int num2);
}

// 具体策略类：加法策略
class AdditionStrategy implements Strategy {
    public int doOperation(int num1, int num2) {
        return num1 + num2;
    }
}

// 具体策略类：减法策略
class SubtractionStrategy implements Strategy {
    public int doOperation(int num1, int num2) {
        return num1 - num2;
    }
}

// 具体策略类：乘法策略
class MultiplicationStrategy implements Strategy {
    public int doOperation(int num1, int num2) {
        return num1 * num2;
    }
}

// 上下文类
class Context {
    private Strategy strategy;

    // 构造函数接受具体策略的实现
    public Context(Strategy strategy) {
        this.strategy = strategy;
    }

    // 执行策略
    public int executeStrategy(int num1, int num2) {
        return strategy.doOperation(num1, num2);
    }
}

// 客户端代码
public class Client {
    public static void main(String[] args) {
        Context context = new Context(new AdditionStrategy());
        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));

        context = new Context(new SubtractionStrategy());
        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));

        context = new Context(new MultiplicationStrategy());
        System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
    }
}
```

#### 优缺点

**优点**

1. 开放封闭原则：可以在不修改现有代码的情况下增加新的策略，实现算法的可扩展性。
2. 减少复杂条件语句：通过将算法封装到独立的策略类中，避免了在客户端代码中出现大量的条件语句。
3. 策略的独立性：每个策略都是一个独立的类，可以更容易地进行单元测试和复用。

**缺点**

1. 增加类的数量：每个策略都需要一个独立的类，这可能会导致类的数量增加，使代码变得复杂。
2. 客户端必须了解不同策略：客户端代码必须知道所有的策略，以便选择合适的策略进行使用，这增加了客户端的复杂性。

#### 应用场景

1. 支付系统：不同支付方式，可以封装为不同的策略。
2. 数据压缩：在文件压缩系统中，可以根据不同的压缩算法（如 ZIP、RAR、GZIP）实现不同的策略。
3. 路径规划：在地图应用中，规划路径时可以选择不同的策略（如最短路径、避开拥堵路径、风景优美路径）。
4. 日志记录：根据环境或配置选择不同的日志记录策略（如控制台日志、文件日志、远程日志）。