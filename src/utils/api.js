import axios from 'axios'

const token = JSON.parse(localStorage.getItem('__knowledge_user'))
if(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})