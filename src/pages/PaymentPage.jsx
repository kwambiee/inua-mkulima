import React from "react";
import { useLocation } from "react-router-dom";
import PaymentSummary from "./components/PaymentSummary";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAuth } from "../context";
import { useNavigate } from "react-router";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedProducts } = location.state || { selectedProducts: [] };
  const {user } = useAuth();

  console.log(selectedProducts, "selectedProducts");

  const totalDeduction = selectedProducts.reduce(
    (sum, item) => sum + item.deduction,
    0
  );

  const handlePay = () => {
      navigate("/payment-success", {
        state: {
          amount: totalDeduction,
          reference: "Abakfah3913af",
          date: new Date().toLocaleDateString(),
          customer: user,
          phone: "12345678",
          products: selectedProducts,
        },
      });
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
