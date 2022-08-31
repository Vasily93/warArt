import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRoute, useLocation } from 'wouter'
import Frame from './Frame'
import { callTenTimes } from './helpers'

const GOLDENRATIO = 1.61803398875

export default function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const framesGroup = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  const [isZoomed, toggleZoom] = useState(null)
  console.log(isZoomed)
  useEffect(() => {
    
    if(isZoomed) {
      clicked.current = framesGroup.current.getObjectByName(isZoomed)
      clicked.current?.parent?.updateWorldMatrix(true, true)
      clicked.current?.parent?.localToWorld(p.set(0.4, GOLDENRATIO / 2, 1.25))
      clicked.current?.parent?.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })


  const zoomIn = (e) => {
    console.log(e.object.name)
    clicked.current = framesGroup.current.getObjectByName(e.object.name)

    clicked.current?.parent?.updateWorldMatrix(true, true)
    clicked.current?.parent?.localToWorld(p.set(0.4, GOLDENRATIO / 2, 1.25))
    clicked.current?.parent?.getWorldQuaternion(q)
  }

  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })
  return (
    <group
      ref={framesGroup}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} toggleZoom={toggleZoom} />)}
    </group>
  )
}