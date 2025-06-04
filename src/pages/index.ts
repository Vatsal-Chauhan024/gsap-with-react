import { lazy } from "react";

const GoToSpecificPage = lazy(() => import("./GoToSpecificPage"))
const ImageHover = lazy(() => import("./ImageHover"))
const SVGParticles = lazy(() => import("./SVGParticles"))

export {
    SVGParticles,
    GoToSpecificPage,
    ImageHover
}