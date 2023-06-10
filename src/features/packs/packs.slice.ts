import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArgChangeUserName, ArgLoginType, ArgRegisterType, ProfileType} from "features/auth/auth.apiTypes";
import {AppDispatch, RootState} from "app/store";
import {appActions} from "app/app.slice";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {CreateAppAsyncThunk} from "common/utils";
import {GetPacksResponseType, PackType} from "../packs/packs.apiTypes";
import {authApi} from "features/auth/auth.api";
import {packsApi} from "features/packs/packs.api";

const slice = createSlice({

    name: "packs",
    initialState: {
        packState: null as GetPacksResponseType | null,

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packState = action.payload.packState;

            })
        /*.addCase(logOut.fulfilled, (state, action) => {
            state.isLoggedIn = false;
            state.profile = null;
        })
        .addCase(changeUserName.fulfilled, (state, action) => {
            if (state.profile) {
                state.profile.name = action.payload
            }
        })*/

    }
})


const getPacks = CreateAppAsyncThunk<any, any>('packs/getPacks',
    async (thunkAPI) => {
        const res = await packsApi.getPacks()
        return {packState: res.data}
    })


export const packsReducer = slice.reducer
//export const authActions = slice.actions
export const packsThunks = {getPacks}
