import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconCircleDotted,
  IconFileCode,
  IconFlame,
} from "@tabler/icons-react";

const mockdata = [
  {
    icon: IconReceiptOff,
    title: "Nasza pasja do piękna",
    description:
      "Jesteśmy zespołem pasjonatów fryzjerstwa, który oddaje się sztuce tworzenia pięknych i stylowych fryzur. Nasza główna motywacja to podkreślanie Twojej naturalnej urody i sprawienie, że poczujesz się pewnie i pięknie.",
  },
  {
    icon: IconFileCode,
    title: "Profesjonalizm i doświadczenie",
    description:
      "W naszym salonie możesz być pewien, że jesteś w dobrych rękach. Nasza ekipa składa się z doświadczonych i wykwalifikowanych fryzjerów, którzy stale doskonalą swoje umiejętności. Dzięki naszemu profesjonalizmowi i wiedzy możemy zapewnić Ci usługi najwyższej jakości.",
  },
  {
    icon: IconCircleDotted,
    title: " Indywidualne podejście do każdego klienta",
    description:
      " Uważamy, że każdy klient jest wyjątkowy i ma swoje indywidualne potrzeby. Dlatego dokładnie słuchamy Twoich oczekiwań i dostosowujemy nasze usługi do Twoich preferencji. Chcemy, abyś opuścił nasz salon z uśmiechem na twarzy i poczuciem spełnienia.",
  },
  // {
  //   icon: IconFlame,
  //   title: "Trendy i nowatorskie podejście",
  //   description:
  //     "W naszym salonie jesteśmy na bieżąco z najnowszymi trendami i nowinkami w świecie fryzjerstwa. Śmiało eksperymentujemy z nowymi technikami i produktami, aby dostarczyć Ci nowatorskie rozwiązania i stylowe fryzury, które podkreślą Twoją wyjątkowość.",
  // },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.md,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function ToolsList() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        size={rem(50)}
        stroke={2}
        color={
          theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9]
        }
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Nasz zespół doświadczonych fryzjerów
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        W naszym zespole mamy doświadczonych specjalistów, którzy posiadają
        bogate doświadczenie w świecie fryzjerstwa. Każdy z naszych fryzjerów
        jest pasjonatem swojej pracy i stale podnosi swoje umiejętności, aby
        zapewnić naszym klientom najwyższą jakość usług. Przedstawiamy naszych
        ekspertów, którzy chętnie doradzą i pomogą Ci wybrać idealną fryzurę,
        dostosowaną do Twojego stylu i preferencji. Dołącz do nas i poznaj nasz
        utalentowany zespół fryzjerów, gotowych uczynić Twoje włosy
        piękniejszymi niż kiedykolwiek wcześniej.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
