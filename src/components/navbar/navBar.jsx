import styles from './navBar.module.css'

function NavBar() {
    return (
        <>
            <div className={styles.Container}>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SKILLS</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>

                <div className={styles.lightNav}>
                    <p>LN</p>
                    <p>ES</p>
                    <p>EN</p>
                </div>
            </div>
        </>
    )
}

export default NavBar