import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from "@tabler/icons-react";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Przycinanie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
  {
    icon: IconUser,
    title: "Farbowanie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
  {
    icon: IconCookie,
    title: "Strzyzenie brody",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
  {
    icon: IconLock,
    title: "Podcinanie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
  {
    icon: IconMessage2,
    title: "Mycie włosów",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
  {
    icon: IconMessage2,
    title: "Stylizacja",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore nulla, aperiam, nihil mollitia ab architecto.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
        border: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[4]
        }`,
        boxShadow: theme.shadows.md,
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        borderRadius: theme.radius.md,
      }}
    >
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
      <div className="flex items-center justify-end">1.00$</div>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export default function PricingList({
  title,
  description,
  data = MOCKDATA,
}: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
