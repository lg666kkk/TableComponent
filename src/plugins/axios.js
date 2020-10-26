"use strict";

import Vue from 'vue';
import axios from "axios";
export const ACCESS_TOKEN = 'Access-Token'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log('process.env',process.env)
let config = {
  baseURL: process.env.VUE_APP_API_BASE_URL || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

//请求拦截处理
_axios.interceptors.request.use((config)=> {
    const Token = localStorage.getItem(ACCESS_TOKEN)
    if(Token){
      _axios.defaults.headers.common['Authorization'] = 'Beare' + Token
    }
    return config;
  },
  (error)=> {
    return Promise.reject(error);
  }
);

//返回拦截处理
_axios.interceptors.response.use((response)=> {
    const {data,config}=response
    console.log('config',config)
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  console.log('options',options)
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
