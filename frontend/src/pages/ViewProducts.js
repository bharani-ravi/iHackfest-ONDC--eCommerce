import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import "./ViewProducts.css";

const ViewProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/v1/product/");
      const { data } = await response.json();

      if (response.ok) {
        console.log(data);
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (!products) {
    return <Loading />;
  }
  return (
    <div className="products-wrapper">
      {!loading &&
        products.map((p) => (
          <Card name={p.name} price={p.price} image={p.image} />
        ))}
    </div>
  );
};

export default ViewProducts;
