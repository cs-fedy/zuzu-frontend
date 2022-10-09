import { Routes, HashRouter, Route } from "react-router-dom";
import AppProvider from "./contexts/AppContext";
import { routes } from "./components";
import {
  Auth,
  Home,
  ResetPassword,
  SignIn,
  SignUp,
  CompleteProfile,
} from "./pages";

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
