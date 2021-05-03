import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import rImg from '../../../images/right-arrow (1).png'
import lImg from '../../../images/left-arrow (1).png'
import me from '../../../images/image 17 (1).png'
import '../../Css/Css.css'
import pdf from "../../../images/Updated Resume 1.pdf"
import Typewriter from 'typewriter-effect';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div id="Home" className="header-bg mt-5 pt-5">
            <Container className="text-light " fluid>
                <h4 data-aos="slide-down" className="text-center pt-5 " style={{ color: '#f50057' }}>Welcome To My World</h4>
                <Row className=" d-flex align-items-center text-light offset-1 mt-5">
                    <Col data-aos="slide-right" className=" pt-5" md={6}>
                        <h2 style={{ color: '#f50057' }}>Hello , My Name Is</h2>
                        <h1>Mohammad Eusha</h1>
                        <Row>
                            <h3 className="pl-3">And I Am A</h3>
                            <img style={{ height: "30px", marginLeft: "6px" }} src={lImg} alt="" />
                            <span style={{ color: '#f50057' }}>
                                <h3>
                                    <Typewriter
                                        options={{
                                            strings: ["Frontend Developer", "Backend Developer", "Website designer"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                            </span>
                            <h3 style={{ color: "#186648", fontWeight: 'bolder', height: "30px" }}> /</h3>
                            <img src={rImg} style={{ height: "30px" }} alt="" />


                        </Row>
                        <a href={pdf} download> <button style={{ backgroundColor: '#f50057' }} className="btn btn-lg text-light mt-3">Download Resume</button></a>

                    </Col>
                    <Col data-aos="slide-left" md={6}>
                        <img className="img-fluid mb-0 pb-0" src={me} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;