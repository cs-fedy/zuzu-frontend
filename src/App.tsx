import { Routes, HashRouter, Route } from "react-router-dom";
import AppProvider, { useApp } from "./contexts/AppContext";
import { Auth, Home, ResetPassword, SignIn, SignUp } from "./pages";
import { LoggedUserRoute, NotLoggedUserRoute, screens } from "./components";

function App() {
  const app = useApp();
  return (
    <>
      {app.isLoading && <screens.LoadingScreen />}
      <Routes>
        <Route element={<LoggedUserRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<NotLoggedUserRoute />}>
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
