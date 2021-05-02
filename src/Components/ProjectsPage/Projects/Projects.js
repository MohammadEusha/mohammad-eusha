import React from 'react';
import Computer from '../Computer/Computer';
import Grocery from '../Grocery/Grocery';
import PNav from '../PNav/PNav';
import Restaurant from '../Restaurant/Restaurant';
import Soccer from '../Soccer/Soccer';
import Travel from '../Travel/Travel';

const Projects = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <PNav />
            <Computer></Computer>
            <Grocery></Grocery>
            <Travel></Travel>
            <Soccer></Soccer>
            <Restaurant></Restaurant>
        </div>
    );
};

export default Projects;