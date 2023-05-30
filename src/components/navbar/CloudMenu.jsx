import { useState } from "react"
import { motion } from "framer-motion"
import { Cloud, NavbarList } from "../index"

export default function CloudMenu() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <motion.div
        animate={{ height: showMenu ? "auto" : "0" }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-white/95 overflow-hidden"
      >
        <NavbarList showMenu={showMenu} setShowMenu={setShowMenu} />
      </motion.div>
      <div className="overflow-hidden">
        <Cloud />

        {/*=========== MENU TOGGLE HANDLE ===========*/}
        <div
          className="absolute w-5 border-8 border-gray-800 rounded-full bottom-1 right-2 aspect-square"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <div
            className="
            absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+1px)]
            h-5 w-[3px] bg-gray-800 
            before:w-3 before:h-1.5 
            
            before:bg-gradient-to-t from-white/90 before:to-transparent
            before:absolute before:left-1/2 before:-translate-y-[95%] before:-translate-x-1/2 
            before:shadow-md before:shadow-black/10   
            before:rounded-b-[6rem] 
          "
          />
        </div>
        {/*===========END MENU TOGGLE HANDLE ===========*/}
      </div>
    </div>
  )
}
