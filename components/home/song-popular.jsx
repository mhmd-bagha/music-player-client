import Link from "next/link";
import Songs from "Component/artist/songs";
import {songsPopular} from "@/lib/songsPupolar";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {addSongsPopular} from "@/redux/reducers/songs-popular";

const SongPopular = () => {
    const dispatch = useAppDispatch()
    const songs = useAppSelector(state => state.songPopular.songs_popular)

    const getSongsPopular = async () => {
        await songsPopular().then((res) => res?.status === 200 && dispatch(addSongsPopular(res.data)))
    }

    useEffect(() => {
        getSongsPopular()
    }, [])

    return (
        <>
            <div className="my-2 md:my-6 px-4 lg:px-14">
                {/* song popular and see all song */}
                <div className="flex justify-between items-center mb-4 lg:mb-7">
                    <p className="color-gunmetal text-lg font-bold">Popular</p>
                    <Link href='/song-popular' className="color-gunmetal text-sm font-thin">See All</Link>
                </div>
                <div className="h-80 overflow-y-scroll">
                    <Songs songs={songs}/>
                </div>
            </div>
        </>
    )
}

export default SongPopular