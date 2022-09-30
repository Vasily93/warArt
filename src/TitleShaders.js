
export default function TitleShader({titleHeight, shaderHeight}) {
  return (
    <mesh raycast={() => null} scale={[2.7, shaderHeight, 0.1]} position={[0, titleHeight+0.1, 4.62]}>
      <planeGeometry />
      <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
    </mesh>
  )
}