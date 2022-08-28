import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import img1 from './images/1.JPG'
import img2 from './images/6.JPG'

const text = `
The idea for the picture
was born after watching
a video where Russian mothers
do not believe their sons 
(soldiers) who were captured
in Ukraine.
Propaganda turned out to be so
effective that even the primordial 
maternal instinct began to
fail in women.
This is a grotesque reference 
to the popular phrase attributed to 
Marshal Zhukov 
“Women will give birth to new ones”. 
It expresses the contemptuous attitude
of the authorities and generals, 
both to mothers and women in general,
and their soldiers
`

const images = [
  {position: [1, 0, 1.5], rotation: [0, 0, 0], url: img1 , name: 'DANCE OF BIRTH AND DEATH', description: text},
  // {position: [-1, 0, 1.5], rotation: [0, 0, 0], url: img2 },
]

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
)
