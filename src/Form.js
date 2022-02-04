import React, {useState, useEffect} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

const FormReg = () => {
    const initialValues = {username: '', email: '', password: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [showmessage, setShowmessage] = useState(false);

    const handleChange = (e) => {
        //store input value in state variable
        //apply validation
        console.log('Inside Handle Change - ', e.target.name, e.target.value );
        let name = e.target.name;
        let value = e.target.value;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        //apply validation
        //submit/console the form
        e.preventDefault();
        setFormErrors(validate(formValues));
        // console.log('Inside Handle Submit - ', formValues);
        // setFormValues(initialValues);
        setShowmessage(true);
    }


    useEffect(() => {
        console.log('Inside use effect');
        if(Object.keys(formErrors).length == 0 && showmessage) {
            console.log('Inside Handle Submit - ', formValues);
            // fetch('url', 'POST', formValues);
            setFormValues(initialValues);
        }
    }, [formErrors])

    const validate = (formValues) => {
        const errors = {};
        if(!formValues.username) {
            errors.username = 'Username should not be blank';
        }
        if(!formValues.email) {
            errors.email = 'Email should not be blank';
        }
        if(!formValues.password) {
            errors.password = 'Password should not be blank.';
        }
        if(formValues.password && formValues.password.length < 5) {
            errors.password = 'Min length of password should be more than 5.';
        }
        return errors;

        //errors.username = 'Incorrect username';
    }

    return(
        <>
        <Row>
            {(Object.keys(formErrors).length == 0 && showmessage) && <h2>Form submitted successfully.</h2>}
            <Col xs={8} className="center">
                <br></br>
                <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={formValues.username} placeholder="Enter Username" onChange={handleChange} />
                    <div className="errorMessage">{formErrors.username}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={formValues.email} placeholder="Enter email" onChange={handleChange} />
                    <div className="errorMessage">{formErrors.email}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formValues.password} placeholder="Password" onChange={handleChange} />
                    <div className="errorMessage">{formErrors.password}</div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br></br>
            <br></br>
            </Col>
            </Row>
        </>
    );
}

export default FormReg;