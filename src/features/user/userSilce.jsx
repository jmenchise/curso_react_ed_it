import { createSlice } from '@reduxjs/toolkit'
import { getAllUsers } from './userAPI';

const initialState = {
    loading: false,
    error: false,
    users: []
}

const userSilce = createSlice({
    name: 'user',
    initialState,
    reducers: {
        emptyValues: (state) => {
            state.users = []
        },

        resetValues: (state, { payload }) => {
            state.users = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.loading = false
                state.error = true
                state.users = []
            })
    }
});

export const { emptyValues, resetValues } = userSilce.actions

export const makeUserSelect = (state) => state.user

export default userSilce.reducer