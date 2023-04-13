import style from 'Styles/Home.module.scss';
import {TbPlaylist, TbSmartHome} from "react-icons/tb";
import {FiMusic} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {BsPersonFillCheck} from "react-icons/bs";
import NavLink from "@/helpers/nav-link";
import {VscChromeClose} from "react-icons/vsc";
import {useEffect, useMemo, useState} from "react";
import useDeviceWidth from "@/helpers/device-width";
import {HiBars3} from "react-icons/hi2";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(undefined)
    // Get use device user
    const {getDevice} = useDeviceWidth()
    // Change show class menu form status state
    const activeMenuClass = useMemo(() => {
        switch (openMenu) {
            case true:
                return 'right-0 left-0';
            case false:
                return 'left-full';
            default:
                return '';
        }
    }, [openMenu]);

    useEffect(() => {
        // Set openMenu based on device width
        (getDevice() === 'sm' || getDevice() === 'md') ? setOpenMenu(false) : setOpenMenu(undefined)
    }, [getDevice])

    return (
        <>
            {/* open button */}
            <button className="flex relative lg:hidden top-10 left-5" onClick={() => setOpenMenu(true)}>
                <HiBars3 size={25} className="color-gunmetal"/>
            </button>
            <div
                className={`bg-white h-screen fixed top-0 bottom-0 z-10 lg:relative w-full lg:w-1/6 border-r px-7 py-9 transition-all duration-500 ease-in-out ${activeMenuClass}`}>
                {/* close button */}
                <button className="block lg:hidden float-right" onClick={() => setOpenMenu(false)}>
                    <VscChromeClose size={25} className="color-gunmetal"/>
                </button>
                <div className="mb-5">
                    <div className='my-6'>
                        <NavLink href="/" className={style.menu_items} activeClassName={style.active}>
                            <TbSmartHome/>
                            <p className="pl-5">Home</p>
                        </NavLink>
                    </div>
                    <div className='my-6'>
                        <NavLink href="/library" className={style.menu_items} activeClassName={style.active}>
                            <FiMusic/>
                            <p className="pl-5">Library</p>
                        </NavLink>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-sm color-crayola py-2 text-xs">Your Collection</p>
                    <div className='my-6'>
                        <NavLink href="/liked-songs" className={style.menu_items} activeClassName={style.active}>
                            <AiOutlineHeart/>
                            <p className="pl-5">Liked Songs</p>
                        </NavLink>
                    </div>
                    <div className='my-6'>
                        <NavLink href="/favorite-artist" className={style.menu_items}
                                 activeClassName={style.active}>
                            <BsPersonFillCheck/>
                            <p className="pl-5">Favorite Artist</p>
                        </NavLink>
                    </div>
                    <div className='my-6'>
                        <NavLink href="/playlist" className={style.menu_items} activeClassName={style.active}>
                            <TbPlaylist/>
                            <p className="pl-5">Playlist</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu