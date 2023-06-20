import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CreateAppAsyncThunk, thunkTryCatch} from "common/utils";
import {GetPacksResponseType, CardPacksType, ArgGetPacksType, ArgAddNewPack} from "../packs/packs.apiTypes";
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
    reducers: {
        setSearchByname: (state,action) => {
            debugger
                state.queryParams.packName = action.payload.packName
        },setFilterByAuthor: (state,action) => {
            debugger
                state.queryParams.user_id = action.payload.user_id
        },
        setMinAndMaxCardsCount: (state,action) => {
            debugger
                state.queryParams.min = action.payload.min
                state.queryParams.max = action.payload.max
        },setMinCardsCount: (state,action) => {
            debugger
                state.queryParams.min = action.payload.min
        },
        setMaxCardsCount: (state,action) => {
            debugger
                state.queryParams.max = action.payload.max
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPacks.fulfilled, (state, action) => {
                const packs = action.payload.response
                state.packs = packs.cardPacks
                state.page = packs.page
                state.pageCount = packs.pageCount
                state.minCardsCount = packs.minCardsCount
                state.maxCardsCount = packs.maxCardsCount
                state.cardPacksTotalCount = packs.cardPacksTotalCount
                alert("GOT THE PACKS!")
                console.log(state)
            })
            .addCase(addNewPack.fulfilled, (state, action: PayloadAction<{ response: any }>) => {
            })
    }
})


const getPacks = CreateAppAsyncThunk<{ response: GetPacksResponseType }, ArgGetPacksType>('packs/getPacks',
    async (payload: ArgGetPacksType, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await packsApi.getPacks(payload);
            console.log(res)
            return {response: res.data}
        })
    })


const addNewPack = CreateAppAsyncThunk<{ response: any }, ArgAddNewPack>
('packs/addNewPack',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const {dispatch} = thunkAPI
            const res = await packsApi.addPack(arg)
            dispatch(getPacks(thunkAPI.getState().packs.queryParams))
            return {response: res.data}
        })
    })


export const packsReducer = slice.reducer
export const packsActions = slice.actions
export const packsThunks = {getPacks, addNewPack}
