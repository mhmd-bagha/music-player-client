import axios from "axios";
import Cookies from 'js-cookie'

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

export default axiosInstance