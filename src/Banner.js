import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text,  } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { handleScroll } from './helpers'

const GOLDENRATIO = 1.61803398875
const font = 'https://fonts.cdnfonts.com/s/83703/TiffanyLaurenceRegular-MVlpP.woff'

export default function Banner({description, name, textOpacity, yAxel, changeY, toggleZoom, handleImageChange, urlIndex }) {
  let colorText = urlIndex === 0 ? 'B & W' : 'Color'
  const minY = -1.2
  const maxY = -0.35

  function handleZoomOut() {
    toggleZoom(null)
    changeY(0.3)
  }

  const desText = <Text 
    maxWidth={0.8} onWheel={handleScrollEvent}
    anchorX="left" anchorY={yAxel}
    textAlign='left' position={[1.12, GOLDENRATIO, 0.0001]}
    fontSize={0.078} color="white" font={font}
    clipRect={[, minY, , maxY]} fillOpacity={textOpacity} 
    lineHeight={1.3}
    >
      {description}
    </Text>

  function handleScrollEvent(e) {
    changeY(handleScroll(e, yAxel))
  }

  return (
    <>
    

      <Text maxWidth={0.8} anchorX="left" anchorY="top" textAlign='center' position={[1.1, GOLDENRATIO-0.05, 0.03]} fontSize={0.09} color="white"  fillOpacity={textOpacity} font={font}>
        " {name} "
      </Text>

      {desText}
      
      <Text onClick={handleZoomOut} maxWidth={0.7} anchorX="left" anchorY={1.2} textAlign='center' position={[1.33, GOLDENRATIO-0.07, 0.03]} fontSize={0.07} color="white" fillOpacity={textOpacity} font={font}>
        Zoom Out
      </Text>

      <Text onClick={handleImageChange} maxWidth={0.7} anchorX="left" anchorY={1.3} textAlign='center' position={[1.28, GOLDENRATIO-0.15, 0.03]} fontSize={0.07} color="white" fillOpacity={textOpacity} font={font}>
       View In {colorText}
      </Text> 
      
    </>
  )

}