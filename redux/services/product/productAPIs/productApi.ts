import { baseApi } from "../../baseApi";


export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (payload) => ({
                url: "/product/create",
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
            invalidatesTags: ['Product'],
         }),
         updateProduct: builder.mutation({
            query: ({payload, id}) => ({
                url: `/product/update?product_id=${id}`,
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
            invalidatesTags: ['Product'],
         }),
         getProductsForBuyers: builder.query({
            query: ({query}) => ({
                url: `/product/search?search_string=${query}`,
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
            providesTags: ['Product'],
         }),
         getProductsbyCategory: builder.query({
            query: ({id}) => ({
                url: `/product?category_id=${id}`,
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
            providesTags: ['Product'],
            }),
            getProductsForAdmin: builder.query({
                query: () => ({
                    url: "/product/all/admin",
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
                providesTags: ['Product'],
                // todo: should have a seperate tags of all products
            }),
            getSingleProductForBuyer: builder.query({
                query: ({id}) => ({
                    url: `/product?slug=${id}`,
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
                providesTags: ['Product'],
            }),
            getProductsForSeller: builder.query({
                query: () => ({
                    url: "/product/seller",
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
                providesTags: ['Product'],
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
            deleteProduct: builder.mutation({
                query: (id) => ({
                    url: `/product/delete?product_id=${id}`,
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
            activateProduct: builder.mutation({
                query: (id) => ({
                    url: `/product/activate?product_id=${id}`,
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
            deactivateProduct: builder.mutation({
                query: (id) => ({
                    url: `/product/deactivate?product_id=${id}`,
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
            advertiseProduct: builder.mutation({
                query: () => ({
                    url: `/product/advertise`,
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
    useCreateProductMutation,
    useUpdateProductMutation,
    useGetProductsForBuyersQuery,
    useGetProductsbyCategoryQuery,
    useGetProductsForAdminQuery,
    useGetSingleProductForBuyerQuery,
    useGetProductsForSellerQuery,
    useDeleteProductVariantMutation,
    useDeleteProductMutation,
    useActivateProductMutation,
    useDeactivateProductMutation,
    useAdvertiseProductMutation
} = productApi;