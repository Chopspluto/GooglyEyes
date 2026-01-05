import Project from './sections/Project';
import Home from './sections/Home';
import Cursor from './components/Cursor';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

  const sectionRef = useRef();
  const projectRef = useRef();

  return (
    <>
    <Cursor/>
    <main>
      <section id="home" ref={sectionRef}>
        <Home/>
      </section>
      <section id="projects">
        <Project/>
      </section>
    </main>
    </>
  )
}

export default App
