import PricingList from "./PricingList";
import { useMantineTheme } from "@mantine/core";

const Pricing = () => {
  const theme = useMantineTheme();
  return (
    <div
      id="Pricing"
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      className="w-full bg-all-white flex justify-center items-center py-16"
    >
      <PricingList
        title="Cennik"
        description="Zobacz ceny popularnych usług!"
      />
    </div>
  );
};

export default Pricing;
