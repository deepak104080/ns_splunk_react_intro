import React, {Fragment, useState} from 'react';
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
           <Childcircle1 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle2 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle3 radiusVal={radius} getRadius={printRadius}/>
           <Childcircle4 radiusVal={radius} getRadius={printRadius}/>
        </>
    )
}

export default Circle_Lift_State;