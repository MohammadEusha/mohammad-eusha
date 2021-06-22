import React from 'react';
import { Col, Row } from 'react-bootstrap';
import restaurants from '../../../images/Epic Eateries.png'
const Restaurant = () => {
    return (
        <div style={{ backgroundColor: '#12161f', padding: "90px" }} id="Restaurant" className=" mt-5   text-light">
            <h1 style={{ color: "#f50057" }} className="text-center mb-5 pb-5">Epic Eateries Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1 style={{ color: "#f50057" }}>Epic Eateries</h1>
                    <p>The Website is about foods ordering services. In this site you will find some cards about names of foods, its prices and its descriptions . You will find a button in every card named as Order Now. Click on the button then login with your Google account and order your foods.</p>

                    <h2 style={{ color: "#f50057" }}>Features</h2>
                    <ul>
                        <li> Google Sign-In</li>
                        <li>Admin Panel</li>
                        <li>Customer Panel</li>
                        <li> Food Add System</li>
                        <li>Customer Review System</li>
                        <li>Stripe Payment System</li>

                    </ul>
                    <h2 style={{ color: "#f50057" }}>Technology</h2>
                    <ul>
                        <li>Frontend : CSS, Bootstrap, React Bootstrap, JavaScript, React JS, React Redux, Redux Thunk</li>
                        <li> Backend : NodeJS, Express, Postman, Mongo DB.</li>
                        <li>Deploy Tools : Firebase Github.</li>
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