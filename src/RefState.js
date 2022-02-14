import React, {useEffect, useRef, useState} from 'react';

const RefState = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    // const childLocalRef = useRef();
    // const updateLocalRef = () => {
    //     childLocalRef.current.value = 'local input filed....';
    //     childLocalRef.current.style.color = 'blue';
    // }

    const changeHandler =(e) => {
        console.log(e.target.value);
        setName(e.target.value);
        
    }

    useEffect(() => {
        //setCount(count => count +1);
        countRef.current = countRef.current + 1;
        console.log('...rendered once...');
    })
   
        return(
            <>
                
                <br></br><br></br>
                <div>------------------</div>
                <input type="text" value={name} onChange={changeHandler} />
                <button>Submit Data</button>
                <br></br>
                <div>Total Events Triggered / Total Character Count - {countRef.current}</div>


                <div>------------------</div>               

                <br></br><br></br>

            </>
        )
}


export default RefState;

