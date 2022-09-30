
export default function TitleShader({positionArr, shaderHeight}) {
  return (
    <mesh raycast={() => null} scale={[2.7, shaderHeight, 0.1]} position={positionArr}>
      <planeGeometry />
      <meshBasicMaterial color='black' transparent={true} opacity={0.4} reflectivity={0}/>
    </mesh>
  )
}