import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

import headerTextSmall from './images/headerTextSmall4.png';
import headerText from './images/headerText4.png';

export default function Header() {

    const [mql, setMql] = useState(window.matchMedia('(max-width: 800px)'));

    useEffect(() => {
      function handleResize() {
        setMql(window.matchMedia('(max-width: 999px)'));
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <>
        <Container id="header" className="text-center header-bg">
            <Row>
                <Col lg>
                    <div className='introduction'>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {mql.matches ? 
                            <img className='header-text-image' src={headerTextSmall} alt={'text'} width={"80%"} height={"200"}/> : 
                            <img className='header-text-image' src={headerText} alt={'text'} width={910} height={120}/>
                        }
                        <br/>
                        <br/>
                        <br/>
                        <h1 className='introduction-sub-title'>Full Stack Developer</h1>
                        <br/>
                        <Row className="text-center justify-content-md-center h-100">
                            <Col md="7">
                            <h2 className='introduction-paragraph'>A javascript and python developer that wants to shape the future with technology.</h2>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <div className='small-flex'>
                        <Link className='introduction-projects-button' activeClass="active" to="projects" spy={true} smooth={true} offset={-25} duration={1000}>
                            View Projects
                        </Link>
                        <Link className='introduction-contact-button' activeClass="active" to="contact" spy={true} smooth={true} offset={-25} duration={2000}>
                            Contact Details
                        </Link>
                        </div>
                        <br/>
                        <br/>
                        <Link className='introduction-projects-button'  activeClass="active" to="projects" spy={true} smooth={true} offset={-25} duration={1000}>
                        <div className="down-arrow-animation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" opacity={0.15} fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                        </Link>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {/* <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
                        <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    )
}