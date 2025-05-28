import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section id="about" className="flex item-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center pt-12 pb-6">
        <motion.div 
          intial={{opacity : 0, width: 0}}
          animate={{opacity : 1, width: 200}}
          intexitial={{opacity : 0, width: 0}}
          transition={{delay: 0.4}}
        className="flex items-center justify-around w-52">
          {/* <img src={Leaf1} className="w-6 h-auto object-contain" alt="" /> */}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt">
              ABOUT
            </p>
          {/* <img src={Leaf2} className="w-6 h-auto object-contain" alt="" /> */}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

        <div className="w-full flex items-center justify-center px-8"> 
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative ">
            <img src={about} className="w-full rounded-md h-auto object-contain" alt="" />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-r from-primary to-secondary rounded-md blur -z-10"></div>
          </div>
        </div>

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">I'm Hari Mounika, a passionate Full Stack Developer with over 6 years of experience building scalable and high-performance web applications. My expertise spans JavaScript, TypeScript, Node.js, and React, with a strong focus on crafting intuitive user interfaces and robust backend services. </p> 
          <p className="text-texlight text-base tracking-wide text-justify">Recently, I have been exploring the power of Next.js to enhance eCommerce platforms, integrating features like security authentication, payments, and AWS services such as S3 and ECS. </p> 
          <p className="text-texlight text-base tracking-wide text-justify">My passion for building beautiful web applications has fueled my drive to learn, adapt, and master new technologies, crafting each project as a work of art that delivers seamless experiences and lasting impact for users. </p> 
        </div>

      </div>
    </section>
  )
};

export default About;
