import React from 'react';
import styles from './App.module.scss';
import { Canvas} from '@react-three/fiber'
import Atom from './Atom/Atom';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (<div className={styles.app}>
    <Canvas>
     <ambientLight intensity={0.1} />
    {/* <directionalLight position={[0, 0, 5]} /> */}
    <Atom name='hydrogen'></Atom>
    <OrbitControls makeDefault></OrbitControls>
    </Canvas></div>)
}

export default App;
