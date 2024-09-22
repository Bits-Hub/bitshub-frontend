import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../type";
import { RootStateType } from "@/redux/store";

const initialState: Categories = []

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        reset: (state) => (state = initialState),
        setCategory: (state, action: PayloadAction<any>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setCategory } = categorySlice.actions;
export const resetCategory = categorySlice.actions.reset;
export const categorySliceReducer = categorySlice.reducer;
export const selectCategory = (state: RootStateType) => state.category;