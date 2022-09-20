import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import img1 from './images/1.JPG'
import img2 from './images/2.JPG'
import img3 from './images/3.JPG'
import img4 from './images/4.JPG'
import img5 from './images/5.JPG'
import img6 from './images/6.JPG'
import img7 from './images/7.JPG'
import img8 from './images/8.JPG'
import img1bw from './images/8.JPG'
import img2BW from './images/2BW.JPG'
import img3BW from './images/3BW.JPG'
import img4BW from './images/4BW.JPG'
import img5BW from './images/5BW.JPG'
import img6BW from './images/6BW.JPG'
import img7BW from './images/7BW.JPG'
// import img8BW from './images/8BW.JPG'


const text = `
The idea for the picture was born after watching a video where Russian mothers do not believe their sons 
(soldiers) who were capturedin Ukraine. Propaganda turned out to be so effective that even the primordial 
maternal instinct began to fail in women. This is a grotesque reference 
to the popular phrase attributed to Marshal Zhukov 
“Women will give birth to new ones”. 
It expresses the contemptuous attitude of the authorities and generals, 
both to mothers and women in general, and their soldiers.
`

const images = [
  {position: [-4, 0, 2.5], rotation: [0, -0.4, 0], url: [img1, img1bw] , name: 'DANCE OF BIRTH AND DEATH', description: text},
  {position: [4, 0, 2.5], rotation: [0, 0.4, 0], url: [img3, img3BW] , name: 'IMAGE 3', description: text},
  // {position: [2, 0, 2.2], rotation: [0, -0.9, 0], url: [img2, img2BW] , name: 'IMAGE 2', description: text},
  {position: [-1.8, 0, 2.2], rotation: [0, 0.9, 0], url: [img4, img4BW] , name: 'IMAGE 4', description: text},
  // {position: [0, 0, 3.8], rotation: [0, 0, 0], url: [img6, img6BW] , name: 'Image 5', description: text},
  // {position: [2.7, 2, 3], rotation: [0, -0.2, 0], url: [img5, img5BW] , name: 'DANCE OF BIRTH AND DEATH', description: text},
  // {position: [0, 2, 2.5], rotation: [0, 0, 0], url: [img7, img7BW] , name: 'DANCE OF BIRTH AND DEATH', description: text},
  // {position: [-2.7, 2, 3], rotation: [0, 0.2, 0], url: [img8, img7BW] , name: 'DANCE OF BIRTH AND DEATH', description: text},
  
]

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
)
