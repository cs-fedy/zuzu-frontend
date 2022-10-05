import { Routes, HashRouter, Route } from "react-router-dom";
import AppProvider, { useApp } from "./contexts/AppContext";
import { screens, routes } from "./components";
import {
  Auth,
  Home,
  ResetPassword,
  SignIn,
  SignUp,
  CompleteProfile,
} from "./pages";

function App() {
  const app = useApp();
  return (
    <>
      {app.isLoading && <screens.LoadingScreen />}
      <Routes>
        <Route element={<routes.LoggedUserRoute />}>
          <Route element={<routes.ProfileCompleted />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<routes.ProfileNotCompleted />}>
            <Route path="/completeProfile" element={<CompleteProfile />} />
          </Route>
        </Route>
        <Route element={<routes.NotLoggedUserRoute />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <AppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProvider>
  );
}

export default WrappedApp;
