import { useMantineTheme } from "@mantine/core";
import ToolsList from "./ToolsList";

const Tools = () => {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      id="Tools"
      className=" w-full bg-stone-50 py-16 border-t-2 border-all-white z-20"
    >
      <ToolsList />
    </div>
  );
};

export default Tools;
