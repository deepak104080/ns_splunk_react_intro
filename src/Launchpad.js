import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';

const Launchpad = () => {

    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
            About Page - Launchpad
            </Col>
            </Row>
            <Row>
                <Col xs={12} className="bg-info border-bottom">
                    This is a functional component.
                </Col>
            </Row>
        </>
    )
}

export default Launchpad;