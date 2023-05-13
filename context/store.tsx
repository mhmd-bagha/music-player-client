import {createContext, useContext, useState} from "react";
import {song} from "@/context/song";

const GlobalContext = createContext({
    ...song,
})

export const ContextProvider = ({children}) => {
    const [songSrc, setSongSrc] = useState('');
    const [songPlay, setSongPlay] = useState(false);

    return (
        <GlobalContext.Provider value={{songSrc, setSongSrc, songPlay, setSongPlay}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)