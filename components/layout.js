import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";
import {useGlobalContext} from "@/context/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({children}) => {
    const {showSidebar} = useGlobalContext()

    return (
        <>
            <div className="lg:flex">
                <Menu/>
                <div className={showSidebar ? 'w-full lg:w-4/6' : 'w-full'}>{children}</div>
                <Sidebar/>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Layout