import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";

const Layout = ({children}) => {
    return (
        <>
            <div className="lg:grid lg:grid-flow-col">
                <Menu/>
                {children}
                <Sidebar/>
            </div>
        </>
    )
}

export default Layout