import Profile from "Component/sidebar/profile";
import RecentPlayed from "Component/sidebar/recent-played";
import InformationSongPlayed from "Component/sidebar/information-song-played";

const Sidebar = () => {

    return (
        <>
            {/* the sidebar now version hidden for device android */}
            <div className="h-screen px-7 lg:px-4 py-9 border-l hidden lg:block">
                {/* profile */}
                <Profile/>
                {/* recent played */}
                <RecentPlayed/>
                {/* information song played */}
                <InformationSongPlayed/>
            </div>
        </>
    )
}

export default Sidebar