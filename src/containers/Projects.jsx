import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects" className="flex item-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center pt-12 pb-6">
        <motion.div 
          intial={{opacity : 0, width: 0}}
          animate={{opacity : 1, width: 200}}
          intexitial={{opacity : 0, width: 0}}
          transition={{delay: 0.4}}
        className="flex items-center justify-around w-52">
          {/* <img src={Leaf1} className="w-6 h-auto object-contain" alt="" /> */}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt">
              PROJECTS
            </p>
          {/* <img src={Leaf2} className="w-6 h-auto object-contain" alt="" /> */}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData && ProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>

  )
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div 
    key={project.id} 
    className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <motion.img className="w-full h-full object-contain rounded-lg" 
      src={project.imgSrc}
      whileHover={{ scale: 1.1}}>
      </motion.img  >

      {isHovered && (<motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6) flex items-center justify-center flex-col gap-2">
        <p className="text-xl text-primary">{project?.name}</p>
        <a href={project?.gitURL} target="_blank" className="">
          <FaGithub className="text-3xl text-white hover:text-primary"/>
        </a>
      </motion.div>)}
    </motion.div>
  )
}

export default Projects;
