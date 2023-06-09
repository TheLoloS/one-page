import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { IconScissorsOff } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 100000,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    overflow: "hidden",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.brown[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.brown[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function Navbar({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  useEffect(() => {
    window.onscroll = () => scrollListener();

    function scrollListener() {
      const mainDivs = [...document.querySelectorAll("#root > div")];
      for (var i = 1; i < mainDivs.length; i++) {
        const a = mainDivs[i].getBoundingClientRect().top;
        if (a <= -mainDivs[i].getBoundingClientRect().height / 2 && a < 0) {
          continue;
        } else {
          // if(mainDivs[i].id == );

          setActive("#" + mainDivs[i].id);
          return;
        }
      }
    }
  }, []);

  const items = links.map((link, i) => (
    <motion.a
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 + i * 0.2 }}
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        console.log(link.link);
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </motion.a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        {/* <IconScissorsOff size={28} /> */}
        <p className="pl-4" onClick={() => window.scrollTo(0, 0)}>
          Kuki
        </p>
        <ThemeToggle />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

// import { motion } from "framer-motion";
// import MenuIcon from "@mui/icons-material/Menu";
// import ContentCutIcon from "@mui/icons-material/ContentCut";

// const Navbar = () => {
//   return (
//     <motion.div className="fixed top-0 h-10 w-screen bg-stone-900 z-50 inline-flex justify-between bg-opacity-70">
//       {/* <img alt="icon" src="#" /> */}
//       <button className="text-neutral-100 ml-4">
//         <ContentCutIcon className="p-1" />
//       </button>
//       <button className="text-neutral-100 ml-auto mr-4">
//         <MenuIcon className="p-1" />
//       </button>
//     </motion.div>
//   );
// };

// export default Navbar;
