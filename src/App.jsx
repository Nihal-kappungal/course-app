import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      respectReducedMotion: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
