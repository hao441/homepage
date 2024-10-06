import React from 'react';

import projectsText from './images/projectsText3.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './css/other.css'


export default function Projects() {

  return (
    <>
        <Container id="projects" className='text-center'>
            <div className='projects-header'>
                <center><img className='projects-title-text' src={projectsText} alt={"projects-title-text"} width={365} height={105}/></center>
                <br/>
                <p className='projects-header-sub-title'>Below are a few of my javascript projects. See more on my <a target="_blank" rel="noreferrer" href="https://github.com/hao441" className='projects-title-github-link'>Github</a>.</p>
            </div>
            <Row>
                <Col>
                    <br/>
                    <div className='card-2'>
                    <br/>
                        <h3 className='card-title'>Tripset</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React/Redux</div>
                            <div className='card-technology'>Express</div>
                            <div className='card-technology'>Mongodb</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Tripset is an itinerary app that will let you create trips, itineraries for those trips and track them through a list view or map view.</p>
                            <br/>
                            <p className='card-paragraph'>The app is built with Redux and Mongodb allowing for truly seamless authentication and itinerary tracking.</p>
                            <br/>
                            <p className='card-paragraph'>Plan your next trip now.</p>
                        </div>
                        <br/>
                        <div className='project-button-container'>
                            <a className='demo-button' target="_blank" rel="noreferrer" href={"https://tripsetproject.netlify.app"}>Demo</a>
                            <a className='git-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Tripset-Web"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
                <Col>
                    <br/>
                    <div className='card-2'>
                        <br/>
                        <h3 className='card-title'>Evo</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React</div>
                            <div className='card-technology'>JS</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Evo is a genetic algorithm that is composed of a grid of 300 cells each with independent classes controlling their background colour.</p>
                            <br/>
                            <p className='card-paragraph'>A target colour is chosen then the evolution starts, all cells cycle through hexcode combinations until they find it.</p>
                            <br/>
                            <p className='card-paragraph'>Watch evolution happen.</p>
                            <br/>
                        </div>
                        <div className='project-button-container'>
                            <a className='demo-button' target="_blank" rel="noreferrer" href={"https://evoproject.netlify.app"}>Demo</a>
                            <a className='git-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Evo"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
                <Col>
                    <br/>
                    <div className='card-2'>
                        <br/>
                        <h3 className='card-title'>Farfriends</h3>
                        <div className='card-technologies'>
                            <div className='card-technology'>React</div>
                            <div className='card-technology'>Express</div>
                            <div className='card-technology'>Tensorflow</div>
                        </div>
                        <br/>
                        <div className='paragraph-container'>
                            <p className='card-paragraph'>Farfriends is an app where you can chat to three of the most popular cartoon characters as chatbots Yoda, Lisa Simpson and Stitch.</p>
                            <br/>
                            <p className='card-paragraph'>The app utilises three ML libraries to perform optimal context matching, fallback generation and filtering.</p>
                            <br/>
                            <p className='card-paragraph'>Talk to your childhood friend now.</p>
                            <br/>
                        </div>
                        <div className='project-button-container'>
                            <a className='demo-button' target="_blank" rel="noreferrer" href={"https://farfriends.netlify.app"}>Demo</a>
                            <a className='git-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Farfriends"}>Github</a>
                        </div>
                        <br/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}