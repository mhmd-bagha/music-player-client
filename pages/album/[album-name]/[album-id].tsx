import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";

const Album = () => {
    return (
        <>
            <ArtistImage/>
            <PlayAlbum/>
            <Songs/>
            <PLayerView/>
        </>
    )
}

export default Album