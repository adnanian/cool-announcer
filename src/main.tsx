import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setFavicons } from './utils/favicons.ts'

// Set favicons dynamically
setFavicons();
// In your main.tsx or App.tsx, add this at the top
console.log('BASE_URL:', import.meta.env.BASE_URL);
console.log('Mode:', import.meta.env.MODE);
console.log('Dev:', import.meta.env.DEV);
console.log('Prod:', import.meta.env.PROD);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
