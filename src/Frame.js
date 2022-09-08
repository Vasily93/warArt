import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { handleScroll } from './helpers'
import Banner from './Banner'

const GOLDENRATIO = 1.61803398875

export default function Frame({ url, c = new THREE.Color(), p = new THREE.Vector3(),toggleZoom, target, changeTarget, framesGroup, ...props }) {
  const [hovered, hover] = useState(false)
  const [ yAxel, changeY] = useState(0.2)
  const [colored, blackAndWhite] = url
  const [currentUrl, changeUrl] = useState(colored)
  const nameID = getUuid(url[0])
  const wall = useRef()
  const [textOpacity, changeOpacity] = useState(0)
  const image = useRef()
  const frame = useRef()
  const {name, description } = props
  
  useFrame((state) => {
    if(wall.current) wall.current.position.lerp(hovered ? p.set(0, GOLDENRATIO / 1.9, 0) : p.set(0, GOLDENRATIO / 2, 0), 0.08)
    changeOpacity( 1-(state.camera.position.z - wall.current.position.z)/10 - 0.5)
  })

  return (
    <group {...props}>
      <mesh
        ref={wall}
        name={nameID}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        onClick={(e) => {changeTarget(e.object.name); toggleZoom(true)}}
        scale={[2, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
          
        <boxGeometry />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, GOLDENRATIO/2, 0.7]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
          <Image raycast={() => null} ref={image} position={[0, 0, currentUrl === colored ? 0.7:0.5]} scale={[0.8, GOLDENRATIO/2.2, 0.7]} url={colored} />
          <Image raycast={() => null} ref={image} position={[0, 0, currentUrl === blackAndWhite ? 0.7:0.5]} scale={[0.8, GOLDENRATIO/2.2, 0.7]} url={blackAndWhite} />

        {target ? 
        <>
        <mesh ref={frame} raycast={() => null} scale={[1.2, 0.4, 0.2]} position={[0.4, 0.5, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false}  color='black' opacity={textOpacity}/>
        </mesh>
        <mesh ref={frame} raycast={() => null} scale={[1.2, 0.4, 0.2]} position={[0.4, -0.45, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false}  color='black' opacity={textOpacity}/>
        </mesh>
        </>
        : null}
      </mesh>

      { nameID === target ? <>
      <Text maxWidth={0.8} onWheel={(e) => changeY(handleScroll(e, yAxel))} anchorX="left" anchorY={yAxel} textAlign='left' position={[1.2, GOLDENRATIO, -0.1]} fontSize={0.058} color="white"  clipRect={[,, 1, 1]} fillOpacity={textOpacity}>
        {description}
      </Text>

      <Text maxWidth={0.7} anchorX="left" anchorY="top" textAlign='center' position={[1.1, GOLDENRATIO, 0.03]} fontSize={0.08} color="white"  fillOpacity={textOpacity}>
        " {name} "
      </Text>
      
      <Text onClick={() => toggleZoom(null)} maxWidth={0.7} anchorX="left" anchorY={1.2} textAlign='center' position={[1, GOLDENRATIO, 0.3]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
        Zoom Out
      </Text>

      <Text onClick={()=> changeUrl(currentUrl === colored ? blackAndWhite : colored)} maxWidth={0.7} anchorX="left" anchorY={1.3} textAlign='center' position={[1, GOLDENRATIO, 0.3]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
       {currentUrl === colored? 'Vew in Black & White' : 'Vew in Color'}
      </Text> 
      </>
      :null }
    </group>
  )
}