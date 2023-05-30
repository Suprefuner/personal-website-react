import { forwardRef } from "react"
import { Cloud, CloudMenu, NavbarList } from "../index"
import { useSnapshot } from "valtio"

import state from "../../store"
import logo from "../../assets/images/jc-icon.svg"

const Navbar = forwardRef((_, ref) => {
  const snap = useSnapshot(state)

  return (
    <nav className="fixed left-0 right-0 z-50 md:-top-10 lg:top-0" ref={ref}>
      {snap.screenSize <= 2 ? <CloudMenu /> : <Cloud />}
      <div
        className="container flex items-center justify-between
        absolute top-2 md:top-[10.5rem] lg:top-1 left-0 right-0 "
      >
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-5" />
          </a>
        </div>
        {snap.screenSize <= 2 ? null : <NavbarList />}
        {/* FOR LAYOUT PURPOSE ONLY */}
        {snap.screenSize > 3 && <div />}
      </div>
    </nav>
  )
})

export default Navbar
