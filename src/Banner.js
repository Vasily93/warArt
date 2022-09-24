import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text, Line } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { handleScroll } from './helpers'

const GOLDENRATIO = 1.61803398875

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
    fontSize={0.058} color="white"
    clipRect={[, minY, , maxY]} fillOpacity={textOpacity} 
    >
      {description}
    </Text>

  function handleScrollEvent(e) {
    changeY(handleScroll(e, yAxel))
    console.log(desText)
  }

  return (
    <>
    

      <Text maxWidth={0.7} anchorX="left" anchorY="top" textAlign='center' position={[1.1, GOLDENRATIO-0.05, 0.03]} fontSize={0.08} color="white"  fillOpacity={textOpacity}>
        " {name} "
      </Text>

      {desText}
      
      <Text onClick={handleZoomOut} maxWidth={0.7} anchorX="left" anchorY={1.2} textAlign='center' position={[1.33, GOLDENRATIO-0.07, 0.03]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
        Zoom Out
      </Text>

      <Text onClick={handleImageChange} maxWidth={0.7} anchorX="left" anchorY={1.3} textAlign='center' position={[1.28, GOLDENRATIO-0.15, 0.03]} fontSize={0.058} color="white" fillOpacity={textOpacity}>
       View In {colorText}
      </Text> 
    </>
  )

}