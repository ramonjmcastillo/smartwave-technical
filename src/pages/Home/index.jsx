import React, { useState, useEffect } from "react";
import ProductSize from "../../components/ProductSize";
import axios from "axios";
import ProductQuantity from "../../components/ProductQuantity";

const Home = () => {
  const [productData, setProductData] = useState([]);

  const getProductData = () => {
    axios
      .get(`https://sw-coding-challenge.herokuapp.com/api/v1/products`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs`,
        },
      })
      .then((res) => {
        setProductData(res.data.d);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="home-container">
      <ProductSize data={productData[0]} />
      <div style={{ margin: "168px" }} />
      <ProductQuantity data={productData[0]} />
    </div>
  );
};

export default Home;
