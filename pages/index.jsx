import Searchbar from "Component/home/searchbar";
import PopularArtists from "Component/home/popular-artists";

const Home = () => {

    return (
        <>
            <div className="grow mt-8">
                {/* searchbar */}
                <Searchbar/>
                {/* popular artist */}
                <PopularArtists/>
            </div>
        </>
    )
}

export default Home