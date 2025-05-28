import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="flex item-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center pt-12 pb-6">
        <motion.div 
          initial={{opacity : 0, width: 0}}
          animate={{opacity : 1, width: 200}}
          exit={{opacity : 0, width: 0}}
          transition={{delay: 0.4}}
        className="flex items-center justify-around w-52">
          {/* <img src={Leaf1} className="w-6 h-auto object-contain" alt="" /> */}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt">
              SKILLS
            </p>
          {/* <img src={Leaf2} className="w-6 h-auto object-contain" alt="" /> */}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

      
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">My Skills & Work Experience</p>
          <p className="text-texlight text-base tracking-wide text-justify">With over 6 years of industry experience, I bring a strong foundation in full-stack web development with a focus on building scalable, secure, and user-friendly applications. My frontend expertise lies in React.js, Angular, Next.js, TypeScript, and Tailwind CSS, enabling me to craft intuitive and responsive interfaces that deliver excellent user experiences.</p> 
          <p className="text-texlight text-base tracking-wide text-justify">On the backend, I specialize in Node.js (Express & NestJS), where I’ve built RESTful APIs and microservices that integrate seamlessly with databases like MySQL and MongoDB. I have hands-on experience with authentication, file processing, and cloud services, especially AWS (S3, ECS, Lambda) for building robust, production-ready systems.</p> 
          <p className="text-texlight text-base tracking-wide text-justify">I’m passionate about clean code, scalable architecture, and using TypeScript to improve code reliability and maintainability. I thrive in collaborative, cross-functional teams and enjoy working in environments that promote learning, innovation, and creative problem-solving.</p> 
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center px-8"> 
            <SkillCard  skill={"Javascript"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
            <SkillCard  skill={"ReactJs"} percentage={"90%"} color={"#FFB900"} move={false}/>
            <SkillCard  skill={"NodeJs"} percentage={"95%"} color={"#00FFF3"} move={true}/>
            <SkillCard  skill={"HTML 5"} percentage={"90%"} color={"#FFE400"} move={false}/>
            <SkillCard  skill={"CSS"} percentage={"90%"} color={"#008FFF"} move={true}/>
            <SkillCard  skill={"Tailwind"} percentage={"70%"} color={"#14DB00"} move={false}/>
        </div>

      </div>
    </section>

  )
};

export default Skills;
