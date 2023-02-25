import React from 'react';

import projectsText from './images/projectsText.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './css/other.css'


export default function Projects() {

  return (
    <>
        <Container id="projects" className='text-center'>
            <div className='projects-header'>
                <center><img className='projects-title-text' src={projectsText} alt={"projects-title-text"} width={365} height={110}/></center>
                <br/>
                <p className='projects-header-sub-title'>Below are a few of my javascript projects. See more on my <a target="_blank" rel="noreferrer" href="https://github.com/hao441" className='projects-title-github-link'>Github</a>.</p>
            </div>
            <Row>
                <Col>
                    <br/>
                    <div className='card'>
                    <br/>
                        <h3 className='card-title'>Farfriends</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React</div>
                            <div className='card-technology'>Express</div>
                            <div className='card-technology'>Tensorflow</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Farfriends are three chatbots designed to talk and act like Yoda, Lisa Simpson and Stitch.</p>
                            <br/>
                            <p className='card-paragraph'>The app utilises three ML libraries to perform optimal context matching, fallback generation and response filtering.</p>
                            <br/>
                            <p className='card-paragraph'>Talk to your childhood friend now.</p>
                        </div>
                        <br/>
                        <div className='project-button-container'>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://farfriends.harrisonoates.io"}>Demo</a>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Farfriends"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
                <Col>
                    <br/>
                    <div className='card'>
                        <br/>
                        <h3 className='card-title'>Farfriends</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React</div>
                            <div className='card-technology'>Express</div>
                            <div className='card-technology'>Tensorflow</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Farfriends are three chatbots designed to talk and act like Yoda, Lisa Simpson and Stitch.</p>
                            <br/>
                            <p className='card-paragraph'>The app utilises three ML libraries to perform optimal context matching, fallback generation and response filtering.</p>
                            <br/>
                            <p className='card-paragraph'>Talk to your childhood friend now.</p>
                            <br/>
                        </div>
                        <div className='project-button-container'>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://farfriends.harrisonoates.io"}>Demo</a>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Farfriends"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
                <Col>
                    <br/>
                    <div className='card'>
                        <br/>
                        <h3 className='card-title'>Farfriends</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React</div>
                            <div className='card-technology'>Express</div>
                            <div className='card-technology'>Tensorflow</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Farfriends are three chatbots designed to talk and act like Yoda, Lisa Simpson and Stitch.</p>
                            <br/>
                            <p className='card-paragraph'>The app utilises three ML libraries to perform optimal context matching, fallback generation and response filtering.</p>
                            <br/>
                            <p className='card-paragraph'>Talk to your childhood friend now.</p>
                            <br/>
                        </div>
                        <div className='project-button-container'>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://farfriends.harrisonoates.io"}>Demo</a>
                            <a className='projects-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Farfriends"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}