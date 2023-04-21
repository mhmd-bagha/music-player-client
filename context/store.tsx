import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

interface ContextProps {
    songSrc: string,
    setSongSrc: Dispatch<SetStateAction<string>>
    songPlay: boolean,
    setSongPlay: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    songSrc: '',
    setSongSrc: (): string => '',
    songPlay: false,
    setSongPlay: (): boolean => false,
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