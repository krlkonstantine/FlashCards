import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, authApi, ProfileType} from "features/auth/auth.api";

const register = createAsyncThunk('auth/register', (arg: any) => {

    //создали санку, теперь подключаем ранее соданную апишку
    authApi.register(arg).then((res) => {
        console.log('register:' + res.data.addedUser)

    })
})
const _login = createAsyncThunk('auth/login', (arg: ArgLoginType, thunkApi) => {
    //создали санку, теперь подключаем ранее соданную апишку
    return authApi.login(arg).then((res) => {
        debugger
        //dispatch(authActions.setProfile({profile: res.data}))
        return {profile: res.data}
    })
})
const login = createAsyncThunk('auth/login', async (arg: ArgLoginType, thunkApi) => {
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
        builder.addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profile
        })
    }
})

export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login}
