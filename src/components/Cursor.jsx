import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Cursor() {

    const cursorRef = useRef(null);

    useEffect(() =>{

        document.body.style.cursor = 'none';

        const handleMouseMove = (e) => {
            const { clientX, clientY} = e;
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                delay: 0,
                ease: 'power4.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);

  return (
    <div className='cursor' ref={cursorRef} />
  )
}

export default Cursor