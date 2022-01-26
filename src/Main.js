import React from 'react';
import FunctionalComp from './FunctionalComp';


const Main = (props) => {
    console.log('Inside main', props);
    return(
        <FunctionalComp/>
    );
}

export default Main;