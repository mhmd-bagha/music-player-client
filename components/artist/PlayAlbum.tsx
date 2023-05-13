import {CiPlay1} from "react-icons/ci";
import {BsThreeDots} from "react-icons/bs";
import {useState} from "react";

type Option = {
    title: string,
    onClick: Function
}

const PlayAlbum = () => {
    const [follow, setFollow] = useState(false)
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);

    const titleFollowOrUnFollow = () => {
        return follow ? 'Unfollow' : 'Follow'
    }

    const handleClickDropDown = (callback: Function) => {
        setOpenDropDown(false)
        callback()
    }

    const optionsDropdown: Option[] = [
        {
            title: titleFollowOrUnFollow(),
            onClick: (): void => setFollow(!follow)
        },
        {
            title: 'Go to artist radio',
            onClick: (): string => ''
        },
        {
            title: 'Share',
            onClick: (): string => ''
        },
    ]

    return (
        <>
            <div className="flex items-center gap-10 px-5 py-5 bg-anti-flash-white">
                <button className="bg-gunmetal p-3 rounded-full text-white hover:scale-105 transition-all duration-100">
                    <CiPlay1 size={25}/>
                </button>
                <button
                    className="py-1 px-6 bg-transparent border border-dark-electric-blue rounded hover:border-gunmetal"
                    onClick={() => setFollow(!follow)}>{titleFollowOrUnFollow()}
                </button>
                <button className="text-dark-electric-blue hover:text-gunmetal" title='More options for Archive'
                        onClick={() => setOpenDropDown(!openDropDown)}>
                    <BsThreeDots size={25}/>
                </button>
                {/*  */}
                <div
                    className={`absolute right-0 left-0 bottom-0 lg:relative w-full lg:w-40 ${openDropDown ? 'scale-100 block z-20' : 'hidden scale-0'}`}>
                    <div
                        className="bg-gunmetal text-anti-flash-white w-full rounded-t lg:rounded py-2 px-1.5 lg:absolute lg:-translate-x-16 lg:translate-y-6">
                        {optionsDropdown.map((option, index) => (
                            <button key={index}
                                    className="text-left py-2 px-2 block w-full rounded hover:bg-dark-electric-blue"
                                    onClick={() => handleClickDropDown(option.onClick)}>{option.title}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`absolute w-full inset-0 ${openDropDown ? 'z-10' : '-z-10'}`}
                 onClick={() => setOpenDropDown(false)}/>
        </>
    )
}

export default PlayAlbum