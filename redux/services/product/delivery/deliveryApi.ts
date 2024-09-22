import { baseApi } from "../../baseApi";


export const deleiveryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        delivery: builder.mutation({
            query: (payload) => ({
                url: "/product/delivery_fee",
                method: "POST",
                body: payload,
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
        })
    })
})

export const { useDeliveryMutation } = deleiveryApi;