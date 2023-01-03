import { useState } from 'react';
import styles from './App.module.scss';
import { Canvas} from '@react-three/fiber'
import Atom from './Atom/Atom';
import { OrbitControls } from '@react-three/drei';
import { Menu } from './Menu/Menu';
import { AtomName } from './models';

function App() {

  const [atom, setAtom] = useState<AtomName>('hydrogen');
  const [isAtomRotate, setAtomIsRotate] = useState(true);

  return (
  <>
  <span className={styles['header-title']}>KALP</span>
  <div className={styles.app}>
    <div className={styles.canvas}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Atom name={atom} isAtomRotate={isAtomRotate}></Atom>
        <OrbitControls></OrbitControls>
        </Canvas>
    </div>
    <Menu atom={atom} isAtomRotate={isAtomRotate} onAtomChange={(atom : AtomName)=> setAtom(atom)} onRotateToggle={(toggleState)=> setAtomIsRotate(toggleState)}></Menu>
    </div>
  </>)
}

export default App;
