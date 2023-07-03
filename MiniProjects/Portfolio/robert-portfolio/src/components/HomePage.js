import React from 'react'
import '../styles/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomePage() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Robert Regalado</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/rjregalado-stacktrek");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/robert-regalado-20014a15/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="image-home-page">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;