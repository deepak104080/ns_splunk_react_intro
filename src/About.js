import React, {Fragment, useState, createContext} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';
import Achild from './A';

const DataContext = createContext();

const About = () => {
    let name = 'Mr. ABC';
    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
                About Page - Implementation of Context to child elements
                
            </Col>
            <Col xs={12} className="bg-light">
                <DataContext.Provider value = {name}>
                    <Achild/>
                </DataContext.Provider>
            </Col>
            </Row>
            <CompType type="functional"/>
        </>
    )
}

export default About;
export {DataContext};