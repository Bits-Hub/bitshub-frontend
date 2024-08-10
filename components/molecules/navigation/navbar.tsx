import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const categories = [
    {
      name: "Macbook",
      href: "/macbook",
      img: "/images/gaming.png",
    },
    {
      name: "laptop",
      href: "/laptop",
      img: "/images/office.png",
    },
    {
      name: "Desktop",
      href: "/desktop",
      img: "/images/personal.png",
    },
    {
      name: "Monitor",
      href: "/monitor",
      img: "/images/workstation.png",
    },
    {
      name: "Gaming",
      href: "/gaming",
      img: "/images/warning.png",
    },
    {
      name: "accessories",
      href: "/accessories",
      img: "/images/components.png",
    },
  ];

  const links = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <nav className="bg-gray-800 hidden md:block md:px-[16vw]">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group min-w-56">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All categories</span>
          <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
            {categories.map((category, index) => {
              return (
                <Link
                  href={`/category${category.href}`}
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  key={index}
                >
                  <Image
                    width={20}
                    height={20}
                    src={category.img}
                    alt="category"
                    className="w-5 h-5 object-contain text-color-red"
                  />
                  <span className="ml-6 text-gray-600 text-sm">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-between flex-grow pl-12">
          <Link
            className="text-gray-200 hover:text-white transition"
            href="/faq"
          >
            FAQ
          </Link>
          <div className="flex items-center space-x-6 capitalize">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  className="text-gray-200 hover:text-white transition"
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
