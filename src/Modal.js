import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'
const font = 'https://fonts.cdnfonts.com/s/83703/TiffanyLaurenceRegular-MVlpP.woff'

export default function Modal({ showInfo }) {
  const [yOffset, setYoffset] = useState(4.5)

  useFrame((state) => {
    if(showInfo && yOffset > 1.8) setYoffset(yOffset-0.1)
    if(showInfo === false && yOffset < 4.5) setYoffset(yOffset+0.1)
  })

  return (
    <>
      <mesh raycast={() => null} scale={[4.8, 2.4, 0.1]} position={[0, yOffset, 4.9]}>
        <planeGeometry />
        <meshBasicMaterial color='black' transparent={true} opacity={0.97} reflectivity={0}/>
      </mesh>
      <Text position={[0, yOffset+1, 5]} font={font} fontSize={0.18}>Art by Elena Markova</Text>
    </>
  )
}