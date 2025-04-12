import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Food from "./page/Food"
import HandProducts from "./page/HandProducts"
import Error from "./page/Error"
import Nav from "./components/Nav"
import Contact from "./page/Contact"
import About from "./page/About"
import HandProductsDetails from "./page/HandProductsDetails"
import FoodDetails from "./page/FoodDetails"

function App() {
  return (
    <>
  
      <BrowserRouter basename="/daisytest">
      <Nav/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/food" element={<Food/>}/>
              <Route path="/food/:name" element={<FoodDetails/>}/>
              <Route path="/handproduct" element={<HandProducts/>}/>
              <Route path="/handproduct/:name" element={<HandProductsDetails/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*"  element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
