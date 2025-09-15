import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hero from './Hero.tsx'
import Services from './Services.tsx'
import About from './About.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hero/>
    <Services/>
    <About/>
  </StrictMode>,
)
