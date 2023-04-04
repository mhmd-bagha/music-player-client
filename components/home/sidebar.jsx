import Profile from "Component/home/profile";
import RecentPlayed from "Component/home/recent-played";

const Sidebar = () => {

    return (
        <>
            <div className="h-screen w-1/4 lg:w-1/6 px-7 py-9 border-l">
                {/* profile */}
                <Profile/>
                {/* recent played */}
                <RecentPlayed/>
            </div>
        </>
    )
}

export default Sidebar