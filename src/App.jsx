import { useEffect } from "react"
import { ToastContainer, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { motion, AnimatePresence } from "framer-motion"
import { Hero, About, Work, Connect, Navbar, Footer } from "./components"
import { useSnapshot } from "valtio"
import state from "./store"
import detectScreenSize from "./utils/detectScreenSize"

function App() {
  const MotionNavbar = motion(Navbar)
  const snap = useSnapshot(state)

  useEffect(() => {
    let requestId = null

    const onResize = () => {
      if (requestId) return
      requestId = requestAnimationFrame(() => {
        state.screenSize = detectScreenSize()
        requestId = null
      })
    }

    window.addEventListener("resize", onResize)

    return () => window.addEventListener("resize", onResize)
  }, [])

  return (
    <div className={`w-full overflow-x-hidden snap-mandatory snap-y`}>
      {/*
      ==============================================================
      RWD: ONLY ANIMATE NAVBAR ABOVE 1280
      ==============================================================
      */}
      {snap.screenSize <= 3 ? (
        <Navbar />
      ) : (
        <AnimatePresence initial={false}>
          {snap.showNavBar ? (
            <MotionNavbar
              key="navbar"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              exit={{ y: -150, transition: { type: "tween", duration: 0.2 } }}
            />
          ) : null}
        </AnimatePresence>
      )}
      <Hero />
      <About />
      <Work />
      <Connect />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
