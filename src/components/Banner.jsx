import React from 'react';
// import RightArrow from "../assets/arrow-right.svg";
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import '../styles/components/banner.scss';
const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Creating unique brands is</span>
            </div>

            <div className='line'>
              <span>what we do.</span>
            </div>
          </h2>

          <div className='btn-row'>
            <a href='/'>
              More about us <RightArrow className='svg' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
