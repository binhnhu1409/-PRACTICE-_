import React from 'react';

import './contact.scss';

const Contact = () => {
  return (
    <>
      <h2 className="contact__title">Contact us</h2>

      <section id='contactPage' className='contact'>
        <form action="" className='contact__form'>
          <input className='contact_input' type="text" id="name" autoFocus autoComplete="off" placeholder="Please enter your name" /><br />
          <input className='contact_input' type="email" id="email" placeholder="Please enter your email" /><br />
          <textarea className='contact_input' name="comment" placeholder="Please leave comment here for us" id="" cols="30"
            rows="10"></textarea><br />
          <button className='contact__button' type="submit">Submit</button>
        </form>
      </section>
    </>

  );
};

export default Contact;