import { useEffect } from "react";
import { BottomBar, screens } from "../components";
import { useStack } from "../contexts/StackContext";

function Home() {
  const { stack, push } = useStack();

  useEffect(() => {
    push(
      <>
        <screens.Reel />
        <div className="fixed bottom-0 right-0 left-0">
          <BottomBar />
        </div>
      </>
    );
  }, [push]);

  return <>{stack.map((element) => element)}</>;
}

export default Home;
