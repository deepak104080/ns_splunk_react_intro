import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';

const Launchpad = () => {

    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
            About Page - Launchpad
            </Col>
            </Row>
            <CompType type="functional"/>
        </>
    )
}

export default Launchpad;