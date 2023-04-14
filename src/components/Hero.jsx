import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useSnapshot } from "valtio"

import loadSpline from "../utils/spline"
import { sectionData, heroSectionHeaderStartingPositions } from "../utils/data"
import state from "../store"
import { SectionIndicator, HeroSceneMobile } from "./index"
import myCV from "../assets/Joe_Chan-frontend_developer_CV.pdf"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(true)
  const snap = useSnapshot(state)
  const { bgColor, splineURL } = sectionData.hero

  console.log(snap.screenSize)

  const aboutRef = useRef()
  const workRef = useRef()
  const connectRef = useRef()
  const resumeRef = useRef()
  const linkRef = useRef()

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

    // FIXME
    // spline.setZoom(0.5)

    // GIVE SOME BUFFER TIME FOR FRAMER MOTION
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }

  // INTERACT WITH SPLINE SCENE'S OBJECT
  const handleMouseUp = (e) => {
    if (e.target.name !== "resume") {
      window.scrollTo(0, window.innerHeight * sectionData[e.target.name].id)
    }
    linkRef.current.click()
  }

  return (
    <section id="home" ref={ref} className={`relative h-screen ${bgColor}`}>
      <SectionIndicator ref={indicatorRef} />
      <a
        href={myCV}
        download="Joe_Chan-frontend_developer_CV.pdf"
        ref={linkRef}
        className="absolute opacity-0 pointer-events-none"
      />
      {/* RENDER THE HEADER AFTER SPLINE IS LOADED */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{
            opacity: 1,
            y: heroSectionHeaderStartingPositions[snap.screenSize],
          }}
          transition={{ delay: snap.screenSize < 3 ? 2 : 5 }}
          className="
            font-extrabold text-header text-center
            text-6xl 
            sm:text-8xl 
            md:text-[9rem] 
            lg:text-[10.5rem]
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
      {/* RENDER SPLINE 3D ANIMATION ABOVE 1024 SCREEN SIZE */}
      {snap.screenSize > 3 ? (
        <div className="absolute inset-0 z-10">
          {loadSpline(splineURL, handleOnLoad, handleMouseUp)}
        </div>
      ) : (
        <HeroSceneMobile cloudLeft={cloudLeft} cloudRight={cloudRight} />
      )}
    </section>
  )
}
