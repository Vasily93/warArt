import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import getUuid from 'uuid-by-string'
import { handleScroll } from './helpers'

const GOLDENRATIO = 1.61803398875

export default function Banner({textOpacity}) {
  return (
    <Text maxWidth={0.7} anchorX="left" anchorY="top" textAlign='center' position={[1.1, GOLDENRATIO, 0.03]} fontSize={0.08} color="white"  fillOpacity={textOpacity}>
        "Here is The Name!"
      </Text>
  )

}