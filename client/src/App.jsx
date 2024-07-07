import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Sbshop from "./pages/SB-shop/Sbshop.jsx";
import Services from "./pages/Services/Services.jsx";
import Signup from "./Parts/signup/Signup.jsx";
import Login from "./Parts/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from 'react-router-dom'

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Sbshop" element={<Sbshop />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
