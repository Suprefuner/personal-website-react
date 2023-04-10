// import Spline from "@splinetool/react-spline"
import React, { Suspense } from "react"
const Spline = React.lazy(() => import("@splinetool/react-spline"))

const loadSpline = (url, onLoad, onMouseUp) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-red-500">
          Loading...
        </div>
      }
    >
      <Spline scene={url} onLoad={onLoad} onMouseUp={onMouseUp} />
    </Suspense>
  )
}

export default loadSpline
