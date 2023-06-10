import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgChangeUserName, ArgLoginType, ArgRegisterType} from "features/auth/auth.apiTypes";
import {authApi} from "features/auth/auth.api";
import {AppDispatch, RootState} from "app/store";
import {appActions} from "app/app.slice";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {CreateAppAsyncThunk} from "common/utils";
import {ProfileType} from "features/auth/auth.apiTypes";

const slice = createSlice({

    name: "auth",
    initialState: {
        profile: null as ProfileType | null,
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
                state.isLoggedIn = true;

            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.profile = null;
            })
            .addCase(changeUserName.fulfilled, (state, action) => {
                if (state.profile) {
                    state.profile.name = action.payload
                }
            })

    }
})


const register = CreateAppAsyncThunk<void, ArgRegisterType>
('auth/register', async (arg, thunkAPI) => {
    //создали санку, теперь подключаем ранее соданную апишку
    //первым параметром передаем санк апи
    //вторым передаем саму нашу логику норм сценария
    return thunkTryCatch(thunkAPI, async () => {
        await authApi.register(arg)
    })

})

const login = CreateAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login',
    async (arg, thunkAPI) => {
        //как обрабатываем ошибки?
        //деструкт.достаем нужные методы из санкАПИ
        return thunkTryCatch(thunkAPI, async () => {
                console.log(arg)
                const res = await authApi.login(arg)
                const profileData = res.data
                return {profile: res.data}
            },
            false
        )
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
