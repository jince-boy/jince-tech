import {defineConfig} from 'vitepress'
import {nav} from "./nav";
import {sidebar} from "./sidebar";

export const shared = defineConfig({
    title: 'JinCe',
    srcDir: './src',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    themeConfig: {
        nav: nav,
        sidebar: sidebar,
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            copyright: `Copyright © 2024-${new Date().getFullYear()} JinCe <a href="https://beian.miit.gov.cn/">冀ICP备2022001116号-4</a>`
        },
        outline: {
            level: [2, 3],
            label: '页面导航',
        },
        search: {
            provider: 'local',
            options:{
                translations:{
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
    }
})