import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import computer from '../../../images/computer.png'
import grocery from '../../../images/store.png'
import travel from '../../../images/city.png'
import soccer from '../../../images/Soccer.png'
import restaurants from '../../../images/resturant.png'
import { Link } from 'react-router-dom';
import './MyProject.css'
const MyProject = () => {
    return (
        <Container className="text-light mt-5 mb-5" fluid>
            <div className="text-center pt-5 pb-5">
                <h1>My Projects</h1>
                <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}>Latest Work</span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
            </div>
            <CardDeck>
                <Row className="d-flex justify-content-center mt-5 mb-5">
                    <Col className="focus" md={4}>
                        <Card className="mb-5 shadow" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img className="h-50" variant="top" src={computer} rounded />
                            <Card.Body>
                                <Card.Title>Computer Garage</Card.Title>
                                <Card.Text>
                                    The Website is about your computer repair services . In this site you will find some cards about names of services , its prices and its descriptions . You will find a button in every card named as Repair . Click on the button then login with your Google account and repair your computer.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">

                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://computer-repair-web.web.app/" target="_blank"><button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >View Project  </button></a>
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://github.com/MohammadEusha/Computer-Garage" target="_blank"><button className="btn  btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >Source Code </button></a>
                                <Link to="/projects" href="#Computer">
                                    <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >About Project</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="focus" md={4}>
                        <Card className="mb-5 shadow" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img className="h-50" variant="top" src={grocery} />
                            <Card.Body>
                                <Card.Title>Grocery Store </Card.Title>
                                <Card.Text>
                                    The Website is about your daily grocery products.In this site you will at first find some cards about names of products,weight and prices.You will find a button in every card named as Buy Now.Click on the button then login with your Google account to order your products.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">

                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://grocery-store-client.web.app/" target="_blank"> <button className="btn btn-lg ml-3  text-light" style={{ backgroundColor: '#f50057' }} >View Project  </button></a>
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://github.com/MohammadEusha/Grocery-Store" target="_blank"> <button className="btn btn-lg ml-3  text-light" style={{ backgroundColor: '#f50057' }} >Source Code  </button></a>
                                <Link to="/projects" href="#Computer">
                                    <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >About Project</button>
                                </Link>


                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="focus" md={4}>

                        <Card className="mb-5 shadow" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={travel} className="h-50" />
                            <Card.Body>
                                <Card.Title>Central City Travels</Card.Title>
                                <Card.Text>
                                    The Website is about Central City Travels . In this site you will at first find some cards about types of vehicles you want to go to your destination . You will find a button in every card named as Book Your Ride . Click on the button to Book and go to your destination.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">

                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://central-city-travel.web.app/" target="_blank">      <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>View Project    </button></a>
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://github.com/MohammadEusha/Central-City-Travels" target="_blank">      <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>Source Code    </button></a>
                                <Link to="/projects" href="#Computer">
                                    <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >About Project</button>
                                </Link>


                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="focus" md={4}>
                        <Card className="mb-5 shadow" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={soccer} className="h-50" />
                            <Card.Body>
                                <Card.Title>Soccer League</Card.Title>
                                <Card.Text>
                                    The Website is about Soccer League.In this site you will at first find some cards about names of soccer leagues.You will find a button in every card named as Explore.Click on the button to see to see details..
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://legendary-soccer-league.netlify.app/" target="_blank">  <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>
                                    View Project
                            </button></a>
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://github.com/MohammadEusha/Soccer-League" target="_blank">  <button className="btn btn-lg ml-3  text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>
                                    Source Code
                            </button></a>
                                <Link to="/projects" href="#Computer">
                                    <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >About Project</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className="focus" md={4}>
                        <Card className="mb-5 shadow" style={{ backgroundColor: '#050c1a', border: '3px solid #f50057', borderRadius: '10px' }}>
                            <Card.Img variant="top" src={restaurants} className="h-100" />
                            <Card.Body>
                                <Card.Title>Restaurant</Card.Title>
                                <Card.Text>
                                    The Website is about Foods of a Restaurant.In this site you will at first find a search box.Write a food name what you want to take then click on search Icon.Then Enjoy.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-center">
                                <a style={{ textDecoration: 'none', color: 'white' }} href="  https://mohammadeusha.github.io/Restaurant/" target="_blank">  <button className="btn btn-lg ml-3  text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>View Project</button></a>
                                <a style={{ textDecoration: 'none', color: 'white' }} href=" https://github.com/MohammadEusha/Restaurant" target="_blank">  <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} size="lg" block>Source Code </button></a>
                                <Link to="/projects" href="#Computer">
                                    <button className="btn btn-lg ml-3 text-light" style={{ backgroundColor: '#f50057' }} >About Project</button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </CardDeck>
        </Container >
    );
};

export default MyProject;