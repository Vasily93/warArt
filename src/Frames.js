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
  const [target, changeTarget] = useState(null)

  useEffect(() => {
    
    if(isZoomed) {
      clicked.current = framesGroup.current.getObjectByName(target)
      clicked.current?.parent?.updateWorldMatrix(true, true)
      clicked.current?.parent?.localToWorld(p.set(0.4, GOLDENRATIO / 2, 1.25))
      clicked.current?.parent?.getWorldQuaternion(q)
    } else {
      p.set(0, 1, 6.8)
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
      {images.map((props) => <Frame key={props.url} {...props} toggleZoom={toggleZoom} target={target} changeTarget={changeTarget} />)}
    </group>
  )
}