import { baseApi } from "../../baseApi";

export const payoutApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addPayoutAccounttoStore: builder.mutation({
            query: (payload) => ({
                url: `/payment/payout_account/create?store_id=${payload.store_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                        data: { data },
                    } = result;
                } catch (error: any) {
                    // console.log(error)
                }
            },
        }),
        updatePayoutAccount: builder.mutation({
            query: (payload) => ({
                url: `/payment/payout_account/update?payout_account_id=${payload.payout_account_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                        data: { data },
                    } = result;
                } catch (error: any) {
                    // console.log(error)
                }
            },
        }),
        getPayoutAccount: builder.query({
            query: (store_id) => ({
                url: `/payment/payout_account/?store_id=${store_id}`,
                method: "GET"
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                        data: { data },
                    } = result;
                } catch (error: any) {
                    // console.log(error)
                }
            },
        }),
        activatePayoutAccount: builder.mutation({
            query: (payload) => ({
                url: `/payment/payout_account/create?payout_account_id=${payload.payout_account_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                        data: { data },
                    } = result;
                } catch (error: any) {
                    // console.log(error)
                }
            },
        }),
    })
})

export const {
    useAddPayoutAccounttoStoreMutation,
    useUpdatePayoutAccountMutation,
    useGetPayoutAccountQuery,
    useActivatePayoutAccountMutation
} = payoutApi;