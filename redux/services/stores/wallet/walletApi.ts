import { baseApi } from "../../baseApi";

export const storeWalletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWalletBalance: builder.query({
            query: (store_id) => ({
                url: `wallet?store_id=${store_id}`,
                method: "GET"
            }),
        }),
    })
})

export const { useGetWalletBalanceQuery } = storeWalletApi;