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

    const menuItems = [
        {
            category: 'Main',
            items: [
                {
                    name: 'Home',
                    icon: <TbSmartHome/>,
                    url: '/'
                },
                {
                    name: 'Library',
                    icon: <FiMusic/>,
                    url: '/library'
                }
            ]
        },
        {
            category: 'Your Collection',
            items: [
                {
                    name: 'Liked Songs',
                    icon: <AiOutlineHeart/>,
                    url: '/liked-songs'
                },
                {
                    name: 'Favorite Artist',
                    icon: <BsPersonFillCheck/>,
                    url: '/favorite-artist'
                },
                {
                    name: 'Playlist',
                    icon: <TbPlaylist/>,
                    url: '/playlist'
                },
            ]
        },
    ]

    useEffect(() => {
        // Set openMenu based on device width
        (getDevice() === 'sm' || getDevice() === 'md') ? setOpenMenu(false) : setOpenMenu(undefined)
    }, [getDevice])

    return (
        <>
            {/* open button */}
            <button className="flex relative lg:hidden top-10 left-6" onClick={() => setOpenMenu(true)}>
                <HiBars3 size={25} className="color-gunmetal"/>
            </button>
            <div
                className={`bg-white h-screen fixed top-0 bottom-0 z-10 lg:relative w-full lg:w-1/6 border-r px-7 py-9 transition-all duration-500 ease-in-out ${activeMenuClass}`}>
                {/* close button */}
                <button className="block lg:hidden float-right" onClick={() => setOpenMenu(false)}>
                    <VscChromeClose size={25} className="color-gunmetal"/>
                </button>
                {/* menu items */}
                <div className="mb-5">
                    {menuItems.map((menu_items) => (
                        <>
                            {/* category menu */}
                            <p className={`text-sm lg:text-xs color-crayola py-2`}>{menu_items.category}</p>
                            {/* items menu */}
                            {menu_items.items.map((item, index) => (
                                <div className='my-6' key={index}>
                                    <NavLink href={item.url} className={style.menu_items}
                                             activeClassName={style.active}>
                                        {item.icon}
                                        <p className={`text-sm truncate pl-5 lg:pl-2 xl:pl-4 transition ease-in duration-500`}>{item.name}</p>
                                    </NavLink>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu