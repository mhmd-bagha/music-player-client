import Searchbar from "Component/home/searchbar";
import PopularArtists from "Component/home/popular-artists";
import SongPopular from "Component/home/song-popular";
import PlayerView from "Component/player/player";

const Home = () => {

    return (
        <>
            <div className="col-span-12 mt-2 lg:mt-8">
                {/* searchbar */}
                <Searchbar/>
                {/* popular artist */}
                <PopularArtists/>
                {/* song popular */}
                <SongPopular/>
                {/* player */}
                <PlayerView src='/musics/in-the-end.mp3'/>
            </div>
        </>
    )
}

export default Home