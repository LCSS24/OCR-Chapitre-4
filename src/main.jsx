import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home.jsx'
import AppRouter from './utils/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <img src="\src\assets\LOGO.jpg" alt="" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
    <Home></Home>
    <AppRouter></AppRouter>
  </StrictMode>,
)
