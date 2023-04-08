import Searchbar from "Component/home/searchbar";
import PopularArtists from "Component/home/popular-artists";
import SongPopular from "Component/home/song-popular";

const Home = () => {

    return (
        <>
            <div className="grow mt-8">
                {/* searchbar */}
                <Searchbar/>
                {/* popular artist */}
                <PopularArtists/>
                {/* song popular */}
                <SongPopular/>
            </div>
        </>
    )
}

export default Home