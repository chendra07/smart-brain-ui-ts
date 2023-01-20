import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

function ParticleBackground({
  onClick = false,
  onHover = false,
  numOfParticles = 40,
  opacity = 0.6,
  linkDistance = 200,
}) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="particles"
      id="tsparticles"
      // url="http://foo.bar/particles.json"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 55,
        interactivity: {
          events: {
            onClick: {
              enable: onClick,
              mode: "push",
            },
            onHover: {
              enable: onHover,
              mode: "repulse",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: linkDistance,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 7,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: numOfParticles,
          },
          opacity: {
            value: opacity,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false,
        zLayers: 1,
      }}
    />
  );
}

export default ParticleBackground;
