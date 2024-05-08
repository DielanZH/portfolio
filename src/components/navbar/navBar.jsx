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
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={styles.Container}>

                <div className={styles.boldNav}>
                    <p onClick={scrollToTop}>HOME</p>
                    <p onClick={() => scrollToSection('about', 20)}>ABOUT</p>
                    <p onClick={() => scrollToSection('skills', 20)}>SKILLS</p>
                    <p onClick={() => scrollToSection('projects', 20)}>PROJECTS</p>
                    <p onClick={() => scrollToSection('contact')}>CONTACT</p>
                </div>

                <div className={styles.lightNav}>
                    <p>LN</p>

                    <button onClick={() => setTranslated(!translated)}>
                        {translated ? 'ES' : 'ENG'}
                    </button>
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