import React from 'react';

const Blogs = () => {
  return (
    <section id='blogsPage' className='blogs'>
      <h2 className='blogs__title'>Blogs</h2>

      <article className='blog'>
        <figure>
          <img className='blog__image' src='assets\images\img-2.jpg'
            alt='On the table, there are a cup, a vase, and a laptop with coding editor is running on the screen'
            width='500px' />
        </figure>
        <aside className='blog__article'>
          <h3 className='blog__title'>Blog 1</h3>
          <p className='blog__content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti
            ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem deleniti
            nesciunt laboriosam odio!</p>
          <a className='blog__link' href='#'>Link to blog content</a>
        </aside>
      </article>

      <article className='blog'>
        <figure>
          <img className='blog__image' src='assets\images\img-3.jpg'
            alt='There are a pen, a notebook, glasses and a keyboard on the white table' width='500px' />
        </figure>
        <aside className='blog__article'>
          <h3 className='blog__title'>Blog 2</h3>
          <p className='blog__content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti
            ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem deleniti
            nesciunt laboriosam odio!</p>
          <a className='blog__link' href='#'>Link to blog content</a>
        </aside>
      </article>

      <article className='blog'>
        <figure>
          <img className='blog__image' src='assets\images\img-1.jpg' alt='A glowing blue light keyboard' width='500px' />
        </figure>
        <aside className='blog__article'>
          <h3 className='blog__title'>Blog 3</h3>
          <p className='blog__content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti
            ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem deleniti
            nesciunt laboriosam odio!</p>
          <a className='blog__link' href='#'>Link to blog content</a>
        </aside>
      </article>

    </section>
  );
};

export default Blogs;