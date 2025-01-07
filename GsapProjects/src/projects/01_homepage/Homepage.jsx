import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Homepage = () => {
  const h1Ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Initial animation for the entire h1
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Flip animation for the word "animation"
    gsap.to(animationRef.current, {
      rotationX: 360,
      duration: 1,
      repeat: -1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <div>
      <h1 ref={h1Ref}>
        Hello World <span ref={animationRef} style={{ display: 'inline-block' }}>animation</span> from GSAP project with React + Vite
      </h1>
    </div>
  );
};

export default Homepage;
