import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaRunning } from "react-icons/fa"
import { SiApplenews } from "react-icons/si"

const LinkButton = ({ selectedWork }) => {
  const [showMsg, setShowMsg] = useState(false)

  return (
    <>
      <a
        href={selectedWork.url}
        target="_blank"
        className="right-0 p-1 text-xl text-center text-white rounded-full bg-green-500/90"
        onMouseOver={() => setShowMsg(true)}
        onMouseLeave={() => setShowMsg(false)}
      >
        {selectedWork.url ? <FaRunning /> : <SiApplenews />}
      </a>
      <AnimatePresence>
        {showMsg ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            px-2 py-0.5
            absolute -top-2 right-0 
            bg-gradient-to-br from-white/70 to-white/30 
            border border-white/30 backdrop-blur-sm 
            rounded-2xl pointer-events-none  
            "
          >
            {selectedWork.url ? "site visit" : "Local Demo Temporary"}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </>
  )
}
export default LinkButton
