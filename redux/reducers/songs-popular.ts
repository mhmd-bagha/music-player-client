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
        }
    }
})

export const {setLike} = songsPopularSlice.actions

export default songsPopularSlice.reducer