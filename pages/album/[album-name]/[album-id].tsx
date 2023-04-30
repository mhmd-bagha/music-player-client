import Image from "next/image";

const Album = () => {
    return (
        <>
            <div className="relative">
                <Image src="/albums/album.jpg" alt="archive album" className="w-full h-80" width={2000} height={2000}/>
                <p className="text-lg font-bold">archive</p>
            </div>
        </>
    )
}

export default Album