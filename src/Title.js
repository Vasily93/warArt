import { Text } from '@react-three/drei'
const font = 'https://fonts.cdnfonts.com/s/83703/TiffanyLaurenceRegular-MVlpP.woff'
import TitleShader from './TitleShaders'

export default function Title({currentScreen}) {
  const shaderX = currentScreen[2]+0.15
  return (
    <>
      <TitleShader positionArr={[0,shaderX, 4.51]} shaderHeight={0.1} />
      <TitleShader positionArr={[0,shaderX-0.03, 4.52]} shaderHeight={0.15} />
      <TitleShader positionArr={[0,shaderX-0.06, 4.53]} shaderHeight={0.2} />
      <TitleShader positionArr={[0,shaderX-0.09, 4.54]} shaderHeight={0.25} />
      <Text position={[0, currentScreen[2], 4.5]} font={font} fontSize={0.38}>WORLD AND WAR</Text>
    </>
  )
}