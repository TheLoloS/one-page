import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useMantineTheme } from "@mantine/core";

export default function ParticlesBg() {
  const theme = useMantineTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="z-0 absolute"
      options={{
        name: "Twinkle",
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          color: {
            value:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.brown[6],
          },
          shape: {
            type: "circle",
          },

          size: {
            value: {
              min: 0.1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 1.5,
          },
        },

        background: {
          color: "transparent",
        },
      }}
    />
  );
}
