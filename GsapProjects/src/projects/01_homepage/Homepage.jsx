import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Homepage = () => {
  const h1Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, [h1Ref]);

  return (
    <div>
      <h1 ref={h1Ref}>Hello World from GSAP project with React + Vite</h1>
    </div>
  );
};

export default Homepage;
