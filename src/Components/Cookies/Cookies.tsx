import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";

export function Cookies() {
  const [active, setActive] = useLocalStorage({
    key: "cookies",
    defaultValue: "true",
  });
  return (
    <AnimatePresence>
      {active === "true" && (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          }}
          exit={{ y: 300, opacity: 0 }}
          className="w-screen fixed bottom-0 z-50"
        >
          <Paper withBorder p="lg" radius="none" shadow="md" className=" z-50">
            <Group position="left" mb="xs">
              <Text fz="md" fw={500}>
                Ciasteczka 🍪
              </Text>
              {/* <CloseButton mr={-9} mt={-9} /> */}
            </Group>
            <Text c="dimmed" fz="xs">
              Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny
              oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.
            </Text>
            <Group position="right" mt="md">
              <Button
                variant="outline"
                size="xs"
                onClick={() => setActive("false")}
              >
                Akceptuj!
              </Button>
            </Group>
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
