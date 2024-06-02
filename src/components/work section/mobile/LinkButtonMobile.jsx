import { motion } from "framer-motion"
import { FaRunning } from "react-icons/fa"
import { ImExit } from "react-icons/im"
import { SiApplenews } from "react-icons/si"

const commonStyle =
  "px-3 py-0.5 bg-green-400 rounded-xl relative flex items-center border-2 border-green-950 font-semibold capitalize justify-center w-max"

const LinkButtonMobile = ({ selectedWork }) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      {selectedWork.url ? (
        <a href={selectedWork.url} className={commonStyle} target="_blank">
          <FaRunning className="h-2 w-2" />
          <ImExit className="h-2 w-2 mr-1 ml-0.5 " />
          Site visit
        </a>
      ) : (
        <div
          href={selectedWork.url}
          className={`gap-1 ${commonStyle}`}
          capitalize
        >
          <SiApplenews />
          Local Demo Temporary
        </div>
      )}
    </motion.div>
  )
}
export default LinkButtonMobile
