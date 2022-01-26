import React, {Fragment} from 'react';
import './css/functional.css';
import image1 from './assets/ns.png';
import { Button, Alert } from 'react-bootstrap';

const FunctionalComp = () => {
    const name = 'Deepak Kumar';
    const location = 'GGN';
    const job = 'IT';

    return (
        <Fragment>
            <img src="https://d4nkomjewj4zw.cloudfront.net/product_logos/Newton_School.png" className="logo_image"/>
            <div className="course_header">Newton School - React Course</div>
            <img src={image1} className="logo_image" />
            <p className="trainer_header">{name + name} lives in {location} and works in {job}</p>

            <Button variant="success">Click here</Button>
            <button className="btn btn-primary">Clik here for normal button</button>

            <Alert variant="danger" className="width-500">
                Red Alert...
            </Alert>
        </Fragment>
    )
}

export default FunctionalComp;