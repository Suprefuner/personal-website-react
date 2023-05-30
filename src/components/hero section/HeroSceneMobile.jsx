import { motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../../store"

import avatarImg from "../../assets/images/mobile-hero-section-3d-avatar.png"
import cloud1 from "../../assets/images/cloud-1.png"
import cloud2 from "../../assets/images/cloud-2.png"

const HeroSceneMobile = ({ cloudLeft, cloudRight }) => {
  const snap = useSnapshot(state)

  return (
    <div className="w-full h-full ">
      <div className="absolute bottom-0 w-[75%] sm:w-[50%] md:w-[40%] left-1/2 -translate-x-1/2 z-10">
        <img src={avatarImg} alt="joe's avatar" className="relative" />
      </div>
      <motion.img
        initial={{ x: "50vw" }}
        animate={{ x: 0 }}
        whileInView={{ y: snap.screenSize > 1 ? [-20, 20] : [-10, 10] }}
        transition={{
          x: { delay: 1.5, duration: 1.2, type: "tween" },
          y: {
            duration: snap.screenSize > 1 ? 9 : 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        style={{ x: cloudRight }}
        src={cloud1}
        alt="cloud"
        className="absolute -right-[35vw] sm:-right-[12vw] md:right-0 top-[45%] z-0"
      />
      <motion.img
        initial={{ x: "-50vw" }}
        animate={{ x: 0 }}
        whileInView={{ y: snap.screenSize > 1 ? [-20, 20] : [-5, 5] }}
        transition={{
          x: { delay: 2, duration: 0.6, type: "tween" },
          y: {
            duration: snap.screenSize > 1 ? 7 : 5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        style={{ x: cloudLeft }}
        src={cloud2}
        alt="cloud"
        className="absolute -left-[20vw] sm:left-0 md:left-[4vw] top-[72%] z-10"
      />
    </div>
  )
}
export default HeroSceneMobile
