import {useEffect} from "react";
import {useGlobalContext} from "@/context/store";
import Login from "Component/auth/login";

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

export default Auth