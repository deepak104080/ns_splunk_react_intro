import React from 'react';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import ApiFunction from './ApiFunction';
import CompType from './CompType';
import { Row, Col } from 'react-bootstrap';

const Main = (props) => {
    console.log('Inside main', props);
    return(
        <>
        <Row>
            <Col xs={4} className="bg-light">
                <FunctionalComp/>
            </Col>
            <Col xs={4} className="bg-light border-end border-start">
                <ClassComp />
            </Col>
            <Col xs={4} className="bg-light">
                <ApiFunction />
            </Col>
        </Row>
        <CompType type="functional"/>
        </>
    );
}

export default Main;