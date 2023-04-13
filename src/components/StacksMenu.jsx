import { motion } from "framer-motion"
import { stacksLogo } from "../utils/data"

const StacksMenu = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="absolute grid order-1 grid-cols-4 gap-1.5 p-3 bg-white/70 backdrop-blur-sm w-max h-max rounded-3xl drop-shadow-xl z-30"
    >
      {Object.keys(stacksLogo).map((logo, i) => (
        <img
          src={stacksLogo[logo]}
          alt="logo"
          key={i}
          className="object-contain p-1 border-2 border-white shadow-md w-7 aspect-square bg-gradient-to-bl from-white/70 to-white/50 rounded-xl"
        />
      ))}
    </motion.div>
  )
}
export default StacksMenu
