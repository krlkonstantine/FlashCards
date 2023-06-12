import {createSlice} from "@reduxjs/toolkit";

import {CreateAppAsyncThunk} from "common/utils";
import {GetPacksResponseType, CardPacksType} from "../packs/packs.apiTypes";
import {packsApi} from "features/packs/packs.api";

const slice = createSlice({

    name: "packs",
    initialState: {
        packs: null as CardPacksType[] | null,
        page: null as number | null,
        pageCount: null as number | null,
        cardPacksTotalCount: null as number | null,
        minCardsCount: 0,
        maxCardsCount: 0,
        queryParams: {
            packName: "",
            min: 0,
            max: 0,
            sortPacks: "",
            page: 1,
            pageCount: 0,
            user_id: "",
            block: false,
        },

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                state.packs = action.payload.packState;

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
        return {packs: res.data}
    })


export const packsReducer = slice.reducer
//export const authActions = slice.actions
export const packsThunks = {getPacks}
