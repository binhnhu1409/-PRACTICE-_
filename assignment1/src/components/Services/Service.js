import React from 'react';
import ProTypes from 'prop-types';

const Service = ({ title, content }) => {
  return (
    <article className='service'>
      <h3 className='service__title'>{title}</h3>
      <p className='service__content'>{content}</p>
      <button className='service__button'>Read more</button>
    </article>
  );
};

Service.propTypes = {
  title: ProTypes.string.isRequired,
  content: ProTypes.string.isRequired
};

export default Service;