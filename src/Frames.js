import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { preloadFont } from 'troika-three-text'
import { useLocation } from 'wouter'
import Frame from './Frame'

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

  const infoModal = 
  <>
  <mesh raycast={() => null} scale={[4.8, 2.4, 0.1]} position={[0, 1.8, 4.9]}>
    <planeGeometry />
    <meshBasicMaterial color='black' transparent={true} opacity={0.97} reflectivity={0}/>
  </mesh>
  <Text position={[0, 3, 4.9]} font={font} fontSize={0.18}>Art by Elena Markova</Text>
  </>

  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })
  return (
    <group
      ref={framesGroup}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      <mesh raycast={() => null} scale={[2.65, 0.05, 0.1]} position={[0, 2.98, 4.6]}>
        <planeGeometry />
        <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
      </mesh> 
      <mesh raycast={() => null} scale={[2.65, 0.1, 0.1]} position={[0, 2.96, 4.6]}>
        <planeGeometry />
        <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
      </mesh>
      <mesh raycast={() => null} scale={[2.65, 0.2, 0.1]} position={[0, 2.96, 4.61]}>
        <planeGeometry />
        <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
      </mesh>
      <mesh raycast={() => null} scale={[2.65, 0.3, 0.1]} position={[0, 2.96, 4.62]}>
        <planeGeometry />
        <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
      </mesh>
      {showInfo ? infoModal : null}
      <Text position={[0, currentScreen[2], 4.5]} font={font} fontSize={0.38}>WORLD AND WAR</Text>
      <Text onClick={() => changeInfo(!showInfo)} position={[2.8, 0.2, 4.5]} font={font} fontSize={0.1}>INFO</Text>
      {images.map((props) => <Frame key={props.url} {...props} isZoomed={isZoomed} toggleZoom={toggleZoom} target={target} changeTarget={changeTarget} />)}
      
    </group>
  )
}