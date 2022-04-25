import React from 'react';

import './tech.scss';

const TechStack = () => {
  return (
    <>
      <h2 className='tech__title'>TechStack</h2>

      <section id='techPage' className='tech'>
        <ul className='tech__list'>
          <li className='tech_item'><i className='fab fa-js tech__icon' aria-hidden='true'></i></li>
          <li className='tech_item'><i className='fab fa-html5 tech__icon' aria-hidden='true'></i></li>
          <li className='tech_item'><i className='fab fa-react tech__icon' aria-hidden='true'></i></li>
          <li className='tech_item'><i className='fab fa-sass tech__icon' aria-hidden='true'></i></li>
          <li className='tech_item'><i className='fab fa-css3 tech__icon' aria-hidden='true'></i></li>
        </ul>
      </section>
    </>


  );
};

export default TechStack;