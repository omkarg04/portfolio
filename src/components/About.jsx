import { motion } from "motion/react";
import workPic from "../assets/workPic.jpg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500"> Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center ">
                <img className="mx-2 w-48 h-48 sm:w-45 sm:h-45 md:w-60 md:h-60 lg:w-75 lg:h-75 rounded-2xl  " src={workPic} alt="about" /></div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p></div></motion.div>
        </div>
      
    </div>
  )
}

export default About
 