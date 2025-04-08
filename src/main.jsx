import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
// import AppRouter from './utils/Router.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound"; // Pour gérer les erreurs 404
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
        <Route path="*" element={<NotFound />} /> {/* Gère les pages non existantes */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
