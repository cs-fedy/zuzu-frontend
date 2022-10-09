import { BottomBar, screens } from "../components";

function Home() {
  return (
    <>
      <screens.Reel />
      <div className="fixed bottom-0 right-0 left-0">
        <BottomBar />
      </div>
    </>
  );
}

export default Home;
