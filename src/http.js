import axios from 'axios';
import VueCookie from 'vue-cookie'

axios.defaults.timeout = 5000;
axios.defaults.baseURL =process.env.BASE_URL;//服务器

//
// //http request 拦截器
// axios.interceptors.request.use(
//   config => {
//
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type': 'application/json',
//     };
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// //http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 400:
//           break;
//         case 401:
//            console.log('401错误');
//           break;
//         case 404:
//           console.log('404错误');
//           break;
//         case 2002:
//           alert('你当前的操作没有权限');
//           break;
//         case 500:
//           console.log('服务器错误');
//           break;
//       }
//     }
//     return Promise.reject(error)
//   }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      console.log(err);
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

export function getExcel(url){
  let access_token = VueCookie.get('access_token');
  if (url.indexOf('?')>0) {
    url = url + '&access_token=' + access_token;
  }else{
    url = url + '?access_token=' + access_token;
  }
  console.log(url);
  window.open(url);
}


export function formatDate_hs (now) {
  now = new Date(new Date(now).getTime());
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  if(month<10){
    month = '0'+month
  }
  if(date<10) {
    date = '0'+date
  }
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}



