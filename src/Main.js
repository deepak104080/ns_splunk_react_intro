import React from 'react';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';
import ApiFunction from './ApiFunction';
import { Row, Col } from 'react-bootstrap';

const Main = (props) => {
    console.log('Inside main', props);
    return(
        <>
        <Row>
            <Col xs={4} className="bg-warning">
                <FunctionalComp/>
            </Col>
            <Col xs={4} className="bg-warning">
                <ClassComp />
            </Col>
            <Col xs={4} className="bg-warning">
                <ApiFunction />
            </Col>
        </Row>
        </>
    );
}

export default Main;