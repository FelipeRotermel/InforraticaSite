import axios from 'axios'
import set_my_ip from '../scripts/set_my_ip'

// axios.defaults.baseURL = 'http://localhost:8080/api'

const api = axios.create({
    baseURL: 'http://191.52.55.36:19003/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`            
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
) 

export default api  

// axios.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`            
//         }
//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')