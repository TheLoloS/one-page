import "./App.css";
import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Tools from "./Components/Tools/Tools";
import Pricing from "./Components/Pricing/Pricing";
import Fotter from "./Components/Fotter/Fotter";
import Reviews from "./Components/Reviews/Reviews";
import { useRef } from "react";

function App() {
  const AboutRef = useRef<HTMLDivElement>(null);
  // const MainRef = useRef<() => JSX.Element>(null);
  // const ToolsRef = useRef<HTMLDivElement | null>(null);
  // const PricingRef = useRef<HTMLDivElement | null>(null);
  // const ReviewsRef = useRef<HTMLDivElement | null>(null);
  // const FotterRef = useRef<HTMLDivElement | null>(null);
  // const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
  //   offset: 0,
  // });

  const Links = [
    { link: "#Main", label: "Main" },
    { link: "#About", label: "About" },
    { link: "#Tools", label: "Tools" },
    { link: "#Pricing", label: "Pricing" },
    { link: "#Reviews", label: "Rewiews" },
  ];
  return (
    <>
      <Navbar links={Links} />
      <Main />
      <About ref={AboutRef} />
      <Tools />
      <Reviews />
      <Pricing />
      <Fotter />
    </>
  );
}

export default App;
