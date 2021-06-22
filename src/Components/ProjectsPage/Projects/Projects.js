import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Computer from '../Computer/Computer';
import Grocery from '../Grocery/Grocery';
import PNav from '../PNav/PNav';
import Restaurant from '../Restaurant/Restaurant';
import Soccer from '../Soccer/Soccer';
import Travel from '../Travel/Travel';

const Projects = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <div>
                <PNav></PNav>
            </div>
            <Row>
                <Col sm={12} md={12}>
                    <Computer></Computer>
                    <Grocery></Grocery>
                    <Restaurant></Restaurant>
                    <Travel></Travel>
                    <Soccer></Soccer>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;