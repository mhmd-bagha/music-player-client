import axiosInstance from './axios';

const getSongsLiked = async () => {
    const res = await axiosInstance.post('/album/songs/like');

    return res.data
}