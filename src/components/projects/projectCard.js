import React from 'react';
import './projects.scss';
// import Picture from '../../../content/images/bus.jpg';

const ProjectCard = (data) => {
    // console.log(project);
    return(
        <div className="project-card" key={data.project.address}>
            <h1>{data.project.address}</h1>
            <h2>{data.project.date}</h2>
            <div id={data.project.address}>
                {/* <img src={Picture} alt=""></img> */}
                <p>{data.project.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;