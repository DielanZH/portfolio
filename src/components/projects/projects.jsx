import { Link } from 'react-router-dom'
import styles from './projects.module.css'
import PropTypes from 'prop-types'
import recipeApp from "/recipes.png";
import componentCorner from "/src/components/projects/images/component-corner.png";
import instaChef from "/src/components/projects/images/InstaChef.png";
import gitHubProfile from "/src/components/projects/images/GitHubProfile.png";
import gitHub from "/src/assets/github-mark/github-mark/github-mark-white.svg";
import deployLogo from '/src/assets/arrow-up-right-from-square-solid.svg';

function Projects({ translated }) {
    return (

        <div id='projects' className={styles.projectsContainer}>

            <div className={styles.projectWelcome}>
                <h1 >{translated ? 'Proyectos' : 'Projects'}</h1>
                <hr style={translated? {width:'13.6rem'} : {width:'11.1rem'}}></hr>
            </div>

            <p className={styles.projectText}>
                {translated ? '//Mira los proyectos en los que trabajé recientemente' : "//Take a look at the projects I've worked on"}
            </p>

            <h2 className={styles.projectTittle}> {translated ? 'App de recetas' : 'Recipes app'}</h2>
            <div className={styles.Cards}>

                <div className={styles.description}>
                    {translated ?

                        <p>
                            Una SPA que consume datos de una API externa, y permite la visualización de información general y detallada de más de 500,000 recetas, entre las funcionalidades que dispone esta APP está el filtrado y ordenamiento de recetas por diferentes variables como si son traidos de la API o la DB, healthscore, nombre, calificación, además de la creación de nuevas recetas mediante un formulario controlado.
                        </p>

                        :

                        <p>
                            A SPA that consumes data from an external API, and allows the visualization of general and detailed information for over 500,000 recipes. Among the functionalities available in this app are filtering and sorting recipes based on various variables such as if they are fetched from the API or the DB, health score, name, rating, as well as the creation of new recipes through a controlled form.
                        </p>
                    }
                </div>

                <img src={recipeApp} alt="" />

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
                <Link className={styles.GitHub} to={"https://github.com/DielanZH/Foods"} target='blank' style={{ backgroundImage: `url(${gitHub})` }}></Link>
                <button className={styles.Deploy} style={{ backgroundImage: `url(${deployLogo})` }} ></button>

            </div>


            <h2 className={styles.projectTittle} id={styles.cornerTittle}> Component-Corner</h2>
            <div className={styles.Cards} id={styles.corner}>

                <div className={styles.description}>

                    {translated ?
                        <p>
                            Colaboré como desarrollador frontend en el proyecto grupal Component-Corner durante el bootcamp de Henry. Me encargue de implementar interfaces interactivas y responsivas y contribuí en la arquitectura y diseño de los componentes, enfocándome en buenas prácticas y código limpio. Trabajé estrechamente con un equipo multidisciplinario, participando en reuniones de planificación, revisiones de código y resolución de desafíos técnicos.
                        </p>

                        :

                        <p>
                            I collaborated as a frontend developer on the group project Component-Corner during the Henry bootcamp. I was responsible for implementing interactive and responsive interfaces and contributed to the architecture and design of the components, focusing on best practices and clean code. I worked closely with a multidisciplinary team, participating in planning meetings, code reviews, and technical challenge resolutions.
                        </p>
                    }
                </div>

                <img src={componentCorner} alt="/component-corner.png" />

                <p className={styles.tecnologies}>
                    JavaScript
                    Node.js
                    React.js
                    Redux.js
                    <br></br>
                    Express
                    PostgreSQL
                    Styled Components
                    MercadoPago-API
                </p>
                <Link className={styles.GitHub} to={"https://github.com/solayae/component-corner"} target='blank' style={{ backgroundImage: `url(${gitHub})` }}></Link>
                <Link className={styles.Deploy} to={"https://component-corner.vercel.app"} target='blank' style={{ backgroundImage: `url(${deployLogo})` }}></Link>

            </div>


            <h2 className={styles.projectTittle}>Insta-Chef</h2>
            <div className={styles.Cards}>

                <div className={styles.description}>
                    {translated ?
                        <p>
                            Colaboré como desarrollador fullstack en el proyecto grupal Insta-Chef, un e-commerce gastronómico artificial durante el bootcamp de Henry. Contribuí en la arquitectura y diseño de los componentes, enfocándome principalmente del lado front-end del proyecto.
                        </p>

                        :

                        <p>
                            I collaborated as a full-stack developer on the group project Insta-Chef, an artificial gastronomic e-commerce, during the Henry bootcamp. I contributed to the architecture and design of the components, focusing mainly on the front-end side of the project.
                        </p>
                    }

                </div>

                <img src={instaChef} alt="/InstaChef.png" />

                <p className={styles.tecnologies}>
                    JavaScript
                    React
                    Redux
                    Tailwind CSS
                    <br></br>
                    Express
                    PostgreSQL
                    Node.js
                    <br></br>
                    Stripe-API
                    Nodemailer-API
                </p>

                <Link className={styles.GitHub} to={"https://github.com/FrancoInca/InstaChef-Front"} target='blank' style={{ backgroundImage: `url(${gitHub})` }}></Link>
                <Link className={styles.Deploy} to={"https://insta-chef.vercel.app"} target='blank' style={{ backgroundImage: `url(${deployLogo})` }}></Link>

            </div>


            
            <h2 className={styles.projectTittle} id={styles.cornerTittle}> GitHub Profile</h2>
            <div className={styles.Cards} id={styles.corner}>

                <div className={styles.description}>

                    {translated ?
                        <p>
                            Acepté un desafío de devChallenges para crear una SPA que utiliza la API de GitHub para obtener y mostrar información sobre repositorios y usuarios. Además, implementé principios de diseño responsive para hacer que la aplicación sea accesible y funcional en varios dispositivos y tamaños de pantalla.
                        </p>

                        :

                        <p>
                           I took on a challenge from devChallenges to create a SPA that utilizes the GitHub API to fetch and display information about repositories and users. Additionally, I implemented responsive design principles to make the app accessible and functional across various devices and screen sizes.
                        </p>
                    }
                </div>

                <img src={gitHubProfile} alt="/component-corner.png" />

                <p className={styles.tecnologies}>
                    JavaScript
                    React.js
                    React-router
                    <br></br>
                    Styled Components
                    GitHub-API
                </p>
                <Link className={styles.GitHub} to={"https://github.com/DielanZH/GitHub-profile"} target='blank' style={{ backgroundImage: `url(${gitHub})` }}></Link>
                <Link className={styles.Deploy} to={"https://github-profile-dielanzh.vercel.app"} target='blank' style={{ backgroundImage: `url(${deployLogo})` }}></Link>

            </div>






        </div>
    )
}

Projects.propTypes = {
    translated: PropTypes.bool
}

export default Projects