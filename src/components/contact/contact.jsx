import styles from './contact.module.css';
import PropTypes from 'prop-types';


function Contact({ translated }) {

    return (
        <div id='contact' className={styles.Contact_Container}>

            <h1 className={styles.contactWelcome}>{translated ? 'Contacto' : 'Contact'}</h1>

            <p className={styles.contactText}>
                {translated ? '// Envíame un mensaje o un correo electrónico - danieldiaz-123@hotmail.com'
                    : '// Send me a message or an email - danieldiaz-123@hotmail.com'}

            </p>

            <form className={styles.formContainer} action="https://getform.io/f/61b7fd54-2676-48d3-8797-14444bd40c80" method="POST">
                <input className={styles.name} type="text" name="name" placeholder={translated ? 'Nombre' : 'Name'} />
                <input className={styles.email} type="email" name="email" placeholder={translated ? 'Correo electronico' : 'Email'} />
                <textarea className={styles.message} type="text" name="message" placeholder={translated ? 'Mensaje...' : 'Message...'} />
                <button className={styles.submitBtn} type="submit">{translated ? 'Enviar' : 'Send'}</button>
            </form>
        </div>
    )
}

Contact.propTypes = {
    translated: PropTypes.bool
}

export default Contact