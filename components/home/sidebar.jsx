import Profile from "Component/home/profile";

const Sidebar = () => {

    return (
        <>
            <div className="h-screen w-1/4 lg:w-1/6 px-7 py-9 border-l">
                {/* profile */}
                <Profile/>
            </div>
        </>
    )
}

export default Sidebar