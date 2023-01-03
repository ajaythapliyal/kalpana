import styles from './Toggle.module.scss';

export default function Toggle({toggleState, handleToggle} : {toggleState : boolean, handleToggle: (state : boolean)=> void}){

  return <div className={styles.container}>
    <p>Rotate</p>
    <div onClick={()=>handleToggle(!toggleState)} className={`${styles['switch-container']} ${toggleState ?  styles.active: styles.inactive}`}>
      <div className={styles.switch}></div>
    </div>
  </div>
  
}