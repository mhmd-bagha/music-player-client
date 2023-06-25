import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    songs: object[],
    songs_popular: []
}

const initialState: InitialState = {
    songs: [],
    songs_popular: []
}

const songsPopularSlice = createSlice({
    name: 'songPopular',
    initialState,
    reducers: {
        setLike: (state, action) => {
            state.songs = [...state.songs, action.payload]
        },
        removeLike: (state, action) => {
            state.songs = state.songs.filter((id) => id !== action.payload)
        },
        addSongsPopular: (state, action) => {
            state.songs_popular = action.payload
        }
    }
})

export const {setLike, removeLike, addSongsPopular} = songsPopularSlice.actions

export default songsPopularSlice.reducer