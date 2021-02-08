import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: false,
    loading: false,
    error: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authState(state, action) {
            state.auth = action.payload;
        },
    },
})

export const { authState } = authSlice.actions
export default authSlice.reducer;