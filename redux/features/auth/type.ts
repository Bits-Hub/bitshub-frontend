// revisit this based on the actual response from the server
  

export type Auth = {
    accessToken?: string;
    id: string;
    user_name: string | null;
    email: string;
    is_email_verified: boolean;
    active: boolean;
    first_name: string;
    last_name: string;
    mobile: string | null;
    is_mobile_verified: boolean | null;
    sex: string | null;
    dob: string | null;
    profile_cover_img: string | null;
    qr_code: string | null;
    img_url: string | null;
    reset_password_token: null;
    reset_password_expire: string | null;
    token: string | null;
    refresh_token: string | null;
    created_at: string;
    updated_at: string;
  };