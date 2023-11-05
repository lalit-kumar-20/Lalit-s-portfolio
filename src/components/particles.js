import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import ParticleConfig from './Particles-config/particles-config'
//import backgroundImage from '../Assets/Background_image_portfolio.jpg'
const Particles_Background = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <>
   
      <div>
    <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={
    ParticleConfig
  }
/>
</div>
  
</>
);

}

export default Particles_Background
