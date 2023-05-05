import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const appInitState = {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
}

type InitStateType = typeof appInitState

const slice = createSlice({
    name: 'app',
    initialState: appInitState,
    reducers: {
        setIsLoading: (state, action:PayloadAction<{ isLoading:boolean }>) => {
            state.isLoading = action.payload.isLoading
        }
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions








