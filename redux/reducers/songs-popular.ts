import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    songs: []
}

const initialState: InitialState = {
    songs: []
}

const songsPopularSlice = createSlice({
    name: 'songPopular',
    initialState,
    reducers: {
        setLike: (state, action: PayloadAction<number>) => {
            state.songs = [...state.songs, action.payload]
        },
        removeLike: (state, action: PayloadAction<number>) => {
            state.songs = state.songs.filter((id) => id !== action.payload)
        }
    }
})

export const {setLike, removeLike} = songsPopularSlice.actions

export default songsPopularSlice.reducer