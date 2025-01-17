//引入初始化样式文件
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components'

//import { useIntersectionObserver } from "@vueuse/core"; //自定义指令时用到的获取组件是否出现

//测试接口函数
/* import { getCategory } from './apis/testAPS'
getCategory().then(res => {
    console.log('aaa',res);
}) */


const app = createApp(App)
//pinia持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.use(lazyPlugin)
app.mount('#app')

//app顺序没关系么？ ？

/* app.directive('img-lazy', {
    mounted(el,binding) {
        //el是绑定的元素，binding是后面的值
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value; 
                }
            },
        )
    }
}) */

