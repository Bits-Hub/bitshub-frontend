import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const accountLinks = [
        {
            name: "Orders",
            href: "/account/order-history",
        },
        {
            name: "Wishlist",
            href: "/account/wishlist",
        },
        {
            name: "Track Order",
            href: "/track-order",
        },
        {
            name: "Manage Account",
            href: "/account_",
        },
        {
            name: "Return Order",
            href: "/",
        }
    ]
    const menuLinks = [
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Return Policy",
            href: "/return-policy",
        },
        {
            name: "Terms and Conditions",
            href: "/terms-and-conditions",
        },
        {
            name: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            name: "FAQ",
            href: "/faq",
        },
    ]
  return (
    <div>
    <div className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container grid md:grid-cols-2 break-words">
        <div className="col-span-4 grid grid-cols-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Image src="/images/bitshub.png" width={128} height={40} alt="bitshub banner" className="w-32" />
              <p className="text-gray-500">
                the hub of bits...
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                My account
              </h3>
              <div className="mt-4 space-y-2">
                {
                    accountLinks.map((link, index)=> {
                        return (
                            <Link href={link.href} key={index} className="text-base text-gray-500 hover:text-gray-900 block">
                                {link.name}
                            </Link>
                        )
                    })
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Information
              </h3>
              <div className="mt-4 space-y-2">
                {
                    menuLinks.map((link, index) => {
                        return (
                            <Link href={link.href} key={index} className="text-base text-gray-500 hover:text-gray-900 block">
                                {link.name}
                            </Link>
                        )
                    })
                }
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Contact
              </h3>
              <div className="mt-4 space-y-3 ">
                <p className="text-base text-gray-500 hover:text-gray-900 block">
                  {/* <LocationOnIcon
                    className="mr-3"
                    sx={{ fontSize: 20, color: "black" }}
                  />{" "} */}
                  18, Oremeji street,{" "}
                  <span className="lg:ml-9">Computer Village, Ikeja </span>
                </p>
                <p className="text-base text-gray-500 hover:text-gray-900 block">
                  <a href="tel:+2348103431851">
                    {/* <PhoneIcon
                      className="mr-3"
                      sx={{ fontSize: 20, color: "black" }}
                    />{" "} */}
                    +234 8103431851
                  </a>
                </p>
                <p className="text-base lg:whitespace-nowrap text-gray-500 hover:text-gray-900 block">
                  <a href="mailto:official@bitshub.co">
                    {/* <EmailOutlinedIcon
                      className="mr-3"
                      sx={{ fontSize: 20, color: "black" }}
                    />{" "} */}
                    support@bitshubsolutions.com
                  </a>
                </p>
              </div>
              <div className="flex space-x-6 pt-4">
                <a href="/" className="text-grey-400 hover:text-gray-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="text-grey-400 hover:text-gray-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="text-grey-400 hover:text-gray-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/" className="text-grey-400 hover:text-gray-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-2 flex flex-col lg:hidden px-[1rem] py-[2rem]">
      <a href="/dashboard" className="text-base text-orange-500  hover:text-orange-800 block">
        Become a vendor
      </a>
      <a href="/track-order" className="text-base text-gray-500  hover:text-gray-800 block">
        Track my order
      </a>
    </div>
    <div className="bg-gray-800 pt-4 pb-16 md:pb-4 md:mb-0">
      <div className="container flex items-center justify-between">
        <p className="text-white">© Bitshub - All Rights Reserved</p>
      </div>
    </div>




    <div className="fixed bottom-0 left-0 right-0 block md:hidden bg-white">
      {/* <BottomBar /> */}
    </div>
  </div>
  )
}
