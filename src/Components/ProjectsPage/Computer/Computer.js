import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import computer from '../../../images/computer.png'


const Computer = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }} id="Computer" className="p-5 mt-5  m-5 pt-5 text-light">
            <h1 className="text-center mb-5 pb-5">Computer Garage Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1>Computer Garage</h1>
                    <p>The Website is about your computer repair services . In this site you will find some cards about names of services , its prices and its descriptions . You will find a button in every card named as Repair . Click on the button then login with your Google account and repair your computer.</p>
                    <h2>Features</h2>
                    <ul>
                        <li> Google Sign-In</li>
                        <li>Admin Panel</li>
                        <li>Customer Panel</li>
                        <li> Service Add System</li>
                        <li>Customer Review System</li>
                        <li>Stripe Payment System</li>
                        <li>Status Update</li>
                    </ul>
                    <h2>Technology</h2>
                    <ul>
                        <li>Frontend : HTML , CSS, Bootstrap, JavaScript, React JS</li>
                        <li> Backend : NodeJS, Express, Postman, Mongo DB.</li>
                        <li>Deploy Tools : Firebase, Heroku, Github.</li>
                    </ul>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={computer} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Computer;