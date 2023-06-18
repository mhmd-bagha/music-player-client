import Image from "next/image";
import styles from "Styles/Home.module.scss";
import {useState} from "react";
import NumberFormat from "@/helpers/number-format";
import {CiPlay1} from "react-icons/ci";
import {AiOutlineHeart} from "react-icons/ai";
import {useGlobalContext} from "@/context/store";
import SongType from '@/types/songs'
import {useAppSelector} from "@/hooks";
import {addSongLike} from "@/lib/songsPupolar";

const Songs = ({songs}) => {
    const songsLiked = useAppSelector(state => state.songPopular)
    const {setSongSrc, setSongPlay} = useGlobalContext()
    const [songLiked, setSongLiked] = useState(false)

    const playSong = (src: string) => {
        setSongSrc(src)
        setSongPlay(true)
    }

    return (
        <>
            <div className="py-2 px-6 lg:px-8">
                <div className="h-80 overflow-y-scroll">
                    {songs.map((song: SongType, index) => (
                        <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2 my-3" key={index}>
                            {/* number, image and name  */}
                            <div className={`${styles.play_popular_song_button} flex items-center cursor-pointer`}
                                 onClick={() => playSong(song.src)}>
                                <p className="color-gunmetal text-sm font-medium pr-5 hidden lg:block">{song.id}</p>
                                <Image src={song.image} alt={song.name} className="w-12 h-12 rounded" width={200}
                                       height={200}/>
                                <button className={`${styles.play_button} w-10 h-10 !hidden lg:!flex`}><CiPlay1
                                    size={22}/></button>
                                <p className="color-gunmetal text-xs md:text-sm font-bold ml-4 lg:ml-8">{song.name}</p>
                            </div>
                            {/* the number of broadcasts */}
                            <p className="color-crayola hidden lg:block">{NumberFormat(song.count_broadcast)}</p>
                            {/* like and song time */}
                            <div className="flex items-center">
                                <button onClick={() => addSongLike(song.id)}>
                                    <AiOutlineHeart size={20}
                                                    className={songLiked ? 'bg-heart-active-icon' : 'color-gunmetal'}/>
                                </button>
                                <p className="color-gunmetal text-sm pl-6">{song.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Songs