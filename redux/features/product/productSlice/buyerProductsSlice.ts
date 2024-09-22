import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../type";
import { RootStateType } from "@/redux/store";


const initialState: Product[] = []
const buyerProductsSlice = createSlice({
    name: "buyer-products",
    initialState,
    reducers: {
        reset: (state) => (state = initialState),
        setProduct: (state, action: PayloadAction<any>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setProduct } = buyerProductsSlice.actions;
export const resetProduct = buyerProductsSlice.actions.reset;
export const buyerProductsSliceReducer = buyerProductsSlice.reducer;
export const selectProduct = (state: RootStateType) => state.buyerProducts;