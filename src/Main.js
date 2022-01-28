import React from 'react';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import { Row, Col } from 'react-bootstrap';

const Main = (props) => {
    console.log('Inside main', props);
    return(
        <>
        <Row>
            <Col xs={6} className="bg-warning">
                <FunctionalComp/>
            </Col>
            <Col xs={6} className="bg-warning">
                <ClassComp />
            </Col>
        </Row>
        </>
    );
}

export default Main;