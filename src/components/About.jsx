/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText}>INTRODUCTION</h2>
      </motion.div>

      <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className="flex items-start gap-10 mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
>
  <img 
    src="/prince.png" 
    alt="About me" 
    className="w-[400px] h-[300px] object-contain rounded-lg shadow-lg"
  />
    <div>
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
      Overview
    </h1>
    <p className="text-lg text-gray-300 leading-relaxed">
      I'm a <span className="text-pink-400 font-semibold">skilled software developer</span> with experience in 
      <span className="text-blue-400"> TypeScript</span> and <span className="text-yellow-400">JavaScript</span>, and expertise in frameworks like 
      <span className="text-green-400"> React</span>, <span className="text-teal-400">Node.js</span>, and <span className="text-indigo-400">Three.js</span>. 
      I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve 
      <span className="text-orange-400 font-semibold"> real-world problems</span>. Let's work together to bring your ideas to life!
    </p>
  </div>
</motion.div>
 





      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");