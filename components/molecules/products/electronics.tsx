"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '../cards/productCard';

export default function Electronics() {
    const [products, setProducts] = useState([]);  // State to hold product data
    const [loading, setLoading] = useState(true);  // Loading state

    // Fetch product data from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api.example.com/products"); // Replace with your actual API URL
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);  // Assuming the API returns an array of products
                setLoading(false);  // Set loading to false after fetching
            } catch (e) {
                console.error("Error fetching products", e);
                setLoading(false);  // Set loading to false if there's an error
            }
        };
        fetchProducts();
    }, []);  // Empty dependency array means this effect runs once when the component mounts

    const slideLeft = () => {
        let slide = document.getElementById("slide");
        // slide.scrollLeft -= 500;  // Slide left
    };

    const slideRight = () => {
        let slide = document.getElementById("slide");
        // slide.scrollLeft += 500;  // Slide right
    };

    return (
        <div>
            <div className="w-full relative">
                <h2 className='text-xl font-bold'>Electronics</h2>

                {/* If loading, show a loading message, otherwise show the products */}
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <div id="slide" className="flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                        <div className="flex gap-4">
                            {/* {products.map((item) => (
                                // <ProductCard item={item} key={item.id} />
                            ))} */}
                        </div>
                    </div>
                )}

                {/* Optional scroll buttons */}
                {/* <MdChevronLeft size={40} className="absolute cursor-pointer -left-14 bottom-32 opacity-50 hover:opacity-100" onClick={slideLeft} /> */}
                {/* <MdChevronRight size={40} className="absolute cursor-pointer -right-14 bottom-32 opacity-50 hover:opacity-100" onClick={slideRight} /> */}
            </div>
        </div>
    );
}
