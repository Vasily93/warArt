import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Loader } from '@react-three/drei'
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

const texts = [
  `
The idea for the picture was born after watching a video where Russian mothers do not believe their sons
(soldiers) who were capturedin Ukraine. Propaganda turned out to be so effective that even the primordial 
maternal instinct began to fail in women. This is a grotesque reference 
to the popular phrase attributed to Marshal Zhukov 
“Women will give birth to new ones”. 
It expresses the contemptuous attitude of the authorities and generals, 
both to mothers and women in general, and their soldiers.
`,
`
A woman covers her son or husband
as a child with a veil of Earth.
She sings her last lullaby.
The artist lived in Crimea for a long time.
The landscape was inspired by the
theme of a quiet and dark Ukrainian
night in Crimea.
`,
`
The painting was created under the
impression of the massacres in Bucha
and other regions of Ukraine.
The victims of the tragedy in Bucha
were shot with hands tied behind their
backs and bags on their heads.
`
]

const images = [
  //left side
  {position: [-4.5, 0, -1.5], rotation: [0, 0.6, 0], url: [img1, img1bw] , name: 'DANCE OF BIRTH AND DEATH', description: texts[0]},
  {position: [-4, 0, 1.5], rotation: [0, 1.5, 0], url: [img7, img7BW] , name: 'DANCE OF BIRTH AND DEATH', description: 'No description yet'},
  //middle
  {position: [0, 0, -2.5], rotation: [0, 0, 0], url: [img6, img6BW] , name: 'ANGEL', description: 'No Description yet'},
  //outer middle
  {position: [1.7, 0, 0], rotation: [0, -0.7, 0], url: [img2, img2BW] , name: 'BUCHA', description: texts[2]},
  {position: [-1.7, 0, 0], rotation: [0, 0.7, 0], url: [img4, img4BW] , name: 'IMAGE 4', description: 'No description yet'},
  //right
  {position: [4.5, 0, -1.5], rotation: [0, -0.6, 0], url: [img3, img3BW] , name: 'IMAGE 3', description: 'No description yet'},
  {position: [4, 0, 1.5], rotation: [0, -1.5, 0], url: [img5, img5BW] , name: 'LAST LULLABY', description: texts[1]},
  
]

createRoot(document.getElementById('root')).render(
  <>
  <Suspense fallback={null}>
    <App images={images} />
  </Suspense>
  <Loader />
  </>
)
