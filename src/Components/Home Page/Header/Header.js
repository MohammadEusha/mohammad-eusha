import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import rImg from '../../../images/right-arrow (1).png'
import lImg from '../../../images/left-arrow (1).png'
import '../../Css/Css.css'
import pdf from "../../../images/Resume.pdf"
import Typewriter from 'typewriter-effect';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div id="Home" className="header-bg mt-5 pt-5">
            <Container className="text-light " fluid>
                <Row className=" d-flex align-items-center text-light offset-1 mt-5">
                    <Col data-aos="zoom-out" className=" pt-5" md={6}>
                        <h2 style={{ color: '#f50057' }}>Hello , My Name Is</h2>
                        <h1>Mohammad Eusha</h1>
                        <Row>
                            <h3 className="pl-3">And I Am A</h3>
                            <img style={{ height: "30px", marginLeft: "6px" }} src={lImg} alt="" />
                            <span style={{ color: '#f50057' }}>
                                <h3>
                                    <Typewriter
                                        options={{
                                            strings: ["Frontend Developer", "Backend Developer", "Website Designer"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                            </span>
                            <h3 style={{ color: "#186648", fontWeight: 'bolder', height: "30px" }}> /</h3>
                            <img src={rImg} style={{ height: "30px" }} alt="" />


                        </Row>
                        <a href={pdf} download> <button style={{ backgroundColor: '#f50057' }} className="btn btn-lg text-light mt-3"> <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ color: 'white' }} /> Download Resume</button></a>

                    </Col>
                    <Col md={6}>
                        <lottie-player
                            src="https://assets5.lottiefiles.com/packages/lf20_1LhsaB.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay></lottie-player>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;