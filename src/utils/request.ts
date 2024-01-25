import axios from "axios";
import Message from "element-plus";
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.baseURL = "http://127.0.0.1:8080";
// 数据格式转换
axios.defaults.transformRequest = function (data) {
  data = JSON.stringify(data);
  return data;
};

// 路由请求拦截
axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
// 路由响应拦截
axios.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      alert(response.data.msg);
      //   return Message.error(re);
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);
export default axios;
