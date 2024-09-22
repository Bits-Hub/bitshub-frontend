import { setAuthUser } from "@/redux/features/auth/authSlice";
import { baseApi } from "../baseApi";
import Cookies from "js-cookie";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/auth/login",
                method: "POST",
                body: payload,
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {
                      data: { data },
                    } = result;
                    console.log(data)
                    Cookies.set("token", data.accessToken);
                    dispatch(setAuthUser(data));
                  } catch (error: any) {
                    console.log(error)
                  }
            },
        }),
        signUp: builder.mutation({
          query: (payload) => ({
              url: "/auth",
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
          }
      }),
      requestResetPassword: builder.mutation({
        query: (payload) => ({
            url: "/auth/request_password_reset",
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
      }
      }),
      resetPassword: builder.mutation({
        query: (payload) => ({
            url: "/auth/reset_password",
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
      }
      }),
      updateUserProfile: builder.mutation({
        query: (payload) => ({
            url: "/auth/updateProfile",
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
      }
      }),
      googleAuth: builder.mutation({
        query: (payload) => ({
          url: "/auth/oAuth/google",
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
    }
      }),
      appleAuth: builder.mutation({
        query: (payload) => ({
          url: "/auth/oAuth/apple",
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
    }
      }),
      appleRegistration: builder.mutation({
        query: (payload) => ({
          url: "/auth/oAuth/apple/register",
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
    }
      }),
      googleRegister: builder.mutation({
        query: (payload) => ({
          url: "/auth/oAuth/google/register",
          method: "POST",
          body: payload,
        }),
        async onQueryStarted(arg, {queryFulfilled, dispatch}) {
          try {
              const result = await queryFulfilled;
              const {
                data: { data },
              } = result;
              Cookies.set("token", data.accessToken);
                  dispatch(setAuthUser(data));
            } catch (error: any) {
              // console.log(error)
            }
      }
      }),
      delete: builder.mutation({
        query: (payload) => ({
          url: "/auth/delete",
          method: "DELETE",
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
      }
      }),
        // the rest of the endpoints relating to auth wil go here.
    })
})

export const { 
  useLoginMutation, 
  useSignUpMutation,
  useRequestResetPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserProfileMutation,
  useGoogleAuthMutation,
  useAppleAuthMutation,
  useAppleRegistrationMutation,
  useGoogleRegisterMutation,
  useDeleteMutation,
} = authApi;

// todo: figure out what to do with the response data for all the endpoints