"use client";

import LoadingText from '@/components/molecules/loadingText';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter()
    // const signinData = useSelector((state) => state?.userSignin);
    // const { loading, userInfo } = signinData;
    // const initialValues = {
    //     email: "",
    //     password: "",
    //   };
    //   useEffect(() => {
    //     if (userInfo) {
    //       navigate(redirect);
    //     }
    //   }, [dispatch, redirect, userInfo, navigate]);
    //   const signinHandler = (data) => {
    //     dispatch(signin(data?.email, data?.password));
    //   };
  return (
    <div className="container py-16">
    {
    // false for now
    // loading
    false
    ? (
      <LoadingText />
    ) : (
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returning user
        </p>
        <form>
          <div className="space-y-4">
            {/* migrate to useForm */}
            {/* <InputField
              label="Email"
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              errorMsg={touched.email ? errors.email : undefined}
              placeholder="Enter your email address"
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              errorMsg={touched.password ? errors.password : undefined}
              placeholder="Enter your password"
            /> */}
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor pointer"
              >
                Remember me
              </label>
            </div>
            <Link href="/forgot" className="text-primary cursor-pointer">
              Forgot password?
            </Link>
          </div>
          <div className="mt-4">
            <button
            //   onClick={handleSubmit}
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex mt-6 justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
          >
            Facebook
          </a>
          <a
            href="/"
            className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don&apos;t have an account?
          <span className="text-primary cursor-pointer">
            <Link href="/register"> Create account</Link>
          </span>
        </p>
        <p className="mt-4 text-gray-600 text-center">
          Want to become a vendor?
          <span className="text-primary cursor-pointer">
            <Link href="/login/create-store"> Create a store</Link>
          </span>
        </p>
      </div>
    )}
  </div>
  )
}


