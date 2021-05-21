import { faChalkboardTeacher, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import Values from '../../../images/Values.jpeg'
import JSX from '../../../images/JSX.png'
import Arrays from '../../../images/Arrays.jpeg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyServices = () => {

    useEffect(() => {

        AOS.init({ duration: 2000 });

    }, [])
    return (


        <Container id="Blogs" className="text-light mt-5 mb-5" fluid>
            <div className="text-center mb-5 pb-5">
                <h1 style={{ paddingTop: "100px" }}>My Recent Blogs</h1>
                <div>
                    <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}> What I Think </span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
                </div>
            </div>
            <CardDeck>
                <Row>
                    <Col className="mt-5" md={4}>
                        <Card className=" shadow focus h-100 mb-5" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={JSX} />
                            <Card.Body>
                                <Card.Title>JavaScript: Everything About JSX (Part 1)</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="  https://eusha37.medium.com/javascrip-everything-about-jsx-part-1-7bc46ac2658f" target="_blank">  <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block> <FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button></a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="mt-5" md={4}>
                        <Card className=" shadow focus h-100 mb-5" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={Arrays} />
                            <Card.Body>
                                <Card.Title>JavaScript: Everything about arrays (Part 1).</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="  https://eusha37.medium.com/javascript-everything-about-arrays-part-1-3e22babcf1ad" target="_blank">  <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block> <FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button></a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="mt-5" md={4}>
                        <Card className=" shadow focus h-100 mb-5" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={Values} rounded />
                            <Card.Body>
                                <Card.Title>JavaScript: Truthy and Falsy Values In Condition</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="  https://eusha37.medium.com/javascript-truthy-and-falsy-values-in-condition-27e50242539c" target="_blank">  <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block> <FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button></a>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </CardDeck>
        </Container>
    );
};

export default MyServices;