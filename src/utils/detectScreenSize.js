const breakPoints = [390, 640, 768, 1024, 1280, 1536]

export default function detectScreenSize() {
  const deviceWidth = window.innerWidth
  return breakPoints.reduce((acc, breakPoint, i) => {
    if (deviceWidth > breakPoint) {
      acc = i + 1
    }

    return acc
  }, 0)
}
