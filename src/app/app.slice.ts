import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const appInitState = {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false,
}

type InitStateType = typeof appInitState

const slice = createSlice({
    name: 'app',
    initialState: appInitState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        },
        setError: (state, action: PayloadAction<{ error: string | null }>) => {
            debugger
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions








