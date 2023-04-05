import Menu from "Component/menu/menu";
import Sidebar from "Component/sidebar/sidebar";

const Home = () => {
    return (
        <>
            <div className="flex">
                <Menu/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Home