import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { handleScroll } from './helpers'

const GOLDENRATIO = 1.61803398875

export default function Banner({description, name, textOpacity, yAxel, changeY, toggleZoom }) {
  return (
    <>
    <Text maxWidth={0.8} onWheel={(e) => changeY(handleScroll(e, yAxel))} anchorX="left" anchorY={yAxel}
      textAlign='left' position={[1.12, GOLDENRATIO, 0.0001]} fontSize={0.058} color="white"
      clipRect={[, -1.2, , -0.35]} fillOpacity={textOpacity}
    >
        {description}
      </Text>

      <Text maxWidth={0.7} anchorX="left" anchorY="top" textAlign='center' position={[1.1, GOLDENRATIO-0.05, 0.03]} fontSize={0.08} color="white"  fillOpacity={textOpacity}>
        " {name} "
      </Text>
      
      <Text onClick={() => toggleZoom(null)} maxWidth={0.7} anchorX="left" anchorY={1.2} textAlign='center' position={[1.33, GOLDENRATIO-0.05, 0.03]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
        Zoom Out
      </Text>

      {/* <Text onClick={()=> changeUrl(currentUrl === colored ? blackAndWhite : colored)} maxWidth={0.7} anchorX="left" anchorY={1.3} textAlign='center' position={[1, GOLDENRATIO, 0.3]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
       {currentUrl === colored? 'Vew in Black & White' : 'Vew in Color'}
      </Text>  */}
    </>
  )

}