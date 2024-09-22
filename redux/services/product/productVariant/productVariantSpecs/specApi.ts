import { baseApi } from "@/redux/services/baseApi";

export const specApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProductVariantSpec: builder.mutation({
            query: (payload) => ({
                url: "/product/variant/spec/create",
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
        fetchProductVariantSpec: builder.query({
            query: ({id}) => ({
                url: `product/variant/spec?product_variant_id=${id}`,
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
        updateProductVariantSpec: builder.mutation({
            query: ({payload, id}) => ({
                url: `/product/variant/spec/update?product_variant_spec_id=${id}`,
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
        deleteProductVariantSpec: builder.mutation({
            query: (id) => ({
                url: `/product/variant/spec/delete?product_variant_spec_id=${id}`,
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
    })
})

export const {
    useCreateProductVariantSpecMutation,
    useFetchProductVariantSpecQuery,
    useUpdateProductVariantSpecMutation,
    useDeleteProductVariantSpecMutation,
} = specApi;