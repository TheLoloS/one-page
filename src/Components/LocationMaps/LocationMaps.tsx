import { Title, Text, useMantineTheme, createStyles, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",
    position: "relative",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginBottom: "3rem",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
const LocationMaps = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div
      id="Map"
      style={{
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.brown[0],
      }}
      className="w-full bg-all-white flex justify-center flex-col items-center pt-16 pb-24 border-t-2 border-all-white z-20"
    >
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Lokalizacja
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Znajdziesz nas tutaj:
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10250.055595753856!2d18.3945949!3d50.0392038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47115acd89426a15%3A0xebd7d24fc0462ad7!2s%22KUKI%22%20Salon%20Fryzjerski%20Damsko-M%C4%99ski!5e0!3m2!1spl!2spl!4v1683916532294!5m2!1spl!2spl"
        width="600"
        height="450"
        loading="lazy"
        className="relative"
      ></iframe>
    </div>
  );
};

export default LocationMaps;
