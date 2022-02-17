import React, {Fragment, useState, createContext, useContext, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './../../CompType';
import Achild from './A';
import {DataAppContext} from './../../DataApp';
import {useParams} from 'react-router-dom';

const DataContext = createContext();

const About = () => {
    const tempVal = useContext(DataAppContext);
    let name = 'Mr. ABC';
    console.log('... About Page...');
    let param = useParams();
    console.log('param - ', param);
    return (
        <>
           <Row>
            <Col xs={12} className="bg-light">
                <div>About Page - Implementation of Context to child elements</div>
                <div>Account Balance - {tempVal.accountbalance}</div>
                <button onClick={tempVal.updateBalance}>Increase balance by 1</button>
                
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