import { Button } from 'react-bootstrap';
import React, {Fragment, useState} from 'react';

const Childcircle = (props) => {
    const [radius, setRadius] = useState(0);
    const submitRadius = () => {
        setRadius(radius => radius +5);
        props.getRadius(radius); //passes old value as setRadius works in async mode.
    }
    return (
        <>
            <Button onClick={submitRadius}>Increase Radis by 5</Button>
        </>
    )
}

export default Childcircle;