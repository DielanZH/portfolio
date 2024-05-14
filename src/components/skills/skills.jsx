import styles from './skills.module.css'
import PropTypes from 'prop-types';

function Skills({ translated }) {
    return (
        <div id='skills' className={styles.skillsContainer}>

            <div className={styles.skillsTittle}>

                <h1>
                    {translated ? 'Habilidades' : 'Skills'}
                </h1>
                <hr></hr>

            </div>


            <p className={styles.skillsText}>
                {translated ? '//Estas son las tecnologias con las que trabajo/ estoy aprendiendo' : '//These are the technologies I work with/am learning'}
            </p>

            <div className={styles.skillSet}>
                <div className={styles.card}>
                    <img src="src\assets\HTML5-logo.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\CSS3_Black.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\JavaScript-logo.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\React-icon.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\Git-logo.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\Node.js_logo.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\Postgresql_elephant.svg" alt="" />
                </div>
                <div className={styles.card}>
                    <img src="src\assets\Tailwind_CSS_Logo.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

Skills.propTypes = {
    translated: PropTypes.bool
}

export default Skills