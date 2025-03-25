import React from "react";
import { useLocation } from "react-router-dom";
import PaymentSummary from "./components/PaymentSummary";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";

const PaymentPage = () => {
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };

  console.log(selectedProducts, "selectedProducts");

  const totalDeduction = selectedProducts.reduce(
    (sum, item) => sum + item.deduction,
    0
  );

  const handlePay = () => {
    alert(`Payment of ${totalDeduction} Kes processed`);
  };

  return (
    <div className=" w-full relative">
      <Navbar />
      <SideBar />
      <div className="absolute right-0 w-[calc(100%-260px)] pt-16">
        <PaymentSummary selectedProducts={selectedProducts} handlePay={handlePay} totalDeduction={totalDeduction} />
      </div>
    </div>
  );
};

export default PaymentPage;
