import React from 'react';

import HeroImg from '../HeroImg';
import './homepage.scss';

const Homepage = () => {
  return (
    <>
      <section id='homepage' className='home'>
        <article className='home__article'>
          <h2 className='home__title'>Homepage name</h2>
          <p className='home__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maiores earum. Dolores cupiditate nobis
            laboriosam, nisi facere expedita voluptatem quas maxime sint nihil optio nam maiores dolorum quaerat, ad unde?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et rerum, laudantium tenetur accusamus vel mollitia
            tempore in repudiandae ullam dolor saepe, magnam minus molestiae voluptas repellendus sapiente temporibus
            corporis vero?
          </p>
        </article>
        <HeroImg />
      </section>
      <a className='home__arrow' href="#servicesPage"><i className="fa fa-angle-down"></i></a>
    </>
  );
};

export default Homepage;