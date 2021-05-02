import { faEnvelope, faMapMarkerAlt, faMinus, faMobileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
const Contact = () => {
    function sendEmail(e) {


        emailjs.sendForm('gmail', 'template_551rfem', e.target, 'user_3N6sMkaA5ypB6vqfBXAJh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.preventDefault();
        e.target.reset()
        Swal.fire(
            'Message Sent Successfully!',
            '',
            'success'
        )


    }
    return (
        <Container id="Contact" className="text-light mt-5 mb-5 pb-5" fluid>
            <div className="text-center">
                <h1 style={{ paddingTop: "100px" }}>Contact Me</h1>
                <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} /> <span style={{ color: '#f50057', fontSize: "20px" }}>Let's Say HI</span> <FontAwesomeIcon icon={faMinus} style={{ color: 'white' }} />
            </div>
            <Row className="text-light offset-1 mt-5">
                <Col md={5}>
                    <h2> Get in  <span style={{ color: '#f50057' }}>Touch</span><span style={{ color: '#f50057' }}>.</span></h2>

                    <p style={{ color: 'White' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi illum voluptate ab assumenda sequi inventore at id praesentium? Voluptatum ex nemo adipisci iure, in reiciendis inventore! Ipsam quas at repudiandae!</p>

                    <div style={{ paddingTop: '30px', color: 'white' }}>
                        <Row>
                            <Col className="pt-3" md={1}>
                                <FontAwesomeIcon icon={faUser} style={{ color: '#f50057', fontSize: '40px' }} />
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h3 class="head">Name</h3>
                                    <h3 class="sub-title">Mohammad Eusha</h3>
                                </div>
                            </Col>

                        </Row>
                        <Row >
                            <Col className="pt-3" md={1}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#f50057', fontSize: '40px' }} />
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h3 class="head">Address</h3>
                                    <h3 class="sub-title">Khulna, Bangladesh</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pt-3" md={1}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f50057', fontSize: '40px' }} />
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h3 class="head">Email</h3>
                                    <h3 class="sub-title">eusha37@gmail.com</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pt-3" md={1}>
                                <FontAwesomeIcon icon={faMobileAlt} style={{ color: '#f50057', fontSize: '40px' }} />
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h3 class="head">Phone</h3>
                                    <h3 class="sub-title">+880 1783628255</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col md={6}>
                    <div>
                        <div className="container">
                            <form onSubmit={sendEmail}>
                                <div className="row pt-5">
                                    <div className="col-8 form-group mx-auto">
                                        <input style={{ border: '2px solid #f50057', backgroundColor: '#12161f', color: 'white' }} type="text" className="form-control" placeholder="Name" name="name" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input style={{ border: '2px solid #f50057', backgroundColor: '#12161f', color: 'white' }} type="email" className="form-control" placeholder="Email Address" name="email" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input style={{ border: '2px solid #f50057', backgroundColor: '#12161f', color: 'white' }} type="text" className="form-control" placeholder="Subject" name="subject" />
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <textarea style={{ border: '2px solid #f50057', backgroundColor: '#12161f', color: 'white' }} className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" style={{ backgroundColor: "#f50057", color: 'white' }} className="btn btn-lg" value="Send Message"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Contact;