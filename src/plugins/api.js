import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/api'

const api = axios.create({
    baseURL: 'http://localhost:8000/',
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