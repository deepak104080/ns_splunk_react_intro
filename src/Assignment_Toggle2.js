import React, {Fragment, useState} from 'react';
import { Button, Alert } from 'react-bootstrap';

const Assignment_Toggle2 = () => {
    //conditional rendering - ternary operator and && operator
    //Homework - Create Modal Implementation
    const [showFlag, setShowFlag] = useState(false);
    
    const showPara = () => {
        setShowFlag(showFlag => !showFlag);
    }

    return (
        <Fragment>
            <Button variant="primary" onClick={showPara}>Toggle Box using CSS Class</Button>
            <br></br>
            <br></br>
            <div className={showFlag ? 'redBox' : 'greenBox'} onClick={showPara}>text box</div>
        </Fragment>
    )
}

export default Assignment_Toggle2;