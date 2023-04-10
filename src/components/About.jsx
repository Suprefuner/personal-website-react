import loadSpline from "../utils/spline"
import { sectionData } from "../utils/data"
import { motion } from "framer-motion"

export default function About() {
  const { bgColor, splineURL } = sectionData.about

  return (
    <div className={`h-full ${bgColor} `}>
      <div className="container h-screen flex items-center [&>*]:flex-1 relative">
        <div className="w-full h-full">
          <div className="absolute top-0 w-full h-full -left-[20%] pointer-events-none ">
            {loadSpline(splineURL)}
          </div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-[120px] text-[#f84874]"
          >
            Who am I?
          </motion.h2>
          <motion.article
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            class="text-2xl font-semibold pl-5"
          >
            Hello! I'm <span class="highlight-text">Joe</span>🧙🏻‍♂️. <br />
            I'm a frontend web developer based in HK <br />
            I ❤️ building creative things on the web. <br />
            I'm currently on my way to become a web development master.
            <br />
            Come and Join my party!!!
          </motion.article>
        </div>
      </div>
    </div>
  )
}
