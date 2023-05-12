import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, authApi, ProfileType} from "features/auth/auth.api";
import {AppDispatch, RootState} from "app/store";

const register = createAsyncThunk('auth/register', async (arg: any) => {

    //создали санку, теперь подключаем ранее соданную апишку
    const res = await authApi.register(arg)
})

const login = createAsyncThunk<{profile:ProfileType}, ArgLoginType, {
    //берем стейт из нашего стора
    state:RootState,
    //диспатч взяли тоже из стора
    dispatch: AppDispatch,
    rejectValue?:unknown
}>('auth/login',
    async (arg, thunkAPI) => {
    const {getState} = thunkAPI
        const state = getState()


    const res = await authApi.login(arg)
    return {profile: res.data}
})

const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profile
        })
            .addCase(register.rejected, (state,action)=>{

            })
    }
})

export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login}
