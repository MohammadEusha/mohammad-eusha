import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import front from '../../../images/frontend.jpg'
import back from '../../../images/backend.jpg'
import design from '../../../images/website design.jpg'
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
                <h1 data-aos="slide-right" style={{ paddingTop: "100px" }}>My Recent Blogs</h1>
                <div data-aos="slide-left">
                    <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}> What I Think </span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
                </div>
            </div>
            <CardDeck>
                <Row>
                    <Col data-aos="fade-up" md={4}>
                        <Card className="mb-5 shadow focus h-100" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img className="h-50" variant="top" src={front} rounded />
                            <Card.Body>
                                <Card.Title>Frontend Development</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link style={{ textDecoration: 'none' }} to='/blogs'>
                                    <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>
                                        Learn More
                        </button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col data-aos="fade-down" md={4}>
                        <Card className="mb-5 shadow focus h-100" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img className="h-50" variant="top" src={back} />
                            <Card.Body>
                                <Card.Title>Backend Development</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link style={{ textDecoration: 'none' }} to='/blogs'>
                                    <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>
                                        Learn More
                        </button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col data-aos="fade-up" md={4}>
                        <Card className="mb-5 shadow focus h-100" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={design} />
                            <Card.Body>
                                <Card.Title>Website design</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link style={{ textDecoration: 'none' }} to='/blogs'>
                                    <button className="btn btn-lg btn-block text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>
                                        Learn More
                                    </button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </CardDeck>
        </Container>
    );
};

export default MyServices;