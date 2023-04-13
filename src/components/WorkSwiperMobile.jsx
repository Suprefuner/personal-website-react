import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"
import { Spinner } from "./index"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
    }
  },
  center: {
    zIndex: 1,
    x: "0",
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
    }
  },
}

const SwiperButton = ({ type, paginate }) => (
  <div
    className="p-1 text-2xl text-white bg-gray-400 rounded-full"
    onClick={() => paginate(type === "prev" ? -1 : 1)}
  >
    {type === "prev" ? <IoMdArrowRoundBack /> : <IoMdArrowRoundForward />}
  </div>
)

export default function WorkSwiperMobile({ selectedWork }) {
  const [[page, direction], setPage] = useState([0, 0])

  if (!selectedWork.name) {
    return <Spinner />
  }

  const { images } = selectedWork

  const paginate = (newDirection) => {
    let newPage = page + newDirection
    if (page + newDirection > images.length - 1 || page + newDirection < 0) {
      newPage = newDirection > 0 ? 0 : images.length - 1
    }
    setPage([newPage, newDirection])
  }

  return (
    <div
      className="
        w-[calc(100%+4rem)] h-[20rem] sm:h-[30rem] md:h-[32rem] -mx-2 bg-gray-500 border-t border-b border-gray-400 relative"
    >
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[page]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5 },
              opacity: { duration: 0.2 },
            }}
            className={`absolute inset-0 w-full h-full object-cover`}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 flex items-center justify-between w-full h-full px-1.5 z-20">
        <SwiperButton type="prev" paginate={paginate} />
        <SwiperButton type="next" paginate={paginate} />
      </div>
    </div>
  )
}
