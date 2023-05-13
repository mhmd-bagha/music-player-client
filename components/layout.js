import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";

const Layout = ({children}) => {
    return (
        <>
            <div className="lg:flex">
                <Menu/>
                <div className="w-full lg:w-4/6">{children}</div>
                <Sidebar/>
            </div>
        </>
    )
}

export default Layout