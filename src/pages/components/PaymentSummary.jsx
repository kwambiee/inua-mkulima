import React from "react";
import { useNavigate } from "react-router";

const PaymentSummary = ({selectedProducts, handlePay, totalDeduction}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <div className=" mb-4">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-300 px-4 py-2 rounded-lg font-semibold"
        >
          ← Back
        </button>
      </div>

      <table className="w-full mb-4 border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Product Name</th>
            <th className="p-2 text-center">Quantity</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Total</th>
            <th className="p-2 text-center">Deduction</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.title}</td>
              <td className="p-2 text-center">{item.quantity}</td>
              <td className="p-2 text-center">{item.price} kes</td>
              <td className="p-2 text-center">
                {item.quantity * item.price} kes
              </td>
              <td className="p-2 text-center">{item.deduction} kes</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center font-bold mb-4">
        <span>Total Deduction:</span>
        <span>{totalDeduction} Kes</span>
      </div>
      <button
        onClick={handlePay}
        className="bg-black text-white py-2 px-6 rounded w-full text-center"
      >
        Pay {totalDeduction} Kes
      </button>
    </div>
  );
};

export default PaymentSummary;
