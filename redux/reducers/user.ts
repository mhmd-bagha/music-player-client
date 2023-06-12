import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    user: object | null
}

const initialState: InitialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<object>) => {
            state.user = action.payload
        }
    }
});

export const {set} = userSlice.actions

export default userSlice.reducer