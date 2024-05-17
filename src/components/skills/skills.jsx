import styles from './skills.module.css'
import PropTypes from 'prop-types';
import HTML5 from "/src/assets/HTML5-logo.svg";
import CSS3 from "/src/assets/CSS3_Black.svg";
import JSLogo from "/src/assets/JavaScript-logo.svg";
import ReactLogo from "/src/assets/React-icon.svg";
import GitLogo from "/src/assets/Git-logo.svg";
import NodeJSLogo from "/src/assets/Node.js_logo.svg";
import PostgreLogo from "/src/assets/Postgresql_elephant.svg";
import TailwindLogo from "/src/assets/Tailwind_CSS_Logo.svg";

function Skills({ translated }) {
    return (
        <div id='skills' className={styles.skillsContainer}>

            <div className={styles.skillsTittle}>

                <h1>
                    {translated ? 'Habilidades' : 'Skills'}
                </h1>
                <hr style={translated? {width:'13.9rem'} : {width:'6rem'}}></hr>

            </div>


            <p className={styles.skillsText}>
                {translated ? '//Estas son las tecnologias con las que trabajo/ estoy aprendiendo' : '//These are the technologies I work with/am learning'}
            </p>

            <div className={styles.skillSet}>
                <div className={styles.card}>
                    <img src={HTML5} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={CSS3} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={JSLogo} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={ReactLogo} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={GitLogo} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={NodeJSLogo} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={PostgreLogo} alt="" />
                </div>
                <div className={styles.card}>
                    <img src={TailwindLogo} alt="" />
                </div>
            </div>

        </div>
    )
}

Skills.propTypes = {
    translated: PropTypes.bool
}

export default Skills