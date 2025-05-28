import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { Myself } from "../assets";
import HeroTypeWritter from "../components/HeroTypeWritter"
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";

const Home = () => {
  return (
    <section id="home" className="flex item-center justify-center flex-col gap-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">Mounika Yellapragada</span>
          </h2>
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm {" "}
            <HeroTypeWritter words={["a Full Stack Developer", "a Freelancer"]} speed={100} />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">Over the years, I have developed dynamic web applications that blend intuitive design with robust performance driven by a passion for creating seamless user experiences that stand the test of time. I love working in a creative, collaborative environments where ideas flow freely, surrounded by positive people who inspire growth and learning</p>
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials && Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
            </AnimatePresence>
          </div>
          <a
            href="#"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl 
          px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text
             group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary ">Hire Me</p>
          </a>
        </div>




        <div className="w-full h-full flex items-start justify-center lg:item-center">
          <AnimatePresence>
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
              style={{borderRadius: "280px"}}
              src={Myself}
              className="w-auto h-auto object-contain"></motion.img>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
};

export default Home;
