import axiosInstance from './axios';
import {setLike} from "@/redux/reducers/songs-popular";

const getSongsLiked = async () => {
    const res = await axiosInstance.post('/album/songs/like');

    return res.data
}

const addSongLike = async (songId) => {
    const res = await axiosInstance.post('/album/song/like/add', songId);

    return (res.data === 200) ? setLike(songId) : res.data
}

const removeSongLike = async () => {
    const res = await axiosInstance.post('/album/song/like/remove');

    return res.data
}