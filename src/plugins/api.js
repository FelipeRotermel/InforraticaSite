import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/api'

const MY_IP = import.meta.env.VITE_MY_IP
console.log(`${MY_IP}`)

const api = axios.create({
    baseURL: `https://inforratica-django.1.us-1.fl0.io/`,
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