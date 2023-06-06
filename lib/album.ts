import axiosInstance from "@/lib/axios";

export const albums = async () => {
    const res = await axiosInstance.post('/album/all');

    return res.data
}