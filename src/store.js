import { proxy } from "valtio"
import detectScreenSize from "./utils/detectScreenSize"

const state = proxy({
  screenSize: detectScreenSize(),
  showNavBar: false,
  currentSection: "",
})

export default state
