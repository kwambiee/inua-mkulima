import { createContext, useContext, useState, useEffect } from "react";
import { set } from "react-hook-form";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

     const authenticateUser = async (username, password) => {
        setLoading(true);
        try {
            const response = await loginUser(username, password);
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (err) {
            console.error(err);
            throw new Error("Invalid login credentials");
        }finally{
            setLoading(false);
        }
    }
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticateUser, user }}>
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