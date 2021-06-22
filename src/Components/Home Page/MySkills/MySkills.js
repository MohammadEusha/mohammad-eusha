import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MySkills = () => {
    useEffect(() => {

        AOS.init({ duration: 2000 });

    }, [])
    return (
        <Container id="Skills" className="text-light mt-5 mb-5" fluid>
            <div className="text-center">
                <h1 style={{ paddingTop: "100px" }}>My Tech Skills</h1>
                <div >
                    <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}> What I know </span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
                </div>
            </div>
            <Row className="text-light  mt-5">
                <Col className="pt-5 pb-5 mb-5" md={4}>
                    <div class="w3-container">
                        <div className="mb-3 mt-3">
                            <h2 style={{ color: '#f50057' }} className="text-center pb-5">Frontend</h2>
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">HTML</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">CSS</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">70%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '70%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">SASS</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">70%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '70%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">JavaScript</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">TypeScript</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">React JS</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">React Native</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Bootstrap</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Tailwind</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Material UI</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">70%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '70%', height: '10px' }}> </div>
                            </div>
                        </div>

                    </div>
                </Col>


                <Col className="pt-5 pb-5 mb-5" md={4}>
                    <div class="w3-container">
                        <div className="mb-3 mt-3">
                            <h2 style={{ color: '#f50057' }} className="text-center  pb-5">Backend</h2>
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Node JS</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Express JS</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Mongo DB</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                    </div>
                </Col>



                <Col className="pt-5 pb-5 mb-5" md={4}>
                    <div class="w3-container">
                        <div className="mb-3 mt-3">
                            <h2 style={{ color: '#f50057' }} className="text-center  pb-5">Hosting Platforms</h2>
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Github</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Netlify</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">80%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '80%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Firebase</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <Row>
                                <Col xs={8} md={10}>
                                    <h3 class="w3-text-white">Heroku</h3>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h3 class="w3-text-pink">90%</h3>
                                </Col>
                            </Row>
                            <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-pink w3-round-large" style={{ width: '90%', height: '10px' }}> </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MySkills;