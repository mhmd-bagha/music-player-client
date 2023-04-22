import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";

const Layout = ({children}) => {
    return (
        <>
            <div className="lg:flex">
                <div className="w-full lg:w-2/12"><Menu/></div>
                <div className="w-full lg:w-4/6">{children}</div>
                <div className="w-full lg:w-2/12"><Sidebar/></div>
            </div>
        </>
    )
}

export default Layout