import { Hero, About, Work, Connect, Navbar } from "./components"
import { motion } from "framer-motion"

function App() {
  return (
    <motion.div className={`w-full`}>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Connect />
    </motion.div>
  )
}

export default App
