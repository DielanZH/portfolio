import styles from './resume.module.css'

export default function Resume() {
    return (
        <div className={styles.resumeContainer}>
            <h3 className={styles.presentation}>
                Hola, mi nombre es
            </h3>
            <h1 className={styles.name}>
                Orlando Daniel Diaz
            </h1>
            <h2 className={styles.presentation2}>
                Soy un Desarrollador Full Stack y me especializo en el area de Front-end
            </h2>

            <p className={styles.presentation3}>
                Actualmente, puedo decir que estoy disfrutando del mundo del desarrollo web junto a mi otra pasión la Geografía,
                cada día en el mundo del desarrollo se ha convertido en una oportunidad para
                seguir aprendiendo sobre nuevas características, implementaciones y demás,
                las cuáles siempre trato de incluir en mis trabajos para que tengan una mejoría constante.
            </p>

            <button className={styles.CVButton}>
                Mira mi curriculum
            </button>

        </div>
    )
}