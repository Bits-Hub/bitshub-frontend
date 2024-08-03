"use client";

import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

//You have to pass in two parameter to this function
// 1. slug
// 2. the particular item you need from the object and it can also be an array
const useFetchProductDetails = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [result, setResult] = useState();
  let item = {};
  const [loader, setLoader] = useState(true);

  const fetchProductDetails = async (slug, title) => {
    try {
      setLoader(true); // Set loading to true before making the API request

      const { data } = await Axios.get(`${BASE_URL}/product?slug=${slug}`);
      const productEntries = Object.entries(data.data);

      for (let i = 0; i < title.length; i++) {
        productEntries.reduce((acc, [key, value]) => {
          if (key === title[i]) {
            if (typeof value === "object") {
              acc[key] = [...value];
            } else {
              acc[key] = value;
            }
          }
          return acc;
        }, item);
      }

      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setResult(item);
  };

  return { fetchProductDetails, result, loader };
};

export default useFetchProductDetails;
