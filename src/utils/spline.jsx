import Spline from "@splinetool/react-spline"

const loadSpline = (url, onLoad, onMouseUp) => {
  return <Spline scene={url} onLoad={onLoad} onMouseUp={onMouseUp} />
}

export default loadSpline
