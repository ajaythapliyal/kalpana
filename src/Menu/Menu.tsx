import { useEffect, useState } from 'react'
import { Autocomplete } from '../Autocomplete/Autocomplete'
import { AtomName, atoms } from '../models'
import styles from './Menu.module.scss'

export function Menu({atom, onAtomChange} : {atom: AtomName, onAtomChange: (atomName : AtomName)=>void}){
    const [atomStored, setAtomStored] = useState(atom)
    const onAtomSelect = (atomName : AtomName)=>{
        setAtomStored(atomName);
        onAtomChange(atomName)
    }

    return <div className={styles.menu}>
        <p className={`${styles['menu-title']} ${styles.label}`}>Atomic Structure</p>
        <Autocomplete defaultItem={atomStored} items={atoms} onItemSelect={(atomName)=> onAtomSelect(atomName as AtomName)}></Autocomplete>
    </div>
}