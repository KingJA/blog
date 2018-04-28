import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui';


// 这里的config包含每次请求的内容
axios.interceptors.request.use(config => {
  config.withCredentials = true;
  config.baseURL = 'http://localhost:8088';
  if (localStorage.getItem('jwt')) {
    config.headers.token = `${localStorage.getItem('jwt')}`;
  }
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 ||
      response.status === 400)) {
    return response
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  return res
}

function checkSuccess(res) {
  if (res.data.resultCode === 0) {
    return res;
  } else {
    Message({
      message: res.data.resultText,
      center: true,
      type: 'error'
    });
    return Promise.reject(res);
  }
}

// 请求方式的配置
export default {
  post(url, data) {
    return axios({
      method: 'post',
      withCredentials: true,
      url,
      data: qs.stringify(data),
      timeout: 5000,
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (response) => {
        return checkCode(response)
      }
    ).then(
      (response) => {
        return checkSuccess(response)
      }
    )
  },
  get(url, params) {  // get
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}

function getToken() {
  if (localStorage.getItem('api_token')) {
    return localStorage.getItem('api_token')
  } else {
    return '';
  }
}
