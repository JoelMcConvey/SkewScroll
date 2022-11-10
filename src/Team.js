// React
import React from 'react';
// Animation
import { motion } from 'framer-motion';

function Team({ team }) {
    return (
        <div>
            <h2>{team.name}</h2>
            <a href={team.weblink} target="_blank" rel="noreferrer">
                <motion.img className="img-container" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={require(`./images/${team.teamID}.png`)} alt={team.teamID} />
            </a>
        </div>
    )
}

export default Team;