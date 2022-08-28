import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875

export default function Frame({ url, c = new THREE.Color(), p = new THREE.Vector3(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const wall = useRef()
  const image = useRef()
  const frame = useRef()
  const nameID = getUuid(url)
  const {name, description } = props
  useCursor(hovered)
  
  useFrame((state) => {
    if(wall.current) wall.current.position.lerp(hovered ? p.set(0, GOLDENRATIO / 1.9, 0) : p.set(0, GOLDENRATIO / 2, 0), 0.08)
  })
  return (
    <group {...props}>
      <mesh
        ref={wall}
        name={nameID}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[2, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, GOLDENRATIO/2, 0.7]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} scale={[0.8, GOLDENRATIO/2.2, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.7} anchorX="left" anchorY="top" textAlign='center' position={[1.2, GOLDENRATIO, 0]} fontSize={0.08} color="white" >
        " {name} "
      </Text>
      <Text maxWidth={0.7} anchorX="left" anchorY={0.2} textAlign='left' position={[1.2, GOLDENRATIO, 0]} fontSize={0.058} color="white" whiteSpace='nowrap' clipRect={[, , 0.9, 4]} fillOpacity={0.9} >
        {description}
      </Text>
      {/* <Text maxWidth={0.6} anchorX="left" anchorY={1.3} textAlign='center' position={[1.2, GOLDENRATIO, 0]} fontSize={0.058} color="white">
        Dive In
      </Text>
      <Text maxWidth={0.6} anchorX="left" anchorY={1.4} textAlign='center' position={[1.2, GOLDENRATIO, 0]} fontSize={0.058} color="white">
        View in Black & White
      </Text> */}
      
    </group>
  )
}