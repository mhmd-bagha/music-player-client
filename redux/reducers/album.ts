import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    albums: []
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
        }
    }
});

export const {set} = albumSlice.actions

export default albumSlice.reducer