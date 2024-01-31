import React from 'react'
import './about.css'
const About = () => {
    return (
        <section id='about'>
            <h1 className="ab-title">About Me</h1>
            <div className="container ab-cont">
                <div className="ab-cards">
                    <article className="ab-card">
                        <h5>Education</h5>
                        <small>Bachelor of Computer Applications<br />(2021-24)</small>
                    </article>
                </div>
                <p className='ab-p'>Hello! I'm an aspiring software developer with a passion for crafting meaningful and impactful web solutions. I am enthusiastic to create innovative and user-friendly applications that leave a lasting impression.

                    <br /><br /> My skills span across a variety of languages and frameworks, including React, MySQL for efficient data management, Java and Python, and a keen interest in solving problems through Data Structures and Algorithms.
                    <br /><br />I am on the lookout for impactful opportunities that allow me to contribute to innovative projects and grow as a software developer.
                    <br /><br />Explore my portfolio to see the projects I've worked on.
                    <br /><br />Let's build something extraordinary together!
                </p>
            </div>
        </section>
    )
}

export default About