import {useState} from "react";
import Image from "next/image";
import styles from 'Styles/Home.module.scss'
import ImageSong from '@/public/songs/song.jpg'
import {AiOutlineHeart} from "react-icons/ai";

const InformationSongPlayed = () => {
    const [songLike, setSongLike] = useState(false)

    return (
        <>
            <div className="grid place-items-center pt-7">
                <div>
                    <Image src={ImageSong} alt={'Wildest Dreams'} className="rounded-md w-60 h-60"/>
                    <div className="flex justify-between items-center pt-4">
                        {/* song name */}
                        <div className="truncate">
                            <p className="font-bold text-lg lg:text-sm 2xl:text-lg color-gunmetal">Wildest Dreams</p>
                            <p className="color-crayola text-xs">Taylor Swift</p>
                        </div>
                        {/* song like */}
                        <button onClick={() => setSongLike(!songLike)}>
                            <AiOutlineHeart size={25} className={songLike ? styles.song_liked : styles.default_song_liked}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformationSongPlayed