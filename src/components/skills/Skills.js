import React from 'react'
import './skills.css'
import { FaClipboardCheck } from "react-icons/fa";
const Skills = () => {
    return (
        <section id="skills">
            <h1>My Skills</h1>
            <div className="container skill-cont">
                <div className="skill-languages">
                    <h3>Languages</h3>
                    <div className="skill-det">
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>Java</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>Python</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>C++</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>C#</h4>
                                <small>Novice</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skill-frameworks">
                    <h3>Frameworks and Libraries</h3>
                    <div className="skill-det">
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>React.js</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <div>
                                <h4>Tkinter</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skill-other">
                    <h3>Other skills</h3>
                    <div className="skill-det other">
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>HTML</h4>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>CSS3</h4>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>SQL(MySQL,OracleSQL)</h4>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>Data Structures and Algorithms</h4>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>Object Oriented Programming</h4>
                        </article>
                        <article>
                            <FaClipboardCheck className='skill-det-icon' />
                            <h4>Git</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills