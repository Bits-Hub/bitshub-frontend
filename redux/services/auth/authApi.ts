import { setAuthUser } from "@/redux/features/auth/authSlice";
import { baseApi } from "../baseApi";
import Cookies from "js-cookie";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/login",
                method: "POST",
                body: payload,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                      data: { data },
                    } = result;
                    Cookies.set("token", data.token);
                    dispatch(setAuthUser(data));
                  } catch (error: any) {
                    // console.log(error)
                  }
            },
        })
        // the rest of the endpoints relating to auth wil go here.
    })
})