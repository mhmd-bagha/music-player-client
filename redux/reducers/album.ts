import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    albums: [],
    album?: {
        id?: number,
        singer_name?: string,
        singer_image?: string,
        singer_type?: string,
        created_at?: string,
        updated_at?: string,
    }
}

const initialState: InitialState = {
    albums: []
}

const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<[]>) => {
            state.albums = action.payload
        },

        albumById: (state, action: PayloadAction<number>) => {
            state.album = state.albums.find(({id}) => id === action.payload)
        }
    }
});

export const {set, albumById} = albumSlice.actions

export default albumSlice.reducer