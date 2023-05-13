import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";
import {useGlobalContext} from "@/context/store";
import {useEffect} from "react";

const Album = () => {
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
            <Songs/>
            <PLayerView/>
        </>
    )
}

export default Album