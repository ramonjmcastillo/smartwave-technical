import { useState } from "react";
import axios from "axios";

const useGetProductData = () => {
  const [loading, setLoading] = useState(true);

  const getProductData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.REACT_APP_PRODUCTS_URI, {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      });
      return response.data.d;
    } catch (err) {
      console.log(err);
      setLoading(false);
      return false;
    }
  };
  return {
    loading,
    getProductData,
  };
};

export default useGetProductData;
