import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Branding</h1>

      <nav className='nav'>
        <ul className='nav__menu'>
          <li className='nav__item'>
            <a className='nav__link' href='#homepage'>Homepage</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#servicesPage'>Services</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#techPage'>TechStack</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#blogsPage'>Blogs</a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#contactPage'>Contact</a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;

