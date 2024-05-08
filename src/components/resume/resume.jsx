import styles from './resume.module.css'

export default function Resume({ translated }) {
    return (
        <div className={styles.resumeContainer}>
            <h3 className={styles.presentation}>
                {translated ? 'Hola, mi nombre es' : 'Hi, my name is'}
            </h3>
            <h1 className={styles.name}>
                Orlando Daniel Diaz
            </h1>
            <h2 className={styles.presentation2}>
                {translated ? 'Soy un Desarrollador Full Stack y me especializo en el area de Front-end' :
                    'I am a Full Stack Developer specializing in Front-end development.'}
            </h2>

            <p className={styles.presentation3}>
                {translated ? 'Una de mis mayores motivaciones en este mundo es aprender. Así empecé mis años de autodidacta con tutoriales y repositorios de GitHub, hasta que tuve la fortuna de conocer el bootcamp de soyHenry. En esta etapa, además de desarrollar fuertemente mis habilidades como desarrollador, aprendí a trabajar en equipo de forma dinámica con metodologías ágiles, el manejo del flujo de GIT, estructura de datos, algoritmos y frameworks CSS.' :
                    "One of my greatest motivations in this world is learning. I began my journey as a self-taught developer through tutorials and GitHub repositories until I was fortunate enough to discover the soyHenry bootcamp. During this stage, besides significantly developing my coding skills, I learned to work dynamically in a team using agile methodologies, managing the GIT workflow, understanding data structures, algorithms, and CSS frameworks."
                }
            </p>

            <button className={styles.CVButton}>
                {translated ? 'Mira mi curriculum' : 'Check out my resume'}
            </button>

        </div>
    )
}