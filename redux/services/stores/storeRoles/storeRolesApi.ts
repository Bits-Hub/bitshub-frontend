import { baseApi } from "../../baseApi";


export const storeRolesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createStoreRoles: builder.mutation({
            query: (payload) => ({
                url: "/storeRole/create",
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
        deleteStoreRoles: builder.mutation({
            query: (id) => ({
                url: `/storeRole/delete?store_role_id=${id}`,
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
        updateUserswithRoles: builder.mutation({
            query: (payload) => ({
                url: `/storeRole/update?store_role_id=${payload.store_role_id}`,
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
        getUserswithRoles: builder.query({
            query: (store_id) => ({
                url: `/storeRole/?store_id=${store_id}`,
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
        })
    })
})

export const {
    useCreateStoreRolesMutation,
    useDeleteStoreRolesMutation,
    useUpdateUserswithRolesMutation,
    useGetUserswithRolesQuery
} = storeRolesApi; 
