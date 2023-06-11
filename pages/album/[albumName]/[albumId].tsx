import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";
import {useGlobalContext} from "@/context/store";
import {useEffect} from "react";
import {GetServerSideProps} from "next";
import context from "react-redux/src/components/Context";

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

export const getServerSideProps = (context) => {
    const {} = context.params

    console.log(albumId)

    const songs = [{}]

    return {
        props: {
            songs
        }
    }
}

export default Album