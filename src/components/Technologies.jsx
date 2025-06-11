import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { motion } from "motion/react";
import { animate, inView } from "motion";

const iconVariants = (duration)=>({
  initial: {y:-10},
  animate:{
    y:[10,-10],
    transition:{duration:duration ,ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2> 
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div  
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 gap-4">
            <DiHtml5 className="text-7xl text-orange-600"/>
        </motion.div>
        <motion.div variants={iconVariants(2)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <FaCss3Alt className="text-7xl text-purple-400"/>
        </motion.div>
        <motion.div variants={iconVariants(6)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <SiJavascript className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div variants={iconVariants(4)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <RiReactjsLine className="text-7xl text-cyan-300"/>
        </motion.div>
        
        <motion.div variants={iconVariants(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <SiTailwindcss className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(2)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <FaBootstrap className="text-7xl text-purple-300"/>
        </motion.div>
        <motion.div variants={iconVariants(6)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 gap-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>

        
        
      </motion.div>
    </div>
  )
}

export default Technologies
