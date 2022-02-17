import React, {Fragment, useContext, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cchild from './C';
import {DataContext} from './About';

const Bchild = () => {
    const localData = useContext(DataContext);
    console.log('B comp', localData);
    return (
        <>
           <Row className="justify-content-md-center">
            <Col xs={8} className="bg-info mx-2 my-2">
                Component B
                <br></br>
                Welcome - {localData}
                <Cchild/>
            </Col>
            </Row>
        </>
    )
}

export default Bchild;