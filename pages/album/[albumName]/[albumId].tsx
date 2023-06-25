import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";
import {useGlobalContext} from "@/context/store";
import {useEffect} from "react";
import {songByAlbum} from "@/lib/album";
import {useAppDispatch} from "@/hooks";
import {albumById} from "@/redux/reducers/album";
import {useRouter} from "next/router";
import SongsType from '@/types/songs';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

const Album = ({songs}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {setShowSidebar} = useGlobalContext()
    const dispatch = useAppDispatch()
    const {albumId} = useRouter().query

    useEffect(() => {
        setShowSidebar(false)
        dispatch(albumById(parseInt(albumId)))

        return () => {
            setShowSidebar(true)
        }
    }, [albumId, dispatch, setShowSidebar])

    return (
        <>
            <ArtistImage/>
            <PlayAlbum/>
            <Songs songs={songs}/>
            <PLayerView/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ songs: SongsType[] }> = async (context) => {
    const {albumId} = context.params

    const songs = await songByAlbum(albumId).then((res) => res.status === 200 && res.data)

    return {
        props: {
            songs
        }
    }
}

export default Album