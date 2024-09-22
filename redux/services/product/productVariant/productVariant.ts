import { baseApi } from "../../baseApi";


export const productVariantApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProductVariant: builder.mutation({
            query: (payload) => ({
                url: "/product/variant/create",
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
            invalidatesTags: ['Product'],
        }),
        fetchProductVariant: builder.query({
            query: ({id}) => ({
                url: `product/variant?product_id=${id}`,
                method: "GET",
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
            providesTags: ['Product'],
        }),
        updateProductVariant: builder.mutation({
            query: ({payload, id}) => ({
                url: `/product/variant/update?product_variant_id=${id}`,
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
            invalidatesTags: ['Product'],
        }),
        deleteProductVariant: builder.mutation({
            query: (id) => ({
                url: `/product/variant/delete?product_variant_id=${id}`,
                method: "DELETE",
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
            invalidatesTags: ['Product'],
        }),
        deactivateProductVariant: builder.mutation({
            query: (id) => ({
                url: `/product/variant/deactivate?product_variant_id=${id}`,
                method: "POST",
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
            invalidatesTags: ['Product'],
        }),
        activateProductVariant: builder.mutation({
            query: (id) => ({
                url: `/product/variant/activate?product_variant_id=${id}`,
                method: "POST",
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
            invalidatesTags: ['Product'],
        }),
    })
})

export const {
    useCreateProductVariantMutation,
    useFetchProductVariantQuery,
    useUpdateProductVariantMutation,
    useDeleteProductVariantMutation,
    useDeactivateProductVariantMutation,
    useActivateProductVariantMutation,
} = productVariantApi;