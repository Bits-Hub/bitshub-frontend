import Link from "next/link";
import Navbar from "./navbar";
import TopBar from "./topBar";
import Image from "next/image";
import { Input } from "@/components/atoms/ui/input";

export default function Header() {
  return (
    <div>
      <TopBar />
      <div className="py-4 shadow-sm bg-white md:px-[38vh]">
        <div className="container flex items-center justify-between ">
          <Link href="/home">
            <Image
              width={128}
              height={40}
              src="/images/bitshub.png"
              alt="bitshub banner"
              className="w-32"
            />
          </Link>
          <div className="hidden w-full flex-col md:max-w-xl relative md:flex ml-3">
            <div className="flex flex-row">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fas fa-search"></i>
              </span>
              <Input type="text" placeholder="search" />
              <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                Search
              </button>
            </div>
            {/* be-stuff */}
            {/* {showSearchResult && (
                            <div className="mx-0">
                                <Search item={searchItem} setSearch={setSearchItem} />
                            </div>
                        )} */}
          </div>
          <div className="flex items-center space-x-4 ml-3 ">
            {/* these were commented out in the old code */}
            {/* <Link
              to="/account/wishlist"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl md:text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="hidden md:block text-xs leading-3">Wish list</div>
              {wishlist?.data?.length > 0 && (
                <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  {wishlist?.data?.length}
                </span>
              )}
            </Link> */}
            <Link
              href="/login?redirect=/cart/:id"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl md:text-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="hidden md:block text-xs leading-3">Cart</div>
              {/* be stuff */}
              {/* {cartItems?.data?.length > 0 && (
                                <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                    {cartItems?.data?.length}
                                </span>
                            )} */}
            </Link>
            <div className="cursor-pointer relative group">
              <div className="text-center text-gray-700 hover:text-primary transition relative">
                <p className="text-xl md:text-2xl">
                  <i className="far fa-user"></i>
                </p>
                <p className="hidden md:block text-xs leading-3">
                  {/* {userInfo?.name || "Account"} */}
                </p>
              </div>
              <div className="absolute w-[15rem] right-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
                {/* {userInfo ? (
                                    <p className="px-6 py-3">{`Welcome, ${userInfo.data.first_name}`}</p>
                                ) : (
                                    ""
                                )} */}

                <Link
                  href="/account_"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <i className="far fa-user"></i>
                  <span className="ml-6 text-gray-600 text-sm">My Account</span>
                </Link>
                <Link
                  href="/account/order-history"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/images/package.png"
                    alt="delivery package"
                    className="w-5 h-5 object-contain text-color-red"
                  />
                  <span className="ml-6 text-gray-600 text-sm">My Order</span>
                </Link>
                {/* {userInfo && stores?.data?.length > 0 && (
                                    <div>
                                        <Link
                                            href="/login?redirect=dashboard"
                                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                                        >
                                            <i className="far fa-user"></i>
                                            <span className="ml-6 text-gray-600 text-sm">Admin</span>
                                        </Link>
                                    </div>
                                )} */}
                <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <Image
                    src="/images/power-off.png"
                    width={20}
                    height={20}
                    alt="logout icon"
                    className="w-5 h-5 object-contain text-color-red"
                  />
                  <span className="ml-6 text-gray-600 text-sm">
                    {/* {userInfo ? (
                                            <span onClick={signoutHandler}>Sign Out</span>
                                        ) : (
                                            <Link href="/login">Sign In</Link>
                                        )} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
