import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Project(){

    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: '.projects',
            pin: true,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            },
        });
        tl.to('.project .text', {
            height: 0,
            paddingBottom: 0,
            opacity: 0,
            stagger: 0.5,
        })
        .to('.project', {
            marginBottom: -10,
            stagger: 0.5,
        }, '<');
    }, {scope: container})
    return(
        <div id="wrapper" ref={container}>
            <div id="content">
                <div className="projects">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="project">
                    <h3>Title {i}</h3>
                    <div className="text">Content for accordion {i}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}