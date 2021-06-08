import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import r1 from '../../../images/Resume 1.png'
import r2 from '../../../images/Resume 2.png'
import INav from '../INav/INav';
import pdf from "../../../images/Mohammad Eusha Resume.pdf"
const MyInfo = () => {

    return (
        <div>
            <div>
                <INav></INav>
            </div>
            <div style={{ backgroundColor: '#12161f', color: "white", paddingTop: "" }}>
                <div className="mt-5 pt-5 pb-3 p-5" >
                    <Row>
                        <Col md={6}>
                            <h3 style={{ color: "#f50057" }} >Full Stack Web Developer</h3>
                            <p>Hi, I'm Mohammad Eusha, an independent , self-
                 motivated, passionate and energetic professional Web Development expert with valuable experience in HTML, CSS, Java Script ,React JS and Web Designing.</p>
                            <h4 style={{ color: "#f50057", paddingTop: '20px' }}>Professional Skills</h4>
                            <ul>
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>HTML / HTML 5</li>
                                <li> CSS / CSS 3</li>
                                <li>JavaScript</li>
                                <li>React Js</li>
                                <li>TypeScript</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                            </ul>
                            <h4 style={{ color: "#f50057" }} >Technology I Used</h4>
                            <h5>Frontend Development</h5>
                            <ul>
                                <li>Bootstrap</li>
                                <li>Material UI</li>
                                <li>React Spring</li>
                            </ul>
                            <h5>Backed Development</h5>
                            <ul>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Mongo DB</li>
                                <li>Postman </li>
                            </ul>
                            <h4 style={{ color: "#f50057" }} >Tools I Use For Hosting</h4>
                            <ul>
                                <li>Firebase</li>
                                <li>Heroku</li>
                                <li>Github</li>
                                <li>Netlify </li>
                            </ul>
                            <h4 style={{ color: "#f50057" }} >Personal Skills</h4>
                            <ul>
                                <li>Creative Sprit</li>
                                <li>Reliable ans Professional</li>
                                <li>Organized</li>
                                <li>Time Management</li>
                                <li>Team Player</li>
                                <li>Fast Learner</li>
                                <li>Self Motivated</li>
                                <li>Energetic</li>
                            </ul>

                            <div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={{ color: "black" }}>
                                <Row>
                                    <Col md={7} className='d-flex align-items-end'> <h3 style={{ color: "#f50057" }} >My Resume</h3></Col>
                                    <Col md={3}>  <a href={pdf} download> <button style={{ backgroundColor: '#f50057' }} className="btn btn-lg text-light mt-3">Download It</button></a></Col>

                                </Row>
                                <Carousel className="d-block w-75" fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={r1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={r2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default MyInfo;