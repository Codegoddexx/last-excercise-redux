import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currency: "#"

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.currency = "$";
            state.price = action.payload
        },
        changeToNaira: (state, action) => {
            state.currency = "#";
            state.price = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { changeCurrency, changeToNaira, currency } = authSlice.actions

export default authSlice.reducer