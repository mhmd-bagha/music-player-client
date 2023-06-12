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
    albums: [],
    album: {}
}

const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<[]>) => {
            state.albums = action.payload
        },

        albumById: (state, action: PayloadAction<number>) => {
            const albumId = parseInt(action.payload)
            state.album = state.albums.find(({id}) => id === albumId)
        }
    }
});

export const {set, albumById} = albumSlice.actions

export default albumSlice.reducer