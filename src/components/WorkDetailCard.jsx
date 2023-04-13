import { motion, AnimatePresence } from "framer-motion"
import { stacksLogo } from "../utils/data"
import useMeasure from "react-use-measure"

const itemVariants = {
  open: {
    x: 5,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
}

export default function WorkDetailCard({ selectedWork, parentVariants }) {
  const [ref, { height }] = useMeasure()

  return (
    <motion.div
      animate={{ height }}
      className="
        w-[450px] xl:w-[420px] 
        absolute top-auto bottom-10 right-5 z-30 
        text-md bg-gradient-to-bl from-white/70 to-white/30
        border border-white/30 backdrop-blur-sm shadow-md 
        rounded-2xl cursor-pointer shadow-black/10"
      drag
      dragConstraints={{ left: 0, top: 0, bottom: 80, right: 80 }}
    >
      <div ref={ref} className="p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedWork.name}
            layout
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.8 }}
          >
            <p>{selectedWork.description}</p>
            <motion.ul
              variants={parentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-wrap items-center gap-2 mt-1.5 pt-1.5 border-t border-white/30"
            >
              {selectedWork.stacks.map((stack, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="h-3 aspect-square"
                >
                  <img
                    src={stacksLogo[stack]}
                    alt={`stack logo`}
                    className="object-contain w-full h-full"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
