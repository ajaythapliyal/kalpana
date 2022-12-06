import { useState } from 'react'
import { Autocomplete } from '../Autocomplete/Autocomplete'
import { AtomName, atoms } from '../models'
import Toggle from '../Toggle/Toggle'
import styles from './Menu.module.scss'

export function Menu({atom, isAtomRotate, onAtomChange, onRotateToggle} : {atom: AtomName, isAtomRotate: boolean, onAtomChange: (atomName : AtomName)=>void, onRotateToggle: (toggleState : boolean)=> void}){
    const onAtomSelect = (atomName : AtomName)=>{
        onAtomChange(atomName);
    }

    return <div className={styles.menu}>
        <p className={`${styles['menu-title']} ${styles.label}`}>Atomic Structure</p>
        <Autocomplete defaultItem={atom} items={atoms} onItemSelect={(atomName)=> onAtomSelect(atomName as AtomName)} placeholder="eg Oxygen, Carbon"></Autocomplete>
        <Toggle toggleState={isAtomRotate} handleToggle={onRotateToggle}></Toggle>
    </div>
}