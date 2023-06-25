import ArtistImage from "Component/artist/artist-image";
import PlayAlbum from "Component/artist/PlayAlbum";
import Songs from "Component/artist/songs";
import PLayerView from "Component/player/player";
import {useGlobalContext} from "@/context/store";
import {useEffect} from "react";
import {albums, songByAlbum} from "@/lib/album";
import {useAppDispatch} from "@/hooks";
import {albumById} from "@/redux/reducers/album";
import {useRouter} from "next/router";
import SongsType from '@/types/songs';
import {GetStaticPaths, GetStaticProps, InferGetServerSidePropsType} from "next";
import slug from '@/helpers/slug';

const Album = ({songs}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const {setShowSidebar} = useGlobalContext()
    const dispatch = useAppDispatch()
    const {albumId} = useRouter().query

    useEffect(() => {
        setShowSidebar(false)
        dispatch(albumById(albumId))

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

export const getStaticProps: GetStaticProps<{ songs: SongsType[] }> = async (context) => {
    const {albumId} = context.params

    const songs = await songByAlbum(albumId).then((res) => res.status === 200 && res.data)

    return {
        props: {
            songs
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const getAlbums = await albums().then((res) => res.status === 200 && res.data)
    const paths = getAlbums.map(({singer_name, id}) => ({params: {albumName: slug(singer_name), albumId: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Album