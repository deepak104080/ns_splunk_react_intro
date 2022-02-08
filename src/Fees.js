import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';

const Fees = () => {

    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
                Course Fees
            </Col>
            </Row>
            <CompType type="functional"/>
        </>
    )
}

export default Fees;