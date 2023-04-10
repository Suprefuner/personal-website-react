import loadSpline from "../utils/spline"
import { sectionData } from "../utils/data"
import Form from "./Form"

export default function Connect() {
  const { bgColor, splineURL } = sectionData.connect

  return (
    <section className={`h-screen ${bgColor}`}>
      <div className="container relative flex items-center w-full h-full ">
        <Form />
        <div className="flex-1 h-full">
          <h2 className="font-extrabold text-[120px] text-[#f84874] text-right mt-10">
            Call Me
          </h2>
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            {loadSpline(splineURL)}
          </div>
        </div>
      </div>
    </section>
  )
}
