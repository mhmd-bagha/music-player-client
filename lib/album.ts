import axiosInstance from "@/lib/axios";

export const albums = async () => {
    const res = await axiosInstance.post('/album/all');

    return res.data
}

export const songByAlbum = async (id) => {
    const res = await axiosInstance.post(`/album/get/${id}`);

    return res.data
}