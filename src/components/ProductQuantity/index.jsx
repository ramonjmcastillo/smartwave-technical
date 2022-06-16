import React, { useState } from "react";

const ProductQuantity = ({ data }) => {
  const [productQuantity, setProductQuantity] = useState(0);

  const changeFocusedQuantity = (num) => {
    if (productQuantity === 0 && num === -1) {
      return;
    }

    setProductQuantity((prev) => prev + num);
  };

  return (
    <div className="product-quantity-container">
      <div style={{ display: "flex" }}>
        <div className="product-quantity-image-container">
          <img
            alt="Product Thumbnail"
            className="product-quantity-image"
            src={data?.imageUrl}
          />
        </div>
        <div className="product-quantity-body">
          <div className="product-quantity-heading">
            <p className="product-quantity-heading-title"> Pull And Bear </p>
            <p className="product-quantity-heading-subtitle"> {data?.name} </p>
          </div>
          <div className="product-quantity-heading">
            <p className="product-quantity-heading-subtitle"> {data?.name} </p>
          </div>
          <div className="product-quantity-wrapper">
            <button
              onClick={() => changeFocusedQuantity(-1)}
              className="plusminus"
            >
              -
            </button>
            <input
              className="num"
              type="number"
              value={productQuantity}
              onChange={(e) => setProductQuantity(parseInt(e.target.value))}
              onKeyDown={(e) =>
                ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
              }
            />
            <button
              onClick={() => changeFocusedQuantity(1)}
              className="plusminus"
            >
              +
            </button>
          </div>
          <div className="product-size-price">
            <p className="product-size-price-sale">{data?.originalPrice}</p>
            <p className="product-size-price-original">{data?.salePrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
