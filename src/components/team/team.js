import React from "react"
import './team.scss'
import faker from 'faker';

const Team = () => {
    return(
        <div className="team">
            <div className="owner-card">
                <div className="team-card">
                    <h2>Spencer Butterfield</h2>
                    <img src={faker.image.avatar()}></img>
                    <h3>Owner</h3>
                </div>
            </div>
            <div className="team-wrapper">
                <div className="team-card">
                    <h2>Alex Manning</h2>
                    <img src={faker.image.avatar()}></img>
                    <h3>Vice President</h3>
                </div>
                <div className="team-card">
                    <h2>Other person</h2>
                    <img src={faker.image.avatar()}></img>
                    <h3>Site Foreman</h3>
                </div>
                <div className="team-card">
                    <h2>Other person</h2>
                    <img src={faker.image.avatar()}></img>
                    <h3>Custom Flooring</h3>
                </div>
            </div>
        </div>
    )
}

export default Team;