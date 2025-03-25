import { createContext, useContext, useState, useEffect } from "react";
import { set } from "react-hook-form";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    

     const authenticateUser = async (username, password) => {
        setLoading(true);
        try {
            const response = await loginUser(username, password);
            console.log(response, "response");
            setUser(response.username);
            setToken(response.token);
            localStorage.setItem("token", response.token);
            setIsAuthenticated(true);
        } catch (err) {
            console.error(err);
            throw new Error("Invalid login credentials");
        }finally{
            setLoading(false);
        }
    }

    const logOutUser = async () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }
    
    return (
      <AuthContext.Provider
        value={{ isAuthenticated, authenticateUser, user, token, logOutUser }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};