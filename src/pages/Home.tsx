import { useApp } from "../contexts/AppContext";
import { screens } from "../components";

function Home() {
  const app = useApp();
  if (app.isLoading) return <screens.LoadingScreen />;
  if (!app.isUserLoggedIn) return <screens.OnboardingScreen />;
  if (!app.isUserProfileComplete) return <screens.CompleteProfileScreen />;
  return <screens.HomeScreen />;
}

export default Home;
