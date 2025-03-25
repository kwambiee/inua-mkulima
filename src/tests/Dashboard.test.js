import { render, screen } from "@testing-library/react";
import DashBoard from "../pages/DashBoard";

const mockProducts = [
  { id: 1, name: "Animal Feeds 10kg", price: 1500, quantity: 1 },
  { id: 2, name: "Mineral Salts 500g", price: 400, quantity: 2 },
];

describe("Product Details Page", () => {
  test("displays product details correctly", () => {
    render(<DashBoard products={mockProducts} />);

    expect(screen.getByText(/animal feeds 10kg/i)).toBeInTheDocument();
    expect(screen.getByText(/1,500 kes/i)).toBeInTheDocument();
    expect(screen.getByText(/mineral salts 500g/i)).toBeInTheDocument();
    expect(screen.getByText(/400 kes/i)).toBeInTheDocument();
  });

  test("shows total price correctly", () => {
    render(<DashBoard products={mockProducts} />);
    expect(screen.getByText(/total:/i)).toHaveTextContent("2,300 Kes");
  });
});
