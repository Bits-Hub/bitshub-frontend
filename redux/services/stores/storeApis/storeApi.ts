import { baseApi } from "../../baseApi";

export const storeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createStore: builder.mutation({
            query: (payload) => ({
                url: "/store/create",
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        getAllSellerStores: builder.query({
            query: () => ({
                url: "/store",
                method: "GET"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        getAllBuyerStores: builder.query({
            query: () => ({
                url: "/store",
                method: "GET"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        getAllStoresforAdmin: builder.query({
            query: () => ({
                url: "/store",
                method: "GET"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        getStorebySlug: builder.query({
            query: (payload) => ({
                url: `/store?slug=${payload.brand_name}-${payload.id}`,
                method: "GET"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        deleteStore: builder.mutation({
            query: (id) => ({
                url: `/store/delete?store_id=${id}`,
                method: "DELETE"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        updateStore: builder.mutation({
            query: (payload) => ({
                url: `/store/update?store_id=${payload.store_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        activateStore: builder.mutation({
            query: (payload) => ({
                url: `/store/activate?store_id=${payload.store_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
        deactivateStore: builder.mutation({
            query: (payload) => ({
                url: `/store/deactivate?store_id=${payload.store_id}`,
                method: "POST",
                body: payload
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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
});

export const {
    useCreateStoreMutation,
    useGetAllSellerStoresQuery,
    useGetAllBuyerStoresQuery,
    useGetAllStoresforAdminQuery,
    useGetStorebySlugQuery,
    useDeleteStoreMutation,
    useUpdateStoreMutation,
    useActivateStoreMutation,
    useDeactivateStoreMutation 
} = storeApi;