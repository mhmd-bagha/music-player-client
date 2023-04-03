import style from 'Styles/Home.module.scss';
import {TbPlaylist, TbSmartHome} from "react-icons/tb";
import {FiMusic} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {BsPersonFillCheck} from "react-icons/bs";
import NavLink from "@/tools/nav-link";

const Menu = () => {
    return (
        <div className="h-full w-1/4 px-6 py-9">
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
                    <NavLink href="/favorite-artist" className={style.menu_items} activeClassName={style.active}>
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
    )
}

export default Menu