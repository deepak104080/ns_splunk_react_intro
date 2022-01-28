import { Button } from 'react-bootstrap';
import React, {Fragment, useState} from 'react';

const Childcircle4 = (props) => {
    const { radiusVal } = props;
    const submitRadius = () => {
        props.getRadius(5);
    }
    return (
        <>
            <Button onClick={submitRadius}>Increase Radius by 5</Button>
            <p>Area = {radiusVal * radiusVal}</p>
        </>
    )
}

export default Childcircle4;