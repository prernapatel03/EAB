import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL : 'http://localhost:3039'
})


export default AxiosInstance;