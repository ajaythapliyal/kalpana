import React from 'react';
import styles from './App.module.scss';
import { Canvas, useThree} from '@react-three/fiber'
import Atom from './Atom/Atom';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
  <>
  <div className={styles.header}><p className={styles['header-title']}>KALP</p></div>
    <div className={styles.app}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Atom name='magnesium'></Atom>
        <OrbitControls></OrbitControls>
        </Canvas>
    </div>
  </>)
}

export default App;
