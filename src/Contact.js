import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

import contactText from './images/contactText3.png';
import github from './images/git-square-black.png';
import linkedin from './images/linkedin-square.png';
import email from './images/email-square.png';

import resume from './assets/Harrison Oates - Resume 2023.pdf'


export default function Contact() {
    return (
        <Container id="contact" className="text-center">
            <Row className="justify-content-center">
                <Col md="7 justify-self-center">
                    <div className='contact'>
                        <br/>
                        <br/>
                        <br/>
                        <center><img className='contact-title' src={contactText} alt={'contact-title-text'} width={365} height={95}/></center>
                        <p className='contact-paragraph'>I am currently open to software engineering opportunities so please feel free to reach out through one of the below links.</p>
                        <br/>
                        <div className='contact-icons'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-git' src={github} alt="github-icon"/></a>
                            <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-email' src={email} alt="email-icon"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-li' src={linkedin} alt="linkedin-icon"></img></a>
                        <br/>
                        <br/>
                        <a className="contact-resume-button" target="_blank" rel="noreferrer" href={resume}>Click here to view my resume</a>

                        </div>
                        
                        <Link className='contact-button back-to-top-text'  activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={2000}>
                            Back to Top
                        </Link>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}