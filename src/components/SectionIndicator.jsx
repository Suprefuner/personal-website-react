import { forwardRef } from "react"

const SectionIndicator = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="absolute w-1 aspect-square top-[40vh] pointer-events-none opacity-0"
    />
  )
})

export default SectionIndicator
