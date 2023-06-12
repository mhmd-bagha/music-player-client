import {useEffect} from "react";
import {useGlobalContext} from "@/context/store";
import Login from "Component/auth/login";
import {parseCookies} from "nookies";

const Auth = () => {
    const {setShowSidebar, setShowMenu} = useGlobalContext()

    useEffect(() => {
        setShowSidebar(false)
        setShowMenu(false)

        return () => {
            setShowSidebar(true)
            setShowMenu(true)
        }
    }, [setShowSidebar, setShowMenu])

    return (
        <Login/>
    )
}

export const getServerSideProps = async (context) => {
    const cookies = parseCookies(context)

    // if exist user, redirect to home page
    if (cookies.auth) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props:{}
    }
}

export default Auth