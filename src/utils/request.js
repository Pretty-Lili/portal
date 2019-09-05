import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'http://localhost:8080',
  timeout: 50000 // 请求超时时间
})
export default service
