import styles from './Display.module.css'
let Display = ({ calVal }) => {
    return (
        <input type="text" id={styles.display} name="" value={calVal} readOnly />
    )
}

export default Display