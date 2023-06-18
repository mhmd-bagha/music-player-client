import axiosInstance from './axios';
import {setLike} from "@/redux/reducers/songs-popular";

export const getSongsLiked = async () => {
    const res = await axiosInstance.post('/album/songs/like');

    return res.data
}

export const addSongLike = async (songId) => {
    const res = await axiosInstance.post('/album/song/like/add', {song_id: songId});

    return (res.data === 200) ? setLike(songId) : res.data
}

export const removeSongLike = async () => {
    const res = await axiosInstance.post('/album/song/like/remove');

    return res.data
}