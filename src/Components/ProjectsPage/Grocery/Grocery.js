import React from 'react';
import { Col, Row } from 'react-bootstrap';

import grocery from '../../../images/store.png'

const Grocery = () => {
    return (
        <div id="Grocery" className=" p-5 mt-5  m-5 pt-5  text-light">
            <h1 className="text-center mb-5 pb-5">Grocery Store Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1>Grocery Store</h1>
                    <p>The Website is about your daily grocery products.In this site you will at first find some cards about names of products,weight and prices.You will find a button in every card named as Buy Now.Click on the button then login with your Google account to order your products.</p>
                    <h2>Features</h2>
                    <ul>
                        <li> Google Sign-In</li>
                        <li>Admin Panel</li>
                        <li>Product Add System</li>
                        <li> Dashboard</li>
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
                    <img className="img-fluid" src={grocery} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Grocery;