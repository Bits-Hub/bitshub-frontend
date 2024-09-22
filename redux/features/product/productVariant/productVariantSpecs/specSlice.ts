import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductVariant } from "../../type";
import { RootStateType } from "@/redux/store";


const initialState: ProductVariant[] = [
    {
        id: null,
        size: null,
        quantity: null,
        amount: null,
        status: null,
        color: null,
        img_urls: null,
        video_url: null,
        product_id: null,
        store_id: null,
        user_id: null,
        created_at: null,
        updated_at: null,
    },
];

const productVariantSlice = createSlice({
    name: "productVariant",
    initialState,
    reducers: {
        reset: (state) => (state = initialState),
        setProductVariant: (state, action: PayloadAction<any>) => {
            return { ...state, ...action.payload };
        },
    },
});


export const { setProductVariant } = productVariantSlice.actions;
export const resetProductVariant = productVariantSlice.actions.reset;
export const productVariantSliceReducer = productVariantSlice.reducer;
export const selectPoduc = (state: RootStateType) => state.category;

