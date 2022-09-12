import React, { useEffect, useState } from 'react';
import IntroOverlay from '../components/IntroOverlay';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import gsap from 'gsap';

const timeline = gsap.timeline();
const homeAnimation = (completeAnimation) => {
  // timeline
  timeline
    .from('.line span', 1.5, {
      y: 100,
      delay: 1,
      ease: 'power4.Out',
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to('.overlay-top', 1.5, {
      height: 0,
      stagger: 0.4,
      ease: 'expo.inOut',
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, {
      css: {
        display: 'none',
      },
    })
    .from('.case-image img', 2.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
    // alert('animation complete');
  };
  useEffect(() => {
    // gsap timeline
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ''}

      <Banner />
      <Cases />
    </>
  );
};

export default Home;
