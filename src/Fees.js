import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';

const Fees = () => {

    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
                Course Fees
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

export default Fees;