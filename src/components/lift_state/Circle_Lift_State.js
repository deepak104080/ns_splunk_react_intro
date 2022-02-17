import React, {Fragment, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Childcircle1 from './Childcircle1';
import Childcircle2 from './Childcircle2';
import Childcircle3 from './Childcircle3';
import Childcircle4 from './Childcircle4';

const Circle_Lift_State = () => {
    const [radius, setRadius] = useState(0);
    const printRadius = (newValue) => {
        console.log('New Radius from child', newValue);
        setRadius(radius => radius + newValue);
    }
    return (
        <>
        <Row>
                <Col xs={12} className="bg-info">
           <Childcircle1 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle2 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle3 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle4 radiusVal={radius} getRadius={printRadius}/>
           </Col>
        </Row>
        </>
    )
}

export default Circle_Lift_State;