import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage"; 
import { loginUser } from "../context"; 

// jest.mock("../../services/authService", () => ({
//   loginUser: jest.fn(),
// }));

describe("Login Page", () => {
  test("renders login form", () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("logs in successfully with correct credentials", async () => {
    loginUser.mockResolvedValue({ username: "emilys", password: "emilypass" });

    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "emilys" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "emilypass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(loginUser).toHaveBeenCalledWith("emilys", "emilypass");
    expect(await screen.findByText(/login successful/i)).toBeInTheDocument();
  });

  test("shows error on incorrect credentials", async () => {
    loginUser.mockRejectedValue(new Error("Invalid credentials"));

    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "wronguser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
