import {useState} from "react";
import Image from "next/image";
import styles from 'Styles/Home.module.scss'
import ImageSong from '@/public/songs/song.jpg'
import {AiOutlineHeart} from "react-icons/ai";

const InformationSongPlayed = () => {
    const [songLike, setSongLike] = useState(false)

    return (
        <>
            <div className="mt-10">
                <Image src={ImageSong} alt={'Wildest Dreams'} className="rounded-md"/>
                <div className="flex justify-between items-center pt-4">
                    {/* song name */}
                    <div>
                        <p className="font-bold text-lg color-gunmetal">Wildest Dreams</p>
                        <p className="color-crayola text-xs">Taylor Swift</p>
                    </div>
                    {/* song like */}
                    <button onClick={() => setSongLike(!songLike)}>
                        <AiOutlineHeart size={25} className={songLike ? styles.song_liked : styles.default_song_liked}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default InformationSongPlayed