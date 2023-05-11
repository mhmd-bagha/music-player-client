import {CiPlay1} from "react-icons/ci";
import {BsThreeDots} from "react-icons/bs";
import {useState} from "react";

const PlayAlbum = () => {
    const [follow, setFollow] = useState(false)

    return (
        <div className="flex items-center gap-10 px-5 py-5 bg-anti-flash-white">
            <button className="bg-gunmetal p-3 rounded-full text-white hover:scale-105 transition-all duration-100">
                <CiPlay1 size={25}/>
            </button>
            <button className="py-1 px-6 bg-transparent border border-dark-electric-blue rounded hover:border-gunmetal"
                    onClick={() => setFollow(!follow)}>{follow ? 'Following' : 'Follow'}
            </button>
            <button className="text-dark-electric-blue hover:text-gunmetal" title='More options for Archive'>
                <BsThreeDots size={25}/>
            </button>
        </div>
    )
}

export default PlayAlbum