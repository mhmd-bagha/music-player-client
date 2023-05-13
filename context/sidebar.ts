import {Dispatch, SetStateAction} from "react";

type Sidebar = {
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

export const sidebar: Sidebar = {
    showSidebar: true,
    setShowSidebar: (): boolean => true
}