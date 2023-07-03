import React from "react";
import "../styles/style.css";
import { Container } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a python developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <span></span>
        <p className="contactpara">Email: rjregalado1979@gmail.com</p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.instagram.com/rojre1979/");
          }}
        >
          Contact me
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>robertregalado</span>
        </p>
      </Container>
    </div>
  );
}

export default ContactPage;