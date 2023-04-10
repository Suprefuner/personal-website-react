import logo from "../assets/jc-icon.svg"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white/50 h-7 backdrop-blur">
      <div className="container">
        <div>
          <img src={logo} alt="logo" className="w-5" />
        </div>
      </div>
    </nav>
  )
}
