import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://itunes.apple.com/search',
    withCredentials:true
})

export default apiClient;