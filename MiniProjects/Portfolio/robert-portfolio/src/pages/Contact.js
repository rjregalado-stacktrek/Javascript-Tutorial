/*
import React from 'react';
import '../styles/Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
*/
import React from 'react'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'

function Contact() {
  return (
    <div>
      <Header />
      <ContactPage />
    </div>
  )
}

export default Contact;