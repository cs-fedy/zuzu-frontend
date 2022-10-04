import { useApp } from "../contexts/AppContext";
import { screens } from "../components";

function Home() {
  const app = useApp();
  if (!app.isUserProfileComplete) return <screens.CompleteProfileScreen />;
  return <screens.HomeScreen />;
}

export default Home;
