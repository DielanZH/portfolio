import { Link } from 'react-router-dom'
import styles from './sideBar.module.css'

function SideBar() {
    return (

        <div className={styles.Container}>
            <Link className={styles.GitHub} to={"https://github.com/DielanZH"} target='blank'></Link>
            <Link className={styles.LinkedIn} to={"https://www.linkedin.com/in/daniel-diaz23"} target='blank'></Link>
            <Link className={styles.Mail} to={"mailto:danieldiaz-123@hotmail.com"} target='blank'></Link>
            <Link className={styles.PDFicon} to={"https://drive.google.com/file/d/1ZkWp7v0vFU0n5AX_ujMGY6xY5DhW6MhV/view"} target='blank'></Link>
            <hr></hr>
        </div>
    )
}

export default SideBar