import { useMantineTheme } from "@mantine/core";
import ReviewsGrid from "./ReviewsGrid";

const Reviews = () => {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      id="Reviews"
      className=" w-full bg-stone-50 py-16 border-y-2 border-all-white z-20"
    >
      <ReviewsGrid />
    </div>
  );
};

export default Reviews;
