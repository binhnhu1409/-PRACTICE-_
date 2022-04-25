import React from 'react';

import Service from './Service';
import './services.scss';

const ServiceArray = [
  {
    id: 0,
    title: 'Services 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culpa repellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat eos ab porro!'
  },
  {
    id: 1,
    title: 'Services 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culparepellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat eos ab porro!'
  },
  {
    id: 2,
    title: 'Services 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos pariatur culpa repellendus sint at cum perferendis dolores fuga nulla consectetur quaerat enim, iusto quae! Impedit fugiat eos ab porro!'
  }
];

const Services = () => {
  return (
    <>
      <h2 className='services__title'>Services</h2>
      <section id='servicesPage' className='services'>
        {ServiceArray.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            content={service.content} />
        ))}
      </section>
    </>
  );
};

export default Services;