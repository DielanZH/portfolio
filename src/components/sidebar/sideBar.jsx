import styles from './sideBar.module.css'

function SideBar() {
    return (

        <div className={styles.Container}>
            <button className={styles.GitHub}></button>
            <button className={styles.LinkedIn}></button>
            <button className={styles.Mail}></button>
            <button className={styles.PDFicon}></button>
        </div>
    )
}

export default SideBar