import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// 1. Buscamos los estilos globales un nivel arriba (en src/)
import "../index.css" 

// 2. CORRECCIÓN IMPORTANTE:
// Como App.jsx está junto a main.jsx, se importa así:
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)