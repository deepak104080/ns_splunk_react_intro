import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';
import Bchild from './B';

const Achild = () => {

    return (
        <>
           <Row className="mx-2 my-2">
            <Col xs={12} className="bg-warning">
                Component A
                <Bchild/>
            </Col>
            </Row>
        </>
    )
}

export default Achild;