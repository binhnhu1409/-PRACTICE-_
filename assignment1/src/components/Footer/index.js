import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__item'>
          <span>Copyright</span>
        </li>
        <li className='footer__item'>
          <a className='footer__  link' href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
        </li>
        <li className='footer__item'>
          <a className='footer__link' href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li className='footer__item'>
          <a className='footer__link' href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;