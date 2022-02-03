import React, {Fragment, useState} from 'react';
import './css/functional.css';
import image1 from './assets/ns.png';
import { Button, Alert } from 'react-bootstrap';
import Assignment_Toggle from './Assignment_Toggle';
import Assignment_Toggle2 from './Assignment_Toggle2';

const FunctionalComp = () => {
    const name = 'Deepak Kumar';
    const location = 'GGN';
    const job = 'IT';
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count => count+1);
    }

    const decreaseCount = () => {
        setCount(count => count-1);
    }

    const showPara = () => {

    }

    // const renderApiHtml = () => {
    //     let temp = 1;
    //     return (
    //         <div>{temp}</div>
    //     )
    // }
    //Hook - useState

    return (
        <Fragment>
            {/* <img src="https://d4nkomjewj4zw.cloudfront.net/product_logos/Newton_School.png" className="logo_image"/>
            <div className="course_header">Newton School - React Course</div>
            <img src={image1} className="logo_image" />
            <p className="trainer_header">{name + name} lives in {location} and works in {job}</p> */}

            
            {/* {renderApiHtml} */}

            {/* <Alert variant="danger" className="width-500">
                Red Alert...
            </Alert> */}

            <p>Functional Count = {count}</p>
            <Button variant="success" onClick={increaseCount}>Increase Count</Button>
            <button className="btn btn-warning" onClick={decreaseCount}>Decrease Count</button>
            <br></br>
            ----------------------------------
            <br></br>
            <br></br>
            <Assignment_Toggle/>
            <br></br>
            <br></br>
            <Assignment_Toggle2/>
            <br></br>
        </Fragment>
    )
}

export default FunctionalComp;