import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className=" bg-slate-300 flex items-center justify-center h-screen ">
    <App />
    </div>
  </StrictMode>,
)
