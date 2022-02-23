import React, { useEffect, useState, useMemo, useCallback, useRef, useReducer } from 'react';
import HookCallBack from './HookCallBack';

const HookMemo = () => {
    const [toggle, setToggle] = useState(false);
    const [arr, setArr] = useState(['maruti', 'tata', 'honda', 'hyundai']);
    const [slogan, setSlogan] = useState('I work at NS.');

    const toggleFn = () => {
        setToggle(toggle => !toggle);
    }

    const displayCars = (data) => {
        //console.log('loop running again...');
            const newArr = data && data.map((item) => {
                return (
                    <div>{item}</div>
                );
            });
            return newArr;
    }

    const renderCars = useMemo(() => displayCars(arr), [arr]);

    const renderSlogan = useCallback((tempname) => {return 'Hi ! ' + tempname + slogan}, [slogan]);

    return(
        <>
            <button onClick={toggleFn}>Show/Hide</button>
            {toggle && <div>Show hide text</div>}
            <br></br>
            <br></br>
            {renderCars}
            <br></br>
            <br></br>
            <button onClick={() => setSlogan('I do not work here.')}>Update slogan.</button>
            <br></br>
            <HookCallBack tempData={renderSlogan}/>
            
        </>
    )
}

export default HookMemo;


// useEffect
// useState
// useContext

// useRef
// useReducer
// useMemo
// useCallback