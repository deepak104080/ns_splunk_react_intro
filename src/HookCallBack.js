import React, { useEffect } from 'react';


const HookCallBack = ({tempData}) => {
    useEffect(() => {
        console.log('child component re-rendered.....');
    },[tempData])
    return(
        <>{tempData('Deepak')}</>
    )
}

export default HookCallBack;