import { createStyles, Container, rem } from "@mantine/core";
import { motion } from "framer-motion";

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
    color: theme.white,
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    fontSize: theme.fontSizes.lg,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  arrow: {
    fontSize: theme.fontSizes.xl,
  },
}));

export default function MainText() {
  const { classes } = useStyles();

  return (
    <motion.div className="absolute">
      <Container className={classes.container}>
        <motion.p
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          className={classes.title}
        >
          Kuki
        </motion.p>
        <motion.p
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          className={classes.description}
        >
          Witaj w naszym salonie fryzjerskim! Jesteśmy doświadczoną ekipą
          stylistów, gotową uczynić Twoje włosy nieodpartywym elementem Twojego
          wyglądu. Oferujemy szeroki zakres usług, od klasycznych cięć i
          koloryzacji po najnowsze trendy w świecie fryzjerstwa. Nasze
          zaangażowanie, kreatywność i indywidualne podejście sprawią, że
          poczujesz się pewnie i pięknie
        </motion.p>

        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeatType: "reverse",
            repeat: Infinity,
            duration: 0.5,
          }}
          className={classes.control}
          onClick={() => {
            document.getElementById("Tools")?.scrollIntoView();
          }}
        >
          Zaczynajmy <b className={classes.arrow}>⬇</b>
        </motion.button>
      </Container>
    </motion.div>
  );
}
