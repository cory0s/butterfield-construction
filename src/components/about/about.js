import React from "react"
import './about.scss'
import Team from '../../../content/images/team.png';
import Work from '../../../content/images/work.png';
import Values from '../../../content/images/value.png';

const About = () => {
    return(
        <div className="about">
            <div>
                <img src={Values}></img>
                <h2>Values</h2>
                <p>Since 2006, Butterfield Construction has partnered with homeowners and design professionals to produce residential work of the highest quality. Our portfolio represents a mix of architect-designed homes and remodeling projects of both modest and expansive scale. Most of all, we like to make friends—and keep them.</p>
            </div>
            <div>
                <img src={Work}></img>
                <h2>Work</h2>
                <p>We’re all about doing it right. Our precision craftsmanship philosophy translates to everything from client communications to budgeting, staffing, on-site organization, and—of course—to the eventual construction outcome. What else are we dedicated to? Strategic sustainability.</p>
            </div>
            <div>
                <img src={Team}></img>
                <h2>Team</h2>
                <p>Our team is friends and family based and we've been working together for the greater part of our lives. Great teams are honest and communicative with each other and these are traits we carry with pride as we work together to build you the home of your dreams.</p>
            </div>
        </div>
    )
}

export default About;