import { useRef } from "react"
import loadSpline from "../utils/spline"
import { sectionData } from "../utils/data"
import { motion } from "framer-motion"

export default function Hero() {
  const { bgColor, splineURL } = sectionData.hero

  const aboutRef = useRef()
  const workRef = useRef()
  const connectRef = useRef()
  const resumeRef = useRef()

  const handleOnLoad = (spline) => {
    const about = spline.findObjectByName("about")
    const work = spline.findObjectByName("work")
    const connect = spline.findObjectByName("connect")
    const resume = spline.findObjectByName("resume")

    aboutRef.current = about
    workRef.current = work
    connectRef.current = connect
    resumeRef.current = resume
  }

  const handleMouseUp = (e) => {
    if (e.target.name !== "resume") {
      window.scrollTo(0, window.innerHeight * sectionData[e.target.name].id)
    }
  }

  return (
    <section className={`relative h-screen ${bgColor}`}>
      <motion.h2
        initial={{ opacity: 0, y: "-45vh" }}
        animate={{ opacity: 1, y: "-35vh" }}
        transition={{ duration: 0.5, delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, type: "spring", stiffness: 300 },
        }}
        className="font-extrabold text-[120px] absolute text-center mx-auto w-full top-1/2 -translate-y-[35vh] z-0 text-[#f84874] snap-center shrink-0"
      >
        Hi! I'm Joe
        <br />A Web Developer
      </motion.h2>
      <div className="relative z-10 w-full h-full">
        {loadSpline(splineURL, handleOnLoad, handleMouseUp)}
      </div>
    </section>
  )
}
