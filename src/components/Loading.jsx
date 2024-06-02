
import { motion } from "framer-motion"
import logo from "../assets/images/jc-icon.svg"

export default function Loading() {
  return (
    <motion.div className="w-[calc(100vw-40px)] h-[calc(100vh-40px)] z-[99999] overflow-hidden grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white bg-white/50 backdrop-blur-md rounded-[50px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition:
        {
          delay: 3.5,
          type: "tween",
          duration: .5,
        }
      }}>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={logo} alt="joe chan logo" className="w-8" />
      </div>

      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </motion.div>
  )
}