import logo from "../assets/images/jc-icon.svg"

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-1 py-3 text-gray-500 bg-gray-950">
      <div className="brightness-100 invert">
        <img src={logo} alt="joe chan logo" className="w-5" />
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Joe Chan All right reserve</p>
        <p className="text-[14px]">Design and develop by Me</p>
      </div>
    </div>
  )
}
export default Footer
