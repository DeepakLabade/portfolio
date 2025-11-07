import Image from 'next/image'
import Container from './container'
import {motion} from 'motion/react'

const heroVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8 ,
              ease: [0.33, 1, 0.68, 1] as any,
            //   delay: 3.2
      }
    }
  }
  

const Hero = () => {
  return (
    <div>
         <div className="tracking-[-0.08em] text-[11rem] flex justify-between leading-44 font-medium z-50">
        <motion.p
        variants={heroVariants}
        initial='hidden'
        animate='visible'
        >DEEPAK<br />LABADE
        </motion.p>
        <motion.div
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 0.8,
        //   delay: 3.2,
          ease: [0.33, 1, 0.68, 1]
        }}
        className="rounded-full h-full overflow-hidden">
        <Image src={'/avatar.png'} alt="avatar" width={190} height={20} />
        </motion.div>
      </div>

      <motion.div
      initial={{
        y: 50,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        // delay: 3.2,
        ease: [0.33, 1, 0.68, 1]
      }}
      className="flex w-full justify-between mt-12">
        <div className="text-2xl tracking-tight font-semibold">
          {/* deepaklabade001@gmail.com */}
        </div>
        <p className="max-w-2xl text-[40px] tracking-tight font-medium leading-10 whitespace-normal text-justify ">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm a Full-Stack Developer building scalable web apps — working remote worldwide. Let’s create!
        </p>
      </motion.div>
    </div>
  )
}

export default Hero