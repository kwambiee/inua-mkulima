import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, reference, date, customer, phone, products } = location.state || {};


  console.log(products, "selectedproducts");
  const handleReceipt = () => () => {
    navigate("/receipt", {
      state: {
        amount,
        reference,
        date,
        customer,
        phone,
        products,
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
        <h2 className="text-xl font-bold">Payment Successful</h2>

        <p className="mt-2 text-gray-700">
          Ref Number: <strong>{reference}</strong> <br />
          Date: <strong>{date}</strong>
        </p>

        <div className="flex justify-center my-4">
          <span className="text-3xl">✅</span>
        </div>

        <p className="text-xl font-bold">{amount.toLocaleString()} KES</p>
        <p className="text-gray-600">
          Agrovet product purchase for <br />
          <strong>
            {customer} - {phone}
          </strong>
        </p>

        <div className="flex justify-between mt-6">
          <button
            className="border px-4 py-2 rounded-md"
            onClick={handleReceipt()}
          >
            Download Receipt
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
