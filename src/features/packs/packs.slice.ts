import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CreateAppAsyncThunk, thunkTryCatch} from "common/utils";
import {GetPacksResponseType, CardPacksType, ArgGetPacksType} from "../packs/packs.apiTypes";
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
            .addCase(getPacks.fulfilled, (state, action:PayloadAction<{response:GetPacksResponseType}>) => {
                const packs = action.payload.response
                state.packs = packs.cardPacks
                alert("GOT THE PACKS!")
            })
    }
})




const getPacks = CreateAppAsyncThunk<{ response: GetPacksResponseType }, any>('packs/getPacks',
    async (payload: any, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await packsApi.getPacks();
            console.log(res)
            return {response: res.data}
        })
    })


export const packsReducer = slice.reducer
//export const authActions = slice.actions
export const packsThunks = {getPacks}
