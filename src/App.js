import React, {useRef} from 'react';
import { Navigate, Link } from 'react-router-dom';
import './App.css';


import github from './github-icon.png';
import linkedin from './linkedin.png';
import email from './email.png';

const App = () => {

  const projectsRef = useRef(null);
  const introductionRef = useRef(null);

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({behavior: "smooth"})
  }

  const handleTopClick = () => {
    introductionRef.current.scrollIntoView({behavior: "smooth"})
  }

    return (
      <>
        <div ref={introductionRef} className='introduction-grid'>
          <div className='introduction'>
            <h1 className='introduction-title'>Harrison</h1>
            <h2 className='introduction-sub-title'>Full Stack Developer</h2>
            <p className='introduction-paragraph'>Welcome, my name is Harrison and I specialise in JS and React. I am looking to deploy web apps on a massive scale.</p>
            <button className='introduction-button' onClick={handleProjectsClick}>View Projects</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <a target="_blank" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
              <a target="_blank" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
              <a target="_blank" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a>
          </div>
        </div>
        <div ref={projectsRef} id="projects" className='projects-grid'>
          <div className='projects-header'>
            <h1 className='projects-header-title'>Projects</h1>
            <p className='projects-header-sub-title'>Choose a project to view</p>
          </div>
          <div className='projects'>
            <div className='card'>
              <h3 className='card-title'>Tripset</h3>
              <p className='card-summary'>Itinerary Planning Web App </p>
              <div className='card-technologies'>
                <div className='card-technology'>React/Redux</div>
                <div className='card-technology'>Express</div>
                <div className='card-technology'>MongoDB</div>
              </div>
              <p className='card-paragraph'>A user will start by creating an account on Tripset using their email, first name and home city.</p>
              <br/>
              <p className='card-paragraph'>Once signed up the user will be able to create a trip followed by an itinerary for that trip including the date, time and location of each item.</p>
              <br/>
              <p className='card-paragraph'>Now when the user goes into the Trip they can view their itinerary items in a list view sorted by time and date or by map view, where Tripset will map the user's itinerary.</p>
              <br/>
              <br/>
              <button className='projects-button'>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Tripset-Web", "_blank")}>Github</button>
              
            </div>
            <div className='card'>
            <h3 className='card-title'>Evo</h3>
              <p className='card-summary'>Genetic Algorithm Visualiser</p>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>JS</div>
              </div>
              <p className='card-paragraph'>Evo partitions a large container into 300 cells each assigned to an 'Individual' object that controls the background colour of the cell.</p>
              <br/>
              <p className='card-paragraph'>Before the evolution starts the user will choose a colour which will become the colour of the whole box.</p>
              <br/>
              <p className='card-paragraph'>The genetic algorithm has a static population of 500 and each Individual has its own 'colour' chromosome. The fitness of the individual is scored by how close that chromosome is to the target colour.</p>
              <br/>
              <button className='projects-button'>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Evo", "_blank")}>Github</button>

              
            </div>
            <div className='card'>
            <h3 className='card-title'>Farfriends</h3>
              <p className='card-summary'>Cartoon Character Chatbots</p>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>Tensorflow</div>
                <div className='card-technology'>React-router</div>
              </div>
              <p className='card-paragraph'>At the start screen the user is prompted to select a cartoon character; Yoda, Lisa Simpson or Stitch from Lilo and Stitch and then click Start.</p>
              <br/>
              <p className='card-paragraph'>Now one of the three tensorflow models will load which will train on conversation lines which are mapped to their conversation context.</p>
              <br/>
              <p className='card-paragraph'>Now the chat UI will load and the user will be able to talk to their character. Once they ask a question, the model will be queried for the context then formulate a response.</p>
              <br/>
              
              <button className='projects-button'>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Farfriends", "_blank")}>Github</button>
              
            </div>
          </div>
          <div className='contact-grid'>
            <div className='contact'>
              <h1 className='contact-title'>Contact</h1>
              <h2 className='contact-sub-title'>Open to software developer opportunities</h2>
              <p className='contact-paragraph'>Feel free to reach out if you are a recruiter, fellow developer or anyone else.</p>
              <br/>
              <a target="_blank" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
              <a target="_blank" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
              <a target="_blank" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a>
              <br/>
              <button className='contact-button' onClick={handleTopClick}>Back to Top</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default App;
