import { useAuth } from "../context";
import { Navigate } from "react-router";


export default function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated, "isAuthenticated");

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
