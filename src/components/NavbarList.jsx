import { motion, AnimatePresence } from "framer-motion"
import { navList } from "../utils/data"
import { useSnapshot } from "valtio"
import state from "../store"
import myCV from "../assets/Joe_Chan-frontend_developer_CV.pdf"

export default function NavbarList({ showMenu, setShowMenu }) {
  const snap = useSnapshot(state)

  return (
    <ul className="flex flex-col items-center pt-6 text-xl font-semibold md:flex-row md:text-md lg:text-xl md:pt-0 xl:pt-1">
      <AnimatePresence>
        {((snap.screenSize < 2 && showMenu) || snap.screenSize >= 2) &&
          navList.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.3 }}
              transition={{
                type: "spring",
                stiffness: 600,
                duration: 0.3,
              }}
              className="relative h-full px-5 py-2 cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {item !== "CV" ? (
                <a href={`#${item}`}>
                  <AnimatePresence>
                    {snap.currentSection === item && (
                      <motion.div
                        layoutId="dot"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-3 bg-red-300/70 rounded-full top-[calc(50%-1.5rem)] left-[calc(50%-1.5rem)] aspect-square"
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{item}</span>
                </a>
              ) : (
                <a
                  href={myCV}
                  download="Joe_Chan-frontend_developer_CV"
                  target="_blank"
                >
                  <span className="relative z-10">{item}</span>
                </a>
              )}
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  )
}
