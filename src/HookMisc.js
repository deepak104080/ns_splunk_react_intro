import React, { useEffect, useLayoutEffect, useRef } from 'react';
import HookMiscChild from './HookMiscChild';

const HookMisc = () => {

    useEffect(() => {
        console.log('Console in useEffect...');
    },[])

    useLayoutEffect(() => {
        console.log('Console in useLayoutEffect...');
    },[])

    const buttonRef = useRef(null);

    
    return(
        <>
            <br></br>
            <button onClick="">Show/Hide</button>
            {<div>Show hide text</div>}
            <br></br>
            <br></br>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button for Imperative handle</button>
            <HookMiscChild ref={buttonRef}/>
        </>
    )
}

export default HookMisc;


// useEffect
// useState
// useContext

// useRef
// useReducer
// useMemo
// useCallback

//useLayoutEffect
//useImperativeHandle