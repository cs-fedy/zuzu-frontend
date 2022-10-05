import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

export default function LoggedUserRoute() {
  const app = useApp();

  return app.isUserLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
}
