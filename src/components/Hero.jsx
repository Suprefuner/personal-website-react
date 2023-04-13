import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useSnapshot } from "valtio"

import loadSpline from "../utils/spline"
import { sectionData } from "../utils/data"
import state from "../store"

import avatarImg from "../assets/images/mobile-hero-section-3d-avatar.png"
import cloud1 from "../assets/images/cloud-1.png"
import cloud2 from "../assets/images/cloud-2.png"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(true)
  const snap = useSnapshot(state)
  const { bgColor, splineURL } = sectionData.hero

  const aboutRef = useRef()
  const workRef = useRef()
  const connectRef = useRef()
  const resumeRef = useRef()

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const { ref: indicatorRef, inView: indicatorInView } = useInView()

  useEffect(() => {
    state.showNavBar = !inView
  }, [inView])

  useEffect(() => {
    if (!indicatorInView) return
    state.currentSection = "hero"
  }, [indicatorInView])

  const { scrollYProgress } = useScroll()
  const left = useTransform(scrollYProgress, [0, 0.3], [0, -500])
  const right = useTransform(scrollYProgress, [0, 0.3], [0, 500])
  const cloudLeft = useTransform(scrollYProgress, [0, 0.5], [0, -300])
  const cloudRight = useTransform(scrollYProgress, [0, 0.5], [0, 300])

  const handleOnLoad = (spline) => {
    const about = spline.findObjectByName("about")
    const work = spline.findObjectByName("work")
    const connect = spline.findObjectByName("connect")
    const resume = spline.findObjectByName("resume")

    aboutRef.current = about
    workRef.current = work
    connectRef.current = connect
    resumeRef.current = resume

    spline.setZoom(0.5)

    // GIVE SOME BUFFER TIME FOR FRAMER MOTION
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }

  const handleMouseUp = (e) => {
    if (e.target.name !== "resume") {
      window.scrollTo(0, window.innerHeight * sectionData[e.target.name].id)
    }
  }

  const headerStartingPosition = [
    "20vh",
    "20vh",
    "20vh",
    "11vh",
    "11vh",
    "11vh",
    "10vh",
  ]

  return (
    <section
      id="home"
      ref={ref}
      className={`relative h-screen ${bgColor} heroBG`}
    >
      <div
        ref={indicatorRef}
        className="absolute w-1 aspect-square top-[40vh] pointer-events-none opacity-0"
      />
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: headerStartingPosition[snap.screenSize] }}
          transition={{ delay: snap.screenSize < 3 ? 2 : 5 }}
          className="
            font-extrabold text-[#f84874] text-center
            text-6xl sm:text-8xl md:text-[9rem] lg:text-[10.5rem]
            2xl:text-[12rem] 2xl:leading-[16rem]
            "
        >
          <motion.h2 style={{ x: left }}>Hi! I'm Joe</motion.h2>
          <motion.h2
            style={{ x: right }}
            className="text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] 2xl:text-[12rem]"
          >
            A Web Developer
          </motion.h2>
        </motion.div>
      )}
      {snap.screenSize >= 3 ? (
        <div className="absolute inset-0 z-10">
          {loadSpline(splineURL, handleOnLoad, handleMouseUp)}
        </div>
      ) : (
        <div className="w-full h-full ">
          <div className="absolute bottom-0 w-[75%] sm:w-[50%] md:w-[40%] left-1/2 -translate-x-1/2 z-10">
            <img src={avatarImg} alt="joe's avatar" className="relative" />
          </div>
          <motion.img
            initial={{ x: "50vw" }}
            animate={{ x: 0 }}
            whileInView={{ y: snap.screenSize > 1 ? [-20, 20] : [-10, 10] }}
            transition={{
              x: { delay: 1.5, duration: 1.2, type: "tween" },
              y: {
                duration: snap.screenSize > 1 ? 9 : 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            style={{ x: cloudRight }}
            src={cloud1}
            alt="cloud"
            className="absolute -right-[35vw] sm:-right-[12vw] md:right-0 top-[45%] z-0"
          />
          <motion.img
            initial={{ x: "-50vw" }}
            animate={{ x: 0 }}
            whileInView={{ y: snap.screenSize > 1 ? [-20, 20] : [-5, 5] }}
            transition={{
              x: { delay: 2, duration: 0.6, type: "tween" },
              y: {
                duration: snap.screenSize > 1 ? 7 : 5,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            style={{ x: cloudLeft }}
            src={cloud2}
            alt="cloud"
            className="absolute -left-[20vw] sm:left-0 md:left-[4vw] top-[72%] z-10"
          />
        </div>
      )}
    </section>
  )
}
