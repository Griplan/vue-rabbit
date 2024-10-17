//components所有组件全局话注册
import Sku from '@/components/XtxSku/index.vue'


export const componentPlugin = {
    //app.component('组件名'，’组件对象‘)
    install(app) {
        app.component('XtxSku', Sku);
    }
}