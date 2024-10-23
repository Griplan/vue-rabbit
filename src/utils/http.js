//axios基础封装
import axios from "axios";
import "element-plus/es/components/message/style/css";
import router from "@/router";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";

const httpInstance=axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})


//拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
  //1从pinia获取token数据
  const userStore = useUserStore();
  //2按照后端要求拼接数据
  const token = userStore?.userInfo?.token
  if (token) {
    config.headers.Authorization=`Bearer ${token}`
  }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore();
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
  //401token失效处理
  //1.清除本地用户数据  2.跳转到登录页
  if (e.response.status === 401) {
    userStore.clearUserInfo();
    router.push('/login')
  }
  return Promise.reject(e)
});




export default httpInstance;