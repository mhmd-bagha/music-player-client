import {createContext, useContext, useState} from "react";
import {song} from "@/context/song";
import {sidebar} from "@/context/sidebar";
import {menu} from "@/context/menu";

const GlobalContext = createContext({
    ...song,
    ...sidebar,
    ...menu
})

export const ContextProvider = ({children}) => {
    const [songSrc, setSongSrc] = useState<string>('');
    const [songPlay, setSongPlay] = useState<boolean | false>(false);
    const [showSidebar, setShowSidebar] = useState<boolean | true>(true);
    const [showMenu, setShowMenu] = useState<boolean | true>(true);

    return (
        <GlobalContext.Provider
            value={{songSrc, setSongSrc, songPlay, setSongPlay, showSidebar, setShowSidebar, showMenu, setShowMenu}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)