import axios from "axios";
import Cookies from 'js-cookie'
import {refreshToken} from "@/lib/auth";

const baseURL = 'http://localhost:8000/api'

const axiosInstance = axios.create({
    baseURL: baseURL
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const authCookie = Cookies.get('auth')

        if (authCookie)
            config.headers = {
                'Authorization': `Bearer ${authCookie}`
            }

        return config;

    }, error => Promise.reject(error))

axiosInstance.interceptors.response.use((response) => response,
    async (error) => {
        const prevRequest = error.config
        if (error.response.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true
            const token = await refreshToken()
            prevRequest.headers['Authorization'] = `Bearer ${token}`
            return axiosInstance(prevRequest)
        }
        return Promise.reject(error)
    })

export default axiosInstance