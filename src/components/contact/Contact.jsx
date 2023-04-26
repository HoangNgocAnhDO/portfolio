import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touc</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dohoangngocanh1710@gmail.com</h5>
            <a href="mailto:dohoangngocanh1710@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>dohoangngocanh</h5>
            <a href="https://m.me/CNMCSCGVM" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>dohoangngocanh</h5>
            <a href="https://api.whatsapp.com/send?phone=+33624318209" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact