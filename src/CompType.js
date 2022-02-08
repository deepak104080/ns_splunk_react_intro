import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CompType = (props) => {
    return (
        <Row>
            <Col xs={12} className="bg-info border-bottom">
                This is a {' '}
                {props.type === 'functional' ? 'functional' : 'class'}
                {' '}component
            </Col>
        </Row>
    )
}

export default CompType;