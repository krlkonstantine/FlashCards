import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType} from "features/auth/auth.api";
import {AppDispatch, RootState} from "app/store";
import {CreateAppAsyncThunk} from "common/utils/CreateAsyncThunk";

const register = CreateAppAsyncThunk<void, ArgRegisterType>
('auth/register', async (arg) => {
    //создали санку, теперь подключаем ранее соданную апишку
    const res = await authApi.register(arg)
})

const login = CreateAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login',
    async (arg, thunkAPI) => {
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
            .addCase(register.rejected, (state, action) => {

            })
    }
})

export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login}
