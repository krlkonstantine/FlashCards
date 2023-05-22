import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgChangeUserName, ArgLoginType, ArgRegisterType, authApi, ProfileType} from "features/auth/auth.api";
import {AppDispatch, RootState} from "app/store";
import {CreateAppAsyncThunk} from "common/utils/CreateAsyncThunk";
import {appActions} from "app/app.slice";

const slice = createSlice({

    name: "auth",
    initialState: {
        profile: null as ProfileType | null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile
            })
            .addCase(changeUserName.fulfilled, (state, action) => {
                if (state.profile) {
                    debugger
                    state.profile.name = action.payload
                }
            })

    }
})


const register = CreateAppAsyncThunk<void, ArgRegisterType>
('auth/register', async (arg, thunkAPI) => {
    //создали санку, теперь подключаем ранее соданную апишку
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        await authApi.register(arg)
    } catch (e: any) {
        debugger
        dispatch(appActions.setError({error: e.response.data.error}))
        return rejectWithValue(null)
    }

})

const login = CreateAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login',
    async (arg, thunkAPI) => {
        const res = await authApi.login(arg)
        return {profile: res.data}
    })

const changeUserName = CreateAppAsyncThunk<any, ArgChangeUserName>('auth/changeUserName',
    async (arg, thunkAPI) => {
        const res = await authApi.changeUserName(arg)
        return {profile: res.data}
    })

const logOut = CreateAppAsyncThunk<void, any>('auth/logOut',
    async (thunkAPI) => {
        const res = await authApi.logOut()
    })

const forgotPass = CreateAppAsyncThunk<void, any>('auth/forgotPass',
    async (arg, thunkAPI) => {
        const res = await authApi.forgotPass(arg)
    })


const setNewPass = CreateAppAsyncThunk<void, any>('auth/createNewPass',
    async (arg, thunkAPI) => {
        const res = await authApi.setNewPass(arg)
    })

export const authReducer = slice.reducer
//export const authActions = slice.actions
export const authThunks = {register, login, forgotPass, setNewPass, logOut, changeUserName}
