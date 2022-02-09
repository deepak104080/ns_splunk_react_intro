import React, {Fragment, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import CompType from './CompType';
import {DataContext} from './About';

const Cchild = () => {

    return (
        <>
           <Row className="mx-2 my-2 bg-warning">
            {/* <Col xs={6} className="bg-success">
                Welcome - 
            </Col> */}

            <DataContext.Consumer>
                {
                    (temp) => {
                        // console.log('Inside C comp - ', temp);
                        return <div>Component C - Welcome - {temp}</div>
                    }
                }
            </DataContext.Consumer>



            </Row>
        </>
    )
}

export default Cchild;



// hoc - function
// inputcoponet - functional/class
// outputcomp - class


// provider - class/functional
// consumer - class/functional
// useContext