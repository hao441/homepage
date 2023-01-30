import React, {useRef} from 'react';
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
        <div ref={introductionRef} className='background introduction-grid'>
          <div className=' introduction '>
            <h1 className='introduction-title '>Harrison</h1>
            <h2 className='introduction-sub-title'>Full Stack Developer</h2>
            <p className='introduction-paragraph'>Welcome, my name is Harrison and I specialise in JS and React. I am looking to deploy web apps on a massive scale.</p>
            <button className='introduction-button' onClick={handleProjectsClick}>View Projects</button>
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
              <p className='card-paragraph'>Tripset helps with keeping track and keeping up to date with trip itineraries.</p>
              <br/>
              <p className='card-paragraph'>On the home screen, the user can access all their trips. Upon clicking on a trip, they will see their itinerary in list format where they can expand an item to see the it in more detail or to edit it.</p>
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
              <p className='card-paragraph'>Evo is a genetic algorithm that operates almost as a rubix cube solver.</p>
              <br/>
              <p className='card-paragraph'>It starts as a grid of 300 cells all with the target colour as their background. Though each cell's background colour is controlled by an 'Individual' object with its own colour chromosome.</p>
              <br/>
              <p className='card-paragraph'>When Evo begins, Individuals are ranked based on how close their chromosome colour is to the target colour then the top ten percent go through to the next generation. Generations continue till all cells are the target colour again.</p>
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
                <div className='card-technology'>Tensorflow</div>
                <div className='card-technology'>React-router</div>
              </div>
              <div className='paragraph-container'>
                <p className='card-paragraph'>Farfriends are a group of chatbots that each represent a different cartoon character; Yoda, Lisa Simpson and Stitch from Lilo and Stitch.</p>
                <br/>
                <p className='card-paragraph'>The application works by predicting the context of a user's message then mapping the context to a response which is manipulated by a part-of-speech NLP model to impersonate the given character.</p>
                <br/>
                <p className='card-paragraph'>If a context cannot be accurately matched, the message will be put through a tensorflow qna model and then a fallback response will be given.</p>
                <br/>
              </div>
              <button className='projects-button' onClick={() => window.open("https://farfriends.harrisonoates.io", "_blank")}>Demo</button>
              <button className='projects-button' onClick={() => window.open("https://github.com/hao441/Farfriends", "_blank")}>Github</button>
              
            </div>
            <div className='ender'></div>
          </div>
          <div className='contact-grid'>
            <div className='contact'>
              <h1 className='contact-title'>Contact</h1>
              <h2 className='contact-sub-title'>Open to software developer opportunities</h2>
              <p className='contact-paragraph'>Feel free to reach out to me on one of the below links.</p>
              <br/>
              <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
              <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a>
              <br/>
              <button className='contact-button' onClick={handleTopClick}>Back to Top</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default App;
