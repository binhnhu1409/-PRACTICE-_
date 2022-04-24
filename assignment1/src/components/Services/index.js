import React from 'react';

const Services = () => {
  return (

    <section id='servicesPage' className='services'>
      <h2 classNam='services__title'>Services</h2>

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

  );
}

export default Services;