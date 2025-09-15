import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hero from './Hero.tsx'
import Services from './Services.tsx'
import About from './About.tsx'
import Why from './whyUs.tsx'
import Contact from './Contact.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hero/>
    <Services/>
    <About/>
    <Why/>
    <Contact/>
  </StrictMode>,
)
