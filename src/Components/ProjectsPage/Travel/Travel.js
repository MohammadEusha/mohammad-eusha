import React from 'react';
import { Col, Row } from 'react-bootstrap';

import travel from '../../../images/city.png'

const Travel = () => {
    return (
        <div id="Central" className=" p-5 mt-5  m-5 pt-5 text-light">
            <h1 style={{ color: "#f50057" }} className="text-center mb-5 pb-5">Central City Travels Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1 style={{ color: "#f50057" }}>Central City Travels</h1>
                    <p>The Website is about Central City Travels . In this site you will at first find some cards about types of vehicles you want to go to your destination . You will find a button in every card named as Book Your Ride . Click on the button to Book and go to your destination.</p>
                    <h2 style={{ color: "#f50057" }}>Features</h2>
                    <ul>
                        <li> Google Sign-In</li>
                        <li>Email Password Log In</li>
                        <li>Google Map</li>
                        <li>Sign Out System</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}>Technology</h2>
                    <ul>
                        <li>Frontend : HTML , CSS, Bootstrap, JavaScript, React JS</li>
                        <li>Deploy Tools : Firebase, Github..</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}> Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={travel} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Travel;