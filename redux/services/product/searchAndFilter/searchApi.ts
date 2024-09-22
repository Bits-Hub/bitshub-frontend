import { baseApi } from "../../baseApi";


export const searchApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        search: builder.query({
            query: ({query}) => ({
                url: `/product/search?search_string=${query}`,
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
        }),
    })
})

export const { useSearchQuery } = searchApi;