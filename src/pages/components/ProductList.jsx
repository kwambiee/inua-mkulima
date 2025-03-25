import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

const ProductList = ({ products }) => {
    const navigate = useNavigate();
  console.log(products, "products");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const walletBalance = 2400;

  const handleSelectProduct = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };
  const totalDeduction = selectedProducts.reduce((sum, p) => sum + p.price, 0);

    const goToPayment = () => {
      navigate("/payment", { state: { selectedProducts, totalDeduction } });
    };

  
  return (
    <div className="w-4/5 p-6 mx-auto">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p className="mt-2 font-semibold">
        Inua mkulima wallet balance:{" "}
        <span className="font-bold">Kes {walletBalance.toFixed(2)}</span>
      </p>

      <div className="mt-4 flex gap-6 h-96 overflow-auto">
        {/* Product List */}
        <div className="border rounded-lg p-4 w-1/2">
          <h2 className="font-bold">Products</h2>
          <div className="mt-2">
            {products.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between border-b py-2"
              >
                <span>{product.name}</span>
                <span>{product.price} Kes</span>
                <button
                  onClick={() => handleSelectProduct(product)}
                  className="text-gray-700 hover:text-black"
                >
                  <Plus />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Products */}
        <div className="border rounded-lg p-4 w-1/2 bg-yellow-50">
          <h2 className="font-bold">Selected Products</h2>
          {selectedProducts.length === 0 ? (
            <p className="text-gray-500 mt-2">
              Please select products from the products panel first
            </p>
          ) : (
            <ul className="mt-2">
              {selectedProducts.map((product, index) => (
                <li key={index} className="border-b py-2">
                  {product.name} - {product.price} Kes
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Deduction Button */}
      <button
        className="mt-4 bg-gray-400 text-white px-6 py-2 rounded-md"
        onClick={ goToPayment}
      >
        Deduct {totalDeduction.toFixed(2)} KES
      </button>
    </div>
  );
};

export default ProductList;
