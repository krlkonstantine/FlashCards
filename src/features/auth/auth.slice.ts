import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "features/auth/auth.api";

const register = createAsyncThunk('auth/register', (arg:any, thunkApi) => {
    //const {dispatch, getState, rejectWithValue} = thunkApi

    //создали санку, теперь подключаем ранее соданную апишку
    authApi.register(arg).then((res)=>{
        debugger
    })
})

const slice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {}
})

export const authReducer = slice.reducer
export const authThunks = {register}