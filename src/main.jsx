import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/components/Header.jsx'
import Content from './assets/components/Content.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>,
)
