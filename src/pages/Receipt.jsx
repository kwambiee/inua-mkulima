import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context";

const Receipt = () => {
  const location = useLocation();
  const { products, amount, reference, date, customer, phone } =
    location.state || {};
  const receiptRef = useRef();
  const { user } = useAuth();

  console.log(products, "selectedProducts");

  const downloadReceipt = async () => {
    const receiptElement = receiptRef.current;
    const canvas = await html2canvas(receiptElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("Transaction_Receipt.pdf");
  };

  return (
    <div className="p-4">
      <div ref={receiptRef} className="bg-white p-6 rounded-md shadow-md font-medium">
        <h2 className="text-white w-64 py-4 px-4 bg-[#00513A] border-l-4 border-[#E8B40A] text-lg font-semibold">
          Transaction Receipt
        </h2>

        <div className="bg-[#00513A] h-[2px] rounded my-4"></div>

        <div className="flex justify-between">
          <div>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Reference Number:</strong> {reference || "ABCD1234"}
            </p>
            <p>
              <strong>Wallet:</strong> {user || "Muranga Kilimo"}
            </p>
            <p>
              <strong>Farmer Name/ID:</strong> {user || "Gidraf"} -{" "}
              {customer || "30123456"}
            </p>
            <p>
              <strong>Farmer Phone No:</strong> {phone || "0712345678"}
            </p>
          </div>
          <div>
            <p>
              <strong>Agro-dealer Name:</strong>{" "}
              {user?.dealerName || "Harrison Kungs"}
            </p>
            <p>
              <strong>Merchant ID:</strong> {user?.merchantId || "POS1323535"}
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              {user?.dealerPhone || "0712 345 678"}
            </p>
          </div>
        </div>

        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-[#00513A] text-white">
              <th className="p-2">Product</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Price</th>
              <th className="p-2">Total</th>
              <th className="p-2">Deduction</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.price} Kes</td>
                <td className="p-2">{item.quantity * item.price} Kes</td>
                <td className="p-2">{item.deduction} Kes</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-end bg-[#00513A] p-3 rounded">
          <span>
            <strong className="text-white mr-4">TOTAL DEDUCTION</strong>
          </span>
          <span>
            <strong className="bg-white px-4 py-1 ">{amount} Kes</strong>
          </span>
        </div>
      </div>

      <button
        onClick={downloadReceipt}
        className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Download Receipt
      </button>
    </div>
  );
};

export default Receipt;
