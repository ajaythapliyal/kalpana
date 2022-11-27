import { useEffect, useState } from 'react'
import { AtomName, atoms } from '../models'
import styles from './Menu.module.scss'

export function Menu({atom, onAtomChange} : {atom: AtomName, onAtomChange: (atomName : AtomName)=>void}){
    const [atomStored, setAtomStored] = useState(atom)

    useEffect(()=> onAtomChange(atomStored), [atomStored, onAtomChange])

    return <div className={styles.menu}>
        <p className={`${styles['menu-title']} ${styles.label}`}>Atomic Structure</p>
        <div>
        <label className={styles.label}>Atom: </label>
        <select defaultValue={atomStored} className={styles['atom-input']} onChange={(e)=>setAtomStored(e.target.value as AtomName)}>
            {atoms.map(singleAtom => <option className={styles['atom-option']} key={singleAtom} value={singleAtom}>{singleAtom}</option>)}
        </select>
        </div>
        
    </div>
}