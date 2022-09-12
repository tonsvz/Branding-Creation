import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.scss';
import gsap from 'gsap';

// Components
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Services from './pages/Services';
import About from './pages/About';

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

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // prevents flashing on text when reloading page
    gsap.to('body', 0, {
      css: {
        visibility: 'visible',
      },
    });
  });
  return (
    <>
      <Header />
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
