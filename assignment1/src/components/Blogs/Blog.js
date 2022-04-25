import React from 'react';
import ProTypes from 'prop-types';

const Blog = ({ imgAlt, imgSrc, title, content }) => {
  return (
    <article className='blog'>
      <figure>
        <img className='blog__image' src={imgSrc} alt={imgAlt} />
      </figure>
      <aside className='blog__article'>
        <h3 className='blog__title'>{title}</h3>
        <p className='blog__content'>{content}</p>
        <a className='blog__link' href='#'>Link to blog content</a>
      </aside>
    </article>
  );
};

Blog.propTypes = {
  imgAlt: ProTypes.string.isRequired,
  imgSrc: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
  content: ProTypes.string.isRequired
};

export default Blog;