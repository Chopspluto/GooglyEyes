import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Eye(){
    
    const eyeRef = useRef(null);
    const pupilRef = useRef(null);
    const eyelidRef = useRef(null);
    const MAX_MOVE = 30
    const BLINK_INTERVAL = 5000
    const MOUSE_IDLE_DELAY = 300 // ms

    // const [isBlinking, setIsBlinking] = useState(false);
    const mouseTimeOutRef = useRef(null)
    const isMouseMovingRef = useRef(false)

    useEffect(() =>{
        const handleMouseMove = (e) => {
            isMouseMovingRef.current = true;

            clearTimeout(mouseTimeOutRef.current)
            mouseTimeOutRef.current = setTimeout(() => {
                isMouseMovingRef.current = false
            }, MOUSE_IDLE_DELAY)

            const eye = eyeRef.current;
            const pupil = pupilRef.current;

            const rect = eye.getBoundingClientRect();

            const eyeCenterX = rect.left + rect.width/2;
            const eyeCenterY = rect.top + rect.height/2;

            const dx = e.clientX - eyeCenterX;
            const dy = e.clientY - eyeCenterY;

            const angle = Math.atan2(dy, dx);

            const x = Math.cos(angle) * MAX_MOVE;
            const y = Math.sin(angle) * MAX_MOVE;

            // pupil.style.transform = `translate(${x}px, ${y}px)`
            gsap.to(pupil, {
                x,y, duration:0.2, ease:"power3.out"
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            clearTimeout(mouseTimeOutRef.current)
        }
    }, [])

//     useEffect(() => {
//         const blink = gsap.timeline({ paused: true });

//         blink.to(eyelidRef.current, {
//             scaleY:1,
//             duration:0.1,
//             ease:"power1.in"
//         })
//         .to(eyelidRef.current, {
//             scaleY: 0,
//             duration:0.1,
//             ease:"power1.out"
//         })
//         const blinkInterval = setInterval(() => {
//             blink.restart();
//         }, BLINK_INTERVAL)

//         return () => clearInterval(blinkInterval)
//   }, [])

    return(
        <>
        <div className="eye" ref={eyeRef}>
            <div className="eyelid" ref={eyelidRef} />
            <div className="pupil" ref={pupilRef} />
        </div>
        </>
    )
}