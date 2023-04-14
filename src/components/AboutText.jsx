import { motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"

const AboutText = () => {
  const snap = useSnapshot(state)

  return (
    <div className="md:pt-3 lg:pt-0 lg:col-start-2">
      <motion.h2
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", duration: 0.75 }}
        viewport={
          snap.screenSize < 3
            ? { margin: "-100px", once: true }
            : { margin: "-200px", once: true }
        }
        className="
              text-header font-extrabold 
              text-center lg:text-left 
              text-7xl 
              sm:text-9xl 
              lg:text-[8rem] 
              xl:text-[10rem] 
              2xl:text-[12rem]"
      >
        Who am I?
      </motion.h2>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.75 }}
        viewport={{ once: true, margin: "-200px" }}
        className="
              w-[calc(100vw-12rem)] sm:w-[80%] md:w-[65%] lg:w-full
              relative mx-auto xl:pl-5 
              text-xl font-semibold 
              lg:text-2xl 
              2xl:text-2xl"
      >
        Hello! I'm Joe🧙🏻‍♂️. <br />
        I'm a frontend web developer based in HK <br />
        I ❤️ building creative things on the web. <br />
        I'm currently on my way to become a web development master.
        <br />
        Come and Join my party!!!
        {snap.screenSize <= 3 && (
          <>
            <motion.div
              initial={{ rotate: "-12deg" }}
              animate={{ scale: 0, rotate: "-12deg", opacity: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 18,
                repeatType: "mirror",
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
              }}
              className={`text-5xl absolute -bottom-5  -left-[10vw] sm:-left-[5vw] w-min inline-block`}
            >
              ✨
            </motion.div>
            <motion.div
              initial={{ rotate: "3deg" }}
              animate={{ scale: 0, rotate: "3deg", opacity: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 11,
                repeatType: "mirror",
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
              }}
              className={`text-xl absolute top-1/2 -right-[5vw] sm:-right-[2vw] w-min inline-block`}
            >
              ✨
            </motion.div>
          </>
        )}
      </motion.article>
    </div>
  )
}
export default AboutText
