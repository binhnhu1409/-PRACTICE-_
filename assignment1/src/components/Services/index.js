import React from 'react';

import './services.scss';

const Services = () => {
  return (
    <>
      <h2 className='services__title'>Services</h2>
      <section id='servicesPage' className='services'>
        <article className='service'>
          <h3 className='service__title'>Services 1</h3>
          <p className='service__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culpa
            repellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat
            eos ab porro!</p>
          <button className='service__button'>Read more</button>
        </article>

        <article className='service'>
          <h3 className='service__title'>Services 2</h3>
          <p className='service__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culpa
            repellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat
            eos ab porro!</p>
          <button className='service__button'>Read more</button>
        </article>

        <article className='service'>
          <h3 className='service__title'>Services 3</h3>
          <p className='service__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culpa
            repellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat
            eos ab porro!</p>
          <button className='service__button'>Read more</button>
        </article>

      </section>
    </>
  );
};

export default Services;