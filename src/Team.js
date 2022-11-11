// React
import React from 'react';
// Animation
import { motion } from 'framer-motion';

function Team({ team }) {
    return (
        <div className="team-container">
            <h2>{team.name}</h2>
            <div className="team-header">
                <div className="team-heading-1">{team.stadium}</div>
                <div className="team-heading-2">{team.teamID + 1}/20</div>
            </div>
            <a href={team.weblink} target="_blank" rel="noreferrer">
                <motion.img className="img-container" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} src={require(`./images/${team.teamID}.png`)} alt={team.teamID} />
            </a>
        </div>
    )
}

export default Team;