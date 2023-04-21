import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

interface ContextProps {
    songSrc: string,
    setSongSrc: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    songSrc: '',
    setSongSrc: (): string => ''
})

export const ContextProvider = ({children}) => {
    const [songSrc, setSongSrc] = useState('');

    return (
        <GlobalContext.Provider value={{songSrc, setSongSrc}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)