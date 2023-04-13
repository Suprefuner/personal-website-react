import { useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { SectionIndicator, Form } from "./index"
import loadSpline from "../utils/spline"
import { sectionData } from "../utils/data"
import { useSnapshot } from "valtio"
import state from "../store"

export default function Connect() {
  const { bgColor, splineURL } = sectionData.connect
  const snap = useSnapshot(state)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (!inView) return
    state.currentSection = "connect"
  }, [inView])

  return (
    <section id="connect" className={`lg:h-screen ${bgColor} relative `}>
      <div className="container flex flex-col w-full h-full lg:flex-row lg:items-center lg:gap-4 2xl:grid 2xl:grid-cols-2">
        <SectionIndicator ref={ref} />
        <Form />
        <div className="h-full -order-1 lg:order-1 lg:flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.75 }}
            viewport={
              snap.screenSize < 3
                ? { margin: "-100px", once: true }
                : { margin: "-200px", once: true }
            }
            className="text-center lg:text-left font-extrabold text-9xl lg:text-[10rem] xl:text-[120px] text-header mt-[12rem] xl:mt-8"
          >
            Call Me
          </motion.h2>
        </div>

        {/* RENDER DIFFERENT SPLINE FOR DIFFERENT SCREEN SIZES */}
        {snap.screenSize < 3 ? (
          <div className="absolute inset-0 pointer-events-none">
            {loadSpline(
              "https://prod.spline.design/9lx6NtTJhsPjP7e1/scene.splinecode"
            )}
          </div>
        ) : (
          <div className="absolute top-0 w-full h-full pointer-events-none lg:right-5 xl:right-0">
            {loadSpline(splineURL)}
          </div>
        )}
      </div>
    </section>
  )
}
