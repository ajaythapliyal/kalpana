import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { getCustomProperty } from "../util"
import { AtomName } from "../models"
import { Group } from "three"
import { colorSubject100, colorSubject200 } from "./../util"

export default function Atom(props : {name : AtomName}){
    const groupRef = useRef<Group>(null)
    useFrame(()=> {
        if(groupRef.current){
            groupRef.current.rotation.y += 0.04
        }
    })

    return (
    <group ref={groupRef}>
        <mesh>
            <sphereGeometry/>
            <meshBasicMaterial color={getCustomProperty(colorSubject100)}/>
        </mesh>
        <mesh position={[1.5, 0, 0]} scale={0.1}>
            <sphereGeometry/>
            <meshBasicMaterial color={getCustomProperty(colorSubject200)}/>
        </mesh>
        <mesh position={[-1.5, 0, 0]} scale={0.1}>
            <sphereGeometry/>
            <meshBasicMaterial color={getCustomProperty(colorSubject200)}/>
        </mesh>
    </group>
    )
}