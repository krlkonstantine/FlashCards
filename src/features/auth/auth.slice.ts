import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "features/auth/auth.api";

const register = createAsyncThunk('auth/register', (arg:any) => {

    //создали санку, теперь подключаем ранее соданную апишку
    authApi.register(arg).then((res)=>{
        console.log('register:' + res.data.addedUser)

    })
})
const login = createAsyncThunk('auth/login', (arg:any) => {

    //создали санку, теперь подключаем ранее соданную апишку
    authApi.login(arg).then((res)=>{
        console.log('login:' + res.data)

    })
})

const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {}
})

export const authReducer = slice.reducer
export const authThunks = {register,login}
