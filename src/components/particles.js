import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./Particles-config/particles-config";
const Particles_Background = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig}
        />
      </div>
    </>
  );
};

export default Particles_Background;
