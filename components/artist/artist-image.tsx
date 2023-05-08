import Image from "next/image";

const ArtistImage = () => {
    return (
        <div className="relative mt-16 lg:mt-0">
            <div className="flex items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-stone-900 bg-opacity-90"/>
                <Image src="/albums/album.jpg" alt="archive album" className="w-full h-96 object-cover" width={2000}
                             height={2000}/>
                <Image src="/albums/album.jpg" alt="archive album"
                             className="w-48 h-48 absolute rounded-md object-cover ml-3 sm:ml-6" width={2000} height={2000}/>
            </div>
            <div className="absolute top-36 left-48 pl-10 sm:pl-14 z-10">
                <p className="text-white">Playlist</p>
                <p className="text-white text-4xl lg:text-5xl font-black mt-4">archive</p>
                <p className="text-white mt-8">46,581 likes50 songs, <span className="text-gray-300">about 2 hr 15 min</span></p>
            </div>
        </div>
    )
}

export default ArtistImage