import Menu from "Component/home/menu";
import Sidebar from "Component/home/sidebar";

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