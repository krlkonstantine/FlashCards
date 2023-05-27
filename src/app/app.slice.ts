import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError, isAxiosError} from "axios";
import {authThunks} from "features/auth/auth.slice";

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
            state.error = action.payload.error
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/pending")
                },
                (state, action) => {
                    state.isLoading = true
                }).addMatcher((action) => action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.isLoading = false
            })
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.isLoading = false;

                    if (!action.payload.showGlobalError) return;


                    const err = action.payload.e as Error | AxiosError<{ error: string }>;
                    if (isAxiosError(err)) {
                        state.error = err.response ? err.response.data.error : err.message;
                    } else {
                        state.error = `Native error ${err.message}`;
                    }
                    state.isLoading = false;
                })
    }
})

/*const setLoading = CreateAppAsyncThunk<void,any>('app/setLoading',async (arg,thunkAPI) =>{
    return thunkTryCatch(thunkAPI,async ()=>{
        const {dispatch} = thunkAPI
        dispatch(appActions.setIsLoading({isLoading:false}))
    })
})*/

export const appReducer = slice.reducer
export const appActions = slice.actions








