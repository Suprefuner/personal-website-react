import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useSnapshot } from "valtio"

import { SectionIndicator, StacksMenu, AboutText } from "../index"
import loadSpline from "../../utils/spline"
import { sectionData } from "../../utils/data"
import state from "../../store"

export default function About() {
  const [showStackMenu, setShowStackMenu] = useState(false)
  const { bgColor, splineURL } = sectionData.about
  const { ref, inView } = useInView()
  const snap = useSnapshot(state)

  useEffect(() => {
    if (!inView) {
      return setShowStackMenu(false)
    }
    state.currentSection = "about"
  }, [inView])

  return (
    <section id="about" className={`lg:h-full ${bgColor}`}>
      <motion.div
        className="
          container relative h-screen pt-[15rem] lg:pt-0
          flex flex-col gap-3 items-center 
          lg:grid-cols-2 lg:grid lg:items-center"
      >
        <SectionIndicator ref={ref} />
        <AnimatePresence>
          {showStackMenu ? <StacksMenu /> : null}
        </AnimatePresence>

        {/* FETCH DIFFERENT SPLINE FOR DIFFERENT SCREEN SIZES */}
        {snap.screenSize <= 3 ? (
          // NEED TO ADD ONE MORE DIV TO TRIGGER CLICK EVENT
          <div
            className="absolute bottom-0 order-1 w-full rounded-full h-1/3"
            onClick={() => setShowStackMenu((prev) => !prev)}
          >
            <motion.div className="w-full h-full mx-auto rounded-full pointer-events-none">
              {loadSpline(
                "https://draft.spline.design/VAHCpmCmVKzbBFmg/scene.splinecode"
              )}
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="
            w-full h-[106%] 
            absolute -top-10 -left-[20%] 
            lg:scale-[.85] xl:scale-[.95] 2xl:scale-100 
            lg:origin-bottom-left 
            pointer-events-none"
          >
            {loadSpline(splineURL)}
          </motion.div>
        )}
        <AboutText />
      </motion.div>
    </section>
  )
}
