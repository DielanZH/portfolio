import styles from './skills.module.css'
function Skills() {
    return (
        <div id='skills' className={styles.skillsContainer}>
            <h1>
                Habilidades
            </h1>
            <p className={styles.skillsText}>
                {"//Estas son las tecnologias con las que trabajo/ estoy aprendiendo"}
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

export default Skills