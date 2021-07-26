import React from 'react';
import { Col, Row } from 'react-bootstrap';
import blog from '../../../images/BlogWebsite.png'


const Blog = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }} id="blog" className="p-5 mt-5  m-5 pt-5 text-light">
            <h1 style={{ color: "#f50057", paddingTop: '100px' }} className="text-center mb-5 pb-5">Retro Tech Blog Details</h1>
            <Row >
                <Col xs={12} md={6}>
                    <h1 style={{ color: "#f50057" }}>Retro Tech Blog</h1>
                    <p>This is a blog website which is about Retro Tech. If you want to read blogs about retro tech at first you will have to sign up. You can sign up with your google account also. After signing up please scroll down.Then you will find some cards which is about retro tech blog. On every card yo will find blog title and some content of the blog. If you find any blog interesting and want to read the full blog then you have to click on the card. Then it will take you to the full blog..</p>
                    <h2 style={{ color: "#f50057" }}>Features</h2>
                    <ul>
                        <li> Google Sign-In</li>
                        <li>Email Password Sign In</li>
                        <li>Customer Interface</li>
                        <li> Admin Interface</li>
                        <li>Blog Add System</li>
                        <li>Blog Manage System</li>
                        <li>Admin Add System</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}>Technology</h2>
                    <ul>
                        <li>Frontend : CSS, JavaScript, React JS</li>
                        <li> Backend : NodeJS, Express, Postman, Mongo DB.</li>
                        <li>Deploy Tools : Firebase, Heroku, Github.</li>
                    </ul>
                    <h2 style={{ color: "#f50057" }}>Frameworks</h2>
                    <ul>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col xs={12} md={6} >
                    <img className="img-fluid" src={blog} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Blog;