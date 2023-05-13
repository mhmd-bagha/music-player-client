import {Dispatch, SetStateAction} from "react";

type Song = {
    songSrc: string,
    setSongSrc: Dispatch<SetStateAction<string>>
    songPlay: boolean,
    setSongPlay: Dispatch<SetStateAction<boolean>>
}

export const song: Song = {
    songSrc: '',
    setSongSrc: (): string => '',
    songPlay: false,
    setSongPlay: (): boolean => false,
};
