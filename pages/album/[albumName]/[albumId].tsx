import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";
import {useGlobalContext} from "@/context/store";
import {useEffect} from "react";
import {songByAlbum} from "@/lib/album";

const Album = ({songs}) => {
    const {setShowSidebar} = useGlobalContext()

    useEffect(() => {
        setShowSidebar(false)

        return () => {
            setShowSidebar(true)
        }
    }, [setShowSidebar])

    return (
        <>
            <ArtistImage/>
            <PlayAlbum/>
            <Songs songs={songs.data}/>
            <PLayerView/>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {albumId} = context.params

    const songs = await songByAlbum(albumId)

    return {
        props: {
            songs
        }
    }
}

export default Album