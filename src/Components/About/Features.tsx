import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    borderRadius: "0.5rem",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,
    boxShadow: theme.shadows.md,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  themeIcon: {
    backgroundColor: theme.colors.brown[9],
  },
}));

const features = [
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
  {
    icon: IconFlame,
    title: "Trendy i nowatorskie podejście",
    description:
      "W naszym salonie jesteśmy na bieżąco z najnowszymi trendami i nowinkami w świecie fryzjerstwa. Śmiało eksperymentujemy z nowymi technikami i produktami, aby dostarczyć Ci nowatorskie rozwiązania i stylowe fryzury, które podkreślą Twoją wyjątkowość.",
  },
];

export default function Features() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md" className={classes.themeIcon}>
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Nasz zespół doświadczonych fryzjerów
          </Title>
          <Text c="dimmed">
            W naszym zespole mamy doświadczonych specjalistów, którzy posiadają
            bogate doświadczenie w świecie fryzjerstwa. Każdy z naszych
            fryzjerów jest pasjonatem swojej pracy i stale podnosi swoje
            umiejętności, aby zapewnić naszym klientom najwyższą jakość usług.
            Przedstawiamy naszych ekspertów, którzy chętnie doradzą i pomogą Ci
            wybrać idealną fryzurę, dostosowaną do Twojego stylu i preferencji.
            Dołącz do nas i poznaj nasz utalentowany zespół fryzjerów, gotowych
            uczynić Twoje włosy piękniejszymi niż kiedykolwiek wcześniej.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
