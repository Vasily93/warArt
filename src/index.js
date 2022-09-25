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
import img1bw from './images/8.JPG'
import img2BW from './images/2BW.JPG'
import img3BW from './images/3BW.JPG'
import img4BW from './images/4BW.JPG'
import img5BW from './images/5BW.JPG'
import img6BW from './images/6BW.JPG'
import img7BW from './images/7BW.JPG'
import texts from './texts'

const images = [
  //left side
  {position: [-4.5, 0, -1.5], rotation: [0, 0.6, 0], url: [img1, img1bw] , name: 'DANCE OF BIRTH AND DEATH', description: texts[0]},
  {position: [-4, 0, 1.5], rotation: [0, 1.5, 0], url: [img7, img7BW] , name: 'ROLLING UP THE SCROLL OF LIFE', description: texts[5]},
  //middle
  {position: [0, 0, -2.5], rotation: [0, 0, 0], url: [img6, img6BW] , name: 'EARTH AND SKY', description: texts[3]},
  //outer middle
  {position: [1.7, 0, 0], rotation: [0, -0.7, 0], url: [img2, img2BW] , name: 'SIGHTLESS', description: texts[2]},
  {position: [-1.7, 0, 0], rotation: [0, 0.7, 0], url: [img4, img4BW] , name: 'DISINCARNATION', description: texts[6]},
  //right
  {position: [4.5, 0, -1.5], rotation: [0, -0.6, 0], url: [img3, img3BW] , name: 'REFLECTION OF SORROW', description: texts[4]},
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
