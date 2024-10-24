import { baseApi } from "../baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCartItems: builder.query({
            query: () => ({
                url: `/cart`,
                method: "GET"
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                        data: { data },
                    } = result;
                } catch (error: any) {
                    throw error;
                }
            }
        }),
        addToCart: builder.mutation({
            query: (payload) => ({
                url: "/cart/create",
                method: "POST",
                body: payload
            }),
        }),
        updateCart: builder.mutation({
            query: (payload) => ({
                url: `/cart/update?cart_id=${payload.cart_id}`,
                method: "POST",
                body: payload
            }),
        }),
        deleteCart: builder.mutation({
            query: (payload) => ({
                url: `/cart/delete?cart_id=${payload.cart_id}`, 
                method: "DELETE",
            }),
        }),
        createOrder: builder.mutation({
            query: (payload) => ({
                url: "/order/create",
                method: "POST",
                body: payload
            }),
        }),
    }),
});

export const {
    useGetAllCartItemsQuery,
    useAddToCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
    useCreateOrderMutation
} = cartApi;