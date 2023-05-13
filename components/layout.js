import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";
import {useGlobalContext} from "@/context/store";

const Layout = ({children}) => {
    const {showSidebar} = useGlobalContext()

    return (
        <>
            <div className="lg:flex">
                <Menu/>
                <div className={showSidebar ? 'w-full lg:w-4/6' : 'w-full'}>{children}</div>
                <Sidebar/>
            </div>
        </>
    )
}

export default Layout