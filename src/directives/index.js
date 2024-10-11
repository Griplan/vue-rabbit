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
import { useIntersectionObserver } from "@vueuse/core"; //自定义指令时用到的获取组件是否出现
export const lazyPlugin= {
  install: (app) => {
    // 在这里编写插件代码
    app.directive('img-lazy', {
        mounted(el,binding) {
            //el是绑定的元素，binding是后面的值
            const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        console.log('true');
                        el.src = binding.value; 
                        stop();
                    }
                },
            )
        }
    })
  }
}