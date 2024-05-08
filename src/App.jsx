import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import styles from './App.module.css'
import Contact from './components/contact/contact';
import NavBar from './components/navbar/navbar';
import { useState } from 'react';


function App() {

  const [translated, setTranslated] = useState(false);

  return (
    <>
      <NavBar
        translated={translated}
        setTranslated={setTranslated}
      />
      <div id='home' className={styles.content}>
        <Resume
          translated={translated} />
        <About
          translated={translated} />
        <Skills />
        <Projects
          translated={translated} />
        <Contact
          translated={translated} />
      </div>

    </>
  )
}

export default App
