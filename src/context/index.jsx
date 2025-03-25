import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (token && user) {
            setUser(user);
            setToken(token);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);
    

     const authenticateUser = async (user, token) => {
        setLoading(true);
        try {
            setUser(user);
            setToken(token);
            localStorage.setItem("user", user);
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            toast.success("Login successful");
        } catch (err) {
            console.error(err);
            toast.error("Invalid login credentials");
            throw new Error("Invalid login credentials");
        }finally{
            setLoading(false);
        }
    }

    const logOutUser = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    }
    
    return (
      <AuthContext.Provider
        value={{ isAuthenticated, authenticateUser, user, logOutUser }}
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