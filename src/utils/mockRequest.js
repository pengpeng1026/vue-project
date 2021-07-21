// 对axios的二次封装,这里是对mock请求的封装，因为模拟的路径是在/mock而不是/api，所以需要重新封装
import axios from 'axios'
// 引入nprogress,完成进度条 ,该模块需要特殊引入css文件
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建一个axios的实例
const service = axios.create({
  baseURL:'/mock',
  timeout:20000
})

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    Nprogress.start()
    return config
  },
  // 请求拦截器失败的回调一般不写
  () => {}
)
// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    Nprogress.done()
    return response.data
  },
  (error) => {
    Nprogress.done()
    alert('网络错误'+ error.message)
    // 如果后续不想继续处理，可以返回一个pending状态的promise
    return new Promise(() => {})
  }
)
// 暴露这个axios
export default service