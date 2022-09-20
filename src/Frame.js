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
  const [ yAxel, changeY] = useState(0)
  const [finishedZoom, toggleFinishedZoom] = useState(false)
  const [colored, blackAndWhite] = url
  const [currentUrl, changeUrl] = useState(colored)
  const nameID = getUuid(url[0])
  const wall = useRef()
  const [textOpacity, changeOpacity] = useState(0)
  const image = useRef()
  const frame = useRef()
  const {name, description } = props
  

  useFrame((state) => {
    if(wall.current && !finishedZoom) wall.current.position.lerp(hovered ? p.set(0, GOLDENRATIO / 1.9, 0) : p.set(0, GOLDENRATIO / 2, 0), 0.1)
    if(finishedZoom && textOpacity < 0.8) changeOpacity(textOpacity+0.03)
    if(!finishedZoom && textOpacity > 0) changeOpacity(textOpacity-0.03)
    if(state.camera.position.z < 4.2) toggleFinishedZoom(true)
    if(state.camera.position.z > 3.9 && finishedZoom) toggleFinishedZoom(false)
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

        <mesh ref={frame} raycast={() => null} scale={[0.5, 1, 0.1]} position={[0.8, 0, 0]}>
          <planeGeometry />
          <meshBasicMaterial color='#212120' transparent={true} opacity={textOpacity}/>
        </mesh>
        {/* <mesh ref={frame} raycast={() => null} scale={[0.51, 0.3, 0.1]} position={[0.8, 0.5, 0.01]}>
          <planeGeometry />
          <meshBasicMaterial color='#171716' transparent={true} opacity={textOpacity}/>
        </mesh>
        <mesh ref={frame} raycast={() => null} scale={[0.51, 0.3, 0.1]} position={[0.8, -0.4, 0.01]}>
          <planeGeometry />
          <meshBasicMaterial color='#171716' transparent={true} opacity={textOpacity}/>
        </mesh> */}
      </mesh>
      {target === nameID ?
      <Banner  description={description} name={name} yAxel={yAxel} changeY={changeY} textOpacity={textOpacity} toggleZoom={toggleZoom} />
      :null}
    </group>
  )
}

