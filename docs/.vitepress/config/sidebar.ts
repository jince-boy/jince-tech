export const sidebar = {
    '/note/': [
        {text: '简介', link: '/note/'},
        {
            text: 'Java',
            collapsed: true,
            items: [
                {
                    text: '设计模式',
                    collapsed: true,
                    items: [
                        {text: '单例模式', link: '/note/java/DesignPatterns/SingletonPattern'}
                    ]
                }
            ]
        }
    ]
}