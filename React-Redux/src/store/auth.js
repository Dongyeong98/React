import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false,
};

const authSlics = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlics.actions;

export default authSlics.reducer;
