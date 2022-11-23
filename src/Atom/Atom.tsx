import { useFrame, useThree } from "@react-three/fiber"
import { useLayoutEffect, useRef } from "react"
import { colorSubject300, getCustomProperty } from "../util"
import { AtomName } from "../models"
import { Group } from "three"
import { colorSubject100, colorSubject200 } from "./../util"
import { getElectronicConfiguration } from "./atomHelper"

export default function Atom({name} : {name : AtomName}){
    const groupRef = useRef<Group>(null)
    const {camera} = useThree();

    useLayoutEffect(()=>{
        camera.position.y = 2
    })

    useFrame(()=> {
        if(groupRef.current){
            groupRef.current.rotation.y += 0.02
        }
    })

    const calculatePos =  (shellIndex : number, electronSeqNum : number, maxElectronsInShell : number)=>{
        const radius = shellIndex + 1; 
        const angle = (360/maxElectronsInShell) * (electronSeqNum +1)
        return {x : radius * Math.cos(angle * (Math.PI / 180)), y : 0, z : radius * Math.sin(angle * (Math.PI / 180))}
    }

    const electronicConfig = getElectronicConfiguration(name)

    return (
    <group ref={groupRef}>
        <mesh scale={0.75}>
            <sphereGeometry/>
            <meshBasicMaterial color={getCustomProperty(colorSubject100)}/>
        </mesh>
        {
            electronicConfig.map((shellElectrons, shellIndex) => {
                return <>
                <mesh rotation-x={Math.PI / 2}>
                    <torusGeometry args={[shellIndex + 1, 0.01, 30, 200]}></torusGeometry>
                    <meshBasicMaterial color={getCustomProperty(colorSubject300)}/>
                </mesh>
                {new Array(shellElectrons).fill(0).map((electron, index) => {
                    const {x,y,z} = calculatePos(shellIndex, index, shellElectrons)
                    return <mesh key={`${shellIndex}${index}`} position={[x, y, z]} scale={0.1}>
                    <sphereGeometry />
                    <meshBasicMaterial color={getCustomProperty(colorSubject200)}/>
                </mesh>
                })}
                </>
            })
        }
    </group>
    )
    
}


// TODO : size for neutrons and electros are hardcoded. speed of revolution is hardcoded. Radius is hardcoded.