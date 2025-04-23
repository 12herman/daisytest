import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./page/Home"
import Food from "./page/Food"
import HandProducts from "./page/HandProducts"
import Error from "./page/Error"
import Nav from "./components/Nav"
import Contact from "./page/Contact"
import About from "./page/About"
import HandProductsDetails from "./page/HandProductsDetails"
import FoodDetails from "./page/FoodDetails"
import { WindowsSizeProvider } from "./context/WindowSizeContext"
import Footer from "./components/Footer"
import { AddCartProvider } from "./context/AddCartContext"
import { Toaster } from "react-hot-toast"
import AddtoCart from "./page/AddtoCart"

function AppContent() {
  const location = useLocation();

  // Add paths where you do NOT want the footer
  const hideFooterRoutes = ["/addtocart", "/food/:name", "/handproduct/:name","/food","/handproduct","/contact"];

  const shouldHideFooter = hideFooterRoutes.some(path =>
    location.pathname.startsWith(path.split(":")[0])
  );


  const isNoNav = ["/","/food", "/handproduct", "/contact", "/about", "/addtocart"].some(data => data === location.pathname);


  
  return (
    <>
      {isNoNav && <Nav />}
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/:name" element={<FoodDetails />} />
        <Route path="/handproduct" element={<HandProducts />} />
        <Route path="/handproduct/:name" element={<HandProductsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AddCartProvider>
      <BrowserRouter basename="/daisytest">
        <AppContent />
      </BrowserRouter>
    </AddCartProvider>
  );
}

export default App;
