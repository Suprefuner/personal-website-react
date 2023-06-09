import { motion } from "framer-motion"
import WorkItem from "./WorkItem"
import { parentVariants } from "../../utils/motion"

export default function WorksList({ works, selectedWork, setSelectedWork }) {
  return (
    <motion.ul
      variants={parentVariants}
      initial="closed"
      whileInView="open"
      viewport={{ margin: "-400px", once: true }}
      className="space-y-1 max-w-[70rem] w-[40vw] h-[450px] py-2 px-5 lg:px-3 relative z-30 "
    >
      {works.map((work, i) => (
        <WorkItem
          work={work}
          key={i}
          i={i}
          selectedWork={selectedWork}
          setSelectedWork={setSelectedWork}
        />
      ))}
    </motion.ul>
  )
}
