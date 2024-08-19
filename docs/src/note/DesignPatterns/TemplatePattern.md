# 模板方法模式

## 概述

模板方法模式是一种行为型设计模式，它定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。通过这种方式，模板方法模式允许子类在不改变算法结构的情况下重新定义算法的某些特定步骤。

模板方法模式适用场景：

1. 当一个类的行为由其子类决定时。
2. 当一个类希望在子类中实现某些步骤时。
3. 当多个子类有一些共同的行为，但又有一些不同的行为时。

## 模板方法模式的实现方式

在模板方法模式中，通常会有一个抽象类，其中定义了一个模板方法和一些抽象方法。子类继承这个抽象类并实现这些抽象方法。

```java
// 抽象类
abstract class AbstractClass {
    // 模板方法
    public final void templateMethod() {
        stepOne();
        stepTwo();
        stepThree();
    }

    // 抽象方法，子类必须实现
    protected abstract void stepOne();
    protected abstract void stepTwo();

    // 具体方法，子类可以直接使用
    private void stepThree() {
        System.out.println("Step three is executed.");
    }
}

// 具体类A
class ConcreteClassA extends AbstractClass {
    @Override
    protected void stepOne() {
        System.out.println("ConcreteClassA: Step one is executed.");
    }

    @Override
    protected void stepTwo() {
        System.out.println("ConcreteClassA: Step two is executed.");
    }
}

// 具体类B
class ConcreteClassB extends AbstractClass {
    @Override
    protected void stepOne() {
        System.out.println("ConcreteClassB: Step one is executed.");
    }

    @Override
    protected void stepTwo() {
        System.out.println("ConcreteClassB: Step two is executed.");
    }
}
```

#### 优缺点

**优点**

1. 代码复用：通过将通用的算法步骤放在抽象类中，减少了代码重复。
2. 控制流程：模板方法模式可以控制算法的执行顺序，确保特定步骤的执行。

**缺点**

1. 类的扩展性：由于模板方法在父类中定义，子类无法改变算法的整体结构，可能导致灵活性降低。
2. 复杂性增加：对于简单的算法，使用模板方法模式可能会引入不必要的复杂性。

#### 应用场景

1. 框架设计：在开发框架时，模板方法模式可以提供一个固定的执行流程，而允许用户通过子类来实现特定的功能。
2. 数据处理：在处理数据时，可以定义一个通用的处理流程，而具体的处理逻辑由子类实现。