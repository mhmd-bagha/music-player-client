import Link from "next/link";
import Image from "next/image";
import {AiOutlineHeart} from "react-icons/ai";
import NumberFormat from "@/helpers/number-format";
import {useState} from "react";
import styles from "Styles/Home.module.scss";
import {CiPlay1} from "react-icons/ci";
import {useGlobalContext} from "@/context/store";

const SongPopular = () => {
    const {setSongSrc} = useGlobalContext()
    const [songLiked, setSongLiked] = useState(false)
    const songs = [
        {id: 1, name: "Dream On", image: '/songs/song.jpg', count_broadcast: 6085698, time: '2:10', src: '/musics/in-the-end.mp3'},
        {id: 2, name: "Pop Brandneu", image: '/songs/song.jpg', count_broadcast: 59929829, time: '3:45', src: '/musics/in-the-end.mp3'},
        {id: 3, name: "Wilde Herzen", image: '/songs/song.jpg', count_broadcast: 7724557, time: '1:56', src: '/musics/in-the-end.mp3'},
        {id: 4, name: "Wildest Dreams (Taylor's Version)", image: '/songs/song.jpg', count_broadcast: 17858, time: '3:00', src: '/musics/in-the-end.mp3'},
    ]

    return (
        <>
            <div className="my-6 px-4 lg:px-14">
                {/* song popular and see all song */}
                <div className="flex justify-between items-center mb-4 lg:mb-7">
                    <p className="color-gunmetal text-lg font-bold">Popular</p>
                    <Link href='/song-popular' className="color-gunmetal text-sm font-thin">See All</Link>
                </div>
                <div className="h-80 overflow-y-scroll">
                    {songs.map((song, index) => (
                        <div className="grid grid-flow-col grid-cols-1 lg:grid-cols-2 my-3" key={index}>
                            {/* number, image and name  */}
                            <div className={`${styles.play_popular_song_button} flex items-center cursor-pointer`} onClick={() => setSongSrc(song.src)}>
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
                                <button onClick={() => setSongLiked(!songLiked)}>
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

export default SongPopular