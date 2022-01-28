import React, {Fragment, useState} from 'react';
import Childcircle from './Childcircle';

const Circle = () => {
    const printRadius = (newValue) => {
        console.log('New Radius from child', newValue);
    }
    return (
        <>
           <Childcircle getRadius={printRadius}/>
        </>
    )
}

export default Circle;