/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 scene.gltf 
Author: Sabrina Zakir (https://sketchfab.com/sabrinazakir123)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-appa-3e83555f12354bac8e149e41ba149e00
Title: Cute Appa
*/

import React, { useRef, useLayoutEffect} from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import gsap from "gsap";
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef()

  const { nodes, materials,animations } = useGLTF('./cute_appa/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const appa = useRef();
  const scroll = useScroll();
  const tl = useRef();
  useFrame((state,delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())

  })

  useLayoutEffect(()=>{
    tl.current = gsap.timeline({defaults:{duration:2,ease:"power1.inOut"}})
    tl.current
      .to(appa.current.rotation, {y:-1})
      .to(appa.current.rotation, {y:-3})
      .to(appa.current.rotation, {y:-6.5})
  },[])
  return (
    <group ref={group,appa} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_7} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_6} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_5} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_4} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.material_1} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('./cute_appa/scene.gltf')
