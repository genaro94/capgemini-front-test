import axios from 'axios'

const success = res => res
const error = err => {
  if(400 === err.response.status || 401 === err.response.status){
    window.location = '/home'
  } else {
    return Promise.reject(err)
  }
}

axios.interceptors.response.use(success, error)