import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

const images = []

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
)
