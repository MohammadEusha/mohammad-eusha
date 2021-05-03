import { faMinus, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../../../images/IMG_20180302_014239403-cutout.png'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <Container id="About" className="text-light mt-5 mb-5" fluid>
            <div className="text-center">
                <h1 data-aos="slide-left" style={{ paddingTop: "100px" }}>About Me</h1>
                <div data-aos="slide-right">
                    <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}> Who I Am </span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
                </div>
            </div>
            <Row className="d-flex align-items-center text-light offset-1 mt-5">
                <Col data-aos="zoom-out" className="pt-5 pb-5 mb-5" md={6}>
                    <img className="img-fluid" src={me} alt="" />
                </Col>
                <Col data-aos="zoom-in" className="pt-5 pb-5 mb-5" md={4}>
                    <Row>
                        <h2 className="pl-3"> I Am A </h2>
                        <FontAwesomeIcon icon={faTerminal} style={{ color: '#f50057', marginLeft: '10px', marginRight: '10px', fontSize: "38px" }} />
                        <h2 style={{ color: '#f50057', marginLeft: "6px" }}>  <Typewriter
                            options={{
                                strings: ["Full Stack Developer", "Web Designer"],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                    </Row>

                    <p className="mr-5">Hi, I'm Mohammad Eusha, an independent , self-motivated, passionate and energetic professional Web Development expert with valuable experience in HTML / HTML 5, CSS / CSS 3, Java Script ,React JS and Web Designing.</p>
                    <Link to="myInfo">  <button style={{ backgroundColor: '#f50057' }} className="btn btn-lg text-light mt-3">Learn More</button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default About;