import React from 'react';
import { Col, Row } from 'react-bootstrap';

import soccer from '../../../images/Soccer.png'
const Soccer = () => {
    return (
        <div id="Soccer" className="p-5 mt-5  m-5 pt-5 text-light  pb-5">
            <h1 style={{ color: "#f50057" }} className="text-center mb-5 pb-5">Soccer League Details</h1>
            <Row>
                <Col xs={12} md={6}>
                    <h1 style={{ color: "#f50057" }}>Soccer League</h1>
                    <p>The Website is about Soccer League.In this site you will at first find some cards about names of soccer leagues.You will find a button in every card named as Explore.Click on the button to see to see details..</p>
                    <h2 style={{ color: "#f50057" }}>Technology</h2>
                    <ul>
                        <li>Frontend : HTML , CSS, Bootstrap, JavaScript, React JS</li>
                        <li>Deploy Tools : Netlify Github.</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}>Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={soccer} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Soccer;