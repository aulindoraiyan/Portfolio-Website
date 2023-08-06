
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {ComputersCanvas} from './canvas'
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
// import {TypeWriterText} from './TypeWriterText'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  
  return (
    <section className="relative w-full h-screen max-auto">
      <div className = {`${styles.paddingX} absolute insert-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center itemscenter mt-5">
            <div className = "w-5 h-5 rounded-full bg-[#915eff]"/>
            <div className= "w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className = {`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className = "text-[#915eff]" > Raiyan</span>

          </h1>
          {/* <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
            I am an aspiring <br className= "sm:block hiden"/>Software Engineer, Web Developer

          </p> */}
                {/* <p>And I'm a <span style= {{fontWeight: 'bold', color: 'green'}}>{text}</span>
                 <span><Cursor/></span></p> */}
            {/* <TypeWriterText/> */}
          <h1> <span style={{ color: 'white', fontSize: '22px' }}>And I'm a</span>
             {' '}
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '35px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Software Engineer', 'Web Developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={110}
            
          />
        </span>
      
          </h1>

        </div>

      </div>
      <ComputersCanvas />

      <div className = "absolute xs:bottom-1 bottom-62 w-full flex justify-center items-center">

        <a href="#about">
          <div className= "w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
                animate = {{
                  y: [0, 24, 0]
                }}
                transition = {{
                  duration: 1.5, //it means that 1.5 second e transition hobe
                  repeat: Infinity,
                  repeatType: 'loop'

                }}
                className= "w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero