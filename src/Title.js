import { Text } from '@react-three/drei'
const font = 'https://fonts.cdnfonts.com/s/83703/TiffanyLaurenceRegular-MVlpP.woff'
import TitleShader from './TitleShaders'

export default function Title({currentScreen}) {
  return (
    <>
      <TitleShader titleHeight={currentScreen[2]} shaderHeight={0.1} />
      <TitleShader titleHeight={currentScreen[2]-0.03} shaderHeight={0.15} />
      <TitleShader titleHeight={currentScreen[2]-0.06} shaderHeight={0.2} />
      <TitleShader titleHeight={currentScreen[2]-0.09} shaderHeight={0.25} />
      <Text position={[0, currentScreen[2], 4.5]} font={font} fontSize={0.38}>WORLD AND WAR</Text>
    </>
  )
}