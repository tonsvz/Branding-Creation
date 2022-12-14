import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.scss';
import gsap from 'gsap';

// Components
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Services from './pages/Services';
import About from './pages/About';
import Navigation from './components/Navigation';
import { useState } from 'react';

// Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
  },
  {
    path: '/case-studies',
    name: 'Case Studies',
    Component: CaseStudies,
  },
  {
    path: '/approach',
    name: 'Approach',
    Component: Approach,
  },
  {
    path: '/services',
    name: 'Services',
    Component: Services,
  },
  {
    path: '/about',
    name: 'About',
    Component: About,
  },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    gsap.to('body', 0, {
      css: {
        visibility: 'visible',
      },
    });

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 50);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };

    // prevents flashing on text when reloading page
  });
  return (
    <>
      <Header dimensions={dimensions} />
      {console.log(dimensions)}
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Routes>
            <Route key={path} exact path={path} element={<Component />} />
          </Routes>
        ))}
      </div>
    </>
  );
};

export default App;
