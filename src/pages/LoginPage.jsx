import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useAuth } from "../context";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "../assets/bg.png";

const UsernamePage = () => {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  const handleContinue = () => {
    if (!username) {
      toast.error("Username is required");
      return;
    }
    navigate(`/login/password?username=${username}`);
  };

  return (
    <div className="flex w-full h-screen mx-auto my-auto">
      <div
        className="hidden md:flex flex-1 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="w-full md:w-1/3 flex items-center justify-center p-6 bg-white shadow-lg">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Inua Mkulima - Subsidy Program
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your username to continue
          </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your username"
          />
          <button
            onClick={handleContinue}
            className="w-full bg-yellow-500 text-white py-2 mt-4 rounded hover:bg-yellow-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const { authenticateUser } = useAuth();
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password) {
      toast.error("Password is required");
      return;
    }
    setLoading(true);
    try {
      authenticateUser(username, password);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen mx-auto my-auto">
      <div
        className="hidden md:flex flex-1 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="w-full md:w-1/3 flex items-center justify-center p-6 bg-white shadow-lg">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Inua Mkulima - Subsidy Program
          </h2>
          <p className="text-gray-600 text-center mb-6">Enter your password</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { UsernamePage, PasswordPage };
