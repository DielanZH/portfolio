import styles from './navBar.module.css';
import PropTypes from 'prop-types';

function NavBar({ setTranslated, translated }) {

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (sectionId, offset) => {
        const section = document.getElementById(sectionId);

        const posTop = section.offsetTop - offset;

        section.scrollIntoView({

            top: posTop,
            behavior: 'smooth',
        });

        document.querySelector(`.${styles.Container}`).style.top = "-100px"
    };

    return (
        <>
            <div className={styles.Container}>

                <div className={styles.boldNav}>
                    <p className={styles.navBarBtn} onClick={scrollToTop}>HOME</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('about')}>ABOUT</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('skills')}>SKILLS</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('projects')}>PROJECTS</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('contact')}>CONTACT</p>
                </div>

                <div className={styles.lightNav}>
                    <p>LN</p>

                    <p className={styles.navBarBtn} onClick={() => setTranslated(!translated)}>
                        {translated ? 'ES' : 'ENG'}
                    </p>
                </div>
            </div>
        </>
    )
}

NavBar.propTypes = {
    setTranslated: PropTypes.func,
    translated: PropTypes.func
}

export default NavBar