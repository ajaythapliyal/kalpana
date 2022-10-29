import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { getCustomProperty } from "../util"
import { AtomName } from "../models"
import { Group } from "three"
import { colorSubject100, colorSubject200 } from "./../util"
import { getElectronicConfiguration } from "./atomHelper"

export default function Atom({name} : {name : AtomName}){
    const groupRef = useRef<Group>(null)
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
                return new Array(shellElectrons).fill(0).map((electron, index) => {
                    const {x,y,z} = calculatePos(shellIndex, index, shellElectrons)
                    return <mesh position={[x, y, z]} scale={0.1}>
                    <sphereGeometry />
                    <meshBasicMaterial color={getCustomProperty(colorSubject200)}/>
                </mesh>
                })
            })
        }
    </group>
    )
    
}


// TODO : size for neutrons and electros are hardcoded. speed of revolution is hardcoded. Radius is hardcoded.