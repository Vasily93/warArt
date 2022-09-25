import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import {Image } from '@react-three/drei'

const GOLDENRATIO = 1.61803398875

export default function Painting({image, url, urlIndex }) {

  useFrame((state) => {

  })

  return (
    <>
    <Image raycast={() => null} ref={image} position={[0, 0, urlIndex === 0 ? 0.7: 0.6]} scale={[0.8, GOLDENRATIO/2.2, 0.7]} url={url[0]} />
    <Image raycast={() => null} ref={image} position={[0, 0, urlIndex === 1 ? 0.7: 0.6]} scale={[0.8, GOLDENRATIO/2.2, 0.7]} url={url[1]} />
    </>
  )
}

