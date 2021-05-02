import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../../images/coding (2).png'
const BNav = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top" className="mb-5">
                <img className="w3-spin" style={{ width: '50px' }} src={Icon} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1"><span style={{ color: '#f50057' }}>Mohammad  Eusha</span></strong></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#f50057' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/'><strong className="btn btn-outline text-light">Home</strong></Nav.Link>
                        <Nav.Link href="#Frontend"><strong className="btn btn-outline-danger text-light" >Frontend Development</strong></Nav.Link>
                        <Nav.Link href="#Backend"><strong className="btn btn-outline-danger text-light">Backend Development</strong></Nav.Link>
                        <Nav.Link href="#Website"><strong className="btn btn-outline-danger text-light">Website Design</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BNav;