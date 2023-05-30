import { motion, AnimatePresence } from "framer-motion"
import { stacksLogo } from "../../../utils/data"
import { IoMdArrowRoundBack } from "react-icons/io"
import { WorkSwiperMobile, LinkButtonMobile } from "../../index"

const itemVariants = {
  open: {
    x: 0,
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

const WorkDetailCardMobile = (
  { showDetail, selectedWork, setShowDetail, parentVariants, setSelectedWork },
  ref
) => {
  return (
    <motion.div
      animate={{ x: showDetail ? "-100%" : 0 }}
      transition={{ type: "tween", delay: 0.3 }}
      className="w-full h-full bg-white"
    >
      <div className="p-2">
        <AnimatePresence mode="wait">
          <motion.div className="space-y-2">
            <div className="flex items-center justify-between">
              <motion.div
                className="relative z-30 text-3xl w-min"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setShowDetail(false)
                  setTimeout(() => {
                    setSelectedWork({})
                  }, 500)
                }}
              >
                <IoMdArrowRoundBack />
              </motion.div>
              <LinkButtonMobile selectedWork={selectedWork} />
            </div>
            <WorkSwiperMobile selectedWork={selectedWork} />
            <p className="sm:text-center">{selectedWork?.description}</p>
            <motion.ul
              variants={parentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-wrap items-center sm:justify-center gap-2 mt-1.5 pt-1.5 border-t border-black/20"
            >
              {selectedWork?.stacks?.map((stack, i) => (
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

export default WorkDetailCardMobile
