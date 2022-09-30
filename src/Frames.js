import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useLocation } from 'wouter'
import Frame from './Frame'
import Title from './Title'
import Modal from './Modal'

const GOLDENRATIO = 1.61803398875
const font = 'https://fonts.cdnfonts.com/s/83703/TiffanyLaurenceRegular-MVlpP.woff'


export default function Frames({ images, currentScreen, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const framesGroup = useRef()
  const clicked = useRef()
  const [location, setLocation] = useLocation('')
  const [isZoomed, toggleZoom] = useState(null)
  const [target, changeTarget] = useState(null)
  const [showInfo, changeInfo] = useState(false)
  
  useEffect(() => {  
    if(isZoomed) {
      clicked.current = framesGroup.current.getObjectByName(target)
      clicked.current?.parent?.updateWorldMatrix(true, true)
      clicked.current?.parent?.localToWorld(p.set(0.4, GOLDENRATIO / 2, currentScreen[0]))
      clicked.current?.parent?.getWorldQuaternion(q)
    } else {
      p.set(0, 1.3, currentScreen[1])
      q.identity()
    }
  })

  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })

  return (
    <group
      ref={framesGroup}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      <Modal showInfo={showInfo} />
      <Title currentScreen={currentScreen} />
      <Text onClick={() => changeInfo(!showInfo)} position={[0, 0.2, 4.5]} font={font} fontSize={0.1}>{showInfo ? 'Close':'Info'}</Text>
      {images.map((props) => <Frame key={props.url} {...props} isZoomed={isZoomed} toggleZoom={toggleZoom} target={target} changeTarget={changeTarget} />)}
      
    </group>
  )
}