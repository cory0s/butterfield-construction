import React from 'react';
import './projects.scss';
import Picture from '../../../content/images/bus.jpg';

const Projects = () => {

    return (            
        <div className="projects">
            <h1>Our Work</h1>
            <div id="project1">
                <img src={Picture}></img>
                <p>These are some recent projects</p>
            </div>
        </div>
    )
}

export default Projects;