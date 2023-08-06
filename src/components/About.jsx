import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
// import { SectionWrapper } from '../hoc'



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
            
        variants={fadeIn("right", "spring, 0.5 * {index}, 0.75")}
        className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450

        }}
        className= "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} 
        className= "w-16 h-16 object-contain"/>
      <h3 className= "text-white text-[20px] font-bold text-center">{title}</h3>
      


      </div>
      


      </motion.div>
    
    </Tilt>
  
  )
}

const About = () => {

  

  return (
    <>

    <motion.div variants = {textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>

      <h2 className = {styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className = "mt-4 text-secondarytext-[17px] max-w-3x leading-[30px]"
    >
      I'm pursuing Bachelor in Computer Science with a Software Design and Development track and a Minor in Mathematical Science. <br/>
      I aspire to pursue a Ph.D. focused on the applications of AI or machine learning in healthcare, with a particular emphasis on the potential <br/>benefits of brain mapping.

    </motion.p>

    <span>
      <motion.div className= "mt-12 flex  text-center flex-center quote "
          initial = {{scale: 0}}
          animate = {{rotate: 0, scale: 1}}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
      >
        <p>"Each passing moment carries the weight of opportunity, and I embrace it fully, <br/> ensuring no dream waits for the embrace of tomorrow but thrives in the arms of today."</p>
      </motion.div>
    </span>
    {/* display cards */}
    <motion.div className= "mt-20 flex flex-wrap gap-10  "   >
      {services.map((service, index) => (
        <ServiceCard key = {service.title} index= {index} {...service}/>
      ))}
 
    </motion.div>

    
    </>

    

  )
}

export default SectionWrapper(About, "about")