import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router";

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const walletBalance = 2400;

  const handleSelectProduct = (product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { ...product, quantity: 1, deduction: 0 },
      ]);
    }
  };

  const handleDecreaseQuantity = (product) => {
    setSelectedProducts(
      selectedProducts
        .map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const handleDeductionChange = (product, value) => {
    setSelectedProducts(
      selectedProducts.map((p) =>
        p.id === product.id ? { ...p, deduction: parseFloat(value) || 0 } : p
      )
    );
  };

  const totalDeduction = selectedProducts.reduce(
    (sum, p) => sum + p.deduction,
    0
  );

  const goToPayment = () => {
    navigate("/payment", { state: { selectedProducts, totalDeduction } });
  };

  return (
    <div className="w-4/5 mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-300 px-4 py-2 rounded-lg font-semibold"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">Product Details</h1>
      </div>

      {/* Wallet Balance */}
      <p className="mt-2 font-semibold text-lg">
        Inua mkulima wallet balance:{" "}
        <span className="font-bold text-black text-xl">
          Kes {walletBalance.toFixed(2)}
        </span>
      </p>

      <div className="mt-6 flex gap-6 overflow-auto">
        {/* Product List */}
        <div className="border rounded-lg p-4 w-1/2 shadow-md">
          <h2 className="font-bold text-lg">Products</h2>
          <div className="mt-3 space-y-2">
            {products.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span className="font-medium w-32">{product.title}</span>
                <span className="text-gray-700 font-semibold">
                  {product.price} Kes
                </span>
                {!selectedProducts.some((p) => p.id === product.id) && (
                  <button
                    onClick={() => handleSelectProduct(product)}
                    className="text-gray-700 hover:text-black p-2 rounded-full border border-gray-400 hover:border-black"
                  >
                    <Plus />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Products */}
        <div className="w-1/2">
          <div className="border rounded-lg h-96 p-4 w-full bg-yellow-50 shadow-md">
            <h2 className="font-bold text-lg">Selected Products</h2>
            {selectedProducts.length === 0 ? (
              <p className="text-gray-500 mt-3 text-center">
                Please select products from the products panel first
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {selectedProducts.map((product, index) => (
                  <li
                    key={index}
                    className="border-b py-2 flex justify-between items-center"
                  >
                    <span className="w-24">{product.title}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecreaseQuantity(product)}
                        className="text-gray-700 hover:text-black p-2 rounded-full border border-gray-400 hover:border-black"
                      >
                        <Minus />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() => handleSelectProduct(product)}
                        className="text-gray-700 hover:text-black p-2 rounded-full border border-gray-400 hover:border-black"
                      >
                        <Plus />
                      </button>
                    </div>
                    <input
                      type="number"
                      className="border rounded px-2 py-1 w-20"
                      value={product.deduction}
                      onChange={(e) =>
                        handleDeductionChange(product, e.target.value)
                      }
                    />
                    <span className="text-gray-700">
                      {product.price * product.quantity} Kes
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className={`mt-4 px-6 py-2 w-1/2 rounded-md font-bold ${
              totalDeduction > 0
                ? "bg-gray-800 text-white hover:bg-black"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            onClick={goToPayment}
            disabled={totalDeduction === 0}
          >
            Deduct {totalDeduction.toFixed(2)} KES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
