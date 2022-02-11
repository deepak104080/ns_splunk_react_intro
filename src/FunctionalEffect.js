import React, { useEffect, useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Functional_Api_Effect from './Functional_Api_Effect';
import CompType from './CompType';

const FunctionalEffect = (props) => {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(1);
    // const [ret, setRet] = useState(0);

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

    useEffect(() => {
        console.log('useEffect for unmount triggered initially...');
        let ret;
        ret = setInterval(function() {
            console.log('test123...');
        }, 2000);
        return()=> {
            console.log('Functional component unmounted...');
            clearInterval(ret);
        }
    }, []);

    // setTimeout - clearTimeout
    // setInterval - clearInterval

    const changeState = () => {
        setFlag(!flag);
    }
    const changeState2 = () => {
        setCount(count => count+1); //async mode
        // console.log(count); //old value
    }

    return (
        <>
            <Row>
                <Col>
                <br></br>
                    <Button variant="info" onClick={changeState}>Click here to set flag - Check Console</Button>
                </Col>
            </Row>
            <Row className="bg-warning">
                <Col>
                    <br></br>
                    <Button variant="success" onClick={changeState2}>Call Next Issues</Button>
                    <br></br>
                    <br></br>
                    <Functional_Api_Effect pageNum = {count}/>
                    <br></br>
                </Col>
            </Row>
            <CompType type="functional"/>
        </>
    )
}

export default FunctionalEffect;