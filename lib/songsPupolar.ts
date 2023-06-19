import axiosInstance from './axios';
import {setLike} from "@/redux/reducers/songs-popular";

export const getSongsLiked = async () => {
    const res = await axiosInstance.post('/album/songs/like');

    return res.data
}

export const addSongLike = async (songId) => {
    const res = await axiosInstance.post('/album/song/like/add', {song_id: songId});

    return res.status
}

export const removeSongLike = async (songId) => {
    const res = await axiosInstance.post('/album/song/like/remove', {song_id: songId});

    return res.data
}