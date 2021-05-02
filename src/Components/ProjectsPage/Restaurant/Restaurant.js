import React from 'react';
import { Col, Row } from 'react-bootstrap';
import restaurants from '../../../images/resturant.png'
const Restaurant = () => {
    return (
        <div style={{ backgroundColor: '#12161f', padding: "90px" }} id="Restaurant" className=" mt-5   text-light">
            <h1 style={{ color: "#f50057" }} className="text-center mb-5 pb-5">Restaurant Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1 style={{ color: "#f50057" }}>Restaurant</h1>
                    <p>The Website is about Foods of a Restaurant.In this site you will at first find a search box.Write a food name what you want to take then click on search Icon.Then Enjoy.</p>

                    <h2 style={{ color: "#f50057" }}>Technology</h2>
                    <ul>
                        <li>Frontend : HTML , CSS, Bootstrap, JavaScript, React JS</li>
                        <li>Deploy Tools :  Github.</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}>Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={restaurants} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Restaurant;