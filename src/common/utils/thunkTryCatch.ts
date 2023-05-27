import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AppDispatch, RootState} from "app/store";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState,
                                        any, AppDispatch, unknown>,
                                    logic: Function,
                                    showGlobalError: boolean = true) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    //dispatch(appActions.setIsLoading({isLoading:true}))
    try {
        return await logic();
    } catch (e) {
        return rejectWithValue({e, showGlobalError})
    }
};