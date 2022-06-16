import React, { useState, useEffect } from "react";
import ProductSize from "../../components/ProductSize";
import ProductQuantity from "../../components/ProductQuantity";
import useGetProductData from "../../hooks/useGetProductData";

const Home = () => {
  const [productData, setProductData] = useState([]);

  const { getProductData } = useGetProductData();

  useEffect(() => {
    getInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getInitialData = async () => {
    const data = await getProductData();
    setProductData(data);
  };

  return (
    <div className="home-container">
      {productData?.map((product, index) => {
        return (
          <div key={index}>
            <ProductSize data={product} />
            <div style={{ margin: "24px" }} />
            <ProductQuantity data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
