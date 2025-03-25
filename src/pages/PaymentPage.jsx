import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };

  const totalDeduction = selectedProducts.reduce(
    (sum, item) => sum + item.deduction,
    0
  );

  const handlePay = () => {
    alert(`Payment of ${totalDeduction} Kes processed`);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <table className="w-full mb-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Total</th>
            <th className="p-2 text-center">Deduction</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 text-center">{item.quantity}</td>
              <td className="p-2 text-center">{item.price} kes</td>
              <td className="p-2 text-center">{item.total} kes</td>
              <td className="p-2 text-center">{item.deduction} kes</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right font-bold mb-4">
        Total Deduction: {totalDeduction} Kes
      </div>
      <button
        onClick={handlePay}
        className="bg-black text-white py-2 px-6 rounded w-full"
      >
        Pay {totalDeduction} Kes
      </button>
    </div>
  );
};

export default PaymentPage;
