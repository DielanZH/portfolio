import { Link } from 'react-router-dom'
import styles from './sideBar.module.css'
import gitHub from "/src/assets/github-mark/github-mark/github-mark-white.svg";
import linkedIn from '/src/assets/LinkedIn.svg';
import mailBG from '/src/assets/mail.svg';
import pdfBG from '/src/assets/PDF.svg';
import { Tooltip } from 'react-tooltip';
import PropTypes from 'prop-types';


function SideBar({ translated }) {
    return (

        <div className={styles.Container}>
            <Link data-tooltip-id="my-tooltip" data-tooltip-content="GitHub" className={styles.GitHub} id='github' to={"https://github.com/DielanZH"} target='blank' style={{ backgroundImage: `url(${gitHub})` }}></Link>
            <Link data-tooltip-id="my-tooltip" data-tooltip-content="LinkedIn" className={styles.LinkedIn} id='linkedin' to={"https://www.linkedin.com/in/daniel-diaz23"} target='blank' style={{ backgroundImage: `url(${linkedIn})` }}></Link>
            <Link data-tooltip-id="my-tooltip" data-tooltip-content="Mail" className={styles.Mail} id='mail' to={"mailto:danieldiaz-123@hotmail.com"} target='blank' style={{ backgroundImage: `url(${mailBG})` }}></Link>
            <Link data-tooltip-id="my-tooltip" data-tooltip-content={translated ? "Curriculum" : "Resume"} className={styles.PDFicon} id='pdficon' to={"https://drive.google.com/file/d/1ZkWp7v0vFU0n5AX_ujMGY6xY5DhW6MhV/view"} target='blank' style={{ backgroundImage: `url(${pdfBG})` }}></Link>
            <hr></hr>
            <Tooltip id="my-tooltip" />
        </div>
    )
}
SideBar.propTypes = {
    translated: PropTypes.bool
}

export default SideBar