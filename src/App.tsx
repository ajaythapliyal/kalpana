import React, { useState } from 'react';
import styles from './App.module.scss';
import { Canvas, useThree} from '@react-three/fiber'
import Atom from './Atom/Atom';
import { OrbitControls } from '@react-three/drei';
import { Menu } from './Menu/Menu';
import { AtomName } from './models';

function App() {

  const [atom, setAtom] = useState<AtomName>('hydrogen')

  return (
  <>
  <div className={styles.header}><p className={styles['header-title']}>KALP</p></div>
    <div className={styles.app}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Atom name={atom}></Atom>
        <OrbitControls></OrbitControls>
        </Canvas>
    </div>
    <Menu atom={atom} onAtomChange={(atom : AtomName)=> setAtom(atom)}></Menu>
  </>)
}

export default App;
