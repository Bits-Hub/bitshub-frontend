import { RootStateType } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Auth } from "./type";

const initialState: Auth = {
  accessToken: "",
  id: "",
  user_name: null,
  email: "",
  is_email_verified: false,
  active: false,
  first_name: "",
  last_name: "",
  mobile: null,
  is_mobile_verified: false,
  sex: null,
  dob: null,
  profile_cover_img: null,
  qr_code: null,
  img_url: null,
  reset_password_token: null,
  reset_password_expire: null,
  token: null,
  refresh_token: null,
  created_at: "",
  updated_at: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
    setAuthUser: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAuthUser } = authSlice.actions;
export const resetAuth = authSlice.actions.reset;

export const authSliceReducer = authSlice.reducer;

export const selectUser = (state: RootStateType) => state.auth;
