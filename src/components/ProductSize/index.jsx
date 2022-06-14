import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductSize = () => {
  const [productData, setProductData] = useState([]);
  const [activeSize, setActiveSize] = useState("");

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

  const changeFocusedSize = (size) => {
    setActiveSize(size);
    console.log("test");
  };

  useEffect(() => {
    getProductData();
  }, []);

  //   console.log(productData);
  console.log(activeSize);

  return (
    <div className="product-size-container">
      <div className="product-size-heading">
        <img className="product-size-image" src={productData[0]?.imageUrl} />
        <p className="product-size-name">Pull And Bear</p>
      </div>
      <div className="product-size-body">
        <p className="product-size-title">{productData[0]?.name} </p>
        <div className="product-size-price">
          <p className="product-size-price-sale">
            {productData[0]?.originalPrice}
          </p>
          <p className="product-size-price-original">
            {productData[0]?.salePrice}
          </p>
        </div>
        <div className="product-size-box-sizes">
          {productData[0]?.sizes?.map((size) => {
            return (
              <button
                onClick={() => changeFocusedSize(size.label)}
                disabled={!size.isAvailable}
                className={`sizes ${
                  !size.isAvailable ? "size-not-available" : ""
                } ${activeSize === size.label ? "active" : ""}`}
              >
                {size.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSize;
