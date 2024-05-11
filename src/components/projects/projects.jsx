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

                <p className={styles.description}>Una SPA que consume datos de una API externa, y permite la visualización de información general y detallada de más de 500,000 videojuegos, entre las funcionalidades que dispone esta APP está el filtrar y ordenar videojuegos por diferentes variables como género, plataformas, nombre, calificación, además de la creación de nuevos videojuegos, mediante un formulario controlado.</p>

                <img src="src\components\projects\images\recipes.png" alt="" />

                <p className={styles.tecnologies}>
                    React
                    Redux
                    Styled Components
                    Express
                    PostgreSQL
                    Rawg.io API
                </p>
                <button className={styles.GitHub}></button>
                <button className={styles.Deploy}></button>

            </div>


            <h2 className={styles.projectTittle} id={styles.cornerTittle}> Component-corner</h2>
            <div className={styles.Cards} id={styles.corner}>

                <p className={styles.description}>Una SPA que consume datos de una API externa, y permite la visualización de información general y detallada de más de 500,000 videojuegos, entre las funcionalidades que dispone esta APP está el filtrar y ordenar videojuegos por diferentes variables como género, plataformas, nombre, calificación, además de la creación de nuevos videojuegos, mediante un formulario controlado.</p>

                <img src="src\components\projects\images\component-corner.png" alt="" />

                <p className={styles.tecnologies}>
                    React
                    Redux
                    Styled Components
                    Express
                    PostgreSQL
                    Rawg.io API
                </p>
                <button className={styles.GitHub}></button>
                <button className={styles.Deploy}></button>

            </div>


        </div>
    )
}

export default Projects