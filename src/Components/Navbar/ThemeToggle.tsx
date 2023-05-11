import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="lg" className="ml-auto p-4">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="md"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.indigo[0]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.brown[0]
              : theme.colors.brown[9],
        })}
      >
        {colorScheme === "dark" ? (
          <IconSun size="1.2rem" />
        ) : (
          <IconMoonStars size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
