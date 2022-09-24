import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment } from '@react-three/drei'
import ScreenSizeDetector from 'screen-size-detector'
import Frames from './Frames'

export default function App({ images }) {
  const screen = new ScreenSizeDetector()

  const currentDevice = Object.entries(screen?.is).filter(arr => arr[1] === true)[0][0]
  const screens = {
    'desktop': [1.6, 7, 2.8],
    'laptop': [1.7, 7.5, 3.2],
    'largedesktop': [1.3, 7, 2.9],
    'mobile': [1.7, 7, 2.8],
    'smartwatch': [1.7, 7, 2.8],
    'tablet': [1.4, 7, 2.8],
  }
  const currentScreen = screens[currentDevice]
  console.log(currentDevice)
  const canvas = currentDevice !== 'mobile' ?
  <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 10] }}>
    <color args={['black']} />
      <Environment preset='apartment' />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} currentScreen={currentScreen} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300,70]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={0.9}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
            />
        </mesh>
      </group>
    </Canvas>
    : <h1>Not Optimized for Mobile</h1>
  return (
    <>
    {canvas}
    </>
  )
}


