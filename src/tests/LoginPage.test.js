import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UsernamePage, PasswordPage } from "../pages/LoginPage";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../context";

// Mock useAuth
jest.mock("../context", () => ({
  useAuth: jest.fn(),
}));

describe("UsernamePage", () => {
  test("renders username input field", () => {
    render(
      <MemoryRouter>
        <UsernamePage />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Enter your username")
    ).toBeInTheDocument();
  });

  test("shows error if username is empty and continue button is clicked", () => {
    render(
      <MemoryRouter>
        <ToastContainer />
        <UsernamePage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Continue"));
    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  test("navigates to password page with username in URL", () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <UsernamePage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
      target: { value: "testuser" },
    });
    fireEvent.click(screen.getByText("Continue"));

    expect(mockNavigate).toHaveBeenCalledWith(
      "/login/password?username=testuser"
    );
  });
});

describe("PasswordPage", () => {
  test("renders password input field", () => {
    render(
      <MemoryRouter initialEntries={["/login/password?username=testuser"]}>
        <Routes>
          <Route path="/login/password" element={<PasswordPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
  });

  test("shows error if password is empty and submit button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/login/password?username=testuser"]}>
        <Routes>
          <Route path="/login/password" element={<PasswordPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Sign in"));
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("calls authenticateUser and navigates to dashboard on successful login", async () => {
    const mockNavigate = jest.fn();
    const mockAuth = { authenticateUser: jest.fn(() => Promise.resolve()) };
    jest
      .spyOn(require("react-router"), "useNavigate")
      .mockReturnValue(mockNavigate);
    useAuth.mockReturnValue(mockAuth);

    render(
      <MemoryRouter initialEntries={["/login/password?username=testuser"]}>
        <Routes>
          <Route path="/login/password" element={<PasswordPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Sign in"));

    expect(mockAuth.authenticateUser).toHaveBeenCalledWith(
      "testuser",
      "password123"
    );
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
