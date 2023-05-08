import Image from "next/image";

const ArtistImage = () => {
    return (
        <div className="relative">
            <div className="flex items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-stone-900 bg-opacity-90"/>
                <Image src="/albums/album.jpg" alt="archive album" className="w-full h-96 object-cover" width={2000}
                             height={2000}/>
                <Image src="/albums/album.jpg" alt="archive album"
                             className="w-48 h-48 absolute rounded-md object-cover ml-6" width={2000} height={2000}/>
            </div>
            <div className="absolute top-36 left-48 pl-14 z-10">
                <p className="text-white">Playlist</p>
                <p className="text-white text-5xl font-black mt-4">archive</p>
                <p className="text-white mt-8">315,136 monthly listeners</p>
            </div>
        </div>
    )
}

export default ArtistImage