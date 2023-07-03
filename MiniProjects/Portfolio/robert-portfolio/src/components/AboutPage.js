import React from 'react'
import '../styles/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function AboutPage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        
                        <p className='about-details'>As a passionate and versatile professional, I have expertise in both data engineering and data science, enabling me to seamlessly bridge the gap between raw data and actionable insights. With a strong foundation in data engineering principles and tools, coupled with advanced data analysis and modeling techniques, I bring a comprehensive skill set to tackle complex data challenges.</p>
                        <ul className='skill-list'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={5}>
                                    <li>Django</li>
                                    <li>Flask</li>
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                    <li>PostgreSQL</li>
                                    <li>React</li>
                                    <li>Machine Learning</li>
                                    <li>AWS</li>
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>APIs</li>
                                    <li>REST</li>
                                </Col>
                                <Col md={7}>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>SQL</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage;