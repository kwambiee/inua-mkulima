import { render, screen, fireEvent } from "@testing-library/react";
import PaymentPage from "../pages/PaymentPage";

const mockSelectedProducts = [
  {
    name: "Animal Feeds 10kg",
    quantity: 1,
    price: 1500,
    total: 1500,
    deduction: 900,
  },
  {
    name: "Mineral Salts 500g",
    quantity: 2,
    price: 400,
    total: 800,
    deduction: 500,
  },
];

describe("Payment Summary Page", () => {
  test("renders payment summary correctly", () => {
    render(<PaymentPage selectedProducts={mockSelectedProducts} />);

    expect(screen.getByText(/animal feeds 10kg/i)).toBeInTheDocument();
    expect(screen.getByText(/900 kes/i)).toBeInTheDocument();
    expect(screen.getByText(/mineral salts 500g/i)).toBeInTheDocument();
    expect(screen.getByText(/500 kes/i)).toBeInTheDocument();
  });

  test("displays correct total deduction", () => {
    render(<PaymentPage selectedProducts={mockSelectedProducts} />);
    expect(screen.getByText(/total deduction:/i)).toHaveTextContent(
      "1,400 Kes"
    );
  });

  test("processes payment when pay button is clicked", () => {
    global.alert = jest.fn(); // Mock alert

    render(<PaymentPage selectedProducts={mockSelectedProducts} />);
    fireEvent.click(screen.getByRole("button", { name: /pay/i }));

    expect(global.alert).toHaveBeenCalledWith("Payment of 1400 Kes processed");
  });
});
