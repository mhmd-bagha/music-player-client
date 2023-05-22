import {Dispatch, SetStateAction} from "react";

type Menu = {
    showMenu: boolean,
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const menu: Menu = {
    showMenu: true,
    setShowMenu: (): boolean => true
}