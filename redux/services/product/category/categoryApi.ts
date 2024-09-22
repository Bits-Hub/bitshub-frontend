import { baseApi } from "../../baseApi"


export const productCategoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCategory: builder.mutation({
            query: (payload) => ({
                url: "/category/create",
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
            invalidatesTags: ['Category'],
         }),
         updateCategory: builder.mutation({
            query: ({payload, id}) => ({
                url: `/category/update?category_id=${id}`,
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
            invalidatesTags: ['Category'],
         }),
         getCategory: builder.query({
            query: () => ({
                url: "/category",
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
            providesTags: ['Category'],
         }),
    })
})

export const {
    useCreateCategoryMutation,
    useGetCategoryQuery,
    useLazyGetCategoryQuery,
    useUpdateCategoryMutation,
} = productCategoryApi;