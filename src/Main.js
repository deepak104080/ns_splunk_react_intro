import React from 'react';
import FunctionalComp from './FunctionalComp';
import ClassComp from './ClassComp';

const Main = (props) => {
    console.log('Inside main', props);
    return(
        <>
            <FunctionalComp/>
            <ClassComp />
        </>
    );
}

export default Main;