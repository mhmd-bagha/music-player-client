import Link from "next/link";
import styles from "Styles/Home.module.scss";
import Image from "next/image";
import {CiPlay1} from "react-icons/ci";
import {useEffect} from "react";
import {albums as GetAlbums} from "@/lib/album";
import {set} from "@/redux/reducers/album";
import {useAppDispatch, useAppSelector} from "@/hooks";

const PopularArtists = () => {
    const albumState = useAppSelector(state => state.album)
    const dispatch = useAppDispatch()

    const getAlbums = async () => {
        if (albumState.albums.length === 0) {
            const albums = await GetAlbums()

            if (albums.status === 200)
                return dispatch(set(albums.data))
        }
    }

    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <div className="grid grid-flow-col overflow-x-auto gap-6 my-14 px-14">
            {albumState.albums.map((album, index) => (
                <div className="border rounded shadow w-44 px-6 py-5" key={index}>
                    <Link href={`/album/${album.singer_name}/${album.id}`}
                          className={`${styles.play_album_artist} w-10 h-10`}>
                        <Image src={album.singer_image} alt={album.singer_name} className="w-32 h-32 rounded-full"
                               width={200} height={200}/>
                        <button className={`${styles.play_button} w-10 h-10`}><CiPlay1 size={22}/></button>
                    </Link>
                    <p className="mt-3 color-gunmetal font-bold capitalize">{album.singer_name}</p>
                    <p className="color-crayola capitalize">artist</p>
                </div>
            ))}
        </div>
    )
}

export default PopularArtists