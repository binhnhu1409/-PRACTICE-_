import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className='head'>
      <h1 className='head__title'>Branding</h1>

      <nav className='navbar'>
        <ul className='navbar__menu'>
          <li className='navbar__item'>
            <a className='navbar__link' href='#homepage'>Homepage</a>
          </li>
          <li className='navbar__item'>
            <a className='navbar__link' href='#servicesPage'>Services</a>
          </li>
          <li className='navbar__item'>
            <a className='navbar__link' href='#techPage'>TechStack</a>
          </li>
          <li className='navbar__item'>
            <a className='navbar__link' href='#blogsPage'>Blogs</a>
          </li>
          <li className='navbar__item'>
            <a className='navbar__link' href='#contactPage'>Contact</a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;

