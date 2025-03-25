import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductList from "./components/ProductList";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProductData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, []);

 if (loading) return <div className="text-center mt-10">Loading...</div>;
 if (error)
   return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

 return (
   <div className="container mx-auto p-4">
     <ProductList products={products} />
   </div>
 );
};

export default ProductPage;
