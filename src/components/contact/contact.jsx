import styles from './contact.module.css'


function Contact() {

    return (
        <div id='contact' className={styles.Contact_Container}>
            
            <h1 className={styles.contactWelcome}>Contacto</h1>

            <p className={styles.contactText}>
                {"// Envíame un mensaje o un correo electrónico - danieldiaz-123@hotmail.com"}
            </p>

            <form className={styles.formContainer} action="https://getform.io/f/61b7fd54-2676-48d3-8797-14444bd40c80" method="POST">
                <input className={styles.name} type="text" name="name" placeholder='Nombre'/>
                <input className={styles.email} type="email" name="email" placeholder='Correo electrónico' />
                <textarea className={styles.message} type="text" name="message" placeholder='Mensaje...' />
                <button className={styles.submitBtn} type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact