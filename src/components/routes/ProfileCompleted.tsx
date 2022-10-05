import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

export default function ProfileCompleted() {
  const app = useApp();

  if (app.isUserProfileComplete) return <Outlet />;
  return <Navigate to="/completeProfile" />;
}
