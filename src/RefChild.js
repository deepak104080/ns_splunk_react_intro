import React, {Component, forwardRef, useRef} from 'react';

const RefChild = (props, ref) => {
    const childLocalRef = useRef();
    const updateLocalRef = () => {
        childLocalRef.current.value = 'local input filed....';
        childLocalRef.current.style.color = 'blue';
    }
   
        return(
            <>
                <br></br><br></br>
                <input type="text" ref={ref} placeholder="" />
                
                <br></br><br></br>
                <br></br>
                <div>----Using useRef---------------</div>
                <button onClick={updateLocalRef}>Click here to send data to Ref Child.</button>
                <input type="text" ref={childLocalRef} placeholder="" />
                <br></br><br></br>

            </>
        )
}


export default forwardRef(RefChild);

