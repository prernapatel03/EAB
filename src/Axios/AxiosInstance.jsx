import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL : 'http://localhost:8000/users'
})

const AxiosInstanceRequest = axios.create(
    {
          baseURL : 'http://localhost:8000/userRequest'
    }
)
export  {AxiosInstance , AxiosInstanceRequest};