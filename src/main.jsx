import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import { AdProvider } from './context/AdContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AdProvider>
        <HashRouter>
          <App />
          <Analytics />
        </HashRouter>
      </AdProvider>
    </HelmetProvider>
  </StrictMode>,
)
