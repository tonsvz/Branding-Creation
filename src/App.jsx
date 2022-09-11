import React, { useEffect } from 'react';
import Banner from './components/Banner';
import Cases from './components/Cases';
import Header from './components/Header';
import Test from './components/Test';
import './styles/App.scss';

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Cases />
      <Test />
    </div>
  );
};

export default App;
