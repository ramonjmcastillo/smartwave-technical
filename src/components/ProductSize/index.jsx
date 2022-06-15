import React, { useState } from "react";

const ProductSize = ({ data }) => {
  const [activeSize, setActiveSize] = useState("");

  const changeFocusedSize = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="product-size-container">
      <div className="product-size-heading">
        <img
          alt="Product Thumbnail"
          className="product-size-image"
          src={data?.imageUrl}
        />
        <p className="product-size-name">Pull And Bear</p>
      </div>
      <div className="product-size-body">
        <p className="product-size-title">{data?.name} </p>
        <div className="product-size-price">
          <p className="product-size-price-sale">{data?.originalPrice}</p>
          <p className="product-size-price-original">{data?.salePrice}</p>
        </div>
        <div className="product-size-box-sizes">
          {data?.sizes?.map((size) => {
            return (
              <button
                key={size.label}
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
