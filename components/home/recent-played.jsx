import Image from "next/image";
import ImageSong from '@/public/songs/song.jpg';

const RecentPlayed = () => {
    return (
        <>
            <div className="flex justify-between items-center mt-14">
                <p className="color-gunmetal text-lg font-bold">Recent Played</p>
                <p className="text-sm color-gunmetal">See All</p>
            </div>
            {/* songs */}
            <div className="mt-6">
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">Blank Space</p>
                            <p className="color-crayola text-xs">Taylor Swift</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">12min ago</p>
                </div>
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">Bad Hobbits</p>
                            <p className="color-crayola text-xs">Ed Sheeran</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">30min ago</p>
                </div>
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">MONEY</p>
                            <p className="color-crayola text-xs">Lisa</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">2hr ago</p>
                </div>
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">I See Love</p>
                            <p className="color-crayola text-xs">Jonas Blue</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">4hr ago</p>
                </div>
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">Side Effects</p>
                            <p className="color-crayola text-xs">The Chainsmokers</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">4hr ago</p>
                </div>
                {/* song */}
                <div className="flex justify-between items-center py-2">
                    {/* image and name */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={ImageSong} alt={'blank space'} className="w-12 h-12 rounded"/>
                        <div className="pl-4">
                            <p className="text-sm color-gunmetal">Hora Loca</p>
                            <p className="color-crayola text-xs">The Change</p>
                        </div>
                    </div>
                    {/* time */}
                    <p className="text-xs color-gunmetal">5hr ago</p>
                </div>
            </div>
        </>
    )
}

export default RecentPlayed