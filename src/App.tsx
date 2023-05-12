import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Tools from "./Components/Tools/Tools";
import Pricing from "./Components/Pricing/Pricing";
import Fotter from "./Components/Fotter/Fotter";
import Reviews from "./Components/Reviews/Reviews";
import { useState } from "react";
import Contact from "./Components/Contact/Contact";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Tuple, DefaultMantineColor } from "@mantine/core";
import LocationMaps from "./Components/LocationMaps/LocationMaps";
import ParticlesBg from "./Components/Background/Background";

type ExtendedCustomColors =
  | "brown"
  | "secondaryColorName"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

function App() {
  // const AboutRef = useRef<HTMLDivElement>(null);
  // const MainRef = useRef<() => JSX.Element>(null);
  // const ToolsRef = useRef<HTMLDivElement | null>(null);
  // const PricingRef = useRef<HTMLDivElement | null>(null);
  // const ReviewsRef = useRef<HTMLDivElement | null>(null);
  // const FotterRef = useRef<HTMLDivElement | null>(null);
  // const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
  //   offset: 0,
  // });

  const Links = [
    { link: "#Main", label: "Główna" },
    { link: "#Tools", label: "O nas" },
    { link: "#Reviews", label: "Opinie" },
    { link: "#Pricing", label: "Cennik" },
    { link: "#Map", label: "Lokalizacja" },
    { link: "#Contact", label: "Kontakt" },
  ];
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            brown: [
              "#efebe9",
              "#d7ccc8",
              "#bcaaa4",
              "#a1887f",
              "#8d6e63",
              "#795548",
              "#6d4c41",
              "#5d4037",
              "#4e342e",
              "#3e2723",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ParticlesBg />
        <Navbar links={Links} />
        <Main />
        {/* <About /> */}
        <Tools />
        <Reviews />
        <Pricing />
        <LocationMaps />
        <Contact />
        <Fotter />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
