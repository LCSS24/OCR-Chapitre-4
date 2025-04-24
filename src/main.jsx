import './styles/index.scss'

// Import des composants React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des pages et des composants Footer/Header
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
