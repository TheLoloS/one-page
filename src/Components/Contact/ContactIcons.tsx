import {
  createStyles,
  ThemeIcon,
  Text,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";

type ContactIconVariant = "white" | "gradient";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
    backgroundColor:
      theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
  },

  description: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.brown[9],
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "Kontakt@thls.pl", icon: IconAt },
  { title: "Telefon", description: "+48 576 399 606", icon: IconPhone },
  { title: "Adres", description: "Pszów pszowstka 554", icon: IconMapPin },
  { title: "Godziny Pracy", description: "7:00 – 17:00", icon: IconSun },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 755, cols: 1 }]}
      className="relative"
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${
            theme.colors[theme.primaryColor][6]
          } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}
