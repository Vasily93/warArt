import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment } from '@react-three/drei'
import Frames from './Frames'

export default function App({ images }) {
  return (
    <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      <color args={['black']} />
      <Environment preset='apartment' />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300,70]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </group>
    </Canvas>
  )
}


