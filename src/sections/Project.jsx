import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import {projectInfo} from "../constants/project.js";

gsap.registerPlugin(ScrollTrigger);

export default function Project(){

    const container = useRef();
    const projectRef = useRef();
    const projectsRef = useRef();

    useGSAP(() => {

        gsap.from('.title, .text, .project', {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.projects',
            start: "top 30%",
            onEnter: () => gsap.to('.title, .text, .project', {
                opacity: 1,
                y: 0,
                stagger: 0.1
            }),
            onLeaveBack: () => gsap.to('.title, .text, .project', {
                opacity: 0,
                y: 100,
                stagger: 0.1
            })
        }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: '.projects',
            pin: true,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            },
        });
        tl.to('.project .text', {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: 0.1,
        })
        .to('.project', {
            marginBottom: 2,
            stagger: 0.1,
        }, '<');

    }, {scope: container})
    return(
            <main className="main" ref={container}>
                <div className='project-container'>
                    <div className="projects" ref={projectsRef}>
                    {projectInfo.map((p) => (
                        <div key={p.id} className="project" ref={projectRef}>
                            <h3 className="title">{p.title}</h3>
                            <div className="text">{p.sdesc}</div>
                            <div className="text">{p.mdesc}</div>
                            <div className="text">Tech Stack: {p.stack}</div>
                            <div className="text">Focus: {p.focus}</div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="extras-l">
                    <hr/><span>✴︎</span><hr/>
                </div>
                <div className="extras-r">
                    <hr/><span>✴︎</span><hr/>
                </div>
            </main>
    )
}