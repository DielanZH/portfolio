import styles from './navBar.module.css';
import PropTypes from 'prop-types';

function NavBar({ setTranslated, translated }) {

    let prevScroll = window.pageYOffset;

    window.onscroll = () => {
        let currScroll = window.pageYOffset;
        if (prevScroll > currScroll) {
            document.querySelector(`.${styles.Container}`).style.top = "0"
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

                <div className={translated ? styles.boldNavES : styles.boldNav}>
                    <p className={styles.navBarBtn} onClick={scrollToTop}>{translated ? 'INICIO' : 'HOME'}</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('about')}>{translated ? 'SOBRE MI' : 'ABOUT'}</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('skills')}>{translated ? 'HABILIDADES' : 'SKILLS'}</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('projects')}>{translated ? 'PROYECTOS' : 'PROJECTS'}</p>
                    <p className={styles.navBarBtn} onClick={() => scrollToSection('contact')}>{translated ? 'CONTACTO' : 'CONTACT'}</p>
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
    translated: PropTypes.bool
}

export default NavBar