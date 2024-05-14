import styles from './about.module.css'
import PropTypes from 'prop-types'

export default function About({ translated }) {
    return (
        <div id='about' className={styles.aboutContainer}>
            <div className={styles.aboutTittle}>

                <h1>
                    {translated ? 'Sobre mi' : 'About me'}
                    <hr></hr>
                </h1>

            </div>

            <div className={styles.about1}>
                {translated ?
                    <p>
                        Siempre fue de mi interes todo el mundo de la tecnologia y el desarrollo pero nunca tuve el empujón como para adentrarme mas en él mas allá de la esfera de los videojuegos y las noticias sobre los componentes nuevos de PC. Hasta que llegó la pandemia y en medio del encierro fue donde empecé mis años de autodidacta con tutoriales y repositorios de GitHub, hasta que tuve la fortuna de conocer el bootcamp de soyHenry.

                        <br></br>
                        <br></br>

                        En esta etapa, además de desarrollar fuertemente mis habilidades como desarrollador, aprendí a trabajar en equipo de forma dinámica con metodologías ágiles, el manejo del flujo de GIT, estructura de datos, algoritmos y frameworks CSS.

                        Actualmente estoy buscando obtener mayor experiencia en trabajos relacionados al desarrollo.
                    </p>
                    :
                    <p>
                        It has always been of interest to me, the world of technology and development, but I never had the push to delve deeper into it beyond the sphere of video games and news about new PC components. Until the pandemic arrived and amidst the lockdown, thats when I began my self-taught years with tutorials and GitHub repositories, until I was fortunate enough to discover the soyHenry bootcamp.

                        <br></br>
                        <br></br>

                        During this stage, in addition to strongly developing my skills as a developer, I learned to work dynamically in teams with agile methodologies, manage the GIT workflow, understand data structures, algorithms, and CSS frameworks.

                        Currently, I am seeking to gain more experience in development-related jobs.
                    </p>
                }
            </div>

            <h2>
                {translated ? '¿Por qué yo?' : 'Why me?'}
            </h2>

            <div className={styles.about2}>

                {translated ?

                    <p>
                        Porque además de aportar excelentes habilidades técnicas como desarrollador, destaco por mi capacidad perceptiva hacia mis compañeros.
                        <br></br>
                        Siempre estoy dispuesto a ofrecer mi ayuda cuando se necesite y a aprender de ellos cuando sea necesario, fomentando así un ambiente laboral organizado y eficiente que promueva el crecimiento colectivo y siente las bases para el inicio de mi carrera en este campo.
                    </p>

                    :

                    <p>
                        Because in addition to providing excellent technical skills as a developer, I stand out for my perceptive ability towards my colleagues.
                        <br></br>
                        I am always ready to offer my help when needed and to learn from them when necessary, thus fostering an organized and efficient work environment that promotes collective growth and lays the groundwork for the start of my career in this field.
                    </p>
                }

            </div>

        </div>
    )
}
About.propTypes = {
    translated: PropTypes.bool
}