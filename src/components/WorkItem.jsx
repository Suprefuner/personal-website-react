import { motion } from "framer-motion"
import LinkButton from "./LinkButton"
import customKeyboardEvent from "../utils/customKeyboardEvent"

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function WorkItem({ i, work, selectedWork, setSelectedWork }) {
  return (
    <motion.li
      key={i}
      variants={childVariants}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 500, duration: 0.8 },
      }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-2 "
    >
      <div
        className={`
        lg:w-full xl:w-3/4 w-4/5 
        px-5 py-1.5 rounded-3xl 
        text-3xl lg:text-xl capitalize truncate 
        shadow-md shadow-green-300/50 hover:shadow-green-300/30
        hover:shadow-xl transition-shadow 
        hover:cursor-pointer 
      ${
        selectedWork.name === work.name
          ? "bg-green-500/90 text-white "
          : "bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-sm border border-white/30"
      }
      `}
        onClick={() => {
          customKeyboardEvent("keyup", i + 1)
          setSelectedWork(work)
        }}
      >
        {work.name}
      </div>
      {selectedWork.name === work.name && (
        <LinkButton selectedWork={selectedWork} />
      )}
    </motion.li>
  )
}
