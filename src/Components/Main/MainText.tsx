import {
  createStyles,
  Container,
  Title,
  Button,
  Text,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "absolute",
  },

  container: {
    height: rem(600),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 10000,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: rem(500),
      alignItems: "flex-center",
      justifyContent: "flex-center",
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,

    lineHeight: 1.1,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
      margin: "auto",
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
      textAlign: "center",
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "80%",
      fontSize: theme.fontSizes.sm,
      textAlign: "center",
      margin: "auto",
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function MainText() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Title className={classes.title}>Kuki</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Witaj w naszym salonie fryzjerskim! Jesteśmy doświadczoną ekipą
          stylistów, gotową uczynić Twoje włosy nieodpartywym elementem Twojego
          wyglądu. Oferujemy szeroki zakres usług, od klasycznych cięć i
          koloryzacji po najnowsze trendy w świecie fryzjerstwa. Nasze
          zaangażowanie, kreatywność i indywidualne podejście sprawią, że
          poczujesz się pewnie i pięknie
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Zaczynajmy!
        </Button>
      </Container>
    </div>
  );
}
