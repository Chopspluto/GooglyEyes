import { useRef } from "react"
import Eye from "../components/Eye";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

function Home() {

  const starRef = useRef();
  const mainRef = useRef();
  const i = gsap.utils.selector(mainRef);

  useGSAP(() => {

    gsap.to(i ('.hero, .hero-text, .sign, .socials'), {
    opacity: 0,
    y: -100,
    scrollTrigger: {
      trigger: '.main',
      start: "top top",
      end: "bottom 30%",
      stagger: 0.1,
      scrub: true
    }
  });

    const stars = gsap.utils.toArray('.star');
    stars.forEach((star) => {
      gsap.fromTo(star, {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: () => Math.random() * 1 + 0.5,
      delay: () => Math.random() * 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        from: "random"
      }
    })
  });

  });

  return (
      <main className="main" ref={mainRef}>
        <div className="stars" ref={starRef}>
          <span className="star">✴︎</span>
          <span className="star">✴︎</span>
          <span className="star">✴︎</span>
          <span className="star">✴︎</span>
          <span className="star">✴︎</span>
          <span className="star">✴︎</span>
        </div>
        <div className='hero'>
          <Eye/>
          <Eye/>
        </div>
        <div className="hero-text">
          <h1>portfolio</h1>
        </div>
        <div className="sign">
          <h2>K</h2><span>anishka</span><h2>J</h2><span>ayani</span>
        </div>
        <div className="extras-l">
          <hr/><span>Updated 2025</span><hr/>
        </div>
        <div className="extras-r">
          <hr/><span>Web design & Development</span><hr/>
        </div>
          <div className="socials">
              <i><FaInstagram /></i>
              <i><FaLinkedin /></i>
              <i><FaGithub /></i>
          </div>
      </main>
  )
}

export default Home
