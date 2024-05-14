import styles from './projects.module.css'

function Projects() {
    return (

        <div id='projects' className={styles.projectsContainer}>

            <h1 className={styles.projectWelcome}>Proyectos</h1>

            <p className={styles.projectText}>
                {"//Mira los proyectos en los que trabajé recientemente"}
            </p>

            <h2 className={styles.projectTittle}> App de recetas</h2>
            <div className={styles.Cards}>

                <p className={styles.description}>Una SPA que consume datos de una API externa, y permite la visualización de información general y detallada de más de 500,000 recetas, entre las funcionalidades que dispone esta APP está el filtrado y ordenamiento de recetas por diferentes variables como si son traidos de la API o la DB, healthscore, nombre, calificación, además de la creación de nuevas recetas mediante un formulario controlado.</p>

                <img src="src\components\projects\images\recipes.png" alt="" />

                <p className={styles.tecnologies}>
                    JavaScript
                    React.js
                    Redux.js
                    <br></br>
                    Node.js
                    Express
                    PostgreSQL
                    <br></br>
                    Styled Components
                    Spoonacular-API
                </p>
                <button className={styles.GitHub}></button>
                <button className={styles.Deploy}></button>

            </div>


            <h2 className={styles.projectTittle} id={styles.cornerTittle}> Component-corner</h2>
            <div className={styles.Cards} id={styles.corner}>

                <p className={styles.description}>Una SPA que consume datos de una API externa, y permite la visualización de información general y detallada de más de 500,000 videojuegos, entre las funcionalidades que dispone esta APP está el filtrar y ordenar videojuegos por diferentes variables como género, plataformas, nombre, calificación, además de la creación de nuevos videojuegos, mediante un formulario controlado.</p>

                <img src="src\components\projects\images\component-corner.png" alt="" />

                <p className={styles.tecnologies}>
                    JavaScript
                    Node.js
                    React
                    Redux
                    Express
                    PostgreSQL
                    Styled Components
                </p>
                <button className={styles.GitHub}></button>
                <button className={styles.Deploy}></button>

            </div>


            <h2 className={styles.projectTittle}>Insta-Chef</h2>
            <div className={styles.Cards}>

                <p className={styles.description}>Colaboré como desarrollador fullstack en el proyecto grupal Insta-Chef, un e-commerce gastronómico artificial durante el bootcamp de Henry. Contribuí en la arquitectura y diseño de los componentes, enfocándome principalmente del lado front-end del proyecto.</p>

                <img src="src\components\projects\images\InstaChef.png" alt="" />

                <p className={styles.tecnologies}>
                    JavaScript
                    React
                    Redux
                    Tailwind CSS
                    Express
                    PostgreSQL
                    Node.js
                </p>
                <button className={styles.GitHub}></button>
                <button className={styles.Deploy}></button>

            </div>




        </div>
    )
}

export default Projects