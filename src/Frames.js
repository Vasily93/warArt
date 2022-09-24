import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line, Text } from '@react-three/drei'
import { useLocation } from 'wouter'
import Frame from './Frame'

const GOLDENRATIO = 1.61803398875

export default function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const framesGroup = useRef()
  const clicked = useRef()
  const [location, setLocation] = useLocation('')
  const [isZoomed, toggleZoom] = useState(null)
  const [target, changeTarget] = useState(null)
  console.log(location, target)
  useEffect(() => {
    
    if(isZoomed) {
      clicked.current = framesGroup.current.getObjectByName(target)
      clicked.current?.parent?.updateWorldMatrix(true, true)
      clicked.current?.parent?.localToWorld(p.set(0.4, GOLDENRATIO / 2, 1.25))
      clicked.current?.parent?.getWorldQuaternion(q)
    } else {
      p.set(0, 1.3, 6.8)
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
      <Text position={[0, 2.8, 5]} fontSize={0.28} color="white">WORLD AND WAR</Text>
      {images.map((props) => <Frame key={props.url} {...props} isZoomed={isZoomed} toggleZoom={toggleZoom} target={target} changeTarget={changeTarget} />)}
      
    </group>
  )
}