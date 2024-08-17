# 单例模式

## 概述

单例模式属于创建型模式的一种，它确保一个类只有一个实例，并提供一个全局访问点来访问该实例。

单例模式适用以下场景：

1. 当一个类只需要一个实例时。
2. 当多个对象需要共享同一个实例时。
3. 当创建实例需要耗费大量资源时。

## 单例模式的实现方式

### 饿汉式单例

#### 运行原理

在饿汉式单例模式中，单例实例在类加载时就已经创建好了。这意味着在 JVM 加载这个类的时候，单例实例就已经存在，无需延迟到第一次使用时再创建。

```java
public class Singleton {
    // 静态变量持有唯一实例
    private static final Singleton instance = new Singleton();

    // 私有化构造方法，防止外部实例化
    private Singleton() {}

    // 提供获取实例的全局访问点
    public static Singleton getInstance() {
        return instance;
    }
}
```

#### 优缺点

**优点**

1. 简单实现：饿汉式单例模式实现简单，不需要考虑多线程的同步问题，因为实例在类加载时已经创建完成。
2. 线程安全：由于实例在类加载时创建，JVM 本身可以保证类加载的线程安全性，因此不存在多线程环境下的并发问题。

**缺点**

1. 资源浪费：即使从未使用该实例，它也会在程序启动时被创建，占用资源。如果该实例很占内存或初始化耗时，会造成性能损失。
2. 类加载慢：由于实例是在类加载时创建的，类加载的速度可能受到影响，尤其是实例初始化较复杂时。

#### 应用场景

饿汉式单例模式适用于以下场景：

1. 工具类或管理类：比如日志管理器、数据库连接池等需要全局唯一实例的场景。
2. 初始化时间短、占用资源少：实例的创建和初始化过程非常轻量级，不会对程序的启动性能造成明显影响。
3. 要求系统启动时即刻使用：当实例必须在程序启动时就准备好以供使用时，饿汉式是合适的选择。

### 非线程安全的懒汉式单例

#### 运行原理

在程序启动时，不会立即创建单例实例，只有在第一次调用 `getInstance()` 方法时才会创建实例。

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {
        // 私有构造函数，防止外部实例化
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton(); // 在第一次调用时创建实例
        }
        return instance;
    }
}
```

#### 优缺点

**优点**

1. 延迟加载：实例只在需要时才会创建，避免了资源的浪费，特别是在实例化过程比较耗时的情况下。
2. 实现简单：代码实现比较直观和简单，不需要复杂的同步机制。

**缺点**

1. 线程不安全：在多线程环境下，如果两个线程同时调用 `getInstance()` 方法，并且 `instance` 仍然为 `null`
   ，那么可能会创建出多个实例，违背了单例模式的初衷。
2. 不适用于高并发场景：在多线程环境中，这种实现方式无法保证单例的唯一性，可能导致系统出现不稳定或难以调试的bug。

#### 应用场景

1. 单线程环境：在只有一个线程运行的情况下，或者确定不会有多个线程同时访问 `getInstance()` 方法的情况下，这种实现方式是合适的。
2. 对性能要求不高：在一些对性能要求不高的场景下，这种简单实现可以暂时使用，但通常会随着需求的变化而演进为线程安全的实现方式。
3. 临时方案：在开发初期，项目简单且不涉及多线程时，可以采用非线程安全的懒汉式实现，待需求复杂化后再优化为线程安全的版本。

### 线程安全的懒汉式

#### 运行原理

与非线程安全的懒汉式相同，在程序启动时不创建实例，只有在第一次调用 `getInstance()` 方法时才创建实例，为了防止多个线程同时创建实例，在
`getInstance()` 方法上引入同步机制，确保同一时刻只有一个线程可以进入创建实例的代码块。

1. 通过 `synchronized` 关键字，确保同一时刻只有一个线程可以执行 `getInstance()` 方法，避免了实例的多次创建。

   ```java
   public class Singleton {
       private static Singleton instance;
   
       private Singleton() {
           // 私有构造函数，防止外部实例化
       }
   
       public static synchronized Singleton getInstance() {
           if (instance == null) {
               instance = new Singleton();
           }
           return instance;
       }
   }
   ```
2. 双重检查锁定在首次检查时避免了每次都进入同步块的开销，只有在 `instance` 为 `null` 时才会进入同步块，再次检查 `instance` 是否为
   `null`，以确保线程安全。

   ```java
   public class Singleton {
       private static volatile Singleton instance;
   
       private Singleton() {
           // 私有构造函数，防止外部实例化
       }
   
       public static Singleton getInstance() {
           if (instance == null) { // 第一次检查
               synchronized (Singleton.class) {
                   if (instance == null) { // 第二次检查
                       instance = new Singleton();
                   }
               }
           }
           return instance;
       }
   }
   ```
3. 静态内部类实现，利用 JVM 类加载机制保证线程安全。`SingletonHolder` 类只会在调用 `getInstance()`
   方法时才会被加载，并且类的加载过程是线程安全的，确保了单例的唯一性。

   ```java
   public class Singleton {
       private Singleton() {
           // 私有构造函数，防止外部实例化
       }
   
       private static class SingletonHolder {
           private static final Singleton INSTANCE = new Singleton();
       }
   
       public static Singleton getInstance() {
           return SingletonHolder.INSTANCE;
       }
   }
   ```

#### 优缺点

**优点**

1. 线程安全：能够保证在多线程环境下，只有一个实例被创建，避免了非线程安全懒汉式的并发问题。
2. 延迟加载：与非线程安全的懒汉式相同，仅在需要时才会创建实例，节省资源。
3. 性能优化：尤其是双重检查锁定和静态内部类的方式，减少了不必要的同步开销，提升了性能。

**缺点**

1. 同步开销：简单的同步方法虽然保证了线程安全，但在高并发情况下，频繁的同步会导致性能下降。
2. 实现复杂度：相比非线程安全的懒汉式实现，线程安全的实现（特别是双重检查锁定）稍显复杂，需要更仔细地处理同步问题。

#### 应用场景

1. 多线程环境：需要在并发环境下保证单例唯一性时，线程安全的懒汉式是必选方案。
2. 高并发系统：如服务器应用中，单例模式用于管理共享资源或提供全局配置管理时，需要确保实例的线程安全。
3. 资源消耗较大的实例：当实例化过程较为耗时或占用大量资源时，通过懒汉式的线程安全实现可以延迟实例化，避免在应用启动时就占用大量资源。