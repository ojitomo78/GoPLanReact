import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio.jsx' // Verifica si es 'Inicio' o 'inicio'
import './css/estilos.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
)