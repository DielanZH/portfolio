import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import styles from './App.module.css'
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <div className={styles.content}>
        <Resume />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </>
  )
}

export default App