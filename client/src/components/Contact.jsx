import React from 'react'
import "./Main.css"
function Contact() {
  return (
    <div className='Contact'>
     <form className='contact-form form-container container'>
      <br />
      <label>Email: </label>
      <input className='email'
      type = "email"
      />
      <br />
      <label>Phone Number: </label>
      <input className='phone-number'
      type = "phone"
      minLength={10}
      />
      <br />
      <label>Name of Sender: </label>
      <input className='name'
      type = "text"
      />
      <br />
      <label>Subject: </label>
      <input className='subject' 
      type = 'text'
      />
      <br />
      <label>Message: </label>
      <textarea className='message' />
     </form>
    </div>
  )
}

export default Contact