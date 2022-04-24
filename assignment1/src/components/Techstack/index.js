import React from 'react';

const TechStack = () => {
  return (

    <section id='techPage' className='tech'>
      <h2 class='tech__title'>TechStack</h2>

      <ul className='tech__list'>
        <li className='tech_item'><i class='fab fa-js' aria-hidden='true'></i></li>
        <li className='tech_item'><i class='fab fa-html5' aria-hidden='true'></i></li>
        <li className='tech_item'><i class='fab fa-react' aria-hidden='true'></i></li>
        <li className='tech_item'><i class='fab fa-sass' aria-hidden='true'></i></li>
        <li className='tech_item'><i class='fab fa-css3' aria-hidden='true'></i></li>
      </ul>
    </section>
  );
}

export default TechStack;