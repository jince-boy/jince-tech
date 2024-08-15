import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './assets/style.css'
import './assets/iconfont/iconfont.css'
import Layout from "./Layout.vue";
import Blog from './Blog.vue';


export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({app}) {
        app.component('Blog',Blog)
    }
} satisfies Theme
