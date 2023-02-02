import React, {useRef} from 'react';
import './App.css';


import github from './git-square.png';
import linkedin from './linkedin-square.png';
import email from './email-square.png';

import resume from './Harrison Oates - Resume 2023.pdf'

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
            <h1 className='introduction-title '>Harrison</h1>
            <h2 className='introduction-sub-title'>Full Stack Developer</h2>
            <p className='introduction-paragraph'>Welcome! My name is Harrison, and I specialise in Javascript and React. I want to deploy technology that shapes the future.</p>
            <button className='introduction-projects-button' onClick={handleProjectsClick}>View Projects</button>
            {/* <br/> */}
            <button className='introduction-resume-button' onClick={() => window.open(resume, "_blank")}>View Resume</button>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
              <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a> */}
          </div>
        </div>
        <div ref={projectsRef} id="projects" className='projects-grid'>
          <div className='projects-header'>
            <h1 className='projects-header-title'>Projects</h1>
            <br/>
            <br/>
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
              <div className='paragraph-container'>
              <p className='card-paragraph'>Tripset helps with keeping track and keeping up to date with trip itineraries. Once a user signs up, they can create a trip and itinerary items for that trip.</p>
              <br/>
              <p className='card-paragraph'>On the home screen, the user can access all their trips. Upon clicking on a trip, they will see their itinerary in a list format where they can expand an item to see it in more detail or edit it.</p>
              <br/>
              <p className='card-paragraph'>The user can switch to map view, where each itinerary item is placed on a map with a line drawn through all items based on their dates and times.</p>
              <br/>
              </div>
              <button className='projects-button' onClick={() => window.open("https://tripset.harrisonoates.io", "_blank")}>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Tripset-Web", "_blank")}>Github</button>
              
            </div>
            <div className='card'>
            <h3 className='card-title'>Evo</h3>
              <p className='card-summary'>Genetic Algorithm Visualiser</p>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>JS</div>
              </div>
              <div className='paragraph-container'>
              <p className='card-paragraph'>Evo is a genetic algorithm that operates almost as a Rubik's Cube solver.</p>
              <br/>
              <p className='card-paragraph'>
It starts as a grid of 300 cells with the target colour as their background. However, each cell's background colour is controlled by an 'Individual' object with its colour chromosome.</p>
              <br/>
              <p className='card-paragraph'>When Evo begins, Individuals are ranked based on how close their chromosome colour is to the target colour then the top ten per cent go through to the next generation. Generations continue till all cells are the target colour again.</p>
              <br/>
              </div>
              <button className='projects-button' onClick={() => window.open("https://evo.harrisonoates.io", "_blank")}>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Evo", "_blank")}>Github</button>

              
            </div>
            <div className='card'>
            <h3 className='card-title'>Farfriends</h3>
              <p className='card-summary'>Cartoon Character Chatbots</p>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>Express</div>
                <div className='card-technology'>Tensorflow</div>
              </div>
              <div className='paragraph-container'>
                <p className='card-paragraph'>Farfriends are a group of chatbots representing different cartoon characters; Yoda, Lisa Simpson and Stitch from Lilo and Stitch.</p>
                <br/>
                <p className='card-paragraph'>The application predicts the context of a user's message and then maps the context to a response that a part-of-speech NLP model manipulates to impersonate the given character.</p>
                <br/>
                <p className='card-paragraph'>A TensorFlow QNA model will handle the message and return a response if the message doesn't accurately match a context.</p>
                <br/>
              </div>
              <button className='projects-button' onClick={() => window.open("https://farfriends.harrisonoates.io", "_blank")}>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Farfriends", "_blank")}>Github</button>
              
            </div>
            <div className='ender'></div>
          </div>
              </div>
          {/* projects end */}
          <div className='contact-grid'>
            <div className='contact'>
              <h1 className='contact-title'>Contact</h1>
              <h2 className='contact-sub-title'>Open to software developer opportunities</h2>
              <p className='contact-paragraph'>Feel free to reach out to me on one of the below links.</p>
              <br/>
              <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-git' src={github} alt="github-icon"/></a>
              <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-email' src={email} alt="email-icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-li' src={linkedin} alt="linkedin-icon"></img></a>
              <br/>
              <button className='contact-button' onClick={handleTopClick}>Back to Top</button>
            </div>
          </div>
      </>
    );
  }

export default App;
