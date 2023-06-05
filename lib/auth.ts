import axiosInstance from './axios';
import Cookies from 'js-cookie';
import {userType} from "@/types/auth";

interface loginData {
    email: string,
    password: string
}

export const auth = async (data: loginData) => {
    const res = await axiosInstance.post('/auth/login', data);

    if (res.status === 201 || res.status === 200)
        Cookies.set('auth', res.data.token.access_token)

    return res.data
}

export const user = async (): Promise<userType> => {
    const res = await axiosInstance.post('/auth/user');

    return res.data
}