import React, { useEffect, useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Functional_Api_Effect from './Functional_Api_Effect';

const FunctionalEffect = (props) => {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('useEffect triggered...');
    });

    useEffect(() => {
        console.log('useEffect triggered first time...');
    }, []);

    useEffect(() => {
        console.log('useEffect triggered for flag and count');
    }, [flag, count]);

    useEffect(() => {
        console.log('useEffect triggered for flag');
    }, [flag]);

    useEffect(() => {
        console.log('useEffect triggered for count');
    }, [count]);

    const changeState = () => {
        setFlag(!flag);
    }
    const changeState2 = () => {
        setCount(count => count+1);
    }

    return (
        <>
            <Row>
                <Col>
                <br></br>
                    <Button variant="info" onClick={changeState}>Click here to set flag - Check Console</Button>
                    <br></br>
                    <br></br>
                    <Button variant="success" onClick={changeState2}>Call Next Issues</Button>
                    <br></br>
                    <br></br>
                    <Functional_Api_Effect pageNum = {count}/>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col>
                    This is a functional component.
                </Col>
            </Row>
        </>
    )
}

export default FunctionalEffect;