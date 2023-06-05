import {user as GetUser} from '@/lib/auth';
import {authType} from "@/types/auth";
import {useEffect, useState} from "react";
import {set} from "@/redux/reducers/user";
import {useAppDispatch, useAppSelector} from "@/hooks/index";
import Cookies from 'js-cookie';

const useUser = () => {
    const state = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const getUser = async () => {
        if (state.user === null && authenticate()) {
            const user = await GetUser()
            if (user.status === 200)
                return dispatch(set(user.user))
        }
    }

    const authenticate = () => !!Cookies.get('auth')

    useEffect(() => {
        getUser()

    }, [])

    return [state.user, authenticate]
}

export default useUser