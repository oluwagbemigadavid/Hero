import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CarProvider, NavProvider } from './providers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavProvider>
      <CarProvider>
        <App />
      </CarProvider>
    </NavProvider>
  </StrictMode>,
)
