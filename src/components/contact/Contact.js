import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_xfh2kcc', 'template_db2hr03', form.current, 'Ny6qubM88COtg8soL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
      <section id='contact'>
        <h1 className="cont-title">
          Contact Me
        </h1>
        <h3 className="cont-desc">
          Please fill out the below form for any opportunities.
        </h3>
        <form ref={form} className="cont-frm" onSubmit={sendEmail}>
          <input className='frm-name' name='name' type="text" placeholder="Your Name" />
          <input className='frm-email' name='email' type="text" placeholder="Your Email" />
          <textarea className='frm-msg' name='message' rows="10" placeholder='Your Message'>
          </textarea>
          <button type='submit' className="cont-btn">SEND</button>
        </form>
        {/* <div className="details">
          <p>Email:</p>
          <p>Phone:</p>
          <p>LinkedIn:</p>
          <p>Github:</p>
        </div> */}
      </section>
  )
}

export default Contact