import { useMantineTheme } from "@mantine/core";
import Form from "./Form";

const Contact = () => {
  const theme = useMantineTheme();
  return (
    <div
      id="Contact"
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      className="w-full bg-all-white flex justify-center items-center pt-16 pb-36 border-t-2 border-all-white z-20"
    >
      <Form />
    </div>
  );
};

export default Contact;
