import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, RootState} from "app/store";
import {appActions} from "app/app.slice";
import {AxiosError, isAxiosError} from "axios";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    //dispatch(appActions.setIsLoading({isLoading:true}))
    try {
        return await logic();
    } catch (e) {
        return rejectWithValue(e);
    } finally {
        //dispatch(appActions.setIsLoading({isLoading:false}))
    }
};