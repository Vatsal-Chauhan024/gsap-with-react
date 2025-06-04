
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GoToSpecificPage, ImageHover, SVGParticles } from "./pages"
import { LazyLayout } from "./layouts"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="entry" path="/" element={
          <LazyLayout>
            <GoToSpecificPage />
          </LazyLayout>
        } />
        <Route key="imageHover" path="/imageHover" element={
          <LazyLayout>
            <ImageHover />
          </LazyLayout>
        } />
         <Route key="svgParticles" path="/svgParticles" element={
          <LazyLayout>
            <SVGParticles />
          </LazyLayout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App