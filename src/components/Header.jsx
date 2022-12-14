import React, { useState, useEffect } from 'react';
import '../styles/components/header.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';
import gsap from 'gsap';

const Header = ({ dimensions }) => {
  let tl = gsap.timeline();
  const [menuState, setMenuState] = useState({ menuOpened: false });
  // const handleClick = () => {
  //   menuState === true;
  // };
  useEffect(() => {
    if (menuState.menuOpened === true) {
      // Run open menu animations
      gsap.to('nav', { css: { display: 'block' } });
      gsap.to('body', { css: { overflow: 'hidden' } });

      tl.to('.App', {
        duration: 1,
        y: dimensions.width <= 654 ? '70vh' : dimensions.height / 1.85,
        ease: 'expo.inOut',
      })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expoInOut',
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          duration: 0.6,
          delay: -8,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('.hamburger-menu-close', {
          duration: 0.8,
          delay: -8,
          css: {
            display: 'block',
          },
        });
    } else {
      // Run close menu animations
    }
  });

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <a href='/'>BRAND.</a>
          </div>
          {/* <div className='nav'>
            <span></span>
            <span></span>
          </div> */}
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'
            >
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
