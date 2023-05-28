import axiosInstance from './axios';

interface loginData {
    email: string,
    password: string
}

export const auth = async (data: loginData) => {
    const res = await axiosInstance.post('/auth/login', data);
    return res.data
}