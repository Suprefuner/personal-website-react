import loadSpline from "../utils/spline"
import { sectionData, works } from "../utils/data"

export default function Work() {
  const { bgColor, splineURL } = sectionData.work

  return (
    <section className={`h-screen ${bgColor}`}>
      <div className="container relative h-full flex items-center [&>*]:flex-1 ">
        <div>
          <h2 className="font-extrabold text-[120px] text-[#f84874] mb-5">
            My babies
          </h2>
          <ul className="">
            {works.map((work) => (
              <li className="text-3xl pl-5 py-1.5 hover:cursor-pointer">
                {work.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-0 right-0 z-20 w-full h-[110%] -bottom-1/4 pointer-events-none">
          {loadSpline(splineURL)}
        </div>
      </div>
    </section>
  )
}
