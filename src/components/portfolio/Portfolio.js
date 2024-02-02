import React from 'react'
import './portfolio.css'
import dict1 from '../../images/dict1.jpg'
import dict2 from '../../images/dict2.png'
import tic1 from '../../images/tic1.png'
import tic2 from '../../images/tic2.png'
import planner1 from '../../images/planner1.png'
import planner2 from '../../images/planner2.png'
// import logo from '../../images/a (1).png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>My Projects</h1>
      <h3>These are the projects that I have worked on or I am currently working on.</h3>
      <div className="container proj-cont">
        {/* project 1 */}
        <article className="project">
          <div className="proj-left">
            <h3>DictApp-Web based Dictionary Application</h3>
            <small>Enabled easy access to word meanings, synonyms, antonyms, Word of
              the Day and pronunciations for improved language skills.
              Utilized a free dictionary API to fetch real-time data.<br />
              used: React.js, HTML, CSS, TailblocksCC, JavaScript,
              MySQL, Node.js
            </small>
            <div className="btns">
              <a href="https://github.com/afrahSK/DictApp" target='_blank' className='btn'>Github</a>
              {/* <a href="#" target='_blank' className='btn'>Live Demo</a> */}
            </div>
          </div>
          <div className="proj-right">
            <img className='img' src={dict1} alt="dictApp" />
            <img className='img' src={dict2} alt="dictApp" />
          </div>
        </article>
        {/* project 2 */}

        <article className="project">
          <div className="proj-left">
            <h3>TaskEase-To-do List Web-App</h3>
            <small>Developed a user-friendly To-Do List/task tackler application using React
              and local storage.
              Implemented features for adding, editing, and deleting tasks with a
              seamless user interface.
              Technologies used: HTML, CSS, React.js, Bootstrap, MySQL
            </small>
            <div className="btns">
              <a href="https://github.com/afrahSK/TicTacToe" target='_blank' className='btn'>Github</a>
              {/* <a href="#" target='_blank' className='btn'>Live Demo</a> */}
            </div>
          </div>
          <div className="proj-right">
            <img className='img tic' src={planner1} alt="planner" />
            <img className='img tic' src={planner2} alt="planner" />
          </div>
        </article>
        {/* project 3 */}

        <article className="project">
          <div className="proj-left">
            <h3>Tic-Tac-Toe using React.js</h3>
            <small>Designed and implemented a classic Tic Tac Toe game using React,
              showcasing my proficiency in front-end development.<br />
              used: React.js,CSS</small>
            <div className="btns">
              <a href="https://github.com/afrahSK/TicTacToe" target='_blank' className='btn'>Github</a>
              {/* <a href="#" target='_blank' className='btn'>Live Demo</a> */}
            </div>
          </div>
          <div className="proj-right">
            <img className='img tic' src={tic1} alt="tic" />
            <img className='img tic' src={tic2} alt="tic" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio