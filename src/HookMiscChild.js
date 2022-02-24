import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const HookMiscChild = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log('Console in useEffect...');
    },[])

    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));

    
    return(
        <>
            <br></br>
            <br></br>
            <button>Toggle in imperative child</button>
            {toggle && <div>Show hide text in imperative child</div>}
            <br></br>
            <br></br>
            
        </>
    )
});

export default HookMiscChild;


// useEffect
// useState
// useContext

// useRef
// useReducer
// useMemo
// useCallback

//useLayoutEffect
//useImperativeHandle