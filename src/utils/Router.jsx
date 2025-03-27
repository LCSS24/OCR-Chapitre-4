// src/Router.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound"; // Pour gérer les erreurs 404

function AppRouter() {
  return (
    <Router>
      <h1>un titre hihi</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<NotFound />} /> {/* Gère les pages non existantes */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
