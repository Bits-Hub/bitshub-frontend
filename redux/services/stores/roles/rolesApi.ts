import { baseApi } from "../../baseApi";

export const rolesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createRoles: builder.mutation({
            query: (payload) => ({
                url: "/role",
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
        getRoles: builder.query({
            query: () => ({
                url: "/role",
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
    }),
})

export const {
    useCreateRolesMutation,
    useGetRolesQuery
} = rolesApi;