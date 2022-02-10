import React, {Fragment, useState, useContext, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';
import {DataAppContext} from './DataApp';

const Courses = () => {
    const tempVal = useContext(DataAppContext);
    console.log('... Courses Page ...');

    return (
        <>
           <Row>
           <br></br>
            <Col xs={12} className="bg-light">
                Course Fees
            </Col>
            <Col xs={12} className="bg-light justify-content-md-center">
                <div>Account Balance - {tempVal.accountbalance}</div>
                <button onClick={tempVal.updateBalance}>Increase balance by 1</button>
            </Col>
            </Row>
            <br></br>
            <CompType type="functional"/>
            
        </>
    )
}

export default Courses;