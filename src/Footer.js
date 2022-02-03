import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = (props) => {
    return(
        <Row className="bg-info">
            <Col xs={12}>
                <h6>Copyright - Newton School - Splunk - React</h6>
            </Col>
        </Row>
    );
}

export default Footer;