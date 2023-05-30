import { Suspense, lazy } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))

const loadSpline = (url, onLoad, onMouseUp) => {
  return (
    <Suspense>
      <Spline scene={url} onLoad={onLoad} onMouseUp={onMouseUp} />
    </Suspense>
  )
}

export default loadSpline
