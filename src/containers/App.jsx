import React from "react";
import Header from './Header';
import Home from './Home';
import ServiceCount from './ServiceCount';
import About from './About';
import Skills from "./Skills";
import Projects from "./Projects";  
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] px-4 lg:px-12 pr-4 lg:pr-32 lg:pt-16">

    <ParticlesContainer />

    <Header />

    <Home />

    {/* <ServiceCount /> */}

    <About />

    <Skills />

    <Projects />

    <Contact />

    <div className="w-full flex flex-col items-center justify-start mb-15">
      <p className="text-3xl tracking-wide text-texlight">Mounika Yellapragada</p>
      
      <div className="w-full grid grid-cols-1  mt-[12px] gap-4 mb-[40px]">
        {/* <p className="text-texlight text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id nostrum sunt, ratione ex expedita incidunt, alias nobis praesentium debitis asperiores error et nulla quae beatae repellendus quas porro animi.
        </p>
        <p className="text-texlight text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id nostrum sunt, ratione ex expedita incidunt, alias nobis praesentium debitis asperiores error et nulla quae beatae repellendus quas porro animi.
        </p> */}
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <p className="text-texlight text-center">
            mounikayellapragada19@gmail.com
          </p>
          <p className="text-texlight text-center">+1(416)-471-6828</p>
 
          {/* <a href="#">
            <p className="text-primary text-center">Hire Me</p>
          </a> */}
        </div>
      </div>
    </div>

    </div>
  );
};

export default App;
