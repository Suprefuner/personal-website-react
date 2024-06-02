import { useState } from "react"
import { motion } from "framer-motion"
import WorkDetailCardMobile from "./WorkDetailCardMobile"

const WorkListMobile = ({
  works,
  selectedWork,
  setSelectedWork,
  parentVariants,
}) => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <motion.div className="bg-black p-2 rounded-3xl h-[75vh] w-full">
      <div className="w-full h-full overflow-x-hidden relative bg-white rounded-xl ">
        <motion.div className="w-full h-full">
          <h2 className="font-extrabold leading-[9rem] text-4xl text-center text-[#f84874] border-b shadow-md bg-gray-100">
            Recent Works
          </h2>
          <motion.ul
            variants={parentVariants}
            initial="closed"
            whileInView="open"
            viewport={{ margin: "-100px", once: true }}
            className=""
          >
            {works.map((work, i) => (
              <motion.li
                key={i}
                i={i}
                className={`px-3 py-2 text-xl border-b ${
                  selectedWork.name === work.name ? "bg-green-400" : ""
                }`}
                onClick={() => {
                  setSelectedWork(work)
                  setShowDetail(true)
                }}
              >
                <motion.span whileTap={{ scale: 0.95 }} className="block">
                  {work.name}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <WorkDetailCardMobile
          showDetail={showDetail}
          selectedWork={selectedWork}
          setSelectedWork={setSelectedWork}
          setShowDetail={setShowDetail}
          parentVariants={parentVariants}
        />
      </div>
    </motion.div>
  )
}

export default WorkListMobile
