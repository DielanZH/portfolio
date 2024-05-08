import styles from './about.module.css'

export default function About() {
    return (
        <div id='about' className={styles.aboutContainer}>
            <h1>
                Sobre mi
            </h1>

            <p className={styles.about1}>
                Una de mis mayores motivaciones en este mundo es aprender. Así empecé mis años de autodidacta con tutoriales y repositorios de GitHub, hasta que tuve la fortuna de conocer el bootcamp de soyHenry.

                En esta etapa, además de desarrollar fuertemente mis habilidades como desarrollador, aprendí a trabajar en equipo de forma dinámica con metodologías ágiles, el manejo del flujo de GIT, estructura de datos, algoritmos y frameworks CSS.
            </p>

            <h2>
                ¿Por qué yo?
            </h2>

            <p className={styles.about2}>
                Porque además de aportar excelentes habilidades técnicas como desarrollador, destaco por mi capacidad perceptiva hacia mis compañeros. Siempre estoy dispuesto a ofrecer mi ayuda cuando se necesite y a aprender de ellos cuando sea necesario, fomentando así un ambiente laboral organizado y eficiente que promueva el crecimiento colectivo y siente las bases para el inicio de mi carrera en este campo.
            </p>

        </div>
    )
}