import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const totalPrice = (discountedPrice * quantity).toFixed(2);
  const totalDeduction = ((product.price - discountedPrice) * quantity).toFixed(
    2
  );

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePayment = () => {
    navigate("/payment", {
      state: { totalPrice, quantity, productTitle: product.title },
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-sm text-gray-500">Brand: {product.brand}</p>
      <div className="mt-2">
        <p className="text-red-500 font-bold">
          Discounted Price: ${discountedPrice}
        </p>
        <p className="text-gray-500 line-through">
          Original: ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center mt-2">
        <button
          onClick={decreaseQuantity}
          className="px-3 py-1 border rounded-md bg-gray-200 text-lg"
        >
          −
        </button>
        <span className="mx-3 text-lg font-medium">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-3 py-1 border rounded-md bg-gray-200 text-lg"
        >
          +
        </button>
      </div>
      <p className="mt-2 font-semibold text-blue-600">Total: ${totalPrice}</p>
      <p className="mt-1 text-sm text-gray-600">
        Total Deduction: ${totalDeduction}
      </p>
      <p
        className={`mt-2 text-sm ${
          product.stock > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {product.availabilityStatus}
      </p>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default ProductCard;
