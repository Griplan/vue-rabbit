//axios基础封装
import axios from "axios";
import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";

const httpInstance=axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})


//拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
  return Promise.reject(e)
});




export default httpInstance;