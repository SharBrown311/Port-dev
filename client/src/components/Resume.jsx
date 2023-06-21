import React from 'react'
import "./Main.css"
function Resume() {
  return (
    // page-container
    <div className='Resume main-container'>
      <div className='left-column card'>
       <div className='container card image-container' >
        </div>
        <div className='bottom-left-container'>
          <h2 style = {{textAlign: "center"}}>Sharon Brown</h2>
          <p className='text'><i className='fas fa-briefcase'></i>&nbsp;&nbsp;Web Developer</p>
          <p className='text'><i className='fas fa-house'></i>&nbsp;&nbsp;Glassboro, NJ</p>
          <p className='text'><i className='fas fa-envelope-open-text'></i>&nbsp;&nbsp;sbsharonbrown311@gmail.com</p>
          <p className='text'><i className='fas fa-phone'></i>&nbsp;&nbsp;(856)974-0836</p>
          <p><a href = "#">Github</a></p>
          <p><a href = "#">LinkedIn</a></p>
          </div>
          <hr />
          <div>
            <br />
            <h4>
          <i className='fas fa-asterisk'></i>
          &nbsp;Skills: 
          </h4>
          <p className='text'>Front-end Development: 
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          </p>
          <p className='text'>Back-end Development: 
            <li>ExpressJS</li>
            <li>Mongoose & MongoDB</li>
            <li>Node.js</li>
            <li>Rest APIs</li>
          <br />
          <li>Testing and debugging</li>
          <li>Communication</li>
          <li>Responsive Design</li>
          <li>Collaborative Teamwork</li>
          </p> 
          </div>
          <br />
          <hr/>
          <div className='container'>
            <h4><i className='fas fa-book-open'></i>&nbsp;References</h4>
            <p>Stanley Miller - Merchandising Inventory Leader, PetSmart</p>
          </div>

            <hr />
          <div className='container'>
          <h2><i className='fas fa-certificate'></i>&nbsp;Education</h2>
            <h5 className='V-School'>VSchool, Salt Lake City, UT</h5>
            <h6>
              <i className='fas fa-calendar-days'>
              </i>Aug 2022 - June 2023</h6>
            <p>&nbsp;Web Development Certification</p>
            <p><a href = "https://app.digit.ink/view-credential/001c758e-428b-4118-8351-bd68e71074ee">Certification Credentials</a></p>
            </div>
        </div>
        <br />
  
       
      
    
      <div className='right-column'>
        <div className='container card'>
          <h2>
            <i className='fas fa-suitcase'></i>
            &nbsp;Work Experience
          </h2>
          <div className='container'>
            <h5>&nbsp;Associate Lead with Keys / PetSmart - Moorestown, NJ</h5>
            <h6><i className='fas fa-calendar-days' style = {{fontSize: "17px"}}></i>&nbsp;Oct 2017 - March 2021</h6>
            <li>Trained team members in successful strategies to meet operational and sales targets.</li>
            <li>Offered hands-on assistance to customers assessing needs and maintaining current knowledge of consumer preferences</li>
            <li>Designed and built displays to generate customer interest in store merchandise.</li>
            <li>Conducted product demonstrations to highlight features and redirect objections to positive aspects.</li>
          
          </div>
          <hr />
        
          <div className='container'>
            <h5>&nbsp;Assistant Manager / Domino's Pizza - Glassboro, NJ</h5>
            <h6><i className='fas fa-calendar-days'></i>&nbsp;Feb 2015 - Jun 2016</h6>
            <li>Helped with planning schedules and delegating assignments to meet coverage and service demands.</li>
            <li>Supervised day-to-day operations to meet performance, quality and service expectations.</li>
            <li>Launched quality assurance practices for each phase of development.</li>
            <li>Leveraged data and analytics to make informed decisions and drive business improvements.</li>
          </div>
          <hr />

          <div className='container'>
            <h5>&nbsp;Game Advisor / GameStop - Glassboro, NJ</h5>
            <h6><i className='fas fa-calendar-days'></i>&nbsp;Aug 2014 - Apr 2015</h6>
            <li>Answered product questions, offering troubleshooting and advice before and after purchase.</li>
            <li>Tested consoles in order to provide complete information to customers.</li>
            <li>Offered comparative analysis between games and system platforms to assist purchase decisions.</li>
            <li>Demonstrated games and gaming devices to customers unfamiliar with technology, answered questions and made recommendations.</li>
          </div>
          </div>
         
          </div>
          <br />
          <br />
      </div>
  )
}

export default Resume