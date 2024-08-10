import Ad from "@/components/molecules/ad";
import Banner from "@/components/molecules/banner";
import Categories from "@/components/molecules/categories";
import Features from "@/components/molecules/features";
import NewArrivals from "@/components/molecules/newArrivals";
import Products from "@/components/molecules/products";
import Accessories from "@/components/molecules/products/accessories";
import Electronics from "@/components/molecules/products/electronics";
import Promotion from "@/components/molecules/promotion";
import React from "react";

export default function Home() {
  // products, accessories, new arrivals, electronics could be one card that just needs a different prop passed to it
  return (
    <div className="lg:px-[16vw]">
      <Banner />
      <div className="container py-16">
        <Features />
      </div>

      <div className="container pb-16">
        <p className="text-xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </p>
        <Categories />
      </div>
      <div className="container pb-16">
        <p className="text-xl font-medium text-gray-800 uppercase mb-6">
          Recommended for You
        </p>
        <Products />
      </div>
      <Ad />
      <div className="container pb-16">
        <p className="text-xl font-medium text-gray-800 uppercase mb-6">
          Top New Arrival
        </p>
        <NewArrivals />
      </div>

      <Ad />
      <div className="container pb-16">
        <p className="text-xl font-medium text-gray-800 uppercase mb-6">
          Accessories
        </p>
        <Accessories />
      </div>

      <div className="container pb-16">
        <p className="text-xl font-medium text-gray-800 uppercase mb-6">
          Product Electronics
        </p>
        <Electronics />
      </div>

      <div>
        <Promotion />
      </div>
    </div>
  );
}
