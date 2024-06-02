import htmlLogo from "../assets/images/html.png"
import cssLogo from "../assets/images/css.png"
import jsLogo from "../assets/images/javaScript.png"
import reactLogo from "../assets/images/react.png"
import reduxLogo from "../assets/images/redux.png"
import nextLogo from "../assets/images/nextjs.png"
import threeLogo from "../assets/images/threejs.png"
import tailwindLogo from "../assets/images/tailwindcss.png"
import scLogo from "../assets/images/styled-components.png"
import socketLogo from "../assets/images/socket-io.png"
import nodeLogo from "../assets/images/nodejs.png"
import expressLogo from "../assets/images/express.png"
import mongoDBLogo from "../assets/images/mongoDB.png"
import prismaLogo from "../assets/images/prisma.png"

import yard1 from "../assets/images/yard-1.png"
import yard2 from "../assets/images/yard-2.png"
import yard3 from "../assets/images/yard-3.png"
import yard4 from "../assets/images/yard-4.png"
import xtore1 from "../assets/images/xtore-1.png"
import xtore2 from "../assets/images/xtore-2.jpg"
import xtore3 from "../assets/images/xtore-3.png"
import pixel1 from "../assets/images/pixel-1.png"
import pixel2 from "../assets/images/pixel-2.png"
import pixel3 from "../assets/images/pixel-3.png"
import algo1 from "../assets/images/algo-1.png"
import algo2 from "../assets/images/algo-2.png"
import algo3 from "../assets/images/algo-3.png"
import unicode1 from "../assets/images/unicode-1.png"
import unicode2 from "../assets/images/unicode-2.png"

export const stacksLogo = {
  html: htmlLogo,
  css: cssLogo,
  javascript: jsLogo,
  react: reactLogo,
  redux: reduxLogo,
  "next.js": nextLogo,
  "three.js": threeLogo,
  "tailwind css": tailwindLogo,
  "styled-components": scLogo,
  "socket.io": socketLogo,
  "node.js": nodeLogo,
  mongoDB: mongoDBLogo,
  express: expressLogo,
  prisma: prismaLogo,
}

export const navList = ["about", "work", "connect", "CV"]

export const sectionData = {
  hero: {
    id: 0,
    splineURL: "https://prod.spline.design/hWEwHQy7N6FAbzg3/scene.splinecode",
    bgColor: "heroBG",
  },
  about: {
    id: 1,
    splineURL: "https://prod.spline.design/DaA0WhvgrydizOjX/scene.splinecode",
    bgColor: "aboutBG",
  },
  work: {
    id: 2,
    splineURL: "https://prod.spline.design/SUC-I3PcCegjGIYE/scene.splinecode",
    bgColor: "workBG",
  },
  connect: {
    id: 3,
    splineURL: "https://prod.spline.design/3M86ZPCL2Oi1S5jY/scene.splinecode",
    bgColor: "connectBG ",
  },
}

export const heroSectionHeaderStartingPositions = [
  "20vh",
  "20vh",
  "20vh",
  "11vh",
  "11vh",
  "11vh",
  "10vh",
]

export const works = [
  {
    name: "yard | trading platform",
    description:
      "A scenario based fashion E-commerce website. Provide Authentication, products, cart, favorite, checkout features.",
    stacks: [
      "html",
      "css",
      "javascript",
      "react",
      "redux",
      "node.js",
      "express",
      "mongoDB",
    ],
    url: "",
    images: [yard1, yard2, yard3, yard4],
  },
  {
    name: "xtore e-commerce",
    description:
      "A scenario based fashion E-commerce website. Provide Authentication, products, cart, favorite, checkout features.",
    stacks: ["html", "css", "javascript", "react", "redux"],
    url: "https://xtore-ecommerce.netlify.app/",
    images: [xtore1, xtore2, xtore3],
  },
  {
    name: "image filter tool",
    description:
      "Mini project to show how a computer forms an image and how the black and white, horizontal reflection, and blurry image filters work behind the scenes.",
    stacks: ["html", "css", "javascript"],
    url: "https://suprefuner.github.io/image-filter-presentation-tool/",
    images: [pixel1, pixel2, pixel3],
  },
  {
    name: "sorting algorithms tool",
    description:
      "Mini project to demonstrate 3 different sorting algorithms with a list of numbers. Adding drag and drop to increase the interactivity.",

    stacks: ["html", "css", "javascript"],
    url: "https://suprefuner.github.io/algo-presentation-tool/",
    images: [algo1, algo2, algo3],
  },
  {
    name: "unicode tool",
    description:
      "Mini project to introduce the history of Unicode. Allows user to convert string to Unicode and vice versa. Adding the slider effect and animated background to make it more fun.",
    stacks: ["html", "css", "javascript"],
    url: "https://suprefuner.github.io/unicode-presentation-tool/",
    images: [unicode1, unicode2],
  },
]
