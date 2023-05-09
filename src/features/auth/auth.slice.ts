import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, authApi, ProfileType} from "features/auth/auth.api";

const register = createAsyncThunk('auth/register', (arg: any) => {

    //создали санку, теперь подключаем ранее соданную апишку
    authApi.register(arg).then((res) => {
        console.log('register:' + res.data.addedUser)

    })
})
const login = createAsyncThunk('auth/login', (arg: ArgLoginType, thunkApi) => {
    const {dispatch} = thunkApi
    //создали санку, теперь подключаем ранее соданную апишку
    authApi.login(arg).then((res) => {
        debugger
        dispatch(authActions.setProfile({profile: res.data}))
    })
})

const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {
        setProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
            state.profile = action.payload.profile
        }
    },
    extraReducers:builder => {

    }
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = {register, login}
