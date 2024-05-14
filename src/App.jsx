import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import styles from './App.module.css'
import Contact from './components/contact/contact';
import NavBar from './components/navbar/navBar';
import { useState } from 'react';
import SideBar from './components/sidebar/sideBar';


function App() {

  const [translated, setTranslated] = useState(false);

  return (
    <>

      <NavBar
        translated={translated}
        setTranslated={setTranslated}
      />

      <SideBar />

      <div id='home' className={styles.content}>
        <Resume
          translated={translated} />
        <About
          translated={translated} />
        <Skills
          translated={translated} />
        <Projects
          translated={translated} />
        <Contact
          translated={translated} />
      </div>

    </>
  )
}

export default App
