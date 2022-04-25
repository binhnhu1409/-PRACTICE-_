import React from 'react';

import Blog from './Blog';
import './blogs.scss';

const BlogArray = [
  {
    id: 0,
    imgAlt: 'On the table, there are a cup, a vase, and a laptop with coding editor is running on the screen',
    imgSrc: '../../assets/images/img1.jpg',
    title: 'Blog 1',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem delenit nesciunt laboriosam odio!'
  },
  {
    id: 1,
    imgAlt: 'There are a pen, a notebook, glasses and a keyboard on the white table',
    imgSrc: '../../../assets/images/img2.jpg',
    title: 'Blog 2',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem delenit nesciunt laboriosam odio!'
  },
  {
    id: 2,
    imgAlt: 'A glowing blue light keyboard',
    imgSrc: '../assets/images/img3.jpg',
    title: 'Blog 3',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur veniam hic aperiam vitae corrupti ea, dignissimos cupiditate deleniti magni quibusdam minima reiciendis recusandae adipisci? Autem delenit nesciunt laboriosam odio!'
  },
];

const Blogs = () => {
  return (
    <>
      <h2 className='blogs__title'>Blogs</h2>
      <section id='blogsPage' className='blogs'>
        {BlogArray.map((blog) => (
          <Blog key={blog.id}
            imgAlt={blog.imgAlt}
            imgSrc={blog.imgSrc}
            title={blog.title}
            content={blog.content} />
        ))}
      </section>
    </>
  );
};

export default Blogs;