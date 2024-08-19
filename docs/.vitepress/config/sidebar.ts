export const sidebar = {
    '/note/': [
        {text: '简介', link: '/note/'},
        {
            text: '设计模式',
            collapsed: true,
            items: [
                {text: '单例模式', link: '/note/DesignPatterns/SingletonPattern'},
                {text: '工厂模式', link: '/note/DesignPatterns/FactoryPattern'},
                {text: '策略模式', link: '/note/DesignPatterns/StrategyPattern'},
                {text: '装饰器模式', link: '/note/DesignPatterns/DecoratorPattern'},
                {text: '模板方法模式', link: '/note/DesignPatterns/TemplatePattern'},
            ]
        }
    ]
}