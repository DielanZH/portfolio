import { Link } from 'react-router-dom'
import styles from './sideBar.module.css'
import gitHub from "/src/assets/github-mark/github-mark/github-mark-white.svg";

function SideBar() {
    return (

        <div className={styles.Container}>
            <Link className={styles.GitHub} id='github' to={"https://github.com/DielanZH"} target='blank' style={{backgroundImage: `url(${gitHub})`}}></Link>
            <Link className={styles.LinkedIn} id='linkedin' to={"https://www.linkedin.com/in/daniel-diaz23"} target='blank'></Link>
            <Link className={styles.Mail} id='mail' to={"mailto:danieldiaz-123@hotmail.com"} target='blank'></Link>
            <Link className={styles.PDFicon} id='pdficon' to={"https://drive.google.com/file/d/1ZkWp7v0vFU0n5AX_ujMGY6xY5DhW6MhV/view"} target='blank'></Link>
            <hr></hr>
        </div>
    )
}

export default SideBar