import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from '../../../images/coding (2).png'

const PNav = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top" className="mb-5">
                <img className="w3-spin" style={{ width: '50px' }} src={Icon} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1">Mohammad <span style={{ color: '#f50057' }}>Eusha</span></strong></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#f50057' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/'><strong className="btn btn-outline-danger text-light">Home</strong></Nav.Link>

                        <Nav.Link as={Link} to='/myInfo'><strong className="btn btn-outline-danger text-light">About</strong></Nav.Link>

                        <Nav.Link href="#Computer"><strong className="btn btn-outline-danger text-light" >Computer Computer Garage</strong></Nav.Link>

                        <Nav.Link href="#Grocery"><strong className="btn btn-outline-danger text-light">Grocery Store</strong></Nav.Link>

                        <Nav.Link href="#Central"><strong className="btn btn-outline-danger text-light">Central City Travels</strong></Nav.Link>

                        <Nav.Link href="#Soccer" ><strong className="btn btn-outline-danger text-light">Soccer League</strong></Nav.Link>

                        <Nav.Link href="#Restaurant"><strong className="btn btn-outline-danger text-light">Epic Eateries</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default PNav;