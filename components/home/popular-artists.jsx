import Link from "next/link";
import styles from "Styles/Home.module.scss";
import Image from "next/image";
import {CiPlay1} from "react-icons/ci";

const PopularArtists = () => {
    const artists = [
        {name: 'apache 207', image: '/artists/apache207.jpg', 'url': 'apache-207', 'label': 'artist'},
        {name: 'bonez mc', image: '/artists/bonez-mc.jpg', 'url': 'bonez-mc', 'label': 'artist'},
        {name: 'luciano', image: '/artists/luciano.jpg', 'url': 'luciano', 'label': 'artist'},
        {name: 'ref camora', image: '/artists/raf-camora.jpg', 'url': 'ref-camora', 'label': 'artist'},
        {name: 'sido', image: '/artists/sido.jpg', 'url': 'sido', 'label': 'artist'},
    ]

    return (
        <div className="grid grid-flow-col overflow-x-auto gap-6 my-14 px-10">
            {artists.map((artist, index) => (
                <div className="border rounded shadow w-44 px-6 py-5" key={index}>
                    <Link href={`/album/${artist.url}`} className={`${styles.play_album_artist} w-10 h-10`}>
                        <Image src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full"
                               width={200} height={200}/>
                        <button className={`${styles.play_button} w-10 h-10`}><CiPlay1 size={22}/></button>
                    </Link>
                    <p className="mt-3 color-gunmetal font-bold capitalize">{artist.name}</p>
                    <p className="color-crayola capitalize">{artist.label}</p>
                </div>
            ))}
        </div>
    )
}
export default PopularArtists