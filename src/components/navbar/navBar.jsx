import styles from './navBar.module.css'

function NavBar() {

    let prevScroll = window.pageYOffset;

    window.onscroll = () => {
        let currScroll = window.pageYOffset;
        if (prevScroll > currScroll) {
            document.querySelector(`.${styles.Container}`).style.top = "0"
            console.log(prevScroll)
        } else {
            document.querySelector(`.${styles.Container}`).style.top = "-100px"
        }
        prevScroll = currScroll;
    }

    return (
        <>
            <div className={styles.Container}>

                <div className={styles.boldNav}>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SKILLS</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>
                </div>

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