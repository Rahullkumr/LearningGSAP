import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Homepage = () => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const typewriterRef = useRef(null);
  const carteRef = useRef(null);

  useEffect(() => {
    // Animate the progress bar width based on scroll position
    gsap.to(progressBarRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Infinite typewriter effect for "The Green Corner"
    const text = "The Green Corner";
    gsap.fromTo(
      typewriterRef.current,
      { text: "" },
      {
        text: text,
        duration: 1.5,
        ease: "none",
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      }
    );

    // Flip animation for "Carte le Coin" with gradient color change
    const gradients = [
      "linear-gradient(90deg, #FF5733, #FFC300)",
      "linear-gradient(90deg, #33FF57, #57D1FF)",
      "linear-gradient(90deg, #FF33A1, #8C33FF)",
      "linear-gradient(90deg, #FFD733, #33FFCC)",
      "linear-gradient(90deg, #FF8C33, #FF3357)",
    ];
    let gradientIndex = 0;

    const flipAnimation = () => {
      gsap.to(carteRef.current, {
        rotationX: "+=360",
        duration: 1,
        ease: "power2.inOut",
        onStart: () => {
          gradientIndex = (gradientIndex + 1) % gradients.length;
          carteRef.current.style.backgroundImage = gradients[gradientIndex];
          carteRef.current.style.webkitBackgroundClip = "text";
          carteRef.current.style.color = "transparent";
        },
      });
    };

    const intervalId = setInterval(flipAnimation, 2000); // Flip every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef}>
      <div
        ref={progressBarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          width: "0",
          backgroundColor: "orange",
          zIndex: 1000,
        }}
      ></div>
      <nav>
      <h1>
        <span
          ref={carteRef}
          style={{
            display: "inline-block",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Carte le Coin
        </span>{" "}
        <span style={{ color: "green" }} ref={typewriterRef}></span>
      </h1>
      </nav>
      <div style={{ height: "100vh", backgroundColor: "lightblue" }}>
        Section 1
      </div>
      <div style={{ height: "100vh", backgroundColor: "lightgreen" }}>
        Section 2
      </div>
      <div style={{ height: "100vh", backgroundColor: "lightcoral" }}>
        Section 3
      </div>
    </div>
  );
};

export default Homepage;
