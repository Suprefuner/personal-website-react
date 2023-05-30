import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { parentVariants } from "../../utils/motion"

import {
  WorksList,
  WorkDetailCard,
  WorkListMobile,
  SectionIndicator,
} from "../index"
import loadSpline from "../../utils/spline"
import { sectionData, works } from "../../utils/data"
import { useSnapshot } from "valtio"
import state from "../../store"

export default function Work() {
  const [selectedWork, setSelectedWork] = useState({})

  const { ref, inView } = useInView()
  const { ref: indicatorRef, inView: indicatorInView } = useInView()
  const snap = useSnapshot(state)
  const { bgColor, splineURL } = sectionData.work

  useEffect(() => {
    if (inView) return
    setSelectedWork({})
  }, [inView])

  useEffect(() => {
    if (!indicatorInView) return
    state.currentSection = "work"
  }, [indicatorInView])

  return (
    <section id="work" ref={ref} className={`h-screen ${bgColor}  relative`}>
      <div className="container relative grid items-center h-full ">
        <SectionIndicator ref={indicatorRef} />
        <div className="w-full mt-10 md:mt-8">
          {snap.screenSize <= 3 ? (
            <WorkListMobile
              works={works}
              selectedWork={selectedWork}
              setSelectedWork={setSelectedWork}
              parentVariants={parentVariants}
            />
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "tween", duration: 0.75 }}
                viewport={{ margin: "-200px", once: true }}
                className="font-extrabold leading-[9rem] text-[9rem] text-[#f84874] mb-3 relative"
              >
                Recent Works
              </motion.h2>
              <WorksList
                works={works}
                selectedWork={selectedWork}
                setSelectedWork={setSelectedWork}
              />
            </>
          )}
        </div>

        {snap.screenSize > 3 && selectedWork.name && (
          <WorkDetailCard
            selectedWork={selectedWork}
            parentVariants={parentVariants}
          />
        )}
      </div>
      {snap.screenSize <= 3 ? null : (
        <div className="absolute top-0 right-0 z-20 w-screen  h-[105%] pointer-events-none -bottom-1/4 ">
          {loadSpline(splineURL)}
        </div>
      )}
    </section>
  )
}
