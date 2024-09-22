import { combineReducers } from "@reduxjs/toolkit";

import { baseApi } from "../services/baseApi";
import { authSliceReducer } from "./auth/authSlice";
import { categorySliceReducer } from "./product/category/categorySlice";
import { productVariantSliceReducer } from "./product/productVariant/productVariantSpecs/specSlice";
import { buyerProductsSliceReducer } from "./product/productSlice/buyerProductsSlice";

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSliceReducer,
    category: categorySliceReducer,
    productVariant: productVariantSliceReducer,
    buyerProducts: buyerProductsSliceReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;     