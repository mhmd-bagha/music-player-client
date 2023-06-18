import axiosInstance from './axios';

const getSongsLiked = async () => {
    const res = await axiosInstance.post('/album/songs/like');

    return res.data
}

const addSongLike = async () => {
    const res = await axiosInstance.post('/album/song/like/add');

    return res.data
}