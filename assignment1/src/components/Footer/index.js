import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__item'><span>Copyright</span></li>
        <li className='footer__item'><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
        <li className='footer__item'><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li className='footer__item'><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;