import { useMantineTheme } from "@mantine/core";
import Features from "./Features";

const About = () => {
  const theme = useMantineTheme();
  return (
    <div
      id="About"
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      className="w-full overflow-hidden z-10 min-h-[40vh] bg-all-white flex justify-center items-center py-16 "
    >
      <div className="max-w-[70rem] my-10">
        <Features />
      </div>
    </div>
  );
};

export default About;
