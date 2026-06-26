import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import { AdProvider } from './context/AdContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AdProvider>
        <BrowserRouter>
          <App />
          <Analytics />
        </BrowserRouter>
      </AdProvider>
    </HelmetProvider>
  </StrictMode>,
)
