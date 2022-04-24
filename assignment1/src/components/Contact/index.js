import React from 'react';

const Contact = () => {
  return (
    <section id='contactPage' className='contact'>
      <h2 class="contact__title">Contact us</h2>
      <form action="" className='contact__form'>
        <input type="text" id="name" autofocus autocomplete="off" placeholder="Please enter your name" /><br />
        <input type="email" id="email" placeholder="Please enter your email" /><br />
        <textarea name="comment" placeholder="Please leave comment here for us" id="" cols="30"
          rows="10"></textarea><br />
        <button className='contact__button' type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;