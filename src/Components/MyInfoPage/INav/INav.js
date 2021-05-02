import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../../images/coding (2).png'

const INav = () => {
    return (
        <div >
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <img className="w3-spin" style={{ width: '50px' }} src={Icon} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1">Mohammad <span style={{ color: '#f50057' }}>Eusha</span></strong></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#f50057' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/home'><strong className="btn btn-outline-danger text-light">Home</strong></Nav.Link>
                        <Nav.Link as={Link} to="/projects"><strong className="btn btn-outline-danger text-light">Projects</strong></Nav.Link>
                        <Nav.Link href="#Services" as={Link} to="/blogs"><strong className="btn btn-outline-danger text-light">Blogs</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default INav;