import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(90);
  const [selectedItems, setSelectedItems] = useState([]);
  const location = useLocation();
  const { selectedProducts, totalDeduction } = location.state || {
    selectedProducts: [], totalDeduction: 0
  };


 const handleQuantityChange = (index, newQuantity) => {
   if (newQuantity < 1) return; // Prevent zero or negative quantity

   setSelectedItems((prevItems) =>
     prevItems.map((item, i) =>
       i === index
         ? {
             ...item,
             quantity: newQuantity,
             deduction: (newQuantity * item.deduction) / item.quantity, // Scale deduction
           }
         : item
     )
   );
 };

  const Deductiontotal = selectedItems.reduce(
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
            <th className="p-2 text-left">Product Name</th>
            <th className="p-2 text-center">Quantity</th>
            <th className="p-2 text-center">Price</th>
            <th className="p-2 text-center">Deduction</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.title}</td>
              <td className="p-2 text-center">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-12 border p-1 text-center"
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value))
                  }
                />
              </td>
              <td className="p-2 text-center">{item.price} kes</td>
              <td className="p-2 text-center">
                {item.price * item.price} kes
              </td>
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
        Pay {Deductiontotal} Kes
      </button>
    </div>
  );
};

export default PaymentPage;
