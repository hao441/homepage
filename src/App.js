import './App.css';

import headerTextSmall from './images/headerTextSmall.png';
import headerText from './images/headerText.png';
import projectsText from './images/projectsText.png';
import contactText from './images/contactText.png';


import github from './images/git-square.png';
import linkedin from './images/linkedin-square.png';
import email from './images/email-square.png';

import resume from './assets/Harrison Oates - Resume 2023.pdf'

import { useMediaQuery } from '@material-ui/core';

const App = () => {

  const isMobile = useMediaQuery('(max-width: 999px)');

    return (
      <>
        <div id="introduction" className='introduction-grid'>
          <div className='introduction'>
            <img className='header-text-image' src={isMobile ? headerTextSmall : headerText} alt={'text'} width={1000} height={179}/>
            <h2 className='introduction-sub-title'>Full Stack Developer</h2>
            <p className='introduction-paragraph'>A javascript and python developer that wants to deploy technology that will shape the future.</p>
            <div className='small-flex'>
              <a className='introduction-projects-button' href='#projects'><span className='introduction-projects-button'>View Projects</span></a>
              <a className='introduction-resume-button' target="_blank" rel="noreferrer" href={resume}>View Resume</a>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-icon' src={github} alt="github-icon"/></a>
              <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-icon' src={email} alt="email-icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-icon' src={linkedin} alt="linkedin-icon"></img></a> */}
          </div>
        </div>
        <div id="projects" className='projects-grid'>
          <div className='projects-header'>
            <center><img className='projects-title-text' src={projectsText} alt={"projects-title-text"} width={365} height={110}/></center>
            <p className='projects-header-sub-title'>Below are a few of my javascript projects. See more on my <a target="_blank" rel="noreferrer" href="https://github.com/hao441" className='projects-title-github-link'>Github</a>.</p>
            <br/>
            <br/>
          </div>
          <div className='projects'>
            <div className='card'>
              <div>
                <h3 className='card-title'>Tripset</h3>
                <div className='card-technologies'>
                  <div className='card-technology'>React/Redux</div>
                  <div className='card-technology'>Express</div>
                  <div className='card-technology'>MongoDB</div>
                </div>
              </div>
              <div className='paragraph-container'>
                <p className='card-paragraph'>Tripset is an itinerary app that will let you create trips, itineraries for those trips and track them through a list view or map view.</p>
                <br/>
                <p className='card-paragraph'>The app is built with Redux and Mongodb allowing for seamless authentication and itinerary tracking.</p>
                <br/>
                <p className='card-paragraph'>Plan your next trip now.</p>
                <br/>
              </div>
              <div>
                <a className='projects-button' target="_blank" rel="noreferrer" href={"https://tripset.harrisonoates.io"}>Demo</a>
                <a className='projects-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Tripset-Web"}>Github</a>
              </div>
            </div>
            <div className='card'>
            <h3 className='card-title'>Evo</h3>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>JS</div>
              </div>
              <div className='paragraph-container'>
              <p className='card-paragraph'>Evo is a genetic algorithm that operates almost as a Rubik's Cube solver. A grid composed of 300 cells are controlled by independent classes.</p>
              <br/>
              <p className='card-paragraph'>
              These classes set their cell’s background colour to as close to the target colour as possible without knowing what it is.</p>
              <br/>
              <p className='card-paragraph'>Watch evolution happen on your screen.</p>
              <br/>
              </div>
              <a className='projects-button' target="_blank" rel="noreferrer" href={"https://evo.harrisonoates.io"}>Demo</a>
              <a className='projects-button' target="_blank" rel="noreferrer" href={"https://github.com/hao441/Evo"}>Github</a>

              
            </div>
            <div className='card'>
            <h3 className='card-title'>Farfriends</h3>
              <div className='card-technologies'>
                <div className='card-technology'>React</div>
                <div className='card-technology'>Express</div>
                <div className='card-technology'>Tensorflow</div>
              </div>
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
            </div>
            <div className='ender'></div>
          </div>
              </div>
          {/* projects end */}
          <div className='contact-grid'>
            <div className='contact'>
              <center><img className='contact-title' src={contactText} alt={'contact-title-text'} width={365} height={100}/></center>
              <p className='contact-paragraph'>I am currently open to software engineering opportunities so please reach out if you would like to work together.</p>
              <br/>
            <div className='contact-icons'>
              <a target="_blank" rel="noreferrer" href="https://github.com/hao441"><img className='contact-git' src={github} alt="github-icon"/></a>
              <a target="_blank" rel="noreferrer" href="mailto: harrisonoates@outlook.com"><img className='contact-email' src={email} alt="email-icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/harrison-o-476a2216b/"><img className='contact-li' src={linkedin} alt="linkedin-icon"></img></a>
              <br/>
            </div>
              <a className='contact-button' href="#introduction"><span className='back-to-top-text'>Back to Top</span></a>
            </div>
          </div>
      </>
    );
  }

export default App;
