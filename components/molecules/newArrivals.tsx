"use client";
import React from "react";
import { useGetCategoryQuery } from "@/redux/services/product/category/categoryApi"; // Adjust the path to your actual API
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function NewArrivals() {
    const { data: response, error, isLoading } = useGetCategoryQuery(null); // No argument needed for fetching all categories

    // Handle loading state
    if (isLoading) {
      return <p>Loading categories...</p>;
    }
  
    // Handle error state
    if (error) {
      let errorMessage: string = "Unknown error occurred";
  
      if ("status" in error) {
        errorMessage = `Error: ${error.status}`;
      } else if ("message" in error) {
        errorMessage = error.message ?? "Error occurred with no message";
      }
  
      return <p>{errorMessage}</p>;
    }
  
    // Log the categories response to check its structure
    console.log("Categories response:", response);
  
    // Access the categories array from the response
    const categories = response?.data || []; // Adjust based on the actual structure returned from the API
  
    // If categories is not an array or is empty, return an error message
    if (!Array.isArray(categories) || categories.length === 0) {
      return <p>No categories available!</p>;
    }
  
    // Define your base URL for images
    const baseURL = 'https://api.bitshub.africa/v1/dev'; // Replace with your actual base URL
  
    return (
      <Swiper
        navigation
        pagination
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={3} // Set the number of slides to show at once
        spaceBetween={30} // Optional: Adjust the space between slides
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
          },
          1024: {
            slidesPerView: 4, // Show 4 slides on larger screens
          },
        }}
      >
        {categories.map((category) => {
          // Construct the full image URL
          const imgUrl = `${baseURL}${category.img_url}`; // Combine base URL with the image path
  
          return (
            <SwiperSlide key={category.id}>
              <div className="category-card p-4 border rounded-lg shadow-lg">
                <img
                  src={imgUrl} // Use the constructed URL for the image
                  alt={category.category} // Use the correct field for category title
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-4">{category.category}</h3> {/* Use the correct field for title */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
}
