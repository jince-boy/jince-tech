# 工厂模式

## 概述

工厂模式是一种创建型设计模式，通过定义一个创建对象的接口，使得子类可以决定实例化哪个类。工厂模式的核心思想是将对象的创建与对象的使用分离，提供了一种更灵活的方式来创建对象。

**工厂模式适用于以下场景：**

1. 当一个类无法预测要创建哪种对象时。
2. 当对象的创建逻辑比较复杂，需要集中管理时。
3. 当需要通过多个步骤或多个条件来创建对象时。

## 工厂模式的实现方式

### 简单工厂模式

#### 运行原理

在简单工厂模式中，一个工厂类决定创建哪一种具体对象，这个工厂类通常会提供一个静态方法，根据从传入的参数，返回对应的对象实例。

```java
public class SimpleFactory {
    public static Product createProduct(String type) {
        if (type.equals("A")) {
            return new ProductA();
        } else if (type.equals("B")) {
            return new ProductB();
        }
        throw new IllegalArgumentException("未知类型");
    }
}
```

#### 优缺点

**优点**

1. 简单易用：通过一个工厂类集中管理对象的创建，代码结构清晰，使用方便。
2. 降低耦合：客户端不需要直接依赖具体的产品类，只需与工厂类和产品接口进行交互。

**缺点**

1. 不易扩展：添加新产品类型时，需要修改工厂类的代码，违反了开闭原则。
2. 单一职责问题：工厂类承担了所有产品的创建逻辑，可能会导致类过于臃肿。

#### 应用场景

1. 简单产品创建场景：适用于创建逻辑简单且产品种类较少的场景。
2. 统一管理产品创建：如日志系统，根据不同的日志级别创建不同类型的日志处理器。

### 工厂方法模式

#### 运行原理

工厂方法模式定义了一个用于创建对象的接口，但将对象的具体创建工作延迟到子类中。

```java
interface Factory {
    Product createProduct();
}

class ConcreteFactoryA implements Factory {
    public Product createProduct() {
        return new ProductA();
    }
}

class ConcreteFactoryB implements Factory {
    public Product createProduct() {
        return new ProductB();
    }
}
```

#### 优缺点

**优点**

1. 符合开闭原则：添加新产品时，只需增加相应的工厂子类，无需修改现有代码。
2. 代码复用性高：将对象的创建过程封装在工厂子类中，避免重复代码。

**缺点**

1. 增加类数量：每个具体产品都需要对应一个工厂类，增加了类的数量。
2. 代码复杂性增加：相比简单工厂模式，工厂方法模式的代码结构更复杂。

#### 应用场景

1. 需要灵活创建不同产品的场景：如文档处理系统，根据文档类型创建不同的解析器。
2. 产品类型较多且可能频繁扩展的场景：如插件系统，支持动态添加新类型的插件。

### 抽象工厂模式

#### 运行原理

抽象工厂模式提供了一个接口，用于创建一系列相关或相互依赖的对象，而无需指定它们的具体类。每个具体工厂类都实现这个接口，并负责创建一整套相关的产品。

```java
// 抽象产品A
interface ProductA {
    void use();
}

// 抽象产品B
interface ProductB {
    void consume();
}

// 具体产品A1
class ProductA1 implements ProductA {
    public void use() {
        System.out.println("使用产品A1");
    }
}

// 具体产品A2
class ProductA2 implements ProductA {
    public void use() {
        System.out.println("使用产品A2");
    }
}

// 具体产品B1
class ProductB1 implements ProductB {
    public void consume() {
        System.out.println("使用产品B1");
    }
}

// 具体产品B2
class ProductB2 implements ProductB {
    public void consume() {
        System.out.println("使用产品B2");
    }
}

// 抽象工厂
interface AbstractFactory {
    ProductA createProductA();
    ProductB createProductB();
}

// 具体工厂1
class ConcreteFactory1 implements AbstractFactory {
    public ProductA createProductA() {
        return new ProductA1();
    }
    
    public ProductB createProductB() {
        return new ProductB1();
    }
}

// 具体工厂2
class ConcreteFactory2 implements AbstractFactory {
    public ProductA createProductA() {
        return new ProductA2();
    }
    
    public ProductB createProductB() {
        return new ProductB2();
    }
}

// 客户端代码
public class Client {
    public static void main(String[] args) {
        AbstractFactory factory1 = new ConcreteFactory1();
        ProductA productA1 = factory1.createProductA();
        ProductB productB1 = factory1.createProductB();
        productA1.use();
        productB1.consume();

        AbstractFactory factory2 = new ConcreteFactory2();
        ProductA productA2 = factory2.createProductA();
        ProductB productB2 = factory2.createProductB();
        productA2.use();
        productB2.consume();
    }
}
```

#### 优缺点

**优点**

1. 产品族一致性：确保一系列相关产品的创建逻辑一致，避免了产品间的不兼容问题。
2. 符合开闭原则：增加新的产品族时，只需增加新的工厂类，不影响已有代码。

**缺点**

1. 增加复杂性：引入了多个抽象层次和工厂类，结构较为复杂。
2. 扩展难度大：如果需要支持新产品，可能需要修改现有的工厂接口和所有实现类。

#### 应用场景

1. 产品族创建场景：如UI工具包，根据操作系统创建一整套风格一致的界面组件（按钮、文本框等）。
2. 依赖关系复杂的系统：如数据库访问系统，需要同时创建数据库连接、查询器和结果处理器。