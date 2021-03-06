import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Icon from '../../../images/coding (2).png'

const Appbar = () => {
    return (
        <div >
            <Navbar style={{ backgroundColor: "#050c1a", color: "white" }} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <img style={{ width: '50px' }} src={Icon} alt="" />
                <Navbar.Brand href="#home"><strong className="pl-1 h4">Mohammad <span style={{ color: '#f50057' }}>Eusha</span></strong></Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#f50057' }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto h5">
                        <Nav.Link href="#Home"><strong>Home</strong></Nav.Link>
                        <Nav.Link href="#About"><strong>About</strong></Nav.Link>
                        <Nav.Link href="#Skills"><strong>Skills</strong></Nav.Link>
                        <Nav.Link href="#Projects"><strong>Projects</strong></Nav.Link>
                        <Nav.Link href="#Blogs"><strong>Blogs</strong></Nav.Link>
                        <Nav.Link href="#Contact"><strong>Contact</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Appbar;