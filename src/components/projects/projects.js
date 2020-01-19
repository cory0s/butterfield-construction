import React from 'react';
import './projects.scss';
import ProjectCard from './projectCard';
import data from '../../../content/data/projects.json';

class Projects extends React.Component{

    render(){
        return(
            data.map(project => {
                return(
                    <div key={project.address}>
                    <ProjectCard project={project} />
                    </div>
                )
            })
        )
    }
}

export default Projects;