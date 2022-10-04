import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

export function LoggedUserRoute() {
  const app = useApp();

  return app.isUserLoggedIn ? <Outlet /> : <Navigate to="/auth" replace />;
}

export function NotLoggedUserRoute() {
  const app = useApp();
  return !app.isUserLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
